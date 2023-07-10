/**
 * @summary Resolves the current environment based on the hostname and resolves its related API endpoints.
 * @description Note that, this script runs only once at the very beginning of the application initialization.
 */

export const environments = {
    localhost: {
        hostname: 'localhost',
        host: 'localhost:4000',
        origin: 'http://localhost:4000/',
        isProduction: false,
        target: 'test',
        type: 'dev',
        api: {
            base: 'https://testnetapi.snappfood.ir/',
            low: 'https://testnetapi.snappfood.ir/',
            fast: 'https://testnetapi.snappfood.ir/',
            high: 'https://testnetapi.snappfood.ir/',
            chart: 'https://testnetapi.snappfood.ir/'
        },
        cdn: 'https://testnet.snappfood.ir/cdn/'
    },

    'testnet.snappfood.ir': {
        hostname: 'testnet.snappfood.ir',
        host: 'testnet.snappfood.ir',
        origin: 'https://testnet.snappfood.ir/',
        isProduction: true,
        target: 'test',
        type: 'testnet',
        api: {
            base: 'https://testnetapi.snappfood.ir/',
            low: 'https://testnetapi.snappfood.ir/',
            fast: 'https://testnetapi.snappfood.ir/',
            high: 'https://testnetapi.snappfood.ir/',
            chart: 'https://testnetapi.snappfood.ir/'
        },
        cdn: 'https://testnet.snappfood.ir/cdn/'
    },

    'snappfood.ir': {
        hostname: 'snappfood.ir',
        host: 'snappfood.ir',
        origin: 'https://snappfood.ir/',
        isProduction: true,
        target: 'end-user',
        type: 'mainnet',
        api: {
            base: 'https://api.snappfood.ir/',
            low: 'https://api-l.snappfood1.ir/',
            fast: 'https://api.snappfood.ir/',
            high: 'https://api.snappfood.ir/',
            chart: 'https://chart.snappfood.ir/'
        },
        cdn: 'https://snappfood.ir/cdn/'
    },

    'snappfood.net': {
        hostname: 'snappfood.net',
        host: 'snappfood.net',
        origin: 'https://snappfood.net/',
        isProduction: true,
        target: 'end-user',
        type: 'mainnet',
        api: {
            base: 'https://api.snappfood.net/',
            low: 'https://api-l.snappfood1.ir/',
            fast: 'https://api.snappfood.net/',
            high: 'https://api.snappfood.net/',
            chart: 'https://api.snappfood.net/'
        },
        cdn: 'https://snappfood.net/cdn/'
    },

    server: { // for data fetching on build time
        api: {
            base: 'https://api.snappfood.ir/',
            fast: 'https://api.snappfood.ir/'
        },
        cdn: 'https://snappfood.ir/cdn/'
    }
}

export const ENV = process.client ? environments[location.hostname] : environments.server

export const API_URL = ENV.api