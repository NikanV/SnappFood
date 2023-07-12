import Vue from 'vue'
import { toEnglishDigit } from '~/utils/getMask'
import { NUMBER_REGEXP } from '~/utils/constants'

Vue.directive('english-digit', {
    inserted(el, binding) {
        if (!binding.modifiers.noPattern) {
            el.setAttribute('pattern', '[0-9]*')
        }
        if (binding.modifiers.decimal) {
            el.setAttribute('inputmode', 'decimal')
        } else {
            el.setAttribute('inputmode', 'numeric')
        }
    },
    update(el, binding) {
        const intactValue = el.value
        let modifiedValue = toEnglishDigit(intactValue) // convert Arabic or Persian digits to English digits
        if (!binding.modifiers.allowLeadingZero) {
            modifiedValue = modifiedValue.replace(/^0+(?=\d)/, '') // remove leading zeros
        }

        if (modifiedValue !== intactValue) {
            el.value = modifiedValue
            el.dispatchEvent(new Event('input', { bubbles: true })) // lets Vue knows we have changed the value
        }
    }
})

export const numberPattern = text => (text === '' || NUMBER_REGEXP.test(text))
