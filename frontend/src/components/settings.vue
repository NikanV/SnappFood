<template>
  <div class="settings">
    <h2>Settings</h2>
    <form @submit="updateSettings">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="user.name" placeholder="username"/>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="user.email" placeholder="email" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="user.password" placeholder="password"/>
      </div>
      <div class="form-group">
        <submit-button type="submit">Save</submit-button>
      </div>
    </form>
    <div class="goback">
      <submit-button @click="this.$router.go(-1)">Back</submit-button>
    </div>
  </div>
</template>

<script>
import Parse from "parse";
import SubmitButton from "@/components/shared/submitButton.vue";

export default {
  name: 'ResetPasswordPage',
  components:{
    SubmitButton
  },
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

submit-button {
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

submit-button:hover {
  background-color: #0056b3;
}
</style>
