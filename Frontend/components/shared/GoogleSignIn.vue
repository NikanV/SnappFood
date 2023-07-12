<template>
  <div class="d-flex flex-column justify-content-around align-items-stretch mt-16 pt-40 border-top">
    <div
        v-google-signin-button="clientId"
        :tabindex="tabindex"
        class="d-flex justify-content-center align-items-center flex-row" />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import jwtDecode from 'jwt-decode'
import notification from '@/mixins/notification'
import { GOOGLE_SIGN_IN } from '@/utils/endpoints'
import { GOOGLE_LOGIN_CLIENT_ID } from '~/utils/constants'
import locationChange from '~/mixins/locationChange'

export default {
  mixins: [notification, locationChange],
  props: {
    tabindex: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    return {
      clientId: GOOGLE_LOGIN_CLIENT_ID,
      googleEmail: null
    }
  },
  computed: {
    ...mapGetters('panel', ['panelUrl'])
  },
  methods: {
    ...mapMutations('users', ['setUserToken']),
    ...mapActions('users', ['setUsernameToLocalStorage', 'refreshAllUserData']),
    OnGoogleAuthSuccess(googleResponse) {
      if (!googleResponse?.credential) {
        this.notifyError(this.googleLoginError())
        return
      }
      const googleUserToken = googleResponse?.credential
      this.googleEmail = jwtDecode(googleUserToken).email
      this.setUsernameToLocalStorage(this.googleEmail)
      this.googleSignin(googleUserToken)
      // this.$emit('set-google-data', true, googleUserToken)
    },
    googleLoginError(errorCode) {
      return {
        SocialLoginDisabled: this.$t('messages.validation.inactiveItemAccount', { item: this.$t('user.googleSignIn') }),
        SocialLoginFailed: this.$t('messages.validation.unsuccessGoogleLogin'),
        Error: this.$t('messages.validation.googleSigninError')
      }[errorCode || 'Error']
    },
    googleSignin(googleUserToken) {
      const loginData = { token: googleUserToken }
      const device = this.$storage.getItem('device')
      if (device) {
        loginData.device = device
      }
      this.$axios
          .$post(
              GOOGLE_SIGN_IN,
              JSON.stringify(loginData),
              {
                headers: {
                  'Content-Type': 'application/json'
                }
              }
          )
          .then((res) => {
            if (!res || !res.key) {
              this.notifyError(this.googleLoginError('SocialLoginDisabled' || res.code))
              return
            }
            this.notifySuccess(this.$t('successfulLogin'))
            this.setUserToken(res.key)
            this.$storage.setItem('device', res.device)
            // const GtmData = { eventValue: 'successfull' }
            // this.$gtm.sendGTMEvent('Signin', GtmData)
            this.$liveChat.setLiveChatEmail(this.googleEmail)
            // TODO: remove this fetch after the new panel has been fully migrated
            this.refreshAllUserData().then(() => this.locationChange(this.panelUrl))
          })
          .catch((res) => {
            if (
                res.response?.status === 400 &&
                res.response?.data?.code === 'MissingOTP'
            ) {
              this.$emit('manage-tfa', googleUserToken)
            } else {
              this.notifyError(this.$t('messages.validation.googleSigninError'))
            }
          })
    }
  }
}
</script>

<i18n>
"en": {
  "signInWithGoogle": "Sign in with Google ",
  "successfulLogin": "Successful Sign In with Google"
}
</i18n>
