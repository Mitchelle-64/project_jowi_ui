<template>
  <div class="flex-grow bg-dark-blue p-4">
      <!-- Your homepage content goes here -->

    
    <div class="hero-1 flex p-[3%] gap-4 ">
      <div class="grid grid-cols-2">
        <span class="col-span-2">
          <h2 class="headline self-center inline z-10"> Anything. <span class="inline-flex"> <h2 class="text-black"> Anywhere. </h2> </span>  Worlwide. </h2> 
        </span>
        <span>
          <button class="rounded-full bg-light-blue px-7 py-3"> 
            More information 
            <i class="fa-solid fa-truck-arrow-right pl-3"></i>
          </button>
        </span>
        
        <p>lore ipsum</p>
        <div class="hero-2 col-span-2"> 
          <!-- <img 
          src="../assets/truck-2.jpg" 
          alt=""
          class="truck-2"> -->
        </div>

      </div>
      
     
     
    </div>

      <div class="absolute top-0 right-0 h-half-screen w-half-screen">
        
    </div>

      <!-- Your homepage content goes here, any wording or elements you place will go on top of the image -->
      <div class="z-10">
        <!-- Your content here -->
      </div>

      
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
.flex-grow {
  flex-grow: 1;
}

.headline {
  @apply text-white;
  font-family: 'Comfortaa', cursive;
  font-size: 120px;
}

.truck {
  top: 50px;
  right: 300px;
}

.hero-1{
  background-image: url(../assets/truck.png);
  background-position-x: 95%;
  background-repeat: no-repeat;
  background-size: 500px 500px;
  z-index: 0;
}

.truck-2{
  
}

.hero-2 {
  margin-top: 120px;
  height: 450px;
  width: auto;
  background-image: url(../assets/truck-2.jpg);
  background-size: cover;
  background-position: center 90%;
  border-radius: 70px;

  
}
</style>
