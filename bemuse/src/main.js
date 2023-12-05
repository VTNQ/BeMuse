import './assets/main.css'
import './style.css'

import router from './router';




import { createApp } from 'vue'
import App from './App.vue'



const main= createApp(App);

main.use(router)

main.mount('#main')


    window.onload = function() {
      setTimeout(function() {
        const spinner = document.getElementById('loadingSpinner');
        if (spinner) {
          spinner.style.display = 'none';
        }
      }, 1000);
    };
  
