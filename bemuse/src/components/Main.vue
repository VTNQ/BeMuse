<script>
import MainChild1 from './MainChildrent/MainChild1.vue'
import MainChild2 from './MainChildrent/MainChild2.vue';
import MainChild5 from "./MainChildrent/MainChild5.vue";
import MainChild3 from "@/components/MainChildrent/MainChild3.vue";


export default {
  components: {
    MainChild3,
    MainChild5,
    MainChild1,
    MainChild2,
  },
}
</script>

<template>
  <div class="main-container bg-white ">
    <div class="h-full">
      <MainChild1/>
    </div>
    <div class="relative  bg-white   z-30 h-3/4 px-30">
      <div class="absolute flex justify-start items-center  w-full bg-white z-30">
  
        <MainChild2/>
      </div>
    </div>
    <div class="h-3/4 bg-amber-950">
      <MainChild3/>
    </div>
    <div class="h-full">
      <MainChild4/>
    </div>
    <div class="h-2/3 relative max-w-full justify-center z-30 bg-amber-400">
      <div class="absolute w-full h-full mt-6">
        <MainChild5/>
      </div>
    </div>
    <div class="h-full">
      <MainChild6/>
    </div>
    <div class="h-full">
      <MainChild7/>
    </div>
    <div class="h-full">
      <MainChild8/>
    </div>
    <div class="h-full">
      <MainChild9/>
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
  