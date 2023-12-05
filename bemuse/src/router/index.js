// import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import Collection from '../components/Collection.vue';

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/collection',
//       name: 'Collection',
//       component: () => import ("../components/Collection.vue")
//     },
//   ]
// })

// export default router
import { createRouter, createWebHistory } from 'vue-router'

import Collection from '/component/Collection.vue'

const routes = [
    {
        path: '/collection',
        component: Collection
    }
    
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
