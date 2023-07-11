<template>
  <div class="login-class">
    <!--is login by google-->
    <TFA v-if="isGoogleLogin" ref="tfa" :is-submitting="isSubmitting" @send-tfa="sendGoogleTfa" />
    <!--is login by email or mobile and password-->
    <template v-else>
      <div class="d-flex flex-column justify-content-around align-items-center">
        <h1 class="text-center fw-bold fs-19-sm fs-22 mb-0">
<!--show login page text-->
          {{ $t('loginToAccount') }}
        </h1>
        <p class="text-subtitle text-center fs-12 mt-24">
<!--show check domain text-->
          {{ $t('domainWarning') }}
        </p>
      </div>
<!--login form-->
      <form @submit.prevent="loginForm">
        <div class="d-flex flex-column justify-content-around align-items-stretch my-8">
          <!-- <email-mobile input> -->
          <div class="input-wrapper d-flex flex-column align-items-stretch my-8">
            <label
                class="fs-15 fs-12-sm text-aligned"
                for="email-mobile-input">
              {{ $t(`user.${isMobileActive ? 'emailOrMobile' : 'email'}`) }}
            </label>
<!--get email-mobile input-->
<!-- v-focus: focus if device is a laptop phone-->
            <input
                id="email-mobile-input"
                v-model.trim="$v.username.$model"
                v-focus
                name="username"
                class="form-control shadow-none ltr"
                :class="{
                /*check username*/
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
<!--password input-->
        <div class="input-wrapper d-flex flex-column align-items-stretch my-8">
          <label
              class="fs-15 fs-12-sm text-aligned"
              for="password-input">
            {{ $t('user.password') }}
          </label>
          <div class="input-with-btn">
            <input
                id="password-input"
                v-model="$v.password.$model"
                name="password"
                class="form-control shadow-none ltr"
                :class="{
                  /*check password*/
                  'border-default': !$v.password.$dirty,
                  'border-danger': $v.password.$error,
                  'border-primary': !$v.password.$invalid,
                }"
                :type="isPasswordHidden ? 'password' : 'text'"
                aria-describedby="sign-in-password"
                autocomplete="current-password"
                tabindex="2"
            />
<!--hide/show password icon-->
            <span
                class="input-btn btn"
                @click="isPasswordHidden = !isPasswordHidden">
                <base-icon
                    :icon-name="isPasswordHidden ? 'visibility': 'visibility_off'"
                    icon-color="#A3A5A8"
                    size="large" />
              </span>
          </div>
<!--check password-->
          <p
              v-show="$v.password.$dirty"
              class="validation-feedback text-aligned fs-10 fs-12-md mt-8 mb-0">
              <span v-if="!$v.password.required" class="text-danger">
                {{ $t('messages.validation.required.field', { field: $t('user.password') }) }}
              </span>
          </p>
<!--captcha input-->
        <base-captcha
            ref="captcha"
            name="cp"
            tabindex="4"
            class="input-wrapper d-flex flex-column justify-content-center align-items-center mt-24 mb-8"
            @update-captcha-data="updateCaptchaData" />
<!--submit button, register link, forgot password link-->
        <div class="d-flex flex-column justify-content-around align-items-stretch my-16">
          <submit-button
              :is-submitting="isSubmitting"
              :is-disabled="$v.$invalid"
              type="submit"
              tabindex="5"
              custom-classes="btn-primary btn-block my-16 fs-15 fs-19-lg">
            {{ isSubmitting ? $t('panel.submitting') : $t('user.signIn') }}
          </submit-button>
<!--forgot password-->
          <div class="d-flex justify-content-between align-items-center mt-8 fs-15 fs-12-sm">
            <p class="m-0 text-title">{{ $t('forgotYourPassword') }}</p>
            <hybrid-link
                :to="FORGET_PASSWORD_LINK"
                tabindex="6"
                css-class="btn btn-text-primary btn-sm px-0 fs-15 fs-12-sm">
              {{ $t('passwordRecovery') }}
            </hybrid-link>
          </div>
<!--register-->
          <div class="d-flex justify-content-between align-items-center mt-8 fs-15 fs-12-sm">
            <p class="m-0 text-title">{{ $t('dontHaveAccount') }}</p>
            <hybrid-link
                :to="SIGNUP_LINK"
                tabindex="7"
                css-class="btn btn-text-primary btn-sm px-0 fs-15 fs-12-sm">
              {{ $t('freeRegistration') }}
            </hybrid-link>
          </div>
        </div>
      </form>
      <!--sign in with google-->
      <google-sign-in tabindex="8" @manage-tfa="manageGoogleAccountTfa" />
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
import locationChange from '../mixins/locationChange'
import HybridLink from "../components/shared/HybridLink";
import {email, integer, minLength, required} from "vuelidate/lib/validators";

export default {
  name: 'Login',
  components: {
    BaseCaptcha,
    BaseIcon,
    TFA,
    SubmitButton,
    GoogleSignIn
  },
  layout: 'auth',
  mixins: [notification, captcha, guest, pageView, locationChange],
  data () {
    return {
      username: '',
      password: '',
      isPasswordHidden: true,
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
        return email(val) || (this.isMobileActive && /^09(\d{9})$/.test(val))
      }
    },
    password: {
      required
    },
    tfaCodeValue: {
      integer,
      minLength: minLength(6)
    }
  },
  computed: {
    ...mapGetters('panel', ['panelUrl']),
    ...mapGetters('app', ['isPwaMode']),
    isMobileActive() {
      return loginMethods.mobile
    }
  },
  mounted() {

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
    loginUser (loginData, endpoint) {
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
          .then(({ successful, error, isCaught, message }) => {
            if (successful) {
              this.notifySuccess(this.$t('messages.successfulLogin'))
              // Login complete, goto login redirect url
              this.locationChange(panelUrl())
            } else if (isCaught) {
              const status = error?.response?.status
              const errorCode = error?.response?.data.code
              // 403 errors
              const errorMessage = error?.response?.data?.non_field_errors?.[0]
              if (errorMessage) this.notifyError(this.loginErrors(status, errorCode, errorMessage || ''))

              if (status === 429) {
                this.requiresCheckedLogin = true
              }
              if (errorCode === 'InvalidOTP') {
                if (this.isGoogleLogin && this.$refs.tfa) {
                  this.$refs.tfa.setInvalid(true)
                } else {
                  this.tfaCodeValue = ''
                }
              }
              if (errorCode === 'CaptchaTypeUnacceptable') {
                this.setCaptchaTypes(error?.response?.data?.acceptableTypes)
              }
              if (!status || status === 500) {
                this.notifyError(this.$t('messages.validation.networkError'))
              }
            } else {
              this.notifyError(this.$td(`messages.apiResponses.${error}`, null, message))
            }
          })
          .finally(() => {
            this.isSubmitting = false
            this.resetCaptcha()
          })
    },
    loginForm () {
      this.username = this.username.toLowerCase()
      const endpoint = this.requiresCheckedLogin
          ? CHECKED_LOGIN
          : DEFAULT_LOGIN

      const loginData = {
        username: this.username,
        password: this.password,
        ...this.captchaData
      }
      this.loginHeaders = { 'x-totp': this.tfaCodeValue || 0 }
      this.setUsernameToLocalStorage(this.username)
      this.loginUser(loginData, endpoint)
    },
    loginErrors (status, errorCode, errorMessage) {
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
          RedundantOTP: this.$t('messages.validation.inactiveItemAccount', { item: this.$t('panel.tfa') }),
          InvalidOTP: this.$t('messages.validation.wrongData', { item: this.$t('panel.tfa') }),
          LoginIranOnly: this.$t('messages.validation.required.LoginIranOnly'),
          LoginDisabled: this.$t('messages.validation.required.LoginDisabled')
        },
        403: {
          Error: this.$t('messages.validation.tryAgainLater'),
          InvalidCredential: this.$t('messages.apiResponses.invalidCredential', { type: this.username?.includes('@') ? this.$t('panel.email') : this.$t('panel.mobileNumber') })
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
  },
  head () {
    return {
      title: this.$t('pageTitle'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'please login to place your order'
        },
        {
          itemprop: 'description',
          content: 'please login to place your order'
        },
        {
          property: 'og:title',
          content: this.$t('pageTitle')
        },
        {
          property: 'og:description',
          content: 'please login to place your order'
        }
      ]
    }
  }
}
</script>

<i18n>
"en": {
  "pageTitle": "Login | Nobitex",
  "loginToAccount": "Log into Account",
  "domainWarning": "Please check that you are visiting the correct URL",
  "forgotYourPassword": "Forgot your password?",
  "passwordRecovery": "Password Recovery",
  "dontHaveAccount": "Don't have an account yet?",
  "freeRegistration": "Free Registration",
  "tfaMessage": "If you have two-factor authentication enabled",
  "tfaHint": "If you have not activated the 2FA code, leave this field blank.",
  "usernameInputEmail": "Valid Email",
  "usernameInputEmailAndMobile": "Valid Email or phone number"
}
</i18n>

<style lang="scss" scoped>
.input-with-btn {
  position: relative;

  .input-btn {
    position: absolute;
    right: (16/16) + rem;
    top: 20%;
    cursor: pointer;
    padding: 0;
  }
}

.current-url {
  font-size: 0.9375rem;
  line-height: 1.3125rem;
  height: 2.25rem;
  padding: 0.375rem 1.5rem;
}

.h-38 {
  height: 38px;

  html[dir="rtl"] &::-webkit-input-placeholder {
    @media only screen and (max-width: 366px) {
      top: -7px;
      white-space: pre-line;
      position: relative;
    }
  }

  html[dir="ltr"] &::-webkit-input-placeholder {
    @media screen and (max-width: 360px) {
      top: -5px;
      white-space: pre-line;
      position: relative;
    }
  }
}
</style>
