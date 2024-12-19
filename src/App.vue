<template>
    <Home></Home>
</template>


<script lang="ts">

import Home from '@/views/Home/Home.vue';
export default {
    components: {
        Home,
    },
    data() {
        return {
        };
    }
};

</script>


<style scoped lang="scss">
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
