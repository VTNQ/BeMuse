<script setup></script>

<template>
  <div class="relative w-full h-full">
    <div class="absolute bottom-0 w-full h-[400px] bg-white">
      <div class="h-full grid grid-cols-2 space-x-[95px]">
        <div class="h-full">
          <img
            src="/src/views/img/space_artist2.jpg"
            class="w-[520px] h-full object-cover"
          />
        </div>
        <div class="bg-white h-full grid items-center grid-cols-2 grid-flow-row">
            <div>
                <h1 class="title" >Museum</h1>
                <div class="scheduled">
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

</style>
