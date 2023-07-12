<template>
  <div class="otp-item">
    <input
        ref="input"
        v-model.trim="$v.model.$model"
        v-english-digit.allowLeadingZero
        class="form-control bg-transparent shadow-none text-center otp-item"
        :class="[{
        'border-default': !$v.model.$dirty,
        'border-primary': !$v.model.$invalid,
        'text-white': dark
      }, customClass]"
        :disabled="disabled"
        type="number"
        maxlength="1"
        minlength="1"
        inputmode="decimal"
        min="0"
        max="9"
        autocomplete="off"
        :tabindex="tabindex"
        @input="onChange"
        @keydown="onKeyDown"
        @paste="onPaste"
        @focus="onFocus"
        @blur="onBlur"
    />
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    isFocus: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    tabindex: {
      type: Number,
      default: null
    },
    dark: {
      type: Boolean,
      default: false
    },
    customClass: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      model: ''
    }
  },
  validations: {
    model: {
      required
    }
  },

  watch: {
    value(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.model = newValue
      }
      if (newValue.length > 0) {
        this.$v.model.$touch()
      }
    },
    isFocus(newValue, oldValue) {
      if (newValue !== oldValue && this.$props.isFocus && this.$refs.input) {
        this.$refs.input.focus()
      }
    }
  },
  mounted() {
    this.model = this.$props.value || ''
    if (this.$refs.input && this.$props.isFocus) {
      this.$refs.input.focus()
    }
  },
  methods: {
    async onChange(e) {
      const { data } = e
      this.model = data
      await this.$nextTick()
      if (e.data > 99) {
        const clipboardData = new DataTransfer()
        clipboardData.setData('text/plain', e.data)
        e.clipboardData = clipboardData
        this.onPaste(e)
      }
      this.model = this.model?.replace(/\D+/g, '')
      if (this.model.length > 1) {
        this.model = this.model.slice(-1)
      }
      if (/^\d$/.test(data)) {
        return this.$emit('on-change', data)
      }
      if (this.model.length === 1) { return this.$emit('on-change', this.model) }
    },
    onKeyDown(event) {
      return this.$emit('on-keydown', event)
    },
    onPaste(event) {
      return this.$emit('on-paste', event)
    },
    onFocus(event) {
      return this.$emit('on-focus')
    },
    onBlur() {
      return this.$emit('on-blur')
    }
  }
}
</script>

<style lang="scss" scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.otp-item {
  height: 56px;
  width: 48px;
  margin: 0 4px;
  -moz-appearance: textfield;
}

@include down('sm') {
  .otp-item {
    width: 42px;
  }
}
</style>
