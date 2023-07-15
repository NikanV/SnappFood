<template>
  <HeaderBar/>
  <div class="profile-menu">
    <div class="profile-menu__header">
      <div class="profile-menu__info">
        <h3>{{ this.username }}</h3>
        <p>{{this.email }}</p>
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
      <button @click="this.$router.go(-1)">Back</button>
    </div>
  </div>
</template>

<script>
import HeaderBar from "@/components/shared/Headers.vue";
import Parse from "parse";

export default {
  name: 'ProfilePage',
  components: {HeaderBar},
  data() {
    return {
      username:'',
      email:'',
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(`/${route}`);
    },
    logout() {
      localStorage.setItem('userid', null)
      this.$router.push({name: "LoginPage"})
    },
    async getUserCred() {
      try {
        const userId = localStorage.getItem('userid');
        const query = new Parse.Query(Parse.User);
        const user = await query.get(userId);
        this.username = user.get('username');
        this.email = user.get('email');
      } catch (error) {
        console.log('Error retrieving user:', error);
        throw error;
      }
    }
  },
  mounted() {
    this.getUserCred()
  },
  computed: {
  }
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

.goback button {
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
