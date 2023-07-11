<template>
  <div class="registration-container">
    <!--mobile otp -->
    <mobile-otp
        v-if="isOtpAvailable"
        ref="otp"
        :is-submitting="isSubmitting"
        :phone-number="username"
        @return-to-form="returnToForm"
        @send-otp-failed="returnToForm"
        @otp-completed="submit" />
<!--otp not available-->
    <template v-else>
      <div class="d-flex flex-column justify-content-around align-items-center mb-8">

        <h1 class="text-center fw-bold fs-19-sm fs-22 mb-0">
          {{ $t('panel.register') }}
        </h1>
        <p class="text-subtitle text-center fs-12 mt-24">
          {{ $t('welcomeMsg') }}
        </p>
      </div>
      <form @submit.prevent="submit">
        <div class="d-flex flex-column justify-content-around align-items-stretch my-8">
          <!-- <email-mobile input> -->
          <div class="input-wrapper d-flex flex-column align-items-stretch my-8 position-relative custom-scroll-bar">
            <label
                class="fs-15 fs-12-sm text-aligned"
                for="email-mobile-input">
              {{ $t(`user.${isMobileActive ? 'emailOrMobile' : 'email'}`) }}
            </label>
            <!-- v-model.trim.lazy="$v.username.$model" -->
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
                autofocus
                list="useremail"
                tabindex="1"
                autocomplete="off"
                @focus="isUsernameFocus=true"
                @blur="isUsernameFocus=false"
            />
            <p
                v-show="
                $v.username.$dirty"
                class="validation-feedback text-aligned fs-10 fs-12-md mt-8 mb-0">
              <span v-if="!$v.username.required" class="text-danger">
                {{ $t('messages.validation.required.field', { field: $t(`user.${isMobileActive ? 'emailOrMobile' : 'email'}`) }) }}
              </span>
              <span v-if="!$v.username.pattern" class="text-danger">
                {{ $t(`messages.validation.${isMobileActive ? 'emailOrMobile' : 'email'}`) }}
              </span>
            </p>
            <!-- </email-mobile input> -->
            <!--concern to input email-->
            <ul v-show="showSuggests" class="position-absolute suggestion p-0" dir="ltr">
              <li v-for="(item,index) in emailArray" :key="index" @mousedown="setUsername(item)">
                <span id="sp" class="text-subtitle">{{ emailUserPart }}</span>{{ item }}</li>
            </ul>
            <!---->
          </div>
          <!-- <password input> -->
          <div class="input-wrapper d-flex flex-column align-items-stretch my-8">
            <label
                class="fs-15 fs-12-sm text-aligned"
                for="password-input">
              {{ $t('user.password') }}
            </label>
            <div class="input-with-btn">
              <input
                  id="password-input"
                  ref="passwordRef"
                  v-model="$v.password.$model"
                  class="form-control shadow-none ltr"
                  title="گذرواژه"
                  :class="{
                  'border-default': !$v.password.$dirty,
                  'border-danger': $v.password.$error,
                  'border-primary': !$v.password.$invalid,
                }"
                  :type="isPasswordHidden ? 'password' : 'text'"
                  tabindex="2"
                  autocomplete="new-password"
              />
              <span
                  class="input-btn btn"
                  @click="isPasswordHidden = !isPasswordHidden">
                <base-icon
                    :icon-name="isPasswordHidden ? 'visibility': 'visibility_off'"
                    icon-color="#A3A5A8"
                    size="large" />
              </span>
            </div>
            <p
                v-show="$v.password.$dirty"
                class="validation-feedback text-aligned fs-10 fs-12-md mt-8 mb-0">
              <span v-if="!$v.password.required" class="text-danger">
                {{ $t('messages.validation.required.field', { field: $t('user.password') }) }}
              </span>
            </p>
            <ul
                v-show="$v.password.$dirty"
                class="text-aligned list-style-none fs-12 fs-10-sm p-0 mx-0 mt-8 mb-0">
              <li
                  v-for="requirement of passwordRequirements"
                  :key="requirement.caption"
                  class="text-subtitle">
                <base-icon
                    :icon-name="requirement.isMet ? 'tick' : 'close'"
                    :icon-color="requirement.isMet ? '#15D1C6' : '#FC3C55'" />
                {{ $t(requirement.caption) }}
              </li>
            </ul>
          </div>
          <!-- </password input> -->
          <!-- <referral input> -->
          <div class="input-wrapper d-flex flex-column align-items-stretch my-8">
            <label
                class="fs-15 fs-12-sm text-aligned"
                for="referral-code-input">
              {{ $t('optionalReferralCode') }}
            </label>
            <!--TODO: need directive-->
            <input
                id="referral-code-input"
                v-model="referralCode"
                class="form-control shadow-none ltr mb-8"
                :class="referralCode ? 'border-primary' : 'border-default'"
                type="text"
                title="کد دعوت (اختیاری)"
                tabindex="3"
                autocomplete="off"
            />
          </div>
          <!-- </referral input> -->
          <!-- <captcha input> -->
          <base-captcha
              ref="captcha"
              tabindex="4"
              class="input-wrapper d-flex flex-column justify-content-center align-items-center mt-24 mb-8"
              @update-captcha-data="updateCaptchaData" />
          <!-- </captcha input> -->
          <!-- <agreement input> -->
          <div class="input-wrapper d-flex flex-column align-items-stretch mt-24 mb-8">
            <check-box v-model="$v.agreementAcceptation.$model" tabindex="5" class="mb-8">
              <span class="text-title" v-html="$t('agreementCheckbox')" />
            </check-box>
            <p
                v-show="$v.agreementAcceptation.$dirty"
                class="validation-feedback text-aligned fs-10 fs-12-md mb-0">
              <span v-if="!$v.agreementAcceptation.accepted" class="text-danger">
                {{ $t('agreementAcceptationRequired') }}
              </span>
            </p>
          </div>
          <!-- </agreement input> -->
          <div class="d-flex flex-column justify-content-around align-items-stretch my-16">
            <submit-button
                :is-submitting="isSubmitting"
                :is-disabled="$v.$invalid"
                type="submit"
                tabindex="6"
                custom-classes="btn-primary btn-block my-16 fs-15 fs-19-lg">
              {{ isSubmitting ? $t('panel.submitting') : $t('panel.register') }}
            </submit-button>
            <div class="d-flex justify-content-between align-items-center mt-8 fs-15 fs-12-sm">
              <p class="m-0 text-title">
                {{ $t('signedUpBefore') }}
                <hybrid-link
                    :to="LOGIN_LINK"
                    tabindex="7"
                    css-class="btn btn-text-primary btn-sm px-1 fs-15 fs-12-sm">
                  {{ $t('user.login') }}
                </hybrid-link>
              </p>
            </div>
          </div>
        </div>
      </form>
      <google-sign-in tabindex="9" @manage-tfa="manageGoogleAccountTfa" /></template>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { required, email } from 'vuelidate/lib/validators'
// import vSelect from 'vue-select'
import BaseIcon from '~/components/shared/baseIcon'
import CheckBox from '~/components/shared/CheckBox'
import SubmitButton from '~/components/shared/SubmitButton'
import { LOGIN as LOGIN_LINK, VERIFICATION } from '~/utils/links'
import notification from '~/mixins/notification'
import captcha from '~/mixins/captcha'
import guest from '~/mixins/guest'
import GoogleSignIn from '~/components/shared/GoogleSignIn'
import BaseCaptcha from '~/components/shared/BaseCaptcha'
import pageView from '~/mixins/pageView'
import locationChange from '~/mixins/locationChange'
import MobileOtp from '~/components/pages/mobileOtp'
import { signupMethods } from '~/utils/configuration'

export default {
  name: 'Signup',
  components: {
    BaseCaptcha,
    CheckBox,
    BaseIcon,
    SubmitButton,
    GoogleSignIn,
    MobileOtp
  },
  mixins: [notification, captcha, guest, pageView, locationChange],
  layout: 'auth',
  data () {
    return {
      username: '',
      password: '',
      isPasswordHidden: true,
      emailSuggestion: ['@gmail.com', '@yahoo.com', '@hotmail.com', '@outlook.com', '@ymail.com', '@live.com', '@protonmail.com', '@proton.me', '@icloud.com', '@chmail.ir'],
      referralCode: '',
      agreementAcceptation: false,
      isSubmitting: false,
      LOGIN_LINK,
      VERIFICATION,
      isUsernameFocus: true,
      isOtpAvailable: false
    }
  },
  computed: {
    domain() {
      return this.username.toLowerCase().split('@')[1] || ''
    },
    emailUserPart() {
      return this.username.toLowerCase().split('@')[0] || ''
    },
    emailArray() {
      return this.username.includes('@')
          ? this.emailSuggestion
          : []
    },
    showSuggests () {
      return this.username && this.isUsernameFocus && this.emailArray.length > 0
    },
    passwordRequirements () {
      return [
        {
          caption: 'atLeastOneLetter',
          isMet: /.*?[A-Za-z]/.test(this.password)
        },
        {
          caption: 'atLeastOneNumber',
          isMet: /.*[0-9].*/.test(this.password)
        },
        {
          caption: 'minEightChar',
          isMet: this.password.length >= 8
        }
      ]
    },
    isPasswordRequirementsMet () {
      return this.passwordRequirements.every(item => item.isMet)
    },
    isMobileActive() {
      return signupMethods.mobile
    }
  },
  validations() {
    return {
      username: {
        required,
        pattern(val) {
          return email(val) || (this.isMobileActive && /^09(\d{9})$/.test(val))
        }
      },
      password: {
        required,
        requirements() {
          return this.isPasswordRequirementsMet
        }
      },
      agreementAcceptation: {
        accepted: val => val
      }
    }
  },
  created() {
    const { refcode, email, username } = this.$router.currentRoute.query
    this.referralCode = refcode || (process.client && this.$storage.getItem('ref-code')) || ''
    this.username = email || username || ''
  },
  methods: {
    ...mapActions('users', ['registerUser', 'setUsernameToLocalStorage']),

    // sign up doesn't have OTP so redirect user to login form
    manageGoogleAccountTfa() {
      this.notifyError(this.$t('tryWithLogin'))
      this.$router.push(this.localePath(LOGIN_LINK))
    },
    setUsername(domain) {
      this.username = `${this.emailUserPart}${domain}`
      this.isUsernameFocus = false
      this.$nextTick(() => {
        this.$refs.passwordRef?.focus()
      })
    },
    submit ({ otp, captchaData = this.captchaData }) {
      this.isSubmitting = true
      this.username = this.username.toLowerCase()

      if (email(this.username) || otp) {
        this.registerUser({ ...this, otp, captchaData }).then(({ successful, error, errors, message }) => {
          if (successful) {
            this.notifySuccess(this.$t('RegistrationSuccessful'))
            this.setUsernameToLocalStorage(this.username)
            this.$storage.removeItem('ref-code')
            const GtmData = { eventValue: 'successfull' }
            this.$gtm.sendGTMEvent('SignUp', GtmData)

            this.locationChange(VERIFICATION)
          } else if (error === 'IncompleteRegisterError') {
            this.isOtpAvailable = true
          } else if (errors) {
            errors.forEach(error => this.notifyError(error))
          } else {
            this.notifyError(this.$td(`messages.apiResponses.${error}`, null, message))
          }
        })
            .finally(() => {
              this.isSubmitting = false
              this.resetCaptcha()
              this.$refs.otp.showOrResetCaptcha()
            })
      } else {
        this.isSubmitting = false
        this.isOtpAvailable = true
      }
    },
    returnToForm () {
      this.isOtpAvailable = false
    }
  },
  head () {
    return {
      title: this.$t('pageTitle'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'برای خرید و فروش ارزهای دیجیتال وارد حساب کاربری خود در نوبیتکس شوید یا ثبت‌نام کنید'
        },
        {
          itemprop: 'description',
          content: 'برای خرید و فروش ارزهای دیجیتال وارد حساب کاربری خود در نوبیتکس شوید یا ثبت‌نام کنید'
        },
        {
          property: 'og:title',
          content: this.$t('pageTitle')
        },
        {
          property: 'og:description',
          content: 'برای خرید و فروش ارزهای دیجیتال وارد حساب کاربری خود در نوبیتکس شوید یا ثبت‌نام کنید'
        },
        {
          name: 'google-signin-client_id',
          content: '1039155241638-5ehvg8etjmdo2i6v7h8553m3hak0n7sp.apps.googleusercontent.com'
        }
      ]
    }
  }
}
</script>

<i18n>
{
  "en": {
    "pageTitle": "Registration | Nobitex",
    "welcomeMsg": "Welcome to Nobitex. Create your account for free.",
    "optionalReferralCode": "Referral Code (Optional)",
    "agreementCheckbox" : "I have read and accept the <a href='https://nobitex.ir/policies/terms/' class='btn-text-primary' target='_blank' >rules and regulations</a> of Nobitex.",
    "signedUpBefore": "Have you registered before?",
    "signupHelp": "Signup Help",
    "signInWithGoogle": "Sign in with Google ",
    "minEightChar": "At least 8 characters",
    "atLeastOneLetter": "At least one English letter",
    "atLeastOneNumber": "At least one number",
    "agreementAcceptationRequired": "Acceptance of Nobitex rules is required to register and use the Services.",
    "RegistrationSuccessful": "Registration completed successfully.",
    "tryWithLogin":"Please proceed through the login page."
  }
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

/* remove referalCode input arrows */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

/* specifically hide the arrow on focus */
input::-webkit-calendar-picker-indicator {
  display: none !important;
}

.text-danger {
  color: red;
}

.suggestion {
  top: 65px;
  left: 0;
  right: 0;
  box-shadow: 0 1px 2px rgb(204, 204, 204);
  border-radius: 0 1px 2px 2px;
  overflow: hidden;
  overflow-y: auto;
  background: white;
  z-index: 101;
  list-style: none;

  li {
    padding: 10px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: var(--hover-color);
    }
  }
}
</style>
