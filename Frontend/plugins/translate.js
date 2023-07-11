export default function ({ app }, inject) {
    const i18n = app.i18n
    function te(key, host) {
        return {
            local: host.$i18n._te(key, host.$i18n.locale, host.$i18n._getMessages()),
            global: i18n._te(key, i18n.locale, i18n._getMessages())
        }
    }
    function t(key, options, host) {
        const exist = te(key, host)
        if (exist.local) {
            return host.$i18n._t(key, host.$i18n.locale, host.$i18n._getMessages(), host, options)
        }
        if (exist.global) {
            return i18n._t(key, i18n.locale, i18n._getMessages(), host, options)
        }
        return null
    }
    function td(key, options, defaultString) {
        return t(key, options || [], this) || defaultString || key
    }
    inject('td', td)
}
