<template>
     <div class="py-0 px-[14px]">
      <div class="max-w-[100%] m-auto text-black bg-white">
        <div class="grid grid-cols-3 grid-respon">
          <div class="flex items-center p-[5px]">
            <a href="">
              <img
                class="w-[10%] h-[10%]"
                src="/src/views/img/logo_statue_black.png"
                alt="" 
              />
            </a>
          </div>
          <div @click="showmenu()"  class="main-header__widget-box">
            <button class="hamburger main-header__hamburger js-toggle-mobile-menu">
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
          </div>
          <div class="master">
<div class="h-auto pb-0 main-header__menu-box pr-16">
            <nav>
              <ul class="flex flex-row justify-around mb-0 relative flex-repon">
                <li
                  class="my-0 mx-[12px] py-[21px] px-[5px] relative menu repon-menu"
                  style="white-space: nowrap"
                >
                  <a
                    href=""
                    class="text-[16px] font-bold"
                    style="
                      letter-spacing: 0.32px;
                      font-family: Roboto Mono;
                      color: black;
                      white-space: nowrap;
                    "
                    ><router-link class="text-black font-bold text-[16px]"
                  id="text"
                  style="letter-spacing: 0.32px" to="/">Home</router-link></a
                  >
                </li>
                <li
                  class="my-0 mx-[12px] py-[21px] px-[5px] relative menu repon-menu"
                  style="white-space: nowrap"
                >
                  <a
                    
                    class="text-[16px] font-bold"
                    style="
                      letter-spacing: 0.32px;
                      font-family: Roboto Mono;
                      color: black;
                      white-space: nowrap;
                    "
                    >Museum</a>
                   <span
                            class="inline-block  pl-[10px] text-[57.2%] whitespace-normal pb-2 dropdown-btn nth"
                            style="vertical-align: middle"
                          ></span>
                  <div class="mega-menu">
                    <div class="mega-menu__col">
                      <div class="mega-menu__title ">Column One</div>
                      <ul class="mega-menu__list">
                        <li
                          class="min-w-[1px] px-[3px] py-0 flex justify-between items-center cursor-auto sub-menu"
                          style="white-space: nowrap"
                        >
                          <a
                            href=""
                            class="relative menu-list list"
                            style="
                              font-size: 0.92859rem;
                              font-family: Roboto Mono;
                            "
                            ><router-link class="text-black font-normal text-[16px]"
                  id="text"
                  style="letter-spacing: 0.32px" to="/aboutUs">About Us</router-link></a
                          >
                        </li>
                        <li
                          class="min-w-[1px] px-[3px] py-0 flex justify-between items-center cursor-auto sub-menu "
                        >
                          <a
                            href=""
                            class="relative menu-list list"
                            style="
                              font-size: 0.92859rem;
                              font-family: Roboto Mono;
                            "
                            ><router-link class="text-black font-normal text-[16px]"
                  id="text"
                  style="letter-spacing: 0.32px" to="/mission">Mission and History</router-link></a
                          >
                        </li>
                        <li
                          class="min-w-[1px] px-[3px] py-0 flex justify-between items-center cursor-auto sub-menu"
                        >
                          <a
                            href=""
                            class="relative menu-list list"
                            style="
                              font-size: 0.92859rem;
                              font-family: Roboto Mono;
                            "
                            ><router-link class="text-black font-normal text-[16px]"
                  id="text"
                  style="letter-spacing: 0.32px" to="/leaderShip">Leadership</router-link></a
                          >
                        </li>
                        <li
                          class="min-w-[1px] px-[3px] py-0 flex justify-between items-center cursor-auto sub-menu"
                        >
                          <a
                            href=""
                            class="relative menu-list list" 
                            style="
                              font-size: 0.92859rem;
                              font-family: Roboto Mono;
                            "
                            ><router-link class="text-black font-normal text-[16px]"
                  id="text"
                  style="letter-spacing: 0.32px" to="/location">Location</router-link></a
                          >
                        </li>
                        <li
                          class="min-w-[1px] px-[3px] py-0 flex justify-between items-center cursor-auto sub-menu"
                        >
                          <a
                            href=""
                            class="relative menu-list list"
                            style="
                              font-size: 0.92859rem;
                              font-family: Roboto Mono;
                            "
                            ><router-link class="text-black font-normal text-[16px]"
                  id="text"
                  style="letter-spacing: 0.32px" to="/award">Awards</router-link></a
                          >
                        </li>
                      </ul>
                    </div>
                    <div class="mega-menu__col">
                      <div class="mega-menu__title">Column two</div>
                      <ul class="mega-menu__list">
                        <li
                          class="min-w-[1px] px-[3px] py-0 flex justify-between items-center cursor-auto sub-menu"
                        >
                          <a
                            href=""
                            class="relative menu-list list"
                            style="
                              font-size: 0.92859rem;
                              font-family: Roboto Mono;
                            "
                            ><router-link class="text-black font-normal text-[16px]"
                  id="text"
                  style="letter-spacing: 0.32px" to="/magazine">Magazine</router-link></a
                          >
                        </li>
                        <li
                          class="min-w-[1px] px-[3px] py-0 flex justify-between items-center cursor-auto sub-menu"
                        >
                          <a
                            href=""
                            class="relative menu-list list"
                            style="
                              font-size: 0.92859rem;
                              font-family: Roboto Mono;
                            "
                            ><router-link class="text-black font-normal text-[16px]"
                  id="text"
                  style="letter-spacing: 0.32px" to="/membership">Membership</router-link></a
                          >
                        </li>
                        <li
                          class="min-w-[1px] px-[3px] py-0 flex justify-between items-center cursor-auto sub-menu"
                        >
                          <a
                            href=""
                            class="relative menu-list list list"
                            style="
                              font-size: 0.92859rem;
                              font-family: Roboto Mono;
                            "
                            >Gutenberg</a
                          >
                          <span
                            class="inline-block pl-[10px] text-[57.2%] whitespace-normal pb-2 dropdown-btn"
                            style="vertical-align: middle"
                          ></span>
                          <ul class="sub-menu1">
                            <li
                              class=" min-w-[1px] flex justify-between items-center cursor-auto " id="li-sub"
                            style=" padding: 5px 20px;">
                              <a
                                href="https://mooseoom.foxthemes.me/accordion-block/"
                                class="text-[.92859rem]  sub-menu2 "
                                style="
                               
                                  font-family: 'Roboto Mono';
                                  font-weight: 400;
                                  letter-spacing: 0.32px;
                                  color:black
                                "
                              >Accordion Block</a>
                            </li>
                            <li
                              class=" min-w-[1px] flex justify-between items-center cursor-auto " id="li-sub"
                            style=" padding: 5px 20px;">
                              <a
                                href="https://mooseoom.foxthemes.me/accordion-block/"
                                class="text-[.92859rem] sub-menu2 "
                                style="
                               
                                  font-family: 'Roboto Mono';
                                  font-weight: 400;
                                  letter-spacing: 0.32px;
                                  color:black
                                "
                              >Advanced Columns Block</a>
                            </li>
                            <li
                              class=" min-w-[1px] flex justify-between items-center cursor-auto " id="li-sub"
                            style="padding: 5px 20px;">
                              <a
                                href="https://mooseoom.foxthemes.me/accordion-block/"
                                class="text-[.92859rem] sub-menu2"
                                style="
                                  font-family: 'Roboto Mono';
                                  font-weight: 400;
                                  letter-spacing: 0.32px;
                                  color:black
                                "
                              >Author Profile Block</a>
                            </li>
                            <li
                              class="py-[5px] px-[20px] min-w-[1px] flex justify-between items-center cursor-auto " id="li-sub"
                            style=" padding: 5px 20px;">
                              <a
                                href="https://mooseoom.foxthemes.me/accordion-block/"
                                class="text-[.92859rem] sub-menu2"
                                style="
                                  font-family: 'Roboto Mono';
                                  font-weight: 400;
                                  letter-spacing: 0.32px;
                                  color:black
                                "
                              >Button Block</a>
                            </li>
                            <li
                              class="py-[5px] px-[20px] min-w-[1px] flex justify-between items-center cursor-auto " id="li-sub"
                            style=" padding: 5px 20px;">
                              <a
                                href="https://mooseoom.foxthemes.me/accordion-block/"
                                class="text-[.92859rem] sub-menu2"
                                style="
                                  font-family: 'Roboto Mono';
                                  font-weight: 400;
                                  letter-spacing: 0.32px;
                                  color:black
                                "
                              >Call to Action Block</a>
                            </li>
                            <li
                              class="py-[5px] px-[20px] min-w-[1px] flex justify-between items-center cursor-auto " id="li-sub"
                            style=" padding: 5px 20px;">
                              <a
                                href="https://mooseoom.foxthemes.me/accordion-block/"
                                class="text-[.92859rem] sub-menu2"
                                style="
                                  font-family: 'Roboto Mono';
                                  font-weight: 400;
                                  letter-spacing: 0.32px;
                                  color:black
                                "
                              >Container</a>
                            </li>
                            <li
                              class="py-[5px] px-[20px] min-w-[1px] flex justify-between items-center cursor-auto " id="li-sub"
                            style=" padding: 5px 20px;">
                              <a
                                href="https://mooseoom.foxthemes.me/accordion-block/"
                                class="text-[.92859rem] sub-menu2"
                                style="
                                  font-family: 'Roboto Mono';
                                  font-weight: 400;
                                  letter-spacing: 0.32px;
                                  color:black
                                "
                              >Drop Cap Block</a>
                            </li>
                            <li
                              class="py-[5px] px-[20px] min-w-[1px] flex justify-between items-center cursor-auto " id="li-sub"
                            style=" padding: 5px 20px;">
                              <a
                                href="https://mooseoom.foxthemes.me/accordion-block/"
                                class="text-[.92859rem] sub-menu2"
                                style="
                                  font-family: 'Roboto Mono';
                                  font-weight: 400;
                                  letter-spacing: 0.32px;
                                  color:black
                                "
                              >Email Newsletter Block</a>
                            </li>
                            <li
                              class="py-[5px] px-[20px] min-w-[1px] flex justify-between items-center cursor-auto " id="li-sub"
                            style=" padding: 5px 20px;">
                              <a
                                href="https://mooseoom.foxthemes.me/accordion-block/"
                                class="text-[.92859rem] sub-menu2"
                                style="
                                  font-family: 'Roboto Mono';
                                  font-weight: 400;
                                  letter-spacing: 0.32px;
                                  color:black
                                "
                              >Inline Notice Block</a>
                            </li>
                            <li
                              class="py-[5px] px-[20px] min-w-[1px] flex justify-between items-center cursor-auto " id="li-sub"
                            style=" padding: 5px 20px;">
                              <a
                                href="https://mooseoom.foxthemes.me/accordion-block/"
                                class="text-[.92859rem] sub-menu2"
                                style="
                                  font-family: 'Roboto Mono';
                                  font-weight: 400;
                                  letter-spacing: 0.32px;
                                  color:black
                                "
                              >Post and Page Grid</a>
                            </li>
                            <li
                              class="py-[5px] px-[20px] min-w-[1px] flex justify-between items-center cursor-auto " id="li-sub"
                            style=" padding: 5px 20px;">
                              <a
                                href="https://mooseoom.foxthemes.me/accordion-block/"
                                class="text-[.92859rem] sub-menu2"
                                style="
                                  font-family: 'Roboto Mono';
                                  font-weight: 400;
                                  letter-spacing: 0.32px;
                                  color:black
                                "
                              >Pricing Box</a>
                            </li>
                            <li
                              class="py-[5px] px-[20px] min-w-[1px] flex justify-between items-center cursor-auto " id="li-sub"
                            style=" padding: 5px 20px;">
                              <a
                                href="https://mooseoom.foxthemes.me/accordion-block/"
                                class="text-[.92859rem] sub-menu2"
                                style="
                                  font-family: 'Roboto Mono';
                                  font-weight: 400;
                                  letter-spacing: 0.32px;
                                  color:black
                                "
                              >Sharing Icons</a>
                            </li>
                            <li
                              class="py-[5px] px-[20px] min-w-[1px] flex justify-between items-center cursor-auto " id="li-sub"
                            style=" padding: 5px 20px;">
                              <a
                                href="https://mooseoom.foxthemes.me/accordion-block/"
                                class="text-[.92859rem] sub-menu2"
                                style="
                                  font-family: 'Roboto Mono';
                                  font-weight: 400;
                                  letter-spacing: 0.32px;
                                  color:black
                                "
                              >Spacer Block</a>
                            </li>
                            <li
                              class="py-[5px] px-[20px] min-w-[1px] flex justify-between items-center cursor-auto " id="li-sub"
                            style=" padding: 5px 20px;">
                              <a
                                href="https://mooseoom.foxthemes.me/accordion-block/"
                                class="text-[.92859rem] sub-menu2"
                                style="
                                  font-family: 'Roboto Mono';
                                  font-weight: 400;
                                  letter-spacing: 0.32px;
                                  color:black
                                "
                              >Testimonial Block</a>
                            </li>
                          </ul>
                        </li>
                        <li
                          class="min-w-[1px] px-[3px] py-0 flex justify-between items-center cursor-auto sub-menu"
                        >
                          <a
                            href=""
                            class="relative menu-list list"
                            style="
                              font-size: 0.92859rem;
                              font-family: Roboto Mono;
                            "
                            >Careers</a
                          >
                          <span
                            class="inline-block pl-[10px] text-[57.2%] whitespace-normal pb-2 dropdown-btn"
                            style="vertical-align: middle"
                          ></span>
                          
                          <ul class="sub-menu1">
                            <li
                              class=" min-w-[1px] flex justify-between items-center cursor-auto " id="li-sub"
                            style=" padding: 5px 20px;">
                              <a
                                href="https://mooseoom.foxthemes.me/accordion-block/"
                                class="text-[.92859rem]  sub-menu2 "
                                style="
                               
                                  font-family: 'Roboto Mono';
                                  font-weight: 400;
                                  letter-spacing: 0.32px;
                                  color:black
                                "
                              >Exhibitions Programmer</a>
                            </li>
                            <li
                              class=" min-w-[1px] flex justify-between items-center cursor-auto " id="li-sub"
                            style=" padding: 5px 20px;">
                              <a
                                href="https://mooseoom.foxthemes.me/accordion-block/"
                                class="text-[.92859rem]  sub-menu2 "
                                style="
                               
                                  font-family: 'Roboto Mono';
                                  font-weight: 400;
                                  letter-spacing: 0.32px;
                                  color:black
                                "
                              >Director of Human Resources</a>
                            </li>
                            <li
                              class=" min-w-[1px] flex justify-between items-center cursor-auto " id="li-sub"
                            style=" padding: 5px 20px;">
                              <a
                                href="https://mooseoom.foxthemes.me/accordion-block/"
                                class="text-[.92859rem]  sub-menu2 "
                                style="
                               
                                  font-family: 'Roboto Mono';
                                  font-weight: 400;
                                  letter-spacing: 0.32px;
                                  color:black
                                "
                              >Visitor Experience Manager</a>
                            </li>
                            <li
                              class=" min-w-[1px] flex justify-between items-center cursor-auto " id="li-sub"
                            style=" padding: 5px 20px;">
                              <a
                                href="https://mooseoom.foxthemes.me/accordion-block/"
                                class="text-[.92859rem]  sub-menu2 "
                                style="
                               
                                  font-family: 'Roboto Mono';
                                  font-weight: 400;
                                  letter-spacing: 0.32px;
                                  color:black
                                "
                              >Commercial Art Manager</a>
                            </li>
                            <li
                              class=" min-w-[1px] flex justify-between items-center cursor-auto " id="li-sub"
                            style=" padding: 5px 20px;">
                              <a
                                href="https://mooseoom.foxthemes.me/accordion-block/"
                                class="text-[.92859rem]  sub-menu2 "
                                style="
                               
                                  font-family: 'Roboto Mono';
                                  font-weight: 400;
                                  letter-spacing: 0.32px;
                                  color:black
                                "
                              >Senior Collection Coordinator</a>
                            </li>
                            
                          </ul>
                        </li>
                        <li
                          class="min-w-[1px] px-[3px] py-0 flex justify-between items-center cursor-auto sub-menu"
                        >
                          <a
                            href=""
                            class="relative menu-list list"
                            style="
                              font-size: 0.92859rem;
                              font-family: Roboto Mono;
                            "
                            >Shop</a
                          >
                          <span
                            class="inline-block pl-[10px] text-[57.2%] whitespace-normal pb-2 dropdown-btn"
                            style="vertical-align: middle"
                          ></span>
                           <ul class="sub-menu1">
                            <li
                              class=" min-w-[1px] flex justify-between items-center cursor-auto " id="li-sub"
                            style=" padding: 5px 20px;">
                              <a
                                href="https://mooseoom.foxthemes.me/accordion-block/"
                                class="text-[.92859rem]  sub-menu2 "
                                style="
                               
                                  font-family: 'Roboto Mono';
                                  font-weight: 400;
                                  letter-spacing: 0.32px;
                                  color:black
                                "
                              >Shop</a>
                            </li>
                            <li
                              class=" min-w-[1px] flex justify-between items-center cursor-auto " id="li-sub"
                            style=" padding: 5px 20px;">
                              <a
                                href="https://mooseoom.foxthemes.me/accordion-block/"
                                class="text-[.92859rem]  sub-menu2 "
                                style="
                               
                                  font-family: 'Roboto Mono';
                                  font-weight: 400;
                                  letter-spacing: 0.32px;
                                  color:black
                                "
                              >Checkout</a>
                            </li>
                            <li
                              class=" min-w-[1px] flex justify-between items-center cursor-auto " id="li-sub"
                            style=" padding: 5px 20px;">
                              <a
                                href="https://mooseoom.foxthemes.me/accordion-block/"
                                class="text-[.92859rem]  sub-menu2 "
                                style="
                               
                                  font-family: 'Roboto Mono';
                                  font-weight: 400;
                                  letter-spacing: 0.32px;
                                  color:black
                                "
                              >Cart</a>
                            </li>
                            <li
                              class=" min-w-[1px] flex justify-between items-center cursor-auto " id="li-sub"
                            style=" padding: 5px 20px;">
                              <a
                                href="https://mooseoom.foxthemes.me/accordion-block/"
                                class="text-[.92859rem]  sub-menu2 "
                                style="
                               
                                  font-family: 'Roboto Mono';
                                  font-weight: 400;
                                  letter-spacing: 0.32px;
                                  color:black
                                "
                              >My Account</a>
                            </li>
                            
                            
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li
                  class="my-0 mx-[12px] py-[21px] px-[5px] relative menu repon-menu"
                  style="white-space: nowrap"
                >
                  <a
                    href=""
                    class="text-[16px] font-bold"
                    style="
                      letter-spacing: 0.32px;
                      font-family: Roboto Mono;
                      color: black;
                    "
                    ><router-link class="text-black font-bold text-[16px]"
                  id="text"
                  style="letter-spacing: 0.32px" to="/exhibitions">Exhibition</router-link></a
                  >
                </li>
                <li
                  class="my-0 mx-[12px] py-[21px] px-[5px] relative menu repon-menu"
                  style="white-space: nowrap"
                >
                  <a
                    href="https://mooseoom.foxthemes.me/"
                    class="text-[16px] font-bold"
                    style="
                      letter-spacing: 0.32px;
                      font-family: Roboto Mono;
                      color: black;
                    "
                    ><router-link class="text-black font-bold text-[16px]"
                  id="text"
                  style="letter-spacing: 0.32px" to="/event">Events</router-link></a
                  >
                </li>
                <li
                  class="my-0 mx-[12px] py-[21px] px-[5px] relative menu repon-menu"
                  style="white-space: nowrap"
                >
                  <a
                    href="https://mooseoom.foxthemes.me/"
                    class="text-[16px] font-bold"
                    style="
                      letter-spacing: 0.32px;
                      font-family: Roboto Mono;
                      color: black;
                      white-space: nowrap;
                    "
                    ><router-link class="text-black font-bold text-[16px]"
                  id="text"
                  style="letter-spacing: 0.32px" to="/collection">Collection</router-link></a
                  >
                </li>
                <li
                  class="my-0 mx-[12px] py-[21px] px-[5px] relative menu repon-menu"
                  style="white-space: nowrap"
                >
                  <a
                    href="https://mooseoom.foxthemes.me/"
                    class="text-[16px] font-bold"
                    style="
                      letter-spacing: 0.32px;
                      font-family: Roboto Mono;
                      color: black;
                      white-space: nowrap;
                    "
                    ><router-link class="text-black font-bold text-[16px]"
                  id="text"
                  style="letter-spacing: 0.32px" to="/gallery">Our Gallery</router-link></a
                  >
                </li>
                <li
                  class="my-0 mx-[12px] py-[21px] px-[5px] relative active repon-menu"
                  style="white-space: nowrap"
                >
                  <a
                    href="https://mooseoom.foxthemes.me/"
                    class="text-[16px] font-bold"
                    style="
                      letter-spacing: 0.32px;
                      font-family: Roboto Mono;
                      color: black;
                      white-space: nowrap;
                    "
                    ><router-link class="text-black font-bold text-[16px]"
                  id="text"
                  style="letter-spacing: 0.32px" to="/blog">Blogs</router-link></a
                  >
                </li>
                <li
                  class="flex my-0 mx-[12px] py-[21px] px-[5px] relative menu1 repon-menu"
                  style="white-space: nowrap"
                >
                  <a
                    
                    class="text-[16px] font-bold"
                    style="
                      letter-spacing: 0.32px;
                      font-family: Roboto Mono;
                      color: black;
                      white-space: nowrap;
                    "
                    ><router-link class="text-black font-bold text-[16px]"
                  id="text"
                  style="letter-spacing: 0.32px" to="/contactUs">Contact Us</router-link></a
                  >
                </li>
              </ul>
            </nav>
          </div>
          <div class="flex items-center justify-end px-[15px] py-0 item-reponsive">
            <a href="https://www.facebook.com/" class="mr-[19px]">
              <i
                class="fa-brands fa-facebook-f icon-a"
                style="color: black"
              ></i>
            </a>
            <a href="https://www.instagram.com/" class="mr-[19px]">
              <i class="fa-brands fa-instagram" style="color: black"></i>
            </a>
            <a href="https://twitter.com/" class="mr-[19px]">
              <i class="fa-brands fa-twitter icon-a"></i>
            </a>
            <a href="https://dribbble.com/" class="mr-[19px]">
              <i class="fa-brands fa-dribbble icon-a"></i>
            </a>
          </div>
          
          <span class="btn-close" @click="closemenu()">
             <i 
                      class="fa-solid fa-circle-xmark"
                      style="color: black; font-size: 42px"
                    ></i>
          </span>
        </div>
          </div>
          
      </div>
    </div>
</template>
<script>


export default{
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
      const close=document.querySelector(".btn-close");
        const menu=document.querySelector('.master');
       menu.style.transform = 'translateX(0)';
       close.style.display='flex';
       this.isActive=2;
    },
     updateMenuTransform() {
      const menu = document.querySelector('.master');
      const close=document.querySelector(".btn-close");
      const screenWidth = window.innerWidth;

     
        if (screenWidth <= 1200 ) {
        menu.style.transform = this.isActive === 1 ? 'translateX(-49vh)' : 'translateX(0vh)';
        close.style.display='flex';
      } else {
        menu.style.transform = 'translateX(-1vh)';
        close.style.display='none';
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
        const menu = document.querySelector('.master');
  const screenWidth = window.innerWidth;

  if (screenWidth <= 1200) {
    menu.style.transform = 'translateX(-49vh)';
  } else {
    menu.style.transform = 'translateX(-1vh)';
    this.isActive=1
  }
    },
    
  
  },
}
</script>

<style scoped>

.mega-menu__col {
  padding: 0 10px 0 25px;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 0px;
  flex: 1 1 0;
  z-index: 1000;
}
.menu1::before {
  content: "";
  background-color: #000;
  display: inline-block;
  position: static;
  width: 4px;
  height: 4px;
  -webkit-transition: all 0.2s;
  -o-transition: all 0.2s;
  transition: all 0.2s;
  top: 0;
  margin-right: 10px;
  margin-bottom: 3px;
  opacity: 0;
}
.nth{
  display: none;
}
.master{
  display: flex;
    justify-content: flex-end;
}
.btn-close{
  display: none;
}
#li-sub:hover a{
   padding-left: 23px;
}
.menu1:hover::before {
  width: 4px;
  height: 4px;
  position: absolute;
  opacity: 1;
  top: 46%;
  border-radius: 50%;
  visibility: visible;
  left: -5%;
  border: 1px solid black;
  z-index: 99;
}
.mega-menu {
  position: absolute;
  left: 30%;
  top: 100%;
  transform: translateX(-50%);
  background: #fff;
  padding: 18px 0;
  width: 565px;
  max-width: 100vw;
  visibility: hidden;
  opacity: 0;
  transition: all 0.2s;
  display: flex;
  z-index: 1000; /* High z-index */
  height: 0;
  overflow: hidden;
}

.sub-menu2::before{
        content: "";
    display: inline-block;
    height: 3px;
    width: 3px;
    background-color: black;
    position: absolute;
    left: 5px;
    top: 9px;
    opacity: 0;
    border-radius: 50%;
}
.sub-menu::before {
  content: "";
  display: inline-block;
  height: 3px;
  width: 3px;
  background-color: black;
  position: absolute;
  left: -15px;
  opacity: 0;
  border-radius: 50%;
}
.sub-menu:hover .list::before {
  width: 4px;
  height: 4px;
  opacity: 1;
  border-radius: 50%;
  left: 0;
  top: 9px;
  border: 1px solid black;
}
.sub-menu:hover .list{
   padding-left: 15px;
}
.sub-menu:hover .dropdown-btn::before {
  content: "\f209";
  
}
.sub-menu:hover .sub-menu1{
   opacity: 1;
   visibility: visible;
}
.sub-menu:hover a {
  position: relative;
  padding-left: 15px;
  transition: all ease 0.5s;
  
}
.sub-menu1 {
  left: calc(100% + 10px);
  top: 0;
  padding: 11px 0;
  display: block;
  z-index: 1;
  background: #fff;
  -webkit-transition: all 0.2s;
  -o-transition: all 0.2s;
  transition: all 0.2s;
  white-space: nowrap;
  border: 1px solid black;
  position: absolute;
  white-space: nowrap;
  transition: all .2s;
  opacity: 0;
  visibility: hidden;
}

.menu::before {
  content: "";
  background-color: #000;
  display: inline-block;
  position: static;
  width: 4px;
  height: 4px;
  -webkit-transition: all 0.2s;
  -o-transition: all 0.2s;
  transition: all 0.2s;
  top: 0;
  margin-right: 10px;
  margin-bottom: 3px;
  opacity: 0;
}
.active::before {
  content: "";
  background-color: #000;
  display: inline-block;
  position: static;
  width: 4px;
  height: 4px;
  -webkit-transition: all 0.2s;
  -o-transition: all 0.2s;
  transition: all 0.2s;
  top: 0;
  margin-right: 10px;
  margin-bottom: 3px;
  left: 0;
  opacity: 1;
  border-radius: 50%;
}
.sub-menu1 li:hover .sub-menu2::before{
    width: 4px;
  height: 4px;
  opacity: 1;
  border-radius: 50%;
  border: 1px solid black;
  z-index: 99;
 visibility: visible;
}
.menu:hover::before,
.menu:hover .mega-menu {
  width: 4px;
  height: 4px;
  opacity: 1;
  border-radius: 50%;
  visibility: visible;
  left: 28%;
  border: 1px solid black;
  z-index: 99;
}

.menu:hover .mega-menu {
  height: auto;
  overflow: visible;
  width: 565px;
  max-width: 100vw;
  border-radius: 0%;
  position: absolute;
}

.dropdown-btn::before {
  content: "\f217";
  display: inline-block;
  -webkit-transition: all 0.2s;
  -o-transition: all 0.2s;
  transition: all 0.2s;
  font-family: Ionicons;
  font-size: 115%;
  vertical-align: middle;
  font-weight: 700;
  z-index: 1000;
}
.mega-menu__title {
  font-weight: 700;
  color: #000;
  font-size: 1.15rem;
  font-family: "Roboto Mono";
}
.mega-menu__list {
  visibility: visible;
  opacity: 1;
  -webkit-box-shadow: none;
  box-shadow: none;
  position: relative;
  top: 0;
  padding: 5px 0 0;
  left: 0;
  border: none;
}
.menu-list::before {
  content: "";
  display: inline-block;
  height: 3px;
  width: 3px;
  background-color: #000;
  position: absolute;
  left: -15px;
  opacity: 0;
  border-radius: 50%;
}
.mega-menu__col:nth-child(2n) {
  border-left: 1px solid black;
}
@media only screen and (min-width: 1200px) and (max-width: 1371px) {
  .repon-menu {
    margin-left: -6px;
  }
  .menu[data-v-808fea0b]:hover::before,
  .menu:hover .mega-menu[data-v-808fea0b] {
    left: 119%;
  }
 

}
@media only screen and (max-width:1200px){
  .grid-respon{
    direction: rtl;
    grid-template-columns: repeat(2 , minmax(0, 1fr));
grid-template-columns: 1fr 1fr;
 
  }
    .master{
   position: fixed;
    top: 0;
    left: -1px;
    padding-top: 66px;
    z-index: 9999;
    height: 100%;
    width: 320px;
    background-color: white;
    transition: .35s;
    flex-direction: column;
    transform: translatex(-322px);

  }
  .main-header__menu-box {
 
}


.flex-repon{
   flex-direction: column;
}
.btn-close {
   display: inline-flex;
    z-index: 9999999;
    justify-content: flex-start;
    align-items: flex-end;
    position: absolute;
    cursor: pointer;
    width: 100%;
    right: -2px;
    top: 11px;
    /* padding: 5px; */
    padding: 16px -18px;
    position: absolute;
    padding: -16px 239px;
    display: none;
    /* background-color: blue;*/
}
.btn-close::before {
   content: '';
    position: absolute;
    bottom: -19px;
    right: 0;
    left: -274px;
    width: 320px;
    height: 1px;
    display: block;
    background-color: rgba(0,0,0,.1);
   
}
.repon-menu{
  border-bottom: 1px solid rgba(0,0,0,.1);
}
.btn-close::after {
   content: 'Menu';
    position: absolute;
    left: -1px;
    font-size: 21px;
    font-weight: 400;
    }
.item-reponsive{
  justify-content: flex-start;
  padding-top: 12px;
}
.menu:hover .mega-menu{
top: -1px;
    left: 150%;
    display: block;
    width: 100%;
    
}

.mega-menu__list{
  display: block;
}
 .main-header__widget-box {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    padding: 15px 0;
}
 .main-header__hamburger {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 12px 12px 12px 0;
    cursor: pointer;
    -webkit-transition-property: opacity,-webkit-filter;
    transition-property: opacity,-webkit-filter;
    -o-transition-property: opacity,filter;
    transition-property: opacity,filter;
    transition-property: opacity,filter,-webkit-filter;
    -webkit-transition-duration: .15s;
    -o-transition-duration: .15s;
    transition-duration: .15s;
    -webkit-transition-timing-function: linear;
    -o-transition-timing-function: linear;
    transition-timing-function: linear;
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    overflow: visible;


}
.hamburger-box {
    position: relative;
    width: 24px;
    height: 18px;
    display: inline-block;
    vertical-align: middle;
}
.hamburger-inner {
    width: 24px;
    height: 2px;
    background-color: black;
    border-radius: 1.5px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    -webkit-transition-property: -webkit-transform;
    transition-property: -webkit-transform;
    -o-transition-property: transform;
    transition-property: transform;
    transition-property: transform,-webkit-transform;
    -webkit-transition-duration: 75ms;
    -o-transition-duration: 75ms;
    transition-duration: 75ms;
    -webkit-transition-timing-function: cubic-bezier(.55,.055,.675,.19);
    -o-transition-timing-function: cubic-bezier(.55,.055,.675,.19);
    transition-timing-function: cubic-bezier(.55,.055,.675,.19);
}
.hamburger-inner::before {
    content: "";
    display: block;
    width: 18px;
    height: 2px;
    left: 0;
        top: -8px;
    background-color: black;
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
.hamburger-inner::after {
    content: "";
    display: block;
    width: 18px;
    height: 2px;
    left: 0;
    bottom: -8px;
    background-color: black;
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
.nth{
  display: inline-block;
}
.nth::before {
    content: "\f217";
    display: inline-block;
    position: absolute;
    left: 44vh;
    top: 4vh;
    transition: all 0.2s;
    font-family: Ionicons;
    font-size: 115%;
    vertical-align: middle;
    font-weight: 700;
    
}

}

</style>