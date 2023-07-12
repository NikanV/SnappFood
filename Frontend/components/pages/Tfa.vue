<template>
  <div>
    <div
        class="tfa-form-wrapper text-center">
      <div class="mx-32-md mx-24">
        <base-icon
            icon-name="verified"
            icon-color="#00AEA4"
            viewbox="0 0 80 80"
            size="xLarge" />
        <h3 class="text-title fs-22-md fs-19 mt-8">{{ $t('panel.tfa') }}</h3>
        <p class="fs-15-md fs-12">{{ $t('tfaSubtitle') }}</p>
      </div>
      <form @submit.prevent="submit">
        <div class="tfa-wrapper">
          <otp-inputs
              ref="otp"
              :tabindex-start="1"
              :input-length="6"
              @on-change="onChange"
              @on-complete="onComplete"
          />
        </div>
        <p
            class="fs-12 mt-16 text-center"
            :class="{ 'text-danger': isDirty }">
          {{ $t('panel.tfaDescription') }}
        </p>
        <submit-button
            tabindex="7"
            type="submit"
            :is-submitting="isSubmitting"
            :is-disabled="!canSubmit"
            custom-classes="btn-primary mt-40-md mt-16 w-100 fs-15 fs-19-lg">
          <span slot class="text-white">{{ $t('panel.confirm') }}</span>
        </submit-button>
      </form>
    </div>
  </div>
</template>

<script>
import SubmitButton from '~/components/shared/SubmitButton'
import BaseIcon from '~/components/shared/baseIcon'
import OtpInputs from '~/components/shared/OtpInputs'

export default {
  name: 'Tfa',
  components: { SubmitButton, BaseIcon, OtpInputs },
  props: {
    isSubmitting: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      tfaCodeValue: null,
      canSubmit: false,
      isDirty: false,
      isOnCompleteFired: false
    }
  },
  methods: {
    onChange(value) {
      this.canSubmit = false
      this.isDirty = true
      this.tfaCodeValue = value
    },
    onComplete(value) {
      this.canSubmit = true
      this.isDirty = false
      this.tfaCodeValue = value
      if (!this.isOnCompleteFired) {
        this.isOnCompleteFired = true
        // this line is using for auto submission
        this.$emit('send-tfa', value)
      }
    },
    submit() {
      this.$emit('send-tfa', this.tfaCodeValue)
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
    "tfaSubtitle": "To protect your assets, please enter your two-factor identification code.",
    "lossTfa": "Lost your two-factor ID?"
  }
}
</i18n>

<style scoped lang="scss">
@include down('sm') {
  .tfa-form-wrapper {
    max-width: 464px;
  }
}

.verified-img {
  width: (52/16) + rem;
}

.text-decoration-underline {
  text-decoration: underline;
}

</style>
