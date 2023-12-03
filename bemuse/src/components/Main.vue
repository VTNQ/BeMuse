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
  data() {
    return {
      hasScrolledToElement: false,
    };
  },
  methods: {
    handleScroll() {
      const element = this.$refs.fadeElement;
      if (element && !this.hasScrolledToElement) {
        const position = element.getBoundingClientRect();
        // Check if element is within the viewport
        if (position.top < window.innerHeight && position.bottom >= 0) {
          this.hasScrolledToElement = true;
        }
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll(); // Trigger on initial load in case element is already in view
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<template>
  <div class="main-container bg-pink-400" @scroll="handleScroll">
    <div class="">
      <MainChild1 />
    </div>


    <div class="relative flex bg-red-950 z-30 h-full">
      <h1 class="text-white text-center">hello</h1>
        <MainChild2 />
    </div>


    <div ref="fadeElement" :class="{ 'fade-in-up': hasScrolledToElement }" class="h-[527px] px-7 relative max-w-full bg-white">
      <MainChild3 />
    </div>


    <div class="min-h-[573px] max-h-[100%]  relative max-w-full bg-white">
      <MainChild4 />
    </div>
    <div class="h-2/3 relative max-w-full justify-center z-30 bg-amber-400">
      <div class="absolute w-full h-full mt-6">
        <MainChild5/>
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

.fade-in-up {
  animation: fadeInUp 1.5s ease-in-out forwards;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px); /* Start from below the original position */
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Scoped styles */
.main-container {
  overflow-y: scroll;
}

.relative {
  position: relative;
}

</style>


