<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navbar from './components/navbar.vue'

</script>

<template>
<navbar/>
</template>

<style scoped>

</style>
<script>
export default {
    name:'navbar',
    components:{
        navbar
    },
}
</script>
