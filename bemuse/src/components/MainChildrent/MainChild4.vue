<script setup>

</script>

<template>
<div>
    <div class="container bg-white  pt-[120px] w-full min-h-[441px]">
        <div class="h-full w-full  grid grid-cols-2 pr-7">
            <div class="bg-white ">
                <div class="context pl-7 mt-[10%] pr-5">
                    <h1 class="text-black font-light mb-4 text-[18px] focus:outline-none" style="font-family: 'Roboto Mono';letter-spacing:.32px">Nov 29 - Dec 16</h1>
                    <h1 class="text-black font-semibold mb-4 text-[35px]  focus:outline-none" style="font-family: 'Hedvig Letters Serif';letter-spacing:.32px">Van Gogh Retrospective</h1>
                    <p class="text-black font-light text-[14px] focus:outline-none w-[70%] mb-10" style="font-family: 'Roboto Mono';letter-spacing:.32px" >Vincent Willem van Gogh was a Dutch post-Impressionist painter whose work had far-reaching influence on 20th-century art. His paintings include portraits, self portraits, landscapes...</p>
                    <button class="button hover:bg-opacity-50 transition duration-300 ease-in-out bg-white hover:bg-white text-black font-normal py-2 px-4  mr-2 text-[1.1rem] bg-transparent border-black border-[1px] w-[220px] h-[50px]"  style="font-family: 'Roboto Mono';letter-spacing:.32px">BUY TICKETS</button>

                </div>


            </div>
            <div class="box-img w-full">
                <img
            src="/src/views/img/starryNight.jpg"
            class="w-full h-full object-cover"
          />
            </div>

        </div>
    </div>
</div>
</template>

<style scoped>
@media (max-width: 981px){
    .box-img{
        width: 400px;
        height: 300px;
        margin-top: 50px;
    }
    .button{
        margin-bottom: 2%;
    }
    /* .grid {
    display: flex;
    flex-direction: column;
  } */
}
@media (max-width: 801px){
    .box-img{
        width: 97vw;
        height: auto;
        margin-top: 50px;
        order: -1;
        padding-left: 3%;
    }
    .grid {
    display: flex;
    flex-direction: column;
  }
  .container{
    padding-top: 0;
    margin-bottom: 3%;
  }
  .context p{
    width: 90vw;
    
  }
  
}
</style>
