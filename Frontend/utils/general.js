import merge from 'deepmerge'

export const ArrayCombineMerge = (target, source, options) => {
    const destination = target.slice()

    source.forEach((item, index) => {
        if (typeof destination[index] === 'undefined') {
            destination[index] = options.cloneUnlessOtherwiseSpecified(item, options)
        } else if (options.isMergeableObject(item)) {
            destination[index] = merge(target[index], item, options)
        } else if (!target.includes(item)) {
            destination.push(item)
        }
    })
    return destination
}

export const determineDecimalPoint = (val) => {
    try {
        val = val.toString()
        const [, decimalPart] = val.split('.')
        if (!decimalPart) return 0
        return decimalPart.replace(/0+$/, '').length
    } catch (e) {
        return 0
    }
}

export const chunkString = (str, length) => {
    try {
        return str.match(new RegExp('(.|[\\r\\n]){1,' + length + '}', 'g'))
    } catch (e) {
        return str
    }
}

export const debounce = (func, wait = 800, immediate = false) => {
    let timeout
    return function () {
        const context = this
        const args = arguments
        const later = function () {
            timeout = null
            if (!immediate) func.apply(context, args)
        }
        const callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
    }
}

export function throttle(func, timeFrame = 350) {
    let waiting = false
    return function () {
        if (!waiting) {
            func.apply(this, arguments)
            waiting = true
            setTimeout(() => { waiting = false }, timeFrame)
        }
    }
}

export function asyncTimeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export async function copyToClipboard(text) {
    try {
        if (!text) return false
        await navigator.clipboard.writeText(text.toString())
        return true
    } catch (error) {
        return false
    }
}

export const unionArrays = (arrayA, arrayB) => {
    return [...new Set([...arrayA, ...arrayB])]
}

export const intersectArrays = (arrayA, arrayB) => {
    return arrayA.filter(x => arrayB.includes(x))
}

export const en2faDigits = input => (input.toString().replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]))

export const unMask = (value) => {
    try {
        return Number(value?.replace(/[^\d.-]/g, ''))
    } catch (err) {
        return 0
    }
}

export const addSecondsToDate = (date, ...seconds) => {
    const totalSeconds = seconds.reduce((sum, cur) => sum + cur, 0)
    return new Date(new Date(date).getTime() + totalSeconds * 1000)
}

export const subtractDates = (dateA, dateB) => {
    return (new Date(dateA) - new Date(dateB)) / 1000
}

export const createScript = (content, id = null) => {
    if (content) {
        const script = document.createElement('script')
        script.appendChild(document.createTextNode(content))
        script.setAttribute('defer', 'defer')
        if (id) {
            script.setAttribute('id', id)
        }
        script.type = 'text/javascript'
        document.body.appendChild(script)
    }
}

export const linkScript = (src, id = null) => {
    if (src) {
        const script = document.createElement('script')
        script.src = src
        script.setAttribute('defer', 'defer')
        if (id) {
            script.setAttribute('id', id)
        }
        script.type = 'text/javascript'
        document.body.appendChild(script)
    }
}

export const kebabCaseToCamelCase = (str) => {
    return str.toLowerCase().replace(/-([a-z])/g, g => g[1].toUpperCase())
}

export const camelCaseToKebabCase = (str) => {
    return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()
}

export const arrayToObject = ({ array, prop }) => {
    return array.reduce((obj, item) => {
        obj[item[prop]] = item
        return obj
    }, {})
}
