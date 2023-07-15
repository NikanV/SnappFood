<template>
  <div class="orders">
    <h2>Orders</h2>
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
      <button @click="this.$router.go(-1)">Back</button>
    </div>
  </div>
</template>

<script>
export default {
  name:'OrdersPage',
  data() {
    return {
      orders: [
        {
          id: 1,
          restaurant: 'Restaurant A',
          status: 'Delivered',
          food:'tasty item 1',
        },
        {
          id: 2,
          restaurant: 'Restaurant B',
          status: 'In Progress',
          // Add other order properties as needed
        },
      ],
    };
  },
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

.goback button {
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
