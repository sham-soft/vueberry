<template lang="pug">
page-snippet-wrap(:dataList="dataList")
    template(v-slot:title) Formatters

    template(v-slot:intro)
        | Набор решений для контроля ввода текста.
        | Методы принимают строку в качестве аргумента, и возвращают новую отформатированную строку.

</template>

<script setup lang="ts">
import codes from '@/pages/snippets/Formatters/code';
import PageSnippetWrap from '@/components/PageSnippetWrap/index.vue';

const dataList = [
    {
        id: 'number',
        title: 'Number',
        text: 'Метод возвращает только числа, символ точки и запятой.',
        code: codes.number,
    },
    {
        id: 'letter',
        title: 'Letter',
        text: 'Метод возвращает только буквы.',
        code: codes.letter,
    },
    {
        id: 'latin',
        title: 'Latin',
        text: 'Метод возвращает только латинские буквы.',
        code: codes.latin,
    },
    {
        id: 'сyrillic',
        title: 'Cyrillic',
        text: 'Метод возвращает только буквы кириллицы.',
        code: codes.cyrillic,
    },
    {
        id: 'date',
        title: 'Date',
        text: 'Метод возвращает только строку в формате "12.12.1997"',
        code: codes.date,
    },
];
</script>