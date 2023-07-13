import Vue from 'vue'
import Queries from '~/utilities/query/Queries'
import Storage from '~/utilities/query/Storage'
import { defaultOptions, isPromise, isBrowser } from '~/utilities/query/utils'

export default class Query {
    #queries
    #retryStorage
    #refetchStorage

    /**
     * @param {Object} [options]
     * @param {Number} [options.staleTime]
     * @param {Boolean} [options.force]
     * @param {Boolean} [options.hardForce]
     * @param {Boolean | Number | Function} [options.retry]
     * @param {Number | Function} [options.retryDelay]
     * @param {Boolean} [options.distinctRetry]
     * @param {Boolean | Function} [options.deactivate]
     * @param {Boolean} [options.deactivateOnWindowHidden]
     * @param {Boolean} [options.refetchOnWindowFocus]
     */
    constructor(options = {}) {
        this.options = {
            ...defaultOptions,
            ...options
        }

        this.#queries = new Queries()
        this.#retryStorage = new Storage('map')
        this.#refetchStorage = new Storage('set')
        this.#registerListeners()
    }

    /**
     * @function useQuery
     * @param {String, Array, Object} queryKey
     * @param {Function} queryFn
     * @param {Object} [options]
     * @param {Number} [options.staleTime]
     * @param {Boolean} [options.force]
     * @param {Boolean} [options.hardForce]
     * @param {Boolean | Number | Function} [options.retry]
     * @param {Number | Function} [options.retryDelay]
     * @param {Boolean} [options.distinctRetry]
     * @param {Boolean | Function} [options.deactivate]
     * @param {Boolean} [options.deactivateOnWindowHidden]
     * @param {Boolean} [options.refetchOnWindowFocus]
     * @return {Promise}
     */
    useQuery (queryKey, queryFn, options = {}) {
        if (!queryKey || typeof queryFn !== 'function') {
            throw new Error('useQuery requires a query key and a query function.')
        }

        queryKey = Query.#deriveKey(queryKey)

        options = {
            ...this.options,
            ...options
        }

        this.#queries[queryKey] = {
            queryFn,
            options
        }

        const query = this.#queries[queryKey]

        const granted = this.#approveCall(query)

        if (granted) {
            query.promise = query.queryFn()

            if (!isPromise(query.promise)) {
                throw new Error('Query function must return a promise.')
            }

            const { isFetched, isFailed } = query
            const isInitialFetch = !isFetched && !isFailed
            Query.#setStatus(query, isInitialFetch ? 'loading' : 'fetching')

            return query.promise
                .then((result) => {
                    Query.#setStatus(query, 'fulfilled')
                    return result
                })
                .catch((error) => {
                    if (Query.#retryAllowed(query, error)) {
                        Query.#setStatus(query, 'retrying')

                        if (query.options.distinctRetry) {
                            const timerId = setTimeout(
                                () => {
                                    Query.#setStatus(query, 'retried')
                                    return this.useQuery(...arguments)
                                },
                                Query.#calcRetryDelay(query, error)
                            )

                            this.#retryStorage.add(queryKey, timerId)
                        } else {
                            return new Promise((resolve) => {
                                const timerId = setTimeout(
                                    () => {
                                        Query.#setStatus(query, 'retried')
                                        resolve(this.useQuery(...arguments))
                                    },
                                    Query.#calcRetryDelay(query, error)
                                )

                                this.#retryStorage.add(queryKey, timerId)
                            })
                        }
                    }

                    Query.#setStatus(query, 'failed')

                    throw error
                })
        }

        return query.promise
    }

    /**
     * @function getQuery
     * @param {String, Array, Object} queryKey
     * @return {Object}
     */
    getQuery (queryKey) {
        if (!queryKey) {
            throw new Error('getQuery requires a queryKey.')
        }

        queryKey = Query.#deriveKey(queryKey)

        return Vue.observable(this.#queries[queryKey])
    }

    /**
     * @function getQueries
     * @return {Array}
     */
    getQueries () {
        return Object.entries(this.#queries)
    }

    /**
     * @function cancelQueryRetry
     * @param {String, Array, Object} queryKey
     */
    cancelQueryRetry (queryKey) {
        if (!queryKey) {
            throw new Error('cancelQueryRetry requires a queryKey.')
        }

        queryKey = Query.#deriveKey(queryKey)
        const query = this.#queries[queryKey]
        if (query.isRetrying) {
            Query.#setStatus(query, 'failed')
        }
        clearTimeout(this.#retryStorage.getAndDelete(queryKey))
    }

    #approveCall(query) {
        const { force: isForce, hardForce: isHardForce } = query.options

        if (isHardForce) return true

        const now = new Date()
        const { isIdle, isFetched, fetchedAt, isFailed, isRetrying } = query
        const isStale = now - fetchedAt > query.options.staleTime

        const conditions = [
            (isIdle || isRetrying),
            (isStale || isForce || isFailed || !isFetched),
            !Query.#isDeactivate(query.options.deactivate),
            this.#authorizeOnWindowHidden(query)
        ]

        return conditions.every(Boolean)
    }

    #authorizeOnWindowHidden(query) {
        if (!isBrowser()) {
            return true
        }

        const { deactivateOnWindowHidden, hardForce, refetchOnWindowFocus } = query.options
        const isAuthorized = !(deactivateOnWindowHidden && document.visibilityState === 'hidden')

        if (!(isAuthorized || hardForce || !refetchOnWindowFocus)) {
            this.#refetchStorage.add(query)
        }

        return isAuthorized
    }

    #registerListeners() {
        if (isBrowser()) {
            window.document.addEventListener('visibilitychange', handleVisibilityChange)
        }

        const that = this
        function handleVisibilityChange(event) {
            if (event.target.visibilityState === 'visible') {
                that.#refetchStorage
                    .forEach(query => that.useQuery(query.queryKey, query.queryFn, query.options))

                that.#refetchStorage.clear()
            }
        }
    }

    static #deriveKey(rawKey) {
        return serializeKey(rawKey)
        function serializeKey(key) {
            try {
                if (typeof key === 'string') {
                    return key
                }

                if (typeof key === 'number') {
                    return key.toString()
                }

                if (Array.isArray(key)) {
                    return key.map(serializeKey).join(',')
                }

                if (typeof key === 'object' && key !== null) {
                    return Object.keys(key)
                        .sort()
                        .map(k => `${k}:${serializeKey(key[k])}`)
                        .join(',')
                }

                return key
            } catch (error) {
                throw new Error('Query key must be serializable.')
            }
        }
    }

    static #retryAllowed(query, error) {
        if (typeof query.options.retry === 'boolean') {
            return query.options.retry
        }

        if (Number.isInteger(query.options.retry)) {
            return query.retries < query.options.retry
        }

        try {
            return query.options.retry(query.retries, error)
        } catch (error) {
            throw new Error('retry option must be a boolean or an integer or a function that returns a boolean.')
        }
    }

    static #calcRetryDelay(query, error) {
        if (typeof query.options.retryDelay === 'number') {
            return query.options.retryDelay
        }

        try {
            return query.options.retryDelay(query.retries, error)
        } catch (error) {
            throw new Error('retryDelay option must be a number or a function that returns a number.')
        }
    }

    static #setStatus (query, status) {
        return {
            loading(query) {
                query.isLoading = true
                query.isFetching = true
                query.isIdle = false
            },
            fetching(query) {
                query.isFetching = true
                query.isIdle = false
            },
            retrying(query) {
                query.isRetrying = true
                query.isIdle = false
            },
            fulfilled(query) {
                query.isLoading = false
                query.isFetching = false
                query.isRetrying = false
                query.isIdle = true
                query.isFetched = true
                query.isFailed = false
                query.fetchedAt = new Date()
                query.retries = 0
            },
            failed(query) {
                query.isLoading = false
                query.isFetching = false
                query.isRetrying = false
                query.isIdle = true
                query.isFailed = true
                query.failedAt = new Date()
            },
            retried(query) {
                query.retries += 1
            }
        }[status](query)
    }

    static #isDeactivate(val) {
        if (typeof val === 'boolean') {
            return val
        }

        try {
            return val()
        } catch (error) {
            throw new Error('deactivate option must be a boolean or a function that returns a boolean.')
        }
    }
}
