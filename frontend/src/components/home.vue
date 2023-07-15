<template>
  <div class="auth-links">
    <router-link to="/login" class="text-3xl font-bold underline">Login</router-link>
    <router-link to="/signup" class="auth-links__link">Sign Up</router-link>
  </div>
  <div class="home">
    <div class="hero">
      <h1 class="hero__title">Order food from Snappfood</h1>
      <router-link to="/restaurants" class="hero__button">Explore Restaurants</router-link>
    </div>

    <div class="featured-restaurants">
      <h2 class="featured-restaurants__title">Featured Restaurants</h2>
      <div class="featured-restaurants__list">
        <div v-for="restaurant in featuredRestaurants" :key="restaurant.id" class="featured-restaurants__item">
          <div @click="selectRest(restaurant.id)">
            <img :src="restaurant.image" :alt="restaurant.name" class="featured-restaurants__image"/>
            <div class="featured-restaurants__info">
              <h3>{{ restaurant.name }}</h3>
              <p>{{ restaurant.foods }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="goback">
      <submit-button @click="this.$router.go(-1)">Back</submit-button>
    </div>
  </div>

</template>

<script>
import SubmitButton from "@/components/shared/submitButton.vue";

export default {
  name: 'HomePage',
  components: {SubmitButton},
  data() {
    return {
      selectedRestId: 0,
      featuredRestaurants: [
        {
          id: 1,
          name: 'Restaurant A',
          foods: 'Italian',
          image: '/path/to/restaurantA.jpg',
        },
        {
          id: 2,
          name: 'Restaurant B',
          foods: 'Mexican',
          image: '/path/to/restaurantB.jpg',
        },
        {
          id: 2,
          name: 'Restaurant C',
          foods: 'Mexican',
          image: '/path/to/restaurantB.jpg',
        },
        {
          id: 2,
          name: 'Restaurant D',
          foods: 'Mexican',
          image: '/path/to/restaurantB.jpg',
        },
        // // Add more featured restaurants as needed
      ],
    };
  },
  methods: {
    selectRest(id) {
      //   todo: selected id = id
      alert(id)
      this.$router.push({name: "RestaurantPage"})
    }
  }
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
