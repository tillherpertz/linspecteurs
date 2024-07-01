import { defineStore } from 'pinia'
import api from '@/api/api';
import HomeContent from '@/types/HomeContent.ts';
import Recipe from '@/types/Recipe';
import Category from '@/types/Category';

export const useStore = defineStore({
    id: 'home',
    state: () => ({
        home: [] as HomeContent[],
        recipes: [] as Recipe[],
        categories: [] as Category[],
    }),
    actions: {
        async fetchHomeContent() {
            try {
                const result = await api.getHomeContent();
                this.home = result;
            } catch (e) {
                console.error(e);
            }
        },
        async fetchRecipes() {
            try {
                const result = await api.getRecipes();
                this.recipes = result;
            } catch (e) {
                console.error(e);
            }
        },
        async fetchCategories() {
            try {
                const result = await api.getCategories();
                this.categories = result;
            } catch (e) {
                console.error(e);
            }
        }
    }
});