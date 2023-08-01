<template>
  <!-- <nav class="flex items-center bg-dark-blue h-16 p-4 elevation-1">
    Icon and Title on the left
    <div class="flex items-center">
      <i class="icon fa-solid fa-earth-africa text-white text-2xl"></i>
      <router-link to="/" class="h1 text-white text-xl">Project Jowi</router-link>
    </div>

    Spacing between Icon/Title and Login/Signup links
    <div class="flex-grow"></div>

    Login and Signup links on the right
    <div class="flex gap-4 w-1/6 justify-evenly">
      <router-link to="/login" class="flex items-center rounded-full bg-light-blue w-[50%] text-white h-10 justify-center">
        Login
      </router-link>
      <router-link to="/signup" class="text-white">Signup</router-link>
    </div>

    <p> {{ store.state.isLoggedIn }}  </p>
  </nav> -->

  

  

  <v-card>
    <v-layout row wrap>
      <v-toolbar v-if="store.state.isLoggedIn">
        <v-btn color="success" to="/"> Project Jowi </v-btn>
        <v-btn color="success" to="/logout"> Logout </v-btn>
        <v-btn color="success">  Account Centre </v-btn>
        <!-- Redirect to the respective dashboard based on the user's role -->
        <v-btn color="success" @click="redirectToDashboard"> Dashboard</v-btn>  
      </v-toolbar>

      <v-toolbar color="primary" v-else>
        <v-btn color="success" to="/">Project Jowi </v-btn>
        <v-btn color="success" to="/login"> Login </v-btn>
        <v-btn color="success" to="/signup"> Signup </v-btn>
        
      </v-toolbar>
      
    </v-layout>
  </v-card>

  <router-view />



  
</template>

<script setup>
import { useStore } from 'vuex';
import jwt_decode from 'jwt-decode';
import router from './router';

const store = useStore();
store.commit('setIsLoggedIn');

const authToken = localStorage.getItem('authToken');
const decodedToken = authToken ? jwt_decode(authToken) : null;
const userRole = decodedToken ? decodedToken.role : null;

const redirectToDashboard = () => {
  // Add logic to check the user's role and redirect accordingly
  if (userRole === 'admin') {
    router.push({ name: 'admin-dashboard' });
  } else if (userRole === 'shipper') {
    router.push({ name: 'shipper-dashboard' });
  } else if (userRole === 'driver') {
    router.push({ name: 'driver-dashboard' });
  } else if (userRole === 'transporter') {
    router.push({ name: 'transporter-dashboard' });
  } else {
    // Handle the case if the user's role is not recognized or dashboard not available for the role
    // For example, redirect to a default dashboard or show an error message
    console.error('Unknown user role or dashboard not available.');
  }
};




</script>

<style scoped>
/* Add additional styles here if needed */

/* Center the icon and title vertically within the flex container
nav .icon,
nav .h1 {
  margin-top: auto;
  margin-bottom: auto;
}

nav .h1 {
  font-family: 'Comfortaa', cursive;
}

/* Add gap between the icon and the dark-blue background */
/* nav .icon {
  margin-right: 8px;
} */

/* Add padding to the login and signup links
nav a {
  padding: 0.5rem 1rem;
}

Center the text within the light blue background
nav .rounded-full {
  display: flex;
} */
</style>
