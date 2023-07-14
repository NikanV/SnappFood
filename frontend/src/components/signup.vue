<template>
  <h1>signup</h1>
  <form @submit.prevent="submit">
    <div>

      <!--enter username which is either mobile or email-->
      <div>
        <label for="email-mobile-input"> input email or mobile </label>
        <div>
          <input
              id="email-mobile-input"
              v-model="username"
              v-focus
              name="username"
              autofocus
              list="useremail"
              tabindex="1"
              placeholder="username"
              autocomplete="off"
              @focus="isUsernameFocus=true"
              @blur="isUsernameFocus=false"
          />
        </div>
        <div>
          <p v-show=" username.$dirty">
            <span v-if="!username.required">dirty username</span>
            <span v-if="!username.pattern">wrong pattern</span>
          </p>
          <ul v-show="showSuggests" class="position-absolute suggestion p-0" dir="ltr">
            <li v-for="(item,index) in emailArray" :key="index" @mousedown="setUsername(item)">
              <span id="sp" class="text-subtitle">{{ emailUserPart }}</span>{{ item }}
            </li>
          </ul>
        </div>
      </div>

      <!--enter password-->
      <div>
        <div>
          <label for="password-input"> enter password </label>
        </div>
        <div>
          <input
              id="password-input"
              ref="passwordRef"
              v-model="password"
              title="password"
              placeholder="password"
              :type="isPasswordHidden ? 'password' : 'text'"
              tabindex="2"
              autocomplete="new-password"
          />
          <span @click="isPasswordHidden = !isPasswordHidden">
                <base-icon
                    :icon-name="isPasswordHidden ? 'visibility': 'visibility_off'"
                    icon-color="#A3A5A8"
                    size="large"/>
            </span>
        </div>
        <div>
          <p v-show="password.$dirty">
            <span v-if="password.required">password required</span>
          </p>
          <ul v-show="password.$dirty">
            <li v-for="requirement of passwordRequirements"
                :key="requirement.caption">
              <base-icon
                  :icon-name="requirement.isMet ? 'tick' : 'close'"
                  :icon-color="requirement.isMet ? '#15D1C6' : '#FC3C55'"
              />
              {{ requirement.caption }}
            </li>
          </ul>
        </div>
      </div>

      <!--password conformation-->
      <div>
        <div>
          <label for="password2-input"> re-enter password </label>
        </div>
        <div>
          <input
              id="password2-input"
              ref="passwordRef"
              v-model="password2"
              title="password"
              placeholder="password"
              :type="isPasswordHidden ? 'password' : 'text'"
              tabindex="3"
              autocomplete="new-password"
          />
          <span @click="isPasswordHidden = !isPasswordHidden">
                <base-icon
                    :icon-name="isPasswordHidden ? 'visibility': 'visibility_off'"
                    icon-color="#A3A5A8"
                    size="large"/>
            </span>
        </div>
        <div>
          <p v-show="password2.$dirty">
            <span v-if="password2.required">password conf required</span>
          </p>
          <ul
              v-show="password2.$dirty">
            <li v-for="requirement2 of password2Requirements"
                :key="requirement2.caption">
              <base-icon
                  :icon-name="requirement2.isMet2 ? 'tick' : 'close'"
                  :icon-color="requirement2.isMet2 ? '#15D1C6' : '#FC3C55'"/>
              {{ requirement2.caption2 }}
            </li>
          </ul>
        </div>
      </div>
      <!--submit button-->
      <div>
        <submit-button
            :is-submitting="isSubmitting"
            type="submit"
            :is-disabled="disableSignup"
            tabindex="4"> signup
        </submit-button>
        <p>already have an account?
          <router-link to="/login">login</router-link>
        </p>
      </div>

    </div>
  </form>

</template>

<script>
import BaseIcon from "@/components/shared/baseIcon"
import SubmitButton from "@/components/shared/submitButton.vue";
import {signupMethods} from '@/utils/configs'

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
      password2: '',
      disableSignup: true,
      isPasswordHidden: true,
      emailSuggestion: ['@gmail.com', '@yahoo.com', '@hotmail.com', '@outlook.com', '@ymail.com', '@live.com', '@protonmail.com', '@proton.me', '@icloud.com', '@chmail.ir'],
      isUsernameFocus: false,
      isSubmitting: false,
    }
  },
  methods: {
    async submit() {
      //  todo: handle signup logic
      // let res = await axios.post("http://localhost:3000/users", {
      //   username: this.username,
      //   password: this.password
      // })
      // if (res.status === 201){
      //   localStorage.setItem('user-info',JSON.stringify(res.data))
      //   await this.$router.push({name: 'LoginPage'})
      // }

      await this.$router.push({name: 'LoginPage'})

    },
    setUsername(domain) {
      this.username = `${this.emailUserPart}${domain}`
      this.isUsernameFocus = false
      this.$nextTick(() => {
        this.$refs.passwordRef?.focus()
      })
    },
  },
  computed: {
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
    showSuggests() {
      return this.username && this.isUsernameFocus && this.emailArray.length > 0
    },

    passwordRequirements() {
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
    password2Requirements() {
      return [
        {
          caption2: 'atLeastOneLetter',
          isMet2: /.*?[A-Za-z]/.test(this.password2)
        },
        {
          caption2: 'atLeastOneNumber',
          isMet2: /.*[0-9].*/.test(this.password2)
        },
        {
          caption2: 'minEightChar',
          isMet2: this.password2.length >= 8
        }
      ]
    },

    isPasswordRequirementsMet() {
      return this.passwordRequirements.every(item => item.isMet)
    }, isMobileActive() {
      return signupMethods.mobile
    }
  },
  mounted() {
    let user = localStorage.getItem('user-info')
    if (!user)
      this.$router.push("signup")
  }
}
</script>

<style scoped>
.suggestion {
  top: 65px;
  left: 0;
  right: 0;
  box-shadow: 0 1px 2px rgb(204, 204, 204);
  border-radius: 0 1px 2px 2px;
  overflow: hidden;
  overflow-y: auto;
  background: white;
  z-index: 101;
  list-style: none;

  li {
    padding: 10px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: var(--hover-color);
    }
  }
}

.text-subtitle:hover {
  color: var(--text-primary) !important;
}
</style>