<template lang="pug">
v-input.search(
    :modelValue="modelValue"
    :placeholder="placeholder"
    @update:modelValue="onInput"
)
    template(v-slot:left)
        v-icon.icon(path="img/search.svg")

</template>

<script setup lang="ts">
import VIcon from '@/components/common/VIcon/index.vue';
import VInput from '@/components/common/VInput/index.vue';

withDefaults(
    defineProps<{
        modelValue?: number | string,
        placeholder?: string,
    }>(),
    {
        modelValue: '',
        placeholder: '',
    },
);

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>();

function onInput(value: number | string) {
    emit('update:modelValue', value as string);
}
</script>

<style lang="sass" scoped>
.icon
    width: 20px
    height: 20px
    margin-right: 8px
    fill: $color-gray-2

</style>