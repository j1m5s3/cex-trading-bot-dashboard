<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <UserDashboard/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import UserDashboard from './components/UserDashboard.vue'

export default {
  name: 'App',
  components: {
    UserDashboard
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: black;
  color: green;
  margin-top: 60px;
}
</style>
