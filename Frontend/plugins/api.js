const CANCELLATION_MSG = 'Redundant Request Canceled.'

export default function ({ $axios, store, redirect, app, $storage }, inject) {
    const axiosInstance = $axios.create({
        headers: {
            common: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        }
    })

    axiosInstance.onError((error) => {
        const code = parseInt(error.response && error.response.status)
        if (code === 401) { // Unauthorized User
            delete axiosInstance.defaults.headers.common.Authorization
            store.commit('users/setUserToken', null) // isLoggedIn = false

            const endpoint = error.response.config?.url

            // approach. todo: token management must be reimplemented
            const siteSideEndpoints = ['notifications/list']
            const isSiteSide = siteSideEndpoints.some(item => endpoint?.includes(item))

            if (endpoint?.includes('logout')) {
                redirect('/')
            } else if (isSiteSide) {
                store.commit('notification/show', {
                    content: app.i18n.t('user.pleaseLoginAgain'),
                    type: 'general',
                    dismissible: true,
                    timeout: 5000
                })
            } else { // todo: check. this prevents auth.js normal behaviour
                redirect('/login')
            }
        }
        if (code === 409 && error.response?.data?.message) {
            store.commit('notification/show', {
                content: error.response.data.message,
                type: 'danger',
                dismissible: true,
                timeout: 5000
            })
        }
        // if (code === 429) { // Rate Limit Error
        //   store.commit('notification/show', {
        //     content: app.i18n.t('panel.rateLimitError'),
        //     type: 'danger',
        //     dismissible: true,
        //     timeout: 5000
        //   })
        // }
        const message = error.response?.data?.message
        if (code === 400 && message?.length > 0) {
            store.commit('notification/show', {
                content: message,
                type: 'danger',
                dismissible: true,
                timeout: 5000
            })
        }
    })

    axiosInstance.interceptors.request.use(async function (config) {
        const token = $storage.getItem('token')
        config.headers.Authorization = token ? `Token ${token}` : null

        // bypass cache mechanism and for backward compatibility
        if (typeof config.url === 'string') { return config }

        try {
            const endpointConfig = config.url
            config.url = endpointConfig.baseURL + endpointConfig.path
            endpointConfig.forceUpdate = config.forceUpdate

            const callGranted = await store.dispatch('apis/newRequest', endpointConfig)
            return {
                ...config,
                cancelToken: callGranted ? null : new $axios.CancelToken(cancel => cancel(CANCELLATION_MSG))
            }
        } catch (e) {
            // endpoint config evaluation failed. abort cache mechanism.
            return config
        }
    })

    axiosInstance.interceptors.response.use(
        function (response) {
            const successfulStatuses = ['ok', 'success', 'successful']
            try {
                const { pathname, search } = new URL(response.config.url)
                const cacheKey = pathname + search
                successfulStatuses.includes(response.data?.status)
                    ? store.commit('apis/setFulfilled', cacheKey)
                    : store.commit('apis/setFailed', cacheKey)
            } catch (e) {

            }
            return response
        },
        function (error) {
            // stop error propagation on canceled redundant request
            if ($axios.isCancel(error) && error.message === CANCELLATION_MSG) {
                return false
            }

            try {
                const { pathname, search } = new URL(error.config.url)
                const cacheKey = pathname + search
                store.commit('apis/setFailed', cacheKey)
            } catch (e) {

            }

            return Promise.reject(error)
        }
    )

    inject('api', axiosInstance)
}
