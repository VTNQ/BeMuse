<script>
import MainChild1 from "./MainChildrent/MainChild1.vue";
import MainChild2 from "./MainChildrent/MainChild2.vue";
import MainChild4 from "./MainChildrent/MainChild4.vue";
import MainChild5 from "./MainChildrent/MainChild5.vue";
import MainChild7 from "./MainChildrent/MainChild7.vue";
import MainChild6 from "./MainChildrent/MainChild6.vue";
import MainChild3 from "@/components/MainChildrent/MainChild3.vue";

import MainChild8 from "./MainChildrent/MainChild8.vue";
import MainChild9 from "./MainChildrent/MainChild9.vue";

export default {
  components: {
    MainChild1,
    MainChild2,
    MainChild3,
    MainChild4,
    MainChild5,
    MainChild6,
    MainChild7,
    MainChild8,
    MainChild9,
  },
  data() {
    return {
      hasScrolledToElement2:false,
      hasScrolledToElement3: false,
      hasScrolledToElement4: false,
      hasScrolledToElement8:false,
      hasScrolledToElement6:false,
    }
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
      // For MainChild6
      const element6 = this.$refs.fadeElement6;
      if (element6 && !this.hasScrolledToElement6) {
        const position6 = element6.getBoundingClientRect();
        if (position6.top < window.innerHeight && position6.bottom >= 0) {
          this.hasScrolledToElement6 = true;
        }
      }
      // For MainChild8
      const element8 = this.$refs.fadeElement8;
      if (element8 && !this.hasScrolledToElement8) {
        const position8 = element8.getBoundingClientRect();
        if (position8.top < window.innerHeight && position8.bottom >= 0) {
          this.hasScrolledToElement8 = true;
        }
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll(); // Trigger on initial load in case element is already in view
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<template>
  <div class="main-container bg-white" @scroll="handleScroll">
    <div class="">
      <MainChild1/>
    </div>
    <div ref="fadeElement2"
      :class="{ 'fade-in-up': hasScrolledToElement2 }"
      class="relative bg-white z-30 min-h-screen px-25 nav"
      style="transition: all ease 3s"
    >
      <div class="justify-start items-center w-full bg-white z-30">
        
        <MainChild2 />
      </div>
    </div>

    <div ref="fadeElement3" :class="{ 'fade-in-up': hasScrolledToElement3 }"
         class="h-[400px] px-7 relative max-w-full bg-white">
        
      <MainChild3/>
    </div>

    <div ref="fadeElement4" :class="{ 'fade-in-up': hasScrolledToElement4 }"
         class="min-h-[573px] max-h-[100%] relative max-w-full bg-white">
      <MainChild4/>
    </div>
    <div class="main6 min-h-[10%] relative max-w-full justify-center z-30 bg-white">
      <div class="relative w-full h-full mt-6">
        <MainChild5/>
      </div>
    </div>


    <div ref="fadeElement6" :class="{ 'fade-in-up': hasScrolledToElement6 }" class="min-h-screen bg-white">
      <MainChild6 />
    </div>


    <div class="relative bg-white z-30 min-h-[61vh] pl-[2rem]">
      <MainChild7 />
    </div>


    <div ref="fadeElement8" :class="{ 'fade-in-up': hasScrolledToElement8 }" class="w-full h-auto relative bg-white  ">
      <MainChild8  />
    </div>

    <div class="main9 h-full relative bg-white mt-24 px-7">
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
  height: 100%;
}


@media (max-width: 655px) {
  .main9 {
   margin-top: -2px;
    min-height: 109%;
  }
}
@media (min-width: 656px) and (max-width:768px) {
  .main9 {
   margin-top: -2px;
    min-height: 109%;
  }
}
@media  (max-width:1024px) {
  .main9 {
   margin-top: -2px;
    min-height: 109%;
  }

}
@media (max-width: 1025px){
  .main6{
    min-height: 50%;
  }
}
@media (min-width: 0px) {
  .main6{
  min-height: 0;
  }

}
</style>


