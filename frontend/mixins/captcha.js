import { required } from 'vuelidate/lib/validators'

export default {
    data () {
        return {
            captchaData: {
                captchaType: '',
                captcha: '',
                client: 'web',
                key: ''
            }
        }
    },
    validations: {
        captchaData: {
            captcha: {
                required
            },
            captchaType: {
                required
            }
        }
    },
    methods: {
        updateCaptchaData ({ captcha, key, captchaType }) {
            this.captchaData.captcha = captcha
            this.captchaData.key = key
            this.captchaData.captchaType = captchaType
        },
        resetCaptcha () {
            this.$refs.captcha?.reset()
        }
    }
}
