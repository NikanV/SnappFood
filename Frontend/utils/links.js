import { storage } from '~/scripts/Storage'
import { isPWAMode } from '~/plugins/pwa'

const prefix = ''
export const PANEL_ROOT = '/panel/'
export const APP_ROOT = panelUrl()
// Internal Links
export const HOME = prefix + '/'
export const LOGIN = '/login/'
export const SIGNUP = '/signup/'
export const LOGOUT = '/logout/'
export const FORGET_PASSWORD = '/forget-password/'
export const FORGET_TFA = '/forget-tfa/'
export const GIFT_CARD = prefix + '/giftcard/'
export const POLICIES_REFERRAL = prefix + '/policies/referral/'
export const REFERRAL = prefix + '/referral/'
export const ANDROID_CHANGELOG = prefix + '/product/android/3.5/'
export const USER_LEVELS = prefix + '/policies/user-levels/'
export const POLICIES_TERM = prefix + '/policies/terms/'
export const POSITION_TERM = prefix + '/position-terms/'
export const FAQ = prefix + '/faq/'
export const SECURITY = prefix + '/security/'
export const ABOUT = prefix + '/about/'
export const CHANGELOG = prefix + '/changes/'
export const DOWNLOAD_APP = prefix + '/application/'
// links to panel

export const PROFILE = PANEL_ROOT + 'profile/'
export const SETTINGS = PROFILE + 'settings/'
export const NOTIFICATIONS = PROFILE + 'notifications/' // end user release
export const NOTICES = PROFILE + 'notices/' // end user release
export const CHANGE_MOBILE = PROFILE + 'phone-number/'
export const DISCOUNTS = PROFILE + 'discounts/'
export const SPECIAL_PLANS = PROFILE + 'plans/'
export const INVITE_FRIENDS = APP_ROOT + 'profile/referral-program/'
export const PROFILE_SECURITY = PROFILE + 'security/'
export const CHANGE_PASSWORD = PROFILE_SECURITY + 'change-password/'
export const HISTORY_LOGINS = PANEL_ROOT + 'profile/security/'
export const ACTIVE_SESSIONS = PANEL_ROOT + 'profile/security/sessions/'

export const TICKETS = PANEL_ROOT + 'ticketing/'
export const CREATE_TICKETS = PANEL_ROOT + 'ticketing/create/'
export const STAKE = PANEL_ROOT + 'stake/'
export const YIELD = PANEL_ROOT + 'yield-farming/'
export function TICKET_DETAILS(id) {
    return `${PANEL_ROOT}ticketing/${id}/`
}
export const TFA_ACTIVATION = PANEL_ROOT + 'profile/security/tfa/'
export const VERIFICATION = PANEL_ROOT + 'verification/'
export const VERIFICATION_EMAIL = PANEL_ROOT + 'verification/email/'
export const VERIFICATION_MOBILE = PANEL_ROOT + 'verification/mobile-number/'
export const VERIFICATION_IDENTITY = PANEL_ROOT + 'verification/identity-info/'
export const VERIFICATION_BANK = PANEL_ROOT + 'verification/bank-info/'
export const VERIFICATION_SELFIE = PANEL_ROOT + 'verification/selfie/'
export const VERIFICATION_LANDLINE = PANEL_ROOT + 'verification/landline-confirmation/'
export const VERIFICATION_CONTACT = PANEL_ROOT + 'verification/contact-info/'
export const VERIFICATION_SMART = PANEL_ROOT + 'verification/smart-verification/'
// export const WALLET = APP_ROOT + 'wallet/'
// export const TRANSACTIONS_HISTORY = APP_ROOT + 'profile/history/transactions/' // link of app project"
export function BANK_INFO(type = '') {
    return `${PANEL_ROOT}profile/bank-info/${type ? `${type}/` : ''}`
}
export function ADD_BANK_NUMBER(type) {
    return `${PANEL_ROOT}profile/bank-info/add/${type || 'card-number'}/`
}

export function panelUrl() {
    if (isPWAMode) return '/panel/'

    const newPanelUIDs = !process.server ? storage.getItem('newPanelUIDs') : null
    let justShowNew = !process.server && storage.getItem('justShowNewPanel') === 'true'
    if (newPanelUIDs) {
        const userId = storage.getItem('nx_uid')
        justShowNew = justShowNew || newPanelUIDs.split(',').includes(userId)
    }
    return justShowNew ? '/panel/' : 'app/'
}

// external links
export const TESTNET = 'https://testnet.snappfood.ir/'
export const API_DOC = 'https://apidocs.snappfood.ir'
export const INSTAGRAM = 'https://www.instagram.com/snappfood_market/'
export const TELEGRAM = 'https://t.me/snappfoodmarket/'
export const TELEGRAM_BOT = 'https://t.me/snappfoodbot/'
export const LINKEDIN = 'https://www.linkedin.com/company/snappfoodmarket/'
export const TWITTER = 'https://twitter.com/snappfoodmarket/'
export const YOUTUBE = 'https://www.youtube.com/c/Nobitex?sub_confirmation=1'
export const FACEBOOK = '#'
export const GOOGLE_AUTHENTICATOR_APP_STORE = 'https://itunes.apple.com/us/app/google-authenticator/id388497605'
export const GOOGLE_AUTHENTICATOR_GOOGLE_PLAY = 'https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2'
// release
export const NEW_PANEL_ROOT = prefix + '/panel/'
