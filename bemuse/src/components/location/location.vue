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
        <child/>
        <div class="w-full bg-white -z-10 h-screen relative text-center">
      <h1 class="text-black font-light text-[1.2rem] mt-[8%]"
          style="font-family: 'Roboto Mono'; letter-spacing: 0.4px">Location</h1>
        <h1 class="text-black font-light text-[3rem] mt-2"
          style="font-family: 'Hedvig Letters Serif'; letter-spacing: 0.4px">
Let's Find Us in
        </h1>
        <div class="bg-white w-full px-[10%] mt-11 flex gap-5">
            <div class="w-[33.3%] flex flex-col gap-5">
                <img class="w-full" src="/src/views/img/location1.avif" alt="">
                <div class="flex flex-col gap-3">
                    <h1 class=" flex text-black font-semibold text-[2rem] mt-2"
          style="font-family: 'Hedvig Letters Serif'; letter-spacing: 0.4px">New York</h1>
                    <div class="flex flex-col gap-2">
                        <div class="flex gap-3 items-center">
                            <img class="h-[25px]" src="/src/views/img/icon_location.png" alt="">
                            <h1 class="text-black font-light text-[1rem] "
                            style="font-family: 'Hedvig Letters Serif'; letter-spacing: 0.4px">7691 Jaclyn Circle Apt. 641</h1>
                        </div>
                        <div class="flex gap-3 items-center mt-2">
                            <img class="h-[25px]" src="/src/views/img/icon_phone.png" alt="">
                            <h1 class="text-black font-light text-[1rem] "
                            style="font-family: 'Hedvig Letters Serif'; letter-spacing: 0.4px">+012 345-678-910</h1>
                        </div>
                        <div class="flex gap-3 items-center mt-2">
                            <img class="h-[25px]" src="/src/views/img/icon_message.png" alt="">
                            <h1 class="text-black font-light text-[1rem]"
                            style="font-family: 'Hedvig Letters Serif'; letter-spacing: 0.4px">new-york@bumuse.com</h1>
                        </div>

                    </div>

                </div>
                <div class="flex items-center gap-3">
                    <a class="text-black font-normal text-[1.1rem]"
                            style="font-family: 'Roboto Mono'; letter-spacing: 0.4px" href=""> Find us on map</a>
                            <img class="w-[30px] h-[25px]" src="/src/views/img/right-arrow-alt-regular-180.png" alt="">
                </div>
            </div>
            <div class="w-[33.3%] flex flex-col gap-5">
                <img class="w-full" src="/src/views/img/location2.avif" alt="">
                <div class="flex flex-col gap-3">
                    <h1 class=" flex text-black font-semibold text-[2rem] mt-2"
          style="font-family: 'Hedvig Letters Serif'; letter-spacing: 0.4px">Ho Chi Minh</h1>
                    <div class="flex flex-col gap-2">
                        <div class="flex gap-3 items-center">
                            <img class="h-[25px]" src="/src/views/img/icon_location.png" alt="">
                            <h1 class="text-black font-light text-[1rem] "
                            style="font-family: 'Hedvig Letters Serif'; letter-spacing: 0.4px">274 Pham Van Chieu, Go Vap District</h1>
                        </div>
                        <div class="flex gap-3 items-center mt-2">
                            <img class="h-[25px]" src="/src/views/img/icon_phone.png" alt="">
                            <h1 class="text-black font-light text-[1rem] "
                            style="font-family: 'Hedvig Letters Serif'; letter-spacing: 0.4px">+012 345-678-910</h1>
                        </div>
                        <div class="flex gap-3 items-center mt-2">
                            <img class="h-[25px]" src="/src/views/img/icon_message.png" alt="">
                            <h1 class="text-black font-light text-[1rem]"
                            style="font-family: 'Hedvig Letters Serif'; letter-spacing: 0.4px">vietnam@bumuse.com</h1>
                        </div>

                    </div>

                </div>
                <div class="flex items-center gap-3">
                    <a class="text-black font-normal text-[1.1rem]"
                            style="font-family: 'Roboto Mono'; letter-spacing: 0.4px" href=""> Find us on map</a>
                            <img class="w-[30px] h-[25px]" src="/src/views/img/right-arrow-alt-regular-180.png" alt="">
                </div>
            </div>
            <div class="w-[33.3%] flex flex-col gap-5">
                <img class="w-full h-[258px]" src="/src/views/img/location3.avif" alt="">
                <div class="flex flex-col gap-3">
                    <h1 class=" flex text-black font-semibold text-[2rem] mt-2"
          style="font-family: 'Hedvig Letters Serif'; letter-spacing: 0.4px">Berlin</h1>
                    <div class="flex flex-col gap-2">
                        <div class="flex gap-3 items-center">
                            <img class="h-[25px]" src="/src/views/img/icon_location.png" alt="">
                            <h1 class="text-black font-light text-[1rem] "
                            style="font-family: 'Hedvig Letters Serif'; letter-spacing: 0.4px">97 Dubuque Junctions</h1>
                        </div>
                        <div class="flex gap-3 items-center mt-2">
                            <img class="h-[25px]" src="/src/views/img/icon_phone.png" alt="">
                            <h1 class="text-black font-light text-[1rem] "
                            style="font-family: 'Hedvig Letters Serif'; letter-spacing: 0.4px">+012 345-678-910</h1>
                        </div>
                        <div class="flex gap-3 items-center mt-2">
                            <img class="h-[25px]" src="/src/views/img/icon_message.png" alt="">
                            <h1 class="text-black font-light text-[1rem]"
                            style="font-family: 'Hedvig Letters Serif'; letter-spacing: 0.4px">berlin@bumuse.com</h1>
                        </div>

                    </div>

                </div>
                <div class="flex items-center gap-3">
                    <a class="text-black font-normal text-[1.1rem]"
                            style="font-family: 'Roboto Mono'; letter-spacing: 0.4px" href=""> Find us on map</a>
                            <img class="w-[30px] h-[25px]" src="/src/views/img/right-arrow-alt-regular-180.png" alt="">
                </div>
            </div>
            
        </div>
      
  </div>
  <div class="w-full mt-[5%] iframe-container" style="padding: 20px">
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
      class="w-full absolute top-[-100px]"
      style="
        margin-top: -14px;
        margin-bottom: 0px;
        padding: 0px 20px 0px 20px;
        position: relative;
      "
      >
      <div class="bg-transparent w-full h-[500px] px-[10%]">
          <div class="border-black w-full h-full border-[1px] bg-white">
            <div class="flex justify-center mt-12">
              <h1 class="text-black font-light text-[2rem]"
                            style="font-family: 'Hedvig Letters Serif'; letter-spacing: 0.4px">Send Us a Message</h1>
            </div>
            <div class="mt-[2%] px-[4.5%]  w-full">
              <div class="grid grid-cols-3 gap-4">
                <input class="w-full h-[60px] text-black border-black border-[1px] bg-white pl-4" type="text" placeholder="Your name">
                <input class="w-full h-[60px] text-black border-black border-[1px] bg-white pl-4" type="text" placeholder="Your phone">
                <input class="w-full h-[60px] text-black border-black border-[1px] bg-white pl-4" type="text" placeholder="Your e-mail">

              </div>
              <textarea class="mt-4 pt-3 w-full h-[170px] text-black border-black border-[1px] bg-white px-4" placeholder="Your message" name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div class="flex justify-between items-center px-[4.5%] mt-3">
              <h1 class="text-black font-light text-[1rem]"
                            style="font-family: 'Roboto Mono'; letter-spacing: 0.4px">You can contact members of the team direct</h1>
              <button class="text-white bg-black w-[300px] h-[55px]" style="font-family: 'Hedvig Letters Serif'; letter-spacing: 0.4px">SUBMIT MESSAGE</button>
            </div>

          </div>
      </div>
    </section>
    <div class="grid grid-rows-2 h-[120vh] w-full " style="background-color: black;
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
    scroll-behavior: unset;
    height: 100vh;
}

</style>
<script>
import child from "/src/components/secondary_navbar.vue";
export default{
    components: {
    child,
  },
}

</script>