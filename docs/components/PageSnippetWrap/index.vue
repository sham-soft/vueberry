<template lang="pug">
.page
    h1.title
        slot(name="title")

    p.intro
        slot(name="intro")

    template(
        v-for="data in dataList"
        :key="data.id"
    )
        h3.sub-title {{ data.title }}

        p.text {{ data.text }}

        .code(v-html="data.code")

</template>

<script setup lang="ts">
import type { TypeDataList } from '@/components/PageSnippetWrap/types';

withDefaults(
    defineProps<{
        dataList?: TypeDataList[],
    }>(),
    {
        dataList: () => [],
    },
);

</script>

<style scoped lang="sass">
.page
    width: 768px
    padding: 32px 0 80px 0

.title
    font-weight: 600
    font-size: 48px

.intro
    color: $color-dark-1
    line-height: 28px
    margin-top: 12px

.sub-title
    font-weight: 500
    font-size: 32px
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
    padding: 15px

</style>