<template>
  <div>
    <h1>Signup</h1>
    <form @submit.prevent="submit">
      <div>
        <div>
          <label for="email-mobile-input">Input Email</label>
          <div>
            <input
                id="email-mobile-input"
                v-model="username"
                name="username"
                autofocus
                list="useremail"
                tabindex="1"
                placeholder="Username"
                autocomplete="off"
                @focus="isUsernameFocus = true"
                @blur="isUsernameFocus = false"
            />
          </div>
          <div>
            <p v-show="username.$dirty">
              <span v-if="!username.required">Dirty username</span>
              <span v-if="!username.pattern">Wrong pattern</span>
            </p>
            <ul v-show="showSuggests" class="suggestion">
              <li v-for="(item, index) in emailArray" :key="index" @mousedown="setUsername(item)">
                <span class="text-subtitle">{{ emailUserPart }}</span>{{ item }}
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <label for="password-input">Enter Password</label>
          </div>
          <div>
            <input
                id="password-input"
                ref="passwordRef"
                v-model="password"
                title="password"
                placeholder="Password"
                :type="isPasswordHidden ? 'password' : 'text'"
                tabindex="2"
                autocomplete="new-password"
                @input="passwordsDontMatch = false"
            />
            <span @click="isPasswordHidden = !isPasswordHidden">
              <base-icon
                  :icon-name="isPasswordHidden ? 'visibility' : 'visibility_off'"
                  icon-color="#A3A5A8"
                  size="large"
              />
            </span>
            <label for="password2-input">Re-enter Password</label>
          </div>
          <div>
            <input
                id="password2-input"
                ref="passwordRef"
                v-model="password2"
                title="password"
                placeholder="Password"
                :type="isPasswordHidden ? 'password' : 'text'"
                tabindex="3"
                autocomplete="new-password"
                @input="passwordsDontMatch = false"
            />
            <span @click="isPasswordHidden = !isPasswordHidden">
              <base-icon
                  :icon-name="isPasswordHidden ? 'visibility' : 'visibility_off'"
                  icon-color="#A3A5A8"
                  size="large"
              />
            </span>
          </div>
          <p v-show="passwordsDontMatch">passwords don't match</p>
        </div>
        <div class="signupBtn">
          <submit-button :is-submitting="isSubmitting" type="submit" tabindex="4">
            Signup
          </submit-button>
          <p>Already have an account?
            <router-link to="/login">Login</router-link>
          </p>
          <p>
            Back to
            <router-link to="/">home</router-link>
            page
          </p>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import BaseIcon from "@/components/shared/baseIcon.vue";
import SubmitButton from "@/components/shared/submitButton.vue";
import Parse from 'parse';
// import {Parse} from "parse-server";
export default {
  name: "SignupPage",
  components: {
    BaseIcon,
    SubmitButton,
  },
  data() {
    return {
      username: "",
      password: "",
      password2: "",
      disableSignup: true,
      passwordsDontMatch: false,
      isPasswordHidden: true,
      emailSuggestion: [
        "@gmail.com",
        "@yahoo.com",
        "@hotmail.com",
        "@outlook.com",
        "@ymail.com",
        "@live.com",
        "@protonmail.com",
        "@proton.me",
        "@icloud.com",
        "@chmail.ir",
      ],
      isUsernameFocus: false,
      isSubmitting: false,
    };
  },
  methods: {
    async submit() {
      if (this.password !== this.password2) {
        if (this.password.length > 0 && this.password2.length > 0)
          this.passwordsDontMatch = true
      } else {
        this.passwordsDontMatch = false
        const user = new Parse.User();
        user.set('username', this.emailUserPart);
        user.set('email', this.username);
        user.set('password', this.password);

        try {
          let userResult = await user.signUp();
          console.log('User signed up', userResult);
          await this.$router.push({name: "LoginPage"});
        } catch (error) {
          alert(error)
          console.error('Error while signing up user', error);
        }
      }
    },
    setUsername(domain) {
      this.username = `${this.emailUserPart}${domain}`;
      this.isUsernameFocus = false;
      this.$nextTick(() => {
        this.$refs.passwordRef?.focus();
      });
    },
  },
  computed: {
    domain() {
      return this.username.toLowerCase().split("@")[1] || "";
    },
    emailUserPart() {
      return this.username.toLowerCase().split("@")[0] || "";
    },
    emailArray() {
      return this.username.includes("@") ? this.emailSuggestion : [];
    },
    showSuggests() {
      return this.username && this.isUsernameFocus && this.emailArray.length > 0;
    },
  },
  mounted() {
    let user = localStorage.getItem("userid");
    if (!user) this.$router.push("/signup");
  },
};
</script>

<style scoped>
h1 {
  font-size: 24px;
  margin-bottom: 16px;
}

form {
  max-width: 400px;
  margin: 0 auto;
}

div {
  margin-bottom: 16px;
}

label {
  display: block;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

p {
  margin: 4px 0;
  color: #dc3545;
}

submit-button {
  display: block;
  width: 100%;
  margin-top: 16px;
}

p:last-child {
  text-align: center;
  margin-top: 16px;
}

p:last-child router-link {
  margin-left: 4px;
  color: #007bff;
  text-decoration: none;
}

p:last-child router-link:hover {
  text-decoration: underline;
}

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
}

.suggestion li {
  padding: 10px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}

.suggestion li:hover {
  background-color: var(--hover-color);
}

.text-subtitle:hover {
  color: var(--text-primary) !important;
}

.signupBtn button {
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
