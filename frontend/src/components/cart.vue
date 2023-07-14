<template>
  <div class="cart">
    <h1 class="cart__title">Cart</h1>
    <div v-if="cartItems.length === 0" class="cart__empty">
      Your cart is empty.
    </div>
    <div v-else>
      <div v-for="item in cartItems" :key="item.id" class="cart__item">
        <div class="cart__item-info">
          <h3>{{ item.name }}</h3>
          <p>Price: ${{ item.price }}</p>
        </div>
        <div class="cart__item-actions">
          <button @click="removeItem(item.id)">Remove</button>
        </div>
      </div>
      <div class="cart__total">
        <p>Total: ${{ getTotalPrice() }}</p>
        <button @click="checkout">Checkout</button>
      </div>
    </div>
    <div class="goback">
      <button @click="this.$router.go(-1)">Back</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartPage',
  data() {
    return {
      cartItems: [],
    };
  },
  methods: {
    removeItem(itemId) {
      this.cartItems = this.cartItems.filter((item) => item.id !== itemId);
    },

    getTotalPrice() {
      return this.cartItems.reduce((total, item) => total + item.price, 0);
    },
    checkout() {
      // todo: implement checkout
    },
  },
};
</script>

<style scoped>
.cart {
  padding: 16px;
}

.cart__title {
  font-size: 24px;
  margin-bottom: 16px;
}

.cart__empty {
  text-align: center;
  font-size: 18px;
}

.cart__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.cart__item-info h3 {
  margin: 0;
  font-size: 18px;
}

.cart__item-actions button {
  padding: 8px 16px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.cart__total {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  font-size: 18px;
}

.cart__total button {
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
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
