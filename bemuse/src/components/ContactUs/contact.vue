<script>
import { ref, onMounted, computed } from "vue";
import child from "/src/components/secondary_navbar.vue";

export default {
  components: {
    child,
  },
  
};
</script>
<template>
    <div>
            <div
      class="max-w-[100%] m-auto px-[30px] py-0 w-[100%] flex justify-between bg-black" style="scroll-behavior: auto;"
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
<div class="w-full h-full iframe-container " style="padding: 20px;">
    <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.060291834591!2d106.7093058759669!3d10.806694331184948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529ed00409f09%3A0x11f7708a5c77d777!2zQXB0ZWNoIENvbXB1dGVyIEVkdWNhdGlvbiAtIEjhu4cgVGjhu5FuZyDEkMOgbyB04bqhbyBM4bqtcCBUcsOsbmggVmnDqm4gUXXhu5FjIHThur8gQXB0ZWNo!5e0!3m2!1sfr!2s!4v1701942578431!5m2!1sfr!2s" 
            width="100%" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
<section class="w-[1528px] " style="left: -171.4px;margin-top: -14px;
    margin-bottom: 0px;
    padding: 0px 20px 0px 20px;position: relative;">
    <div class="max-w-0[1200px] flex mr-auto ml-[191px] mt-[37px] relative">
        <div class="w-[100%] flex">
            <div class="w-[33.333%] relative flex">
                <div class="w-[100%] relative flex" style="margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;">
    <div class="flex " style="align-content: center;
    align-items: center;position: relative;
    width: 100%;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-line-pack: start;">
    <div class="w-[100%] relative">
        <div style="margin: 0px -20px 0px 0px;">
            <div style="    min-width: 405px;
    min-height: 508px;background-color:white;padding: 72px 50px 58px 50px;text-align: center;
    border: solid 1px black;">
                <div class="" style="
    
    text-align: center;
    ">
                   <i class="fa-solid fa-envelope" style="font-size:60px;color:black"></i>
                   <div style="width: 40px;
    height: 1px;
    background-color: black;
    margin: 40px auto;"></div>
    <h5 class="text-black mb-[13px] font-bold" style="letter-spacing: 0.5px;font-size:25px;font-family: 'Crimson Text';line-height: 1.24;">Phone & Email </h5>
                </div>
                <div>
                    <div class="mt-[25px]">
                        <div class="mb-[25px]" style="font-size: 16px;
    line-height: 1.56em;
    letter-spacing: 0.32px;color: rgba(0,0,0,1);font-family:'Roboto Mono';font-weight:300">+1-202-521-1211</div>
                        <div class="mb-[25px]" style="font-size: 16px;
    line-height: 1.56em;
    letter-spacing: 0.32px;color: rgba(0,0,0,1);font-family:'Roboto Mono';font-weight:300">+1-202-555-0133</div>
                        <div class="mb-[25px]" style="font-size: 16px;
    line-height: 1.56em;
    letter-spacing: 0.32px;color: rgba(0,0,0,1);font-family:'Roboto Mono';font-weight:300">new-york@mooseoom.com</div>
                    </div>
                    <div class="mt-[61px]">
                        <a href="" style="color: rgba(0,0,0,1);font-weight: 400;
    font-size: 16px;font-family:'Roboto Mono'" >learn more</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
            </div>
            <div class="w-[33.333%] relative flex">
                <div class="w-[100%] relative flex" style="margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;">
    <div class="flex " style="align-content: center;
    align-items: center;position: relative;
    width: 100%;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-line-pack: start;">
    <div class="w-[100%] relative">
        <div style="margin: 0px -20px 0px 0px;">
            <div style="    min-width: 405px;
    min-height: 508px;background-color:black;padding: 93px 50px 58px 50px;text-align: center;
    border: none;">
                <div class="" style="
    
    text-align: center;
    ">
                   <i class="fa-solid fa-address-book" style="font-size:60px;color:white"></i>
                   <div style="width: 40px;
    height: 1px;
    background-color: white;
    margin: 40px auto;"></div>
    <h5 class="text-white mb-[13px] font-bold" style="letter-spacing: 0.5px;font-size:25px;font-family: 'Crimson Text';line-height: 1.24;">Address</h5>
                </div>
                <div>
                    <div class="mt-[25px]">
                        <div class="mb-[25px]" style="font-size: 16px;
    line-height: 1.56em;
    letter-spacing: 0.32px;color: rgba(255,255,255,.7);font-family:'Roboto Mono';font-weight:300">3 Wakehurst Street</div>
                        <div class="mb-[25px]" style="font-size: 16px;
    line-height: 1.56em;
    letter-spacing: 0.32px;color: rgba(255,255,255,.7);font-family:'Roboto Mono';font-weight:300">New York, NY 10002,</div>
                        <div class="mb-[25px]" style="font-size: 16px;
    line-height: 1.56em;
    letter-spacing: 0.32px;color: rgba(255,255,255,.7);font-family:'Roboto Mono';font-weight:300">United States</div>
                    </div>
                    <div class="mt-[61px]">
                        <a href="" style="color: #fff;font-weight: 400;
    font-size: 16px;font-family:'Roboto Mono'" >learn more</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
            </div>
            <div class="w-[33.333%] relative flex left-[19px]">
                <div class="w-[100%] relative flex" style="margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;">
    <div class="flex " style="align-content: center;
    align-items: center;position: relative;
    width: 100%;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-line-pack: start;">
    <div class="w-[100%] relative">
        <div style="margin: 0px -20px 0px 0px;">
            <div style="    min-width: 405px;
    min-height: 508px;background-color:white;padding: 72px 50px 58px 50px;text-align: center;
    border: solid 1px black;">
                <div class="" style="
    
    text-align: center;
    ">

   
                   <i class="fa-solid fa-clock" style="font-size:60px;color:black"></i>
                   <div style="width: 40px;
    height: 1px;
    background-color: black;
    margin: 40px auto;"></div>
    <h5 class="text-black mb-[13px] font-bold" style="letter-spacing: 0.5px;font-size:25px;font-family: 'Crimson Text';line-height: 1.24;">Working Hours </h5>
                </div>
                <div>
                    <div class="mt-[25px]">
                        <div class="mb-[25px]" style="font-size: 16px;
    line-height: 1.56em;
    letter-spacing: 0.32px;color: rgba(0,0,0,1);font-family:'Roboto Mono';font-weight:300">Mon-Fri 10am – 5pm</div>
                        <div class="mb-[25px]" style="font-size: 16px;
    line-height: 1.56em;
    letter-spacing: 0.32px;color: rgba(0,0,0,1);font-family:'Roboto Mono';font-weight:300">Sat 10am – 3pm</div>
                        <div class="mb-[25px]" style="font-size: 16px;
    line-height: 1.56em;
    letter-spacing: 0.32px;color: rgba(0,0,0,1);font-family:'Roboto Mono';font-weight:300">Sun 10am – 1pm</div>
                    </div>
                    <div class="mt-[61px]">
                        <a href="" style="color: rgba(0,0,0,1);font-weight: 400;
    font-size: 16px;font-family:'Roboto Mono'" >learn more</a>
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
<section class="w-[1528px] mt-[117px] mb-[129px] relative" style="padding: 0px 0px 0px 50px;">
  
<div class="max-w-[1250px] flex mr-auto ml-auto relative">
  <div class="w-[100%] flex">
    <div class="w-[50%] relative flex min-h-[1px]">
      <div class="flex relative" style="margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;width:100%">
    <div class="flex items-start relative flex-wrap w-[100%]">
      <section class="w-[100%] relative">
        <div class="flex mr-auto ml-auto relative">
          <div class="w-[100%]">
            <div class="w-[100%] relative flex">
              <div class="relative flex p-0">
                <div class="flex" style="position: relative;
    width: 100%;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-line-pack: start;
    align-content: flex-start;">
    <div class="w-[100%] relative">
      <div style="margin:0px 80px 0px 0px">
        <div>
          <h1 style="text-align: left;
    font-size: 50px;
    letter-spacing: 0.8px;font-family: 'Crimson Text';color: #000000;font-weight:bold">Get in Touch With Us</h1>
        </div>
      </div>
    </div>
    </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="w-[100%] relative">
        <div class="flex mr-auto ml-auto relative">
          <div class="w-[100%]">
            <div class="w-[100%] relative flex">
              <div class="relative flex p-0">
                <div class="flex" style="position: relative;
    width: 100%;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-line-pack: start;
    align-content: flex-start;">
    <div class="w-[100%] relative">
      <div style="margin:0px 80px 0px 0px">
        <div>
          <p style="font-size: 16px;
    font-weight: 300;
    line-height: 2em;
    letter-spacing: 0.32px;font-family: 'Roboto Mono';color: #000000;">If you would like to hear about our exhibitions and events by email, please use the Subscribe button to the left. Otherwise in the message box you can ask to join our postal list.</p>
        </div>
      </div>
    </div>
    </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
    </div>
    <div class="w-[50%] relative flex min-h-[1px]"></div>
  </div>
</div>
</section>
<section class="w-[100%] relative" style="margin-top: 45px;
    margin-bottom: 0px;
">
<div style="display: flex;
    margin-right: auto;
    margin-left: auto;
    position: relative;
">
<div class="w-[100%] flex">

  <div class="relative flex" style="width: 85%;">
    <div class="p-0 w-[100%] relative flex">
      <div class="flex" style="position: relative;
    width: 100%;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-line-pack: start;
    align-content: flex-start;">
    <div class="w-[100%] relative">
      <div>
        <div>
          <div>
            <div class="relative " style="margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    z-index: 1;">
    <div style="ransition-duration: 0ms;
    transform: translate3d(-1593px);position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;display:flex;margin-left: 12%;">
    <div class="w-[531px] h-auto" style="-ms-flex-negative: 0;
    flex-shrink: 0;">
    <h5 style="margin-bottom: 55px;font-size: 25px;
    line-height: 1.24;font-family: 'Crimson Text';
    font-weight: 700;
    letter-spacing: 0.64px;
    color: #000000;text-align:left">New york</h5>
    <div class="flex items-center" style="font-size: 16px;
    font-weight: 300;
    letter-spacing: 0.32px;margin-bottom: 20px; text-align:center">
    <i class="fa-regular fa-compass" style="font-size:35px;color:black;margin-right: 9px;"></i>
    <p style="font-size: 16px;
    font-weight: 300;
    letter-spacing: 0.32px;display: inline-block;font-family: 'Roboto Mono';color:black">7691 Jaclyn Circle Apt. 641</p>
    </div>
    <div class="flex items-center" style="font-size: 16px;
    font-weight: 300;
    letter-spacing: 0.32px;margin-bottom: 20px; text-align:center">
    <i class="fa-regular fa-compass" style="font-size:35px;color:black;margin-right: 9px;"></i>
    <p style="font-size: 16px;
    font-weight: 300;
    letter-spacing: 0.32px;display: inline-block;font-family: 'Roboto Mono';color:black">+1  453-174-4056</p>
    </div>
    <div class="flex items-center" style="font-size: 16px;
    font-weight: 300;
    letter-spacing: 0.32px;margin-bottom: 20px; text-align:center;">
    <i class="fa-regular fa-compass" style="font-size:35px;color:black;margin-right: 9px;"></i>
    <a style="font-size: 16px;
    font-weight: 300;
    letter-spacing: 0.32px;display: inline-block;font-family: 'Roboto Mono';color:black">new-york@mooseoom.com</a>
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
  </div>
</div>
</div>
</section>
<section class="mt-[80px] mb-0 w-[100%]">
  <div class="flex mr-auto ml-auto relative">
    <div class="w-[100%] flex">
      <div class="w-[100%] relative flex">
        <div class="p-0 w-[100%]">
          <div class="flex relative flex-wrap " style="align-content: flex-start;">
            <div class="w-[100%] relative">
              <div>
                <div>
                  <div class="" style="    display: flex;
    text-align: left;
    margin-left: 149px;">
    <a href="" style="margin: 0 10px;
    display: inline-block;
    font-size: 16px;
    vertical-align: middle;
    margin-right: 60px;
    line-height: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;letter-spacing: 0.32px;color:black;font-family:'Roboto Mono';font-weight: 300;">
    <i class="fa-brands fa-facebook" style="color:black;margin-right:15px"></i>
    facebook
    </a>
    <a href="" style="margin: 0 10px;
    display: inline-block;
    font-size: 16px;
    vertical-align: middle;
    margin-right: 60px;
    line-height: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;letter-spacing: 0.32px;color:black;font-family:'Roboto Mono';font-weight: 300;">
    <i class="fa-brands fa-facebook" style="color:black;margin-right:15px"></i>
    Likedink
    </a>
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
    </div>
   
</template>
<style scoped>
.iframe-container {
    opacity: 0.9;
    animation: fadeIn 1s ease-in-out forwards;
    transition: all ease 2.9s;
  }

  @keyframes fadeIn {
     from {
      opacity: 0;
      transform: translateY(-20px); /* Optional: Add a vertical slide effect */
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>