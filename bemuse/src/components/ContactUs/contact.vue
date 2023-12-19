<script>
import { ref, onMounted, computed } from "vue";
import secondary_navbar from '/src/components/secondary_navbar.vue';

export default {
  data() {
    return {
      currentIndex: 0,
      currentSlide : 0,
      events : document.querySelectorAll('.event'),
      slides: [
        {
          titleCity: "Berlin",
          titleAddress: "97 Dubuque Junctions",
          titleNumber: "+012 345-678-910",
          titleEmail: "berlin@bumuse.com",
        },
        {
          titleCity: "Viet Nam",
          titleAddress: "274 Pham Van Chieu, Go Vap District, HCM City",
          titleNumber: "+012 345-678-910",
          titleEmail: "vietnam@bumuse.com",
        },
        {
          titleCity: "New York",
          titleAddress: "7691 Jaclyn Circle Apt. 641",
          titleNumber: "+012 345-678-910",
          titleEmail: "new-york@bumuse.com",
        },
      ],
    };
  },
  computed: {
    currentSlide() {
      return this.slides[this.currentIndex];
    },
  },
  methods: {
    prevSlide() {
      this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.slides.length - 1;
    },
    nextSlide() {
      this.currentIndex = this.currentIndex < this.slides.length - 1 ? this.currentIndex + 1 : 0;
    },
    moveTimeline(direction) {
  const timelineWidth = document.getElementById('timeline').offsetWidth;
  const containerWidth = document.getElementById('timeline-container').offsetWidth;
  const maxSlide = events.length - 1;
  
  if (direction === 'next' && currentSlide < maxSlide) {
    currentSlide++;
  } else if (direction === 'prev' && currentSlide > 0) {
    currentSlide--;
  }
  
  const itemOffset = events[currentSlide].offsetLeft;
  const moveAmount = containerWidth / 2 - itemOffset;

  document.getElementById('timeline').style.transform = `translateX(${moveAmount}px)`;
}
  },
  components: {
    "secondary-navbar": secondary_navbar,
}, 
};
</script>

<template>
  <div class="main-container">
    <div
      class="max-w-[100%] m-auto px-[30px] py-0 w-[100%] flex justify-between bg-black"
      style="scroll-behavior: auto"
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
    <child />
    <secondary-navbar/>

    <div class="w-full h-full -z-[1000] iframe-container" style="padding: 20px">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.060291834591!2d106.7093058759669!3d10.806694331184948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529ed00409f09%3A0x11f7708a5c77d777!2zQXB0ZWNoIENvbXB1dGVyIEVkdWNhdGlvbiAtIEjhu4cgVGjhu5FuZyDEkMOgbyB04bqhbyBM4bqtcCBUcsOsbmggVmnDqm4gUXXhu5FjIHThur8gQXB0ZWNo!5e0!3m2!1sfr!2s!4v1701942578431!5m2!1sfr!2s"
        width="100%"
        height="600"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <section
      class="w-full absolute top-[-250px]"
      style="
        margin-top: -14px;
        margin-bottom: 0px;
        padding: 0px 20px 0px 20px;
        position: relative;
      "
      >
      <div class="max-w-0[1200px] flex mr-auto mt-[37px] relative">
        <div class="w-[100%] flex px-[11%]">
          <div class="w-[33.333%] relative flex">
            <div
              class="w-[100%] relative flex"
              style="margin: 0px 0px 0px 0px; padding: 0px 0px 0px 0px"
            >
              <div
                class="flex"
                style="
                  align-content: center;
                  align-items: center;
                  position: relative;
                  width: 100%;
                  -ms-flex-wrap: wrap;
                  flex-wrap: wrap;
                  -ms-flex-line-pack: start;
                "
              >
                <div class="w-[100%] relative">
                  <div style="margin: 0px -20px 0px 0px">
                    <div
                      style="
                        min-width: 405px;
                        min-height: 508px;
                        background-color: white;
                        padding: 72px 50px 58px 50px;
                        text-align: center;
                        border: solid 1px black;
                      "
                    >
                      <div class="" style="text-align: center">
                        <i
                          class="fa-solid fa-envelope"
                          style="font-size: 60px; color: black"
                        ></i>
                        <div
                          style="
                            width: 40px;
                            height: 1px;
                            background-color: black;
                            margin: 40px auto;
                          "
                        ></div>
                        <h5
                          class="text-black mb-[13px] font-bold"
                          style="
                            letter-spacing: 0.5px;
                            font-size: 25px;
                            font-family: 'Crimson Text';
                            line-height: 1.24;
                          "
                        >
                          Phone & Email
                        </h5>
                      </div>
                      <div>
                        <div class="mt-[25px]">
                          <div
                            class="mb-[25px]"
                            style="
                              font-size: 16px;
                              line-height: 1.56em;
                              letter-spacing: 0.32px;
                              color: rgba(0, 0, 0, 1);
                              font-family: 'Roboto Mono';
                              font-weight: 300;
                            "
                          >
                            +1-202-521-1211
                          </div>
                          <div
                            class="mb-[25px]"
                            style="
                              font-size: 16px;
                              line-height: 1.56em;
                              letter-spacing: 0.32px;
                              color: rgba(0, 0, 0, 1);
                              font-family: 'Roboto Mono';
                              font-weight: 300;
                            "
                          >
                            +1-202-555-0133
                          </div>
                          <div
                            class="mb-[25px]"
                            style="
                              font-size: 16px;
                              line-height: 1.56em;
                              letter-spacing: 0.32px;
                              color: rgba(0, 0, 0, 1);
                              font-family: 'Roboto Mono';
                              font-weight: 300;
                            "
                          >
                            new-york@mooseoom.com
                          </div>
                        </div>
                        <div class="mt-[61px]">
                          <a
                            href=""
                            style="
                              color: rgba(0, 0, 0, 1);
                              font-weight: 400;
                              font-size: 16px;
                              font-family: 'Roboto Mono';
                            "
                            >learn more</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-[33.333%] relative flex">
            <div
              class="w-[100%] relative flex"
              style="margin: 0px 0px 0px 0px; padding: 0px 0px 0px 0px"
            >
              <div
                class="flex"
                style="
                  align-content: center;
                  align-items: center;
                  position: relative;
                  width: 100%;
                  -ms-flex-wrap: wrap;
                  flex-wrap: wrap;
                  -ms-flex-line-pack: start;
                "
              >
                <div class="w-[100%] relative">
                  <div style="margin: 0px -20px 0px 0px">
                    <div
                      style="
                        min-width: 405px;
                        min-height: 508px;
                        background-color: black;
                        padding: 93px 50px 58px 50px;
                        text-align: center;
                        border: none;
                      "
                    >
                      <div class="" style="text-align: center">
                        <i
                          class="fa-solid fa-address-book"
                          style="font-size: 60px; color: white"
                        ></i>
                        <div
                          style="
                            width: 40px;
                            height: 1px;
                            background-color: white;
                            margin: 40px auto;
                          "
                        ></div>
                        <h5
                          class="text-white mb-[13px] font-bold"
                          style="
                            letter-spacing: 0.5px;
                            font-size: 25px;
                            font-family: 'Crimson Text';
                            line-height: 1.24;
                          "
                        >
                          Address
                        </h5>
                      </div>
                      <div>
                        <div class="mt-[25px]">
                          <div
                            class="mb-[25px]"
                            style="
                              font-size: 16px;
                              line-height: 1.56em;
                              letter-spacing: 0.32px;
                              color: rgba(255, 255, 255, 0.7);
                              font-family: 'Roboto Mono';
                              font-weight: 300;
                            "
                          >
                            3 Wakehurst Street
                          </div>
                          <div
                            class="mb-[25px]"
                            style="
                              font-size: 16px;
                              line-height: 1.56em;
                              letter-spacing: 0.32px;
                              color: rgba(255, 255, 255, 0.7);
                              font-family: 'Roboto Mono';
                              font-weight: 300;
                            "
                          >
                            New York, NY 10002,
                          </div>
                          <div
                            class="mb-[25px]"
                            style="
                              font-size: 16px;
                              line-height: 1.56em;
                              letter-spacing: 0.32px;
                              color: rgba(255, 255, 255, 0.7);
                              font-family: 'Roboto Mono';
                              font-weight: 300;
                            "
                          >
                            United States
                          </div>
                        </div>
                        <div class="mt-[61px]">
                          <a
                            href=""
                            style="
                              color: #fff;
                              font-weight: 400;
                              font-size: 16px;
                              font-family: 'Roboto Mono';
                            "
                            >learn more</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-[33.333%] relative flex left-[19px]">
            <div
              class="w-[100%] relative flex"
              style="margin: 0px 0px 0px 0px; padding: 0px 0px 0px 0px"
            >
              <div
                class="flex"
                style="
                  align-content: center;
                  align-items: center;
                  position: relative;
                  width: 100%;
                  -ms-flex-wrap: wrap;
                  flex-wrap: wrap;
                  -ms-flex-line-pack: start;
                "
              >
                <div class="w-[100%] relative">
                  <div style="margin: 0px -20px 0px 0px">
                    <div
                      style="
                        min-width: 405px;
                        min-height: 508px;
                        background-color: white;
                        padding: 72px 50px 58px 50px;
                        text-align: center;
                        border: solid 1px black;
                      "
                    >
                      <div class="" style="text-align: center">
                        <i
                          class="fa-solid fa-clock"
                          style="font-size: 60px; color: black"
                        ></i>
                        <div
                          style="
                            width: 40px;
                            height: 1px;
                            background-color: black;
                            margin: 40px auto;
                          "
                        ></div>
                        <h5
                          class="text-black mb-[13px] font-bold"
                          style="
                            letter-spacing: 0.5px;
                            font-size: 25px;
                            font-family: 'Crimson Text';
                            line-height: 1.24;
                          "
                        >
                          Working Hours
                        </h5>
                      </div>
                      <div>
                        <div class="mt-[25px]">
                          <div
                            class="mb-[25px]"
                            style="
                              font-size: 16px;
                              line-height: 1.56em;
                              letter-spacing: 0.32px;
                              color: rgba(0, 0, 0, 1);
                              font-family: 'Roboto Mono';
                              font-weight: 300;
                            "
                          >
                            Mon-Fri 10am – 5pm
                          </div>
                          <div
                            class="mb-[25px]"
                            style="
                              font-size: 16px;
                              line-height: 1.56em;
                              letter-spacing: 0.32px;
                              color: rgba(0, 0, 0, 1);
                              font-family: 'Roboto Mono';
                              font-weight: 300;
                            "
                          >
                            Sat 10am – 3pm
                          </div>
                          <div
                            class="mb-[25px]"
                            style="
                              font-size: 16px;
                              line-height: 1.56em;
                              letter-spacing: 0.32px;
                              color: rgba(0, 0, 0, 1);
                              font-family: 'Roboto Mono';
                              font-weight: 300;
                            "
                          >
                            Sun 10am – 1pm
                          </div>
                        </div>
                        <div class="mt-[61px]">
                          <a
                            href=""
                            style="
                              color: rgba(0, 0, 0, 1);
                              font-weight: 400;
                              font-size: 16px;
                              font-family: 'Roboto Mono';
                            "
                            >learn more</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="w-full grid grid-cols-2 gap-5  px-[10%]">
      <div>
        <div class="bg-white pr-8">
          <h1
            class="text-black mt-5 "
            style="
              font-family: 'Hedvig Letters Serif';
              font-weight: 300;
              font-style: normal;
              font-size: 3rem;
            "
          >
            Get in Touch With Us
          </h1>
          <p
            class="text-black mt-5"
            style="
              font-family: 'Roboto Mono';
              font-weight: 300;
              font-style: normal;
              font-size: 1.1rem;
            "
          >
            If you would like to hear about our exhibitions and events by email,
            please use the Subscribe button to the left. Otherwise in the
            message box you can ask to join our postal list.
          </p>
        </div>
        

        
        <div class="slider-container mt-[10%] relative">
          <div class="slider bg-green-400">
            <div
              class="bg-white w-full"
              v-for="(slide, index) in slides"
              :key="index"
              v-show="index === currentIndex"
            >

            
              <h1  class="text-black " style="font-family:'Hedvig Letters Serif';font-weight: 600;font-style: normal;font-size: 1.5rem">{{ slide.titleCity }}</h1>

            
            <div class="flex items-center mt-14">
              <img class="w-[30px]" src="/src/views/img/icon_location.png" alt="">
              <h1  class="text-black ml-3" style="font-family:'Roboto Mono';font-weight: 300;font-style: normal;font-size: 1.2rem">{{ slide.titleAddress }}</h1>
            
            </div>
            <div class="flex items-center mt-5">
              <img class="w-[30px]" src="/src/views/img/icon_phone.png" alt="">
              <h1  class="text-black ml-3" style="font-family:'Roboto Mono';font-weight: 300;font-style: normal;font-size: 1.2rem">{{ slide.titleNumber }}</h1>

            </div>
            <div class="flex items-center mt-5">
              <img class="w-[30px]" src="/src/views/img/icon_message.png" alt="">
              <h1  class="text-black ml-3" style="font-family:'Roboto Mono';font-weight: 300;font-style: normal;font-size: 1.2rem">{{ slide.titleEmail }}</h1>

            </div>

            
            </div>
          </div>
          <div class="absolute top-0 right-0">
            <button class="text-black" @click="prevSlide"><img class="w-[40px]" src="/src/views/img/chevron-left-regular-180.png" alt=""></button>
          <button class="text-black" @click="nextSlide"><img class="w-[40px]" src="/src/views/img/chevron-right-regular-180.png" alt=""></button>
          </div>
        </div>

        <div class="flex justify-between pr-16">
          <div class="flex items-center">
            <img class="h-[17px]"  src="/src/views/img/facebook-app-symbol.png" alt="">
            <h1 class="text-black pl-4"
            style="
              font-family: 'Roboto Mono';
              font-weight: 300;
              font-style: normal;
              font-size: 1.1rem;
            ">facebook</h1>
          </div>
          <div class="flex items-center">
            <img class="h-[17px]"  src="/src/views/img/linkedin.png" alt="">
            <h1 class="text-black pl-4"
            style="
              font-family: 'Roboto Mono';
              font-weight: 300;
              font-style: normal;
              font-size: 1.1rem;
            ">Linkedin</h1>
          </div>
          <div class="flex items-center">
            <img class="h-[17px]"  src="/src/views/img/twitter.png" alt="">
            <h1 class="text-black pl-4"
            style="
              font-family: 'Roboto Mono';
              font-weight: 300;
              font-style: normal;
              font-size: 1.1rem;
            ">Twitter</h1>
          </div>

        </div>
      </div>

      <div class="w-full flex flex-col items-center ">
        <h1 class="text-black text-center mb-12" style="font-family:'Hedvig Letters Serif';font-weight: 600;font-style: normal;font-size: 1.6rem">Send us a Message</h1>
        <div class="w-[90%]  bg-white h-[500px]">
          <div class="grid grid-cols-2 gap-3">
            <input type="text"  style="font-family:'Roboto Mono';font-weight: 300;font-style: normal;font-size: 1rem" placeholder="Your Name*" class="pl-4 text-black border-black border-[1px] w-full h-[60px]">
            <input type="text"  style="font-family:'Roboto Mono';font-weight: 300;font-style: normal;font-size: 1rem" placeholder="Affiliation*" class="pl-4 text-black border-black border-[1px] w-full h-[60px]">
            <input type="text"  style="font-family:'Roboto Mono';font-weight: 300;font-style: normal;font-size: 1rem" placeholder="Email*" class="pl-4 text-black border-black border-[1px] w-full h-[60px]">
            <input type="text"  style="font-family:'Roboto Mono';font-weight: 300;font-style: normal;font-size: 1rem" placeholder="Number*" class="pl-4 text-black border-black border-[1px] w-full h-[60px]">
            <input type="text"  style="font-family:'Roboto Mono';font-weight: 300;font-style: normal;font-size: 1rem" placeholder="Website*" class="pl-4 text-black border-black border-[1px] w-full h-[60px]">
            <input type="text"  style="font-family:'Roboto Mono';font-weight: 300;font-style: normal;font-size: 1rem" placeholder="Inquiry Department*" class="pl-4 text-black border-black border-[1px] w-full h-[60px]">
            

          </div>
          <input type="text"  style="font-family:'Roboto Mono';font-weight: 300;font-style: normal;font-size: 1rem" placeholder="Topic*" class="mt-3 pl-4 text-black border-black border-[1px] w-full h-[60px]">
          <input type="text"  style="font-family:'Roboto Mono';font-weight: 300;font-style: normal;font-size: 1rem" placeholder="Your message" class="mt-3 pl-4 text-black border-black border-[1px] w-full h-[160px]">
          
          <button class="w-full h-[50px] text-white bg-black border-white border-[1px] mt-3 " style="font-family:'Roboto Mono';font-weight: 600;font-weight: 300;font-size: 1rem">SUBMIT</button>
        </div>
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
<style scoped>

#museum-timeline {
  position: relative;
  width: 100%;
}

#timeline-container {
  overflow: hidden;
}

#timeline {
  list-style: none;
  padding: 0;
  white-space: nowrap;
  transition: transform 0.5s ease;
}

.event {
  display: inline-block;
  margin-right: 20px;
  /* Thêm các định dạng khác nếu cần */
}



#prev {
  left: 0;
}

#next {
  right: 0;
}

/* CSS cho slider */
.slider-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 300px;
  /* Adjust as needed */
}

.slider {
  display: flex;
  transition: transform 0.3s ease-in-out;
  /* Smooth transition */
}

/* Ensure each slide takes the full width of the container */
.slider > div {
  flex: 0 0 100%;
  max-width: 100%;
}

/* Styling for buttons */
.prev-btn,
.next-btn {
  /* Button styling here */
}

.main-container {
  scroll-behavior: auto;
  height: 100vh;
}

.iframe-container {
  opacity: 0.9;
  animation: fadeIn 1s ease-in-out forwards;
  transition: all ease 2.9s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
    /* Optional: Add a vertical slide effect */
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
