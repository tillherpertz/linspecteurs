<template>
    <div class="filter-icon" :class="{ selected: isSelected }" @click="toggle">
        <component :is="iconComponent" />
        <div class="filter-text">{{ category }}</div>
    </div>
</template>

<script lang="ts">
import { Cutlery, IceCream, PizzaSlice, Leaf } from '@iconoir/vue';

export default {
    name: 'FilterElement',
    props: {
        category: {
            type: String,
            required: true,
        },
        icon: {
            type: String,
            required: true,
        },
        isSelected: {
            type: Boolean,
            required: false,
        },
    },
    components: {
        Cutlery,
        IceCream,
        PizzaSlice,
        Leaf,
    },
    computed: {
        iconComponent() {
            switch (this.icon) {
                case 'cutlery':
                    return 'Cutlery';
                case 'ice-cream':
                    return 'IceCream';
                case 'pizza-slice':
                    return 'PizzaSlice';
                case 'leaf':
                    return 'Leaf';
                default:
                    return 'Cutlery';
            }
        },
    },
    data() {
        return {
            selected: false,
        };
    },
    methods: {
        toggle() {
            this.$emit('toggle');
        },
    },
};
</script>

<style scoped lang="scss">
.filter-icon {
    display: flex;
    flex-direction: row;
    gap: 5px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 10px;
    padding: 5px 10px;
    width: 30px;
    transition: width .5s, background-color 0.5s;

    .filter-text {
        display: none;
    }

    svg {
        color: #CFCFCF;
    }

    &.selected {
        width: 80px;
        background-color: #96CA84;
        box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.15);

        svg {
            color: white;
        }

        .filter-text {
            display: block;
            color: white;
        }
    }
}
</style>