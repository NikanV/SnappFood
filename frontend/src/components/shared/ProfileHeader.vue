<template>
  <h1>Hello {{username}}</h1>
  <div>
    <a href="/profile">Profile</a>
    <a href="/add-restaurant">Add Restaurant</a>
    <a href="#">Update Restaurant</a>
    <a @click="logout" href="#">Logout</a>
  </div>
</template>

<script>

export default{
  name: "ProfileHeader",
  data(){
    return{
      username:'user'
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