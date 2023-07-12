<template>
  <div id="hcaptcha-container">
    <vue-hcaptcha
        ref="hCaptcha"
        :sitekey="siteKey"
        :language="$i18n.locale"
        theme="light"
        :tabindex="tabindex"
        :re-captcha-compat="false"
        size="normal"
        @rendered="onRendered"
        @verify="onVerify"
        @error="onError"
        @reset="onReset"
        @expired="onExpired"
        @challengeExpired="onExpired"
    />
  </div>
</template>

<script>
import VueHcaptcha from '@hcaptcha/vue-hcaptcha'
import { mapState, mapMutations } from 'vuex'
import { HCAPTCHA_LOCAL_SITEKEY, HCAPTCHA_SITEKEY } from '~/utils/constants'

export default {
  name: 'SnappfoodHcaptcha',
  components: { VueHcaptcha },
  props: {
    tabindex: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    return {
      isRendered: false
    }
  },
  computed: {
    ...mapState('panel', ['theme']),
    siteKey () {
      return process.env.NODE_ENV === 'production' ? HCAPTCHA_SITEKEY : HCAPTCHA_LOCAL_SITEKEY
    }
  },
  mounted () {
    this.$emit('update-data', { captcha: '', key: '' })
    this.$emit('update-status', { isLoading: true, error: '' })
  },
  methods: {
    ...mapMutations('app', [
      'switchCaptchaType',
      'removeCaptchaType'
    ]),
    onRendered () {
      this.$emit('update-status', { isLoading: false })
      this.isRendered = true
    },
    onVerify (captcha, key) {
      this.$emit('update-data', { captcha, key })
      this.$emit('update-status', { error: '' })
    },
    onExpired () {
      this.$emit('update-data', { captcha: '', key: '' })
      this.$emit('update-status', { error: this.$t('messages.validation.captchaExpired') })
    },
    onError () {
      this.$emit('update-data', { captcha: '', key: '' })
      this.$emit('update-status', { error: this.$t('replacingHcaptcha') })
      this.switchCaptchaType() // next acceptable and supported captcha
      this.removeCaptchaType('hcaptcha') // temporary disable this type
    },
    onReset () {
      this.$emit('update-data', { captcha: '', key: '' })
      this.$emit('update-status', { isLoading: false, error: '' })
    },
    reset () {
      if (this.isRendered) {
        this.$refs.hCaptcha?.reset()
      }
    }
  }
}
</script>

<i18n>

"en": {
  "replacingHcaptcha": "hCaptcha failed. Replacing..."
}
</i18n>
