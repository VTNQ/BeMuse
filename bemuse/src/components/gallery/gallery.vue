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
    <child/>
    <div class="w-full h-screen relative">
      <img
        class="main-img object-cover h-[97.5%] w-full"
        src="/src/views/img/collection1.jpg"
        alt=""
      />
      <div
        class="overlay h-[97.5%] absolute inset-0 bg-black opacity-50 z-[2]"
      ></div>
      <h1
        class="collection text-white z-10 font-bold text-[3rem] absolute top-[42%] left-[45%]"
        style="font-family: 'Hedvig Letters Serif'; letter-spacing: 0.36px"
      >
        Gallery
      </h1>
    </div>

    <div class="w-full  grid grid-cols-4 gap-4 px-4">
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
      <div class="devide w-full h-full grid grid-cols-1 gap-3">
        <div class="child relative">
          <img
            class="w-full h-[173px] object-cover"
            src="/src/views/img/gallery11.jpg"
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
              Enjoy time
            </a>
          </h2>
        </div>
      </div>
        </div>
        <div class="child relative">
          <img
            class="w-full h-[163px] object-cover"
            src="/src/views/img/gallery12.jpg"
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
              Relax Day
            </a>
          </h2>
        </div>
      </div>
        </div>
      </div>
      <div class="devide_double col-span-2 relative">
        <img
          class="w-full h-[350px] object-cover"
          src="/src/views/img/gallery13.jpg"
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
              Reviewing artist
            </a>
          </h2>
        </div>
      </div>
      </div>
      <div class="child relative">
        <img
          class="w-full h-[350px] object-cover"
          src="/src/views/img/gallery14.jpg"
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
              Minilasium
            </a>
          </h2>
        </div>
      </div>
      </div>
      <div class="devide w-full h-full grid grid-cols-1 gap-3">
        <div class="relative">
          <img
            class="w-full h-[173px] object-cover"
            src="/src/views/img/gallery15.jpg"
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
              Son of earth
            </a>
          </h2>
        </div>
      </div>
        </div>
        <div class="child relative">
          <img
            class="w-full h-[163px] object-cover"
            src="/src/views/img/gallery17.jpg"
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
             Can't imagine
            </a>
          </h2>
        </div>
      </div>
        </div>
      </div>
      <div class="child relative">
        <img
          class="w-full h-[350px] object-cover"
          src="/src/views/img/gallery16.jpg"
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
              Farmer uncle
            </a>
          </h2>
        </div>
      </div>
      </div>

      <div class="child relative">
        <img
          class="w-full h-[350px] object-cover"
          src="/src/views/img/gallery18.jpg"
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
             Nurban
            </a>
          </h2>
        </div>
      </div>
      </div>

      <div class="child relative">
        <img
          class="w-full h-[350px] object-cover"
          src="/src/views/img/gallery1.jpg"
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
              Old day
            </a>
          </h2>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.main-container {
  scroll-behavior: auto;
  height: 100vh;
}
.img:hover .bg-black {
  opacity: 1;
}
.main-img{
  height: 97.5%;
  width: 100%;
}
@media (max-width:762px){
  .collection{
    top: 40%;
    left: 35%;
  }
  .child img{
   height: 200px;
  }
  .grid{
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .main-img{
  height: 97.5%;
  width: 100%;
}
.devide{
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.devide_double{
  grid-template-columns: repeat(1, minmax(0, 1fr));
}
.devide_double img{
  height: 200px;
}
}
@media (max-width:567px){
  .collection{
    top: 40%;
    left: 30%;
    font-size: 2.5rem;
  }
}


@media (max-width:475px){
  .collection{
    top: 40%;
    left: 35%;
  }
  .child img{
   height: 200px;
  }
  .grid{
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .main-img{
  height: 97.5%;
  width: 100%;
}
.devide{
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.devide_double{
  grid-template-columns: repeat(1, minmax(0, 1fr));
}
.devide_double img{
  height: 200px;
}
}
@media (max-width:567px){
  .collection{
    top: 40%;
    left: 30%;
    font-size: 2.5rem;
  }
}
</style>
<script>
import { ref, onMounted, computed } from "vue";
import child from "/src/components/secondary_navbar.vue";

export default {
  components: {
    child,
  },
  
};
</script>