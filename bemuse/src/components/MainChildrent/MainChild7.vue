<template>
  <div class="text-left ml-[6px]">
    <p
      class="text-left font-[16px] text-black"
      style="
        letter-spacing: 0.32px;
        font-weight: 400;
        font-family: 'Roboto Mono';
        line-height: 1.86;
      "
    >
      Testimonials
    </p>
    <h2
      class="text-black font-bold"
      style="font-size: 50px; font-family: 'Crimson Text'; letter-spacing: 1px"
    >
      What People Say About Us
    </h2>
    <div class="wrap">
      <div class="wrapper">
        <div class="carousel-container" @mousedown="startDrag" 
          @mousemove="handleDrag" 
          @mouseup="endDrag" 
          @mouseleave="endDrag">
          <ul class="carousel" ref="carousel">
            <li class="card" v-for="(item, index) in items" :key="index">
              <div class="respon"
             
              >
                <h6
                  class="mt-0 font-[16px]"
                  style="
                    font-family: 'Crimson Text';
                    font-weight: 700;
                    letter-spacing: 0.64px;
                    color: #000000;
                    font-style: normal;
                    
                  "
                >
                  {{ item.item }}
                </h6>
              </div>
              <div></div>
              <div
                class="img"
                style="
                  display: flex;
                  justify-content: flex-start;
                  align-items: flex-end;
                "
              >
                <img :src="item.src" alt="" />
                <div class="text-center" style="margin-top: 5px">
                  <h2
                    class="text-black"
                    style="
                      font-family: 'Crimson Text';
                      font-weight: bold;
                      letter-spacing: 0.64px;
                      color: #000000;
                      font-style: normal;
                      font-size: 25px;
                    "
                  >
                    {{ item.author }}
                  </h2>
                  <p
                    style="
                      font-weight: bold;
                      color: black;
                      font-family: 'Roboto Mono';
                      font-size: 14px;
                      line-height: 1.86;
                      letter-spacing: 0.28px;
                      font-style: normal;
                      color: black;
                    "
                  >
                    {{ item.position }}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const items = ref([
  {
    src: "/src/views/img/museum_of_cham_sculpture.jpg",
    item: '"We were fortunate enough to attend the opening reception of a landscape exhibit. What an experience to meet the artists."',
    author: "Norma Jean Thomas",
    position: "Visitor / Curator",
  },
  {
    src:"/src/views/img/testimonaial-image_1.png",
    item:'"My experience with MooM gallery has been truly delightful. Preparation for the exhibition was done very smoothly..."',
    author:"Steve Buschemi",
    position:"Artist / Curator"
  },
  {
    src:"/src/views/img/testimonaial-image_1.png",
    item:'"I am very grateful to The MooM Gallery for representing my work in NY. Its wonderful staff have so much joy for the new pieces."',
    author:"Karla Moneco",
    position:"Artist / Curator"
  },
  {
    src:"/src/views/img/member-2-150x150-1.jpg",
    item:'"I am very grateful to The MooM Gallery for representing my work in NY. Its wonderful staff have so much joy for the new pieces."',
    author:"Karla Moneco",
    position:"Artist / Curator"
  }
  // Add other items as needed
]);
const dragData={
    isDragging:false,
    startPosition:0,
    dragOffset:0,
}
const startDrag=(event)=>{
    dragData.isDragging=true;
    dragData.startPosition=event.clientX;
}
const handleDrag=(event)=>{
    if(!dragData.isDragging)return;
    dragData.dragOffset=event.clientX-dragData.startPosition;
    carousel.value.style.transform=`translateX(-${
    (currentIndex * (100 / items.value.length) + dragData.dragOffset * 0.1) %
    100
  }%)`;
}
const endDrag=()=>{
    if(!dragData.isDragging)return;
    dragData.isDragging=false;
    currentIndex=Math.floor((currentIndex - dragData.dragOffset * 0.1 + items.value.length) %
      items.value.length);
      
  carousel.value.style.transition = "transform 0.5s ease-in-out";
  carousel.value.style.transform = `translateX(-${
    currentIndex * (100 / items.value.length)
  }%)`;
}
const autoplayInterval = 2500;
let currentIndex = 0;
const carousel = ref(null);
const startAutoplay = () => {
  setInterval(() => {
    if (carousel.value) {
      currentIndex = (currentIndex + 1) % (items.value.length + 1);

      if (currentIndex === items.value.length) {
        // Nếu currentIndex là mục giả ở cuối danh sách, chuyển đến vị trí đầu tiên ngay lập tức
        carousel.value.style.transition = "none";
        currentIndex = -2; // Chuyển về vị trí đầu tiên trong danh sách
       carousel.value.style.transform = `translateX(${
    -currentIndex.value * (100 / items.value.length)
  }%)`;
        // Force reflow before setting the transition back
        void carousel.value.offsetWidth;
      } else {
        const screenWidth = window.innerWidth;
        if(screenWidth<=500){
           carousel.value.style.transition = "transform 0.5s ease-in-out";
        carousel.value.style.transform = `translateX(-${
          currentIndex * (400 / items.value.length)
        }%)`;
        
        }else{
 carousel.value.style.transition = "transform 0.5s ease-in-out";
        carousel.value.style.transform = `translateX(-${
          currentIndex * (200 / items.value.length)
        }%)`;
        }
       
      }
    }
  }, autoplayInterval);
};

onMounted(() => {
  startAutoplay();
});


</script>

<style scoped>
.card .img img {
  width: 63px;
  height: 63px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 20px;
}

.wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 56vh;
  padding: 0 35px;
}

.wrapper .carousel-container {
  width: 100%;
  overflow: hidden;
}

.wrapper .carousel {
  display: flex;
  gap: 16px;
 
  transition: transform 0.5s ease-in-out;
}

.wrapper {
  max-width: 1100px;
  width: 100%;
}

.carousel .card {
  flex: 0 0 calc((100% / 2) - 12px);
  height: 342px;
  background: #fff;
  border-radius: 8px;
  display: flex;
  align-items: self-start;
  justify-content: center;
  flex-direction: column;
}
.respon{
     width:487px;
                height:133px;
                  border: 1px solid black;
                  padding: 27px 35px;
                  margin-bottom: 20px;
                  margin-top: 10px;
                  box-sizing:border-box
}
@media (max-width: 320px) {
  .carousel .card {
    flex: 0 0 calc((100% / 1) - 12px);
    height: 342px;
    background: #fff;
    border-radius: 8px;
    display: flex;
    align-items: self-start;
    justify-content: center;
    flex-direction: column;
  }
  .respon {
    padding: 30px;
    width: 487px;
    height: 133px;
    padding: 30px;
  }
}
@media (max-width: 400px) {
 
}
@media (max-width: 500px) {
  .respon[data-v-de3420e0] {
    width: 342px;
    height: 112px;
    border: 1px solid black;
    padding: 17px;
    margin-bottom: 20px;
    margin-top: 10px;
   
}
}
</style>
