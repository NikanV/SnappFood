<template>
  <div class="orders">
    <h2>Orders for {{username}}</h2>
    <div v-if="orders.length === 0">
      You don't have any orders yet.
    </div>
    <div v-else>
      <div v-for="order in orders" :key="order.id" class="order-item">
        <div class="order-item__info">
          <h3>{{ order.restaurant }}</h3>
          <p>Status: {{ order.status }}</p>
          <p>food: {{ order.food }}</p>
          <!-- Add other order information -->
        </div>
      </div>
    </div>
    <div class="goback">
      <submit-button @click="this.$router.go(-1)">Back</submit-button>
    </div>
  </div>
</template>

<script>
import Parse from "parse";

export default {
  name: 'OrdersPage',
  data() {
    return {
      username: '',
      email: '',
      orders: [
      ],
    };
  },
  methods: {
    async getUserCred() {
      try {
        const userId = localStorage.getItem('userid');
        const query = new Parse.Query(Parse.User);
        const user = await query.get(userId);
        this.username = user.get('username');
        this.email = user.get('email');
        let strings = user.get('orders');
        for (let str of strings) {
          let split = str.split("$");
          this.orders.push({id: split[0], restaurant: split[1], status: split[2], food: split[3]});
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
.orders {
  max-width: 800px;
  margin: 0 auto;
}

.orders h2 {
  margin-bottom: 16px;
}

.order-item {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.order-item__info {
  flex-grow: 1;
}

.order-item__info h3 {
  margin: 0;
  font-size: 18px;
  font-weight: bold;
}

.order-item__info p {
  margin: 0;
  color: #888;
}

.goback submit-button {
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
