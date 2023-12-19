<template>
    <div class="main-container">
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
    <div class="w-full -z-10 h-screen relative">
      
      <img src="/src/views/img/aboutUs1.jpg" alt="" class="absolute w-full h-[700px] object-cover">
      <h6 style="font-family: 'Roboto Mono'; letter-spacing: 0.36px" class="textTitle text-black absolute top-[300px] text-[2.5rem] font-bold left-[45%]">About Us</h6>
    
  </div>
  <div class="bg-white w-full h-[200px] mt-[10%] px-[10%]">
        <h1 class="text-black font-normal text-[1rem]"
          style="font-family: 'Roboto Mono'; letter-spacing: 0.36px">Learn a new thing</h1>
        <h2 class="text-black font-light mt-3 text-[2.5rem]"
          style="font-family: 'Hedvig Letters Serif'; letter-spacing: 0.36px">About Us</h2>
        <h2 class="text-black font-light mt-4 text-[0.9rem]"
          style="font-family: 'Roboto Mono'; letter-spacing: 0.36px">Each piece in the MooM’s collections holds a unique message and style to be considered by the viewer, offering a, <br> historical reference to the diversity of art within the present time. This is truly a growing tribute to the <br> talent and creativity we find in. </h2>
        

  </div>
  <div class="relative px-[10%]">
    <iframe ref="video" class="frame w-[100%] h-[74vh]" src="https://www.youtube.com/embed/WBwNw4WjV7g?si=fJCl8y0FZYQnd1su" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" allowfullscreen></iframe>
  </div>


  <div class="flex justify-between items-center w-full h-[100px] my-[7%] px-[10%] bg-white">
    <div class="flex flex-col justify-center">
        <h1 data-target="120" class="counter text-[3.5rem]  text-black" style="font-family: 'Hedvig Letters Serif'; letter-spacing: 0.36px">0</h1>
        <p class="text-[1rem] text-black font-light" style="font-family: 'Roboto Mono'; letter-spacing: 0.36px">Employees</p>
    </div>
    <div>
        <h1 data-target="600" class="counter text-[3.5rem]  text-black" style="font-family: 'Hedvig Letters Serif'; letter-spacing: 0.36px">0</h1>
        <p class="text-[1rem] text-black font-light" style="font-family: 'Roboto Mono'; letter-spacing: 0.36px">Paintings</p>
    </div>
    <div>
        <h1 data-target="520" class="counter text-[3.5rem]  text-black" style="font-family: 'Hedvig Letters Serif'; letter-spacing: 0.36px">0</h1>
        <p class="text-[1rem] text-black font-light" style="font-family: 'Roboto Mono'; letter-spacing: 0.36px">Exhibitions</p>
    </div>
    <div>
        <h1 data-target="120" class="counter text-[3.5rem]  text-black" style="font-family: 'Hedvig Letters Serif'; letter-spacing: 0.36px">0</h1>
        <p class="text-[1rem] text-black font-light" style="font-family: 'Roboto Mono'; letter-spacing: 0.36px">Artists</p>
    </div>
    <div>
        <h1 data-target="106" class="counter text-[3.5rem]  text-black" style="font-family: 'Hedvig Letters Serif'; letter-spacing: 0.36px">0</h1>
        <p class="text-[1rem] text-black font-light" style="font-family: 'Roboto Mono'; letter-spacing: 0.36px">Partners</p>
    </div>
    

  </div>
  <div  style="overflow-x: hidden;" class="relative slider-container bg-white w-full h-[500px] px-[30px] justify-between flex flex-row">
    
    <div class="slider relative bg-white w-[250px] h-[450px]" v-for="slide in slides" :key="index" :style="sliderStyle">
    <img class="w-full h-[250px] object-cover" :src="slide.img" alt="">
    <div class="w-full absolute top-[60%]">
        <h1 class="text-[1rem] text-black font-light" style="font-family: 'Roboto Mono'; letter-spacing: 0.36px">{{ slide.titleDate }}</h1>
        <h1 class="text-[1.5rem] mt-2 text-black font-light" style="font-family: 'Hedvig Letters Serif'; letter-spacing: 0.36px">{{ slide.title }}</h1>
        <h1 class="text-[0.9rem] mt-2 text-black font-light" style="font-family: 'Roboto Mono'; letter-spacing: 0.36px">{{ slide.content }}</h1>
    </div>
    </div>
    
    <button class="absolute w-[50px] top-[20%] " @click="moveSlide('prev')">
    <img src="/src/views/img/left-arrow-alt-regular-180.png" alt="">
    
    </button>
    <button class="absolute right-[50px]  w-[50px] top-[20%] " @click="moveSlide('next')"><img src="/src/views/img/right-arrow-alt-regular-180.png" alt=""></button>

  </div>
  <div class="w-full h-[30%] relative px-24 mt-12  ">
          <img class=" w-full h-[280px]" src="/src/views/img/event-banner.jpg" alt="">
          <div class="absolute flex justify-between w-[100%] top-[50%] items-center px-[15%]">
            <p class="text-white mt-2" style="font-family:'Hedvig Letters Serif';font-weight: 400;font-style: normal;font-size: 2.5rem">Subcribe To Our Newsletter Now</p>
            <button  class=" bg-transparent hover:bg-opacity-50 text-white font-normal py-1 px-2 text-[1.1rem]  border-white border-[0.5px] w-[180px] h-[70px]"  style="font-family: 'Roboto Mono';letter-spacing:.32px">BUY TICKETS</button>

        </div>
</div>
      <div class="w-screen  grid grid-cols-1 relative mt-[10%] h-[250px] bg-white">
        <!-- <h1 class="absolute right-0 text-[1rem] text-black font-light" style="font-family: 'Roboto Mono'; letter-spacing: 0.36px">We have the</h1>
        <h1 class="mt-10 absolute  right-0 text-[1rem] text-black font-light" style="font-family: 'Roboto Mono'; letter-spacing: 0.36px">Professional Team of Curators</h1>
        <p class="absolute right-0 text-right mt-[80px] pl-[35%] text-[1rem] text-black font-light" style="font-family: 'Roboto Mono'; letter-spacing: 0.36px">The role that curators play, like the art they care for, is constantly evolving. As culture shifts, moving with changes in the social and political landscape or technological innovations so does the art being produced</p> -->
        <h1 class="absolute right-[10%] text-[1rem] text-black font-light" style="font-family: 'Roboto Mono'; letter-spacing: 0.36px">We have the</h1>
        <h1 class="mt-8 absolute  right-[10%] text-[2.5rem] text-black font-light" style="font-family: 'Hedvig Letters Serif'; letter-spacing: 0.36px">Professional Team of Curators</h1>
        <p class="absolute right-[10%] text-right mt-[100px] pl-[35%] text-[1rem] text-black font-light" style="font-family: 'Roboto Mono'; letter-spacing: 0.36px">The role that curators play, like the art they care for, is constantly evolving. As culture shifts, moving with changes in the social and political landscape or technological innovations so does the art being produced</p>
      </div>
      <div class="bg-white w-full h-[500px] relative px-[10%] grid grid-cols-3 gap-10">
            <div class="w-full relative " v-for="human in humans" :key="index">
                <img class="w-full h-[380px] object-cover" :src="human.img" alt="">
                <div class="mt-4 absolute w-full flex flex-col text-center justify-center">
                    <h1 class="text-[0.9rem] text-black font-light" style="font-family: 'Roboto Mono'; letter-spacing: 0.36px">{{ human.title }}</h1>
                    <p class="text-[1.8rem] text-black font-normal" style="font-family: 'Hedvig Letters Serif'; letter-spacing: 0.36px">{{ human.title2 }}</p>
                </div>
            </div>
            
      </div>

      <div class="w-full mt-7  grid grid-cols-4 gap-4 px-4">
      <div class="child relative">
        <img
          class="w-full h-[350px] object-cover"
          src="/src/views/img/gallery1.jpg"
          alt=""
        />
        <div class="bg-black w-full h-full  absolute top-0 left-0 opacity-0 transition-opacity duration-500 hover:opacity-100 repson-black">
        <div class="flex flex-col items-center justify-center h-full">

          <div class="opacity-1 mb-2">
            <a class="text-white" style="font-family:'Roboto Mono';font-weight: 300;font-style: normal;font-size: inherit" href="">
              Monica Frulento
            </a>
          </div>
          
          <h2 class="text-center text-[32px]">
            <a href="https://mooseoom.foxthemes.me/portfolio/strange-room/" style="font-family: inherit;font-weight: 500;">
              Strange room
            </a>
          </h2>
        </div>
      </div>
        
        
      </div>
      <div class="child relative">
        <img
          class="w-full h-[350px] object-cover"
          src="/src/views/img/gallery3.jpg"
          alt=""
        />
        <div class="bg-black w-full h-[350px]  absolute top-0 left-0 opacity-0 transition-opacity duration-500 hover:opacity-100 repson-black">
        <div class="flex flex-col items-center justify-center h-full">

          <div class="opacity-1 mb-2">
            <a class="text-white" style="font-family:'Roboto Mono';font-weight: 300;font-style: normal;font-size: inherit" href="">
              Monica Frulento
            </a>
          </div>
          
          <h2 class="text-center text-[32px]">
            <a href="https://mooseoom.foxthemes.me/portfolio/strange-room/" style="font-family: inherit;font-weight: 500;">
              Spring Day
            </a>
          </h2>
        </div>
      </div>
      </div>
      <div class="child relative">
        <img
          class="w-full h-[350px] object-cover"
          src="/src/views/img/gallery4.jpg"
          alt=""
        />
        <div class="bg-black w-full h-[350px]  absolute top-0 left-0 opacity-0 transition-opacity duration-500 hover:opacity-100 repson-black">
        <div class="flex flex-col items-center justify-center h-full">

          <div class="opacity-1 mb-2">
            <a class="text-white" style="font-family:'Roboto Mono';font-weight: 300;font-style: normal;font-size: inherit" href="">
              Monica Frulento
            </a>
          </div>
          
          <h2 class="text-center text-[32px]">
            <a href="https://mooseoom.foxthemes.me/portfolio/strange-room/" style="font-family: inherit;font-weight: 500;">
              Tsunamy Wave
            </a>
          </h2>
        </div>
      </div>
      </div>
      <div class="devide w-full h-full grid grid-cols-1 gap-3">
        <div class="child relative">
          <img
            class="w-full h-[173px] object-cover"
            src="/src/views/img/gallery5.jpg"
            alt=""
          />
          <div class="bg-black w-full h-[173px]  absolute top-0 left-0 opacity-0 transition-opacity duration-500 hover:opacity-100 repson-black">
        <div class="flex flex-col items-center justify-center h-full">

          <div class="opacity-1 mb-2">
            <a class="text-white" style="font-family:'Roboto Mono';font-weight: 300;font-style: normal;font-size: inherit" href="">
              Monica Frulento
            </a>
          </div>
          
          <h2 class="text-center text-[32px]">
            <a href="https://mooseoom.foxthemes.me/portfolio/strange-room/" style="font-family: inherit;font-weight: 500;">
              Night at lake
            </a>
          </h2>
        </div>
      </div>
        </div>
        <div class="child relative">
          <img
            class="w-full h-[163px] object-cover"
            src="/src/views/img/gallery7.jpg"
            alt=""
          />
          <div class="bg-black w-full h-[163px]  absolute top-0 left-0 opacity-0 transition-opacity duration-500 hover:opacity-100 repson-black">
        <div class="flex flex-col items-center justify-center h-full">

          <div class="opacity-1 mb-2">
            <a class="text-white" style="font-family:'Roboto Mono';font-weight: 300;font-style: normal;font-size: inherit" href="">
              Monica Frulento
            </a>
          </div>
          
          <h2 class="text-center text-[32px]">
            <a href="https://mooseoom.foxthemes.me/portfolio/strange-room/" style="font-family: inherit;font-weight: 500;">
              Tea break
            </a>
          </h2>
        </div>
      </div>
        </div>
      </div>
      <div class="devide w-full h-full grid grid-cols-1 gap-3">
        <div class="child relative">
          <img
            class="w-full h-[173px] object-cover"
            src="/src/views/img/gallery8.jpg"
            alt=""
          />
          <div class="bg-black w-full h-[173px]  absolute top-0 left-0 opacity-0 transition-opacity duration-500 hover:opacity-100 repson-black">
        <div class="flex flex-col items-center justify-center h-full">

          <div class="opacity-1 mb-2">
            <a class="text-white" style="font-family:'Roboto Mono';font-weight: 300;font-style: normal;font-size: inherit" href="">
              Monica Frulento
            </a>
          </div>
          
          <h2 class="text-center text-[32px]">
            <a href="https://mooseoom.foxthemes.me/portfolio/strange-room/" style="font-family: inherit;font-weight: 500;">
              Alone boy
            </a>
          </h2>
        </div>
      </div>
        </div>
        <div class="child relative">
          <img
            class="w-full h-[163px] object-cover"
            src="/src/views/img/gallery9.jpg"
            alt=""
          />
          <div class="bg-black w-full h-[163px]  absolute top-0 left-0 opacity-0 transition-opacity duration-500 hover:opacity-100 repson-black">
        <div class="flex flex-col items-center justify-center h-full">

          <div class="opacity-1 mb-2">
            <a class="text-white" style="font-family:'Roboto Mono';font-weight: 300;font-style: normal;font-size: inherit" href="">
              Monica Frulento
            </a>
          </div>
          
          <h2 class="text-center text-[32px]">
            <a href="https://mooseoom.foxthemes.me/portfolio/strange-room/" style="font-family: inherit;font-weight: 500;">
              Bach Dang War
            </a>
          </h2>
        </div>
      </div>
        </div>
      </div>
      <div class="devide_double col-span-2 relative">
        <img
          class="w-full h-[350px] object-cover"
          src="/src/views/img/gallery10.jpg"
          alt=""
        />
        <div class="bg-black w-full h-[350px]  absolute top-0 left-0 opacity-0 transition-opacity duration-500 hover:opacity-100 repson-black">
        <div class="flex flex-col items-center justify-center h-full">

          <div class="opacity-1 mb-2">
            <a class="text-white" style="font-family:'Roboto Mono';font-weight: 300;font-style: normal;font-size: inherit" href="">
              Monica Frulento
            </a>
          </div>
          
          <h2 class="text-center text-[32px]">
            <a href="https://mooseoom.foxthemes.me/portfolio/strange-room/" style="font-family: inherit;font-weight: 500;">
              Masterpiece exhibition
            </a>
          </h2>
        </div>
      </div>
      </div>
      <div class="child relative">
        <img
          class="w-full h-[350px] object-cover"
          src="/src/views/img/gallery6.jpg"
          alt=""
        />
        <div class="bg-black w-full h-[350px]  absolute top-0 left-0 opacity-0 transition-opacity duration-500 hover:opacity-100 repson-black">
        <div class="flex flex-col items-center justify-center h-full">

          <div class="opacity-1 mb-2">
            <a class="text-white" style="font-family:'Roboto Mono';font-weight: 300;font-style: normal;font-size: inherit" href="">
              Monica Frulento
            </a>
          </div>
          
          <h2 class="text-center text-[32px]">
            <a href="https://mooseoom.foxthemes.me/portfolio/strange-room/" style="font-family: inherit;font-weight: 500;">
              Tea pot
            </a>
          </h2>
        </div>
      </div>
      </div>
      
      
    </div>
    <div class="grid grid-rows-2 h-[120vh] w-full mt-5" style="background-color: black;
    padding-top: 130px;
    padding-left: 130px;">
<div class="grid grid-cols-3 gap-4 grid-repon">
    <div class="col-span-1">
        <img class="w-[40%] img-auto" src="https://mooseoom.foxthemes.me/wp-content/uploads/2019/09/menu-logo.png" alt="">
        <div class="mt-6">
            <p class="text-white font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">3 Wakehurst Street</p>
            <p class="text-white font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">New York,NY 10002</p>
            <p class="text-white font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">+86-123-456-789</p>
            <p class="text-white font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">xxxxx@gmail.com</p>
            <p> <br> </p>
            <p class="text-white font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Museum: 123-456-789</p>
            <p class="text-white font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Box Office: 225-879-5884</p>
            <p class="text-white font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Store: 333-000-5695</p>
            <p class="text-white font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Giftshop: 128-785-566</p>
        </div>
    </div>
    <div class="col-span-1 grid grid-cols-2 gap-4 grid-text">
      
      <div>
        <div class="title ">Museum</div>
        <p class="text-white font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Mon 10am - 5pm</p>
        <p class="text-white font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Tue 10am - 5pm</p>
        <p class="text-white font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Wed-Thu 10am - 5pm</p>
        <p class="text-white font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Fri 10am - 5pm</p>
        <p class="text-white font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Sat-Sun 10am - 5pm</p>
      </div>
      <div>
        <div class="title">Bar Room</div>
        <p class="text-white font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Mon 10am - 7pm</p>
                    <p class="text-white font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Tue 10am - 9pm</p>
                    <p class="text-white font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Wed-Thu 10am - 7pm</p>
                    <p class="text-white font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Fri 10am - 9pm</p>
                    <p class="text-white font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Sat-Sun 10am - 7pm</p>                  
      </div>
      <div>
        <div class="title">Box Office</div>
        <p class="text-white font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Mon 10am - 5pm</p>
                    <p class="text-white font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Tue 10am - 5pm</p>
                    <p class="text-white font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Wed-Thu 10am - 5pm</p>
                    <p class="text-white font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Fri 10am - 9pm</p>
                    <p class="text-white font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Sat-Sun 10am - 5pm</p>                         
      </div>
      <div>
        <div class="title">Support </div>
        <p class="text-white font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Mon 10am - 8pm</p>
                    <p class="text-white font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Tue 10am - 9pm</p>
                    <p class="text-white font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Wed-Thu 10am -8pm</p>
                    <p class="text-white font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Fri 10am - 9pm</p>
                    <p class="text-white font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Sat-Sun 10am - 8pm</p>                    
      </div>
      
    </div>
    <div class="col-span-1 grid grid-cols-1 gap-4 ">
      <div class="flex justify-center grid-foo">
        <h1 class="font-semibold text-[2rem] text-white" style="font-family: 'Hedvig Letters Serif';letter-spacing:.36px">instagram</h1>
      </div>
    </div>
    
</div>
<div class="flex justify-between px-[20%] mt-[15%]  last-footer">
        <h1 class="text-white font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Support Privacy</h1>
        <h1 class="text-white font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Cookie Policy</h1>
        <h1 class="text-white font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Manage Cookies</h1>
      </div>

</div>
      
    </div>
</template>
<style scoped>
.main-container{
    scroll-behavior: auto;
    height: 100vh;
}
.slider {
  display: flex;
  transition: transform 0.3s ease-out;
}

.slider .slide {
  min-width: 200px; /* Same as the slideWidth data property */
  margin-right: 10px; /* Same as the slideMargin data property */
  height: 300px;
  background: black;
}

</style>

<script>
import secondary_navbar from '/src/components/secondary_navbar.vue';

export default {

    data() {
    return {
      currentSlide: 0,
      slideWidth: 250, // The width of each slide, adjusted to 250 to match your HTML
      slideMargin: 50, // The margin on the right of each slide
      // Add your counters here if needed
      slides: [
        {
            img: '/src/views/img/event3.jpg',
            titleDate: "22 Oct",
            title:"The Hero In Art",
            content: "As archetypes of human virtue and vice, the gods and heroes of ancient…",
        },
        {
            img: '/src/views/img/event5.jpg',
            titleDate: "22 Oct",
            title:"The Way Art",
            content: "You know what the phrase “Art works” means to us – the works of art…",
        },
        {
            img: '/src/views/img/event7.jpg',
            titleDate: "22 Oct",
            title:"Art Light Works",
            content: "Art is generally understood as any activity or product done by…",
        },
        {
            img: '/src/views/img/event9.jpg',
            titleDate: "22 Oct",
            title:"How To Keep Art",
            content: "It’s time to master the prop-and-lean. After all, it’s a stylish way…",
        },
        {
            img: '/src/views/img/event11.jpg',
            titleDate: "22 Oct",
            title:"The taste Of Art",
            content: "The eighteenth century witnessed the historical change from aesthetic…",
        },
      ],
      slideIndex : 0,
      humans: [
      {
            img: '/src/views/img/ed.jpg',
            title: "Lead Curator",
            title2: "Ed Sheeran"
        },
        {
            img: '/src/views/img/justin1.png',
            title: "Assistant Curator",
            title2: "Justin Bieber"
        },
        
        {
            img: '/src/views/img/taylor.png',
            title: "Artist Resident",
            title2: "Taylor Swift"
        },
      ],
      hummanIndex: 0,

    };
  },
  computed: {
    sliderStyle() {
      const offset = -(this.currentSlide * (this.slideWidth + this.slideMargin));
      return {
        transform: `translateX(${offset}px)`,
      };
    },
  },

  
  components: {
    "secondary-navbar": secondary_navbar,
  },
  mounted() {
    this.createObserver();
  },
  
  methods: {  
    moveSlide(direction) {
      const numberOfSlides = 0; // Assuming you have 5 slides in total
      if (direction === 'prev') {
        if (this.currentSlide > 0) {
          this.currentSlide -= 1;
        } else {
          this.currentSlide = numberOfSlides - 1; // Go to the last slide
        }
      } else if (direction === 'next') {
        if (this.currentSlide < numberOfSlides - 1) {
          this.currentSlide += 1;
        } else {
          this.currentSlide = 0; // Loop back to the first slide
        }
      }
    },
    createObserver() {
      const counters = document.querySelectorAll('.counter');
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counter = entry.target;
            const updateCount = () => {
              const target = +counter.getAttribute('data-target');
              const count = +counter.innerText;
              const inc = target / 200; // Update speed here

              if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
              } else {
                counter.innerText = target;
                observer.unobserve(counter); // Stop observing when done
              }
            };
            updateCount();
          }
        });
      }, { threshold: 0.5 }); // Trigger when 50% visible

      counters.forEach(counter => {
        observer.observe(counter);
      });
    }
  }
}
</script>
