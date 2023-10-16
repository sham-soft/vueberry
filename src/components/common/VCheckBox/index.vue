<template lang="pug">
.checkbox
    input.checkbox-input(
        :id="keyField"
        type="checkbox"
        :checked="modelValue"
        @change="onChecked"
    )

    label(:for="keyField")

    .checkbox-name
        slot Название флажка

</template>

<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        modelValue?: boolean,
        keyField: string,
    }>(),
    {
        modelValue: false,
        keyField: '',
    },
);

const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
}>();

function onChecked(): void {
    emit('update:modelValue', !props.modelValue);
}
</script>

<style lang="sass" scoped>
.checkbox
    @extend %flex_row-center
    margin-left: 32px
    &:first-child
        margin-left: 0

    &-input
        opacity: 0
        width: 0            

    &-name
        font-size: 14px
        font-weight: 500
        color: $color-dark-1
        margin-left: 8px
        cursor: pointer

/* Кастомизация input c type="checkbox" */

/* для элемента label, связанного с .checkbox-input */
.checkbox-input + label
    display: inline-flex
    align-items: center
    user-select: none
    padding-top: 2px

/* создание в label псевдоэлемента before со следующими стилями */
.checkbox-input + label::before
    content: ''
    display: inline-block
    width: 15px
    height: 15px
    flex-shrink: 0
    flex-grow: 0
    border: 1px solid $color-gray-3
    border-radius: 4px
    background-repeat: no-repeat
    background-position: center center
    cursor: pointer
    background-color: $color-white-1

.checkbox-input + label:hover::before
    background-color: $color-gray-4

/* стили при наведении курсора на checkbox */
.checkbox-input:not(:disabled):not(:checked) + label:hover::before
    border-color: $color-gray-3

/* стили для активного чекбокса (при нажатии на него) */
.checkbox-input:not(:disabled):active + label::before
    background-color: $color-white-1
    border-color: $color-gray-3

/* стили для чекбокса, находящегося в фокусе и не находящегося в состоянии checked */
.checkbox-input:focus:not(:checked) + label::before
    border-color: $color-blue-1

/* стили для чекбокса, находящегося в состоянии checked */
.checkbox-input:checked + label::before
    border-color: $color-blue-1
    background-color: transparent
    background-image: url('/img/radioMark.svg')
    background-size: 130% // TODO - в будущем удалить и заменить на иконку чекбокса

/* стили для чекбокса, находящегося в состоянии disabled */
.checkbox-input:disabled + label::before
    background-color: $color-white-3

</style>