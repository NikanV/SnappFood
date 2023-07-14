<template>
  <div class="settings">
    <h2>Settings</h2>
    <form @submit="updateSettings">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="user.name" />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="user.email" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="user.password" />
      </div>
      <div class="form-group">
        <button type="submit">Save</button>
      </div>
    </form>
    <div class="goback">
      <button @click="this.$router.go(-1)">Back</button>
    </div>
  </div>
</template>

<script>
export default {
  name:'SettingsPage',
  data() {
    return {
      user: {
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: '',
      },
    };
  },
  methods: {
    updateSettings() {
      // Implement the logic to update user settings
      // For example, make an API call to save the updated settings
      console.log('Settings updated:', this.user);
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
