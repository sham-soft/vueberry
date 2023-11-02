<template lang="pug">
.validate
    h1.title Validate

    p.intro Набор решений для контроля ввода текста.

    .form
        sh-text-field.field Имя

        sh-text-field.field Фамилия

        sh-text-field.field Отчество

        sh-button.field(@click="onClick") Отправить

</template>

<script setup lang="ts">
function onClick() {
    alert('Черт');
}
</script>

<style scoped lang="sass">
.validate
    width: 768px
    padding: 32px 0 80px 0

.title
    font-weight: 600
    font-size: 48px

.intro
    color: $color-dark-2
    margin-top: 12px
    font-size: 18px
    padding-bottom: 30px
    border-bottom: 2px solid $color-gray-3

.form
    background: $color-gray-5
    border-radius: 8px
    border: 1px solid $color-gray-3
    margin-top: 60px
    padding: 15px 20px

.field
    margin-top: 20px

</style>