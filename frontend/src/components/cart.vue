<template>
  <div class="md:flex flex-col min-h-screen">
    <div class="grid md:grid-cols-6 flex-grow bg-neutral-200 dark:bg-neutral-700 font-body">
      <div class="md:col-span-1 md:flex md:justify-center "
        style="background: linear-gradient(to left, #ee782481, #d83639a3, #dd3675, #b44593);">
        <nav>
          <div
            class="flex justify-between items-center hover:text-red-800 text-4xl tracking-widest transition ease-out duration-500">
            <h1 class="p-4 text-2xl font-bold border-b border-gray-700">
              SnappFood
            </h1>
            <div class="px-4 cursor-pointer md:hidden" id="burger">
              <svg class="w-6 h-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                stroke="currentColor" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </div>
          </div>
          <ul class="text-center navBar mt-6 hidden md:block " id="menu">
            <li class=" font-bold py-1">
              <a href="#"
                class="pt-5 block px-4 flex justify-center hover:text-blue-200 transition ease-out duration-500">
                <router-link to="/">Home</router-link>
                <svg class="w-5 ml-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                  </path>
                </svg>
              </a>
            </li>
            <li class="py-1">
              <a href="#"
                class="pt-5 block px-4 flex justify-center hover:text-blue-200 transition ease-out duration-500">
                <router-link to="/about">About us</router-link>
                <svg class="w-5 ml-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z">
                  </path>
                </svg>
              </a>
            </li>
            <li class="py-1">
              <a href="#"
                class="pt-5 block px-4 flex justify-center hover:text-blue-200 transition ease-out duration-500">
                <span>Contact</span>
                <svg class="w-5 ml-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                  </path>
                </svg>
              </a>
            </li>
            <li class=" font-bold py-1">
              <a href="#"
                class="pt-5 block px-4 flex justify-center hover:text-blue-200 transition ease-out duration-500">
                <router-link to="/profile">Profile</router-link>
                <svg class="w-5 ml-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z">
                  </path>
                </svg>
              </a>
            </li>
            <li class=" font-bold py-1">
              <a href="#"
                class="pt-5 block px-4 flex justify-center hover:text-blue-200 transition ease-out duration-500">
                <router-link to="/profile/cart">Cart</router-link>
                <svg class="w-5 ml-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z">
                  </path>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="md:col-span-5  ">
        <div class="flex bg-gray-800 sticky1 justify-evenly">
          <div class="flex">
            <h1 class=" text-5xl font-bold p-5 text-red-400">Your Credit : {{ this.credit }} </h1>
            <svg class="w-12 ml-2 text-red-400" fill="none" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
              </path>
            </svg>
          </div>
          <div class="flex">
            <h1 class=" text-3xl font-bold p-5 text-red-400">{{ cartItems.length }} orders</h1>
            <svg class="w-7 ml-2 text-red-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              stroke="currentColor" viewBox="0 0 24 24">
              <path
                d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3">
              </path>
            </svg>
          </div>
        </div>
        <div>
          <div v-if="cartItems.length === 0" class="text-white m-8 text-xl">
            No available orders in your cart.
          </div>
          <div class="lg:grid grid-cols-3" v-else>
            <div v-for="rest in cartItems" :key="rest.id">
              <div class='flex items-center justify-center my-10 bg-gradient-to-br px-2'>
                <div class='w-full max-w-md  mx-auto bg-gray-800 rounded-3xl shadow-xl overflow-hidden'>
                  <div class='max-w-md mx-auto'>
                    <img src="../assets/img/ghorme.jpg"
                      class="h-[120px] w-full object-cover rounded-b-lg bg-center lg:rounded-r-lg lg:rounded-bl-none">
                    <div class='p-4 sm:p-6'>
                      <p class='font-bold text-gray-100 text-[22px] leading-7 mb-1'>{{ rest.from }}</p>
                      <p class='text-[#b2b2b5] font-[15px] mt-6 mb-5'> {{ rest.name }} </p>
                      <p class='text-[#b2b2b5] font-[15px] mt-6 mb-5'> {{ rest.price }} </p>
                      <a target='_blank'
                        @click="removeItem(rest.id)"
                        class='btn hover:bg-red-600 hover:text-white transition ease-out duration-500 ml-2'>
                        Remove
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a target='_blank'
            @click="checkout"
            class='border-2 border-green-600 rounded-full py-2 px-6 uppercase text-lg font-bold tracking-wider cursor-pointer text-green-600 hover:bg-green-600 hover:text-white transition ease-out duration-500 ml-2'>
            Check Out
          </a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import HeaderBar from "@/components/shared/Headers.vue";
import Parse from "parse";

export default {
  name: 'CartPage',
  components: {HeaderBar},
  data() {
    return {
      username: '',
      credit: '',
      cartItems: [],
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
        current = current.filter((item) => item.split("$")[0].trim() !== itemId)
        user.set('cart',current)
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
          let myOrder = user.get('orders');
          let cartItems = this.cartItems
          let item
          for (item in cartItems) {
            let string = `${item.id}$${item.from}$in progress$${item.food}`;
            myOrder.push(string)
          }
          let defecit = this.credit - price
          user.set('order',myOrder);
          user.set('cart',[])
          user.set('credit',defecit)
          user.save()
              .then(() => {
                alert(`thanks for your purchase of $${price}`)
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
          let item = {id: split[0].trim(), name: split[1].trim(), from: split[2].trim(), price: Number(split[3].trim())}
          this.cartItems.push(item);
        }
      } catch (error) {
        console.log('Error retrieving user:', error);
        throw error;
      }
    }
  },
  mounted() {
    if(!localStorage.getItem("userid")) {
      this.$router.go(-1)
    } else {
      this.getUserCred()
    }
  },
  computed: {
  }
};
</script>