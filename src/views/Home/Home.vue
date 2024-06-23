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
            Home
        </div>
    </Transition>
</template>

<script lang="ts">
import Logo from '@/components/Logo/Logo.vue';

export default {
    name: 'Start',
    components: {
        Logo,
    },
    data() {
        return {
            loadingProgress: 0,
            apiHasLoaded: false,
        };
    },
    methods: {
        startLoading() {
            const interval = setInterval(() => {
                this.loadingProgress += 1;
                if (this.loadingProgress == 100) {
                    clearInterval(interval);
                    this.apiHasLoaded = true;
                }
            }, 30);
            interval;
        },
    },
    mounted() {
        this.startLoading();
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

    .logo-size-start {
        transition: all 0.8s ease-in-out;
    }

    .loading-bar {
        transition: all 0.8s ease-in-out;
    }
}

.slide-enter-from,
.slide-leave-to {
    .logo-size-start {
        transform: translateY(-30px);
        opacity: 0;
        transition-delay: 600ms;
    }

    .loading-bar {
        transform: translateY(-30px);
        opacity: 0;
        transition-delay: 200ms;
    }
}
</style>