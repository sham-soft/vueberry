<template lang="pug">
.install-wrap
    .install
        h1.title Getting Started

        p.intro
            | ShamUI - это набор готовых решений, который упростит создание
            | ваших многофункциональных и быстрых приложений.

        h3.sub-title Installation

        p.text Вы можете установить ShamUI с помощью npm или yarn:

        .code
            .code-header Npm or Yarn
            .code-template(v-html="codeInstall")

        h3.sub-title Usage

        p.text Чтобы использовать ShamUI в своем приложении, вам необходимо импортировать компоненты, а так же стили.

        .code
            .code-header Full bundle
            .code-template(v-html="codeUsage")

</template>

<script setup lang="ts">
/* eslint-disable max-len */
const codeInstall = `
<pre>
 <code id="htmlViewer" style="color:rgb(47, 51, 55); font-weight:400;display:block;padding: .5em;"><span style="color:rgb(84, 121, 13); font-weight:400;">$ </span>npm install sham-ui-vue --save
<span style="color:rgb(84, 121, 13); font-weight:400;">$ </span>yarn add sham-ui-vue</code></pre>
`;

const codeUsage = `
<pre>
 <code id="htmlViewer" style="color:rgb(47, 51, 55); font-weight:400;display:block;padding: .5em;"><span style="color:rgb(1, 86, 146); font-weight:400;">import</span> <span class="hljs-title class_">Vue</span> <span style="color:rgb(1, 86, 146); font-weight:400;">from</span> <span style="color:rgb(84, 121, 13); font-weight:400;">&#x27;vue&#x27;</span>
<span style="color:rgb(1, 86, 146); font-weight:400;">import</span> <span class="hljs-title class_">ShamUI</span> <span style="color:rgb(1, 86, 146); font-weight:400;">from</span> <span style="color:rgb(84, 121, 13); font-weight:400;">&#x27;sham-ui-vue&#x27;</span>
<span style="color:rgb(1, 86, 146); font-weight:400;">import</span> <span style="color:rgb(84, 121, 13); font-weight:400;">&#x27;sham-ui-vue/dist/style.css&#x27;</span>

<span class="hljs-title class_">Vue</span>.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">ShamUI</span>)</code></pre>
`;
</script>

<style scoped lang="sass">
.install-wrap
    @extend %flex_column-start-center

.install
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