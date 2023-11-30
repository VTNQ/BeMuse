<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navbar from './components/navbar.vue'
import Main from './components/Main.vue'

</script>



<template>
  <div class="flex h-[100vh]">
    <navbar class="w-[28%]" /> <!-- Chỉnh sửa chiều rộng và màu sắc nếu cần -->
    <Main class="w-[72%] bg-slate-300" /> <!-- Phần còn lại của màn hình cho Main -->
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
