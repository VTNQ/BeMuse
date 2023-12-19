

<template>
    <div class="main-container" style="scroll-behavior: auto;">
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
    <secondary-navbar/>
    <div class="w-full h-screen -z-10 relative">
      
        <img src="/src/assets/images/ex1.jpg" alt="" class="absolute w-full h-[700px] object-cover">
        <h6 class="textTitle text-white absolute top-[300px] text-[2.5rem] font-bold left-[45%]">Exhibitions</h6>
      
    </div>
    <div class="div_2 bg-white relative w-full min-h-[65vh] px-[10%] mt-[5%]">
      <div class="box justify-between w-full grid grid-cols-2 gap-6">
        <div class="box1 w-full bg-white h-full grid items-center grid-cols-2 grid-flow-row">
            <div class="box2 w-full">
                <h1 class="title" >Museum</h1>
                <div  class=" scheduled">
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Mon 10am - 5pm</p>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Tue 10am - 5pm</p>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Wed-Thu 10am - 5pm</p>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Fri 10am - 5pm</p>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Sat-Sun 10am - 5pm</p>                  
                </div>
            </div>
            <div class="box2 w-full">
                <h1 class="title">Bar Room</h1>
                <div>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Mon 10am - 7pm</p>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Tue 10am - 9pm</p>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Wed-Thu 10am - 7pm</p>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Fri 10am - 9pm</p>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Sat-Sun 10am - 7pm</p>                  
                </div>
            </div>
            <div class="box2 w-full">
                <h1 class="title">Box Office</h1>
                <div>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Mon 10am - 5pm</p>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Tue 10am - 5pm</p>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Wed-Thu 10am - 5pm</p>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Fri 10am - 9pm</p>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Sat-Sun 10am - 5pm</p>                  
                </div>
            </div>
            <div class="box2 w-full">
                <h1 class="title">Gallery</h1>
                <div>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Mon 10am - 8pm</p>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Tue 10am - 9pm</p>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Wed-Thu 10am -8pm</p>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Fri 10am - 9pm</p>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Sat-Sun 10am - 8pm</p>                  
                </div>
            </div>
        </div>
        <div class="img_pic flex justify-between">
          <img class="w-[600px] h-auto" src="/src/views/img/exhibi_pic.jpg" alt="">
        </div>

      </div>
    </div>
    <div class="bg-pink-600 grid grid-cols-1 w-full relative gap-0">
      
      <div class="relative" v-for="slide in slides" :key="index">
  <img class="w-full h-[600px] block  object-cover" :src="slide.img" alt="">
  <div class="content w-full absolute top-[70%] px-12 flex items-center justify-between">
    <div>
      <h1 class="text-white font-normal text-[1rem] " style="font-family: 'Roboto Mono';letter-spacing:.32px">{{ slide.titleDate }}</h1>
      <h2 class="content2 text-white font-semibold text-[3rem] w-[80%] " style="font-family: 'Hedvig Letters Serif';letter-spacing:.32px">{{ slide.title }}</h2>
    </div>
  
    <button class="hover:bg-opacity-50 transition duration-300 ease-in-out bg-black hover:bg-black text-white font-normal py-2 px-4 mr-2 text-[1.1rem] bg-transparent border-white border-[1px] w-[220px] h-[60px]"  style="font-family: 'Roboto Mono';letter-spacing:.32px">{{ slide.btn }}</button>

  </div>
</div>         
      
<div class="grid grid-rows-2 h-[120vh] w-full" style="background-color: black;
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
    


    
    </div>
</template>

<style scoped>
.main-container{
  scroll-behavior: auto;
  height: 100vh;
}
@media (max-width:1192px){
.div_2{
  padding-inline: 10px;
}
}
@media (max-width:1007px){
.div_2{
  padding-inline: 30px;
  margin-bottom: 5%;
}
.box{
  grid-template-columns: repeat(1, minmax(0, 1fr));
  order: 1;
}

.img_pic{
  
  justify-content: center;
}
}
@media (max-width:879px){
.textTitle{
  font-size: 1.7rem;
  left: 40%;
}
}
@media (max-width:637px){
  .content{
    
    flex: 0;
  }
  .content2{
    width: auto;
    font-size: 1.5rem;
  }
}
@media (max-width:506px){
.textTitle{
  font-size: 1.7rem;
  left: 35%;
}
}
@media (max-width:490px){
.box1{
  grid-template-columns: repeat(1, minmax(0, 1fr));
  
}
.box2{
  
  padding-left: 100px;
  margin-top: 20px;
}
.div_2{
  margin-bottom: 20px;
}
.content{
  flex-direction: column;
  top: 75%;
}
.content2{
  
  width: 100%;
}
}
@media (max-width:373px){

.content{
  flex-direction: column;
  top: 70%;
}

}
</style>
<script >
import secondary_navbar from '/src/components/secondary_navbar.vue';

export default{

  data() {
  return {
    slides: [
      {
        img: '/src/views/img/exhibi5.jpg',
        titleDate: "Oct 25 - Nov 11",
        title: "Van Gogh Retrospective",
        btn: "BUY TICKETS"
      },
      {
        img: '/src/views/img/exhibi2.jpg',
        titleDate: "Oct 25 - Nov 11",
        title: "Paul Klee Later Works",
        btn: "BUY TICKETS"
      },
      {
        img: '/src/views/img/exhibi3.jpg',
        titleDate: "Oct 25 - Nov 11",
        title: "Fathers of impressionism",
        btn: "BUY TICKETS"
      },
      {
        img: '/src/views/img/exhibi4.jpg',
        titleDate: "Oct 25 - Nov 11",
        title: "Jenny Saville Experience",
        btn: "BUY TICKETS"
      },
      {
        img: '/src/views/img/exhibi1.jpg',
        titleDate: "Oct 25 - Nov 11",
        title: "Paul Klee Later Works",
        btn: "BUY TICKETS"
      },
    ],
    slideIndex: 0
  }
},

    components:{ 
        "secondary-navbar":secondary_navbar,
    },
}
</script>