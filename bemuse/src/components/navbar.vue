<template>
  <div
    class="h-[100vh] w-[28%] bg-black md:fixed md:left-0 md:justify-between responsive-big"
  >
    <div
      class="py-[60px] px-0 flex items-center ml-28 relative justify-start lg"
    >
      <a href="">
        <img
          src="/src/views/img/museum.png"
          width="100"
          class="h-auto max-w-[100%] rounded-none"
          alt=""
        />
      </a>
    </div>
    <div class="top-auto pb-0 h-auto">
      <nav class="h-[92px]">
        <ul
          class="transform -translate-y-[-22] relative top-[50%] overflow-y-auto"
        >
          <div class="relative overflow-hidden h-[100%] max-w-[91%]">
            <div
              class="mr-0 overflow-hidden w-auto h-auto flex flex-col justify-start ml-[114px] menu"
            >
              <li class="relative py-[4px] px-0">
                <a
                  href=""
                  class="text-white font-bold text-[19px] text"
                  style="font-family: 'Roboto Mono'; letter-spacing: 0.32px"
                  >Home</a
                >
                <span
                  class="dropdown-btn"
                  @click="toggleDropdown"
                  style="transition: all 0.3s ease"
                >
                </span>
                <ul
                  v-show="isDropdownOpen"
                  class="relative top-[100%] whitespace-no-wrap submenu"
                  ref="submenu"
                >
                  <li class="pt-[5px] min-w-[200px] relative">
                    <a
                      href=""
                      class="font-bold text-[14px]"
                      style="
                        color: rgba(255, 255, 255, 0.7);
                        font-family: 'Roboto Mono';
                        letter-spacing: 0.28px;
                      "
                      >Home</a
                    >
                  </li>
                  <li class="pt-[5px] min-w-[200px] relative">
                    <a
                      href=""
                      class="text-white font-bold text-[14px]"
                      style="font-family: 'Roboto Mono'; letter-spacing: 0.28px"
                      >Home</a
                    >
                  </li>
                  <li class="pt-[5px] min-w-[200px] relative">
                    <a
                      href=""
                      class="font-bold text-[14px]"
                      style="
                        color: rgba(255, 255, 255, 0.7);
                        font-family: 'Roboto Mono';
                        letter-spacing: 0.28px;
                      "
                      >Home</a
                    >
                  </li>
                </ul>
              </li>
              <li class="relative py-[4px] px-0 mt-3">
                <a
                  href=""
                  class="text-white font-bold text-[19px] text"
                  style="font-family: 'Roboto Mono'; letter-spacing: 0.32px"
                  >Museum</a
                >
                <span
                  class="dropdown-btn1"
                  @click="toggleDropdown1"
                  style="transition: all 0.3s ease"
                >
                </span>
                <ul
                  v-show="isDropdownOpen1"
                  class="relative top-[100%] whitespace-no-wrap submenu"
                  ref="submenu"
                >
                  <li class="pt-[5px] min-w-[200px] relative">
                    <a
                      href=""
                      class="font-bold text-[14px]"
                      style="
                        color: rgba(255, 255, 255, 0.7);
                        font-family: 'Roboto Mono';
                        letter-spacing: 0.28px;
                      "
                      >Home</a
                    >
                  </li>
                  <li class="pt-[5px] min-w-[200px] relative">
                    <a
                      href=""
                      class="text-white font-bold text-[14px]"
                      style="font-family: 'Roboto Mono'; letter-spacing: 0.28px"
                      >Home</a
                    >
                  </li>
                  <li class="pt-[5px] min-w-[200px] relative">
                    <a
                      href=""
                      class="font-bold text-[14px]"
                      style="
                        color: rgba(255, 255, 255, 0.7);
                        font-family: 'Roboto Mono';
                        letter-spacing: 0.28px;
                      "
                      >Home</a
                    >
                  </li>
                </ul>
              </li>
              <li class="relative py-[4px] px-0 mt-3">
                <a
                  href=""
                  class="text-white font-bold text-[19px] text"
                  style="font-family: 'Roboto Mono'; letter-spacing: 0.32px"
                  >Exhibitions</a
                >
              </li>
              <li class="relative py-[4px] px-0 mt-3">
                <a
                  href=""
                  class="text-white font-bold text-[19px] text"
                  style="font-family: 'Roboto Mono'; letter-spacing: 0.32px "
                  >Events</a
                >
              </li>
              <li class="relative py-[4px] px-0 mt-3">
                <a
                  href=""
                  class="text-white font-bold text-[19px] text"
                  style="font-family: 'Roboto Mono'; letter-spacing: 0.32px"
                  >Collections</a
                >
              </li>
              <li class="relative py-[4px] px-0 mt-3">
                <a
                  href=""
                  class="text-white font-bold text-[19px] text"
                  style="font-family: 'Roboto Mono'; letter-spacing: 0.32px"
                  >Our Gallery</a
                >
              </li>
              <li class="relative py-[4px] px-0 mt-3">
                <a
                  href=""
                  class="text-white font-bold text-[19px] text"
                  style="font-family: 'Roboto Mono'; letter-spacing: 0.32px"
                  >Contact Us</a
                >
              </li>
              <div class="buge">
                <span
                  class="hidden absolute p-[20px] top-0 right-0 text-[1rem] text-right show"
                >
                  <span
                    class="text-black"
                    style="
                      position: absolute;
                      right: 249px;
                      font-size: 21px;
                      font-weight: 400;
                    "
                    >Menu</span
                  >
                  <i
                    class="fa-solid fa-circle-xmark"
                    style="color: black; font-size: 42px"
                  ></i>
                </span>
              </div>
            </div>
            <div
              class="block absolute w-[16px] h-auto left-auto top-0 right-0 bottom-0 opacity-75 transition-all duration-200 hover:opacity-[1.70]"
            >
              <div
                class="absolute top-0 left-0 right-[12px] bottom-0 h-auto"
                style="
                  background-color: rgba(249, 249, 249);
                  position: absolute;
                  min-height: 30px;
                  display: block;
                  height: 290px;
                  max-height: 314.388px;
                  top: 0px;
                "
              ></div>
            </div>
          </div>
        </ul>
        <div class="flex items-center justify-start pt-[11vh] px-0 ml-28">
          <a
            href="https://facebook.com"
            class="whitespace-nowrap text-white mr-[20px]"
          >
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com/"
            class="whitespace-nowrap text-white mr-[20px]"
          >
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://dribbble.com/"
            class="whitespace-nowrap text-white mr-[20px]"
          >
            <i class="fa-brands fa-dribbble"></i>
          </a>
          <a
            href="https://www.pinterest.com/"
            class="whitespace-nowrap text-white mr-[20px]"
          >
            <i class="fa-brands fa-pinterest-p"></i>
          </a>
        </div>
      </nav>
    </div>
  </div>
</template>
   <script>
export default {
  data() {
    return {
      isDropdownOpen: false,
      isDropdownOpen1: false,
    };
  },
  methods: {
    toggleDropdown1() {
      this.isDropdownOpen1 = !this.isDropdownOpen1;
      if (this.isDropdownOpen) {
        this.isDropdownOpen = false;
        document.removeEventListener("click", this.closeDropdown);
        const dropdownBtn = document.querySelector(".dropdown-btn");
        if (this.isDropdownOpen) {
          dropdownBtn.style.opacity = "1";
          dropdownBtn.style.width = "20px";
          dropdownBtn.style.height = "0%";
          dropdownBtn.style.backgroundColor = "#ff";
        } else {
          // Reset styles when dropdown is closed
          dropdownBtn.style.backgroundColor = "";
          dropdownBtn.style.width = "";
          dropdownBtn.style.height = "";
          dropdownBtn.style.top = "";
        }
      }

      if (this.isDropdownOpen1) {
        document.addEventListener("click", this.closeDropdown1);
      } else {
        document.removeEventListener("click", this.closeDropdown1);
      }
      const dropdownBtn = document.querySelector(".dropdown-btn1");

      if (this.isDropdownOpen1) {
        dropdownBtn.style.opacity = "1";
        dropdownBtn.style.width = "20px";
        dropdownBtn.style.height = "0%";
        dropdownBtn.style.backgroundColor = "#ff";
      } else {
        // Reset styles when dropdown is closed
        dropdownBtn.style.backgroundColor = "";
        dropdownBtn.style.width = "";
        dropdownBtn.style.height = "";
        dropdownBtn.style.top = "";
      }
    },
    toggleDropdown() {
      if (this.isDropdownOpen1) {
        this.isDropdownOpen1 = false;
        document.removeEventListener("click", this.closeDropdown1);
        const dropdownBtn1 = document.querySelector(".dropdown-btn1");
        if (this.isDropdownOpen1) {
          dropdownBtn1.style.opacity = "1";
          dropdownBtn1.style.width = "20px";
          dropdownBtn1.style.height = "0%";
          dropdownBtn1.style.backgroundColor = "#ff";
        } else {
          // Reset styles when dropdown is closed
          dropdownBtn1.style.backgroundColor = "";
          dropdownBtn1.style.width = "";
          dropdownBtn1.style.height = "";
          dropdownBtn1.style.top = "";
        }
      }
      this.isDropdownOpen = !this.isDropdownOpen;
      if (this.isDropdownOpen) {
        document.addEventListener("click", this.closeDropdown);
      } else {
        document.removeEventListener("click", this.closeDropdown);
      }
      const dropdownBtn = document.querySelector(".dropdown-btn");

      if (this.isDropdownOpen) {
        dropdownBtn.style.opacity = "1";
        dropdownBtn.style.width = "20px";
        dropdownBtn.style.height = "0%";
        dropdownBtn.style.backgroundColor = "#ff";
      } else {
        // Reset styles when dropdown is closed
        dropdownBtn.style.backgroundColor = "";
        dropdownBtn.style.width = "";
        dropdownBtn.style.height = "";
        dropdownBtn.style.top = "";
      }
    },
    closeDropdown(event) {
      // Close dropdown if clicked outside
      if (!this.$refs.dropdownMenu.contains(event.target)) {
        this.isDropdownOpen = false;
        document.removeEventListener("click", this.closeDropdown);
      }
    },
    closeDropdown1(event) {
      if (!this.$refs.dropdownMenu.contains(event.target)) {
        this.isDropdownOpen1 = false;
        document.removeEventListener("click", this.closeDropdown1);
      }
    },
  },
};
</script>
<style scoped>
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.submenu {
  display: block;
  transition: all 0.3s ease;
  transition-delay: 0.2s;
  animation: fadeInDown 1s ease;
}
.dropdown-btn {
  cursor: pointer;
  height: 10px;
  width: 10px;
  position: absolute;
  right: 44px;
  top: 9px;
}
.dropdown-btn::before {
  position: absolute;
  content: "";
  right: -13px;
  top: 4px;
  height: 2px;
  width: 100%;
  background-color: white;
  z-index: 2000;
}
.dropdown-btn::after {
  opacity: 1;
  position: absolute;
  content: "";
  height: 100%;
  width: 2px;
  background-color: #fff;
  right: -9px;
}

.dropdown-btn1 {
  cursor: pointer;
  height: 10px;
  width: 10px;
  position: absolute;
  right: 44px;
  top: 9px;
}
.dropdown-btn1::before {
  position: absolute;
  content: "";
  right: -13px;
  top: 4px;
  height: 2px;
  width: 100%;
  background-color: white;
  z-index: 2000;
}
.dropdown-btn1::after {
  opacity: 1;
  position: absolute;
  content: "";
  height: 100%;
  width: 2px;
  background-color: #fff;
  right: -9px;
}
@media (max-width: 1199px) {
  .responsive-big {
    display: flex;
    height: auto;
    align-items: center;
    padding: 4px 0px;
    top: 0px;
    width: 100%;
    min-height: 11%;
    color: white;
  }
  .menu {
    position: fixed;
    left: -116px;
    z-index: 9999;
    width: 320px;
    background-color: #fff;
    height: 100%;
    top: 0px;
  }
  .lg {
    left: 76vh;
    position: absolute;
    height: 3vh;
  }
  .show {
    display: block;
  }
  .buge{
    border: 1px solid black;
    margin-top: -214px;
  }
  .text{
    color: black;
  }
}
</style>

    