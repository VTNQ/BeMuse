<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navbar from './components/navbar.vue'
import Main from './components/Main.vue'


</script>




<template>
  <div class="flex">
    <!-- Navbar ở đây (nếu có chiều rộng cố định, hãy thêm vào) -->
    <navbar class="w-[28%] fixed top-0 left-0 z-50" /> <!-- Giả sử navbar chiếm 30% chiều rộng -->
    
    <!-- Main chiếm 70% chiều rộng và đặt ở bên phải -->
    <Main class="w-[72%] ml-auto h-full" />
    
    
    
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
