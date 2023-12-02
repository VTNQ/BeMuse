<script>
import MainChild1 from "./MainChildrent/MainChild1.vue";
import MainChild2 from "./MainChildrent/MainChild2.vue";
import MainChild3 from "./MainChildrent/MainChild3.vue";

export default {
  components: {
    MainChild1,
    MainChild2,
    MainChild3,
  },
};
</script>

<template>
  <div class="main-container bg-pink-400">
    <div class="h-full">
      <MainChild1 />
    </div>
    <div class="relative bg-slate-800 z-30">
      <div
        class="absolute flex justify-center items-center min-h-screen h-full w-full bg-slate-800 z-30"
      >
        <h1 class="text-white text-center">hello</h1>
        <MainChild2 />
      </div>
    </div>
    <div class="relative top-full bg-slate-300 z-30">
      <div
        class="absolute flex justify-center items-center min-h-screen w-full bg-green-400 z-30"
      >
        <h1 class="text-white text-center">hello</h1>
        <MainChild3 />
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
