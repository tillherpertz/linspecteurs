import PocketBase from 'pocketbase';
import Recipe from '../types/Recipe.ts';
import HomeContent from '../types/HomeContent.ts';
import Category from '@/types/Category.ts';

const apiUrl = import.meta.env.VITE_POCKETBASE_API_URL;
const apiUser = import.meta.env.VITE_POCKETBASE_API_USER;
const apiPass = import.meta.env.VITE_POCKETBASE_API_PASS;

const pb = new PocketBase(apiUrl);

// @ts-ignore
const authData = await pb.admins.authWithPassword(apiUser, apiPass);

export default {
    async getHomeContent(): Promise<HomeContent[]> {
        try {
            const result: HomeContent[] = await pb.collection('home').getFullList({
                sort: '-created',
            });
            return result;
        } catch (e) {
            throw e;
        }
    },
    async getRecipes(): Promise<Recipe[]> {
        try {
            const result: Recipe[] = await pb.collection('recipes').getFullList({
                sort: '-created',
            });
            return result;
        } catch (e) {
            throw e;
        }
    },
    async getCategories(): Promise<Category[]> {
        try {
            const result: Category[] = await pb.collection('categories').getFullList({
                sort: 'name',
            });
            return result;
        } catch (e) {
            throw e;
        }
    }
}