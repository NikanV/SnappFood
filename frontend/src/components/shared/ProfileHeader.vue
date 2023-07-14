<template>
  <h1>welcome {{username}}</h1>
  <div>
    <a href="/profile">Home</a>
    <a href="#">Add Restaurant</a>
    <a href="#">Update Restaurant</a>
    <a @click="logout" href="#">Logout</a>
  </div>
</template>

<script>

export default{
  name: "ProfileHeader",
  data(){
    return{
      username:''
    }
  },
  methods:{
    logout(){
      //todo: implement logout logic
      this.$router.push({name: 'LoginPage'})
    }
  }
}
</script>

<style scoped>

</style>