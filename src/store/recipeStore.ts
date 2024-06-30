import { defineStore } from 'pinia'
import api from '@/api/api';
import Recipe from '@/types/Recipe';

export const useRecipesStore = defineStore({
    id: 'recipes',
    state: () => ({
        recipes: [] as Recipe[],
    }),
    actions: {
        async fetchRecipes() {
            try {
                const result = await api.getRecipes();
                this.recipes = result;
            } catch (e) {
                console.error(e);
            }
        }
    }
});