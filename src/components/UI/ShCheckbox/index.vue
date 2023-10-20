<template lang="pug">
.checkbox(
    :class="componentClasses"
    @click="onChecked"
)
    input.input(
        :id="keyField"
        type="checkbox"
        :checked="modelValue"
        :disabled="isDisabled"
        @change="onChecked"
    )

    label.label(:for="keyField")

    .name
        slot

</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
    defineProps<{
        modelValue?: boolean,
        keyField: string,
        isDisabled?: boolean,
        size?: string,
    }>(),
    {
        modelValue: false,
        keyField: 'key-id',
        isDisabled: false,
        size: 'medium',
    },
);

const emits = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
}>();

const componentClasses = computed<(string | object)[]>(() => {
    return [
        'size-' + props.size,
        {
            'disabled': props.isDisabled,
        },
    ];
});

function onChecked(): void {
    if (props.isDisabled) {
        return;
    }

    emits('update:modelValue', !props.modelValue);
}

</script>

<style lang="sass" scoped>
.checkbox
    @extend %sh-flex_row-center
    cursor: pointer

.input
    opacity: 0
    width: 0

.label
    display: inline-flex
    align-items: center
    user-select: none
    &:before
        content: ''
        display: inline-block
        width: 15px
        height: 15px
        flex-shrink: 0
        flex-grow: 0
        cursor: pointer
        border: 1px solid $sh-color-gray-3
        border-radius: 4px
        background-repeat: no-repeat
        background-position: center center
        background-color: $sh-color-white-1
           
.name
    font-size: 14px
    font-weight: 500
    color: $sh-color-dark-1
    margin-left: 8px
    line-height: 1px

.input:hover + .label::before
    background-color: $sh-color-gray-4

.input:checked + .label::before
    border-color: $sh-color-blue-1
    background-color: transparent
    // eslint-disable-next-line max-len
    background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8ZM10.9657 6.96569C11.2781 6.65327 11.2781 6.14673 10.9657 5.83431C10.6533 5.5219 10.1467 5.5219 9.83432 5.83431L7.2 8.46863L6.16569 7.43431C5.85327 7.12189 5.34673 7.12189 5.03431 7.43431C4.7219 7.74673 4.7219 8.25327 5.03431 8.56569L6.63432 10.1657C6.94673 10.4781 7.45327 10.4781 7.76569 10.1657L10.9657 6.96569Z' fill='%233B82F6'/%3E%3C/svg%3E")
    background-size: 130%

.disabled
    pointer-events: none
    opacity: 0.8
    cursor: default

.size
    &-small
        .label::before
            width: 12px
            height: 12px
        .name
            font-size: 12px
            margin-left: 6px
    &-large
        .label::before
            width: 17px
            height: 17px
        .name
            font-size: 16px
            margin-left: 10px

</style>