/**
 * @summary Resolves the current environment based on the hostname and resolves its related API endpoints.
 * @description Note that, this script runs only once at the very beginning of the application initialization.
 */

export const environments = {
    localhost: {
        hostname: 'localhost',
        host: 'localhost:8080',
        origin: 'http://localhost:8080/',
        isProduction: false,
        target: 'test',
        type: 'dev',
        api: {
            base: 'https://testnetapi.project.ir/',
            low: 'https://testnetapi.project.ir/',
            fast: 'https://testnetapi.project.ir/',
            high: 'https://testnetapi.project.ir/',
            chart: 'https://testnetapi.project.ir/'
        },
        cdn: 'https://testnet.project.ir/cdn/'
    },

    server: { // for data fetching on build time
        api: {
            base: 'https://api.project.ir/',
            fast: 'https://api.project.ir/'
        },
        cdn: 'https://project.ir/cdn/'
    }
}

export const ENV = process.client ? environments[location.hostname] : environments.server

export const API_URL = ENV.api
