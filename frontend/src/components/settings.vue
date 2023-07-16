<template>
  <div class="settings">
    <h2>Reset Password</h2>
    <form @submit.prevent="resetPassword">
      <div class="form-group">
        <label for="password-input">Enter New Password</label>
        <input
            id="password-input"
            v-model="password"
            type="password"
            placeholder="New Password"
            required
        />
      </div>
      <div class="form-group">
        <label for="password2-input">Confirm New Password</label>
        <input
            id="password2-input"
            v-model="password2"
            type="password"
            placeholder="Confirm New Password"
            required
        />
      </div>
      <p v-show="passwordsDontMatch">Passwords don't match</p>
      <div class="form-group">
        <button type="submit">Reset Password</button>
      </div>
    </form>
    <div class="goback">
      <button @click="$router.go(-1)">Back</button>
    </div>
  </div>
</template>

<script>
import Parse from "parse";

export default {
  name: 'ResetPasswordPage',
  data() {
    return {
      password: '',
      password2: '',
      passwordsDontMatch: false,
    };
  },
  methods: {
    resetPassword() {
      if (this.password !== this.password2) {
        this.passwordsDontMatch = true;
      } else {
        this.passwordsDontMatch = false;
        const user = Parse.User.current();
        user.set('password', this.password);
        user.save()
            .then(() => {
              localStorage.removeItem('userid')
              this.$router.push({name: "LoginPage"})
            })
            .catch(error => {
              alert('Error resetting password:' + error.message);
            });
      }
    },
  },
};
</script>

<style scoped>
.settings {
  max-width: 500px;
  margin: 0 auto;
}

.settings h2 {
  margin-bottom: 16px;
}

.form-group {
  margin-bottom: 16px;
}

label {
  display: block;
  margin-bottom: 4px;
}

input {
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button {
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
