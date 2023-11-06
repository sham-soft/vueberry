<template lang="pug">
.vb-tabs(:class="componentClasses")
    .vb-tab(
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
        'vb-column': props.isColumn,
    };
});

function getActiveClass(id: string) {
    if (props.modelValue === id) {
        return 'vb-tab-active';
    }
}

function setActiveTab(tab: string): void {
    emits('update:modelValue', tab);
}

</script>