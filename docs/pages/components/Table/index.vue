<template lang="pug">
page-wrap
    template(v-slot:title) Table

    template(v-slot:text)
        | Компонент <b>vb-table</b> представляет строки и столбцы
        | предназначенные для структурирования данных.

    template(v-slot:playground)
        v-playground(
            :parameters="parameters"
            :codeTemplate="codeTable"
            :parameterValues="data"
            :gitLink="gitLink"
            @change="setValue(data, $event)"
        )
            .table
                vb-table(
                    :headers="headers"
                    :items="items"
                    :height="data.height"
                )

    template(v-slot:apiTable)
        v-api-table(
            :propList="api.propList"
            :eventList="api.eventList"
            :slotList="api.slotList"
        )

</template>

<script setup lang="ts">
import { reactive } from 'vue';
import PageWrap from '@/components/PageWrap/index.vue';
import VApiTable from '@/components/common/VApiTable/index.vue';
import VPlayground from '@/components/common/VPlayground/index.vue';
import codeTable from '@/pages/components/Table/code';
import apiJSON from '@/pages/components/Table/api.json';
import optionsJSON from '@/pages/components/Table/options.json';
import parametersJSON from '@/pages/components/Table/parameters.json';
import { useParameter } from '@/composables/playground';
import type { TypeApiTable } from '@/components/common/VApiTable/types';
import type { TypeParameter } from '@/components/common/VPlayground/types';

const { setValue } = useParameter();

const api: TypeApiTable = apiJSON;
const headers: { id: string, title: string }[]  = optionsJSON.headers;
const items: { [name: string]: string }[]  = optionsJSON.items;
const parameters: TypeParameter = parametersJSON;
const gitLink: string = 'https://github.com/sham-soft/vueberry/tree/main/src/components/VbTable/index.vue';

type TypeData = {
    height: string,
}

const data: TypeData = reactive({
    height: '',
});

</script>

<style scoped lang="sass">
.table
    width: 600px
    padding: 40px 0

</style>