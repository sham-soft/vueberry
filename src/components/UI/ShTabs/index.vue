<template lang="pug">
.tabs(:class="componentClasses")
    .tab(
        v-for="tab in tabs"
        :key="tab.id"
        :class="getActiveClass(tab.id)"
        @click="setActiveTab(tab.id)"
    )
        slot(
            :value="tab.title"
            :name="tab.id"
        ) {{ tab.title }}

</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
    defineProps<{
        modelValue?: string,
        tabs: { id: string, title: string }[],
        isColumn?: boolean,
    }>(),
    {
        modelValue: '',
        tabs: () => [],
        isColumn: false,
    },
);

const emits = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>();

const componentClasses = computed<object>(() => {
    return {
        'tabs-column': props.isColumn,
    };
});

function getActiveClass(id: string) {
    if (props.modelValue === id) {
        return 'tab-active';
    }
}

function setActiveTab(tab: string): void {
    emits('update:modelValue', tab);
}

</script>

<style lang="sass" scoped>
.tabs
    @extend %flex_row
    color: $color-dark-1

.tab
    font-size: 18px
    color: $color-dark-1
    margin-right: 20px
    cursor: pointer
    &-active
        color: $color-blue-1
        border-bottom: 2px solid $color-blue-1

.tabs-column
    @extend %flex_column
    .tab
        margin-right: 0
        margin-top: 10px
        &:first-child
            margin-top: 0

</style>