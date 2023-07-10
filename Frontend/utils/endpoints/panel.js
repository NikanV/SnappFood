import { ENV } from '~/utilities/endpoints/resolver'

const baseUrl = ENV.api.base
// AUTHENTICATION
export const USER_LOGOUT = `${baseUrl}auth/logout/`
export const AUTHENTICATION_USER = `${baseUrl}auth/user/`

// USER
export const USER_SET_PREFERENCE = `${baseUrl}users/set-preference`
export const USER_PREFERENCES = `${baseUrl}users/preferences`
export const USER_LIMITATIONS = `${baseUrl}users/limitations`
export const USER_PROFILE = `${baseUrl}users/profile`
export const USER_LOGIN_ATTEMPTS = `${baseUrl}users/login-attempts`
export const USER_WALLET_CONVERT = `${baseUrl}users/wallets/convert`
export const USERS_TFA_REQUEST = `${baseUrl}users/tfa/request`
export const USERS_TFA_CONFIRM = `${baseUrl}users/tfa/confirm`
export const USER_TFA_DEACTIVATION = `${baseUrl}users/tfa/disable`
export const ADD_CARD = `${baseUrl}users/cards-add`
export const DELETE_CARD = `${baseUrl}users/cards-delete`
export const ADD_SHEBA = `${baseUrl}users/accounts-add`
export const DELETE_SHEBA = `${baseUrl}users/accounts-delete`
export const REFERRAL_STATUS = `${baseUrl}users/referral/referral-status`
export const REFERRAL_LINKS_LIST = `${baseUrl}users/referral/links-list`
export const ADD_REFERRAL_LINK = `${baseUrl}users/referral/links-add`
export const SET_REFERRER = `${baseUrl}users/referral/set-referrer`
export const EDIT_PROFILE = `${baseUrl}users/profile-edit`
export const OTP_REQUEST = `${baseUrl}otp/request`
export const OTP_PUBLIC_REQUEST = `${baseUrl}otp/request-public`
export const TERMINATE_SESSION = `${baseUrl}security/devices/delete`
export const TERMINATE_ALL_SESSION = `${baseUrl}security/devices/delete-all`
// OTHER
export const CHECK_VERSION = `${baseUrl}check/version`
export const NOTIFICATIONS_LIST = ENV.api.low + 'notifications/list'
export const NOTIFICATIONS_READ = `${baseUrl}notifications/read`
export const COMPETITION_REGISTER = `${baseUrl}competition/register`
export const COMPETITION_STATS = `${baseUrl}competition/status`
export const NEWS_LIST = `${ENV.origin}api/news.json`
export const ANNOUNCEMENT_LIST = `${ENV.origin}api/news2.json`
export const SAYMENT = 'https://backend.sayment.ir/api/pardakht/payment'
export const SNAPPFOOD_CAPTCHA = `${baseUrl}captcha/get-captcha-key`
export const GIFT_CARD = baseUrl + 'gift/'

// VERIFICATION
export const VERIFY = `${baseUrl}users/verify`
export const UPLOAD_FILE = `${baseUrl}users/upload-file`
export const VERIFY_MOBILE = `${baseUrl}users/verify-mobile`
export const VERIFY_PHONE = `${baseUrl}users/verify-phone`
export const VERIFY_EMAIL = `${baseUrl}users/verify-email`
export const SET_NATIONAL_SERIAL = `${baseUrl}users/set-national-serial-number`