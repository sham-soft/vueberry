<template lang="pug">
div
    .title
        slot Title

    v-input.input(
        :modelValue="modelValue"
        :type="type"
        :placeholder="placeholder"
        @update:modelValue="onInput"
    )

</template>

<script setup lang="ts">
import VInput from '@/components/common/VInput/index.vue';

withDefaults(
    defineProps<{
        modelValue?: number | string,
        type?: string,
        placeholder?: string,
    }>(),
    {
        modelValue: '',
        type: 'text',
        placeholder: '',
    },
);

const emit = defineEmits<{
  (e: 'update:modelValue', value: number | string): void
}>();

function onInput(value: number | string) {
    emit('update:modelValue', value);
}
</script>

<style lang="sass" scoped>
.title
    font-weight: 600
    font-size: 12px
    color: $color-gray-2

.input
    margin-top: 12px
    background: $color-white-1

</style>