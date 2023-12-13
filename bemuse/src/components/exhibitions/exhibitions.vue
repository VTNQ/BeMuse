

<template>
    <div class="main-container" style="scroll-behavior: auto;">
      <div
      class="max-w-[100%] m-auto px-[30px] py-0 w-[100%] flex justify-between bg-black"
    >
      <div class="flex">
        <div class="py-[11px] px-0 relative" style="font-weigth: bold">
          <span
            class="text-white"
            style="
              font-weight: 500;
              font-family: 'Roboto Mono';
              font-size: 14px;
            "
            >Open daily 10:00–5:00,
          </span>
        </div>
        <div class="py-[11px] px-0 relative" style="font-weigth: bold">
          <span
            class="text-white"
            style="
              font-weight: 500;
              font-family: 'Roboto Mono';
              font-size: 14px;
            "
            >Thursdays until 8:00</span
          >
        </div>
      </div>
      <div class="flex">
        <div
          class="py-[11px] px-0 relative mr-[35px]"
          style="font-weigth: bold"
        >
          <a
            href=""
            class="text-white hover:opacity-[0.7]"
            style="
              font-weight: 500;
              font-family: 'Roboto Mono';
              font-size: 14px;
            "
            >Buy Tickets</a
          >
        </div>
        <div class="py-[11px] px-0 relative" style="font-weigth: bold">
          <a
            href=""
            class="text-white hover:opacity-[0.7]"
            style="
              font-weight: 500;
              font-family: 'Roboto Mono';
              font-size: 14px;
            "
            >Become a Member</a
          >
        </div>
      </div>
    </div>
    <secondary-navbar/>
    <div class="w-full h-screen relative">
      
        <img src="/src/assets/images/ex1.jpg" alt="" class="absolute w-full h-[700px] object-cover">
        <h1 class="text-white absolute top-[300px] text-[2.5rem] font-bold left-[45%]">Exhibitions</h1>
      
    </div>
    <div class="bg-white relative w-full min-h-[65vh] px-[10%] mt-10">
      <div class="grid grid-cols-2 gap-6">
        <div class="box w-full bg-white h-full grid items-center grid-cols-2 grid-flow-row">
            <div>
                <h1 class="title" >Museum</h1>
                <div  class=" scheduled">
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Mon 10am - 5pm</p>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Tue 10am - 5pm</p>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Wed-Thu 10am - 5pm</p>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Fri 10am - 5pm</p>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Sat-Sun 10am - 5pm</p>                  
                </div>
            </div>
            <div>
                <h1 class="title">Bar Room</h1>
                <div>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Mon 10am - 7pm</p>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Tue 10am - 9pm</p>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Wed-Thu 10am - 7pm</p>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Fri 10am - 9pm</p>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Sat-Sun 10am - 7pm</p>                  
                </div>
            </div>
            <div>
                <h1 class="title">Box Office</h1>
                <div>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Mon 10am - 5pm</p>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Tue 10am - 5pm</p>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Wed-Thu 10am - 5pm</p>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Fri 10am - 9pm</p>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Sat-Sun 10am - 5pm</p>                  
                </div>
            </div>
            <div>
                <h1 class="title">Gallery</h1>
                <div>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Mon 10am - 8pm</p>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Tue 10am - 9pm</p>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Wed-Thu 10am -8pm</p>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Fri 10am - 9pm</p>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Sat-Sun 10am - 8pm</p>                  
                </div>
            </div>
        </div>
        <div class="">
          <img class="w-[600px] h-auto" src="/src/views/img/exhibi_pic.jpg" alt="">
        </div>

      </div>
    </div>
    <div class="bg-pink-600 grid grid-cols-1 w-full relative gap-0">
      
      <div class="relative" v-for="slide in slides" :key="index">
  <img class="w-full h-[600px] block  object-cover" :src="slide.img" alt="">
  <div class=" w-full absolute top-[70%] px-12 flex items-center justify-between">
    <div>
      <h1 class="text-white font-normal text-[1rem] " style="font-family: 'Roboto Mono';letter-spacing:.32px">{{ slide.titleDate }}</h1>
    <h2 class="text-white font-semibold text-[3rem] w-[80%] " style="font-family: 'Hedvig Letters Serif';letter-spacing:.32px">{{ slide.title }}</h2>
    </div>
  
    <button class="hover:bg-opacity-50 transition duration-300 ease-in-out bg-black hover:bg-black text-white font-normal py-2 px-4 mr-2 text-[1.1rem] bg-transparent border-white border-[1px] w-[220px] h-[60px]"  style="font-family: 'Roboto Mono';letter-spacing:.32px">{{ slide.btn }}</button>

  </div>
</div>         
      
      
      
    </div>
    </div>
</template>

<style scoped>
.main-container{
  scroll-behavior: auto;
  height: 100vh;
}
</style>
<script >
import secondary_navbar from '/src/components/secondary_navbar.vue';

export default{

  data() {
  return {
    slides: [
      {
        img: '/src/views/img/exhibi5.jpg',
        titleDate: "Oct 25 - Nov 11",
        title: "Van Gogh Retrospective",
        btn: "BUY TICKETS"
      },
      {
        img: '/src/views/img/exhibi2.jpg',
        titleDate: "Oct 25 - Nov 11",
        title: "Paul Klee Later Works",
        btn: "BUY TICKETS"
      },
      {
        img: '/src/views/img/exhibi3.jpg',
        titleDate: "Oct 25 - Nov 11",
        title: "Fathers of impressionism",
        btn: "BUY TICKETS"
      },
      {
        img: '/src/views/img/exhibi4.jpg',
        titleDate: "Oct 25 - Nov 11",
        title: "Jenny Saville Experience",
        btn: "BUY TICKETS"
      },
      {
        img: '/src/views/img/exhibi1.jpg',
        titleDate: "Oct 25 - Nov 11",
        title: "Paul Klee Later Works",
        btn: "BUY TICKETS"
      },
    ],
    slideIndex: 0
  }
},

    components:{ 
        "secondary-navbar":secondary_navbar,
    },
}
</script>