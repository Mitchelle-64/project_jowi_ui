<template>
    <div class="flex items-center justify-center h-screen bg-dark-blue">
      <div class="w-150 p-6 rounded-lg bg-white shadow-lg">
        <h2 class="text-3xl text-center font-semibold text-dark-blue mb-6">Sign Up</h2>
        <form class="form flex flex-col gap-4" @submit.prevent="signupShipper">
          <div class="inputDiv">
            <label for="firstName" class="text-dark-blue">First Name:</label>
            <input type="text" placeholder="Enter your first name" v-model="formData.firstName" class="input" />
          </div>
          <div class="inputDiv">
            <label for="lastName" class="text-dark-blue">Last Name:</label>
            <input type="text" placeholder="Enter your last name" v-model="formData.lastName" class="input" />
          </div>
          <div class="inputDiv">
            <label for="phoneNumber" class="text-dark-blue">Phone Number:</label>
            <input type="text" placeholder="Enter your phone number" v-model="formData.phoneNumber" class="input" />
          </div>
          <div class="inputDiv">
            <label for="email" class="text-dark-blue">Email:</label>
            <input type="email" placeholder="Enter your email" v-model="formData.email" class="input" />
          </div>
          <div class="inputDiv">
            <label for="password" class="text-dark-blue">Password:</label>
            <input type="password" placeholder="Enter your password" v-model="formData.password" class="input" />
          </div>
          <div class="inputDiv">
            <label for="confirmPassword" class="text-dark-blue">Confirm Password:</label>
            <input type="password" placeholder="Confirm your password" v-model="formData.confirm_password" class="input" />
          </div>
          <div class="inputDiv">
            <button type="submit" class="btn rounded-full bg-light-blue px-6 py-1 text-white text-xl">
              Sign Up
            </button>
          </div>
        </form>
        <!-- <div v-if="formData">
          <h1 class="text-center mt-4">You have submitted the following data:</h1>
          <pre class="text-center">{{ formData }}</pre>
        </div> -->
      </div>
    </div>
</template>
  
  

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const formData = ref({
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  password: '',
  confirm_password:'',
});

const router = useRouter();


// Function to handle shipper signup
const signupShipper = async () => {
    console.log(formData.value);
  try {
    const response = await axios.post('http://localhost:3000/api/v1/shipper/signup', formData.value);

    // Clear the form fields after submission
    formData.value = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      password: '',
      confirm_password: '',
    };

    console.log('shipper signed up successfully')
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