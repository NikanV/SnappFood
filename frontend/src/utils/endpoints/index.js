import { API_URL, ENV } from '~/utils/endpoints/resolver'

const baseUrl = API_URL.base

// AUTHENTICATION
export const CHECK_TOKEN = baseUrl + 'check/token'
export const DEFAULT_LOGIN = baseUrl + 'auth/login/'

// export const CHECK_TOKEN = baseUrl + 'check/token'
export const FORGET_PASSWORD = baseUrl + 'auth/forget-password/'
export const GOOGLE_SIGN_IN = baseUrl + 'auth/google/'
export const RESET_PASSWORD = baseUrl + 'auth/forget-password-commit/'
export const CHANGE_PASSWORD = baseUrl + 'auth/user/change-password'
export const CHECKED_LOGIN = baseUrl + 'auth/checked-login/'
export const USER_REGISTRATION = baseUrl + 'auth/registration/'

// tfa
export const TFA_REMOVAL_LOGIN = baseUrl + 'users/request-tfa-removal'
export const SEND_CONFIRMATION_CODES = (username) => {
    return baseUrl + `users/confirm-tfa-removal/${username}`
}

// OTHER
export const APPLICATION_LINK = baseUrl + 'app/request-link'
export const GIFT_CARD = baseUrl + 'gift/'

// GENERAL
export const V2OPTIONS = baseUrl + 'v2/options'
export const SELECT_CAPTCHA = baseUrl + 'captcha/select'
