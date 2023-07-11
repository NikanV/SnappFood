<template>
  <div>
    <div
        class="otp-form-wrapper text-center">
      <div class="mx-32-md mx-24">
        <base-icon
            icon-name="verified"
            icon-color="#00AEA4"
            viewbox="0 0 80 80"
            size="xLarge" />
        <h3 class="text-title fs-22-md fs-19 mt-8">{{ $t('panel.otp') }}</h3>
        <p class="fs-15-md fs-12">{{ $t('panel.otpDescription', {phone: phoneNumber}) }}</p>
      </div>
      <form @submit.prevent="submit">
        <div>
          <otp-inputs
              ref="otp"
              :tabindex-start="1"
              :input-length="6"
              @on-change="onChange"
              @on-complete="onComplete"
          />
        </div>
        <div class="w-100">
          <div class="d-flex align-items-center justify-content-between w-100 mt-24">
            <div class="text-subtitle fs-12 text-right">{{ $t('panel.OTPFail') }}</div>
            <count-down-button
                ref="countDown"
                size-icon-refresh="small"
                size-icon-timer="small"
                :on-submit="() => { sendCode(true) }"
                :is-submitting="isSubmitting"
                custom-classes="btn btn-outline-default fs-12 px-8"
                @countdown-is-over="showOrResetCaptcha"
            />
          </div>
        </div>
        <base-captcha
            v-if="isCaptchaEnabled"
            ref="captcha"
            tabindex="4"
            class="input-wrapper d-flex flex-column justify-content-center align-items-center mt-24 mb-8"
            @update-captcha-data="updateCaptchaData" />
        <!-- </captcha input> -->
        <submit-button
            tabindex="7"
            type="submit"
            :is-submitting="isSubmitting"
            :is-disabled="!canSubmit || $v.$invalid"
            custom-classes="btn-primary mt-40-md mt-16 w-100 fs-15 fs-19-lg">
          <span slot class="text-white">{{ $t('panel.confirm') }}</span>
        </submit-button>
      </form>

      <button
          type="button"
          class="switch-button btn btn-text-primary mt-2"
          @click="$emit('return-to-form')">
        {{ $t('common.back') }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import SubmitButton from '~/components/shared/SubmitButton'
import BaseIcon from '~/components/shared/baseIcon'
import notification from '~/mixins/notification'
import OtpInputs from '~/components/shared/OtpInputs'
import CountDownButton from '~/components/panel/common/CountDownButton'
import BaseCaptcha from '~/components/shared/BaseCaptcha'
import captcha from '~/mixins/captcha'

export default {
  name: 'MobileOtp',
  components: { SubmitButton, BaseIcon, OtpInputs, CountDownButton, BaseCaptcha },
  mixins: [notification, captcha],
  props: {
    phoneNumber: {
      type: String,
      required: true
    },
    isSubmitting: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      otpValue: null,
      canSubmit: false,
      isDirty: false,
      isOnCompleteFired: false,
      isCaptchaEnabled: false
    }
  },
  mounted() {
    this.sendCode(false)
  },
  methods: {
    ...mapActions('panel', ['mobileVerification']),
    showOrResetCaptcha() {
      const captchaState = this.isCaptchaEnabled
      if (captchaState) {
        this.resetCaptcha()
      } else {
        this.isCaptchaEnabled = true
      }
    },
    sendCode(isResend = false) {
      this.$refs.countDown?.resetTimer()
      if (isResend) {
        this.showOrResetCaptcha()
      }
      this.mobileVerification({ mobile: this.phoneNumber }).then(({ successful, code, message }) => {
        if (!successful) {
          this.notifyError(['InvalidMobile'].includes(code) ? this.$t(code) : message)
          this.$emit('send-otp-failed')
        }
      })
    },
    onChange(value) {
      this.canSubmit = false
      this.isDirty = true
      this.otpValue = value
    },
    onComplete(value) {
      this.canSubmit = true
      this.isDirty = false
      this.otpValue = value
      if (!this.isOnCompleteFired) {
        this.isOnCompleteFired = true
        // this line is using for auto submission
        if (!this.isCaptchaEnabled) {
          this.emitCompletedEvent(value)
        }
      }
    },
    submit() {
      this.emitCompletedEvent(this.otpValue)
    },
    emitCompletedEvent(otp) {
      this.$emit('otp-completed', { otp, ...(this.isCaptchaEnabled ? { captchaData: this.captchaData } : {}) })
    },
    setInvalid() {
      this.$refs.otp.setInvalid(true)
    }
  }
}
</script>

<i18n>
{
  "en": {
    "InvalidMobile": "A user is already registered with this mobile number."
  }
}
</i18n>

<style scoped lang="scss">
@include down('sm') {
  .otp-form-wrapper {
    max-width: 464px;
  }
}

</style>
