<template>
    <div class="filter-wrapper">
        <SwitchIcon v-for="view in views" :key="view.id" :view="view.name" :icon="view.icon"
            :isSelected="view.icon === selectedIcon" :isDefault="view.isDefault" @toggle="setSelectedIcon(view.icon)"
            @click="switchView">
        </SwitchIcon>
    </div>
</template>

<script lang="ts">
import SwitchIcon from './SwitchIcon.vue';

export default {
    name: 'ViewSwitch',
    components: {
        SwitchIcon,
    },
    data() {
        return {
            selectedIcon: '',
            views: [
                {
                    name: 'Zutaten',
                    icon: 'listSelect',
                    isDefault: true,
                    id: 1,
                },
                {
                    name: 'Zubereitung',
                    icon: 'bbq',
                    isDefault: false,
                    id: 2,
                }
            ]
        };
    },
    methods: {
        setSelectedIcon(icon: string) {
            this.selectedIcon = this.selectedIcon === icon ? '' : icon;
        },
        switchView() {
            this.$emit('switchView');
        }
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
    width: auto;
    gap: 10px;
    height: 20px;
    margin: 20px 0;

    .selected {

        p {
            display: block;
        }
    }
}
</style>