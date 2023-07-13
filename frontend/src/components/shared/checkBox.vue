<template>
  <label
      :class="[{clickable: !disabled}, labelClasses]"
      class="custom-checkbox fs-12-sm fs-15-md my-0 text-aligned">
    <input
        :checked="value"
        :class="{ inactive: disabled }"
        :disabled="disabled"
        :tabindex="tabindex"
        type="checkbox"
        @change="toggle" />
    <slot>
      {{ caption }}
    </slot>
  </label>
</template>

<script>
export default {
  name: 'CheckBox',
  props: {
    value: {
      type: Boolean,
      required: true
    },
    caption: {
      type: String,
      required: false,
      default: ''
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    tabindex: {
      type: String,
      required: false,
      default: ''
    },
    labelClasses: {
      type: String,
      required: false,
      default: 'text-subtitle'
    }
  },
  methods: {
    toggle (e) {
      this.$emit('input', e.target.checked)
    }
  }
}
</script>

<style scoped>
.custom-checkbox {
  user-select: none;
}
</style>
