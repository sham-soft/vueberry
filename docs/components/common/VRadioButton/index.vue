<template lang="pug">
.radio
    .radio__title
        slot Название радиокнопки

    .radio__button-group
        .radio__button(
            v-for="item in radioList"
            :key="keyField + item.id"
        )
            input.radio__input(
                :id="keyField + item.id"
                type="radio"
                :value="item.id"
                :checked="modelValue === item.id"
                :name="keyField + item.id"
                @change="$emit('update:modelValue', item.id)"
            )

            label.radio__label(:for="keyField + item.id")

            .radio__name(@click="$emit('update:modelValue', item.id)") {{ item.name }}

</template>

<script setup lang="ts">
interface TypeRadio {
    id: string | number,
    name: string,
}

withDefaults(
    defineProps<{
        modelValue?: number | string,
        radioList?: TypeRadio[],
        keyField: string,
    }>(),
    {
        modelValue: '',
        radioList: () => [],
    },
);

defineEmits<{
    (e: 'update:modelValue', value: number | string): void
}>();
</script>

<style lang="sass" scoped>
.radio
    &__title
        font-weight: 600
        font-size: 12px
        color: $color-gray-2

    &__button-group
        display: flex
        align-items: center
        margin-top: 12px

    &__button
        display: flex
        align-items: center
        margin-left: 32px
        &:first-child
            margin-left: 0

    &__input
        opacity: 0
        width: 0            

    &__name
        font-size: 14px
        font-weight: 500
        margin-left: 8px
        cursor: pointer

/* Кастомизация input c type="radio" */

/* для элемента label, связанного с .custom-radio */
.radio__input + label
    display: inline-flex
    align-items: center
    padding-top: 2px

/* создание в label псевдоэлемента before со следующими стилями */
.radio__input + label::before
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

.radio__input + label:hover::before
    background-color: $color-gray-4

/* стили при наведении курсора на radio */
.radio__input:not(:disabled):not(:checked) + label:hover::before
    border-color: $color-gray-3

/* стили для активного чекбокса (при нажатии на него) */
.radio__input:not(:disabled):active + label::before
    background-color: $color-white-1
    border-color: $color-gray-3

/* стили для чекбокса, находящегося в фокусе и не находящегося в состоянии checked */
.radio__input:focus:not(:checked) + label::before
    border-color: $color-blue-1

/* стили для чекбокса, находящегося в состоянии checked */
.radio__input:checked + label::before
    border-color: $color-blue-1
    background-color: transparent
    background-image: url('../../../assets/img/radioMark.svg')

/* стили для чекбокса, находящегося в состоянии disabled */
.radio__input:disabled + label::before
    background-color: $color-white-3

</style>