<template>
    <FilterElement v-for="category in categories" :key="category.id" :category="category.name" :icon="category.icon">
    </FilterElement>
</template>

<script lang="ts">
import Category from '@/types/Category';
import FilterElement from '@/components/Filters/FilterElement.vue';

export default {
    name: 'Filters',
    components: {
        FilterElement,
    },
    props: {
        categories: {
            type: Array as () => Category[],
            required: true,
        },
    },
    data() {
        return {

        };
    },
    methods: {

    },
};
</script>

<style scoped lang="scss"></style>