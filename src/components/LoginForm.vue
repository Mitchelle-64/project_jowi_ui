<!-- <template>
    <div class="login-container">
        <form class="form flex flex-col gap-4" @submit.prevent="loginShipper">
            
            <div class="inputDiv">
                <label for="email"> email: </label>
                <input type="email" placeholder="enter your email" v-model="formData.email" />
            </div>
            <div class="inputDiv">
                <label for="password"> Password: </label>
                <input type="password" placeholder="enter your password" v-model="formData.password"/>
            </div>
            
            <div class="inputDiv">
                <button type="submit"> Login </button>
            </div>
            
        </form>
        <div v-if="formData">
            <h1> you have submitted the following data </h1>
            <pre> {{ formData }}</pre>
        </div>
    </div>
    
</template> -->

<template>
    <div class="flex items-center justify-center h-screen bg-dark-blue">
      <div class="w-96 p-6 rounded-lg bg-white shadow-lg">
        <h2 class="text-3xl text-center font-semibold text-dark-blue mb-6">Login</h2>
        <form class="form flex flex-col gap-4" @submit.prevent="loginUser">
          <div class="inputDiv">
            <label for="email" class="text-dark-blue">Email:</label>
            <input type="email" placeholder="Enter your email" v-model="userData.email" class="input" />
          </div>
          <div class="inputDiv">
            <label for="password" class="text-dark-blue">Password:</label>
            <input type="password" placeholder="Enter your password" v-model="userData.password" class="input" />
          </div>
          <div class="inputDiv">
            <button type="submit" class="btn rounded-full bg-light-blue px-6 py-1 text-white text-xl">
                Login
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
// import store from '@/store';
import { useRouter } from 'vue-router';
import jwt_decode from 'jwt-decode';
const router = useRouter();

const userData = ref({
  email:'',
  password: '',
});

// Function to handle shipper signup
const loginUser = async () => {
    console.log(userData.value);
  try {
    const response = await axios.post('http://localhost:3000/api/v1/login', userData.value);

    console.log(response.data.token);
    const authToken = response.data.token;
    localStorage.setItem('authToken', authToken)

    // Decode the JWT token to get the payload (which contains the user's role)
    const decodedToken = jwt_decode(authToken);

    // Access the user's role from the decoded token
    const userRole = decodedToken.role;

    if (userRole === 'admin') {
      //redirect to shipper dashboard
      router.push({name: 'admin-dashboard'});
    } else if (userRole === 'transporter') {
      router.push({name: 'transporter-dashboard'});
    } else if (userRole === 'driver'){
      router.push({name: 'driver-dashboard'});
    } else {
      router.push({name: 'shipper-dashboard'});
    }

    // router.push({name: 'shipper-dashboard'});

    



    console.log('user logged in successfully')

  } catch (error) {
    console.error('Error sending data:', error);
    return "Login not successful";
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