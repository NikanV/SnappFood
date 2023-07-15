<template>
  <header class="header">
    <div class="header__logo">
<!--      <img src="/path/to/logo.png" alt="Logo" />-->
      <h1 class="header__title">Snappfood</h1>
    </div>
    <nav class="header__nav">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/restaurants">Restaurants</router-link></li>
        <li><router-link to="/profile/orders">Orders</router-link></li>
        <li><router-link to="/profile/favorites">Favorites</router-link></li>
        <li><router-link to="/profile/settings">Settings</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderBar',
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: #f5f5f5;
}

.header__logo img {
  width: 40px;
  height: 40px;
  margin-right: 8px;
}

.header__title {
  margin: 0;
  font-size: 24px;
  font-weight: bold;
}

.header__nav ul {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.header__nav li {
  margin-right: 16px;
}

.header__nav li:last-child {
  margin-right: 0;
}

.header__nav a {
  text-decoration: none;
  color: #333;
}

.header__nav a:hover {
  color: #007bff;
}
</style>
