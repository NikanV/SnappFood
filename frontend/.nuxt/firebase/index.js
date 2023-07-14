import createApp from './app.js'

import messagingService from './service.messaging.js'

const appConfig = {"apiKey":"AIzaSyAk4oSQFcZOQKT90jkN2fQKjB8nE1sH6fA","authDomain":"nobitex.firebaseapp.com","databaseURL":"https:\u002F\u002Fnobitex.firebaseio.com","projectId":"nobitex","storageBucket":"nobitex.appspot.com","messagingSenderId":"1039155241638","appId":"1:1039155241638:web:4d3705a75e38578754ca67","measurementId":"G-R0YZQHZ0SC"}

export default async (ctx, inject) => {
  const { firebase, session } = await createApp(appConfig, ctx)

  let servicePromises = []

  if (process.client) {
    servicePromises = [
      messagingService(session, firebase, ctx, inject),

    ]
  }

  const [
    messaging
  ] = await Promise.all(servicePromises)

  const fire = {
    messaging: messaging
  }

    inject('fireModule', firebase)
    ctx.$fireModule = firebase

  inject('fire', fire)
  ctx.$fire = fire
}

function forceInject (ctx, inject, key, value) {
  inject(key, value)
  const injectKey = '$' + key
  ctx[injectKey] = value
  if (typeof window !== "undefined" && window.$nuxt) {
  // If clause makes sure it's only run when ready() is called in a component, not in a plugin.
    window.$nuxt.$options[injectKey] = value
  }
}