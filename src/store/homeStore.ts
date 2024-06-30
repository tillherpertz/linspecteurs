import { defineStore } from 'pinia'
import api from '@/api/api';
import HomeContent from '@/types/HomeContent.ts';

export const useHomeStore = defineStore({
    id: 'home',
    state: () => ({
        home: [] as HomeContent[],
    }),
    actions: {
        async fetchHomeContent() {
            try {
                const result = await api.getHomeContent();
                this.home = result;
            } catch (e) {
                console.error(e);
            }
        }
    }
});