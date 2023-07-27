<template>

  <!-- toggle button here -->

  <!-- background starts here -->
  <div class="flex items-center justify-center h-screen bg-dark-blue"> 

    


  <!-- shipper signup form here -->
    <div v-if="showShipper">
      <div class="w-150 p-6 rounded-lg bg-white shadow-lg">

        <!-- switch button is here -->
        <div>
          <v-switch label="i'm a transporter" v-model="showShipper"></v-switch>
          
        </div>

        <h2 class="text-3xl text-center font-semibold text-dark-blue mb-6">Sign Up</h2>
        <form class="form flex flex-col gap-4" @submit.prevent="signupShipper">
          <div class="inputDiv">
            <label for="firstName" class="text-dark-blue">First Name:</label>
            <input type="text" placeholder="Enter your first name" v-model="shipperData.firstName" class="input" />
          </div>
          <div class="inputDiv">
            <label for="lastName" class="text-dark-blue">Last Name:</label>
            <input type="text" placeholder="Enter your last name" v-model="shipperData.lastName" class="input" />
          </div>
          <div class="inputDiv">
            <label for="phoneNumber" class="text-dark-blue">Phone Number:</label>
            <input type="text" placeholder="Enter your phone number" v-model="shipperData.phoneNumber" class="input" />
          </div>
          <div class="inputDiv">
            <label for="email" class="text-dark-blue">Email:</label>
            <input type="email" placeholder="Enter your email" v-model="shipperData.email" class="input" />
          </div>
          <div class="inputDiv">
            <label for="password" class="text-dark-blue">Password:</label>
            <input type="password" placeholder="Enter your password" v-model="shipperData.password" class="input" />
          </div>
          <div class="inputDiv">
            <label for="confirmPassword" class="text-dark-blue">Confirm Password:</label>
            <input type="password" placeholder="Confirm your password" v-model="shipperData.confirm_password" class="input" />
          </div>
          <div class="inputDiv">
            <button type="submit" class="btn rounded-full bg-light-blue px-6 py-1 text-white text-xl">
              Sign Up
            </button>
          </div>
        </form>
        <!-- <div v-if="shipperData">
          <h1 class="text-center mt-4">You have submitted the following data:</h1>
          <pre class="text-center">{{ shipperData }}</pre>
        </div> -->
      </div>
    </div>

<!-- transporter signup form here -->
  <div v-else>
    <div class="w-150 p-6 rounded-lg bg-white shadow-lg">
      
      <!-- toggle button here -->
        <div>
          <v-switch label="i have cargo" v-model="showShipper"></v-switch>
        </div>

        <h2 class="text-3xl text-center font-semibold text-dark-blue mb-6"> Be a transporter </h2>

        <!-- form to submit transporter data -->
        <form class="form flex flex-col gap-4" @submit.prevent="signupTransporter">
          <div class="inputDiv">
            <label for="firstName" class="text-dark-blue">First Name:</label>
            <input type="text" placeholder="Enter your first name" v-model="shipperData.firstName" class="input" />
          </div>
          <div class="inputDiv">
            <label for="lastName" class="text-dark-blue">Last Name:</label>
            <input type="text" placeholder="Enter your last name" v-model="shipperData.lastName" class="input" />
          </div>
          <div class="inputDiv">
            <label for="phoneNumber" class="text-dark-blue">Phone Number:</label>
            <input type="text" placeholder="Enter your phone number" v-model="shipperData.phoneNumber" class="input" />
          </div>
          <div class="inputDiv">
            <label for="email" class="text-dark-blue">Email:</label>
            <input type="email" placeholder="Enter your email" v-model="shipperData.email" class="input" />
          </div>
          <div class="inputDiv">
            <label for="password" class="text-dark-blue">Password:</label>
            <input type="password" placeholder="Enter your password" v-model="shipperData.password" class="input" />
          </div>
          <div class="inputDiv">
            <label for="confirmPassword" class="text-dark-blue">Confirm Password:</label>
            <input type="password" placeholder="Confirm your password" v-model="shipperData.confirm_password" class="input" />
          </div>
          <div class="inputDiv">
            <button type="submit" class="btn rounded-full bg-light-blue px-6 py-1 text-white text-xl">
              Sign Up
            </button>
          </div>
        </form>
        <!-- <div v-if="shipperData">
          <h1 class="text-center mt-4">You have submitted the following data:</h1>
          <pre class="text-center">{{ shipperData }}</pre>
        </div> -->
      </div>

  </div>

</div>

      


    
</template>
  
  

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const shipperData = ref({
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  password: '',
  confirm_password:'',
});

const router = useRouter();


// Function to handle shipper signup

const transporterData = ref({
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  password: '',
  confirm_password: '',
});

const signupTransporter = async () => {
    console.log(transporterData.value);
  try {
    const response = await axios.post('http://localhost:3000/api/v1/transporter/signup', transporterData.value);

    // Clear the form fields after submission
    transporterData.value = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      password: '',
      confirm_password: '',
    };

    console.log('transporter signed up successfully')
    router.push({name: 'login'});


    return response;
  } catch (error) {
    console.error('Error sending data:', error);
    return "signup not successful";
  }
};

const showShipper = ref(true);

</script>

<style scoped>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

.inputDiv {
  @apply border-solid;
}

.input {
  @apply px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-light-blue;
}

h2 {
    font-family: 'Comfortaa', cursive;
  }

.toggle {

}

</style>