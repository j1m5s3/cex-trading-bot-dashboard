<template>
  <div id="app">
    <b-row>
      <b-col>
        <button class="btn btn-primary" @click="showLoginForm">Login</button>
        <b-modal v-model="showLoginModal" title="Login" @close="close" hide-footer>
          <!-- Your login form goes here -->
          <form @submit.prevent="login">
            <b-form-group label="Username">
              <b-form-input v-model="formData.username" required></b-form-input>
            </b-form-group>
            <b-form-group label="Password">
              <b-form-input type="password" v-model="formData.password" required></b-form-input>
            </b-form-group>
            <VueLoadingButton aria-label="Login" class="button" @click.native="login" :loading="isLoading">
              Login
            </VueLoadingButton>
          </form>
        </b-modal>
      </b-col>
    </b-row>
    <div class="center-container">
      <div class="logo-container">
        <img class="circular-logo" alt="Vue logo" src="./assets/robot_trading_logo_cropped.png">
      </div>
    </div>
    <UserDashboard />
  </div>
</template>

<script>
import VueLoadingButton from 'vue-loading-button';
import UserDashboard from './components/UserDashboard.vue'
import { postLogin } from './utils/apis/BotApi';

export default {
  name: 'App',
  components: {
    UserDashboard,
    VueLoadingButton
  },
  data() {
    return {
      showLoginModal: false,
      isError: false,
      isLoading: false,
      isLoggedIn: false,
      formData: {
        username: '',
        password: '',
      }
    }
  },
  methods: {
    showLoginForm() {
      this.showLoginModal = true;
    },
    login() {
      // Implement your login logic here
      console.log('Logging in with:', this.username, this.password);
      // Close the modal after login
      this.isLoading = true;
      setTimeout(async () => {
        const response = await postLogin(this.formData);
        if (response.access_token) {
          localStorage.setItem('access_token', response.access_token);
          this.isLoggedIn = true;
        }
        else {
          console.log('Login failed');
          this.isError = true;
        }
        this.isLoading = false;
      }, 3000);

      if (this.isLoggedIn) {
        this.showLoginModal = false;
      }
    },
    close() {
      this.showLoginModal = false;
    }
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
  width: 10%;
  /* Adjust the width and height as needed */
  height: 10%;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #ccc;
  /* Adjust the border color */
  margin-top: 20px;
  margin-bottom: 20px;
}

.circular-logo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* Preserve aspect ratio and cover the entire container */
}</style>
