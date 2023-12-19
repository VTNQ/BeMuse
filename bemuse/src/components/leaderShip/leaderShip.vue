<template>
    <div class="main-container">
        <div>
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
    
        </div>
        <secondary-navbar/>
        <div class="w-full -z-10 h-screen relative">
      
      <img src="/src/views/img/leaderShip2.avif" alt="" class="absolute w-full h-[700px] object-cover">
      <h6 style="font-family: 'Roboto Mono'; letter-spacing: 0.36px" class="textTitle text-white absolute top-[300px] text-[2.5rem] font-bold left-[45%]">Leader Ship</h6>
    
  </div>
  <div class="bg-white w-full mt-[8%]  relative px-[12%] grid grid-cols-4 gap-5">
            <div class="w-full h-[400px] relative " v-for="human in humans" :key="index">
                <img class="w-full h-[300px] object-cover" :src="human.img" alt="">
                <div class="mt-6 absolute w-full flex flex-col  justify-center">
                    <h1 class="text-[1rem] text-black font-bold" style="font-family: 'Hedvig Letters Serif'; letter-spacing: 0.36px">{{ human.titleName }}</h1>
                    <p class="text-[0.9rem] mt-2 text-black font-light" style="font-family: 'Roboto Mono'; letter-spacing: 0.36px">{{ human.titlePosition }}</p>
                </div>
            </div>
            
      </div>

      <div class="px-[12%] mt-[8%] bg-white w-full h-[350px] grid grid-cols-4 gap-5">
        <div v-for="people in peoples" :key="index">
            <h1 class="text-[1rem] text-black font-bold" style="font-family: 'Hedvig Letters Serif'; letter-spacing: 0.36px">{{ people.titlePosition }}</h1>
            <div class="mt-3 w-[80%] border-[0.02rem] border-black"></div>
            <h1 class="text-[1rem] mt-4 text-black font-light" style="font-family: 'Roboto Mono'; letter-spacing: 0.36px">{{ people.p1 }}</h1>
            <h1 class="mt-3 text-[1rem] text-black font-light" style="font-family: 'Roboto Mono'; letter-spacing: 0.36px">{{ people.p2 }}</h1>
            <h1 class="mt-3 text-[1rem] text-black font-light" style="font-family: 'Roboto Mono'; letter-spacing: 0.36px">{{ people.p3 }}</h1>
            <h1 class="mt-3 text-[1rem] text-black font-light" style="font-family: 'Roboto Mono'; letter-spacing: 0.36px">{{ people.p4 }}</h1>
            <h1 class="mt-3 text-[1rem] text-black font-light" style="font-family: 'Roboto Mono'; letter-spacing: 0.36px">{{ people.p5 }}</h1>
            <h1 class="mt-3 text-[1rem] text-black font-light" style="font-family: 'Roboto Mono'; letter-spacing: 0.36px"> {{ people.p6 }}</h1>
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
</style>
<script>
import secondary_navbar from '/src/components/secondary_navbar.vue';

export default {

    data(){
        return{
            humans: [
                {
                    img: '/src/views/img/leaderShip3.png',
                    titleName: "Leona Hardy",
                    titlePosition:"Joint CEO, Co-Founder",
                },
                {
                    img: '/src/views/img/leaderShip4.png',
                    titleName: "Etta Green",
                    titlePosition:"PR Manager",
                },
                
                {
                    img: '/src/views/img/leaderShip5.png',
                    titleName: "Ruby Maldonado",
                    titlePosition:"Head of Archivists",
                },
                {
                    img: '/src/views/img/leaderShip6.png',
                    titleName: "Frederick Cole",
                    titlePosition:"Joint CEO, Co-Founder",
                },
                {
                    img: '/src/views/img/leaderShip7.png',
                    titleName: "Hettie Padilla",
                    titlePosition:"Head of Curators",
                },
                {
                    img: '/src/views/img/leaderShip8.png',
                    titleName: "Vio Kras",
                    titlePosition:"Administrator",
                },
                {
                    img: '/src/views/img/leaderShip9.png',
                    titleName: "Theona Jude",
                    titlePosition:"Assistant",
                },
                {
                    img: '/src/views/img/leaderShip10.png',
                    titleName: "Anchel Martinez",
                    titlePosition:"Designer",
                },
            ],
            humanSlide : 0,
            peoples: [
                {
                    titlePosition: "Curators",
                    p1: "Patrick Graves",
                    p2: "Forrest Day",
                    p3: "Scott Blair",
                    p4: "Ruby Simpson",
                    p5: "Victoria Frank",
                    p6: "Jennie Pittman"
                },
                {
                    titlePosition: "Administrators",
                    p1: "Bernard Greene",
                    p2: "Christy Roy",
                    p3: "Michelle Blake",
                    p4: "Lydia Brady",
                    p5: "Delicia Owusu",
                    p6: "Deana Finnie"
                },
                {
                    titlePosition: "Archivists",
                    p1: "Perry Greenberg",
                    p2: "Winfred Meagher",
                    p3: "Bridget Lathrop",
                    p4: "Jessica Minter",
                    p5: "Jamal Garrigan",
                    p6: "Sina Haro"
                },
                {
                    titlePosition: "Assistants",
                    p1: "Macros Waldorf",
                    p2: "Darby Haymon",
                    p3: "Brittni Geronimo",
                    p4: "Jarvis Wallander",
                    p5: "Rosemarie Latimore",
                    p6: "Manuel Villeneuve"
                },
            ]
        }
    },

    components: {
    "secondary-navbar": secondary_navbar,
  },
}

</script>