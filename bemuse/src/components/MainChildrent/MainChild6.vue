<script setup>

</script>

<template>
<div>
    <div class="flex bg-white items-center justify-center">
        <div class="min-w-[500px] flex flex-col  justify-center h-[100px] bg-white text-center" >
            <h1 class=" text-black font-normal text-[1.2rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Pricing plans</h1>
            <h1 class="title text-black font-semibold text-[3rem]" style="font-family: 'Hedvig Letters Serif';letter-spacing:.36px">Subcribe For Membership</h1>
        </div>
    </div>
    <div class="cpntainerChild bg-white relative min-h-screen w-full mt-11">
        <div class="grid bg-white min-h-screen mx-7 pb-36  grid-cols-3 gap-5 ">
            <div class="bg-white my-6 border-black border-[1px] overflow-hidden">
                <div class="bg-white mx-5 h-full text-center">
                    <h1 class="text-black font-light text-[1rem] mt-6" style="font-family: 'Roboto Mono';letter-spacing:.36px">Student Pack</h1>
                    <h1 class="text-black font-light text-[3rem] mt-1" style="font-family: 'Hedvig Letters Serif';letter-spacing:.36px">$138</h1>
                    <div class="leading-[3rem] mt-2 pb-16">
                        <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">All year entrance </p>
                        <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Courses and lectures</p>
                        <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Guided Exhibitions</p>
                        <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Fine art clinic</p>
                    </div>
                    <a class="button relative bg-white hover:bg-opacity-50 text-black font-normal py-3 px-12   text-[1.1rem]  border-black border-[0.5px] w-[220px] h-[50px]"  style="font-family: 'Roboto Mono';letter-spacing:.32px" href="">BUY TICKETS</a>
                </div>
            </div>
            <div class="bg-black border-white border-[1px] overflow-hidden">
                <div class="bg-black mx-5 my-12 h-full text-center">
                    <h1 class="text-white font-light text-[1rem] mt-6" style="font-family: 'Roboto Mono';letter-spacing:.36px">Annual Pack</h1>
                    <h1 class="text-white font-light text-[3.2rem] mt-1" style="font-family: 'Hedvig Letters Serif';letter-spacing:.36px">$238</h1>
                    <div class="leading-[3rem] mt-2 pb-14">
                        <p class="text-white font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Exhibition previews </p>
                        <p class="text-white font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Members lounge access</p>
                        <p class="text-white font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Invitations to talks</p>
                        <p class="text-white font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Regular email newsletters</p>
                    </div>
                    <a class="button relative bg-black hover:bg-opacity-50 text-white font-normal py-3 px-12   text-[1.1rem]  border-white border-[0.5px] w-[220px] h-[50px]"  style="font-family: 'Roboto Mono';letter-spacing:.32px" href="">BUY TICKETS</a>
                </div>
            </div>
            <div class="bg-white my-6 border-black border-[1px] overflow-hidden">
                <div class="bg-white mx-5 h-full text-center">
                    <h1 class="text-black font-light text-[1rem] mt-6" style="font-family: 'Roboto Mono';letter-spacing:.36px">Members Pack</h1>
                    <h1 class="text-black font-light text-[3rem] mt-1" style="font-family: 'Hedvig Letters Serif';letter-spacing:.36px">$338</h1>
                    <div class="leading-[3rem] mt-2 pb-16">
                        <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">FREE unlimited entry </p>
                        <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">10% discount on beverage</p>
                        <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">10% discount at our shop</p>
                        <p class="text-black font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">10% discount on venue</p>
                    </div>
                    <a class="button relative bg-white hover:bg-opacity-50 text-black font-normal py-3 px-12   text-[1.1rem]  border-black border-[0.5px] w-[220px] h-[50px]"  style="font-family: 'Roboto Mono';letter-spacing:.32px" href="">BUY TICKETS</a>
                </div>
            </div>

        </div>
    </div>
</div>
</template>

<style scoped>
@media (max-width: 883px) {
    .grid{
        display: grid;
        flex-direction: column;
    }
    .button{
        padding-right: 1rem;
        padding-left: 1rem;
    }
    
}
@media (max-width: 700px) {
    .grid{
        display: grid;
        grid-template-columns: 1fr;
    }
    .grid{
        padding-bottom: 10%;
    }
    
}
@media (max-width: 590px) {
    .title{
        font-size: 2rem;
    }
    .cpntainerChild{
        padding-right: 1rem;
    }
    .grid{
        padding-bottom: 10%;
    }
}
@media (max-width: 456px) {

    .cpntainerChild{
        padding-right: 70px;
        
    }
    .grid{
        padding-bottom: 10%;
    }
}
@media (max-width: 396px) {

    .cpntainerChild{
        padding-right: 20%;
        
    }
    .grid{
        padding-bottom: 10%;
    }
}
@media (max-width: 378px) {

    .cpntainerChild{
        padding-right: 25%;
        
    }
    .grid{
        padding-bottom: 0;
    }
}
@media (max-width: 352px) {

    .cpntainerChild{
        padding-right: 30%;
        
    }
    .grid{
        padding-bottom: 0;
    }
}
</style>