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
              aria-describedby="sign-in-username"
              autocomplete="email"
              list="useremail"
              name="username"
              placeholder="username"
              tabindex="1"
          />
        </div>
        <p v-show="username.$dirty || invalidUsername">
          <span v-if="invalidUsername & username.length>0">invalid username</span>
        </p>
      </div>


      <div>
        <label for="password-input">password</label>
        <div>
          <input
              id="password-input"
              v-model="password"
              :type="isPasswordHidden ? 'password' : 'text'"
              autocomplete="email"
              name="password"
              placeholder="password"
              tabindex="2"
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
          <span v-if="invalidPassword & password.length>0">wrong password</span>

        </p>
      </div>


      <div>
        <submit-button
            :is-disabled="disableLogin"
            :is-submitting="isSubmitting"
            tabindex="3"
            type="submit"> login
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
      invalidUsername: true,
      invalidPassword: true,
      disableLogin: true,
      isPasswordHidden: true,
      isSubmitting: false,
    }
  },
  computed: {},
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