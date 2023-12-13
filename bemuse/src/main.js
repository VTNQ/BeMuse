import './assets/main.css';
import './style.css';
import router from './router/index';
import { createApp } from 'vue';
import App from './App.vue';

const main = createApp(App);
main.use(router);

// Assuming you have a main element with the ID "main" in your HTML
const mainElement = document.getElementById('main');

// Use router.beforeEach to execute code before navigation
router.beforeEach((to, from, next) => {
  // Check if the route path is "/user"
  if (to.path === '/user' || to.path === '/contact' || to.path==="/blog") {
    mainElement.style.overflowY = 'auto';
    mainElement.style.height = '100%';
  } else {
    // Reset styles for other routes
    mainElement.style.overflowY = 'visible'; // or 'auto' based on your needs
    mainElement.style.height = 'auto'; // or '100%' based on your needs
  }

  next(); // Continue with the navigation
});

main.mount('#main');

window.onload = function() {
  setTimeout(function() {
    const spinner = document.getElementById('loadingSpinner');
    if (spinner) {
      spinner.style.display = 'none';
    }
  }, 1000);
};
