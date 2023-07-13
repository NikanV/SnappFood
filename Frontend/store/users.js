import {
    AUTHENTICATION_USER,
    USER_PROFILE,
    USER_LOGOUT,
    DEPOSIT_SHETAB,
    USER_FEATURE_REQUEST_STATUS,
    NOTIFICATIONS_READ,
    ACTIVATE_TRADE_PLAN,
    DEACTIVATE_TRADE_PLAN,
    USERS_TFA_REQUEST,
    USERS_TFA_CONFIRM,
    ANNOUNCEMENT_LIST,
    ADD_CARD,
    ADD_SHEBA,
    DELETE_CARD,
    DELETE_SHEBA,
    SECURITY_EMERGENCY_ACTIVATE,
    SECURITY_EMERGENCY_GET_CODE,
    REFERRAL_STATUS,
    REFERRAL_LINKS_LIST,
    ADD_REFERRAL_LINK,
    SET_REFERRER,
    USER_TFA_DEACTIVATION,
    EDIT_PROFILE,
    DEPOSIT_BANK,
    TERMINATE_SESSION,
    TERMINATE_ALL_SESSION,
    ANTI_PHISHING_CODE,
    FAVORITE_RESTAURANT,
    OTP_REQUEST,
    VERIFY_MOBILE,
    NOTIFICATIONS_LIST
} from '~/utils/endpoints/panel'
import {
    LAST_WEEK_DAILY_PROFIT,
    LAST_WEEK_DAILY_TOTAL_PROFIT,
    USER_LOGIN_ATTEMPTS,
    ACTIVE_SESSIONS,
    USER_LIMITATIONS,
    NOTICES_LIST,
    NOTICES_TAGS_LIST
} from '~/utils/endpoints/config'
import {USER_REGISTRATION, CHANGE_PASSWORD} from '~/utils/endpoints'
import {storage} from '~/scripts/Storage'
import {maskEmail, maskMobile} from '~/utils/getMask'
import {Dec} from '~/scripts/Dec'
import {reshapeWallets} from '~/utils/user/general'
import {SECOND} from '~/utils/constants'
import {q} from '~/utils/query'

export const state = () => ({
    user: {
        loggedIn: false,
        token: null,
        username: '',
        email: '',
        name: '',
        options: {
            fee: 0.005
        }
    },
    antiPhishing: '',
    userLoginAttempts: [],
    userActiveSessions: [],
    userProfile: {
        level: 0,
        options: {
            tfa: true,
            socialLoginEnabled: false
        },
        pendingVerifications: {},
        verifications: {},
        bankAccounts: [],
        bankCards: [],
        chatId: ''
    },
    userDataFetched: false,
    userPortfolio: {
        status: null,
        dailyProfit: null,
        dailyTotalProfit: null,
        lastMonthTotalProfit: null
    },
    userLimitations: {},
    userNotifications: [],
    notices: {
        all: []
    },
    noticesTopics: [],
    announcements: [],
    userCompetition: {
        id: null,
        name: null,
        isActive: false
    },
    userOrderStats: {},
    userEmergencyCancellationCode: null,
    tfa: {
        otp: {}
    },
    hasReferrer: false,
    userReferralList: [],
    session: {
        tfaActivationWarning: false // user was warned once
    },
    fcmToken: null,
    fcmPermissionRequested: false,
    favoriteMarkets: []
})

export const getters = {
    isLoggedIn: (state) => {
        return state.user.loggedIn
    },
    userToken: (state) => {
        return state.user.token
    },
    userName: (state) => {
        return state.user.name
    },
    userEmail: (state) => {
        return state.user.email
    },
    userFeatures: (state) => {
        return state.userProfile.features || []
    },
    hasFeature: (state, getters) => (feature) => {
        return getters.userFeatures.includes(feature)
    },
    isFavoriteMarket: state => (market) => {
        return state.favoriteMarkets.includes(market.toUpperCase())
    },


    isUserEmailVerified(state) {
        return !!(state.userProfile.verifications).email
    },
    maskedUsername() {
        const username = process.server ? '' : storage.getItem('username')
        if (username) {
            if (username.includes('@')) {
                return maskEmail(username)
            } else {
                return maskMobile(username)
            }
        }
    },
    maskedEmail({userProfile}) {
        const emailOrUsername = userProfile.email || userProfile.username
        if (emailOrUsername.includes('@')) {
            return maskEmail(emailOrUsername)
        } else {
            return maskMobile(emailOrUsername)
        }
    },
    isUserEmailPending(state) {
        return !!(state.userProfile.pendingVerifications).email
    },
    isUserMobileVerified(state) {
        return !!(state.userProfile.verifications).mobile
    },
    isUserMobilePending(state) {
        return !!(state.userProfile.pendingVerifications).mobile
    },
    isMobileIdentityPending(state) {
        return !!(state.userProfile.pendingVerifications).mobileIdentity
    },
    isMobileIdentityVerified(state) {
        return !!(state.userProfile.verifications).mobileIdentity
    },
    isUserIdentityVerified(state) {
        return !!(state.userProfile.verifications).identity
    },
    isUserIdentityPending(state) {
        return !!(state.userProfile.pendingVerifications).identity
    },
    isBankCardVerified(state) {
        return !!(state.userProfile.verifications).bankCard
    },
    isBankCardPending(state) {
        return !!(state.userProfile.pendingVerifications).bankCard
    },
    isBankAccountVerified(state) {
        return !!(state.userProfile.verifications).bankAccount
    },
    isBankAccountPending(state) {
        return !!(state.userProfile.pendingVerifications).bankAccount
    },
    isAddressVerified(state) {
        return !!(state.userProfile.verifications).address
    },
    isCityVerified(state) {
        return !!(state.userProfile.verifications).city
    },
    isPhoneVerified(state) {
        return !!(state.userProfile.verifications).phone
    },
    isPhoneCodeVerified(state) {
        return !!(state.userProfile.verifications).phoneCode
    },
    isPhoneCodePending(state) {
        return !!(state.userProfile.pendingVerifications).phoneCode
    },
    isPhonePending(state) {
        return !!(state.userProfile.pendingVerifications).phone
    },

    userLevel(state) {
        const level = state.userLimitations.userLevel
        return level ? getLevel(level) : {}
    },
    userCurrentLevel(state) {
        return state.userProfile?.level
    },
    userMonthTotalOrders(state) {
        return state.userOrderStats.monthOrderTotal ?? 0
    },
    isTwoFAEnabled(state) {
        return !!state.userProfile.options.tfa
    },
    verifiedBankCards(state) {
        return state.userProfile.bankCards.filter(card => card.confirmed)
    },
    verifiedBankAccounts(state) {
        return state.userProfile.bankAccounts.filter(account => account.confirmed && account.bank !== JIBIT)
    },
    userLimits(state) {
        return state.userLimitations.limits || {}
    },
    latestUserLogin(state) {
        return state.userLoginAttempts.find(attempt => attempt.status === 'Successful')
    },
    userSocialLoginEnabled(state) {
        return state.userProfile.options.socialLoginEnabled
    },
    getSession(state) {
        return key => (state.session[key])
    },
    hasToken() {
        const token = process.server ? null : storage.getItem('token')
        return !!token
    },
    getUserProfile(state) {
        return state.userProfile
    },
    isIOS() {
        return process.client && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
    },
    isMobileRegistered(state) {
        return !state.user.username.includes('@')
    },
    isMobileRegisteredEmailVerified(state, getters) {
        return getters.isMobileRegistered && !getters.isUserEmailVerified
    }
}

export const mutations = {
    setUserData(state, data) {
        state.user.name = `${data.first_name} ${data.last_name}`
        state.user.username = state.user.email = data.username
    },
    setAntiPhishingCode(state, code) {
        state.antiPhishing = code
    },
    setUserLimitations(state, data) {
        state.userLimitations = data || {}
    },
    setUserNotifications(state, notificationsArray) {
        state.userNotifications = notificationsArray || []
    },
    setNotices(state, result = []) {
        if (result.length > 0) {
            state.notices.all = result
            state.noticesTopics.forEach(({slug}) => {
                state.notices[slug] = result.filter(item => item.tags.find(t => t.slug === slug))
            })
        }
    },
    setNoticesTopics(state, noticesTopics) {
        state.noticesTopics = noticesTopics || []
    },
    setUserMobileVerificationPending(state, data) {
        (state.userProfile.verifications).mobile = data
    },
    setAnnouncements(state, data) {
        state.announcements = data || []
    },
    hideAnnouncement(state, announcement) {
        state.announcements.find(notice => notice.id === announcement.id).isHidden = true
        this.$storage.setItem(`announcement:${announcement.id}`, 'hidden')
    },
    setUserAgreements(state, data) {
        state.userAgreements = data
    },
    setUserTradeStats(state, data) {
        state.userTradeStats = data ?? {}
    },
    setUserProfile(state, data) {
        if (!data || !data.options) {
            // console.warn('Trying to set an invalid profile:', data)
            return
        }
        state.userProfile = data
        state.userDataFetched = true
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
    setUserEmergencyCancellationCode(state, data) {
        state.userEmergencyCancellationCode = data
    },
    setTfaLink(state, data) {
        state.tfa.otp = data || {}
    },
    setHasReferrerStatus(state, data) {
        state.hasReferrer = data ?? false
    },
    setUserReferralLinksList(state, data) {
        state.userReferralList = data || []
    },
    setSocialLoginEnabled(state, status) {
        state.userProfile.options.socialLoginEnabled = status
    },
    setSession(state, payload) {
        const [key, val] = payload
        state.session[key] = val
    }
}

export const actions = {
    // login
    userLogin({commit, dispatch}, {endpoint, payload, headers}) {
        return this.$axios.$post(endpoint, payload, {headers})
            .then((res) => {
                // successful login
                if (res.key) {
                    commit('setUserToken', res.key)
                    this.$storage.setItem('device', res.device)
                    this.$liveChat.setLiveChatEmail(payload.username)
                    return {
                        successful: true
                    }
                }
                // failed login
                else {
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
    // register
    registerUser({commit, dispatch}, {username, password, referralCode, captchaData, otp}) {
        const additionalData = {}
        if (username.includes('@')) additionalData.email = username
        else additionalData.mobile = username

        return this.$axios.$post(USER_REGISTRATION, {
            username,
            password1: password,
            password2: password,
            referrerCode: referralCode,
            ...(otp ? {otp} : {}),
            ...captchaData,
            ...additionalData
        }).then((response) => {
            const {key: token, code, message} = response || {}
            if (token) {
                commit('setUserToken', token)
                // todo: fetch user-data
                this.$liveChat.setLiveChatEmail(username)
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
                    403: 'pleaseTryLater', 405: 'pleaseTryAgain', 500: 'serverError'
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
    logoutUser({commit, dispatch}) {
        return this.$api.$post(USER_LOGOUT, null)
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
    afterLogoutCleanup({commit}) {
        commit('setUserToken', null)
        this.$storage.setItem('username', null)
        this.$storage.setItem('nx_uid', null)
        Object.keys(sessionStorage)
            .filter(key => key.toString().endsWith(':rialBalance'))
            .forEach(key => this.$storage.session.removeItem(key))
    },
    editProfile({getters, commit, dispatch}) {
        return this.$api.$post(EDIT_PROFILE, {
            socialLoginEnabled: !getters.userSocialLoginEnabled
        }).then((res) => {
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
        }).catch((error) => {
            return {
                successful: false,
                error: error.message || error[0]
            }
        })
    },
    editMobileNumber({ context, dispatch }, { mobile, tfaCode }) {
        const headers = tfaCode ? { 'x-totp': tfaCode } : {}
        return this.$api.$post(EDIT_PROFILE, { mobile }, { headers })
            /* eslint-disable camelcase */
            .then(({ status, message, change_mobile_status }) => {
                if (status === 'ok') {
                    dispatch('refreshAllUserData', true)
                    return {
                        successful: true,
                        changeMobileStatus: change_mobile_status
                    }
                }
                return {
                    successful: false,
                    error: message,
                    changeMobileStatus: change_mobile_status
                }
            })
    },
    editEmailAddress({ context, dispatch }, { email }) {
        return this.$api.$post(EDIT_PROFILE, { email })
            .then((res) => {
                if (res.status === 'ok') {
                    dispatch('refreshAllUserData', true)
                    return {
                        successful: true
                    }
                }
                return {
                    successful: false,
                    error: res.message || res[0]
                }
            })
            .catch((error) => {
                return {
                    successful: false,
                    error: error.response.data.message || error[0]
                }
            })
    },
    authenticateUser({ commit }) {
        return this.$api.$get(AUTHENTICATION_USER)
            .then((response) => {
                if (response) {
                    commit('setUserData', response)
                    return true // token is valid
                } else {
                    commit('setUserToken', null)
                    return false // token is invalid
                }
            })
            .catch((e) => {
                commit('setUserToken', null)
                if (e.response && e.response.data && e.response.data.detail) {
                    commit('notification/show', {
                            content: e.response.data.detail,
                            type: 'danger',
                            dismissible: true,
                            timeout: 9000
                        },
                        { root: true })
                }
                return false // validation failed
            })
    },
    fetchLoginAttempts({ commit }) {
        return this.$api.$post(USER_LOGIN_ATTEMPTS).then(({ status, attempts }) => {
            if (status === 'ok' && Array.isArray(attempts)) {
                commit('setUserAttempts', attempts)
            }
        })
    },
    fetchActiveSessions({ commit }, { forceUpdate } = {}) {
        return this.$api.$get(ACTIVE_SESSIONS, { forceUpdate }).then(({ status, devices }) => {
            if (status === 'ok' && Array.isArray(devices)) {
                commit('setActiveSessions', devices)
            }
        })
    },
    resetPassword(context, data) {
        return this.$axios.$post(data.endpoint, data.payload)
            .then((response) => {
                if (response.status !== 'ok') {
                    return {
                        successful: false,
                        error: response.non_field_errors?.[0] || response.message
                    }
                } else {
                    return {
                        successful: true
                    }
                }
            }).catch((error) => {
                const { status: errorCode, data: errorData } = error.response || {}
                const errorMsg =
                    {
                        403: 'pleaseTryLater',
                        405: 'pleaseTryAgain',
                        500: 'serverError'
                    }[errorCode]

                let errors = null
                if (typeof errorData === 'object') {
                    errors = Object.keys(errorData).map(field => errorData[field][0])
                }

                return {
                    successful: false,
                    error: errorMsg || 'resetPasswordFailed',
                    errors
                }
            })
    },
    changePassword(context, { currentPassword, newPassword, newPasswordConfirm }) {
        return this.$api.$post(CHANGE_PASSWORD, {
            currentPassword, newPassword, newPasswordConfirm
        }).then(({ status, code }) => {
            if (status === 'ok') {
                return {
                    successful: true
                }
            } else {
                return {
                    successful: false,
                    error: code === 'InvalidPassword'
                }
            }
        })
    },
    requestFeature(content, featureName) {
        return this.$api.$get(USER_FEATURE_ADD_REQUEST + featureName)
    },
    getFeatureRequestStatus({ commit }, featureName) {
        return this.$api.$get(USER_FEATURE_REQUEST_STATUS + featureName)
    },
    requestTfaActivation({ commit }, { otp }) {
        return this.$api.$post(USERS_TFA_REQUEST, { otp, sendSms: true })
            .then((response) => {
                if (response.status !== 'ok') {
                    return {
                        successful: false,
                        error: response.non_field_errors?.[0] || response.code
                    }
                } else {
                    commit('setTfaLink', response.device)
                    return {
                        successful: true
                    }
                }
            }).catch((error) => {
                return {
                    successful: false,
                    error: error.response.status
                }
            })
    },
    confirmTfaActivation({ commit, dispatch }, { device, otp, smsOtp }) {
        return this.$api.$post(USERS_TFA_CONFIRM, { device, otp, sendSms: true, sms_otp: smsOtp })
            .then((response) => {
                if (response.status !== 'ok') {
                    return {
                        successful: false,
                        error: response.non_field_errors?.[0] || response.code
                    }
                } else {
                    dispatch('refreshAllUserData', true)
                    return {
                        successful: true
                    }
                }
            }).catch((error) => {
                return {
                    successful: false,
                    error: error.message || error[0]
                }
            })
    },
    confirmTfaDeactivation({ commit, dispatch }, { otp }) {
        return this.$api.$post(USER_TFA_DEACTIVATION, { otp })
            .then((response) => {
                if (response.status !== 'ok') {
                    return {
                        successful: false,
                        error: response.non_field_errors?.[0] || response.code
                    }
                } else {
                    dispatch('refreshAllUserData', true)
                    return {
                        successful: true
                    }
                }
            }).catch((error) => {
                return {
                    successful: false,
                    error: error.message || error[0]
                }
            })
    },
    addCardNumber({ dispatch }, { number, bank }) {
        return this.$api.$post(ADD_CARD, { number, bank })
            .then(({ status, code, message }) => {
                if (status === 'ok') {
                    dispatch('refreshAllUserData', true)
                    return {
                        successful: true
                    }
                } else {
                    return {
                        successful: false,
                        error: code,
                        message
                    }
                }
            })
    },
    deleteCardNumber({ dispatch }, { id }) {
        return this.$api.$post(DELETE_CARD, { id })
            .then(({ status, code, message }) => {
                if (status === 'ok') {
                    dispatch('refreshAllUserData', true)
                    return {
                        successful: true
                    }
                } else {
                    return {
                        successful: false,
                        error: code,
                        message
                    }
                }
            })
    },
    addShebaNumber({ dispatch }, { number, shaba }) {
        return this.$api.$post(ADD_SHEBA, { number, shaba })
            .then(({ status, code, message }) => {
                if (status === 'ok') {
                    dispatch('refreshAllUserData', true)
                    return {
                        successful: true
                    }
                } else {
                    return {
                        successful: false,
                        error: code,
                        message
                    }
                }
            })
    },
    deleteShebaNumber({ dispatch }, { id }) {
        return this.$api.$post(DELETE_SHEBA, { id })
            .then(({ status, code, message }) => {
                if (status === 'ok') {
                    dispatch('refreshAllUserData', true)
                    return {
                        successful: true
                    }
                } else {
                    return {
                        successful: false,
                        error: code,
                        message
                    }
                }
            })
    },
    activeUserEmergencyCancellationCode({ commit }) {
        return this.$api.$post(SECURITY_EMERGENCY_ACTIVATE)
            .then(({ status, cancelCode }) => {
                if (status === 'ok' && cancelCode?.code) {
                    commit('setUserEmergencyCancellationCode', cancelCode.code)
                }
            })
    },
    getUserEmergencyCancellationCode({ commit }) {
        return this.$api.$post(SECURITY_EMERGENCY_GET_CODE)
            .then(({ status, cancelCode }) => {
                if (status === 'ok' && cancelCode?.code) {
                    commit('setUserEmergencyCancellationCode', cancelCode.code)
                }
            })
    },
    setReferrer(context, referrerCode) {
        return this.$api.$post(SET_REFERRER, { referrerCode })
            .then((res) => {
                if (res.status === 'ok') {
                    return {
                        successful: true
                    }
                } else {
                    return {
                        successful: false,
                        error: res.code ?? 'invalidReferralCode',
                        message: res.message
                    }
                }
            })
    },
    saveReferralCode(context, refCode) {
        if (refCode && process.client) {
            this.$storage.setItem('ref-code', refCode)
        }
    },
    terminateSession({ dispatch }, { deviceId }) {
        const isTerminateAll = deviceId === 'ALL'
        return this.$api.$post(isTerminateAll ? TERMINATE_ALL_SESSION : TERMINATE_SESSION, isTerminateAll ? {} : { device: deviceId })
            .then(({ status, code, message }) => {
                if (status === 'ok') {
                    dispatch('fetchActiveSessions', { forceUpdate: true })
                    return {
                        successful: true
                    }
                } else {
                    return {
                        successful: false,
                        error: code,
                        message
                    }
                }
            })
    },
    setUsernameToLocalStorage(content, username) {
        this.$storage.setItem('username', username)
    },
}