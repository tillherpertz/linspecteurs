<template>
    <div class="logo" :style="{ fontSize: computedLogoSize }">
        Les Inspecteurs
    </div>
</template>

<script lang="ts">

export default {
    name: 'Logo',
    props: {
        logoSize: {
            type: String,
            default: '1.25em',
        },
    },
    computed: {
        computedLogoSize(): string {
            return this.logoSize;
        },
    },
};
</script>

<style lang="scss" scoped>
.logo {
    font-family: 'Libre Caslon Display';
    color: black;
}
</style>
