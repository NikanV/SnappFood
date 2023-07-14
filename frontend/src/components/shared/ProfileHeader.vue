<template>
  <h1>Hello {{username}}</h1>
  <div>
    <a href="/profile">Profile</a>
    <a @click="logout" href="#">Logout</a>
    <a href="/cart">Card</a>
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