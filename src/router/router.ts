import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
import Recipe from '@/views/Recipe/Recipe.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/recipe/:id',
        name: 'recipe',
        component: Recipe,
        props: true,
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router