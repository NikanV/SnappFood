import Vue from 'vue'

export default Vue.directive('google-signin-button', {
  bind (el, binding, vNode) {
    const googleBtnConfig = { theme: 'outline', size: 'large', text: 'signin', locale: vNode.context.$i18n.locale, width: 300 }
    CheckComponentMethods()
    const clientId = binding.value
    const googleSignInAPI = document.createElement('script')
    googleSignInAPI?.setAttribute(
      'src',
      'https://accounts.google.com/gsi/client'
    )
    googleSignInAPI?.setAttribute('async', '')
    googleSignInAPI?.setAttribute('defer', '')
    document.head.appendChild(googleSignInAPI)
    googleSignInAPI.onload = InitGoogleButton

    function InitGoogleButton () {
      window.google?.accounts.id.initialize({
        client_id: clientId,
        callback: vNode.context.OnGoogleAuthSuccess
      })
      window.google?.accounts.id.renderButton(el, googleBtnConfig)
      window.google?.accounts.id.prompt()
    }

    function CheckComponentMethods () {
      if (!vNode.context.OnGoogleAuthSuccess) {
        throw new Error(
          'The method OnGoogleAuthSuccess must be defined on the component'
        )
      }
    }
  }
})
