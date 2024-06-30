<template>
    <div>
        <h1>{{ headline }}</h1>
        <h2>{{ subHeadline }}</h2>
    </div>
</template>

<script lang="ts">

export default {
    name: 'Title',
    props: {
        headline: {
            type: String,
            required: true,
        },
        subHeadline: {
            type: String,
            required: true,
        },
    },
};

</script>

<style scoped lang="scss"></style>