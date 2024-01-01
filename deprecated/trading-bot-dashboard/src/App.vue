<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <b-container>
    <b-row>
      <UserDashboard/>
    </b-row>
  </b-container>
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
  color: #2c3e50;
  margin-top: 60px;
}
@import'~bootstrap-vue/dist/bootstrap-vue.css'
</style>
