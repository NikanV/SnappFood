export const defaultOptions = {
    staleTime: 0,
    force: false,
    hardForce: false,
    retry: defaultRetryLimit,
    retryDelay: defaultRetryDelay,
    distinctRetry: false,
    deactivate: false,
    deactivateOnWindowHidden: false,
    refetchOnWindowFocus: false
}

function defaultRetryLimit(attemptIndex, error) {
    return attemptIndex < 3
}

function defaultRetryDelay(attemptIndex, error) {
    return Math.min(500 * 2 ** attemptIndex, 60000)
}

export function isPromise(val) {
    return val && typeof val.then === 'function'
}

export function isBrowser() {
    try {
        return typeof window !== 'undefined' && typeof window.document !== 'undefined'
    } catch (e) {
        return false
    }
}
