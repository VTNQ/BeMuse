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
    <div class="bg-white mt-[100px] text-center">
        <h1 class="text-black" style="font-family:'Roboto Mono';font-weight: 400;font-style: normal;font-size: 1rem" >Coming Soon</h1>
        <h2 class="text-black mt-2" style="font-family:'Hedvig Letters Serif';font-weight: 400;font-style: normal;font-size: 2.8rem" >Featured Events</h2>
      </div>
      <div class="h-100vh px-4 mt-5">
        <div class="grid grid-cols-3 grid-flow-row gap-5">
        <div class=" w-full  col-span-2 row-span-2">
            <div class="relative">
            <img class="w-full h-full object-cover" src="/src/views/img/event1.jpg" alt="">
            <div class="absolute top-[75%] flex w-full justify-between px-12">
                <div class="">
                    <h3 class="text-white" style="font-family:'Roboto Mono';font-weight: 400;font-style: normal;font-size: 1rem">Jun 16 - Jul 03</h3>
                    <h4 class="text-white w-[400px]" style="font-family:'Hedvig Letters Serif';font-weight: 400;font-style: normal;font-size: 2rem">Fragments Of A Crucifixion</h4>
                </div>
                <button class="bg-transparent hover:bg-opacity-50 text-white font-normal py-2 px-4 rounded  text-[1.1rem]  border-white border-[0.5px] w-[220px] h-[50px]"  style="font-family: 'Roboto Mono';letter-spacing:.32px">BUY TICKETS</button>

            </div>
        </div>
    </div>
        <div class="bg-black w-full h-[300px]"><div class="relative h-full">
            <img class="w-full h-full object-cover" src="/src/views/img/event2.jpg" alt="">
            <div class="absolute top-[60%] flex w-full justify-between items-center px-5">
                <div class="">
                    <h3 class="text-black" style="font-family:'Roboto Mono';font-weight: 400;font-style: normal;font-size: 1rem">Jun 16 - Jul 03</h3>
                    <h4 class="text-black w-[200px]" style="font-family:'Hedvig Letters Serif';font-weight: 500;font-style: normal;font-size: 1.5rem">Assaf Evron</h4>
                </div>
                <button class="bg-transparent hover:bg-opacity-50 text-black font-normal py-1 px-2 rounded  text-[1.1rem]  border-black border-[0.5px] w-[180px] h-[50px]"  style="font-family: 'Roboto Mono';letter-spacing:.32px">BUY TICKETS</button>

            </div>
        </div></div>
        <div class="bg-black w-full h-[300px]"><div class="relative h-full">
            <img class="w-full h-full object-cover" src="/src/views/img/event3.jpg" alt="">
            <div class="absolute top-[60%] flex w-full justify-between items-center px-5">
                <div class="">
                    <h3 class="text-black" style="font-family:'Roboto Mono';font-weight: 400;font-style: normal;font-size: 1rem">Jun 16 - Jul 03</h3>
                    <h4 class="text-black w-[200px]" style="font-family:'Hedvig Letters Serif';font-weight: 500;font-style: normal;font-size: 1.5rem">Kim Brandt</h4>
                </div>
                <button class="bg-transparent hover:bg-opacity-50 text-black font-normal py-1 px-2 rounded  text-[1.1rem]  border-black border-[0.5px] w-[180px] h-[50px]"  style="font-family: 'Roboto Mono';letter-spacing:.32px">BUY TICKETS</button>

            </div>
        </div></div>
      </div>
      <div class="bg-white  w-full mt-14 px-[8%] ">
        <div class="bg-white w-full  flex">
            <h5 :class="{ 'font-bold': filter === 'all' }" @click="setFilter('all')" class="text-black cursor-pointer" style="font-family:'Roboto Mono';font-weight: 400;font-style: normal;font-size: 1rem" >All Event</h5>
            <h5 :class="{ 'font-bold': filter === 'today' }" @click="setFilter('today')" class="text-black pl-16 cursor-pointer" style="font-family:'Roboto Mono';font-weight: 400;font-style: normal;font-size: 1rem" >Today</h5>
            <h5 :class="{ 'font-bold': filter === 'week' }" @click="setFilter('week')" class="text-black pl-16 cursor-pointer" style="font-family:'Roboto Mono';font-weight: 400;font-style: normal;font-size: 1rem" >This Week</h5>
            <h5 :class="{ 'font-bold': filter === 'month' }" @click="setFilter('month')" class="text-black pl-16 cursor-pointer" style="font-family:'Roboto Mono';font-weight: 400;font-style: normal;font-size: 1rem" >This Month</h5>
        </div>
        <div class="mt-10 bg-white  grid grid-cols-3 gap-5">
            <div  class="mb-[35%]" v-for="event in filteredArtworks"
            :key="event.id">
                <img class="w-full h-[90%] object-cover" :src="event.img" alt="">
                <div>
                    <h6 class="text-black" style="font-family:'Roboto Mono';font-weight: 400;font-style: normal;font-size: 1rem">{{ event.scheduled }}</h6>
                    <h6 class="text-black mt-2" style="font-family:'Hedvig Letters Serif';font-weight: 400;font-style: normal;font-size: 1.8rem">{{ event.title }}</h6>
                    <h6 class="text-black" style="font-family:'Roboto Mono';font-weight: 300;font-style: normal;font-size: 0.9rem">{{ event.content }}</h6>
                </div>
            </div>
            

        </div>
        
        <div class="w-full h-[30%] mt-16 relative ">
          <img class=" w-full h-[280px]" src="/src/views/img/event-banner.jpg" alt="">
          <div class="absolute flex justify-between w-[100%] top-[40%] items-center px-[15%]">
            <p class="text-white mt-2" style="font-family:'Hedvig Letters Serif';font-weight: 400;font-style: normal;font-size: 2.5rem">Subcribe To Our Newsletter Now</p>
            <button  class=" bg-transparent hover:bg-opacity-50 text-white font-normal py-1 px-2 text-[1.1rem]  border-white border-[0.5px] w-[180px] h-[70px]"  style="font-family: 'Roboto Mono';letter-spacing:.32px">BUY TICKETS</button>

        </div>
      </div>
      </div>

      
      </div>
      <div class="bg-white px-[10%] min-h-[70%] w-full grid grid-cols-2">
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
              <a href="" type="submit" class="bg-black flex text-white w-full h-[60px] mt-2 items-center justify-center" style="font-family:'Roboto Mono';font-weight: 500;font-style: normal;font-size: 1rem">SUBMIT MESSAGE</a>
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
<script>
import { ref, onMounted, computed } from "vue";
import child from "/src/components/secondary_navbar.vue";

export default {
  data() {
    return {
      filter: "all",
      events: [
        {
          id:1,
          img: '/src/views/img/event4.jpg',
          scheduled: 'Oct 29',
          title: 'Great Artist',
          content: "Jin us for this year’s annual Woman’s Board lecture and hear from acclaimed artist Ed Ruscha, as he speaks…",
          category: "today"
        },
        {
          id:1,
          img: '/src/views/img/event5.jpg',
          scheduled: 'Oct 29',
          title: 'New on Art View',
          content: "The museum continually acquires new works by gift or by purchase that expand the stories that we tell in our galleries.",
          category: "today"
        },
        {
          id:1,
          img: '/src/views/img/event6.jpg',
          scheduled: 'Oct 29',
          title: 'Great Artist',
          content: "The GFAA program honors innovation and excellence in exhibition design, historical context, educational value…",
          category: "today"
        },
        {
          id:1,
          img: '/src/views/img/event7.jpg',
          scheduled: 'Nov 15',
          title: 'Modern Wing Exhibition',
          content: "Among the department’s highlights are iconic works by members of the School of Paris, such as Balthus,…",
          category: "week"
        },
        {
          id:1,
          img: '/src/views/img/event8.jpg',
          scheduled: 'Nov 15',
          title: 'The Artis Studio Inside ',
          content: "The enormous Studio is without doubt Courbet’s most mysterious composition. However, he provides several clues…",
          category: "week"
        },
        {
          id:1,
          img: '/src/views/img/event9.jpg',
          scheduled: 'Nov 15',
          title: 'Artist Talk: Modern Era',
          content: "Obviously street culture has been mixing these influences together in a never-ending lust for experimentation…",
          category: "week"
        },


        {
          id:1,
          img: '/src/views/img/event10.jpg',
          scheduled: 'Dec 11',
          title: 'A History Of Women',
          content: "Throughout the centuries, women have been involved in making art, whether as creators and innovators…",
          category: "month"
        },
        {
          id:1,
          img: '/src/views/img/event11.jpg',
          scheduled: 'Dec 11',
          title: 'Make Art Valueable',
          content: "For artists in the period before the modern era, the process of selling art was…",
          category: "month"
        },
        {
          id:1,
          img: '/src/views/img/event12.jpg',
          scheduled: 'Dec 11',
          title: 'The Evolution of Art',
          content: "Art is created and enjoyed by many people for many reasons. However, one of the things that art does…",
          category: "month"
        },
      ],
      
    };
    
  },
  computed: {
    filteredArtworks() {
      if (this.filter === "all") {
        return this.events;
      }
      return this.events.filter(event => event.category === this.filter);
    },
  },
  methods: {
    setFilter(category) {
      this.filter = category;
    },
  },
  

  

  components: {
    child,
  },
  
};
</script>
<style scoped>
.main-container{
    scroll-behavior: auto;
    height: 100vh;
}
</style>