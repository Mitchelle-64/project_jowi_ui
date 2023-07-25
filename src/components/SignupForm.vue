<template>
    <div class="signup">
        <form class="form flex flex-col gap-4" @submit.prevent="signupShipper">
            <div class="inputDiv">
                <label for="firstName"> first name: </label>
                <input type="text" placeholder="enter first name" v-model="formData.firstName"/>
            </div>
            <div class="inputDiv">
                <label for="lastName"> last name: </label>
                <input type="text" placeholder="enter your last name" v-model="formData.lastName" />
            </div>
            <div class="inputDiv">
                <label for="phoneNumber"> Phone number: </label>
                <input type="number" placeholder="enter your phone number" v-model="formData.phoneNumber" />
            </div>
            <div class="inputDiv">
                <label for="email"> email: </label>
                <input type="email" placeholder="enter your email" v-model="formData.email" />
            </div>
            <div class="inputDiv">
                <label for="password"> Password: </label>
                <input type="password" placeholder="enter your password" v-model="formData.password"/>
            </div>
            <div class="inputDiv">
                <label for="confirm_password"> confirm password: </label>
                <input type="password" placeholder="confirm password" v-model="formData.confirm_password"/>
            </div>
            <div class="inputDiv">
                <button type="submit"> Sign up </button>
            </div>
            
        </form>
        <div v-if="formData">
            <h1> you have submitted the following data </h1>
            <pre> {{ formData }}</pre>
        </div>
    </div>
    
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const formData = ref({
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  password: '',
  confirm_password:'',
});

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

.form {
    @apply box-border w-1/4 border-solid border-2 border-dark-blue rounded-lg p-6 justify-center content-center

}
.input {
     
}


</style>