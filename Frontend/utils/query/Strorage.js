export default class Storage {
    constructor(type = 'map') {
        if (!['map', 'set'].includes(type)) {
            throw new Error('Storage type must be either "map" or "set".')
        }

        this.type = type
        this.storage = type === 'map' ? new Map() : new Set()
    }

    add(key, val) {
        if (this.type === 'map') {
            return this.storage.set(key, val)
        }

        return this.storage.add(key)
    }

    get(key) {
        if (this.type === 'map') {
            return this.storage.get(key)
        }

        throw new Error('Cannot get from a Set.')
    }

    has(key) {
        return this.storage.has(key)
    }

    delete(key) {
        return this.storage.delete(key)
    }

    clear() {
        return this.storage.clear()
    }

    size() {
        return this.storage.size
    }

    getAndDelete(key) {
        if (this.type === 'map') {
            const val = this.get(key)
            this.delete(key)
            return val
        }

        throw new Error('Cannot get from a Set.')
    }

    keys() {
        return this.storage.keys()
    }

    values() {
        return this.storage.values()
    }

    forEach(callback) {
        return this.storage.forEach(callback)
    }
}
