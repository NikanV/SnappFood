<template>
  <div id="snappfood-captcha-container" class="d-flex flex-column justify-content-center align-items-center">
    <img
        v-if="isImgVisible"
        :src="imgUrl"
        width="210"
        height="78"
        class="border-default"
        alt="captcha characters"
    />
    <div class="input-with-btn mt-8">
      <input
          id="snappfood-captcha-input"
          ref="snappfood-captcha-input"
          :disabled="isCaptchaInputDisabled"
          :class="{
          'border-default': !$v.captcha.$dirty,
          'border-danger': $v.captcha.$error,
          'border-primary': !$v.captcha.$invalid,
        }"
          class="form-control shadow-none ltr"
          :title="$t('inputTitle')"
          type="text"
          :tabindex="tabindex"
          autocomplete="new-password"
          :value="captcha"
          @input="setCaptcha($event.target.value)"
      />
      <button
          class="input-btn btn"
          :disabled="isLoading"
          :title="$t('newImage')"
          type="button"
          @click="reset">
        <base-icon
            icon-name="refresh"
            viewbox="0 0 16 20.5"
            icon-color="#A3A5A8"
            :class="{ spinning: isLoading }" />
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { required } from 'vuelidate/lib/validators'
import { MINUTE } from '../../utils/constants'
import BaseIcon from '../../components/shared/baseIcon'
import { API_URL } from '../../utils/endpoints/resolver'

export default {
  name: 'SnappfoodCaptcha',
  components: { BaseIcon },
  props: {
    isLoading: {
      type: Boolean,
      required: true
    },
    tabindex: {
      type: String,
      required: false,
      default: ''
    }
  },
  data () {
    return {
      imgSrc: null,
      captcha: '',
      key: '',
      hasError: false,
      timer: null
    }
  },
  validations: {
    captcha: {
      required
    }
  },
  computed: {
    isImgVisible () {
      return this.imgSrc && !this.isLoading
    },
    imgUrl () {
      return API_URL.base.slice(0, -1) + this.imgSrc
    },
    isCaptchaInputDisabled () {
      return this.isLoading || this.hasError
    }
  },
  mounted () {
    this.getNewCaptcha()
  },
  beforeDestroy () {
    clearInterval(this.timer)
  },
  methods: {
    ...mapActions('app', ['requestCaptcha']),
    setCaptcha (val) {
      val = val.toUpperCase()
      this.captcha = val
      this.$v.captcha.$touch()
      this.$emit('update-data', { captcha: val, key: this.key })
    },
    async getNewCaptcha () {
      this.$emit('update-status', { isLoading: true })
      this.setCaptchaInterval()
      this.captcha = ''
      this.key = ''
      this.$emit('update-data', { captcha: '', key: '' })
      this.$v.$reset()

      try {
        const newCaptcha = await this.requestCaptcha()
        this.imgSrc = newCaptcha.image_url
        this.key = newCaptcha.key
        this.hasError = false
        this.$emit('update-status', { error: '' })
      } catch (error) {
        this.onError(error)
      } finally {
        this.$emit('update-status', { isLoading: false })
      }
    },
    onError (error) {
      this.hasError = true
      this.$emit('update-data', { captcha: '', key: '' })
      this.$emit('update-status', { error })
    },
    setCaptchaInterval() {
      clearInterval(this.timer)
      this.timer = setInterval(this.getNewCaptcha, 5 * MINUTE)
    },
    async reset() {
      await this.getNewCaptcha()
      this.$refs['snappfood-captcha-input']?.focus()
    }
  }
}
</script>

<i18n>
{
  "fa": {
    "inputTitle": "لطفا کاراکترهای درون تصویر را در این بخش وارد نمایید",
    "newImage": "تصویر جدید"
  },
  "en": {
    "inputTitle": "Please enter the characters in the image in this field",
    "newImage": "New Image"
  }
}
</i18n>

<style lang="scss" scoped>
.input-with-btn {
  position: relative;

  .input-btn {
    position: absolute;
    right: (8/16) + rem;
    top: 10%;
    cursor: pointer;
    padding: 0;
  }
}
</style>
