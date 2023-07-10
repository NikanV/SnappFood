/**
 * @description big numbers constants.
 */
export const ZERO = 0
export const HUNDRED = 100
export const THOUSAND = 1000
export const MILLION = 1000 * 1000
export const BILLION = 1000 * 1000 * 1000
export const SECOND = 1000
export const MINUTE = 60000
export const HOUR = 3600000
export const LEVELS = {
    normal: 0,
    inactive: 10,
    suspicious: 20,
    blocked: 30,
    level0: 40,
    level1P: 42,
    level1: 44,
    trader: 45,
    level2: 46,
    level3: 90,
    active: 91,
    level4: 92,
    nobitex: 99,
    system: 100,
    bot: 101,
    staff: 102
}
export const REGISTRATION_TYPES = {
    EMAIL: 'EMAIL',
    MOBILE: 'MOBILE'
}

/**
 * @name MIN_ORDER_VALUE
 * @type {Object}
 * @description minimum value/amount required to place an order per market.
 */
export const MIN_ORDER_VALUE = {
    rls: 3 * MILLION,
    usdt: 11
}

/**
 * @name DEPOSIT_CONSTRAINTS
 * @type {Object}
 * @description any constraints related to deposit Rial or Crypto.
 */
export const DEPOSIT_CONSTRAINTS = {
    rls: {
        min_deposit: 1000,
        max_deposit: 50000000
    }
}

/**
 * @name WITHDRAW_CONSTRAINTS
 * @type {Object}
 * @description any constraints related to withdraw Rial or Crypto.
 */
export const WITHDRAW_CONSTRAINTS = {
    rls: {
        min_withdraw: 1000,
        max_withdraw: 50000000
    }
}

/**
 * @name HCAPTCHA_LOCAL_SITEKEY
 * @type {String}
 * @description hCaptcha local sitekey for authentication testing.
 * CAUTION: This test key provides no anti-bot protection!
 * @see https://docs.hcaptcha.com/#integration-testing-test-keys
 */
export const HCAPTCHA_LOCAL_SITEKEY = '10000000-ffff-ffff-ffff-000000000001'

/**
 * @name HCAPTCHA_SITEKEY
 * @type {String}
 * @description Nobitex main hCaptcha sitekey for authentication on production.
 * @see https://docs.hcaptcha.com
 */
export const HCAPTCHA_SITEKEY = '9d9a3511-502e-429b-8cc3-905540bab5e9'

/**
 * @name ARCAPTCHA_TESTNET_SITEKEY
 * @type {String}
 * @description Nobitex ArCaptcha sitekey for testnet authentication.
 */
export const ARCAPTCHA_TESTNET_SITEKEY = 'cngpoiymfh'

/**
 * @name ARCAPTCHA_MAINNET_SITEKEY
 * @type {String}
 * @description Nobitex ArCaptcha sitekey for mainnet authentication.
 */
export const ARCAPTCHA_MAINNET_SITEKEY = '88bjuhdam4'

/**
 * @name GOOGLE_LOGIN_CLIENT_ID
 * @type {String}
 * @description google client id for authentication.
 */
export const GOOGLE_LOGIN_CLIENT_ID = '1039155241638-5ehvg8etjmdo2i6v7h8553m3hak0n7sp.apps.googleusercontent.com'

/**
 * @name ENCRYPTION_PUBLIC_KEY
 * @type {String}
 * @description the default public key (in PEM-encoded SubjectPublicKeyInfo object) for asymmetric encryption on the client-side.
 */
export const ENCRYPTION_PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAxN0/pQtx9j+GE9IqFE6Ld41jX9C8Zd5DNb0KAycojncilyWFcQOv0wV2loHV8tfAA84UQq1OO4jqRasgIH8qeWks4+8zfVVeBCCK7bsA45Z/i9x4xIoMQP9xm68KMRfn01HoAOs3ugLK18ECbvYbaAKZC/iuomWNCdJo3/Tghc1botpLwwn3E41cMcJ6pmoXBrY3V4WTm+MDOtPdijG8t7801j4J6JHBVT4NLDzlybj+FVPNzloiJLP/XfH6OC/2cydg8kMykd72xMluVCnXEJ/C3+QrTUzRJfLJqFsfM7uPu0M+Mp3arGm/ZLOoQJgIrvzjdLdJfPCK+5lJQZHRwAlI7O2GZxENV9HBC4TScmlmgloe+dzpgnPpVcafltDjvH8w7J9/yfC9MEwszmOMb7ca80nQW4sFDFLA+EtDW/P8cDq4M8HtTmKPLZVXuYYFv1kFmpKaqyyZ4wgr61Ec0V87pE1NiabglS/dZ2hbWeEQdur1wVSxNkcmOBfPav7KP0oIlJBTB//eOAPDbj9H6fexCGGueizSdt2LtmYN2FJkMQjRH6XAJRsU9l6+ApIu6fpDp1GKdARgxmaTqhWQtlWZc/jyw/DE8l0EJYJRXIOGHpFMOpDcu2sRzo5Egp3NItz8XLznR1FNN48x9bM9d4o0/ZcN6/dJZjBhwwWQQYsCAwEAAQ==
-----END PUBLIC KEY-----`

/**
 * @name PERSIAN_REGEXP
 * @type {RegExp}
 * @description regular expression for Persian and some punctuation marks characters.
 */
export const PERSIAN_REGEXP = /[\u0621-\u06CC\u060C-\u066C\u06F0-\u06F9\u0660-\u0669\u0020\u2000-\u202F\d)(\-_]/

/**
 * @name NOT_PERSIAN_REGEXP
 * @type {RegExp}
 * @description regular expression for anything but not Persian and some punctuation marks characters.
 */
export const NOT_PERSIAN_REGEXP = /[^\u0621-\u06CC\u060C-\u066C\u06F0-\u06F9\u0660-\u0669\u0020\u2000-\u202F\d)(\-_]/g

/**
 * @name NUMBER_REGEXP
 * @type {RegExp}
 * @description regular expression for numbers characters.
 */
export const NUMBER_REGEXP = /[\u0660-\u0669\u06F0-\u06F9\d]/

export const JIBIT = 'جیبیت'

export const NOBIFI_ASSETS_COLORS = {
    staking: '#547CC5',
    liquidityPool: '#FFCE1F',
    yieldFarming: '#20C5BA'
}
