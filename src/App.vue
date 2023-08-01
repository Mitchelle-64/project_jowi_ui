<template>
  <nav class="flex items-center bg-dark-blue h-16 p-4 elevation-1">
    <!-- Icon and Title on the left -->
    <div class="flex items-center">
      <i class="icon fa-solid fa-earth-africa text-white text-2xl"></i>
      <router-link to="/" class="h1 text-white text-xl">Project Jowi</router-link>
    </div>

    <!-- Spacing between Icon/Title and Login/Signup links -->
    <div class="flex-grow"></div>

    <!-- Login and Signup links on the right -->
    <div class="flex gap-4 w-1/6 justify-evenly">
      <router-link to="/login" class="flex items-center rounded-full bg-light-blue w-[50%] text-white h-10 justify-center">
        Login
      </router-link>
      <router-link to="/signup" class="text-white">Signup</router-link>
    </div>

    <p> {{ store.state.isLoggedIn }}  </p>
  </nav>


  <router-view />
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();

store.commit('setIsLoggedIn');

</script>

<style scoped>
/* Add additional styles here if needed */

/* Center the icon and title vertically within the flex container */
nav .icon,
nav .h1 {
  margin-top: auto;
  margin-bottom: auto;
}

nav .h1 {
  font-family: 'Comfortaa', cursive;
}

/* Add gap between the icon and the dark-blue background */
nav .icon {
  margin-right: 8px;
}

/* Add padding to the login and signup links */
nav a {
  padding: 0.5rem 1rem;
}

/* Center the text within the light blue background */
nav .rounded-full {
  display: flex;
}
</style>
