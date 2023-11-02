<template lang="pug">
.customization-wrap
    .customization
        h1.title Customization

        p.intro
            | Если вы хотите изменить стили ShamUi по умолчанию (например, $sh-color-dark-1),
            | вы должны использовать sass-файлы ShamUi.

        template(
            v-for="data in dataList"
            :key="data.id"
        )
            p.text {{ data.text }}

            .code
                .code-header {{ data.codeHeader }}
                .code-template(v-html="data.codeTemplate")

</template>

<script setup lang="ts">
import { codeVariableStyles, codeClassStyles, codeImport } from '@/pages/gettingStarted/Customization/code';

const dataList = [
    {
        id: 'var',
        text: `
            Создайте свой собственный sass-файл (например, main.sass),
            содержащий как ваши собственные sass-файлы, так и @import стилей ShamUi вконце:
        `,
        codeHeader: 'Set your variables with Sass',
        codeTemplate: codeVariableStyles,
    },
    {
        id: 'class',
        text: 'Вы так же можете изменить стили любого компонента, просто переписав стили класса:',
        codeHeader: 'Сustomization of the component',
        codeTemplate: codeClassStyles,
    },
    {
        id: 'import',
        text: 'Затем импортируйте ваш общий sass-файл в проект:',
        codeHeader: 'Import',
        codeTemplate: codeImport,
    },
];
</script>

<style scoped lang="sass">
.customization-wrap
    @extend %flex_column-start-center

.customization
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

.text
    line-height: 28px
    margin-top: 12px
    font-size: 16px
    margin-top: 60px

.code
    background: $color-gray-5
    border-radius: 8px
    border: 1px solid $color-gray-3
    margin-top: 20px
    &-header
        padding: 15px 20px
        border-bottom: 1px solid $color-gray-3
        font-weight: 600
    &-template
        padding: 0 15px 15px 15px

</style>