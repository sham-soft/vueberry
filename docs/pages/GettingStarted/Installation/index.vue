<template lang="pug">
.install
    h1.title Getting Started

    p.intro
        | Vueberry - это набор готовых решений без зависимостей, который упростит создание
        | ваших многофункциональных и быстрых приложений.

    p.intro-uder
        | Vueberry очень легкий и не имеет зависимостей, поэтому вы можете создать собственную песочницу,
        | с собственными компонентами, используя Vueberry как фундаментальную основу.

    template(
        v-for="data in dataList"
        :key="data.id"
    )
        h3.sub-title {{ data.title }}

        p.text {{ data.text }}

        .code
            .code-header {{ data.codeHeader }}
            .code-template(v-html="data.codeTemplate")

</template>

<script setup lang="ts">
import { codeInstall, codeUsage } from '@/pages/gettingStarted/Installation/code';

const dataList = [
    {
        id: 'install',
        title: 'Installation',
        text: 'Вы можете установить Vueberry с помощью npm или yarn:',
        codeHeader: 'Npm or Yarn',
        codeTemplate: codeInstall,
    },
    {
        id: 'usage',
        title: 'Usage',
        text: 'Чтобы использовать Vueberry в своем приложении, вам необходимо импортировать компоненты, а так же стили.',
        codeHeader: 'Full bundle',
        codeTemplate: codeUsage,
    },
];
</script>

<style scoped lang="sass">
.install
    width: 768px
    padding: 32px 0 80px 0

.title
    font-weight: 600
    font-size: 48px

.intro
    margin-top: 12px
    font-size: 18px
    padding-bottom: 25px
    border-bottom: 2px solid $color-gray-3

.intro-uder
    color: $color-dark-2
    margin-top: 10px
    font-size: 16px

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