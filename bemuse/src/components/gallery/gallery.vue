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
    <div class="w-full -z-10 h-screen relative">
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