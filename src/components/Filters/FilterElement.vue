<template>
    <div class="filter-icon">
        <Cutlery v-if="icon === 'cutlery'" @click="toggleSelected"></Cutlery>
        <IceCream v-if="icon === 'ice-cream'" @click="toggleSelected"></IceCream>
        <PizzaSlice v-if="icon === 'pizza-slice'" @click="toggleSelected"></PizzaSlice>
        <Leaf v-if="icon === 'leaf'" @click="toggleSelected"></Leaf>
    </div>
    <div v-if="selected" class="filter-text">{{ category }}</div>
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
        console.log(this.icon)
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

<style scoped lang="scss"></style>