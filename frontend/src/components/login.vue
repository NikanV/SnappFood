<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="submit">
      <div>
        <div>
          <label for="username-input">Username</label>
          <div>
            <input
                id="username-input"
                v-model="username"
                v-focus
                autocomplete="username"
                name="username"
                placeholder="Username"
                tabindex="1"
            />
          </div>
          <p v-show="username.$dirty || invalidUsername">
            <span v-if="invalidUsername && username.length > 0">Invalid username</span>
          </p>
        </div>
        <div>
          <label for="password-input">Password</label>
          <div>
            <input
                id="password-input"
                v-model="password"
                :type="isPasswordHidden ? 'password' : 'text'"
                autocomplete="current-password"
                name="password"
                placeholder="Password"
                tabindex="2"
            />
            <span @click="isPasswordHidden = !isPasswordHidden">
              <base-icon
                  :icon-name="isPasswordHidden ? 'visibility' : 'visibility_off'"
                  icon-color="#A3A5A8"
                  size="large"
              />
            </span>
          </div>
          <p v-show="password.$dirty || invalidPassword">
            <span v-if="password.required">Password required</span>
            <span v-if="invalidPassword && password.length > 0">Wrong password</span>
          </p>
        </div>
        <div class="loginBtn">
          <submit-button
              :is-disabled="disableLogin"
              :is-submitting="isSubmitting"
              tabindex="3"
              type="submit"
          >
            Login
          </submit-button>
          <p>
            Don't have an account?
            <router-link to="/signup">Signup</router-link>
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
import { loginMethods } from "@/utils/configs";

export default {
  name: "LoginPage",
  components: {
    BaseIcon,
    SubmitButton,
  },
  layout: "auth",
  data() {
    return {
      username: "",
      password: "",
      invalidUsername: true,
      invalidPassword: true,
      disableLogin: true,
      isPasswordHidden: true,
      isSubmitting: false,
    };
  },
  methods: {
    async submit() {
      // TODO: Implement login logic
      // let res = await axios.get(`http://localhost:3000/users?username=${this.username}&password=${this.password}`)
      // if (res.status === 201)
      //   await this.$router.push({name: 'ProfilePage'})
      await this.$router.push({ name: "ProfilePage" });
    },
  },
  computed: {
    isMobileActive() {
      return loginMethods.mobile;
    },
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

.loginBtn button {
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
