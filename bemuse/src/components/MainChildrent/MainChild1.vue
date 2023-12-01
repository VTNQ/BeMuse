<template>
    <div class="slider-container relative max-w[100%] overflow-hidden">
      <div class="slider w-[100%] flex transition-transform duration-500" :style="{ transform: `translateX(-${slideIndex * 100}%)` }">
        <div class="slide w-full flex-shrink-0 items-center justify-center relative text-center" v-for="(slide, index) in slides" :key="index">
            <img :src="slide.img" class="h-full w-full object-cover z-[1]" alt="Museum Image">
          <div class="content relative bg-transparent p-[2rem] items-center justify-center text-white" >
            <h2>{{ slide.title }}</h2>
          <p>{{ slide.description }}</p>
          <button>{{ slide.buttonText }}</button>
          </div>
        </div>
      </div>
      <button @click="prevSlide" class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-75 text-black py-2 px-4 rounded-full focus:outline-none z-30">Prev</button>
    <button @click="nextSlide" class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-75 text-black py-2 px-4 rounded-full focus:outline-none z-30">Next</button>
    </div>
  </template>
  
  

  <script>
export default {
    data() {
    return {
      slides: [
        {
          img: "/src/views/img/Pic-museum1.png",
          title: "Slide 1 Title cdddddddddddddddddddddddddd",
          description: "Slide 1 Description",
          buttonText: "Button 1"
        },
        {
          img: "/src/views/img/pic-museum2.jpg",
          title: "Slide 2 Title",
          description: "Slide 2 Description",
          buttonText: "Button 2"
        },
        {
          img: "/src/views/img/Pic-museum1.png",
          title: "Slide 3 Title",
          description: "Slide 3 Description",
          buttonText: "Button 3"
        }
        // Thêm nhiều slides ở đây nếu bạn muốn
      ],
      slideIndex: 0
    };
  },
  methods: {
    nextSlide() {
      this.slideIndex = (this.slideIndex + 1) % this.slides.length;
    },
    prevSlide() {
      this.slideIndex = (this.slideIndex - 1 + this.slides.length) % this.slides.length;
    }
  },
  mounted() {
    setInterval(this.nextSlide, 2000);
  }
};
</script>


