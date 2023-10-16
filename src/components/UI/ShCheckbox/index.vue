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
    @extend %flex_row-center
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
        border: 1px solid $color-gray-3
        border-radius: 4px
        background-repeat: no-repeat
        background-position: center center
        background-color: $color-white-1
           
.name
    font-size: 14px
    font-weight: 500
    color: $color-dark-1
    margin-left: 8px
    line-height: 1px

.input:hover + .label::before
    background-color: $color-gray-4

.input:checked + .label::before
    border-color: $color-blue-1
    background-color: transparent
    background-image: url('/img/radioMark.svg')
    background-size: 130% // TODO - в будущем удалить и заменить на иконку чекбокса

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