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
      
      <img src="/src/views/img/mission1.avif" alt="" class="absolute w-full h-[700px] object-cover">
      <h6 style="font-family: 'Roboto Mono'; letter-spacing: 0.36px" class="textTitle text-white absolute top-[300px]  text-[3rem] font-bold left-[35%]">Missions and History</h6>
    
  </div>
  <div class="text-center">
    <h1 style="
              font-weight: 500;
              font-family: 'Hedvig Letters Serif';
              font-size: 2.5rem;
            " class="text-black">Our Museum History</h1>
  </div>
        <div class="bg-white w-full  flex flex-col mt-8 items-center">
            <div class="relative mt-8 w-[75%]">
                <!-- Timeline background line -->
                
                <div class="timeline-line bg-gray-300 absolute h-[2px] top-1/2 left-0 right-0 transform -translate-y-1/2"></div>
                
                <!-- Bolder line up to the selected event -->
                <div :style="selectedLineStyle" class="selected-line bg-black absolute h-[2px] top-1/2 transform -translate-y-1/2"></div>
                
                <ul class="timeline flex justify-between relative">
                    <li v-for="event in events" :key="event.id" @click="selectEvent(event)"
                            :class="{'selected': event === selectedEvent}">
                           <span class="date">{{ event.date }}</span> <!-- Display the date -->
                     </li>
                </ul>
            </div>
            
            <div v-if="selectedEvent" class="event-content mt-14 h-[320px] w-[75%] bg-white">
                <transition :name="transitionName" mode="out-in" @after-enter="afterEnter">
                <div :key="selectedEvent.id">
                    <!-- <img src="" alt="">
                 <p class="text-black">{{ selectedEvent.content }}</p> -->
                 <div class="flex gap-14">
                    <img class="w-[420px] h-[320px] object-cover" :src="selectedEvent.img" alt="">
                    <div class="flex flex-col justify-center gap-4">
                        <h1 class="text-black" style="font-weight: 500; font-family: 'Hedvig Letters Serif';
              font-size: 1.5rem;
            ">{{ selectedEvent.title1 }}</h1>
                        <p class="text-black" style="font-weight: 300; font-family: 'Roboto Mono';
              font-size: 0.9rem;
            ">{{ selectedEvent.title2 }}</p>
                        <a class="text-black" style="font-weight: 400; font-family: 'Roboto Mono';
              font-size: 1rem;
            " href="">Learn More</a>
                    </div>
                 </div>
                 </div>
                 </transition>
  </div>
        </div>
        <div class="w-full h-[350px] bg-black flex mt-[8%]">
            <div class="w-[25%] relative">
                <img class="w-full h-[350px] object-cover" src="/src/views/img/mission7.avif" alt="">
                <div class="bg-black w-full h-[350px]  absolute top-0 left-0 opacity-0 transition-opacity duration-500 hover:opacity-100 repson-black">
        <div class="flex flex-col items-center justify-center h-full">

          <div class="opacity-1 mb-2">
            <a class="text-white" style="font-family:'Roboto Mono';font-weight: 300;font-style: normal;font-size: inherit" href="">
              Mission and History
            </a>
          </div>
          
          <h2 class="text-center text-[32px]">
            <a href="" style="font-family: inherit;font-weight: 500;">
              Human isolation
            </a>
          </h2>
        </div>
      </div>
            </div>
            <div class="w-[25%] relative">
                <img class="w-full h-[350px] object-cover" src="/src/views/img/mission8.avif" alt="">
                <div class="bg-black w-full h-[350px]  absolute top-0 left-0 opacity-0 transition-opacity duration-500 hover:opacity-100 repson-black">
        <div class="flex flex-col items-center justify-center h-full">

          <div class="opacity-1 mb-2">
            <a class="text-white" style="font-family:'Roboto Mono';font-weight: 300;font-style: normal;font-size: inherit" href="">
                Mission and History
            </a>
          </div>
          
          <h2 class="text-center text-[32px]">
            <a href="" style="font-family: inherit;font-weight: 500;">
              Abstract art with shapes
            </a>
          </h2>
        </div>
      </div>
            </div>
            <div class="w-[25%] relative">
                <img class="w-full h-[350px] object-cover" src="/src/views/img/mission9.avif" alt="">
                <div class="bg-black w-full h-[350px]  absolute top-0 left-0 opacity-0 transition-opacity duration-500 hover:opacity-100 repson-black">
        <div class="flex flex-col items-center justify-center h-full">

          <div class="opacity-1 mb-2">
            <a class="text-white" style="font-family:'Roboto Mono';font-weight: 300;font-style: normal;font-size: inherit" href="">
                Mission and History
            </a>
          </div>
          
          <h2 class="text-center text-[32px]">
            <a href="" style="font-family: inherit;font-weight: 500;">
              Breath of city jungle
            </a>
          </h2>
        </div>
      </div>
            </div>
            <div class="w-[25%] relative">
                <img class="w-full h-[350px] object-cover" src="/src/views/img/mission10.avif" alt="">
                <div class="bg-black w-full h-[350px]  absolute top-0 left-0 opacity-0 transition-opacity duration-500 hover:opacity-100 repson-black">
        <div class="flex flex-col items-center justify-center h-full">

          <div class="opacity-1 mb-2">
            <a class="text-white" style="font-family:'Roboto Mono';font-weight: 300;font-style: normal;font-size: inherit" href="">
                Mission and History
            </a>
          </div>
          
          <h2 class="text-center text-[32px]">
            <a href="" style="font-family: inherit;font-weight: 500;">
              Gallery construction
            </a>
          </h2>
        </div>
      </div>
            </div>
            


        </div>
        <div class="w-full mt-[7%] px-[13%] flex gap-16">
            <img class="w-[47%]" src="/src/views/img/mission11.avif" alt="">
            <div class="flex flex-col justify-center gap-2">
                <h1 class="text-black font-normal text-[2.7rem] mt-2"
          style="font-family: 'Hedvig Letters Serif'; letter-spacing: 0.4px">Our Mission</h1>
                <p class="text-black font-light text-[0.rem] mt-2"
          style="font-family: 'Roboto Mono'; letter-spacing: 0.4px">The MooM exists to exhibit, interpret, preserve and promote the visual, artistic and cultural heritage of Indigenous Peoples; to educate and engage the public on local, regional and global social issues through the visual arts.present, collect and interpret historic and contemporary art in innovative and challenging ways that encourage the engagement and enjoyment of existing and future audiences.</p>
            </div>

        </div>
        <div class="w-full mt-[7%] px-[13%] flex gap-16">
            
            <div class="flex flex-col justify-center gap-2">
                <h1 class="text-black font-normal text-[2.7rem] mt-2"
          style="font-family: 'Hedvig Letters Serif'; letter-spacing: 0.4px">Our Vission</h1>
                <p class="text-black font-light text-[0.rem] mt-2"
          style="font-family: 'Roboto Mono'; letter-spacing: 0.4px">We envision a gallery accessible to everyone as a vibrant public space in service of our community, to foster greater social engagement, critical thinking and creativity. Inspiring and challenging our community through art.</p>
            </div>
            <img class="w-[2000px] h-[500px] object-cover" src="/src/views/img/mission12.avif" alt="">

        </div>
        <div class="w-full mt-[7%] px-[13%] flex gap-16">
            <img class="w-[3000px] object-cover h-[500px] " src="/src/views/img/mission13.avif" alt="">
            <div class="flex flex-col justify-center gap-2">
                <h1 class="text-black font-normal text-[2.7rem] mt-2"
          style="font-family: 'Hedvig Letters Serif'; letter-spacing: 0.4px">Our Goals</h1>
                <p class="text-black font-light text-[0.rem] mt-2"
          style="font-family: 'Roboto Mono'; letter-spacing: 0.4px">We are at the forefront of creativity with quality programs and exhibitions. We provide a cultural and educational service of the very highest quality and to act as a focus for civic pride and community identity for the people. The gallery interacts with the community by designing programs that inspire, challenge, educate and entertain.</p>
          <img src="/src/views/img/mission_signature.png" alt="">
            </div>

        </div>
        <div class="grid grid-rows-2 h-[120vh] w-full mt-[8%]" style="background-color: black;
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
import child from "/src/components/secondary_navbar.vue";
export default {
    data() {
        return {
            selectedEvent: null,
            events: [
                { id: 1, date: '2008', 
                    img: '/src/views/img/mission5.avif',
                    title1: "Our office galary opened",
                    title2: "An additional new entrance to the gallery was created at the rear of the building, leading down from the new first floor gallery into a newly-opened up section of the Museum Gardens, which has been developed into a public space.",
                },
                { id: 2, date: '2012', 
                    img: '/src/views/img/mission3.avif',
                    title1: "Our new awards",
                    title2: "The Art Fund Prize awarded to the the MooM. The Art Fund gives £600,000 to Tate’s campaign to save Rubens’s Banqueting House sketch. The Art Fund gives an exceptional grant of £1 million towards the acquisition of Artist Rooms.",
                },
                { id: 3, date: '2016', 
                    img: '/src/views/img/mission4.avif',
                    title1: "The first major exhibition",
                    title2: "Following a successful fundraising appeal, and a pledge of £500,000 from the Art Fund, the Fitzwilliam Museum, Cambridge, successfully acquires the Macclesfield Psalter and £180,000 in donations.",
                },
                { id: 4, date: '2020', 
                    img: '/src/views/img/mission5.avif',
                    title1: "New challenges before the art issues",
                    title2: "Under-30s National Art Pass launched. First Headley Fellows announced. Support of curators continues through AAMC conference travel fellowship and Curatorial Network grants.",
                },
                { id: 5, date: '2023', 
                    img: '/src/views/img/mission2.avif',
                    title1: "A succesfull fundaraising appeal",
                    title2: "The BeMuse Art Gallery holds the largest collection of work by Etty and held the first major exhibition of his work for 50 years, showing many of these paintings and sketches alongside loans from other major galleries.",
                },
                
                // ...add all your events here
            ],
            isTransitioning: false,
            transitionName: 'slide-left',
        }
    },
    created() {
        // Select the first event by default
        if (this.events.length > 0) {
            this.selectedEvent = this.events[0];
        }
    },
    components: {
    child,
  },
    methods: {
        selectEvent(event) {
      if (this.isTransitioning || event === this.selectedEvent) {
        return;
      }

      const currentIndex = this.events.indexOf(this.selectedEvent);
      const newIndex = this.events.indexOf(event);

      this.transitionName = newIndex > currentIndex ? 'slide-left' : 'slide-right';

      this.isTransitioning = true;
      this.selectedEvent = event;
    },
    afterEnter() {
      this.isTransitioning = false;
    }
    },
    computed: {
        selectedLineStyle() {
            if (!this.selectedEvent) return {};

            const totalEvents = this.events.length;
            const eventIndex = this.events.indexOf(this.selectedEvent);
            const widthPercentage = (eventIndex / (totalEvents - 1)) * 100;

            return {
                width: `${widthPercentage}%`
            };
        }
    }
}
</script>

<style scoped>
.main-container{
    scroll-behavior: auto;
    height: 100vh;
}
.timeline-line {
    list-style: none;
    padding: 0;
    margin: 0;
    z-index: 1; /* Ensure the dots are above the lines */
}

/* ... existing styles ... */

.timeline li {
    position: relative;
    background-color: black;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    cursor: pointer;
    color: #000;
    display: flex; /* To center the child span */
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    z-index: 3;
}

.timeline li .date {
    position: absolute;
    bottom: -20px; /* Adjust as needed to position the date below the dot */
    white-space: nowrap; /* Keep the text on one line */
    color: black; /* Text color for the date */
    font-size: 12px; /* Adjust as needed */
    transform: translateX(-50%); /* Center the date below the dot */
    left: 50%;
    z-index: 3;
}

/* ... */


.timeline-line {
    z-index: 1;
}

.selected-line {
    z-index: 1;
}

.selected::before {
    /* Style for the selected timeline dot */
    content: '';
    position: absolute;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background-color: black;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
}

.event-content {
    /* Style for the content area */
}
.slide-left-enter-active, .slide-left-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-left-enter, .slide-left-leave-to {
  transform: translateX(100%);
}
.slide-left-leave-to {
  transform: translateX(-100%);
}

/* Transition for sliding in from the left */
.slide-right-enter-active, .slide-right-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-right-enter, .slide-right-leave-to {
  transform: translateX(-100%);
}
.slide-right-leave-to {
  transform: translateX(100%);
}
</style>
