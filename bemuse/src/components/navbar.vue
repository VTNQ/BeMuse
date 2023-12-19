<template>
  <div
    class="h-[100vh] w-[23%] bg-black md:fixed md:left-0 md:justify-between responsive-big"
  >
    <div
      class="py-[60px] px-0 flex items-center ml-28 relative justify-start lg"
    >
      <a >
        <img
          src="/src/views/img/logo_statue_white.png"
          width="100"
          class="h-auto max-w-[100%] rounded-none img-repon"
          alt=""
        />
      </a>
      
    </div>
    <div class="top-auto pb-0 h-auto">
      <nav class="h-[92px]">
        <ul
          class="transform -translate-y-[-22] relative top-[20%] overflow-y-auto"
        >
          <div class="relative overflow-hidden h-[100%] max-w-[91%]">
            <div
              class="mr-0 overflow-hidden w-auto h-auto flex flex-col justify-start ml-[114px] menu menushow"
            >
              <li class="relative py-[4px] px-0 reponsive-menu">
                <a
                  href=""
                  class="text-white font-bold text-[19px]"
                  id="text"
                  style="letter-spacing: 0.32px"
                  > </a
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
                  <li
                    class="pt-[5px] min-w-[200px] relative reponsive-menu-submenu"
                  >
                    <a href="" class="font-bold text-[14px]" id="text-submenu">Home</a>
                  </li>
                  <li
                    class="pt-[5px] min-w-[200px] relative reponsive-menu-submenu"
                  >
                    <a
                      href=""
                      class="text-white font-bold text-[14px]"
                      id="text-submenu"
                      style="font-family: 'Roboto Mono'; letter-spacing: 0.28px"
                      >Home</a
                    >
                  </li>
                  <li
                    class="pt-[5px] min-w-[200px] relative reponsive-menu-submenu"
                  >
                    <a
                      href=""
                      class="font-bold text-[14px]"
                      
                      id="text-submenu"
                      >Home</a
                    >
                  </li>
                </ul>
              </li>
              <li class="relative py-[4px] px-0 mt-3 reponsive-menu">
                <a
                  href=""
                  class="text-white font-bold text-[19px]"
                  id="text"
                  style="letter-spacing: 0.32px"
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
                  <li class="pt-[5px] min-w-[200px] relative museum-responsive">
                    <a
                      href=""
                      class="font-bold text-[14px]"
                   
                      id="text-submenu"
                      >Home</a
                    >
                  </li>
                  <li class="pt-[5px] min-w-[200px] relative museum-responsive">
                    <a
                      href=""
                      class="text-white font-bold text-[14px]"
                      id="text-submenu"
                      >Home</a
                    >
                  </li>
                  <li class="pt-[5px] min-w-[200px] relative museum-responsive">
                    <a
                      href=""
                      class="font-bold text-[14px]"
                     
                      id="text-submenu"
                      >Home</a
                    >
                  </li>
                </ul>
              </li>
              <li class="relative py-[4px] px-0 mt-3 reponsive-menu">
                <a
                  href=""
                  class="text-white font-bold text-[19px]"
                  id="text"
                  style="letter-spacing: 0.32px"
                  ><router-link to="/exhibitions">Exhibitions</router-link></a
                >
              </li>
              <li class="relative py-[4px] px-0 mt-3 reponsive-menu">
                <a
                  href=""
                  class="text-white font-bold text-[19px]"
                  id="text"
                  style="letter-spacing: 0.32px"
                  >Events</a
                >
              </li>
              <li class="relative py-[4px] px-0 mt-3 reponsive-menu">
                <a
                  href=""
                  
                  ><router-link class="text-white font-bold text-[19px]"
                  id="text"
                  style="letter-spacing: 0.32px" to="/collection">Collection</router-link></a
                >
              </li>
              <li class="relative py-[4px] px-0 mt-3 reponsive-menu">
                <a
                  href=""
                  class="text-white font-bold text-[19px]"
                  id="text"
                  style="letter-spacing: 0.32px"
                  ><router-link class="text-white font-bold text-[19px]"
                  id="text"
                  style="letter-spacing: 0.32px" to="/gallery">Gallery</router-link></a
                >
              </li>
              <li class="relative py-[4px] px-0 mt-3 reponsive-menu">
                <a
                  href=""
                  class="text-white font-bold text-[19px]"
                  id="text"
                  style="letter-spacing: 0.32px"
                  ><router-link class="text-white font-bold text-[19px]"
                  id="text"
                  style="letter-spacing: 0.32px" to="/blog">Blog</router-link></a
                >
              </li>
              <li class="relative py-[4px] px-0 mt-3 reponsive-menu">
                <a
                  href=""
                  class="text-white font-bold text-[19px]"
                  id="text"
                  style="letter-spacing: 0.32px"
                  ><router-link class="text-white font-bold text-[19px]"
                  id="text"
                  style="letter-spacing: 0.32px" to="/contact">Contact Us</router-link></a
                >
              </li>
              
              
              <div>
                <div>
                  <span
                    class="hidden absolute p-[20px] top-0 right-0 text-[1rem] text-right show"
                  >
                    <span
                      class="text-black"
                      style="
                        position: absolute;
                        right: 249px;
                        font-size: 21px;
                        font-weight: 600;
                      "
                      >Menu</span
                    >
                    <i @click="closemenu()"
                      class="fa-solid fa-circle-xmark"
                      style="color: black; font-size: 42px"
                    ></i>
                  </span>
                </div>
              </div>
               <div class="flex items-center justify-start pt-[4vh] px-0  icon">
          <a
            href="https://facebook.com"
            class="whitespace-nowrap text-white mr-[20px] "
          >
            <i class="fa-brands fa-facebook-f icon-a"></i>
          </a>
          <a
            href="https://twitter.com/"
            class="whitespace-nowrap text-white mr-[20px]"
          >
            <i class="fa-brands fa-twitter icon-a"></i>
          </a>
          <a
            href="https://dribbble.com/"
            class="whitespace-nowrap text-white mr-[20px]"
          >
            <i class="fa-brands fa-dribbble icon-a"></i>
          </a>
          <a
            href="https://www.pinterest.com/"
            class="whitespace-nowrap text-white mr-[20px]"
          >
            <i class="fa-brands fa-pinterest-p icon-a"></i>
          </a>
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
       
      </nav>
        <span @click="showmenu()" class="hamburger-box ">
        <span class="hamburger-inner"></span>
      </span>
    </div>
  
  </div>
  
</template>
   <script>
export default {
  data() {
    return {
      isDropdownOpen: false,
      isDropdownOpen1: false,
      isActive:1,
    };
  },
  mounted(){
     this.initializeMenu();
    window.addEventListener('resize', this.handleResize);
  },
  methods: {
      initializeMenu() {
     this.updateMenuTransform();
  },
    showmenu(){
        const menu=document.querySelector('.menushow');
       menu.style.transform = 'translateX(0vh)';
       this.isActive=2;
    },
     updateMenuTransform() {
      const menu = document.querySelector('.menushow');
      const screenWidth = window.innerWidth;

     
        if (screenWidth <= 1280) {
        menu.style.transform = this.isActive === 1 ? 'translateX(-48vh)' : 'translateX(0vh)';
      } else {
        menu.style.transform = 'translateX(-1vh)';
      }      
      
    },
        handleResize() {
      this.updateMenuTransform();
    },
       updateDropdownStyles(selector, isOpen) {
      const dropdownBtn = document.querySelector(selector);

      if (isOpen) {
        // styles when dropdown is open
      } else {
        // Reset styles when dropdown is closed
      }
    },
    closemenu(){
        const menu = document.querySelector('.menushow');
  const screenWidth = window.innerWidth;

  if (screenWidth <= 1280) {
    menu.style.transform = 'translateX(-48vh)';
  } else {
    menu.style.transform = 'translateX(-1vh)';
  }
    },
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
.menushow{
  transform: translateX(-1vh);
}
.dropdown-btn {
  cursor: pointer;
  height: 10px;
  width: 10px;
  position: absolute;
  right: 44px;
  top: 80px;
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

#text {
  font-family: "Roboto Mono", Sans-serif;
}

#text-submenu {
  color: rgba(255, 255, 255, 0.7);
  font-family: "Roboto Mono";
  letter-spacing: 0.28px;
}
@media (max-width: 1280px) {
    .hamburger-box {
    position: relative;
    width: 24px;
    height: 18px;
    display: inline-block;
    vertical-align: middle;
    left: 30px;
}
    .hamburger-inner {
   width: 24px;
    height: 2px;
    background-color: #fff;
    border-radius: 1.5px;
    position: absolute;
    top: -4vh;
    left: 50%;
    /* justify-content: flex-end; */
    /* display: flex; */
    transform: translate(-50%,-50%);
    transition-property: transform;
    transition-duration: 75ms;
    transition-timing-function: cubic-bezier(.55,.055,.675,.19)}
    
.hamburger-inner::before {
    top: -8px;
}
.hamburger-inner::after {
    bottom: -8px;
}
.hamburger-inner::before {
    content: "";
    display: block;
    width: 18px;
    height: 2px;
    left: 0;
    background-color: #fff;
    border-radius: 1.5px;
    position: absolute;
    -webkit-transition-property: -webkit-transform;
    transition-property: -webkit-transform;
    -o-transition-property: transform;
    transition-property: transform;
    transition-property: transform,-webkit-transform;
    -webkit-transition-duration: .15s;
    -o-transition-duration: .15s;
    transition-duration: .15s;
    -webkit-transition-timing-function: ease;
    -o-transition-timing-function: ease;
    transition-timing-function: ease;
}
 .hamburger-inner::before {
    content: "";
    display: block;
    width: 18px;
    height: 2px;
    left: 0;
    background-color: #fff;
    border-radius: 1.5px;
    position: absolute;
    -webkit-transition-property: -webkit-transform;
    transition-property: -webkit-transform;
    -o-transition-property: transform;
    transition-property: transform;
    transition-property: transform,-webkit-transform;
    -webkit-transition-duration: .15s;
    -o-transition-duration: .15s;
    transition-duration: .15s;
    -webkit-transition-timing-function: ease;
    -o-transition-timing-function: ease;
    transition-timing-function: ease;
}
.hamburger-inner::after{
    content: "";
    display: block;
    width: 18px;
    height: 2px;
    left: 0;
    background-color: #fff;
    border-radius: 1.5px;
    position: absolute;
    -webkit-transition-property: -webkit-transform;
    transition-property: -webkit-transform;
    -o-transition-property: transform;
    transition-property: transform;
    transition-property: transform,-webkit-transform;
    -webkit-transition-duration: .15s;
    -o-transition-duration: .15s;
    transition-duration: .15s;
    -webkit-transition-timing-function: ease;
    -o-transition-timing-function: ease;
    transition-timing-function: ease;
}
  .responsive-big {
    display: flex;
    height: 5%;
    align-items: center;
    padding: 4px 0px;
    top: 0px;
    width: 100%;
    min-height: 11%;
    color: white;
  }
  .icon-a{
    color: black;
    font-size: 25px;
}
  .dropdown-btn1 {
 cursor: pointer;
    height: 10px;
    width: 10px;
    position: absolute;
    right: 65px;
    top: 5px;
}
.dropdown-btn1::before {
  position: absolute;
  content: "";
  right: -13px;
  top: 4px;
  height: 2px;
  width: 100%;
  background-color: black;
  z-index: 2000;
}
.dropdown-btn1::after {
  opacity: 1;
  position: absolute;
  content: "";
  height: 100%;
  width: 2px;
  background-color: black;
  right: -9px;
}
  .dropdown-btn {
    cursor: pointer;
    height: 10px;
    width: 10px;
    position: absolute;
    right: 66px;
    top: 9px;
  }
  .dropdown-btn::before {
    background-color: black;
  }
  .dropdown-btn::after {
    background-color: black;
  }
  .menushow{
    transition: all ease 0.2s;
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
    border-bottom: 1px solid black;
   padding-left: 35vh;
  }
  #text-submenu {
    color: black;
  }
  #text {
    font-family: "Crimson Text", Sans-serif;
    color: black;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.36px;
  }
  .museum-responsive{
    top: -15vh;
  }
  .icon{
         z-index: 10000;
    position: relative;
    top: 12vh;
    left: 2vh;
  }
  .reponsive-menu {
        top: 13vh;
    left: 2vh;
  }
  .reponsive-menu-submenu {
    top: -118px;
  }
}
@media only screen and (min-width:573px) and (max-width:645px)  {
  .img-repon{
   max-width: 43px;
    margin-left: -82px;
}


}
@media only screen and (max-width:573px)  {
  .img-repon{
  max-width: 55px;
    margin-left: -97px;
    margin-left: -203px;
}




}
</style>

    