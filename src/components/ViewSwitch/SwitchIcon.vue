<template>
    <div class="view-icon" :class="{ selected: isSelected, active: defaultClass }" @click="toggle">
        <component :is="iconComponent" />
    </div>
</template>

<script lang="ts">
import { ListSelect, Bbq } from '@iconoir/vue';

export default {
    name: 'FilterElement',
    props: {
        view: {
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
        isDefault: {
            type: Boolean,
            required: true,
        },
    },
    components: {
        ListSelect,
        Bbq,
    },
    computed: {
        iconComponent() {
            switch (this.icon) {
                case 'listSelect':
                    return 'ListSelect';
                case 'bbq':
                    return 'Bbq';
                default:
                    return 'ListSelect';
            }
        },
    },
    data() {
        return {
            selected: false,
            defaultClass: this.isDefault,
        };
    },
    methods: {
        toggle() {
            document.querySelectorAll('.view-icon.active').forEach((element) => {
                element.classList.remove('active');
            });
            this.defaultClass = false;
            this.$emit('toggle');
        },
    },
};
</script>

<style scoped lang="scss">
.view-icon {
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


    &.selected,
    &.active {
        width: 35px;
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