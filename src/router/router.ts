import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
import api from '@/api/api'
import Recipe from '@/views/Recipe/Recipe.vue'

const routes = [
    {
        path: '',
        name: 'home',
        component: Home,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const recipes = await api.getRecipes()

for (let recipe of recipes) {
    router.addRoute({
        path: `/recipe/${recipe.id}`,
        name: recipe.headline,
        component: Recipe,
        props: {
            recipe: recipe,
        }
    })
}

console.log(router.getRoutes())



export default router