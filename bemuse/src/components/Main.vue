<script>
import MainChild1 from "./MainChildrent/MainChild1.vue";
import MainChild2 from "./MainChildrent/MainChild2.vue";
import MainChild4 from "./MainChildrent/MainChild4.vue";
import MainChild5 from "./MainChildrent/MainChild5.vue";
import MainChild3 from "@/components/MainChildrent/MainChild3.vue";
import MainChild8 from "./MainChildrent/MainChild8.vue"

  

export default {
  components: {
    MainChild1,
    MainChild2,
    MainChild3,
    MainChild4,
    MainChild5,
    MainChild8,
  },
  data() {
    return {
      hasScrolledToElement3: false,
      hasScrolledToElement4: false,
    };
  },
  methods: {
    handleScroll() {
      // For MainChild3
      const element3 = this.$refs.fadeElement3;
      if (element3 && !this.hasScrolledToElement3) {
        const position3 = element3.getBoundingClientRect();
        if (position3.top < window.innerHeight && position3.bottom >= 0) {
          this.hasScrolledToElement3 = true;
        }
      }
      // For MainChild4
      const element4 = this.$refs.fadeElement4;
      if (element4 && !this.hasScrolledToElement4) {
        const position4 = element4.getBoundingClientRect();
        if (position4.top < window.innerHeight && position4.bottom >= 0) {
          this.hasScrolledToElement4 = true;
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
    <div  class="relative  bg-white   z-30 h-[40%] px-25  nav">
      <div class="absolute flex justify-start items-center  w-full bg-white z-30">
  
        <MainChild2/>
      </div>
    </div>


    <div ref="fadeElement3" :class="{ 'fade-in-up': hasScrolledToElement3 }" class="h-[527px] px-7 relative max-w-full bg-white">
    <MainChild3 />
  </div>

  <div ref="fadeElement4" :class="{ 'fade-in-up': hasScrolledToElement4 }" class="min-h-[573px] max-h-[100%] relative max-w-full bg-white">
    <MainChild4 />
  </div>
    <div class="h-2/3 relative max-w-full justify-center z-30 bg-amber-400">
      <div class="absolute w-full h-full mt-6">
        <MainChild5/>
      </div>
    </div>


    <div class="">
      <MainChild6 />
    </div>


    <div class="">
      <MainChild7 />
    </div>


    <div class="w-full relative bg-purple-700 ">
      <MainChild8  />
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


