<template>
  <header-bar/>
  <div class="restaurant-details">
    <h2>{{ restaurant.name }}</h2>
    <img :src="restaurant.image" :alt="restaurant.name" class="restaurant-details__image" />
    <p>{{ restaurant.description }}</p>

    <h3>Menu</h3>
    <div v-if="restaurant.menu.length === 0">
      No food items available at the moment.
    </div>
    <div v-else>
      <div v-for="food in restaurant.menu" :key="food.id" class="food-item">
        <div class="food-item__info">
          <h4>{{ food.name }}</h4>
          <p>{{ food.description }}</p>
          <p>Price: {{ food.price }}</p>
        </div>
        <SubmitButton :disabled="isNotLoggedIn" v-show="!isNotLoggedIn" @click="addToCart(food)">Add to Cart</SubmitButton>
      </div>
    </div>
    <div class="goback">
      <SubmitButton @click="this.$router.go(-1)">Back</SubmitButton>
    </div>
  </div>
</template>

<script>
import HeaderBar from "@/components/shared/Headers.vue";
import SubmitButton from "@/components/shared/submitButton.vue";

export default {
  name:'RestaurantPage',
  components: {SubmitButton, HeaderBar},
  data() {
    return {
      isNotLoggedIn:true,
      restaurant: {
        is_favourite:false,
        name: 'restaurant1',
        image: 'r1 img',
        description: 'description',
        menu: [
          {
            id: 1,
            name: 'menu item',
            description: 'item description',
            price:10.11,
          },
        ],
      },
      cart: [],
    };
  },
  methods: {
    addToCart(food) {
      // todo: complete logic of add to cart
      this.cart.push(food);
      this.$router.push({ name: "CartPage" });
    },
  },
};
</script>

<style scoped>
.restaurant-details {
  max-width: 800px;
  margin: 0 auto;
}

.restaurant-details h2 {
  margin-bottom: 16px;
}

.restaurant-details__image {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 16px;
}

.food-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.food-item__info {
  flex-grow: 1;
}

.food-item__info h4 {
  margin: 0;
  font-size: 16px;
}

.food-item__info p {
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