import Dec from 'decimal.js'

/**
 * @description decimal library general configuration.
 * @see https://mikemcl.github.io/decimal.js/#constructor-properties
 */
Dec.set({
    rounding: Dec.ROUND_DOWN, // always round down
    precision: 24,
    toExpNeg: -9e15, // never display in exponential notation
    toExpPos: 9e15 // never display in exponential notation
})

/**
 * @function formatToDecimalPlaces
 * @description Returns a rounded and thousands separated number in string with arbitrary decimal places.
 * @param {Decimal} decimal: an instance of Decimal.js to be formatted.
 * @param {Number} decimalPlaces: number of decimal places.
 * @param {Boolean} toFixed: whether append trailing zeros.
 * @param {String} separator: thousands separator symbol.
 * @return {String} formatted Decimal number in string.
 */
const formatToDecimalPlaces = function(decimal, decimalPlaces, toFixed = false, separator = ',') {
    if (!Dec.isDecimal(decimal) || decimal.isNaN()) {
        throw new Error('[formatToDecimalPlaces]: first argument must be a Decimal.js instance and has a value other than NaN.')
    }

    const rounded = toFixed ? decimal.toFixed(decimalPlaces) : decimal.toDecimalPlaces(decimalPlaces).toString()

    const [intPart, decPart] = rounded.split('.')
    const separatedIntPart = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator)

    return decPart ? `${separatedIntPart}.${decPart}` : separatedIntPart
}

export { Dec, formatToDecimalPlaces }
