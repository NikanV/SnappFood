<template>
  <h1>login</h1>
  <form @submit.prevent="submit">
    <div>


      <div>
        <label for="email-mobile-input">username</label>
        <div>
          <input
              id="email-mobile-input"
              v-model="username"
              v-focus
              name="username"
              list="useremail"
              placeholder="username"
              aria-describedby="sign-in-username"
              tabindex="1"
              autocomplete="email"
          />
        </div>
        <p v-show="username.$dirty || invalidUsername">
          <span v-if="!username.required">username required</span>
          <span v-if="invalidUsername">invalid username</span>
        </p>
      </div>


      <div>
        <label for="password-input">password</label>
        <div>
          <input
              id="password-input"
              v-model="password"
              name="password"
              :type="isPasswordHidden ? 'password' : 'text'"
              tabindex="2"
              placeholder="password"
              autocomplete="email"
          />
          <span @click="isPasswordHidden = !isPasswordHidden">
                <base-icon
                    :icon-name="isPasswordHidden ? 'visibility': 'visibility_off'"
                    icon-color="#A3A5A8"
                    size="large"/>
          </span>
        </div>
        <p v-show="password.$dirty || invalidPassword">
          <span v-if="password.required">password required</span>
          <span v-if="invalidPassword">wrong password</span>

        </p>
      </div>


      <div>
        <submit-button
            :is-submitting="isSubmitting"
            type="submit"
            tabindex="3"> btn
        </submit-button>
        <p>
          don't have an account?
          <router-link to="/signup">signup</router-link>
        </p>
      </div>

    </div>
  </form>

</template>

<script>
import BaseIcon from "@/components/shared/baseIcon"
import SubmitButton from "@/components/shared/submitButton"
import {loginMethods} from "@/utils/configs"
import axios from "axios";

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
      invalidUsername: false,
      invalidPassword: false,
      isPasswordHidden: true,
      isSubmitting: false,
    }
  },
  methods: {
    async submit() {
      // todo: implement login logic
      // let res = await axios.get(`http://localhost:3000/users?username=${this.username}&password=${this.password}`)
      // if (res.status === 201)
      //   await this.$router.push({name: 'ProfilePage'})
      await this.$router.push({name: 'ProfilePage'})

    },
  },
  isMobileActive() {
    return loginMethods.mobile
  }

}
</script>

<style scoped>

</style>