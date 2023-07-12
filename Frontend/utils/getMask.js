import createNumberMask from 'text-mask-addons/dist/createNumberMask'
/*pit * to mask string*/
export function getPriceMask () {
    return createNumberMask({
        prefix: '',
        allowDecimal: true,
        decimalLimit: 8,
        includeThousandsSeparator: true,
        allowNegative: false,
        allowLeadingZeroes: false,
        integerLimit: 20
    })
}

export function toEnglishDigit (value) {
    return value?.toString().replace(/[\u0660-\u0669\u06F0-\u06F9]/g, x => x.charCodeAt(0) & 0xF)
}

export function maskEmail(value) {
    const [name, domain] = value.split('@')
    return `${name.substring(0, 3)}****@${domain}`
}

export function maskMobile(value) {
    return value.replace(/\d{5}(\d{2})$/, (_, lastPart) => `****${lastPart}`)
}
