<template>
  <h1>login</h1>
  <form @submit.prevent="submit">
    <div>


      <div>
        <label
            for="email-mobile-input">
          input email or mobile
        </label>
        <div>
          <input
              id="email-mobile-input"
              v-model="username"
              v-focus
              name="username"
              list="useremail"
              aria-describedby="sign-in-username"
              tabindex="1"
              autocomplete="email"

          />
        </div>
        <p v-show="username.$dirty">
          <span v-if="!username.required">
            username required
              </span>
          <span v-if="!username.pattern">
            wrong username pattern
              </span>
        </p>
      </div>


      <div>
        <label
            for="password-input">
          input password
        </label>
        <div>
          <input
              id="password-input"
              v-model="password"
              name="password"
              :type="isPasswordHidden ? 'password' : 'text'"
              tabindex="2"
              autocomplete="current-password"
          />
          <span
              @click="isPasswordHidden = !isPasswordHidden">
                <base-icon
                    :icon-name="isPasswordHidden ? 'visibility': 'visibility_off'"
                    icon-color="#A3A5A8"
                    size="large"/>
          </span>
        </div>
        <p
            v-show="password.$dirty">
          <span v-if="password.required">password required</span>
        </p>
      </div>


      <div>
        <submit-button
            :is-submitting="isSubmitting"
            type="submit"
            tabindex="3"> btn
        </submit-button>

      </div>

    </div>
  </form>

</template>

<script>
import BaseIcon from "@/components/shared/baseIcon"
import SubmitButton from "@/components/shared/submitButton"
import {loginMethods} from "@/utils/configs"

export default {
  name: "LoginPage",
  components: {
    BaseIcon,
    SubmitButton
  },
  layout: "auth",
  data() {
    return {
      username: '',
      password: '',
      email: '',
      isPasswordHidden: true,
      isSubmitting: false,
    }
  },
  methods: {
    submit() {
      //  todo: handle login logic
      this.$router.push({name: 'ProfilePage'})
    },
  },
  isMobileActive() {
    return loginMethods.mobile
  }

}
</script>

<style scoped>

</style>