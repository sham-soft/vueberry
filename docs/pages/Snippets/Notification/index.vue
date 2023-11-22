<template lang="pug">
page-snippet-wrap(:dataList="dataList")
    template(v-slot:title) Notification

    template(v-slot:intro) Метод для вызова исчезающего уведомления.

</template>

<script setup lang="ts">
import codes from '@/pages/snippets/Notification/code';
import PageSnippetWrap from '@/components/PageSnippetWrap/index.vue';

const dataList = [
    {
        id: 'func',
        title: 'Function',
        text: 'Метод создает элемент уведомления и удаляет через 6 секунд.',
        code: codes.func,
    },
    {
        id: 'styles',
        title: 'Styles',
        text: 'Стили для уведомления.',
        code: codes.styles,
    },
];
</script>