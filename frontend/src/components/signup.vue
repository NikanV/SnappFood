<template>
  <h1>signup</h1>
  <form @submit.prevent="submit">
    <div>


      <div >
        <label
            for="email-mobile-input">
          input email or mobile
        </label>
        <input
            id="email-mobile-input"
            v-model="username"
            v-focus
            name="username"
            autofocus
            list="useremail"
            tabindex="1"
            autocomplete="off"
            @focus="isUsernameFocus=true"
            @blur="isUsernameFocus=false"
        />
        <p v-show=" username.$dirty">
              <span v-if="!username.required" >dirty username</span>
          <span v-if="!username.pattern">wrong pattern</span>
        </p>
        <ul v-show="showSuggests" class="position-absolute suggestion p-0" dir="ltr">
          <li v-for="(item,index) in emailArray" :key="index" @mousedown="setUsername(item)">
            <span id="sp" class="text-subtitle">{{ emailUserPart }}</span>{{ item }}</li>
        </ul>
      </div>




      <div>
        <label
            for="password-input">
          input password
        </label>
        <div>
          <input
              id="password-input"
              ref="passwordRef"
              v-model="password"
              title="password"
              :type="isPasswordHidden ? 'password' : 'text'"
              tabindex="2"
              autocomplete="new-password"
          />
          <span
              @click="isPasswordHidden = !isPasswordHidden">
                <base-icon
                    :icon-name="isPasswordHidden ? 'visibility': 'visibility_off'"
                    icon-color="#A3A5A8"
                    size="large" />
              </span>
        </div>
        <p
            v-show="password.$dirty">
              <span v-if="password.required" class="text-danger">password required</span>
        </p>
        <ul
            v-show="password.$dirty">
          <li
              v-for="requirement of passwordRequirements"
              :key="requirement.caption"
              class="text-subtitle">
            <base-icon
                :icon-name="requirement.isMet ? 'tick' : 'close'"
                :icon-color="requirement.isMet ? '#15D1C6' : '#FC3C55'" />
            {{ requirement.caption }}
          </li>
        </ul>
      </div>


      <div >
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
import SubmitButton from "@/plugins/submitButton";

export default {
  name: "SignupPage",
  components: {
    BaseIcon,
    SubmitButton
  },
  data() {
    return {
      username: '',
      password: '',
      email: '',
      isPasswordHidden: true,
      emailSuggestion: ['@gmail.com', '@yahoo.com', '@hotmail.com', '@outlook.com', '@ymail.com', '@live.com', '@protonmail.com', '@proton.me', '@icloud.com', '@chmail.ir'],
      isUsernameFocus: false,
      isSubmitting: false,
    }
  },
  methods:{
    submit() {
    //   implement submit logic
      this.$router.push({name: 'LoginPage'})
    },
    setUsername(domain) {
      this.username = `${this.emailUserPart}${domain}`
      this.isUsernameFocus = false
      this.$nextTick(() => {
        this.$refs.passwordRef?.focus()
      })
    },
  },
  computed:{
    domain() {
      return this.username.toLowerCase().split('@')[1] || ''
    },
    emailUserPart() {
      return this.username.toLowerCase().split('@')[0] || ''
    },
    emailArray() {
      return this.username.includes('@')
          ? this.emailSuggestion
          : []
    },
    showSuggests () {
      return this.username && this.isUsernameFocus && this.emailArray.length > 0
    },

    passwordRequirements () {
      return [
        {
          caption: 'atLeastOneLetter',
          isMet: /.*?[A-Za-z]/.test(this.password)
        },
        {
          caption: 'atLeastOneNumber',
          isMet: /.*[0-9].*/.test(this.password)
        },
        {
          caption: 'minEightChar',
          isMet: this.password.length >= 8
        }
      ]
    },
    isPasswordRequirementsMet () {
      return this.passwordRequirements.every(item => item.isMet)
    },
  }
}
</script>

<style scoped>

</style>