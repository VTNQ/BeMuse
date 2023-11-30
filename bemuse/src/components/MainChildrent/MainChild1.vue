<template>
    <div class="slider-container relative">
      <div class="slider flex transition-transform duration-500" :style="{ transform: `translateX(-${slideIndex * 100}%)` }">
        <div class="slide w-full flex-shrink-0" v-for="(slide, index) in slides" :key="index">
            <img :src="slide.img" class="h-full w-full object-cover" alt="Museum Image">
          <h2>{{ slide.title }}</h2>
          <p>{{ slide.description }}</p>
          <button>{{ slide.buttonText }}</button>
        </div>
      </div>
      <button @click="prevSlide" class="absolute left-0">Prev</button>
      <button @click="nextSlide" class="absolute right-0">Next</button>
    </div>
  </template>
  
  

  <script>
export default {
    data() {
    return {
      slides: [
        {
          img: "/src/views/img/Pic-museum1.png",
          title: "Slide 1 Title",
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
    setInterval(this.nextSlide, 5000);
  }
};
</script>
<style scoped>
.slider-container {
  /* Định nghĩa styles cho container */
}
.slider {
  /* Định nghĩa styles cho slider */
}
.slide {
  /* Định nghĩa styles cho từng slide */
}
</style>

