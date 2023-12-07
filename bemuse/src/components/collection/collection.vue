<template>
  <div class="collectionMain" @scroll="handleScroll">
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
    <div class="w-full h-screen relative">
      <img
        class="object-cover h-[90%] w-full"
        src="/src/views/img/pic-museum4.jpg"
        alt=""
      />
      <div
        class="overlay h-[90%] absolute inset-0 bg-black opacity-50 z-[2]"
      ></div>
      <h1
        class="text-black font-bold text-[3rem] absolute top-[42%] left-[42%]"
        style="font-family: 'Hedvig Letters Serif'; letter-spacing: 0.36px"
      >
        Collection
      </h1>
    </div>
    <div class="min-h-[30wh] w-full bg-white px-[13%]">
      <div class="h-full w-full bg-white text-justify text">
        <h1
          class="text-black font-normal text-[1rem] pt-4"
          style="font-family: 'Roboto Mono'; letter-spacing: 0.36px"
        >
          Learn a thing or two
        </h1>
        <h2
          class="text-black font-light text-[3.5rem] mt-2"
          style="font-family: 'Hedvig Letters Serif'; letter-spacing: 0.4px"
        >
          About Our Collection
        </h2>
        <p
          class="text-black font-light text-[1rem]"
          style="font-family: 'Roboto Mono'; letter-spacing: 0.36px"
        >
          Each piece in the MooM’s collections holds a unique message and style
          to be considered by the viewer, offering a historical reference to the
          diversity of art within the present time.This is truly a growing
          tribute to the talent and creativity we find in our midst.
        </p>
      </div>
    </div>

    <div class="cate bg-white h-[15vh] mx-[20vw] pt-9">
      <ul class="cursor-pointer flex justify-center space-x-16">
        <!-- Sử dụng v-on:click để thiết lập bộ lọc và v-bind:class để thêm class 'active' -->
        <li
          class="text-black font-medium text-[1rem] inline-block"
          :class="{ 'font-bold': filter === 'all' }"
          @click="setFilter('all')"
          style="font-family: 'Roboto Mono'; letter-spacing: 0.36px"
        >
          Filter
        </li>
        <li
          class="text-black font-medium text-[1rem] inline-block"
          :class="{ 'font-bold': filter === 'painting' }"
          @click="setFilter('painting')"
          style="font-family: 'Roboto Mono'; letter-spacing: 0.36px"
        >
          Paintings
        </li>
        <li
          class="text-black font-medium text-[1rem] inline-block"
          :class="{ 'font-bold': filter === 'sculpture' }"
          @click="setFilter('sculpture')"
          style="font-family: 'Roboto Mono'; letter-spacing: 0.36px"
        >
          Sculptures
        </li>
        <li
          class="text-black font-medium text-[1rem] inline-block"
          :class="{ 'font-bold': filter === 'drawing' }"
          @click="setFilter('drawing')"
          style="font-family: 'Roboto Mono'; letter-spacing: 0.36px"
        >
          Drawings
        </li>
        <!-- Lặp lại cho mỗi liên kết bộ lọc -->
      </ul>
    </div>
    <div class="">
      <div class="mx-auto p-4">
        <div class="masonry-grid">
          <div
            v-for="artwork in filteredArtworks"
            :key="artwork.id"
            class="masonry-item mb-4"
            :class="{ active: isZoomed(artwork) }"
          >
            <img
              :src="artwork.image"
              :alt="artwork.title"
              class="w-full h-auto"
            />
            <h3
              class="text-black font-light text-[1rem] mt-3"
              style="font-family: 'Roboto Mono'; letter-spacing: 0.36px"
            >
              {{ artwork.type }}
            </h3>
            <h4
              class="text-black font-semibold text-[1.75rem] mt-1"
              style="
                font-family: 'Hedvig Letters Serif';
                letter-spacing: 0.36px;
              "
            >
              {{ artwork.title }}
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.collectionMain {
  overflow-y: auto;
  height: 100vh;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black; /* Màu của lớp phủ */
  opacity: 0.3; /* Điều chỉnh độ trong suốt của lớp phủ */
  z-index: 2; /* Đảm bảo lớp phủ nằm trên hình ảnh */
}

.masonry-grid {
  column-count: 4;
  column-gap: 4rem;
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 3.5rem;
}

.masonry-item img {
  width: 100%;
  height: auto;
}
@media (max-width: 925px) {
  .masonry-grid {
    column-count: 3;
    column-gap: 3rem;
    margin-right: 2rem;
  }

  .masonry-item {
    break-inside: avoid;
    margin-bottom: 3rem;
  }

  .masonry-item img {
    width: 100%;
    height: auto;
  }
}
@media (max-width: 783px) {
  .masonry-grid {
    
    margin-right: 4rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  p {
    font-size: 0.75rem;
  }
}
@media (max-width: 745px) {
  .masonry-grid {
    
    margin-right: 6rem;
  }
  
}
@media (max-width: 689px) {
  .masonry-grid {
    
    margin-right: 8rem;
  }
  
}

@media (max-width: 609px) {
  .masonry-grid {
    column-count: 2;
    column-gap: 3rem;
    margin-right: 4rem;
  }

  .masonry-item {
    break-inside: avoid;
    margin-bottom: 3rem;
  }

  .masonry-item img {
    width: 100%;
    height: auto;
  }
  li {
    font-size: 0.75rem;
  }
}
@media (max-width: 557px) {
  .masonry-grid {
    column-count: 2;
    column-gap: 3rem;
    margin-right: 1rem;
  }
  h2 {
    font-size: 2rem;
  }
  .cate {
    width: 60%;
  }
  li {
    font-size: 0.5rem;
  }
}
@media (max-width: 456px) {
  h1 {
    font-size: 0.7rem;
  }
  h2 {
    font-size: 1.5rem;
  }
  p {
    font-size: 0.6rem;
  }
  .cate {
    width: 100vw;
    margin: 0;
  }
  li {
    font-size: 0.5rem;
  }
}
@media (max-width: 412px) {
  .masonry-grid {
    column-count: 1;
    column-gap: 3rem;
  }

  .masonry-item {
    break-inside: avoid;
    margin-bottom: 3rem;
  }

  .masonry-item img {
    width: 100%;
    height: auto;
  }
}
.zoomed-in {
  transform: scale(0.5); /* Phóng to 10% */
  transition: transform 0.3s ease; /* Thêm hiệu ứng chuyển đổi mượt mà */
}
.grow {
  transform: scale(0.5); /* Bắt đầu từ kích thước nhỏ hơn */
  transition: transform 0.4s ease; /* Hiệu ứng chuyển đổi mượt mà trong 0.4 giây */
}

.grow.active {
  transform: scale(1); /* Chuyển đến kích thước bình thường */
}
</style>
<script>
import { ref, computed } from "vue";

import child from "/src/components/secondary_navbar.vue";


export default {
  components: {
    child,
  },
  
  setup() {
    const artworks = ref([
      // Giả sử mỗi tác phẩm có một trường 'category' để lọc
      {
        id: 1,
        image: "/src/views/img/collection1.jpg",
        type: "art, artist,Honore Daumier",
        title: "Dinner of people",
        category: "painting",
      },
      {
        id: 1,
        image: "/src/views/img/collection2.jpg",
        type: "art, artist,Honore Daumier",
        title: "Mount peace",
        category: "sculpture",
      },
      {
        id: 1,
        image: "/src/views/img/collection3.jpg",
        type: "art, artist,Honore Daumier",
        title: "whistle",
        category: "drawing",
      },
      {
        id: 1,
        image: "/src/views/img/collection4.jpg",
        type: "art, artist,Honore Daumier",
        title: "Hourse war",
        category: "drawing",
      },
      {
        id: 1,
        image: "/src/views/img/collection5.jpg",
        type: "art, artist,Honore Daumier",
        title: "Enjoy art space",
        category: "painting",
      },
      {
        id: 1,
        image: "/src/views/img/collection6.jpg",
        type: "art, artist,Honore Daumier",
        title: "Tsunamy",
        category: "drawing",
      },
      {
        id: 1,
        image: "/src/views/img/collection7.jpg",
        type: "art, artist,Honore Daumier",
        title: "NightFall",
        category: "painting",
      },
      {
        id: 1,
        image: "/src/views/img/collection8.jpg",
        type: "art, artist,Honore Daumier",
        title: "Enjoy art space",
        category: "painting",
      },
      {
        id: 1,
        image: "/src/views/img/collection9.jpg",
        type: "art, artist,Honore Daumier",
        title: "Maria mama",
        category: "drawing",
      },
      {
        id: 1,
        image: "/src/views/img/collection10.jpg",
        type: "art, artist,Honore Daumier",
        title: "Lonely tree",
        category: "painting",
      },
      {
        id: 1,
        image: "/src/views/img/collection11.jpg",
        type: "art, artist,Honore Daumier",
        title: "Sunset",
        category: "drawing",
      },
      {
        id: 1,
        image: "/src/views/img/collection12.jpg",
        type: "art, artist,Honore Daumier",
        title: "Field",
        category: "painting",
      },
      {
        id: 1,
        image: "/src/views/img/collection13.jpg",
        type: "art, artist,Honore Daumier",
        title: "Dancing",
        category: "sculpture",
      },
      {
        id: 1,
        image: "/src/views/img/collection14.jpg",
        type: "art, artist,Honore Daumier",
        title: "Kyos God",
        category: "sculpture",
      },
      // Thêm các tác phẩm khác tương t
    ]);
    const filter = ref("all");
    const showAnimation = ref(false);

    const setFilter = (category) => {
      filter.value = category;
    };
    const isZoomed = (artwork) => {
      return filter.value === artwork.category;
    };

    const filteredArtworks = computed(() => {
      if (filter.value === "all") {
        return artworks.value;
      }
      return artworks.value.filter(
        (artwork) => artwork.category === filter.value
      );
    });

    return {
      artworks,
      filter,
      setFilter,
      filteredArtworks,
      isZoomed,
    };
  },
};
</script>
