<template>
  <button
      class="btn d-flex justify-content-center align-items-center"
      :class="customClasses"
      :disabled="isButtonDisabled"
      @click="onSubmit"
  >
    <span
        v-if="isSubmitting"
        class="spinner-border spinner-border-sm mx-2"
        role="status"
        aria-hidden="true"
    />
    <slot>{{ $t(caption) }}</slot>
  </button>
</template>

<script>
export default {
  name: 'SubmitButton',
  props: {
    isSubmitting: {
      type: Boolean,
      required: false,
      default: false
    },
    isDisabled: {
      type: Boolean,
      required: false,
      default: false
    },
    onSubmit: {
      type: Function,
      required: false,
      default: () => null
    },
    caption: {
      type: String,
      required: false,
      default: 'panel.send'
    },
    customClasses: {
      type: [String, Array, Object],
      default: null
    }
  },
  computed: {
    isButtonDisabled () {
      return this.isSubmitting || this.isDisabled
    }
  }
}
</script>
