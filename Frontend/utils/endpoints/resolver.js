/**
 * @summary Resolves the current environment based on the hostname and resolves its related API endpoints.
 * @description Note that, this script runs only once at the very beginning of the application initialization.
 */

export const environments = {
    localhost: {
        hostname: 'localhost',
        host: 'localhost:4000',
        origin: 'http://localhost:6969/',
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

    'snappfood.ir': {
        hostname: 'snappfood.ir',
        host: 'snappfood.ir',
        origin: 'https://snappfood.ir/',
        isProduction: true,
        target: 'end-user',
        type: 'mainnet',
        api: {
            base: 'https://api.snappfood.ir/',
            low: 'https://api.snappfood.ir/',
            fast: 'https://api.snappfood.ir/',
            high: 'https://api.snappfood.ir/',
            chart: 'https://chart.snappfood.ir/'
        },
        cdn: 'https://snappfood.ir/cdn/'
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
