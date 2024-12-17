<template>
    <Header></Header>
    <Title :headline="recipe.headline" :subHeadline="recipe.subHeadline" />
    <img :src="imageLink" alt="recipe image" />
</template>

<script lang="ts">

import Recipe from '@/types/Recipe';
import Header from '@/components/Header/Header.vue';
import Title from '@/components/Title/Title.vue';
import { generateImageLink } from '@/utils/utilities';

export default {
    name: 'Recipe',
    components: {
        Header,
        Title
    },
    props: {
        recipe: {
            type: Object as () => Recipe,
            required: true
        }
    },
    data() {
        return {
            imageLink: generateImageLink(this.recipe.collectionId, this.recipe.id, this.recipe.image)
        };
    },
}

</script>

<style scoped lang="scss"></style>