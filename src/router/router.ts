import { createRouter, createWebHashHistory } from 'vue-router'
import Start from '../views/Start/Start.vue'
import api from '../api/api'

const routes = [
    {
        path: '',
        name: 'start',
        component: Start,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router