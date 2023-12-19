<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navbar from './components/navbar.vue'
import Main from './components/Main.vue'
import blog from './components/blog/Blog.vue'
import collection from './components/collection/collection.vue'
import gallery from './components/gallery/gallery.vue'
import Exhibitions from './components/exhibitions/exhibitions.vue'
import Event from './components/event/event.vue'
import contact from './components/ContactUs/contact.vue'
import aboutUs from './components/aboutUs/aboutUs.vue'
import leaderShip from './components/leaderShip/leaderShip.vue'
import award from './components/award/award.vue'
import magazine from './components/magazine/magazine.vue'
import mission from './components/mission/mission.vue'
import location from './components/location/location.vue'
import membership from './components/membership/membership.vue'
</script>

<template>
  <div
   :style="{
      display: $route.path.startsWith('/membership') ? 'block' : '',
      height: $route.path.startsWith('/membership') ? '100%' : '',
      width: $route.path.startsWith('/membership') ? '100vw' : '',
      
    }"
    :class="{ flex: $route.path.startsWith('/membership') }
    "
  >

  
    
    <!-- Navbar ở đây (znếu có chiều rộng cố định, hãy thêm vào) -->
    <navbar v-if="$route.path.endsWith('/')" class="xl:w-[23%] fixed top-0 left-0 z-50" /> <!-- Giả sử navbar chiếm 30% chiều rộng -->
    
    <!-- Main chiếm 70% chiều rộng và đặt ở bên phải -->
    <Main v-if="$route.path.endsWith('/')" class="xl:w-[77%] ml-auto h-full" />
    
  
  <blog v-if="$route.path.startsWith('/blog')"/>
  <collection v-if="$route.path.startsWith('/collection')"/>
  <gallery v-if="$route.path.startsWith('/gallery')" />
  <Exhibitions v-if="$route.path.startsWith('/exhibitions')"/>
  <Event v-if="$route.path.startsWith('/event')"/>
  <contact v-if="$route.path.startsWith('/contact')"/>
  <aboutUs v-if="$route.path.startsWith('/aboutUs')"/>
  <leaderShip v-if="$route.path.startsWith('/leaderShip')" />
  <award v-if="$route.path.startsWith('/award')"/>
  <magazine v-if="$route.path.startsWith('/magazine')"/>
  <mission v-if="$route.path.startsWith('/mission')"/>
  <location v-if="$route.path.startsWith('/location')"/>
  <membership v-if="$route.path.startsWith('/membership')" />
  </div>
</template>



<style scoped>

</style>
<script>
export default {
    name:'navbar',
    components:{
        navbar,
        
        
    },
}
</script>