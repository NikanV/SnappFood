import { API_URL } from '~/utils/endpoints/resolver'
import { SECOND, MINUTE, HOUR } from '~/utils/constants'

export const LAST_WEEK_DAILY_PROFIT = {
    baseURL: API_URL.base,
    path: 'users/portfolio/last-week-daily-profit',
    cache: 12 * HOUR
}

export const LAST_WEEK_DAILY_TOTAL_PROFIT = {
    baseURL: API_URL.base,
    path: 'users/portfolio/last-week-daily-total-profit',
    cache: 12 * HOUR
}


export const TICKETS = {
    baseURL: API_URL.base,
    path: 'ticketing/tickets',
    cache: 2 * MINUTE
}

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

export const ADD_ORDER = {
    baseURL: API_URL.base,
    path: 'market/orders/add',
    cache: 5 * SECOND
}

export const NOTICES_LIST = (page) => {
    return {
        baseURL: API_URL.base,
        path: `crm/news/list?page=${page}&pageSize=50`,
        cache: 30 * SECOND
    }
}

export const NOTICES_TAGS_LIST = {
    baseURL: API_URL.low,
    path: 'crm/news/tags/list',
    cache: 30 * SECOND
}

export const USER_PREFERENCES = {
    baseURL: API_URL.base,
    path: 'users/preferences',
    cache: 2 * MINUTE
}

export const RESTAURANT_ORDER_LIST = {
    baseURL: API_URL.base,
    path: 'restaurant/orders/list',
    cache: MINUTE
}
