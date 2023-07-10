<template>
  <div class="login-class">
    <TFA v-if="isGoogleLogin" ref="tfa" :is-submitting="isSubmitting" @send-tfa="sendGoogleTfa" />
    <template v-else>
      <div class="d-flex flex-column justify-content-around align-items-center">
        <h1 class="text-center fw-bold fs-19-sm fs-22 mb-0">
          {{ $t('loginToAccount') }}
        </h1>
        <p class="text-subtitle text-center fs-12 mt-24">
          {{ $t('domainWarning') }}
        </p>
        <!--lock icon-->
        <div
            class="current-url border btn-pill ltr text-title">
          <base-icon
              icon-name="lock"
              icon-color="#15D1C6"
              class="mt-1" />
          {{ origin }}  ` 
        </div>
      </div>
      <form @submit.prevent="loginForm">
        <div class="d-flex flex-column justify-content-around align-items-stretch my-8">
          <!-- username input div -->
          <div class="input-wrapper d-flex flex-column align-items-stretch my-8">
            <label
                class="fs-15 fs-12-sm text-aligned"
                for="email-mobile-input">
              {{ $t(`user.${isMobileActive ? 'emailOrMobile' : 'email'}`) }}></label>
            <input
                id="email-mobile-input"
                v-model.trim="$v.username.$model"
                v-focus
                name="username"
                class="form-control shadow-none ltr"
                :class="{
                'border-default': !$v.username.$dirty,
                'border-danger': $v.username.$error,
                'border-primary': !$v.username.$invalid,
              }"
                aria-describedby="sign-in-username"
                autocomplete="email"
                tabindex="1"
                :placeholder="$t(isMobileActive ? 'usernameInputEmailAndMobile' : 'usernameInputEmail')"
            />
            <p
                v-show="$v.username.$dirty"
                class="validation-feedback text-aligned fs-10 fs-12-md mt-8 mb-0">
              <span v-if="!$v.username.required" class="text-danger">
                {{ $t('messages.validation.required.field', { field: $t(`user.${isMobileActive ? 'emailOrMobile' : 'email'}`) }) }}
              </span>
              <span v-if="!$v.username.pattern" class="text-danger">
                {{ $t(`messages.validation.${isMobileActive ? 'emailOrMobile' : 'email'}`) }}
              </span>
            </p>
          </div>

        </div>
      </form>
    </template>
  </div>
</template>

<script>
import {mapMutations, mapActions, mapGetters} from 'vuex'
import {loginMethods} from "../utils/configuration";
import {panelUrl, FORGET_PASSWORD as FORGET_PASSWORD_LINK, SIGNUP as SIGNUP_LINK} from '../utils/links'
import GoogleSignIn from '../components/shared/GoogleSignIn'
import SubmitButton from '../components/shared/SubmitButton'
import BaseCaptcha from '../components/shared/BaseCaptcha'
import pageView from '../mixins/pageView'
import {
  DEFAULT_LOGIN,
  CHECKED_LOGIN,
  GOOGLE_SIGN_IN
} from '../utils/endpoints'
import TFA from '../components/pages/Tfa'
import BaseIcon from '../components/shared/baseIcon'
import CheckBox from '../components/shared/CheckBox'
import locationChange from '../mixins/locationChange'

export default {
  name: "login",
  components: {
    BaseCaptcha,
    CheckBox,
    BaseIcon,
    TFA,
    SubmitButton,
    GoogleSignIn
  },
  data() {
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
  },
  validations: {
    username: {
      required,
      pattern(val) {
        //todo: return username pattern
      }
    }, password: {
      required,
    },
  }, mounted() {

  },
  computed: {
    ...mapGetters('panel', ['panelUrl']),
    ...mapGetters('app', ['isPwaMode']),
    isMobileActive() {
      return loginMethods.mobile
    }
  },
  methods: {
    ...mapActions('users', ['userLogin', 'setUsernameToLocalStorage']),
    ...mapMutations('app', ['setCaptchaTypes']),
    manageGoogleAccountTfa (googleLogin) {
      this.googleUser = googleLogin
      this.isGoogleLogin = true
    },
    sendGoogleTfa (tfaCode) {
      this.loginHeaders = { 'x-totp': tfaCode }
      this.loginUser({ token: this.googleUser }, GOOGLE_SIGN_IN)
    },
    loginUser(loginData, endpoint) {
      this.isSubmitting = true
      const device = this.$storage.getItem('device')
      if (device) {
        loginData.device = device
      }
      this.userLogin({
        endpoint,
        payload: loginData,
        headers: this.loginHeaders
      })
          .then(({successful, error, isCaught, message}) => {
            if (successful) {
              this.notifySuccess(this.$t('messages.successfulLogin'))
              // Login complete -> goto login redirect url
              this.locationChange(panelUrl())
            } else if (isCaught) {
              const status = error?.response?.status
              const errorCode = error?.response?.data.code
              // 403 errors: permission denied
              const errorMessage = error?.response?.data?.non_field_errors?.[0]
              if (errorMessage) this.notifyError(this.loginErrors(status, errorCode, errorMessage || ''))
              // 429 errors: Too Many Requests
              if (status === 429) {
                this.requiresCheckedLogin = true
              }
              // invalid token
              if (errorCode === 'InvalidOTP') {
                if (this.isGoogleLogin) {
                  this.$refs.tfa.setInvalid(true)
                } else {
                  this.tfaCodeValue = ''
                }
              }
              // unacceptable captcha
              if (errorCode === 'CaptchaTypeUnacceptable') {
                this.setCaptchaTypes(error?.response?.data?.acceptableTypes)
              }
              // server encountered an unexpected condition
              if (!status || status === 500) {
                this.notifyError(this.$t('messages.validation.networkError'))
              }
            }
            // api error
            else {
              this.notifyError(this.$td(`messages.apiResponses.${error}`, null, message))
            }
          })
          .finally(() => {
            this.isSubmitting = false
            this.resetCaptcha()
          })
    },
    loginForm() {
      this.username = this.username.toLowerCase()
      const endpoint = this.requiresCheckedLogin
          ? CHECKED_LOGIN
          : DEFAULT_LOGIN

      const loginData = {
        username: this.username,
        password: this.password,
        remember: this.rememberMe ? 'yes' : 'no',
        ...this.captchaData
      }
      this.loginHeaders = {'x-totp': this.tfaCodeValue || 0}
      this.setUsernameToLocalStorage(this.username)
      this.loginUser(loginData, endpoint)
    },
    loginErrors(status, errorCode, errorMessage) {
      if (errorMessage === 'Unable to log in with provided credentials.') {
        errorCode = 'InvalidCredential'
      }
      if (errorMessage === 'You do not have permission to perform this action.') {
        errorCode = 'Error'
      }

      return {
        400: {
          Error: this.$t('messages.validation.tryAgainLater'),
          InvalidCaptcha: this.$t('messages.validation.captchaVerification'),
          MissingCaptcha: this.$t('messages.validation.captcha'),
          CaptchaTypeUnacceptable: this.$t('messages.apiResponses.captchaTypeUnacceptable'),
          MissingOTP: this.$t('messages.validation.required.twoFA'),
          RedundantOTP: this.$t('messages.validation.inactiveItemAccount', {item: this.$t('panel.tfa')}),
          InvalidOTP: this.$t('messages.validation.wrongData', {item: this.$t('panel.tfa')}),
          LoginIranOnly: this.$t('messages.validation.required.LoginIranOnly'),
          LoginDisabled: this.$t('messages.validation.required.LoginDisabled')
        },
        403: {
          Error: this.$t('messages.validation.tryAgainLater'),
          InvalidCredential: this.$t('messages.apiResponses.invalidCredential', {type: this.username?.includes('@') ? this.$t('panel.email') : this.$t('panel.mobileNumber')})
        },
        405: {
          Error: this.$t('messages.validation.tryAgainLater')
        },
        429: {
          Error: this.$t('messages.validation.loginRedundantRequest'),
          requiresCheckedLogin: true
        }
      }[status || 400][errorCode || 'Error']
    }
  }, head() {

  }
}
</script>