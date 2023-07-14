<template>
  <ProfileHeader/>
  <h1>order food from {{ restaurant }}</h1>
  <table>
    <tr @click="addOrderToList" v-for="order in orders" :key="order.id">
      <td>{{ order.id }}</td>
      <td>{{ order.name }}</td>
      <td>{{ order.price }}</td>
      <td>{{ order.image }}</td>
    </tr>

  </table>
</template>

<script>

import ProfileHeader from "@/components/shared/ProfileHeader.vue";

export default {
  name: "OrderFoodPage",
  components: {ProfileHeader},
  data() {
    return {
      username: '',
      orders: [],
      restaurant: '',

    }
  },
  methods: {
    addOrderToList() {
    },
  },
  computed: {
    // todo: get restaurant & its order list
  }
}
</script>

<style>

</style>