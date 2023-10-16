<template lang="pug">
.radio
    .label(v-if="isLabel")
        slot {{ label }}

    .button-group(:class="componentClasses")
        .button(
            v-for="item in radioList"
            :key="keyField + item.id"
        )
            input.input-field(
                :id="keyField + item.id"
                type="radio"
                :value="item.id"
                :checked="modelValue === item.id"
                :name="keyField + item.id"
                @change="setRadio(item.id)"
            )

            label.input-label(:for="keyField + item.id")

            .name(@click="setRadio(item.id)") {{ item.name }}

</template>

<script setup lang="ts">
import { computed, toRef } from 'vue';
import { useLabel } from '@/composables/label';

interface TypeRadio {
    id: string | number,
    name: string,
}

const props = withDefaults(
    defineProps<{
        modelValue?: number | string,
        keyField: string,
        radioList?: TypeRadio[],
        label?: string,
        isColumn?: boolean,
    }>(),
    {
        modelValue: '',
        radioList: () => [],
        label: '',
        isColumn: false,
    },
);

const emits = defineEmits<{
    (e: 'update:modelValue', value: number | string): void
}>();

const componentClasses = computed<object>(() => {
    return {
        'group-column': props.isColumn,
    };
});

function setRadio(value: number | string): void {
    emits('update:modelValue', value);
}

// BLOCK "label"
const refLabel = toRef(props, 'label');
const { isLabel } = useLabel(refLabel);

</script>

<style lang="sass" scoped>
.label
    font-weight: 600
    font-size: 12px
    color: $color-gray-2
    margin-bottom: 12px

.button-group
    @extend %flex_row-center

.button
    @extend %flex_row-center
    margin-left: 32px
    &:first-child
        margin-left: 0

.radio
    &:has(.group-column)
        .button-group
            @extend %flex_column-start-start
        .button
            margin-top: 15px
            margin-left: 0

.input-field
    opacity: 0
    width: 0

.input-label
    display: inline-flex
    align-items: center
    user-select: none
    padding-top: 2px

.input-label::before
    content: ''
    display: inline-block
    width: 15px
    height: 15px
    flex-shrink: 0
    flex-grow: 0
    border: 1px solid $color-gray-3
    border-radius: 50%
    background-repeat: no-repeat
    background-position: center center
    cursor: pointer
    background-color: $color-white-1

.input-field:hover + .input-label::before
    background-color: $color-gray-4

.input-field:checked + .input-label::before
    border-color: $color-blue-1
    background-color: transparent
    background-image: url('/img/radioMark.svg')

.name
    font-size: 14px
    font-weight: 500
    color: $color-dark-1
    margin-left: 8px
    cursor: pointer

</style>