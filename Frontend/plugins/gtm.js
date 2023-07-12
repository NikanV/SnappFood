
window.dataLayer = window.dataLayer || []

export default function ({ app }, inject) {
    function gtag () {
        window.dataLayer.push(arguments)
    }

    function sendGTMEventWithCategory(category, action, label, payload = {}) {
        if (payload) {
            sendGTMEvent(action, {
                event_category: category,
                event_label: label,
                ...payload
            })
        }
    }

    function sendGTMEvent(eventName, payload) {
        if (payload) {
            if (!payload.eventValue) {
                payload.eventValue = 0
            }
            gtag('event', eventName, payload)
        }
    }

    function sendPageView(pageTitle) {
        const route = app.router.currentRoute
        sendGTMEvent('pageview', {
            page: {
                path: route.fullPath,
                title: pageTitle || app.router.currentRoute.fullPath.split('/')?.pop()
            }
        })
    }

    app.router.afterEach((to) => {
        const components = to.matched[0] ? to.matched[0].components : null
        if (components) {
            const head = components.default?.options?.head
            if (!head) {
                sendPageView()
            }
        }
    })

    inject('gtm', {
        execute() {
            window.dataLayer.push(...arguments)
        },
        sendPageView,
        sendGTMEvent,
        sendGTMEventWithCategory
    })
}
