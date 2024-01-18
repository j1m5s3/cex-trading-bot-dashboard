<template>
    <b-modal v-model="showModal" title="Login">
      <!-- Your login form goes here -->
      <form @submit.prevent="login">
        <b-form-group label="Username">
          <b-form-input v-model="username" required></b-form-input>
        </b-form-group>
        <b-form-group label="Password">
          <b-form-input type="password" v-model="password" required></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Login</b-button>
      </form>
    </b-modal>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showModal: false,
        username: '',
        password: '',
      };
    },
    methods: {
      login() {
        // Implement your login logic here
        console.log('Logging in with:', this.username, this.password);
        // Close the modal after login
        this.showModal = false;
      },
    },
  };
  </script>