export const storage = {
    setItem(key, value) {
        try {
            localStorage.setItem(key, value)
        } catch (e) {
        }
    },
    getItem(key) {
        try {
            return localStorage.getItem(key)
        } catch (e) {
            return null
        }
    },
    removeItem(key) {
        try {
            localStorage.removeItem(key)
        } catch (e) {
        }
    },
    isAvailable() {
        try {
            const key = '__storage_test__'
            localStorage.setItem(key, key)
            localStorage.getItem(key)
            localStorage.removeItem(key)
            return true
        } catch (e) {
            return false
        }
    },
    session: {
        setItem(key, value) {
            try {
                sessionStorage.setItem(key, value)
            } catch (e) {
            }
        },
        getItem(key) {
            try {
                return sessionStorage.getItem(key)
            } catch (e) {
                return null
            }
        },
        removeItem(key) {
            try {
                sessionStorage.removeItem(key)
            } catch (e) {
            }
        }
    }
}
