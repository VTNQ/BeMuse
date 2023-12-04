<template>
  <div class="text-left">
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
        <div class="carousel-container">
          <ul class="carousel" ref="carousel">
            <li class="card" v-for="(item, index) in items" :key="index">
              <div
                style="
                  border: 1px solid black;
                  padding: 27px 35px;
                  margin-bottom: 20px;
                  margin-top: 10px;
                "
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
                  justify-content: center;
                  align-items: center;
                "
              >
                <img :src="item.src" alt="" />
                <div class="text-center" style="margin-top: 5px">
                  <h2 class="text-black">author</h2>
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
  },
  // Add other items as needed
]);

const autoplayInterval = 2500;
let currentIndex = 0;
const carousel = ref(null);

const startAutoplay = () => {
  setInterval(() => {
    if (carousel.value) {
      currentIndex = (currentIndex + 1) % items.value.length;
      carousel.value.style.transition = "transform 0.5s ease-in-out";
      carousel.value.style.transform = `translateX(-${
        currentIndex * (100 / items.value.length)
      }%)`;

      // Reset transition after the animation is complete
      setTimeout(() => {
        carousel.value.style.transition = "none";
      }, 500);
    }
  }, autoplayInterval);
};

onMounted(() => {});
</script>

<style scoped>
.card .img img {
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 50%;
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
  overflow: hidden;
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
</style>
