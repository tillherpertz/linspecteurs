<template>
    <div class="title">
        <Transition :duration="2000" name="fade">
            <div v-if="showTitle">
                <h1 class="headline">{{ headline }}</h1>
                <h2 class="subHeadline">{{ subHeadline }}</h2>
            </div>
        </Transition>
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
    data() {
        return {
            showTitle: false,
        };
    },
    mounted() {
        setTimeout(() => {
            this.showTitle = true;
        }, 1000);
    }
};

</script>

<style lang="scss">
h1,
h2 {
    margin-block: 0;
}

.title {
    height: 54px;
    margin-bottom: 1rem;
}

.fade-enter-active,
.fade-leave-active {
    .headline {
        transition: all 0.5s ease-in-out;
    }

    .subHeadline {
        transition: all 0.5s ease-in-out;
        transition-delay: 0.2s;
    }
}

.fade-enter-from,
.fade-leave-to {
    .headline {
        opacity: 0;
        transform: translateX(-20px);
    }

    .subHeadline {
        opacity: 0;
        transform: translateX(-20px);
    }
}
</style>