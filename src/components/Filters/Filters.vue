<template>
    <div class="filter-wrapper">
        <FilterElement v-for="category in categories" :key="category.id" :category="category.name"
            :icon="category.icon">
        </FilterElement>
    </div>
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
            selected: false,
        };
    },
};
</script>

<style scoped lang="scss">
.filter-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    width: 100%;
    margin: 20px 0;

    .selected {
        background-color: #f2f2f2;

        p {
            display: block;
        }
    }
}
</style>