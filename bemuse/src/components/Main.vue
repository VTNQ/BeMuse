<script>
import MainChild1 from "./MainChildrent/MainChild1.vue";
import MainChild2 from "./MainChildrent/MainChild2.vue";
import MainChild4 from "./MainChildrent/MainChild4.vue";
import MainChild5 from "./MainChildrent/MainChild5.vue";
import MainChild3 from "@/components/MainChildrent/MainChild3.vue";

export default {
  components: {
    MainChild1,
    MainChild2,
    MainChild3,
    MainChild4,
    MainChild5,
  },
};
</script>

<template>
  <div class="main-container bg-pink-400">
    <div class="">
      <MainChild1 />
    </div>


    <div class="relative flex bg-red-950 z-30 h-full">
      <h1 class="text-white text-center">hello</h1>
        <MainChild2 />
    </div>


    <div class="h-[527px] px-7 relative max-w-full bg-white">
      <MainChild3 />
    </div>


    <div class="min-h-[573px]  relative max-w-full bg-white">
      <MainChild4 />
    </div>


    <div class="h-full relative max-w-full justify-center bg-amber-400 z-30">
      <div class="absolute w-full h-full ">
        <MainChild5 />
      </div>
    </div>


    <div class="h-full">
      <MainChild6 />
    </div>


    <div class="h-full">
      <MainChild7 />
    </div>


    <div class="h-full">
      <MainChild8 />
    </div>


    <div class="h-full">
      <MainChild9 />
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
