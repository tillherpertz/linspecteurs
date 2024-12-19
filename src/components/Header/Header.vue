<template>
    <div class="header-wrapper">
        <div class="nav-arrow-container">
            <router-link :to="homeRoute">
                <NavArrowLeft v-if="isNotHome"></NavArrowLeft>
            </router-link>
        </div>
        <Logo logoSize="1.25em"></Logo>
        <Search></Search>
    </div>
</template>
<script lang="ts">
import { NavArrowLeft, Search } from '@iconoir/vue';
import Logo from '@/components/Logo/Logo.vue';

export default {
    name: 'Header',
    components: {
        NavArrowLeft,
        Search,
        Logo,
    },
    data() {
        return {
            isNotHome: this.$route.name !== 'home',
            homeRoute: '/'
        };
    },
};
</script>
<style scoped lang="scss">
.header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0;
    height: 60px;

    .nav-arrow-container {
        display: flex;
        align-items: center;
        height: 24px;
        width: 24px;
    }
}
</style>