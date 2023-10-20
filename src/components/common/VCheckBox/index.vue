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
    @extend %sh-flex_row-center
    margin-left: 32px
    &:first-child
        margin-left: 0

    &-input
        opacity: 0
        width: 0            

    &-name
        font-size: 14px
        font-weight: 500
        color: $sh-color-dark-1
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
    border: 1px solid $sh-color-gray-3
    border-radius: 4px
    background-repeat: no-repeat
    background-position: center center
    cursor: pointer
    background-color: $sh-color-white-1

.checkbox-input + label:hover::before
    background-color: $sh-color-gray-4

/* стили при наведении курсора на checkbox */
.checkbox-input:not(:disabled):not(:checked) + label:hover::before
    border-color: $sh-color-gray-3

/* стили для активного чекбокса (при нажатии на него) */
.checkbox-input:not(:disabled):active + label::before
    background-color: $sh-color-white-1
    border-color: $sh-color-gray-3

/* стили для чекбокса, находящегося в фокусе и не находящегося в состоянии checked */
.checkbox-input:focus:not(:checked) + label::before
    border-color: $sh-color-blue-1

/* стили для чекбокса, находящегося в состоянии checked */
.checkbox-input:checked + label::before
    border-color: $sh-color-blue-1
    background-color: transparent
    // eslint-disable-next-line max-len
    background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8ZM10.9657 6.96569C11.2781 6.65327 11.2781 6.14673 10.9657 5.83431C10.6533 5.5219 10.1467 5.5219 9.83432 5.83431L7.2 8.46863L6.16569 7.43431C5.85327 7.12189 5.34673 7.12189 5.03431 7.43431C4.7219 7.74673 4.7219 8.25327 5.03431 8.56569L6.63432 10.1657C6.94673 10.4781 7.45327 10.4781 7.76569 10.1657L10.9657 6.96569Z' fill='%233B82F6'/%3E%3C/svg%3E")
    background-size: 130%

/* стили для чекбокса, находящегося в состоянии disabled */
.checkbox-input:disabled + label::before
    background-color: $sh-color-white-3

</style>