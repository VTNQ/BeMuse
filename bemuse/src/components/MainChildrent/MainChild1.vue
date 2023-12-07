<template>
    <div class="slider-container h-[100vh] relative max-w-full overflow-hidden">
      <div class="slider w-full flex transition-transform duration-500 ease-out h-full" :style="{ transform: `translateX(-${slideIndex * 100}%)` }">
        <div class="slide w-full flex-shrink-0 items-center justify-center relative text-center" v-for="(slide, index) in slides" :key="index">
            <img :src="slide.img" class="h-full w-full object-cover z-[1] " alt="Museum Image">
            <div class="overlay absolute inset-0 bg-black opacity-50 z-[2]"></div>

            <div class=" w-full content absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-white">
          
          <h1 class="text-white font-normal text-[19px] mb-6 " style="font-family: 'Roboto Mono';letter-spacing:.36px" >{{ slide.title1 }}</h1>
                <h2 class="text-white font-semibold text-[40px] " style="font-family: 'Roboto Mono';letter-spacing:.32px" >{{ slide.title2 }}</h2>
          <p class="text-white font-light text-[18px] mb-6 px-[120px] focus:outline-none" style="font-family: 'Roboto Mono';letter-spacing:.32px" >{{ slide.description }}</p>
          <div class="m-1">
            
            <button class="hover:bg-opacity-50 transition duration-300 ease-in-out bg-black hover:bg-black text-white font-normal py-2 px-4 rounded mr-2 text-[1.1rem] bg-transparent border-white border-[1px] w-[220px] h-[50px]"  style="font-family: 'Roboto Mono';letter-spacing:.32px">{{ slide.buttonText1 }}</button>
            <button class="bg-white hover:bg-opacity-50 text-black font-normal py-2 px-4 rounded  text-[1.1rem]  border-white border-[0.5px] w-[220px] h-[50px]"  style="font-family: 'Roboto Mono';letter-spacing:.32px">{{ slide.buttonText2 }}</button>
          </div>
          
        </div>
        </div>
      </div>
      <button @click="prevSlide" class="font-bold absolute top-[45%] left-0 transform -translate-y-1/2  text-white py-44 px-12 rounded-full focus:outline-none z-30">
        <img src="/src/views/img/chevrons-left-regular-240.png" class="inline-block w-8" alt="">
        Prev</button>
    <button @click="nextSlide" class="font-bold absolute top-[45%] right-0 transform -translate-y-1/2  text-white py-100 px-8 rounded-full focus:outline-none z-30">
        Next
        <img src="/src/views/img/chevrons-right-regular-240.png" class="inline-block w-8" alt="">
    </button>
       
    </div>
  </template>
  <style scoped>
    .slider {
  transition: transform 1000ms ease-out;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black; /* Màu của lớp phủ */
  opacity: 0.3; /* Điều chỉnh độ trong suốt của lớp phủ */
  z-index: 2; /* Đảm bảo lớp phủ nằm trên hình ảnh */
}@media (max-width: 781px){
  h2{
    font-size: 2rem;
  }
  p{
    font-size: 1rem;
  }
}
</style>
  
  

  <script>
export default {
    data() {
    return {
      slides: [
        {
          img: "/src/views/img/pic-museum3.jpg",
          title1: "Enjoy art space",
          title2: "Eclectic Collection",
          description: "Today the MooM has a leading collection of modern and contemporary art comprising works by international artists which reflects the energy, commitment and diversity of emerging artists.",
          buttonText1: "BUY TICKETS",
          buttonText2: "VISIT US",
        },
        {
          img: "/src/views/img/pic-museum2.jpg",
          title1: "Feel the art mentality",
          title2: "Diversity of Thoughts ",
          description: "Welcome to our range of Original Paintings, Limited and Open Edition Framed Prints and Edge Sculpture. Our gallery presents an extensive selection of wall art, images and frames.",
          buttonText1: "BUY TICKETS",
          buttonText2: "VISIT US",
        },
        {
          img: "/src/views/img/pic-museum-5.jpg",
          title1: "Find aesthetic pleasure",
          title2: "Bestselling Artists",
          description: "Our aim is to serve the needs of all art lovers; from those looking for a one-off painting to serious collectors looking for investments. We believe that in investment terms the artist.",
          buttonText1: "BUY TICKETS",
          buttonText2: "VISIT US",
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
    setInterval(this.nextSlide, 100000);
  }
};
</script>


