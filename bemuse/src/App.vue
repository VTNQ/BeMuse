<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navbar from './components/navbar.vue'
import Main from './components/Main.vue'
import blog from './components/blog/Blog.vue'
</script>

<template>
  <div
   :style="{
      display: $route.path.startsWith('/user') ? 'block' : '',
      height: $route.path.startsWith('/user') ? '100%' : '',
      width: $route.path.startsWith('/user') ? '100vw' : ''
    }"
    :class="{ flex: $route.path.startsWith('/user') }"
  >
    
    <!-- Navbar ở đây (znếu có chiều rộng cố định, hãy thêm vào) -->
    <navbar v-if="!$route.path.startsWith('/user')" class="xl:w-[23%] fixed top-0 left-0 z-50" /> <!-- Giả sử navbar chiếm 30% chiều rộng -->
    
    <!-- Main chiếm 70% chiều rộng và đặt ở bên phải -->
    <Main v-if="!$route.path.startsWith('/user')" class="xl:w-[77%] ml-auto h-full" />
    
  
  <blog v-if="$route.path.startsWith('/user')"/>
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
