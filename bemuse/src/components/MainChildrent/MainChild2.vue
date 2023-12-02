<template>
  <div class="grid grid-cols-3 grid-flow-row gap-4 p-[28px]">
    <div class="img relative overflow-hidden">
      <!-- Image -->
      <img src="/src/views/img/museum_of_cham_sculpture.jpg" class="w-[244px] h-[230px] object-cover" alt="">
      
      <!-- Overlay -->
      <div class="bg-black w-[244px] h-[230px] absolute top-0 left-0 opacity-0 transition-opacity duration-500 hover:opacity-100">
        <div class="flex flex-col items-center justify-center h-full">
          <div class="opacity-1 mb-2">
            <a class="text-white" style="font-family:'Roboto Mono';font-weight: 300;font-style: normal;font-size: inherit" href="">
              Monica Frulento
            </a>
          </div>
          <h2 class="text-center text-[32px]">
            <a href="https://mooseoom.foxthemes.me/portfolio/strange-room/" style="font-family: inherit;font-weight: 500;">
              Strange room
            </a>
          </h2>
        </div>
      </div>
    </div>

    <!-- Another grid item -->
    <div class="relative overflow-hidden">
      <img src="/src/views/img/pic-museum3.jpg" class="w-[244px] h-[230px] object-cover" alt="">
      <div class="bg-black w-[244px] h-[230px] absolute top-0 left-0 opacity-0 transition-opacity duration-500 hover:opacity-100">
        <div class="flex flex-col items-center justify-center h-full">
          <div class="opacity-1 mb-2">
            <a class="text-white" style="font-family:'Roboto Mono';font-weight: 300;font-style: normal;font-size: inherit" href="">
              Monica Frulento
            </a>
          </div>
          <h2 class="text-center text-[32px]">
            <a href="https://mooseoom.foxthemes.me/portfolio/strange-room/" style="font-family: inherit;font-weight: 500;">
              Strange room
            </a>
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.img:hover .bg-black {
  opacity: 1;
}
</style>
