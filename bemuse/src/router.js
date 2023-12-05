import { createRouter, createWebHistory } from 'vue-router'
import Collection from './components/Collection.vue';

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