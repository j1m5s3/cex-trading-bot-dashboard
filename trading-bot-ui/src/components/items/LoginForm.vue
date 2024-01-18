<template>
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
        Login
      </VueLoadingButton>
    </form>
  </b-modal>
</template>
  
<script>
import { postLogin } from '../../utils/apis/BotApi';
import VueLoadingButton from 'vue-loading-button';
export default {

  components: {
    VueLoadingButton
  },
  props: {
    showLoginModal: Boolean
  },
  data() {
    return {
      isLoading: false,
      showModal: false,
      isError: false,
      isLoggedIn: false,
      formData: {
        username: '',
        password: '',
      }
    };
  },
  watch: {
    showLoginModal(val) {
      this.showModal = val;
    }
  },
  methods: {
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
        this.showModal = false;
      }
    },
    close() {
      this.showModal = false;
      this.$emit('showLoginModal', false);
    }
  },
};
</script>