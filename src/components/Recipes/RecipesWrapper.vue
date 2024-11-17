<template>
    <h3>Rezepte</h3>
    <div class="recipe-wrapper">
        <RecipeTile v-for="recipe in recipes" :key="recipe.id" :recipe="recipe"></RecipeTile>
    </div>
</template>

<script lang="ts">
import { useStore } from '@/store/store';

import RecipeTile from './RecipeTile.vue';

export default {
    name: 'RecipesWrapper',
    components: {
        RecipeTile,
    },
    data() {
        console.log(useStore().recipes);
        return {
            recipes: useStore().recipes,
        };
    },
};

</script>

<style scoped lang="scss">
.recipe-wrapper {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 20px;
}
</style>