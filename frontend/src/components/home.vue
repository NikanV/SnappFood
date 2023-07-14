<template>
  <div class="auth-links">
    <router-link to="/login" class="auth-links__link">Login</router-link>
    <router-link to="/signup" class="auth-links__link">Sign Up</router-link>
  </div>
  <div class="home">
    <div class="hero">
      <h1 class="hero__title">Delicious Food Delivered to Your Door</h1>
      <p class="hero__description">Order from your favorite restaurants and enjoy a wide variety of cuisines.</p>
      <router-link to="/restaurants" class="hero__button">Explore Restaurants</router-link>
    </div>

    <div class="featured-restaurants">
      <h2 class="featured-restaurants__title">Featured Restaurants</h2>
      <div class="featured-restaurants__list">
        <div v-for="restaurant in featuredRestaurants" :key="restaurant.id" class="featured-restaurants__item">
          <img :src="restaurant.image" :alt="restaurant.name" class="featured-restaurants__image" />
          <div class="featured-restaurants__info">
            <h3>{{ restaurant.name }}</h3>
            <p>{{ restaurant.cuisine }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="goback">
      <button @click="this.$router.go(-1)">Back</button>
    </div>
  </div>

</template>

<script>
export default {
  name:'HomePage',
  data() {
    return {
      featuredRestaurants: [
        // {
        //   id: 1,
        //   name: 'Restaurant A',
        //   cuisine: 'Italian',
        //   image: '/path/to/restaurantA.jpg',
        // },
        // {
        //   id: 2,
        //   name: 'Restaurant B',
        //   cuisine: 'Mexican',
        //   image: '/path/to/restaurantB.jpg',
        // },
        // // Add more featured restaurants as needed
      ],
    };
  },
};
</script>

<style scoped>
.home {
  padding: 16px;
}

.hero__title {
  font-size: 36px;
  margin-bottom: 16px;
}

.hero__description {
  font-size: 18px;
  margin-bottom: 32px;
}

.hero__button {
  padding: 12px 24px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  font-size: 18px;
}

.hero__button:hover {
  background-color: #0056b3;
}

.auth-links {
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
}

.auth-links__link {
  margin: 0 8px;
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  font-size: 16px;
}

.auth-links__link:hover {
  background-color: #0056b3;
}

.featured-restaurants__title {
  font-size: 24px;
  margin-bottom: 16px;
}

.featured-restaurants__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.featured-restaurants__item {
  width: 48%;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  padding: 12px;
  border-radius: 4px;
}

.featured-restaurants__image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 16px;
}

.featured-restaurants__info h3 {
  margin: 0;
  font-size: 18px;
}

.featured-restaurants__info p {
  margin: 0;
  color: #888;
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
