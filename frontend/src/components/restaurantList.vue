<template>
  <div class="restaurants">
    <h2>Restaurants</h2>
    <div v-if="restaurants.length === 0">
      No restaurants available at the moment.
    </div>
    <div v-else>
      <div v-for="restaurant in restaurants" :key="restaurant.id" class="restaurant-item">
        <img :src="restaurant.image" :alt="restaurant.name" class="restaurant-item__image" />
        <div class="restaurant-item__info">
          <h3>{{ restaurant.name }}</h3>
          <p>{{ restaurant.foodType }}</p>
        </div>
        <router-link :to="'/restaurants/' + restaurant.id" class="restaurant-item__link">View Details</router-link>
      </div>
    </div>
    <div class="goback">
      <button @click="this.$router.go(-1)">Back</button>
    </div>
  </div>
</template>

<script>
export default {
  name:'RestaurantsListPage',
  data() {
    return {
      restaurants: [
        {
          id: 1,
          name: 'Restaurant A',
          foodType: 'iranian',
          image: '/path/to/restaurantA.jpg',
        },
        // {
        //   id: 2,
        //   name: 'Restaurant B',
        //   foodType: 'Mexican',
        //   image: '/path/to/restaurantB.jpg',
        // },
        // Add more restaurants as needed
      ],
    };
  },
};
</script>

<style scoped>
.restaurants {
  max-width: 800px;
  margin: 0 auto;
}

.restaurants h2 {
  margin-bottom: 16px;
}

.restaurant-item {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.restaurant-item__image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 16px;
}

.restaurant-item__info {
  flex-grow: 1;
}

.restaurant-item__info h3 {
  margin: 0;
  font-size: 18px;
}

.restaurant-item__info p {
  margin: 0;
  color: #888;
}

.restaurant-item__link {
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
}

.restaurant-item__link:hover {
  background-color: #0056b3;
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
