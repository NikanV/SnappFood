<template>
  <div class="sidebar">
    <h2 class="sidebar__title">Menu</h2>
    <ul class="sidebar__list">
      <li v-for="item in menuItems" :key="item.id" class="sidebar__item">
        <router-link :to="item.path" class="sidebar__link" active-class="active">
          {{ item.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'SideBar',
  data() {
    return {
      menuItems: [
        { id: 1, title: "Home", path: "/" },
        { id: 2, title: "Cart", path: "/cart" },
        { id: 3, title: "Profile", path: "/profile" },
        // Add more menu items as needed
      ],
    };
  },
};
</script>

<style scoped>
.sidebar {
  width: 200px;
  background-color: #f8f9fa;
  padding: 16px;
}

.sidebar__title {
  font-size: 20px;
  margin-bottom: 16px;
}

.sidebar__list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar__item {
  margin-bottom: 8px;
}

.sidebar__link {
  text-decoration: none;
  color: #333;
}

.sidebar__link.active {
  font-weight: bold;
}
</style>
