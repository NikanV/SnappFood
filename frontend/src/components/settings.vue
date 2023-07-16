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
        <input type="password" id="password" placeholder="password"/>
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
