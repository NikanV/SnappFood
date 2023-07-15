<template>
  <HeaderBar/>
  <div class="profile-menu">
    <div class="profile-menu__header">
      <div class="profile-menu__info">
        <h3>{{ user.name }}</h3>
        <p>{{ user.email }}</p>
      </div>
    </div>
    <div class="profile-menu__options">
      <div class="profile-menu__option" @click="navigateTo('orders')">
        <i class="fas fa-shopping-bag"></i>
        <span>Orders</span>
      </div>
      <div class="profile-menu__option" @click="navigateTo('favorites')">
        <i class="fas fa-heart"></i>
        <span>Favorites</span>
      </div>
      <div class="profile-menu__option" @click="navigateTo('settings')">
        <i class="fas fa-cog"></i>
        <span>Settings</span>
      </div>
      <div class="profile-menu__option" @click="logout">
        <i class="fas fa-sign-out-alt"></i>
        <span>Logout</span>
      </div>
    </div>
    <div class="goback">
      <submit-button @click="this.$router.go(-1)">Back</submit-button>
    </div>
  </div>
</template>

<script>
import HeaderBar from "@/components/shared/Headers.vue";
import SubmitButton from "@/components/shared/submitButton.vue";

export default {
  name: 'ProfilePage',
  components: {SubmitButton, HeaderBar},
  data() {
    return {
      user: {
        name: 'name',
        email: 'email',
      },
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(`/profile/${route}`);
    },
    logout() {
      localStorage.setItem("userId", null)
      this.$router.push({name: "LoginPage"})
    },
  },
};
</script>

<style scoped>
.profile-menu {
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: #f5f5f5;
  border-radius: 8px;
}

.profile-menu__header {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.profile-menu__avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}

.profile-menu__info {
  margin-left: 16px;
}

.profile-menu__info h3 {
  margin: 0;
  font-size: 18px;
  font-weight: bold;
}

.profile-menu__info p {
  margin: 0;
  color: #888;
}

.profile-menu__options {
  display: flex;
  flex-direction: column;
}

.profile-menu__option {
  display: flex;
  align-items: center;
  padding: 8px;
  cursor: pointer;
}

.profile-menu__option i {
  margin-right: 8px;
}

.profile-menu__option span {
  font-size: 16px;
}

.goback submit-button {
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
