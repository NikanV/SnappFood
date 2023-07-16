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
          <submit-button @click="removeItem(item.id)">Remove</submit-button>
        </div>
      </div>
      <div class="cart__total">
        <p>Total: ${{ getTotalPrice() }}</p>
        <submit-button @click="checkout">Checkout</submit-button>
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
  name: 'CartPage',
  data() {
    return {
      username: '',
      credit: '',
      cartItems: [
        // {id: undefined, name: '', from: '', price: undefined}
      ],
    };
  },
  methods: {
    async removeItem(itemId) {
      this.cartItems = this.cartItems.filter((item) => item.id !== itemId);
      try {
        const userId = localStorage.getItem('userid');
        const query = new Parse.Query(Parse.User);
        const user = await query.get(userId);
        let current = user.get('cart')
        current = current.filter((item) => Number(item.split("$")[0].trim()) != itemId)
        user.set('cart',current)
        alert(current)
        user.save()
            .then(() => {
              alert(`item removed`)
            })
            .catch(error => {
              alert('Error removing item:' + error.message);
            });
      } catch (error) {
        console.log('Error retrieving user:', error);
        throw error;
      }
    },

    getTotalPrice() {
      return this.cartItems.reduce((total, item) => total + item.price, 0);
    },
    async checkout() {
      let price = this.getTotalPrice()
      try {
        const userId = localStorage.getItem('userid');
        const query = new Parse.Query(Parse.User);
        const user = await query.get(userId);
        if (this.credit < price)
          alert('cant pay, not enough credit')
        else {
          let myCart = user.get('orders');
          for (let item in this.cartItems) {
            let string = `${item.id}$${item.from}$in progress$${item.food}`;
            myCart.push(string)
          }
          let defecit = this.credit - price
          user.set('order',myCart);
          user.set('cart',[])
          user.set('credit',defecit)
          user.save()
              .then(() => {
                this.$router.push({name: "RestaurantListPage"})
              })
              .catch(error => {
                alert('Error checking out:' + error.message);
              });
        }
      } catch (error) {
        console.log('Error retrieving user:', error);
        throw error;
      }
    },
    async getUserCred() {
      try {
        const userId = localStorage.getItem('userid');
        const query = new Parse.Query(Parse.User);
        const user = await query.get(userId);
        this.username = user.get('username');
        this.credit = user.get('credit');
        let strings = user.get('cart');
        for (let str of strings) {
          let split = str.split("$");
          this.cartItems.push({id: Number(split[0].trim()), name: split[1], from: split[2], price: Number(split[3].trim())});
        }
      } catch (error) {
        console.log('Error retrieving user:', error);
        throw error;
      }
    }
  },
  mounted() {
    this.getUserCred()
  }
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

.cart__item-actions submit-button {
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
