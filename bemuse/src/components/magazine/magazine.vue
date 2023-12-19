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
      
      <img src="/src/views/img/magazine1.avif" alt="" class="absolute w-full h-[700px] object-cover">
      <h6 style="font-family: 'Roboto Mono'; letter-spacing: 0.36px" class="textTitle text-white absolute top-[300px]  text-[3rem] font-bold left-[43%]">Magazines</h6>
    
  </div>
  <div class="bg-white w-full min-h-screen px-[10%] grid grid-cols-3 gap-8 mt-[6%]">
    <div class="bg-white w-full " v-for="art in arts" :key="index">
        <img :src="art.img" alt="">
        <h1 class="text-black mt-5" style="font-family:'Hedvig Letters Serif';font-weight: 300;font-style: normal;font-size: 1.8rem">{{ art.title1 }}</h1>
        <p class="text-black mt-2" style="font-family:'Roboto Mono';font-weight: 300;font-style: normal;font-size: 1rem">{{ art.title2 }}</p>

    </div>
    

  </div>
  <div class="w-full h-[30%] relative px-24 mt-[8%]  ">
          <img class=" w-full h-[280px] object-cover" src="/src/views/img/award_banner.jpg" alt="">
          <div class="absolute flex justify-between w-[100%] top-[50%] items-center px-[15%]">
            <p class="text-white mt-2" style="font-family:'Hedvig Letters Serif';font-weight: 400;font-style: normal;font-size: 2.5rem">Subcribe To Our Newsletter Now</p>
            <button  class=" bg-transparent hover:bg-opacity-50 text-white font-normal py-1 px-2 text-[1.1rem]  border-white border-[0.5px] w-[180px] h-[60px]"  style="font-family: 'Roboto Mono';letter-spacing:.32px">BUY TICKETS</button>

        </div>
</div>

<div class="bg-white mt-16 px-[10%] min-h-[70%] w-full grid grid-cols-2">
        <div class="mt-[20%]">
          <h1 class="text-black" style="font-family:'Roboto Mono';font-weight: 400;font-style: normal;font-size: 1rem">Contact Us</h1>
          <h1 class="text-black" style="font-family:'Hedvig Letters Serif';font-weight: 400;font-style: normal;font-size: 2.5rem">Got Some Questios For Us?</h1>
          <div class="grid grid-cols-2 mt-7">
            <div>
              <h1 class="text-black" style="font-family:'Hedvig Letters Serif';font-weight: 600;font-style: normal;font-size: 1.3rem">Museum</h1>
              <p class="text-black" style="font-family:'Roboto Mono';font-weight: 300;font-style: normal;font-size: 1rem">3 Wakehurst Street</p>
              <p class="text-black" style="font-family:'Roboto Mono';font-weight: 300;font-style: normal;font-size: 1rem">New York, NY 10002</p>
              <p class="text-black" style="font-family:'Roboto Mono';font-weight: 300;font-style: normal;font-size: 1rem">0123-456-789</p>
              <p class="text-black" style="font-family:'Roboto Mono';font-weight: 300;font-style: normal;font-size: 1rem">xxx@gmail.com</p>
            </div>
            <div>
              <h1 class="text-black" style="font-family:'Hedvig Letters Serif';font-weight: 600;font-style: normal;font-size: 1.3rem">Museum</h1>
              <p class="text-black" style="font-family:'Roboto Mono';font-weight: 300;font-style: normal;font-size: 1rem">3 Wakehurst Street</p>
              <p class="text-black" style="font-family:'Roboto Mono';font-weight: 300;font-style: normal;font-size: 1rem">New York, NY 10002</p>
              <p class="text-black" style="font-family:'Roboto Mono';font-weight: 300;font-style: normal;font-size: 1rem">0123-456-789</p>
              <p class="text-black" style="font-family:'Roboto Mono';font-weight: 300;font-style: normal;font-size: 1rem">xxx@gmail.com</p>
            </div>
            

          </div>
          <div class="flex items-center justify-start pt-[4vh] px-0  icon">
          <a
            href="https://facebook.com"
            class="whitespace-nowrap text-black mr-[20px] "
          >
            <i class="fa-brands fa-facebook-f icon-a"></i>
          </a>
          <a
            href="https://twitter.com/"
            class="whitespace-nowrap text-black mr-[20px]"
          >
            <i class="fa-brands fa-twitter icon-a"></i>
          </a>
          <a
            href="https://dribbble.com/"
            class="whitespace-nowrap text-black mr-[20px]"
          >
            <i class="fa-brands fa-dribbble icon-a"></i>
          </a>
          <a
            href="https://www.pinterest.com/"
            class="whitespace-nowrap text-black mr-[20px]"
          >
            <i class="fa-brands fa-pinterest-p icon-a"></i>
          </a>
        </div>
        </div>
        <div class="bg-green w-full  px-5 mt-16">
          <div class="bg-white h-[80%] w-full">
              <textarea style="font-family:'Roboto Mono';font-weight: 400;font-style: normal;font-size: 1rem" placeholder="Your message"   name="hello" class="w-full h-[60%] border-black border-[1px] text-black px-8 py-6"></textarea>
              <div class="grid grid-cols-2 gap-2">
                
                <input style="font-family:'Roboto Mono';font-weight: 400;font-style: normal;font-size: 1rem" placeholder="Your-name" type="text" class="w-full h-[60px]  border-black border-[1px] text-black px-8 py-6">
                <input style="font-family:'Roboto Mono';font-weight: 400;font-style: normal;font-size: 1rem" placeholder="Your-email" type="text" class="w-full h-[60px]  border-black border-[1px] text-black px-8 py-6">
              </div>
              <a href="" type="submit" class=" bg-black flex text-white w-full h-[60px] mt-2 items-center justify-center" style="font-family:'Roboto Mono';font-weight: 500;font-style: normal;font-size: 1rem">SUBMIT MESSAGE</a>
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
.textTitle{
    -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}
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
            arts: [
                {
                    img: '/src/views/img/magazine2.png',
                    title1: "Minizzmo",
                    title2: "The magazine for artists by artists from around the world. They tell you the thought processes behind their creative methods and reveal their painting techniques."
                },
                {
                    img: '/src/views/img/magazine3.png',
                    title1: "ARTZ",
                    title2: "A monthly magazine specially written for collectors, galleries and painters of traditional fine art. Articles emphasize mainstream art by today's favorite artists."
                },
                {
                    img: '/src/views/img/magazine4.png',
                    title1: "Artmonkey",
                    title2: "This magazine is the journal of record for the visual arts world. See what galleries are showing nationwide each month. Find new artists to collect in a specific art destination."
                },
                {
                    img: '/src/views/img/magazine5.png',
                    title1: "Beyond",
                    title2: "This is an independent art publications. Immediately attractive to the viewing public at large and have proved this with the interest generated by the social media. "
                },
                {
                    img: '/src/views/img/magazine6.png',
                    title1: "Artmazing",
                    title2: "This is an independent art publications. Immediately attractive to the viewing public at large and have proved this with the interest generated by the social media. "
                },
                {
                    img: '/src/views/img/magazine7.png',
                    title1: "FineART",
                    title2: "The magazine goes out to art buyers and galleries and the magazine will be free for everyone, even those who are not interested in art!"
                },
                {
                    img: '/src/views/img/magazine8.png',
                    title1: "Conversation",
                    title2: "Below are some of the finest art magazines from around the world. Subscribing to several art magazines will really help you learn about the latest art trends."
                },
                {
                    img: '/src/views/img/magazine9.png',
                    title1: "Lookin",
                    title2: "This is based printed art magazine, published six times a year.You also get a lot of pleasure and education from your magazine subscriptions."
                },
                {
                    img: '/src/views/img/magazine10.png',
                    title1: "Madelynn",
                    title2: "Published and available in both digital and print form, our magazines tell the story of art. We invite readers to explore our back issues."
                },
            ],
            artSlide : 0
        }
    },


    components: {
    "secondary-navbar": secondary_navbar,
}, 
}


</script>