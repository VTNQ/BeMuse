<script setup>

  

</script>

<template>
  <div class="container-mainmain relative w-full  overflow-hidden h-full">
    <div class="container-main absolute  w-full h-[400px] bg-white">
      <div class="container w-full h-full grid grid-cols-2 ">
        <div class="img h-full">
          <img
            src="/src/views/img/space_artist2.jpg"
            class="w-[520px] h-full object-cover"
          />
        </div>
        <div class="box w-full bg-white h-full grid items-center grid-cols-2 grid-flow-row">
            <div>
                <h1 class="title" >Museum</h1>
                <div  class=" scheduled">
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Mon 10am - 5pm</p>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Tue 10am - 5pm</p>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Wed-Thu 10am - 5pm</p>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Fri 10am - 5pm</p>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Sat-Sun 10am - 5pm</p>                  
                </div>
            </div>
            <div>
                <h1 class="title">Bar Room</h1>
                <div>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Mon 10am - 7pm</p>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Tue 10am - 9pm</p>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Wed-Thu 10am - 7pm</p>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Fri 10am - 9pm</p>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Sat-Sun 10am - 7pm</p>                  
                </div>
            </div>
            <div>
                <h1 class="title">Box Office</h1>
                <div>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Mon 10am - 5pm</p>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Tue 10am - 5pm</p>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Wed-Thu 10am - 5pm</p>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Fri 10am - 9pm</p>
                    <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Sat-Sun 10am - 5pm</p>                  
                </div>
            </div>
            <div>
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
      </div>
    </div>
  </div>
</template>

<style scoped>
.title{
    color: #000;
    font-size: 1.5rem;
    font-weight: 700;
    font-family: 'Hedvig Letters Serif';
    letter-spacing: 0.36;
    margin-bottom: 10px;
}
.container{
    column-gap: 85px;
}


@media (max-width: 1026px) {
    .img {
        width: 450px; /* Chiều rộng cố định 400px */
        height: 370px; /* Chiều cao cố định 500px */
        display: none;
        
    }
    .container{
        position: absolute;
        width: 100vw;
        margin: auto;
        justify-content: center;
        align-items: center;
    }
    .container-main{
        position: absolute;
    }
    .container-mainmain{
        
    }
    
    .box{

        position: absolute;
        width: 100%;
        grid-template-columns: repeat(0, minmax(0, 1fr)); /* Thay đổi cấu trúc lưới thành 4 cột */
        .container-main{
            align-items: center;
            justify-content: center;
            height: 100%;
        }
        container-mainmain{
            align-items: center;
            justify-content: center;
        }
    }
    @media (max-width: 594px){
        .box{
            position: absolute;
            
        width: 100%;
        grid-template-columns: repeat(0, minmax(0, 1fr));
        padding: none;
        }
        .container-main{
            align-items: center;
            justify-content: center;
            height: 100%;
        }
        container-mainmain{
            align-items: center;
            justify-content: center;
        }
    }
    @media (max-width: 462px){
        .box{
            grid-template-columns: repeat(1, minmax(0, 1fr));;
        }
        
    }
    
}

</style>
