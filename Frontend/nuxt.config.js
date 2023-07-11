import path from 'path'
import i18nOptions from './plugins/i18n/options'
import { sentryIgnoreErrors, sentryDenyUrls, sentryBeforeSend } from './plugins/errorReport'
import sitemapConfig from './sitemap/config'
import { version } from './package.json'
import aliases from './aliases'
import { dynamicRoutes } from './utilities/dynamic-routes'

export default {
    target: 'static',
    env: {
        isTestnet: process.env.NUXT_ENV_BACKEND !== 'prod',
        VERSION: version,
        GTM: 'GTM-NHSMW95',
        webengageLicenseCode: process.env.NODE_ENV === 'production' ? (process.env.NUXT_ENV_BACKEND === 'prod' ? 'aa131b8b' : '11b564764') : ''
    },

    head: {
        title: 'صرافی نوبیتکس : بزرگترین صرافی ارز دیجیتال ایران | خرید ارز دیجیتال',
        htmlAttrs: {
            type: 'text/html; charset=utf-8'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
            { name: 'image', content: '/cdn/logo/nobitex.png' },
            { itemprop: 'name', content: 'Nobitex' },
            { itemprop: 'image', content: '/cdn/logo/nobitex.png' },
            { property: 'og:type', content: 'website' },
            { property: 'og:site_name', content: 'nobitex.ir' },
            { property: 'og:image', content: '/cdn/logo/nobitex-l.png' },
            { property: 'og:description', content: 'صرافی آنلاین نوبیتکس بزرگترین بازار ارز دیجیتال - خرید و فروش ارز دیجیتال در سریع‌ترین زمان - پشتیبانی 24 ساعته و هر روزه - نگهداری امن رمزارز' },
            { hid: 'description', name: 'description', content: 'صرافی آنلاین نوبیتکس بزرگترین بازار ارز دیجیتال - خرید و فروش ارز دیجیتال در سریع‌ترین زمان - پشتیبانی 24 ساعته و هر روزه - نگهداری امن رمزارز' },
            { name: 'theme-color', content: '#784ED1' },
            { name: 'google-signin-scope', content: 'profile email' },
            { name: 'google-signin-client_id', content: '1039155241638-5ehvg8etjmdo2i6v7h8553m3hak0n7sp.apps.googleusercontent.com' }
        ],
        link: [
            { rel: 'apple-touch-icon', sizes: '128x128', href: 'iphone-icon.png' }
        ]
    },

    styleResources: {
        scss: [
            './assets/styles/general/_variables.scss',
            './assets/styles/mixins/_media.scss'
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        '~/assets/styles/themes.scss',
        '~node_modules/bootstrap/dist/css/bootstrap.css',
        '~/assets/styles/main.scss',
        '~node_modules/vue-select/dist/vue-select.css',
        'swiper/css/swiper.css',
        '~node_modules/vue-tour/dist/vue-tour.css'
    ],

    // Router
    router: {
        base: process.env.NUXT_ENV_ROUTER_BASE || '/',
        extendRoutes(routes, resolve) {
            routes.push(
                {
                    name: 'prices',
                    path: '/prices',
                    component: resolve(__dirname, 'pages/current-prices.vue')
                },
                {
                    name: 'contact',
                    path: '/contact',
                    component: resolve(__dirname, 'pages/contact-us.vue')
                },
                {
                    name: 'why/security',
                    path: '/why/security',
                    component: resolve(__dirname, 'pages/security/index.vue')
                },
                {
                    name: 'position',
                    path: '/panel/exchange/position/:position',
                    component: resolve(__dirname, 'pages/panel/exchange/_exchange.vue')
                },
                {
                    name: 'exchange',
                    path: '/panel/exchange/:market',
                    component: resolve(__dirname, 'pages/panel/exchange/_exchange.vue')
                }
            )
        }
    },

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        // NOTE: Do not add any other plugin before initializer
        { src: '~/plugins/initializer.js', mode: 'client' },
        { src: '~/plugins/errorReport.js', mode: 'client' },
        { src: '~/plugins/device.js' },
        { src: '~/plugins/pwa.js', mode: 'client' },
        { src: '~/plugins/hybridLink.js' },
        { src: '~/plugins/api.js', mode: 'client' },
        { src: '~plugins/vue-js-modal.js' },
        { src: '~plugins/vue2-touch-events.js' },
        { src: '~/plugins/vueMask.js', mode: 'client' },
        { src: '~/plugins/googleSignin.js', mode: 'client' },
        { src: '~/plugins/datepicker.js', mode: 'client' },
        { src: '~/plugins/vuelidate.js' },
        { src: '~/plugins/nobitexMixin.js' },
        { src: '~/plugins/gtm.js', mode: 'client' },
        { src: '~/plugins/vueSlider.js' },
        { src: '~/plugins/englishDigit.js' },
        { src: '~/plugins/persianOnly.js' },
        { src: '~/plugins/focus.js' },
        { src: '~/plugins/router.js' },
        { src: '~/plugins/liveChatSetup.js', mode: 'client' },
        { src: '@/plugins/nuxt-swiper-plugin.js', mode: 'client' },
        { src: '@/plugins/vue-js-progress-bar.js', mode: 'client' },
        { src: '@/plugins/vueTour', mode: 'client' },
        { src: '~/plugins/webengage.js' },
        { src: '~/plugins/global-mixin.js' },
        { src: '~/plugins/translate.js' }
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: false,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        '@nuxtjs/eslint-module',
        '@nuxtjs/stylelint-module',
        '@nuxtjs/google-analytics',
        '@nuxtjs/style-resources',
        '@nuxtjs/markdownit'
    ],

    // markdownit options
    markdownit: {
        preset: 'default',
        linkify: true,
        breaks: true
    },

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        '@nuxtjs/sentry',
        ['@nuxtjs/i18n', i18nOptions],
        '@nuxtjs/axios',
        '@nuxtjs/recaptcha',
        '@nuxtjs/sitemap',
        '@nuxtjs/pwa',
        '@nuxtjs/firebase',
        'nuxt-highcharts'
    ],

    // PWA config
    pwa: {
        workbox: {
            cleanupOutdatedCaches: true,
            runtimeCaching: [
                {
                    handler: 'CacheFirst',
                    urlPattern: '/_nuxt/fonts/.*',
                    strategyOptions: {
                        cacheableResponse: { statuses: [0, 200] }
                    }
                },
                {
                    handler: 'CacheFirst',
                    urlPattern: '/_nuxt/img/.*',
                    strategyOptions: {
                        cacheableResponse: { statuses: [0, 200] }
                    }
                },
                {
                    handler: 'NetworkFirst',
                    urlPattern: '/_nuxt/.*',
                    strategyOptions: {
                        cacheableResponse: { statuses: [0, 200] }
                    }
                }
            ]
        },
        icon: {
            purpose: 'any'
        },
        manifest: {
            lang: 'fa',
            name: 'Nobitex',
            short_name: 'Nobitex',
            display: 'standalone',
            version,
            theme_color: '#784ed1',
            background_color: '#ffffff',
            start_url: '/panel/'
        }
    },

    // Firebase FCM
    firebase: {
        lazy: false,
        config: {
            apiKey: 'AIzaSyAk4oSQFcZOQKT90jkN2fQKjB8nE1sH6fA',
            authDomain: 'nobitex.firebaseapp.com',
            databaseURL: 'https://nobitex.firebaseio.com',
            projectId: 'nobitex',
            storageBucket: 'nobitex.appspot.com',
            messagingSenderId: '1039155241638',
            appId: '1:1039155241638:web:4d3705a75e38578754ca67',
            measurementId: 'G-R0YZQHZ0SC'
        },
        onFirebaseHosting: false,
        services: {
            messaging: true
        }
    },
    messaging: {
        createServiceWorker: true,
        actions: [
            {
                action: 'notif',
                url: `https://${process.env.NUXT_ENV_BACKEND === 'prod' ? '' : 'testnet.'}nobitex.ir/panel/profile/notifications/`
            }
        ],
        fcmPublicVapidKey: 'BH5g39NdsuKuPSQzvoTYGaBOiYOoWt0wcE1cCDNln-aJHdzUirsrHxdrbwEBglkne6nSnrpAffuzwvGzsDlSJRU'
    },

    // recaptcha config
    recaptcha: {
        siteKey: '6LdnUUgUAAAAANH0AhhcNDNw3-upum2J3-s8X-b9',
        size: 'normal',
        hideBadge: false,
        version: 2,
        language: 'fa'
    },
    // sentry config
    sentry: {
        dsn: 'https://ca93077cbbe744359e8e752b0387a9f1@sentry.ir-cloud.ir/3',
        disabled: true, // logs will not be sent over on localhost
        logMockCalls: false,
        publishRelease: false,
        config: {
            autoSessionTracking: false,
            ignoreErrors: sentryIgnoreErrors,
            denyUrls: sentryDenyUrls,
            beforeSend: sentryBeforeSend
        }
    },
    googleAnalytics: {
        id: 'UA-113333360-1',
        autoTracking: {
            pageviewOnLoad: false
        }
    },

    sitemap: sitemapConfig,

    privateRuntimeConfig: {
        secretKey: process.env.GOOGLE_SECRET
    },

    loading: {
        color: '#784ED1',
        height: '4px',
        rtl: true,
        throttle: 0
    },

    pageTransition: {
        name: 'page',
        mode: 'out-in'
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        extend(config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    exclude: /(node_modules)/,
                    loader: 'eslint-loader',
                    options: {
                        fix: true
                    }
                })
            }
            Object.entries(aliases).forEach(([aliasKey, aliasPath]) => {
                config.resolve.alias[aliasKey] = path.resolve(__dirname, aliasPath)
            })
        },
        extractCSS: false,
        loaders: {
            scss: {
                implementation: require('sass'),
                additionalData: '@use "sass:map";'
            }
        },
        cssSourceMap: false
    },

    // Static Build
    generate: {
        dir: process.env.NUXT_ENV_DIST_DIR || 'dist',
        routes: dynamicRoutes,
        fallback: true //  If unset or set to a falsy value, the name of the fallback HTML file will be 200.html
    }
}
