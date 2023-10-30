<template lang="pug">
.formatters-wrap
    .formatters
        h1.title Formatters

        p.intro Набор решений для контроля ввода текста.

        .code
            .code-header Number
            .code-template(v-html="codeNumber")

        .code
            .code-header Letter
            .code-template(v-html="codeLetter")

</template>

<script setup lang="ts">
/* eslint-disable max-len */
const codeNumber = `
<pre>
 <code id="htmlViewer" style="color:rgb(47, 51, 55); font-weight:400;display:block;padding: .5em;"><span class="hljs-title function_">number</span>(<span style="color:rgb(1, 86, 146); font-weight:400;">value</span>: <span style="color:rgb(183, 85, 1); font-weight:400;">string</span>): <span style="color:rgb(183, 85, 1); font-weight:400;">string</span> {
    <span style="color:rgb(1, 86, 146); font-weight:400;">return</span> value.<span class="hljs-title function_">replace</span>(<span style="color:rgb(84, 121, 13); font-weight:400;">/[^\d.,]*/g</span>, <span style="color:rgb(84, 121, 13); font-weight:400;">&#x27;&#x27;</span>);
},</code></pre>
`;

const codeLetter = `
<pre>
 <code id="htmlViewer" style="color:rgb(47, 51, 55); font-weight:400;display:block;padding: .5em;"><span class="hljs-title function_">letter</span>(<span style="color:rgb(47, 51, 55); font-weight:400;">value</span>) {
    <span style="color:rgb(1, 86, 146); font-weight:400;">return</span> value.<span class="hljs-title function_">replace</span>(<span style="color:rgb(84, 121, 13); font-weight:400;">/[^a-zA-ZА-Яа-яЁё\s-]/gi</span>, <span style="color:rgb(84, 121, 13); font-weight:400;">&#x27;&#x27;</span>);
},</code></pre>
`;
</script>

<style scoped lang="sass">
.formatters-wrap
    @extend %flex_column-start-center

.formatters
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
    margin-top: 60px
    &-header
        padding: 15px 20px
        border-bottom: 1px solid $color-gray-3
        font-weight: 600
    &-template
        padding: 0 15px 15px 15px

</style>