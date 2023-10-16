<template lang="pug">
.switch
    .switch__title
        slot Название радиокнопки

    input.switch__input(
        :id="keyField"
        :class="componentClasses"
        type="checkbox"
        :value="modelValue"
        @change="$emit('update:modelValue', !modelValue)"
    )

    label(:for="keyField")

</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
    defineProps<{
        modelValue?: boolean,
        keyField: string,
    }>(),
    {
        modelValue: false,
    },
);

defineEmits<{
    (e: 'update:modelValue', value: boolean): void
}>();

const componentClasses = computed<object>(() => {
    return {
        'input_checked': !!props.modelValue,
    };
});

</script>

<style lang="sass" scoped>
.switch
    &__title
        font-weight: 600
        font-size: 12px
        color: $color-gray-2

    &__input
        height: 0
        width: 0
        visibility: hidden     

/* Кастомизация input c type="checkbox" */

label
    cursor: pointer
    text-indent: -9999px
    width: 40px
    height: 20px
    background: $color-gray-2
    display: inline-flex
    margin-top: 12px
    border-radius: 10px
    position: relative

label:after
    content: ''
    position: absolute
    top: 3px
    left: 3px
    width: 14px
    height: 14px
    background: $color-white-1
    border-radius: 10px
    transition: 0.3s

.input_checked + label
    background: $color-blue-1

.input_checked + label:after
    left: calc(100% - 3px)
    transform: translateX(-100%)

label:active:after
    width: 17px

</style>