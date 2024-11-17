<template>
    <div class="filter-wrapper">
        <FilterElement v-for="category in categories" :key="category.id" :category="category.name" :icon="category.icon"
            :isSelected="category.icon === selectedIcon" @toggle="setSelectedIcon(category.icon)">
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
            selectedIcon: '',
        };
    },
    methods: {
        setSelectedIcon(icon: string) {
            this.selectedIcon = this.selectedIcon === icon ? '' : icon;
        },
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

        p {
            display: block;
        }
    }
}
</style>