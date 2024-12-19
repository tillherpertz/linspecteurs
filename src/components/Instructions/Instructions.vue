<template>
    <Transition :duration="2000" name="fade">
        <div class="topic-wrapper">
            <h5>Zubereitung</h5>
            <hr>
        </div>
    </Transition>
</template>

<script lang="ts">
export default {
    name: 'Instructions',
};

</script>

<style scoped lang="scss">
.topic-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin: 0 20px;

    hr {
        width: 90%;
    }
}

.fade-enter-active,
.fade-leave-active {

    h5,
    hr {
        transition: all 0.5s ease-in-out;
    }
}

.fade-enter-from,
.fade-leave-to {

    h5,
    hr {
        opacity: 0;
        transform: translateX(-20px);
    }
}
</style>