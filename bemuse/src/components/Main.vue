<script>
import MainChild1 from './MainChildrent/MainChild1.vue'
import MainChild2 from './MainChildrent/MainChild2.vue'

export default {
  components: {
    MainChild1, // Đăng ký MainChild1 là một thành phần con
    MainChild2,
  },
}
</script>
<!-- <template>
    <div>       
        <MainChild1/>
        <MainChild2/>
    </div>
    
</template> -->
<template>
    <div class="main-container" >
        <div>
            <MainChild1/>
        </div>
        <div class="top-[100%] max-h-[2500px] w-[100vw] bg-black">
            <MainChild2/>
        </div>
    </div>
</template>


<style>
</style>