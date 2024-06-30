<template>
    <Transition :duration="2000" name="slide">
        <div v-if="!apiHasLoaded" class='loadingScreen'>
            <div class="loading-wrapper">
                <Logo class="logo-size-start"></Logo>
                <div class="loaded">
                    <div class="loading-bar">{{ loadingProgress }}%</div>
                </div>
            </div>
        </div>
        <div v-else>
            <Header></Header>
            <Title :headline="generatedWelcome.headline" :subHeadline="generatedWelcome.subHeadline"></Title>
        </div>
    </Transition>
</template>

<script lang="ts">
import Logo from '@/components/Logo/Logo.vue';
import Header from '@/components/Header/Header.vue';
import { useRecipesStore } from '@/store/recipeStore';
import HomeContent from '@/types/HomeContent';
import { useHomeStore } from '@/store/homeStore';
import Title from '@/components/Title/Title.vue';

export default {
    name: 'Start',
    components: {
        Logo,
        Header,
        Title
    },
    data() {
        return {
            loadingProgress: 0,
            apiHasLoaded: false,
            generatedWelcome: {} as HomeContent,
        };
    },
    methods: {
        updateProgress(increment: number) {
            this.loadingProgress += increment;
            if (this.loadingProgress >= 100) {
                this.apiHasLoaded = true;
            }
        },
        async fillStores() {
            const totalTasks = 2; // Number of async tasks
            const increment = 100 / totalTasks; // Progress increment per task

            await useHomeStore().fetchHomeContent();
            this.updateProgress(increment);

            await useRecipesStore().fetchRecipes();
            this.updateProgress(increment);

            console.log('Stores filled');
        },
        randomlySelectWelcome() {
            const message = {
                headline: '',
                subHeadline: '',
            };
            const randomMessageNumber = Math.floor(Math.random() * useHomeStore().home.length);
            message.headline = useHomeStore().home[randomMessageNumber].headline;
            message.subHeadline = useHomeStore().home[randomMessageNumber].subHeadline;
            return message;
        },
    },
    async beforeMount() {
        this.fillStores().then(() => {
            this.generatedWelcome = this.randomlySelectWelcome();
        });
    },
};
</script>

<style scoped lang="scss">
.loading-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #CFCFCF;
}

.logo-size-start {
    position: absolute;
    z-index: 1;
    font-size: 26px;
}

.loaded {
    position: absolute;
    width: auto;
    z-index: 0;
}

.loading-bar {
    font-family: "Libre Caslon Display";
    font-size: 6em;
    color: #C3C3C3;
}

.slide-enter-active,
.slide-leave-active {

    .loading-wrapper {
        transition: all 0.8s ease-in-out;
    }

    .logo-size-start {
        transition: all 0.8s ease-in-out;
    }

    .loading-bar {
        transition: all 0.8s ease-in-out;
    }
}

.slide-enter-from,
.slide-leave-to {
    .loading-wrapper {
        height: 0;
        opacity: 0;
        transition-delay: 600ms;
    }

    .logo-size-start {
        transform: translateY(-30px);
        opacity: 0;
        transition-delay: 400ms;
    }

    .loading-bar {
        transform: translateY(-30px);
        opacity: 0;
        transition-delay: 200ms;
    }
}
</style>