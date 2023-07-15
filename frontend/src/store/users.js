import {storage} from "@/utils/storage";
import routers from "@/plugins/routers";

export const getters = {

    userSocialLoginEnabled(state) {
        return state.userProfile.options.socialLoginEnabled
    },
    isLoggedIn: (state) => {
        return state.user.loggedIn
    },
    userToken: (state) => {
        return state.user.token
    },
    userName: (state) => {
        return state.user.name
    },
    getSession(state) {
        return key => (state.session[key])
    },
    hasToken() {
        const token = process.server ? null : storage.getItem('token')
        return !!token
    },
    latestUserLogin(state) {
        return state.userLoginAttempts.find(attempt => attempt.status === 'Successful')
    },

}

export const mutations = {
    setUserData(state, data) {
        state.user.name = `${data.first_name} ${data.last_name}`
        state.user.username = state.user.email = data.username
    },
    setUserToken(state, token) {
        this.$storage.setItem('token', token || '')
        state.user.token = token
        state.user.loggedIn = Boolean(token)
        if (!token) {
            this.$webengage.storeUserId(null)
        }
    },
    setUserAttempts(state, attempts) {
        state.userLoginAttempts = attempts || []
    },
    setActiveSessions(state, devices) {
        state.userActiveSessions = devices || []
    },

}

export const state = () => ({
    user: {
        loggedIn: false,
        token: null,
        username: '',
    },
    cart: {},
    userLoginAttempts: [],
    userActiveSessions: [],
    userProfile: {
        level: 0, isWalletHidden: !process.server ? storage.getItem('isWalletHidden') === 'true' : false,
        pendingVerifications: {},
        verifications: {},
        bankAccounts: [],
        bankCards: [],
        chatId: '',
        options:{
            socialLoginEnabled: false,
        }
    },
    userDataFetched: false,
    userPortfolio: {
        status: null,
        dailyProfit: null,
        dailyTotalProfit: null,
        lastMonthTotalProfit: null
    },

    fcmToken: null,
    favoriteRestaurants: []
})


export const actions = {
    userLogin({commit, dispatch}, {endpoint, payload, headers,port}) {
        return this.$axios.$post(endpoint, payload, {headers})
            .then((res) => {
                if (res.key) {
                    // Uncomment to active 2Percent
                    // // check whether user is in targeted users or not
                    // if (res.we_id) { await this.$webengage.isTargetedForNewPanel(res.we_id) }
                    commit('setUserToken', res.key)
                    return {
                        successful: true
                    }
                } else {
                    return {
                        successful: false,
                        error: 'loginFailed',
                        message: res.message
                    }
                }
            }).then((res) => {
                return dispatch('refreshAllUserData', true).then(() => res)
            })
            .catch((error) => {
                return {
                    isCaught: true,
                    error
                }
            })
    },
    registerUser({commit, dispatch}, {username, password, captchaData, port}) {
        const additionalData = {}
        if (username.includes('@')) additionalData.email = username
        else additionalData.mobile = username

        return this.$axios.$post(`http://localhost:${port}/signup`, {
            username,
            password1: password,
            password2: password,
            ...captchaData,
            ...additionalData
        }).then((response) => {
            const {key: token, code, message} = response || {}
            if (token) {
                commit('setUserToken', token)
                // todo: fetch user-data
                return {
                    successful: true
                }
            } else {
                return {
                    successful: false,
                    error: code === 'IncompleteRegisterError' ? code : 'RegistrationFailed',
                    message
                }
            }
        }).then((res) => {
            return res.successful ? dispatch('refreshAllUserData', true).then(() => res) : res
        }).catch((error) => {
            const {status: errorCode, data: errorData} = error.response || {}
            const errorMsg =
                {
                    403: 'pleaseTryLater',
                    405: 'pleaseTryAgain',
                    500: 'serverError'
                }[errorCode]

            let errors = null
            if (typeof errorData === 'object') {
                // email and username are the same, but in backend they are regarded as two different fields
                // it is deleted to prevent redundant errors
                if (errorData.email && errorData.username) {
                    delete errorData.email
                }
                errors = Object.keys(errorData).map(field => errorData[field][0])
            }

            return {
                successful: false,
                error: errorMsg || 'RegistrationFailed',
                errors
            }
        })
    },
    logoutUser({ commit, dispatch,port }) {
        return this.$api.$post(`http://localhost:${port}/`, null)
            .then(() => {
                return {
                    successful: true
                }
            }).catch((error) => {
                return {
                    successful: false,
                    error: error.message || error[0]
                }
            })
            .finally(() => {
                dispatch('afterLogoutCleanup')
            })
    },
    afterLogoutCleanup({ commit }) {
        commit('setUserToken', null)
        this.$storage.setItem('username', null)
        this.$storage.setItem('nx_uid', null)

        Object.keys(sessionStorage)
            .filter(key => key.toString().endsWith(':rialBalance'))
            .forEach(key => this.$storage.session.removeItem(key))
    },
    setUsernameToLocalStorage(content, username) {
        this.$storage.setItem('username', username)
    },
    editProfile({ getters, commit, dispatch,port }) {
        // todo: fix and change
        return this.$api.$post(`https://localhost:${port}/profile/settings`, {
            socialLoginEnabled: !getters.userSocialLoginEnabled
        })
            .then((res) => {
                if (res.status === 'ok') {
                    commit('setSocialLoginEnabled', !getters.userSocialLoginEnabled)
                    dispatch('refreshAllUserData', true)
                    return {
                        successful: true
                    }
                } else {
                    return {
                        successful: false,
                        error: res.message || res[0]
                    }
                }
            })
            .catch((error) => {
                return {
                    successful: false,
                    error: error.message || error[0]
                }
            })
    },

    changePassword(context, { port, currentPassword, newPassword, newPasswordConfirm }) {
        return this.$api.$post(`http://localhost:${port}/change-password`, {
            currentPassword, newPassword, newPasswordConfirm
        }).then(({ status, code }) => {
            if (status === 'ok') {
                return {
                    successful: true
                }
            } else {
                return {
                    successful: false,
                    error: code === 'InvalidPassword' ? 'InvalidPassword' : 'UnknownError'
                }
            }
        })
    },
}