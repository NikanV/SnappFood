import { SNAPPFOOD_CAPTCHA } from '~/utils/endpoints/panel'
import { FALLBACK_CAPTCHA, supportedCaptcha } from '~/utils/configuration'
import { SELECT_CAPTCHA } from '~/utils/endpoints'
import { intersectArrays } from '~/utils/general'
import { isPWAMode } from '~/plugins/pwa'

export const state = () => ({
    initializedSuccessfully: false,
    // currenciesOptions: null, // use panel/currenciesOptions until we migrate to the new API
    acceptableCaptchaTypes: [],
    activeCaptchaTypes: [],
    captchaType: null,
    persianDigits: false,
    tickerBarConfig: {
        type: 'topGainers',
        isEnabled: true,
        showSymbols: false,
        showPrice: true,
        showChanges: true
    },
    exchangeLayoutType: 'pro',
    storageSet: false
})

export const mutations = {
    setAppInitializationStatus(state, status) {
        state.initializedSuccessfully = status
    },

    setStorageSetStatus(state, status) {
        state.storageSet = status
    },

    setCaptchaTypes(state, typesList) {
        state.acceptableCaptchaTypes = typesList || []
        if (Array.isArray(typesList) && typesList.length > 0) {
            state.activeCaptchaTypes = intersectArrays(typesList, supportedCaptcha)
        } else {
            state.activeCaptchaTypes = [FALLBACK_CAPTCHA]
        }

        // sets captcha type to user's preferred one if it is acceptable by server
        const userPreferredCaptcha = this.$storage.getItem('preferred-captcha')
        const index = state.activeCaptchaTypes.indexOf(userPreferredCaptcha)
        if (index > 0) {
            state.activeCaptchaTypes.splice(index, 1)
            state.activeCaptchaTypes.unshift(userPreferredCaptcha)
        }

        state.captchaType = state.activeCaptchaTypes[0] || FALLBACK_CAPTCHA
    },

    switchCaptchaType(state, { type, save = false } = {}) {
        if (type && state.activeCaptchaTypes.includes(type)) {
            state.captchaType = type
        } else {
            const next = (state.activeCaptchaTypes.indexOf(state.captchaType) + 1) % state.activeCaptchaTypes.length
            state.captchaType = state.activeCaptchaTypes[next]
        }

        if (save) {
            this.$storage.setItem('preferred-captcha', state.captchaType)

            if (state.acceptableCaptchaTypes?.[0] === this.$storage.getItem('preferred-captcha')) {
                this.$storage.removeItem('preferred-captcha')
            }
        }
    },

    removeCaptchaType(state, type) {
        const index = state.activeCaptchaTypes.indexOf(type)
        if (index >= 0 && state.activeCaptchaTypes.length > 1) {
            state.activeCaptchaTypes.splice(index, 1)
        }
    },

    changeTickerBarConfig(state, newConfig) {
        try {
            let config = { ...state.tickerBarConfig }
            let newObject = {}
            if (typeof newConfig === 'string') {
                const obj = JSON.parse(newConfig)
                Object.keys(obj).forEach((key) => {
                    if (['true', 'false'].includes(obj[key])) {
                        obj[key] = obj[key] === 'true'
                    }
                })
                newObject = obj
            } else {
                newObject = newConfig
            }
            config = { ...config, ...newObject }
            state.tickerBarConfig = config
            this.$storage.setItem('ticker-bar-config', JSON.stringify(config))
        } catch {
        }
    }
}

export const getters = {
    isPwaMode() {
        return isPWAMode
    }
}

export const actions = {
    setLocalStorageValues({ commit }) {
        if (process.server) return
        if (!this.$storage.isAvailable()) {
            commit('notification/show', {
                type: 'warning',
                classes: ['fs-10', 'fs-12-md'],
                content: msgTranslations.localStorageUnavailable
            }, { root: true })
            return
        }

        commit('changePersianDigitsStatus', this.$storage.getItem('persian-digits'))
        commit('changeTickerBarConfig', this.$storage.getItem('ticker-bar-config'))
        commit('changeExchangeLayoutType', this.$storage.getItem('exchange-layout-type') || 'pro')
        commit('panel/changeTheme', this.$storage.getItem('theme') || 'dark', { root: true })
        // append your local storage values here ⬇️⬇️⬇️

        commit('setStorageSetStatus', true)
    },

    getAcceptableCaptchaTypes({ commit }) {
        return this.$axios.$post(SELECT_CAPTCHA, { device: this.$storage.getItem('device') })
            .then(({ status, acceptableTypes }) => {
                if (status === 'ok') {
                    commit('setCaptchaTypes', acceptableTypes)
                    return true
                }
                throw new Error('Failed to get acceptable captcha types')
            })
            .catch(() => {
                commit('setCaptchaTypes') // set fallback captcha
                return false
            })
    },

    requestCaptcha() {
        return this.$axios.$get(SNAPPFOOD_CAPTCHA).then(({ status, captcha }) => {
            if (status === 'ok' && captcha?.key && captcha?.image_url) { return captcha }
            throw new Error('Fetch Snappfood Captcha Failed')
        })
    },

    clearCache() {
        try {
            localStorage.clear()
            sessionStorage.clear()
            caches.keys().then((keys) => {
                keys.forEach(key => caches.delete(key))
            })
            document.cookie.split(';').forEach((c) => {
                document.cookie = c.replace(/^ +/, '').replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/')
            })
            window.location = '/'
            return true
        } catch (error) {
            return false
        }
    }
}
