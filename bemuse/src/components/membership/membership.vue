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
        <div class="w-full -z-10 h-screen relative">
      
      <img src="/src/views/img/membership_bg.avif" alt="" class="absolute w-full h-[700px] object-cover">
      <div
        class="overlay h-[700px] absolute inset-0 bg-black opacity-25 z-[2]"
      ></div>
      <h6 style="font-family: 'Roboto Mono'; letter-spacing: 0.36px" class="textTitle text-white absolute top-[300px] z-40 text-[3rem] font-bold left-[43%]">Membership</h6>
    
  </div>
  <div class="mt-[5%] px-[10%] flex justify-center gap-5">
    <div class="bg-white w-[33.3%] flex flex-col items-center ">
        <img class="w-[75px] h-[100px]" src="/src/views/img/member_think.png" alt="">
        <div class="text-center mt-3">
            <h1 class="text-black font-medium text-[2.5rem] px-[20%] m-auto" style="font-family: 'Hedvig Letters Serif'; letter-spacing: 0.4px">Electic Collection</h1>
            <p class="mt-3 text-black font-light text-[1rem] px-[10%] m-auto" style="font-family: 'Roboto Mono'; letter-spacing: 0.4px" >
					An understanding and appreciation of art’s complex role in reflecting and affecting.				</p>
        </div>
    </div>
    <div class="bg-white w-[33.3%] flex flex-col items-center ">
        <img class="w-[100px] h-[100px] object-cover" src="/src/views/img/member_eye.png" alt="">
        <div class="text-center mt-3">
            <h1 class="text-black font-medium text-[2.5rem] px-[20%] m-auto" style="font-family: 'Hedvig Letters Serif'; letter-spacing: 0.4px">Non-Stop Exhibitions</h1>
            <p class="mt-3 text-black font-light text-[1rem] px-[10%] m-auto" style="font-family: 'Roboto Mono'; letter-spacing: 0.4px" >
					
                An enjoyably restless multimedia show explores the nonstop nature of intriguing exhibition.								</p>
        </div>
    </div>
    <div class="bg-white w-[33.3%] flex flex-col items-center ">
        <img class="w-[60px] h-[100px] object-cover" src="/src/views/img/member_status.png" alt="">
        <div class="text-center mt-3">
            <h1 class="text-black font-medium text-[2.5rem] px-[20%] m-auto" style="font-family: 'Hedvig Letters Serif'; letter-spacing: 0.4px">Experienced Curators</h1>
            <p class="mt-3 text-black font-light text-[1rem] px-[10%] m-auto" style="font-family: 'Roboto Mono'; letter-spacing: 0.4px" >
					
                The role that curators play, like the art they care for, is constantly evolving.							</p>
        </div>
    </div>


  </div>
  <div class="bg-white w-full mt-5 relative flex items-center h-screen">
    <div class="w-full px-[8%] relative">
        <img class="w-full h-[250px] object-cover" src="/src/views/img/gallery18.jpg" alt="">
        <div class="absolute inset-0 flex items-center justify-center top-[5%] z-[1000] px-[14%]">
            <div class="bg-transparent w-full flex items-center gap-3 h-[500px]">
                <div class="w-[33.3%] bg-white h-[430px] border-black border-[1px]">
                    <div class="flex flex-col text-center mt-5 gap-2">
                        <h1 class="text-black font-normal text-[1rem]" style="font-family: 'Roboto Mono'; letter-spacing: 0.4px">Student Pack</h1>
                        <h1 class="text-black font-bold text-[3rem]" style="font-family: 'Hedvig Letters Serif'; letter-spacing: 0.4px">$138</h1>

                    </div>
                    <div class="flex flex-col text-center mt-6 gap-5">
                        <h1  class="text-black font-normal text-[1rem]" style="font-family: 'Roboto Mono'; letter-spacing: 0.4px" >All year entrance</h1>
                        <h1  class="text-black font-normal text-[1rem]" style="font-family: 'Roboto Mono'; letter-spacing: 0.4px">Courses and lectures</h1>
                        <h1  class="text-black font-normal text-[1rem]" style="font-family: 'Roboto Mono'; letter-spacing: 0.4px">Guided exhibitions</h1>
                        <h1  class="text-black font-normal text-[1rem]" style="font-family: 'Roboto Mono'; letter-spacing: 0.4px">Fine art clinic</h1>

                    </div>
                    <div class="flex mt-10 justify-center ">
                        <button class=" px-16 py-3 bg-transparent border-[1px] border-black text-black">BUY TICKETS</button>
                    </div>
                </div>
                <div class="w-[33.3%] bg-black h-[470px]">
                    <div class="flex flex-col text-center mt-10 gap-2">
                        <h1 class="text-white font-normal text-[1rem]" style="font-family: 'Roboto Mono'; letter-spacing: 0.4px">Annual Pack</h1>
                        <h1 class="text-white font-bold text-[3.2rem]" style="font-family: 'Hedvig Letters Serif'; letter-spacing: 0.4px">$238</h1>

                    </div>
                    <div class="flex flex-col text-center mt-6 gap-5">
                        <h1  class="text-White font-normal text-[1rem]" style="font-family: 'Roboto Mono'; letter-spacing: 0.4px" >Exhition previews</h1>
                        <h1  class="text-white font-normal text-[1rem]" style="font-family: 'Roboto Mono'; letter-spacing: 0.4px">Members lounge access</h1>
                        <h1  class="text-white font-normal text-[1rem]" style="font-family: 'Roboto Mono'; letter-spacing: 0.4px">Invitation to talk</h1>
                        <h1  class="text-white font-normal text-[1rem]" style="font-family: 'Roboto Mono'; letter-spacing: 0.4px">Regular email newsletters</h1>

                    </div>
                    <div class="flex mt-9 justify-center ">
                        <button class=" px-16 py-3 bg-transparent border-[1px] border-white text-white">BUY TICKETS</button>
                    </div>
                </div>
                <div class="w-[33.3%] bg-white h-[430px] border-black border-[1px]">
                    <div class="flex flex-col mt-5 text-center gap-2">
                        <h1 class="text-black font-normal text-[1rem]" style="font-family: 'Roboto Mono'; letter-spacing: 0.4px">Members Pack</h1>
                        <h1 class="text-black font-bold text-[3rem]" style="font-family: 'Hedvig Letters Serif'; letter-spacing: 0.4px">$338</h1>

                    </div>
                    <div class="flex flex-col text-center mt-6 gap-5">
                        <h1  class="text-black font-normal text-[1rem]" style="font-family: 'Roboto Mono'; letter-spacing: 0.4px" >FREE unlimited entry</h1>
                        <h1  class="text-black font-normal text-[1rem]" style="font-family: 'Roboto Mono'; letter-spacing: 0.4px">10% discount on beverage</h1>
                        <h1  class="text-black font-normal text-[1rem]" style="font-family: 'Roboto Mono'; letter-spacing: 0.4px">10% discount at our shop</h1>
                        <h1  class="text-black font-normal text-[1rem]" style="font-family: 'Roboto Mono'; letter-spacing: 0.4px">10% discount on venue</h1>

                    </div>
                    <div class="flex mt-10 justify-center ">
                        <button class=" px-16 py-3 bg-transparent border-[1px] border-black text-black">BUY TICKETS</button>
                    </div>
                </div>
                
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
</style>
<script>
import child from "/src/components/secondary_navbar.vue";
export default{
    components: {
    child,
  },
}
</script>