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
        <div v-else class="content-wrapper">
            <Header></Header>
            <Title :headline="generatedWelcome.headline" :subHeadline="generatedWelcome.subHeadline">
            </Title>
            <Filters :categories="categories"></Filters>
            <!-- <Recipes></Recipes> -->
        </div>
    </Transition>
</template>

<script lang="ts">
import Logo from '@/components/Logo/Logo.vue';
import Header from '@/components/Header/Header.vue';
import HomeContent from '@/types/HomeContent';
import { useStore } from '@/store/store';
import Title from '@/components/Title/Title.vue';
import Filters from '@/components/Filters/Filters.vue';
import Category from '@/types/Category';


export default {
    name: 'Home',
    components: {
        Logo,
        Header,
        Title,
        Filters,
    },
    data() {
        return {
            loadingProgress: 0,
            apiHasLoaded: false,
            generatedWelcome: {} as HomeContent,
            categories: {} as Category[],
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
            const totalTasks = 3; // Number of async tasks
            const increment = Math.floor(100 / totalTasks); // Progress increment per task

            await useStore().fetchHomeContent();
            this.updateProgress(increment);

            await useStore().fetchRecipes();
            this.updateProgress(increment);

            await useStore().fetchCategories();
            this.categories = useStore().categories;
            this.updateProgress(100);
        },
        randomlySelectWelcome() {
            const message = {
                headline: '',
                subHeadline: '',
            };
            const randomMessageNumber = Math.floor(Math.random() * useStore().home.length);
            message.headline = useStore().home[randomMessageNumber].headline;
            message.subHeadline = useStore().home[randomMessageNumber].subHeadline;
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
.content-wrapper {
    margin: 0 20px;
}

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