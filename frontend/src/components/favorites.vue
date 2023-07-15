<template>
  <div class="favorites">
    <h2>Favorites for {{username}}</h2>
    <div v-if="favoriteRestaurants.length === 0">
      You don't have any favorite restaurants yet.
    </div>
    <div v-else>
      <div v-for="restaurant in favoriteRestaurants" :key="restaurant.id" class="favorite-item">
        <img :src="restaurant.image" :alt="restaurant.name" class="favorite-item__image" />
        <div class="favorite-item__info">
          <h3>{{ restaurant.name }}</h3>
          <p>{{ restaurant.address }}</p>
          <!-- Add other restaurant information here -->
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
  name:'FavouritesPage',
  data() {
    return {
      username:'',
      email:'',
      favoriteRestaurants: [
        {
          id: undefined,
          name: '',
          address: '',
          image: '',
        },
      ],
    };
  },
  methods:{
    async getUserCred() {
      try {
        const userId = localStorage.getItem('userid');
        const query = new Parse.Query(Parse.User);
        const user = await query.get(userId);
        this.username = user.get('username');
        this.email = user.get('email');
        let strings = user.get('faveRestaurants');
        for (let str of strings) {
          let split = str.split("$");
          this.favoriteRestaurants.push({id: split[0], name: split[1], address: split[2], image: split[3]});
        }

      } catch (error) {
        console.log('Error retrieving user:', error);
        throw error;
      }
    },
  },
  mounted() {
    this.getUserCred()
  }
};
</script>

<style scoped>
.favorites {
  max-width: 800px;
  margin: 0 auto;
}

.favorites h2 {
  margin-bottom: 16px;
}

.favorite-item {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.favorite-item__image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 16px;
}

.favorite-item__info {
  flex-grow: 1;
}

.favorite-item__info h3 {
  margin: 0;
  font-size: 18px;
  font-weight: bold;
}

.favorite-item__info p {
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
