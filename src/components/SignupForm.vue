<template>


  <!-- background starts here -->
  <div class="flex items-center justify-center h-screen bg-dark-blue"> 

    


  <!-- user signup form here -->
    <div>
      <div class="w-150 p-6 rounded-lg bg-white shadow-lg">
        <h2 class="text-3xl text-center font-semibold text-dark-blue mb-6">Sign Up</h2>
        <form class="form flex flex-col gap-4" @submit.prevent="signupUser">
          <div class="inputDiv">
            <label for="role" class="text-dark-blue">Who are you:</label>
            <select id="role" v-model="userData.role">
              <option v-for="role in roleOptions" :value="role" :key="role">{{ role }}</option>
            </select>
          </div>
          <div class="inputDiv">
            <label for="firstName" class="text-dark-blue">First Name:</label>
            <input type="text" placeholder="Enter your first name" v-model="userData.firstName" class="input" />
          </div>
          <div class="inputDiv">
            <label for="lastName" class="text-dark-blue">Last Name:</label>
            <input type="text" placeholder="Enter your last name" v-model="userData.lastName" class="input" />
          </div>
          <div class="inputDiv">
            <label for="phoneNumber" class="text-dark-blue">Phone Number:</label>
            <input type="text" placeholder="Enter your phone number" v-model="userData.phoneNumber" class="input" />
          </div>
          <div class="inputDiv">
            <label for="email" class="text-dark-blue">Email:</label>
            <input type="email" placeholder="Enter your email" v-model="userData.email" class="input" />
          </div>
          <div class="inputDiv">
            <label for="password" class="text-dark-blue">Password:</label>
            <input type="password" placeholder="Enter your password" v-model="userData.password" class="input" />
          </div>
          <div class="inputDiv">
            <label for="confirmPassword" class="text-dark-blue">Confirm Password:</label>
            <input type="password" placeholder="Confirm your password" v-model="userData.confirm_password" class="input" />
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

const router = useRouter();

const roleOptions = ['shipper', 'transporter', 'driver']; // An array of available role options


// Function to handle shipper signup

const userData = ref({
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  password: '',
  confirm_password: '',
  role: '',
});

const signupUser = async () => {
    console.log(userData.value);
  try {
    const response = await axios.post('http://localhost:3000/api/v1/signup', userData.value);

    // Clear the form fields after submission
    userData.value = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      password: '',
      confirm_password: '',
      role: '',
    };

    console.log('user signed up successfully')
    router.push({name: 'login'});


    return response;
  } catch (error) {
    console.error('Error sending data:', error);
    return "signup not successful";
  }
};


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


</style>