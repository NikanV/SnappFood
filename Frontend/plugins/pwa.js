export const isPWAMode = PWAChecker()

function PWAChecker() {
    let isStandalone = false
    if (process.client) {
        const isInWebAppIOS = (window.navigator.standalone === true)
        const isInWebAppChrome = (window.matchMedia('(display-mode: standalone)').matches)
        isStandalone = isInWebAppChrome || isInWebAppIOS
    }
    return isStandalone
}
