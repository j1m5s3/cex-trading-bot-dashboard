<template>
  <div id="app">
    <b-row> 
      <b-col>
        LOGIN
      </b-col> 
  </b-row>
    <div class="center-container">
      <div class="logo-container">
        <img class="circular-logo" alt="Vue logo" src="./assets/robot_trading_logo_cropped.png">
      </div>
    </div>
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
  background-color: grey;
  background: linear-gradient(180deg, rgb(0, 0, 0) 0%, rgb(67, 67, 71) 35%, rgb(206, 146, 14) 100%);
  color: green;
  margin-top: 60px;
}

.center-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  background-color: transparent;
  max-width: 50%;
  margin: 0 auto 20px;
}

.logo-container {
  width: 10%; /* Adjust the width and height as needed */
  height: 10%;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #ccc; /* Adjust the border color */
  margin-top: 20px;
  margin-bottom: 20px;
}

.circular-logo {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Preserve aspect ratio and cover the entire container */
}
</style>
