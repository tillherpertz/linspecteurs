<template>
    <div v-if="icon === 'cutlery'" class="filter-icon" :class="{ selected: selected }" @click="toggleSelected">
        <Cutlery>
        </Cutlery>
        <div class="filter-text">{{ category }}</div>
    </div>
    <div v-if="icon === 'ice-cream'" class="filter-icon" :class="{ selected: selected }" @click="toggleSelected">
        <IceCream>
        </IceCream>
        <div class="filter-text">{{ category }}</div>
    </div>
    <div v-if="icon === 'pizza-slice'" class="filter-icon" :class="{ selected: selected }" @click="toggleSelected">
        <PizzaSlice>
        </PizzaSlice>
        <div class="filter-text">{{ category }}</div>
    </div>
    <div v-if="icon === 'leaf'" class="filter-icon" :class="{ selected: selected }" @click="toggleSelected">
        <Leaf>
        </Leaf>
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
    },
    components: {
        Cutlery,
        IceCream,
        PizzaSlice,
        Leaf,
    },
    data() {
        return {
            selected: false,
        };
    },
    methods: {
        toggleSelected() {
            this.selected = !this.selected;
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
    width: auto;
    transition: width 0.5s, background-color 0.5s;

    .filter-text {
        display: none;
    }

    &.selected {
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