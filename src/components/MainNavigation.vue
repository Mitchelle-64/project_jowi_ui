<template>
    <div class="flex items-center bg-dark-blue h-16 p-4 elevation-1">
      <!-- Icon and Title on the left -->
      <div class="flex items-center gap-2">
        <!-- Replace 'icon-class' with the appropriate class for your icon -->
        <i class="icon fa-solid fa-earth-africa  text-white text-2xl"></i>
        <h1 class=" h1 text-white text-xl">Project Jowi</h1>
      </div>
  
      <!-- Spacing between Icon/Title and Login/Signup links -->
      <div class="flex-grow"></div>
  
      <!-- Login and Signup links on the right -->
      <div class="flex gap-4 w-1/6 justify-evenly ">
        <button class="rounded-full bg-light-blue w-[50%]"> <a href="/login" class="text-white">Login</a> </button>
        
        <a href="#" class="text-white">Signup</a>
      </div>
    </div>
  </template>
  
  <style>
  /* Add additional styles here if needed */
  
  /* Center the icon and title vertically within the flex container */
  .flex .icon,
  .flex h1 {
    margin-top: auto;
    margin-bottom: auto;
  }

  .flex h1 {
    font-family: 'Comfortaa', cursive;

  }
  
  /* Add gap between the icon and the dark-blue background */
  .flex .icon {
    margin-right: 8px;
  }
  
  /* Add padding to the login and signup links */
  .flex a {
    padding: 0.5rem 1rem;
  }
  </style>
  