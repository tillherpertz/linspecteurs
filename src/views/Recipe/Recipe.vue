<template>
    <Transition :duration="2000" name="slide">
        <div>
            <div class="content-wrapper">
                <div class="image-wrapper">
                    <img :src="imageLink" alt="recipe image" class="recipe-image" />
                </div>
            </div>
            <ViewSwitch @switchView="switchTopic()" />
            <Transition :duration="500" name="fade" @afterLeave="handleAfterLeave('Ingredients')">
                <Ingredients v-if="showIngredients" />
            </Transition>
            <Transition :duration="500" name="fade" @afterLeave="handleAfterLeave('Instructions')">
                <Instructions v-if="showInstructions" />
            </Transition>
        </div>
    </Transition>
</template>

<script lang="ts">

import Header from '@/components/Header/Header.vue';
import Title from '@/components/Title/Title.vue';
import { generateImageLink } from '@/utils/utilities';
import ViewSwitch from '@/components/ViewSwitch/ViewSwitch.vue';
import Ingredients from '@/components/Ingredients/Ingredients.vue';
import Instructions from '@/components/Instructions/Instructions.vue';
import Recipe from '@/types/Recipe';
import { useStore } from '@/store/store';

export default {
    name: 'Recipe',
    components: {
        Header,
        Title,
        ViewSwitch,
        Instructions,
        Ingredients
    },
    props: {
        id: {
            type: String,
            required: true
        }
    },
    data() {
        console.log(this.getRecipe().collectionId);
        return {
            recipe: this.getRecipe() as Recipe,
            imageLink: '',
            isScrolled: false,
            showIngredients: true,
            showInstructions: false,
            transitioning: false,
        };
    },
    created() {
        this.recipe = this.getRecipe();
        this.imageLink = generateImageLink(this.recipe.collectionId, this.recipe.id, this.recipe.image);
    },
    methods: {
        getRecipe(): Recipe {
            return useStore().recipes.find((recipe: Recipe) => recipe.id === this.$route.params.id) as Recipe;
        },
        switchTopic() {
            if (this.transitioning) return; // Prevent multiple transitions at the same time
            this.transitioning = true;

            if (this.showIngredients) {
                this.showIngredients = false; // Trigger fade-out for Ingredients
            } else if (this.showInstructions) {
                this.showInstructions = false; // Trigger fade-out for Instructions
            }
        },
        handleAfterLeave(component: string) {
            if (component === 'Ingredients') {
                this.showInstructions = true; // Show Instructions after Ingredients fades out
            } else if (component === 'Instructions') {
                this.showIngredients = true; // Show Ingredients after Instructions fades out
            }

            this.transitioning = false; // Reset the transition flag
        },
    }
}

</script>

<style scoped lang="scss">
.header-image-wrapper {
    //position: fixed;
    z-index: 1;
    height: 100vh;
    background: linear-gradient(180deg, rgba(234, 234, 234, 1) 0%, rgba(234, 234, 234, 1) 35%, rgba(255, 255, 255, 1) 35%, rgba(255, 255, 255, 1) 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.content-wrapper {
    margin: 0 20px;
}

.image-wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 2em;

    .recipe-image {
        width: 80%;
        height: auto;
        border-radius: 20px;
        box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.25);
    }
}
</style>