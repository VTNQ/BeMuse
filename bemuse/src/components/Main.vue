<script>
import MainChild1 from './MainChildrent/MainChild1.vue'
import MainChild2 from './MainChildrent/MainChild2.vue';
import MainChild5 from "./MainChildrent/MainChild5.vue";


export default {
  components: {
    MainChild5,
    MainChild1,
    MainChild2,
  },
}
</script>

<template>
  <div class="main-container bg-pink-400">
    <div class="h-full">
      <MainChild1/>
    </div>
    <div class="relative  bg-slate-800  z-30 h-full">
      <div class="absolute flex justify-center items-center min-h-screen w-full bg-slate-800 z-30">
        <h1 class="text-white text-center">hello</h1>
        <MainChild2/>
      </div>
    </div>
    <div class="h-full relative max-w-full justify-center bg-amber-400 z-30">
      <div class="absolute w-full h-full bg-amber-400">
        <MainChild5/>
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
  