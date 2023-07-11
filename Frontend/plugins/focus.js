import Vue from 'vue'

// this directive is for any device but mobile (tablet, desktop, largeDesktop) => ex: v-focus:not-mobile
Vue.directive('focus', {
    inserted(el, binding, VNode) {
        if (binding.value === false) { return }
        if (binding.arg === 'not-mobile' && window.innerWidth < 768) { return }

        el.focus()
    }
})
