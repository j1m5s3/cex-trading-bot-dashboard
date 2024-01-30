<template>
  <div id="app">
    <b-row class="button-row">
      <b-col class="btn-col">
        <button class="btn btn-outline-primary btn-lg" @click="showLoginForm" title="Login"> {{ loginStatus }} </button>
        <b-modal v-model="showModal" title="Login" @close="close" hide-footer>
          <!-- Your login form goes here -->
          <form @submit.prevent="login">
            <b-form-group label="Username">
              <b-form-input v-model="formData.username" required></b-form-input>
            </b-form-group>
            <b-form-group label="Password">
              <b-form-input type="password" v-model="formData.password" required></b-form-input>
            </b-form-group>
            <VueLoadingButton aria-label="Login" class="button" @click.native="login" :loading="isLoading">
              {{ loginStatus }}
            </VueLoadingButton>
          </form>
        </b-modal>

        <a href="https://personal-asset-manager-read-the-docs.readthedocs.io/en/latest/" class="btn btn-docs" target="_blank">
          <button class="btn btn-outline-info btn-lg" title="Docs">
            <b-icon icon="book" aria-hidden="true"></b-icon>
            <span class="sr-only">Read the Docs</span>
          </button>
        </a>
      </b-col>
    </b-row>
    <div class="center-container">
      <div class="logo-container">
        <img class="circular-logo" alt="Vue logo" src="./assets/robot_trading_logo_cropped.png">
      </div>
    </div>
    <div>
      <h1 class="display-4">P.A.M</h1>
      <p class="lead">A personal asset manager that uses trading and yield strategies to manage your digital assets.</p>
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
      showModal: false,
      isError: false,
      isLoading: false,
      isLoggedIn: false,
      loginStatus: localStorage.getItem('username') || 'Login',
      username: '',
      formData: {
        username: '',
        password: '',
      }
    }
  },
  methods: {
    showLoginForm() {
      this.showModal = true;
    },
    login() {
      // Implement your login logic here
      console.log('Logging in with:', this.formData.username, this.formData.password);
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
        this.loginStatus = 'Login';

        if (this.isLoggedIn) {
          console.log('Login successful');
          this.loginStatus = this.formData.username;
          this.showModal = false;
        }
        localStorage.setItem('username', this.formData.username);
      }, 3000);
    },
    close() {
      this.showModal = false;
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
}

.btn-col {
  text-align: left; /* Align buttons to the left */
}

.button-row {
  justify-content: flex-start; /* Align row content to the start (left) */
}
</style>
