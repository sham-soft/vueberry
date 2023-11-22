<template lang="pug">
page-snippet-wrap(:dataList="dataList")
    template(v-slot:title) Files

    template(v-slot:intro) Набор решений скачивания файлов.

</template>

<script setup lang="ts">
import code from '@/pages/snippets/Files/code';
import PageSnippetWrap from '@/components/PageSnippetWrap/index.vue';

const dataList = [
    {
        id: 'download',
        title: 'Download',
        text: 'Скачивает переданные данные в виде файла на компьютер пользователя.',
        code: code,
    },
];
</script>