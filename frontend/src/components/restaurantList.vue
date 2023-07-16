<template>
  <div class="restaurants">
    <h2>Restaurants</h2>
    <div v-if="restaurants.length === 0">
      No restaurants available at the moment.
    </div>
    <div v-else>
      <div v-for="restaurant in restaurants" :key="restaurant.id" class="restaurant-item">
        <div @click="gotoRest(restaurant.id)">
          <img :src="restaurant.image" :alt="restaurant.name" class="restaurant-item__image"/>
          <div class="restaurant-item__info">
            <h3>{{ restaurant.name }}</h3>
            <p>{{ restaurant.foodType }}</p>
            <p>{{ restaurant.contact }}</p>
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
import Parse from "parse";

export default {
  name: 'RestaurantsListPage',
  data() {
    return {
      restaurants: [],
      resId: undefined,
    };
  },
  methods: {

    gotoRest(selectedId) {
      localStorage.setItem("resid", selectedId);
      this.$router.push({name: "RestaurantPage"})
    },

    async getAllRestaurants() {
      try {
        const query = new Parse.Query('Restaurant');
        return await query.find()
      } catch (error) {
        console.log('Error retrieving restaurants:', error);
        throw error;
      }
    }
  },
  mounted() {
    this.getAllRestaurants()
        .then(restaurants => {
          restaurants.forEach(restaurant => {
            this.restaurants.push({
              id: restaurant.id,
              name: restaurant.get('Name'),
              foodType: restaurant.get('FoodType'),
              image: restaurant.get("Image"),
              contact: restaurant.get('contact')
            })
          });
        })
        .catch(error => {
          console.log('Error retrieving restaurants:', error);
        });
  }
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
