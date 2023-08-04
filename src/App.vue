<template>
  <v-app>
    <v-card>
      <v-layout row wrap>
        <!-- toolbar for logged in users -->
        <v-toolbar :elevation="0" v-if="store.state.isLoggedIn" :rounded="false" class="nav flex items-center pl-2 pr-2 bg-dark-blue">

          <div class="flex items-center">
            <v-btn variant="plain" to="/" class="flex items-center text-white" prepend-icon="mdi:mdi-earth">
              Project Jowi
            </v-btn>
          </div>
          
          <!-- Spacing between Icon/Title and Login/Signup links -->
          <div class="flex-grow"></div>

          <div class="flex gap-3 justify-evenly">
            
            <!-- Redirect to the respective dashboard based on the user's role -->
            <v-btn @click="redirectToDashboard" class="rounded-full">
              <v-icon class="text-white">mdi-monitor-dashboard</v-icon>
            </v-btn>

            

            <v-btn class= "text-white">
              <v-icon>mdi-account-circle-outline</v-icon>
            </v-btn>

            <v-btn to="/logout" class=" bg-light-yellow">
              <v-icon>mdi-logout</v-icon>
            </v-btn>
          
              
          </div>
          
          
        </v-toolbar>
        
        <!-- toolbar for logged out users -->
        <v-toolbar :elevation="0" v-else class="nav flex items-center pl-2 pr-2 bg-dark-blue">
          <!-- Project Jowi button on the left side -->
          <div class="flex items-center">
            <v-btn variant="plain" to="/" color="" class="flex items-center text-white" prepend-icon="mdi:mdi-earth">
              Project Jowi
            </v-btn>
          </div>

          <div class="flex-grow"></div>

          <div class="flex gap-3 justify-evenly">
            

            <v-btn to="/signup" class=" bg-light-yellow">
              Signup
            </v-btn>

            <v-btn to="/login" class= "text-white" prepend-icon="mdi: mdi-login-variant">
              Login
            </v-btn>

          </div>
        </v-toolbar>


        
      </v-layout>
    </v-card>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
  


  



  
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

@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';





</style>
