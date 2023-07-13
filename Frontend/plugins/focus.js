import Vue from 'vue'

// you can set this directive for not mobile device(tablet, desktop, largeDesktop) => ex: v-focus:not-mobile
Vue.directive('focus', {
    inserted(el, binding, VNode) {
        if (binding.value === false) { return }
        if (binding.arg === 'not-mobile' && window.innerWidth < 768) { return }

        el.focus()
    }
})
