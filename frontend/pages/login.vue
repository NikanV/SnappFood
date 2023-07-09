<template>
  <div class="login-class">

  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'
import {} from "../components/shared"
import {loginMethods} from "../utils/configuration";
import { panelUrl, FORGET_PASSWORD as FORGET_PASSWORD_LINK, SIGNUP as SIGNUP_LINK } from '../utils/links'

export default {
  name: "login",
  components: {

  }, data() {
    return {
      username: '',
      password: '',
      isPasswordHidden: true,
      rememberMe: false,
      isSubmitting: false,
      isGoogleLogin: false,
      googleUser: null,
      origin: ENV.origin,
      FORGET_PASSWORD_LINK,
      SIGNUP_LINK,
      tfaCodeValue: null
    }
  }, validations :{
    username:{
      required,
      pattern(val) {
        //todo: return username pattern
      }
    }, password:{
      required
    }
  }, mounted() {

  }, computed: {
    isMobileActive() {
      return loginMethods.mobile
    }
  }, methods: {}, head() {

  }
}
</script>