import './assets/main.css'
import './style.css'

import router from './router/index';




import { createApp } from 'vue'
import App from './App.vue'



const main= createApp(App);
const main1=createApp(App);
main.use(router)

  const mainElement = document.getElementById('main');

main.mount('#main')


    window.onload = function() {
      setTimeout(function() {
        const spinner = document.getElementById('loadingSpinner');
        if (spinner) {
          spinner.style.display = 'none';
        }
      }, 1000);
    };
  
