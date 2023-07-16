<template>
  <header-bar/>
  <div class="restaurant-details">
    <h2>{{ restaurant.name }}</h2>
    <img :src="restaurant.image" :alt="restaurant.name" class="restaurant-details__image"/>
    <p>{{ restaurant.description }}</p>

    <h3>Menu for {{restaurant.name}}</h3>
    <div v-if="restaurant.menuForRest.length === 0">
      No food items available at the moment.
    </div>
    <div v-else>
      <div v-for="food in restaurant.menuForRest" :key="food.id" class="food-item">
        <div class="food-item__info">
          <h4>{{ food.name }}</h4>
          <p>{{ food.description }}</p>
          <p>Price: {{ food.price }}</p>
        </div>
        <button @click="addToCart(food.id, food.name, restaurant.name, food.price)">Add to Cart</button>
      </div>
    </div>
    <div class="goback">
      <button @click="
      localStorage.removeItem('resid');
      this.$router.go(-1);">Back</button>
    </div>
  </div>
</template>

<script>
import HeaderBar from "@/components/shared/Headers.vue";
import Parse from "parse";

export default {
  name: 'RestaurantPage',
  components: {HeaderBar},
  data() {
    return {
      restaurant: {
        name: '',
        image: '',
        description: '',
        menuForRest: [
        ],
      },
      cart: [],
    };
  },
  methods: {
    async addToCart(id,name,from,price) {
      let string = `${id}$${name}$${from}$${price}`

      this.cart.push(string);
      const userId = localStorage.getItem('userid');
      const query = new Parse.Query(Parse.User);
      const user = await query.get(userId);
      let userCart = user.get("cart")
      userCart.push(string);
      user.set('cart',userCart)
      user.save()
          .then(() => {

            alert(`added ${name} to cart`)
          })

          .catch(error => {
            alert('Error adding to cart:' + error.message);
          });
    },
    async getRest() {
      try {
        let id = localStorage.getItem('resid');
        const Restaurant = Parse.Object.extend('Restaurant');
        const query = new Parse.Query(Restaurant);
        const rest = await query.get(id);
        let menu = rest.get('Menu');
        this.restaurant.name = rest.get('Name');
        this.restaurant.image = rest.get('Image');
        for (let item in menu) {
          let split = menu[item].split("$")
          this.restaurant.menuForRest.push({id:Number(split[0].trim()),name:split[1].trim(),description: split[2].trim(),price: Number(split[3].trim())})
        }
      } catch (error) {
        alert(error);
      }
    },


  }
  ,
  mounted() {
    this.getRest()
  }
}

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