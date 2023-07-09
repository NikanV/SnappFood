import { API_URL } from '~/utilities/endpoints/resolver'
import { SECOND, MINUTE, HOUR } from '~/utilities/constants'

export const USER_LOGIN_ATTEMPTS = {
    baseURL: API_URL.base,
    path: 'users/login-attempts',
    cache: 30 * MINUTE
}

export const ACTIVE_SESSIONS = {
    baseURL: API_URL.base,
    path: 'security/devices',
    cache: 2 * MINUTE
}

export const USER_LIMITATIONS = {
    baseURL: API_URL.base,
    path: 'users/limitations',
    cache: 3 * MINUTE
}

export const USER_NOBIFI_WALLETS_LIST = () => {
    return {
        baseURL: API_URL.base,
        path: 'earn/balances',
        cache: 30 * SECOND
    }
}

export const NOTICES_LIST = (page) => {
    return {
        baseURL: API_URL.base,
        path: `crm/news/list?page=${page}&pageSize=50`,
        cache: 30 * SECOND
    }
}

export const USER_PREFERENCES = {
    baseURL: API_URL.base,
    path: 'users/preferences',
    cache: 2 * MINUTE
}