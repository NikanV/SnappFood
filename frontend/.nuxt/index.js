import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_sentryserver_1dee350d from 'nuxt_plugin_sentryserver_1dee350d' // Source: ./sentry.server.js (mode: 'server')
import nuxt_plugin_sentryclient_8f9678f6 from 'nuxt_plugin_sentryclient_8f9678f6' // Source: ./sentry.client.js (mode: 'client')
import nuxt_plugin_plugin_13804b4e from 'nuxt_plugin_plugin_13804b4e' // Source: ./nuxt-highcharts/plugin.js (mode: 'all')
import nuxt_plugin_index_72412936 from 'nuxt_plugin_index_72412936' // Source: ./firebase/index.js (mode: 'all')
import nuxt_plugin_workbox_680655b6 from 'nuxt_plugin_workbox_680655b6' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_2f952738 from 'nuxt_plugin_metaplugin_2f952738' // Source: ./pwa/meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_343cccac from 'nuxt_plugin_iconplugin_343cccac' // Source: ./pwa/icon.plugin.js (mode: 'all')
import nuxt_plugin_recaptcha_43e11038 from 'nuxt_plugin_recaptcha_43e11038' // Source: ./recaptcha.js (mode: 'all')
import nuxt_plugin_axios_4eb2636e from 'nuxt_plugin_axios_4eb2636e' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_pluginutils_6d6edb12 from 'nuxt_plugin_pluginutils_6d6edb12' // Source: ./nuxt-i18n/plugin.utils.js (mode: 'all')
import nuxt_plugin_pluginrouting_f9b62846 from 'nuxt_plugin_pluginrouting_f9b62846' // Source: ./nuxt-i18n/plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_4c6dd4b2 from 'nuxt_plugin_pluginmain_4c6dd4b2' // Source: ./nuxt-i18n/plugin.main.js (mode: 'all')
import nuxt_plugin_markdownit_31431c56 from 'nuxt_plugin_markdownit_31431c56' // Source: ./markdownit.js (mode: 'all')
import nuxt_plugin_googleanalytics_47c81b86 from 'nuxt_plugin_googleanalytics_47c81b86' // Source: ./google-analytics.js (mode: 'client')
import nuxt_plugin_initializer_1dc2366a from 'nuxt_plugin_initializer_1dc2366a' // Source: ../plugins/initializer.js (mode: 'client')
import nuxt_plugin_errorReport_1fb857de from 'nuxt_plugin_errorReport_1fb857de' // Source: ../plugins/errorReport.js (mode: 'client')
import nuxt_plugin_device_71515d2b from 'nuxt_plugin_device_71515d2b' // Source: ../plugins/device.js (mode: 'all')
import nuxt_plugin_pwa_4462a11a from 'nuxt_plugin_pwa_4462a11a' // Source: ../plugins/pwa.js (mode: 'client')
import nuxt_plugin_hybridLink_0d47466b from 'nuxt_plugin_hybridLink_0d47466b' // Source: ../plugins/hybridLink.js (mode: 'all')
import nuxt_plugin_api_785206da from 'nuxt_plugin_api_785206da' // Source: ../plugins/api.js (mode: 'client')
import nuxt_plugin_vuejsmodal_0719e4a0 from 'nuxt_plugin_vuejsmodal_0719e4a0' // Source: ../plugins/vue-js-modal.js (mode: 'all')
import nuxt_plugin_vue2touchevents_fa6609b4 from 'nuxt_plugin_vue2touchevents_fa6609b4' // Source: ../plugins/vue2-touch-events.js (mode: 'all')
import nuxt_plugin_vueMask_789f271b from 'nuxt_plugin_vueMask_789f271b' // Source: ../plugins/vueMask.js (mode: 'client')
import nuxt_plugin_googleSignin_6a0deab4 from 'nuxt_plugin_googleSignin_6a0deab4' // Source: ../plugins/googleSignin.js (mode: 'client')
import nuxt_plugin_datepicker_f86071f6 from 'nuxt_plugin_datepicker_f86071f6' // Source: ../plugins/datepicker.js (mode: 'client')
import nuxt_plugin_vuelidate_4be431c8 from 'nuxt_plugin_vuelidate_4be431c8' // Source: ../plugins/vuelidate.js (mode: 'all')
import nuxt_plugin_nobitexMixin_65fa8e1f from 'nuxt_plugin_nobitexMixin_65fa8e1f' // Source: ../plugins/nobitexMixin.js (mode: 'all')
import nuxt_plugin_gtm_63638066 from 'nuxt_plugin_gtm_63638066' // Source: ../plugins/gtm.js (mode: 'client')
import nuxt_plugin_vueSlider_b85a5df4 from 'nuxt_plugin_vueSlider_b85a5df4' // Source: ../plugins/vueSlider.js (mode: 'all')
import nuxt_plugin_englishDigit_09096e04 from 'nuxt_plugin_englishDigit_09096e04' // Source: ../plugins/englishDigit.js (mode: 'all')
import nuxt_plugin_persianOnly_6f8b67fe from 'nuxt_plugin_persianOnly_6f8b67fe' // Source: ../plugins/persianOnly.js (mode: 'all')
import nuxt_plugin_focus_138f48d6 from 'nuxt_plugin_focus_138f48d6' // Source: ../plugins/focus.js (mode: 'all')
import nuxt_plugin_router_79dc5b58 from 'nuxt_plugin_router_79dc5b58' // Source: ../plugins/router.js (mode: 'all')
import nuxt_plugin_liveChatSetup_eea6b758 from 'nuxt_plugin_liveChatSetup_eea6b758' // Source: ../plugins/liveChatSetup.js (mode: 'client')
import nuxt_plugin_nuxtswiperplugin_82e70236 from 'nuxt_plugin_nuxtswiperplugin_82e70236' // Source: ../plugins/nuxt-swiper-plugin.js (mode: 'client')
import nuxt_plugin_vuejsprogressbar_88bbea8a from 'nuxt_plugin_vuejsprogressbar_88bbea8a' // Source: ../plugins/vue-js-progress-bar.js (mode: 'client')
import nuxt_plugin_vueTour_e5ae36ec from 'nuxt_plugin_vueTour_e5ae36ec' // Source: ../plugins/vueTour (mode: 'client')
import nuxt_plugin_webengage_4e1a6498 from 'nuxt_plugin_webengage_4e1a6498' // Source: ../plugins/webengage.js (mode: 'all')
import nuxt_plugin_globalmixin_5f4f028a from 'nuxt_plugin_globalmixin_5f4f028a' // Source: ../plugins/global-mixin.js (mode: 'all')
import nuxt_plugin_translate_195d385f from 'nuxt_plugin_translate_195d385f' // Source: ../plugins/translate.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root ? this.$root.$options.$nuxt : null
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const store = createStore(ssrContext)
  const router = await createRouter(ssrContext, config, { store })

  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"صرافی نوبیتکس : بزرگترین صرافی ارز دیجیتال ایران | خرید ارز دیجیتال","htmlAttrs":{"type":"text\u002Fhtml; charset=utf-8"},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"},{"name":"image","content":"\u002Fcdn\u002Flogo\u002Fnobitex.png"},{"itemprop":"name","content":"Nobitex"},{"itemprop":"image","content":"\u002Fcdn\u002Flogo\u002Fnobitex.png"},{"property":"og:type","content":"website"},{"property":"og:site_name","content":"nobitex.ir"},{"property":"og:image","content":"\u002Fcdn\u002Flogo\u002Fnobitex-l.png"},{"property":"og:description","content":"صرافی آنلاین نوبیتکس بزرگترین بازار ارز دیجیتال - خرید و فروش ارز دیجیتال در سریع‌ترین زمان - پشتیبانی 24 ساعته و هر روزه - نگهداری امن رمزارز"},{"hid":"description","name":"description","content":"صرافی آنلاین نوبیتکس بزرگترین بازار ارز دیجیتال - خرید و فروش ارز دیجیتال در سریع‌ترین زمان - پشتیبانی 24 ساعته و هر روزه - نگهداری امن رمزارز"},{"name":"theme-color","content":"#784ED1"},{"name":"google-signin-scope","content":"profile email"},{"name":"google-signin-client_id","content":"1039155241638-5ehvg8etjmdo2i6v7h8553m3hak0n7sp.apps.googleusercontent.com"}],"link":[{"rel":"apple-touch-icon","sizes":"128x128","href":"iphone-icon.png"}],"style":[],"script":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    beforeSerializeFns: ssrContext ? ssrContext.beforeSerializeFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (process.server && typeof nuxt_plugin_sentryserver_1dee350d === 'function') {
    await nuxt_plugin_sentryserver_1dee350d(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_sentryclient_8f9678f6 === 'function') {
    await nuxt_plugin_sentryclient_8f9678f6(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_13804b4e === 'function') {
    await nuxt_plugin_plugin_13804b4e(app.context, inject)
  }

  if (typeof nuxt_plugin_index_72412936 === 'function') {
    await nuxt_plugin_index_72412936(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_680655b6 === 'function') {
    await nuxt_plugin_workbox_680655b6(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_2f952738 === 'function') {
    await nuxt_plugin_metaplugin_2f952738(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_343cccac === 'function') {
    await nuxt_plugin_iconplugin_343cccac(app.context, inject)
  }

  if (typeof nuxt_plugin_recaptcha_43e11038 === 'function') {
    await nuxt_plugin_recaptcha_43e11038(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_4eb2636e === 'function') {
    await nuxt_plugin_axios_4eb2636e(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginutils_6d6edb12 === 'function') {
    await nuxt_plugin_pluginutils_6d6edb12(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_f9b62846 === 'function') {
    await nuxt_plugin_pluginrouting_f9b62846(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_4c6dd4b2 === 'function') {
    await nuxt_plugin_pluginmain_4c6dd4b2(app.context, inject)
  }

  if (typeof nuxt_plugin_markdownit_31431c56 === 'function') {
    await nuxt_plugin_markdownit_31431c56(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_googleanalytics_47c81b86 === 'function') {
    await nuxt_plugin_googleanalytics_47c81b86(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_initializer_1dc2366a === 'function') {
    await nuxt_plugin_initializer_1dc2366a(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_errorReport_1fb857de === 'function') {
    await nuxt_plugin_errorReport_1fb857de(app.context, inject)
  }

  if (typeof nuxt_plugin_device_71515d2b === 'function') {
    await nuxt_plugin_device_71515d2b(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_pwa_4462a11a === 'function') {
    await nuxt_plugin_pwa_4462a11a(app.context, inject)
  }

  if (typeof nuxt_plugin_hybridLink_0d47466b === 'function') {
    await nuxt_plugin_hybridLink_0d47466b(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_api_785206da === 'function') {
    await nuxt_plugin_api_785206da(app.context, inject)
  }

  if (typeof nuxt_plugin_vuejsmodal_0719e4a0 === 'function') {
    await nuxt_plugin_vuejsmodal_0719e4a0(app.context, inject)
  }

  if (typeof nuxt_plugin_vue2touchevents_fa6609b4 === 'function') {
    await nuxt_plugin_vue2touchevents_fa6609b4(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueMask_789f271b === 'function') {
    await nuxt_plugin_vueMask_789f271b(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_googleSignin_6a0deab4 === 'function') {
    await nuxt_plugin_googleSignin_6a0deab4(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_datepicker_f86071f6 === 'function') {
    await nuxt_plugin_datepicker_f86071f6(app.context, inject)
  }

  if (typeof nuxt_plugin_vuelidate_4be431c8 === 'function') {
    await nuxt_plugin_vuelidate_4be431c8(app.context, inject)
  }

  if (typeof nuxt_plugin_nobitexMixin_65fa8e1f === 'function') {
    await nuxt_plugin_nobitexMixin_65fa8e1f(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_gtm_63638066 === 'function') {
    await nuxt_plugin_gtm_63638066(app.context, inject)
  }

  if (typeof nuxt_plugin_vueSlider_b85a5df4 === 'function') {
    await nuxt_plugin_vueSlider_b85a5df4(app.context, inject)
  }

  if (typeof nuxt_plugin_englishDigit_09096e04 === 'function') {
    await nuxt_plugin_englishDigit_09096e04(app.context, inject)
  }

  if (typeof nuxt_plugin_persianOnly_6f8b67fe === 'function') {
    await nuxt_plugin_persianOnly_6f8b67fe(app.context, inject)
  }

  if (typeof nuxt_plugin_focus_138f48d6 === 'function') {
    await nuxt_plugin_focus_138f48d6(app.context, inject)
  }

  if (typeof nuxt_plugin_router_79dc5b58 === 'function') {
    await nuxt_plugin_router_79dc5b58(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_liveChatSetup_eea6b758 === 'function') {
    await nuxt_plugin_liveChatSetup_eea6b758(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_nuxtswiperplugin_82e70236 === 'function') {
    await nuxt_plugin_nuxtswiperplugin_82e70236(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuejsprogressbar_88bbea8a === 'function') {
    await nuxt_plugin_vuejsprogressbar_88bbea8a(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueTour_e5ae36ec === 'function') {
    await nuxt_plugin_vueTour_e5ae36ec(app.context, inject)
  }

  if (typeof nuxt_plugin_webengage_4e1a6498 === 'function') {
    await nuxt_plugin_webengage_4e1a6498(app.context, inject)
  }

  if (typeof nuxt_plugin_globalmixin_5f4f028a === 'function') {
    await nuxt_plugin_globalmixin_5f4f028a(app.context, inject)
  }

  if (typeof nuxt_plugin_translate_195d385f === 'function') {
    await nuxt_plugin_translate_195d385f(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
