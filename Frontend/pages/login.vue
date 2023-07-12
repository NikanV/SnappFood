<script>
import {mapMutations, mapActions, mapGetters} from 'vuex'
import {required, email, integer, minLength} from 'vuelidate/lib/validators'
import {
  DEFAULT_LOGIN,
  CHECKED_LOGIN,
  GOOGLE_SIGN_IN
} from '@/utils/endpoints'
import notification from '~/mixins/notification'
import captcha from '~/mixins/captcha'
import guest from '~/mixins/guest'
import BaseIcon from '~/components/shared/baseIcon'
import CheckBox from '~/components/shared/CheckBox'
import {panelUrl, FORGET_PASSWORD as FORGET_PASSWORD_LINK, SIGNUP as SIGNUP_LINK} from '~/utils/links'
import GoogleSignIn from '~/components/shared/GoogleSignIn'
import SubmitButton from '~/components/shared/SubmitButton'
import BaseCaptcha from '~/components/shared/BaseCaptcha'
import pageView from '~/mixins/pageView'
import TFA from '~/components/pages/Tfa'
import locationChange from '~/mixins/locationChange'
import {ENV} from '~/utils/endpoints/resolver'
import {loginMethods} from '~/utils/configuration'

export default {
  name: "Login",
  components: {
    BaseCaptcha,
    CheckBox,
    BaseIcon,
    TFA,
    SubmitButton,
    GoogleSignIn
  },
}
</script>