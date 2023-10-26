<template lang="pug">
.customization-wrap
    .customization
        h1.title Customization

        p.intro
            | Если вы хотите изменить стили ShamUi по умолчанию (например, $sh-color-dark-1),
            | вы должны использовать sass-файлы ShamUi.

        p.text
            | Создайте свой собственный sass-файл (например, main.sass),
            | содержащий как ваши собственные sass-файлы, так и @import стилей ShamUi вконце:

        .code
            .code-header Set your variables with Sass
            .code-template(v-html="codeSass")

        p.text Затем импортируйте ваш общий sass-файл в ваш проект:

        .code
            .code-header Import
            .code-template(v-html="codeImport")

</template>

<script setup lang="ts">
/* eslint-disable max-len */
const codeSass = `
<pre>
 <code id="htmlViewer" style="color:rgb(47, 51, 55); font-weight:400;display:block;padding: .5em;"><span style="color:rgb(101, 110, 119); font-weight:400;">// Переопределение переменных</span>
<span style="color:rgb(84, 121, 13); font-weight:400;">$sh</span>-color-dark-<span style="color:rgb(183, 85, 1); font-weight:400;">1</span>: <span style="color:rgb(101, 110, 119); font-weight:400;">#000;</span>
<span style="color:rgb(84, 121, 13); font-weight:400;">$sh</span>-color-gray-<span style="color:rgb(183, 85, 1); font-weight:400;">2</span>: <span style="color:rgb(101, 110, 119); font-weight:400;">#111;</span>

<span style="color:rgb(101, 110, 119); font-weight:400;">// Затем импортируйте файлы ShamUI SASS (важен порядок).;</span>
@import <span style="color:rgb(84, 121, 13); font-weight:400;">&#x27;node_modules/sham-ui-vue/src/sass/main.scss&#x27;</span>;</code></pre>
`;

const codeImport = `
<pre>
 <code id="htmlViewer" style="color:rgb(47, 51, 55); font-weight:400;display:block;padding: .5em;"><span style="color:rgb(1, 86, 146); font-weight:400;">import</span> <span class="hljs-title class_">Vue</span> <span style="color:rgb(1, 86, 146); font-weight:400;">from</span> <span style="color:rgb(84, 121, 13); font-weight:400;">&#x27;vue&#x27;</span>
<span style="color:rgb(1, 86, 146); font-weight:400;">import</span> <span class="hljs-title class_">ShamUI</span> <span style="color:rgb(1, 86, 146); font-weight:400;">from</span> <span style="color:rgb(84, 121, 13); font-weight:400;">&#x27;sham-ui-vue&#x27;</span>

<span style="color:rgb(1, 86, 146); font-weight:400;">import</span> <span style="color:rgb(84, 121, 13); font-weight:400;">&#x27;./main.scss&#x27;</span>

<span class="hljs-title class_">Vue</span>.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">ShamUI</span>)</code></pre>
`;
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

.sub-title
    font-weight: 600
    font-size: 38px
    margin-top: 60px

.text
    line-height: 28px
    margin-top: 12px
    font-size: 16px

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