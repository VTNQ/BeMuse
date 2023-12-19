<template>
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
    <child/>
    <div class="w-full -z-10 h-screen relative">
      
      <img src="/src/views/img/blog1.avif" alt="" class="absolute w-full h-[700px] object-cover">
      <h6 style="font-family: 'Roboto Mono'; letter-spacing: 0.36px" class="textTitle text-white absolute top-[300px]  text-[3rem] font-bold left-[47%]">Blogs</h6>
    
  </div>
    <div style="padding:100px 0 70px">
      <div class="w-[100%] max-w-[1200px] px-[15px] mx-auto respon" >
        <div class="flex flex-wrap mx-[-15px]">
          <div  style="-webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;">
    <div class="relative  flex flex-wrap mr-[-15px] ml-[-15px] " id="responsive" :style="{ height: paginationContainerHeight}">
      <div class="absolute left-0 top-0 mb-[30px] grid-cols-3 grid grid-template" style="grid-gap: 30px;">
        <div :class="col-span-1" v-for="(item, index) in items"
                :key="index" class="bg-white pass"  >
          <div :style="{ backgroundImage: 'url(' + item.src + ')', paddingTop: 'calc(100%/4*3)', backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '277px' }">
    <img :src="item.src" style="width: 277px;
    height:369px;
    opacity: 0;" alt="">
    </div>
    <div class="p-[23px] white-big">
      <div>
        <a href="" class="text-[13px] mb-[14px] inline-block" style="line-height: 1.3;color:black;font-family: 'Roboto Mono';
    font-weight: 300;">
          <i class="ion-clock inline-block mr-[15px]"></i>
          Nov 21
        </a>
      </div>
    <a href="https://mooseoom.foxthemes.me/realism-and-impressionism/"
   class="text-[25px] font-bold mb-[15px] inline-block max-w-[100%]"
   style="line-height: 1.25; color: black; transition: all .3s ease; white-space: normal; word-wrap: break-word;font-family:'Crimson Text,sans-serif';">
   {{item.item}}
</a>
<div class="mb-[20px]" style="line-height: 1.6;white-space: normal; word-wrap: break-word;">
  <p class="mb-0" style="font-family: 'Roboto Mono';
    font-weight: 300;
    font-size: 14px;
    line-height: 1.86;
    letter-spacing: 0.28px;
    color: #000000;
    font-style: normal;white-space: normal; word-wrap: break-word;">{{item.content}}</p>
</div>
<div class="text-white flex items-center font-bold" style="font-size:13px;font-family: 'Roboto Mono'">
<img :src="item.author" class="my-[10px] mr-[15px] h-[40px]" style="border-radius: 50%;" alt="">
<h1 class="text-black">{{item.authorcontent }}</h1>
</div>
    </div>
        </div>
      </div>
    </div>
    </div>
        </div>
      </div>
    </div>
   
<div   class="pagination-container text-center mt-4">
  <button @click="prevPage" :disabled="currentPage === 1" class="pagination-button">Previous</button>
  <span class="pagination-info">{{ currentPage }} / {{ totalPages }}</span>
  <button @click="nextPage" :disabled="currentPage === totalPages" class="pagination-button">Next</button>
</div>
 <div class="grid grid-rows-2 w-full" style="background-color: black;
    padding-top: 130px;
    padding-left: 130px;margin-top:16px">
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
<div class="flex h-min-[30%] justify-between px-[20%] mt-20 mb-8 last-footer">
        <h1 class="text-white font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Support Privacy</h1>
        <h1 class="text-white font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Cookie Policy</h1>
        <h1 class="text-white font-light text-[1rem]" style="font-family: 'Roboto Mono';letter-spacing:.36px">Manage Cookies</h1>
      </div>

</div>
  </div>
  
</template>
<script>
import { ref, onMounted, computed } from "vue";

import child from "/src/components/secondary_navbar.vue";


export default {
  components: {
    child,
   
  },
  setup() {
    const itemsPerPage=10;
    const currentPage=ref(1);
    const items = ref([
      {
        src: "/src/views/img/blog1a1.png",
        item: "Realism And Impressionism",
        content:
          "Edgar Degas, in full Hilaire-Germain-Edgar De Gas, De Gas later spelled Degas, (born July 19, 1834, Paris, France—died September 27, 1917, Paris), French painter, sculptor, and printmaker who",
        author: "/src/views/img/member-5-150x150-1-60x60.jpg",
        authorcontent: "by Victor Alfon",
        link: "https://mooseoom.foxthemes.me/realism-and-impressionism/",
      },
      {
        src: "/src/views/img/img-17-1-1.jpg",
        item: "The Dancers",
        content:
          "Henri de Toulouse-Lautrec, in full Henri-Marie-Raymonde de Toulouse-Lautrec-Monfa, (born November 24, 1864, Albi, France—died September 9, 1901, Malromé), French artist who",
        author: "/src/views/img/member-1-150x150-1-60x60.jpg",
        authorcontent: "by Lola Rossan",
        link: "https://mooseoom.foxthemes.me/realism-and-impressionism/",
      },
      {
        src: "/src/views/img/img-16-1-1-739x1024.jpg",
        item: "In The Loge",
        content:
          "Juan Gris was born José Victoriano Carmelo Carlos González-Pérez in Madrid on March 23, 1887. He studied mechanical drawing at the Escuela de Artes",
        author: "/src/views/img/member-7-1-60x60.jpg",
        authorcontent: "by Krista Lone",
        link: "https://mooseoom.foxthemes.me/realism-and-impressionism/",
      },
      {
        src: "/src/views/img/img-12-1-1.jpg",
        item: "Portrait Drawings",
        content:
          "Hendrik Johannes Haverman (23 October 1857, Amsterdam – 11 August 1928, The Hague) was a Dutch artist; known primarily for his portrait drawings.",
       author: "/src/views/img/member-1-150x150-1-60x60.jpg",
        authorcontent: "by Lola Rossan",
        link: "https://mooseoom.foxthemes.me/realism-and-impressionism/",
      },
      {
         src: "/src/views/img/img-11-1.jpeg",
        item: "Both Members Of This Club",
        content:
          "Painted in October 1909, the remarkably expressive and dynamic Both Members of This Club is the third and largest of George Bellows’s early prizefighting subjects.",
       author: "/src/views/img/member-5-150x150-1-60x60.jpg",
        authorcontent: "by Victor Alfon",
        link: "https://mooseoom.foxthemes.me/realism-and-impressionism/",
      },
      {
        src: "/src/views/img/img-14-1-1-728x1024.jpg",
        item: "How To Select Portrait Artists",
        content:
          "There are several options for having a portrait painted. A common shortcut is sending a photo to a portrait artist who then reproduces the photo as a painting.",
       author: "/src/views/img/member-6-293x300-1-60x60.jpg",
        authorcontent: "by Greg Breathless",
        link: "https://mooseoom.foxthemes.me/realism-and-impressionism/",
      },
      {
        src: "/src/views/img/img-18-1-1.jpg",
        item: "Kynance",
        content:
          "John Brett ARA (8 December 1831 – 7 January 1902) was an artist associated with the Pre-Raphaelite movement, mainly notable for his highly detailed landscapes.",
        author: "/src/views/img/member-5-150x150-1-60x60.jpg",
        authorcontent: "by Victor Alfon",
        link: "https://mooseoom.foxthemes.me/realism-and-impressionism/",
      },
      {
        src: "/src/views/img/img-10-1-1-745x1024.jpg",
        item: "Ventriloquist and Crier",
        content:
          "Watercolor and transferred printing ink on paper, bordered with ink, mounted on cardboard.  Imaginary beasts float within a transparent ventriloquis",
        author: "/src/views/img/member-6-293x300-1-60x60.jpg",
        authorcontent: "by Greg Breathless",
        link: "https://mooseoom.foxthemes.me/realism-and-impressionism/",
      },
      {
        src: "/src/views/img/img-13-1-1.jpg",
        item: "Ventriloquist and Crier",
        content:
          "Klee is known for his simple stick figures, suspended fish, moon faces, eyes, arrows, and quilts of color, which he orchestrated into fantastic",
       author: "/src/views/img/member-7-1-60x60.jpg",
        authorcontent: "by Krista Lone",
        link: "https://mooseoom.foxthemes.me/realism-and-impressionism/",
      },
      {
        src: "/src/views/img/img-9-1-1-764x1024.jpg",
        item: "Ventriloquist and Crier",
        content:
          "Astrological Fantasy Portrait is a gouache painting created by Paul Klee in 1924. It lives at the Metropolitan Museum",
       author: "/src/views/img/member-1-150x150-1-60x60.jpg",
        authorcontent: "by Lola Rossan",
        link: "https://mooseoom.foxthemes.me/realism-and-impressionism/",
      },
      {
        src: "/src/views/img/img-9-1-1-764x1024.jpg",
        item: "Ventriloquist and Crier",
        content:
          "Astrological Fantasy Portrait is a gouache painting created by Paul Klee in 1924. It lives at the Metropolitan Museum",
       author: "/src/views/img/member-1-150x150-1-60x60.jpg",
        authorcontent: "by Lola Rossan",
        link: "https://mooseoom.foxthemes.me/realism-and-impressionism/",
      },
      {
        src: "/src/views/img/img-9-1-1-764x1024.jpg",
        item: "Ventriloquist and Crier",
        content:
          "Astrological Fantasy Portrait is a gouache painting created by Paul Klee in 1924. It lives at the Metropolitan Museum",
       author: "/src/views/img/member-1-150x150-1-60x60.jpg",
        authorcontent: "by Lola Rossan",
        link: "https://mooseoom.foxthemes.me/realism-and-impressionism/",
      },
      
      {
        src: "/src/views/img/img-9-1-1-764x1024.jpg",
        item: "Ventriloquist and Crier",
        content:
          "Astrological Fantasy Portrait is a gouache painting created by Paul Klee in 1924. It lives at the Metropolitan Museum",
       author: "/src/views/img/member-1-150x150-1-60x60.jpg",
        authorcontent: "by Lola Rossan",
        link: "https://mooseoom.foxthemes.me/realism-and-impressionism/",
      },
      {
        src: "/src/views/img/img-9-1-1-764x1024.jpg",
        item: "Ventriloquist and Crier",
        content:
          "Astrological Fantasy Portrait is a gouache painting created by Paul Klee in 1924. It lives at the Metropolitan Museum",
       author: "/src/views/img/member-1-150x150-1-60x60.jpg",
        authorcontent: "by Lola Rossan",
        link: "https://mooseoom.foxthemes.me/realism-and-impressionism/",
      },
      {
        src: "/src/views/img/img-9-1-1-764x1024.jpg",
        item: "Ventriloquist and Crier",
        content:
          "Astrological Fantasy Portrait is a gouache painting created by Paul Klee in 1924. It lives at the Metropolitan Museum",
       author: "/src/views/img/member-1-150x150-1-60x60.jpg",
        authorcontent: "by Lola Rossan",
        link: "https://mooseoom.foxthemes.me/realism-and-impressionism/",
      },
      {
        src: "/src/views/img/img-9-1-1-764x1024.jpg",
        item: "Ventriloquist and Crier",
        content:
          "Astrological Fantasy Portrait is a gouache painting created by Paul Klee in 1924. It lives at the Metropolitan Museum",
       author: "/src/views/img/member-1-150x150-1-60x60.jpg",
        authorcontent: "by Lola Rossan",
        link: "https://mooseoom.foxthemes.me/realism-and-impressionism/",
      },
        {
          src: "/src/views/img/img-9-1-1-764x1024.jpg",
          item: "Ventriloquist and Crier",
          content:
            "Astrological Fantasy Portrait is a gouache painting created by Paul Klee in 1924. It lives at the Metropolitan Museum",
        author: "/src/views/img/member-1-150x150-1-60x60.jpg",
          authorcontent: "by Lola Rossan",
          link: "https://mooseoom.foxthemes.me/realism-and-impressionism/",
        },
     
      // Add other items as needed
    ]);

    onMounted(() => {
      // Your existing onMounted logic
    });
    const totalPages=computed(()=>Math.ceil(items.value.length/itemsPerPage));
    const diplayedItems=computed(()=>{
      const startIndex=(currentPage.value -1)*itemsPerPage;
      const endIndex=startIndex+itemsPerPage;
      return items.value.slice(startIndex,endIndex);
    });
    
const paginationContainerHeight = computed(() => {
  const fixedHeight = 2000;
  const item10=2639; 
  const item1=558;// Set the fixed height for 6 items
  const itemHeight = 369; // Adjust the height based on your item height
  const marginBetweenItems = 20; // Adjust the margin/padding between items
const height1=3444;
const height2=3478;
const height3=3580;
const height4=3811;
const height5=7323;
const heigth6=7105;
const heigth7=6950;
const heigth8=6775;
const heigth9=6686;
const heigth10=6618;
const heigth11=6787;
const heigth12=6820;
const heigth13=7136;
const heigth14=7222;
  const screenWidth = window.innerWidth;
  if (diplayedItems.value.length === 9 || diplayedItems.value.length===8 ||  diplayedItems.value.length===7) {
    return fixedHeight + "px";
  } else if(diplayedItems.value.length==10){
    if(screenWidth<=958 && screenWidth>718){
return height1+"px";
    }else if(screenWidth<=718 && screenWidth>653){
      return height2+"px";
    }else if(screenWidth<=653 && screenWidth>615){
      return height3+"px";
    }else if(screenWidth<=615 && screenWidth>572){
  return height4+"px";
    }else if(screenWidth<=572 && screenWidth>517){

    return height5+"px";
    }else if(screenWidth<=517 && screenWidth>500){
       return heigth6+"px";
    }else if (screenWidth<=500 && screenWidth>462){
      return heigth7+"px";
    }else if (screenWidth<=462 && screenWidth>440){
      return heigth8+"px";
    }else if (screenWidth<=440 && screenWidth>416){
      return heigth9+"px";
    }else if (screenWidth<=416  && screenWidth>376){
      return heigth10+"px";
    }else if (screenWidth<=376  && screenWidth>356){
      return heigth11+"px";
    }else if (screenWidth<=356  && screenWidth>330){
      return heigth12+"px";
    }else if (screenWidth<=330 && screenWidth>310){
      return heigth13+"px";
    }else if (screenWidth<=310 && screenWidth>300){
      return heigth14+"px";
    }else{
      return item10 + "px";
    }
    
  }else if(diplayedItems.value.length==1 || diplayedItems.value.length==2 || diplayedItems.value.length==3){
    return item1 +"px";
  }
  
});
    const nextPage=()=>{
      if(currentPage.value<totalPages.value){
        currentPage.value++;
      }
    }
    
    const prevPage=()=>{
      if(currentPage.value>1){
        currentPage.value--;
      }
    }
    
    onMounted(()=>{

    });
    return {
      items:diplayedItems,
      nextPage,
      prevPage,
      currentPage,
      totalPages,
      paginationContainerHeight,
    };
  },
};
</script>

<style scoped>
.pagination-container {
  margin-top: 20px;
}
.pass{
  box-shadow: rgba(0, 0, 0, 0.09) 0px 10px 50px 0px;
    max-width: 53vh;
}
.textTitle{
    -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}
.pagination-button {
  padding: 8px 16px;
  margin: 0 5px;
  font-size: 14px;
  background-color: #007bff;
  color: #fff;
  border: 1px solid #007bff;
  border-radius: 4px;
  cursor: pointer;
}

.pagination-button:disabled {
  background-color: #d1d1d1;
  color: #777;
  border: 1px solid #d1d1d1;
  cursor: not-allowed;
}

.pagination-info {
  margin: 0 10px;
  font-size: 14px;
  color: #333;
}
.grid-repon,.grid-text,.grid-foo,.last-footer{
  transition: all eas 2s;
}
.title{
    color: white;
    font-size: 1.2rem;
    font-weight: 700;
    font-family: 'Hedvig Letters Serif';
    letter-spacing: 0.36;
    margin-bottom: 10px;
}
@media only screen and (max-width:320px){
  .grid-repon{
    grid-template-columns: repeat(1, minmax(0, 1fr));
    margin-top: 106px;
  }
  .grid-text{
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .grid-foo{
    justify-content: flex-start;
  }
 .last-footer{
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 0px;
  padding-right: 20%;
  margin-top: 0px;
 }
}
@media only screen and (min-width:321px) and (max-width:480px){
  .grid-repon{
    grid-template-columns: repeat(1, minmax(0, 1fr));
    margin-top: 9px;
  }
  
  .grid-text{
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .grid-foo{
    justify-content: flex-start;
  }
 .last-footer{
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 0px;
  padding-right: 20%;
  margin-top: 0px;
 }
 .img-auto{
    width: 12%;
  }
}
@media only screen and (min-width:481px) and (max-width:600px){
  .grid-repon{
    grid-template-columns: repeat(1, minmax(0, 1fr));
  
  }
  .grid-text{
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .grid-foo{
    justify-content: flex-start;
  }
 .last-footer{
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 0px;
  padding-right: 20%;
  margin-top: 0px;
 }
 .img-auto{
    width: 12%;
  }
}
@media only screen and (min-width:601px) and (max-width:821px){
  .grid-repon{
    grid-template-columns: repeat(1, minmax(0, 1fr));
    margin-top: 9px;
  }
  
  .grid-text{
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .grid-foo{
    justify-content: flex-start;
  }
 .last-footer{
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 0px;
  padding-right: 20%;
  margin-top: 0px;
 }
 .img-auto{
    width: 12%;
  }
}
@media only screen and (min-width:803px) and (max-width:895px){
  .grid-repon{
    grid-template-columns: repeat(2, minmax(0, 1fr));
  
  }
  .grid-text{
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .grid-foo{
    justify-content: flex-start;
  }
 .last-footer{
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 0px;
  padding-right: 20%;
  margin-top: 0px;
 }
}
@media only screen and (min-width:895px) and (max-width:949px){
  .grid-repon{
    grid-template-columns: repeat(2, minmax(0, 1fr));
  
  }
  .grid-text{
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .grid-foo{
    justify-content: flex-start;
  }
 .last-footer{
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 0px;
  padding-right: 20%;
  margin-top: 0px;
 }
}
@media only screen and (min-width:1134px) and (max-width:1267px){
  .respon{
    padding-left: 59px;
  }
}

</style>
