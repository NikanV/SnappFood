<template>
  <div v-show="isRendered" id="arcaptcha-container">
    <arcaptcha-vue
        ref="arCaptcha"
        :site_key="siteKey"
        :lang="$i18n.locale"
        theme="light"
        :tabindex="tabindex"
        :callback="onSuccess"
        :rendered_callback="onRendered"
        :error_callback="onError"
        :expired_callback="onExpired"
        :chlexpired_callback="onExpired"
        :reset_callback="onReset"
        color="#784ed1"
    />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import ArcaptchaVue from 'arcaptcha-vue'
import { ARCAPTCHA_TESTNET_SITEKEY, ARCAPTCHA_MAINNET_SITEKEY } from '../../utils/constants'

export default {
  name: 'Arcaptcha',
  components: { ArcaptchaVue },
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
    siteKey () {
      return process.env.isTestnet ? ARCAPTCHA_TESTNET_SITEKEY : ARCAPTCHA_MAINNET_SITEKEY
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
    onSuccess (captcha, key) {
      this.$emit('update-data', { captcha, key })
      this.$emit('update-status', { error: '' })
    },
    onRendered () {
      this.$emit('update-status', { isLoading: false })
      this.isRendered = true
    },
    onExpired () {
      this.$emit('update-data', { captcha: '', key: '' })
      this.$emit('update-status', { error: this.$t('messages.validation.captchaExpired') })
    },
    onError () {
      this.$emit('update-data', { captcha: '', key: '' })
      this.$emit('update-status', { error: this.$t('replacingArCaptcha') })
      this.switchCaptchaType() // next acceptable and supported captcha
      this.removeCaptchaType('arcaptcha') // temporary disable this type
    },
    onReset () {
      this.$emit('update-data', { captcha: '', key: '' })
      this.$emit('update-status', { isLoading: false, error: '' })
    },
    reset () {
      try {
        this.$refs.arCaptcha?.reset()
      } catch (e) {}
      this.$emit('update-data', { captcha: '', key: '' })
      this.$emit('update-status', { isLoading: false, error: '' })
    }
  }
}
</script>

<i18n>
{
  "fa": {
    "replacingArCaptcha": "آرکپچا به مشکل خورد. در حال جایگزینی..."
  },
  "en": {
    "replacingArCaptcha": "ARCaptcha failed. Replacing..."
  }
}
</i18n>
