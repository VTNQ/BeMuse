import './assets/main.css'
import './style.css'
import AOS from "aos";
import 'aos/dist/aos.css'

import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

const main= createApp(App);

main.use(router)

main.mount('#main')
