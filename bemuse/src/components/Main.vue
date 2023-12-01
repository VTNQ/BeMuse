<script>
import MainChild1 from './MainChildrent/MainChild1.vue'
import MainChild2 from './MainChildrent/MainChild2.vue';


export default {
  components: {
    MainChild1,
    MainChild2,
},
}
</script>

<template>
    <div class="main-container bg-pink-400">
        
      <div>
        <MainChild1/>      
      </div>
      <div class="relative  bg-slate-800  z-30">        
            
        <div class="absolute flex justify-center items-center min-h-screen w-full bg-slate-800 z-30">
        <h1 class="text-white text-center">hello</h1>
        <MainChild2/>
        </div>
    
        </div>
      
    </div>
  </template>
  
  <style>
  .main-container {
    overflow-y: scroll;
  }
  .relative {
    position: relative;
  }
  </style>
  