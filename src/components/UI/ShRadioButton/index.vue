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
import { useLabel } from '../../../composables/label';

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
    color: $sh-color-gray-2
    margin-bottom: 12px

.button-group
    @extend %sh-flex_row-center

.button
    @extend %sh-flex_row-center
    margin-left: 32px
    &:first-child
        margin-left: 0

.radio
    &:has(.group-column)
        .button-group
            @extend %sh-flex_column-start-start
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
    border: 1px solid $sh-color-gray-3
    border-radius: 50%
    background-repeat: no-repeat
    background-position: center center
    cursor: pointer
    background-color: $sh-color-white-1

.input-field:hover + .input-label::before
    background-color: $sh-color-gray-4

.input-field:checked + .input-label::before
    border-color: $sh-color-blue-1
    background-color: transparent
    // eslint-disable-next-line max-len
    background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8ZM10.9657 6.96569C11.2781 6.65327 11.2781 6.14673 10.9657 5.83431C10.6533 5.5219 10.1467 5.5219 9.83432 5.83431L7.2 8.46863L6.16569 7.43431C5.85327 7.12189 5.34673 7.12189 5.03431 7.43431C4.7219 7.74673 4.7219 8.25327 5.03431 8.56569L6.63432 10.1657C6.94673 10.4781 7.45327 10.4781 7.76569 10.1657L10.9657 6.96569Z' fill='%233B82F6'/%3E%3C/svg%3E")

.name
    font-size: 14px
    font-weight: 500
    color: $sh-color-dark-1
    margin-left: 8px
    cursor: pointer

</style>