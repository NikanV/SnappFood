export default class Queries {
    static #QUERY_INIT = {
        queryKey: null,
        queryFn: null,
        promise: null,
        options: {},
        isLoading: false,
        isFetching: false,
        isRetrying: false,
        isIdle: true,
        isFetched: false,
        isFailed: false,
        fetchedAt: null,
        failedAt: null,
        retries: 0
    }

    #queries

    constructor() {
        this.#queries = {}

        return new Proxy(this.#queries, {

            get(target, key, receiver) {
                if (!target[key]) {
                    target[key] = {
                        ...Queries.#QUERY_INIT,
                        queryKey: key
                    }

                    return target[key]
                }

                return Reflect.get(...arguments)
            },

            set(target, key, value) {
                const selectedQuery = target[key]
                if (selectedQuery) {
                    selectedQuery.queryFn = value.queryFn
                    selectedQuery.options = value.options
                } else {
                    target[key] = {
                        ...Queries.#QUERY_INIT,
                        queryKey: key,
                        queryFn: value.queryFn,
                        options: value.options
                    }
                }
                return true
            }
        })
    }
}
