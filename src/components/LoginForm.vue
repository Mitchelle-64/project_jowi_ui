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
        <form class="form flex flex-col gap-4" @submit.prevent="loginShipper">
          <div class="inputDiv">
            <label for="email" class="text-dark-blue">Email:</label>
            <input type="email" placeholder="Enter your email" v-model="formData.email" class="input" />
          </div>
          <div class="inputDiv">
            <label for="password" class="text-dark-blue">Password:</label>
            <input type="password" placeholder="Enter your password" v-model="formData.password" class="input" />
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
import { useRouter } from 'vue-router';

const router = useRouter();

const formData = ref({
  email: '',
  password: '',
});

// Function to handle shipper signup
const loginShipper = async () => {
    console.log(formData.value);
  try {
    const response = await axios.post('http://localhost:3000/api/v1/shipper/login', formData.value);

    console.log(response.data.token);
    const authToken = response.data.token;
    localStorage.setItem('auth-token', authToken)
    router.push({name: 'shipper-dashboard'});

    console.log('shipper logged in successfully')

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