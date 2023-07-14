const apiMethods = ["addGlobalEventProcessor","addBreadcrumb","captureException","captureEvent","captureMessage","configureScope","getHubFromCarrier","getCurrentHub","Hub","makeMain","Scope","Session","startTransaction","setContext","setExtra","setExtras","setTag","setTags","setUser","withScope","BrowserClient","injectReportDialog","eventFromException","eventFromMessage","forceLoad","init","lastEventId","onLoad","showReportDialog","flush","close","wrap"]

/** @type {import('@nuxt/types').Plugin} */
export default function (ctx, inject) {
  const SentryMock = {}
  apiMethods.forEach(key => {
    // eslint-disable-next-line no-console
    SentryMock[key] = _ => _
  })

  // Inject mocked sentry to the context as $sentry (this is used in case sentry is disabled)
  inject('sentry', SentryMock)
  ctx.$sentry = SentryMock
}
