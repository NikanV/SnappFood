<template>
  <div id="recaptcha-container">
    <recaptcha
        ref="reCaptcha"
        data-theme="light"
        @error="onError"
        @expired="onExpired"
        @success="onSuccess"
    />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'GoogleRecaptcha',
  props: {
    tabindex: {
      type: String,
      required: false,
      default: ''
    }
  },
  beforeMount() {
    try {
      this.$recaptcha.language = this.$i18n.locale
    } catch (e) {}
  },
  mounted () {
    this.$emit('update-data', { captcha: '', key: '' })
    this.$emit('update-status', { isLoading: false, error: '' })
  },
  methods: {
    ...mapMutations('app', [
      'switchCaptchaType',
      'removeCaptchaType'
    ]),
    onSuccess (captcha, key) {
      this.$emit('update-data', { captcha, key })
      this.$emit('update-status', { error: '' })
    },
    onExpired () {
      this.$emit('update-data', { captcha: '', key: '' })
      this.$emit('update-status', { error: this.$t('messages.validation.captchaExpired') })
    },
    onError () {
      this.$emit('update-data', { captcha: '', key: '' })
      this.$emit('update-status', { error: this.$t('replacingReCaptcha') })
      this.switchCaptchaType() // next acceptable and supported captcha
      this.removeCaptchaType('recaptcha') // temporary disable this type
    },
    reset () {
      try {
        this.$recaptcha?.reset()
      } catch (e) {}
      this.$emit('update-data', { captcha: '', key: '' })
      this.$emit('update-status', { isLoading: false, error: '' })
    }
  }
}
</script>

<i18n>

"en": {
  "replacingReCaptcha": "reCaptcha failed. Replacing..."
}

</i18n>

<style lang="scss" scoped>
.g-recaptcha {
  height: 74px;
}
</style>
