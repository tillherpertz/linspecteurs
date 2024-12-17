<template>
    <div class="recipe-tile">
        <img :src="imageLink" alt="recipe image" />
        <h4>{{ recipe.headline }}</h4>
        <p>{{ recipe.subHeadline }}</p>
        <RouterLink :to="recipeRoute">
            <YoshiButton />
        </RouterLink>
    </div>
</template>

<script lang="ts">
import { generateImageLink } from '../../utils/utilities.ts';
import Recipe from '@/types/Recipe';
import YoshiButton from '../YoshiButton/YoshiButton.vue';
import { RouterLink } from 'vue-router';

export default {
    name: 'RecipeTile',
    components: {
        YoshiButton,
    },
    props: {
        recipe: {
            type: Object as () => Recipe,
            required: true,
        },
    },
    data() {
        return {
            imageLink: generateImageLink(this.recipe.collectionId, this.recipe.id, this.recipe.image),
            recipeRoute: `/recipe/${this.recipe.id}`,
        };
    },
}
</script>

<style scoped lang="scss">
.recipe-tile {
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
        box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.25);
    }
}
</style>