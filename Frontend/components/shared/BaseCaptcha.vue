<template>
  <div id="captcha-container" class="position-relative">
    <!-- loading -->
    <div
        v-if="isLoading"
        :style="config ? config.style : { width: '304px' }"
        class="shimmer captcha-shimmer border-default d-flex justify-content-center align-items-center">
      <small class="text-subtitle">{{ $t('loadingCaptcha') }}</small>
    </div>
    <!-- main component -->
    <component
        :is="captchaComponent"
        v-if="isInitialized"
        id="captcha-component"
        ref="captcha"
        :style="config && config.style"
        :is-loading="isLoading"
        :tabindex="tabindex"
        @update-status="updateStatus"
        @update-data="updateData"
    />
    <!-- error -->
    <p
        v-if="error"
        class="validation-feedback text-center fs-10 mt-8 mb-0 text-danger">
      {{ isNetworkError ? $t('networkError') : error }}
      <button v-if="isReinitializeButtonVisible" class="btn-text-primary p-0 mt-1 fs-12" type="button" @click="reinitialize">
        <base-icon icon-name="refresh" viewbox="0 0 16 20.5" />
        {{ $t('reinitialize') }}
      </button>
    </p>
    <!-- switch button -->
    <button
        v-if="isSwitchButtonVisible"
        type="button"
        :class="{ fade: isLoading }"
        class="switch-button btn btn-sm btn-text-primary mt-1"
        @click="switchCaptchaType({ save: true })">
      {{ $t('switchCaptcha') }}
    </button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import NobitexArcaptcha from 'arcaptcha'
import GoogleRecaptcha from 'googleRecaptcha'
import NobitexHcaptcha from 'hcaptcha'
import NobitexCaptcha from 'captcha'
import BaseIcon from 'baseIcon'
import { asyncTimeout } from '../../utils/general'

export default {
  name: 'BaseCaptcha',
  components: { BaseIcon },
  props: {
    tabindex: {
      type: String,
      required: false,
      default: ''
    }
  },
  data () {
    return {
      isInitialized: false,
      isLoading: true,
      retryCount: 0,
      captcha: '',
      key: '',
      error: false
    }
  },
  computed: {
    ...mapState('app', [
      'activeCaptchaTypes',
      'captchaType'
    ]),
    captchaComponent() {
      return {
        recaptcha: GoogleRecaptcha,
        hcaptcha: NobitexHcaptcha,
        arcaptcha: NobitexArcaptcha,
        'django-captcha': NobitexCaptcha
      }[this.captchaType]
    },
    config() {
      return {
        recaptcha: {
          style: {
            width: '304px',
            height: '74px'
          }
        },
        hcaptcha: {
          style: {
            width: '304px'
          }
        },
        arcaptcha: {
          style: {
            width: '304px',
            'min-height': '72px'
          }
        },
        'django-captcha': {
          style: {
            width: '210px'
          }
        }
      }[this.captchaType]
    },
    isSwitchButtonVisible () {
      return this.activeCaptchaTypes.length > 1
    },
    isNetworkError() {
      return this.error?.message === 'Network Error'
    },
    isReinitializeButtonVisible() {
      return this.isNetworkError && !this.isLoading && this.activeCaptchaTypes.length <= 1
    }
  },
  async beforeMount() {
    await this.getTypes()
    this.isInitialized = true
  },
  methods: {
    ...mapActions('app', ['getAcceptableCaptchaTypes']),
    ...mapMutations('app', ['switchCaptchaType']),
    async reinitialize () {
      this.isLoading = true
      await this.getTypes()
      this.isLoading = false
    },
    async getTypes () {
      const isSuccessful = await this.getAcceptableCaptchaTypes()
      if (isSuccessful || this.retryCount > 0) {
        this.retryCount = 0
        return true
      }
      // retry on failure with delay
      this.retryCount++
      await asyncTimeout(2500)
      return await this.getTypes()
    },
    updateStatus(status) {
      if ('isLoading' in status) {
        this.isLoading = status.isLoading
      }
      if ('error' in status) {
        this.error = status.error
      }
    },
    updateData({ captcha, key }) {
      this.captcha = captcha
      this.key = key
      this.$emit('update-captcha-data', {
        captcha,
        key,
        captchaType: this.captchaType
      })
    },
    reset() {
      this.$refs.captcha?.reset()
    }
  }
}
</script>

<i18n>
{
  "fa": {
    "loadingCaptcha": "در حال بارگذاری کپچا...",
    "switchCaptcha": "تغییر کپچا",
    "networkError": "خطای شبکه",
    "reinitialize": "بارگذاری مجدد"
  },
  "en": {
    "loadingCaptcha": "Loading Captcha...",
    "switchCaptcha": "Switch Captcha",
    "networkError": "Network Error",
    "reinitialize": "Reload"
  }
}
</i18n>

<style lang="scss" scoped>
.captcha-shimmer {
  height: 78px;
  transition: all 400ms ease-out;
}
</style>
