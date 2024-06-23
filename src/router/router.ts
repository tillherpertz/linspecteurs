import { createRouter, createWebHashHistory } from 'vue-router'
import Start from '../views/Start/Start.vue'
import Home from '../views/Home/Home.vue'

const routes = [
    {
        path: '',
        name: 'start',
        component: Start,
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router