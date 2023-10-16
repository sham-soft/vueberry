<template lang="pug">
page-wrap
    template(v-slot:title) Pagination

    template(v-slot:text)
        | Компонент <b>sh-pagination</b> используется для разделения длинных наборов данных,
        | чтобы пользователю было проще использовать информацию.

    template(v-slot:playground)
        v-playground(
            :parameters="parameters"
            :codeTemplate="codePagination"
            :parameterValues="data"
            :gitLink="gitLink"
            @change="setValue(data, $event)"
        )
            sh-pagination(
                v-model="data.modelValue"
                :stepsLength="data.stepsLength"
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
import codePagination from '@/components/UI/ShPagination/code';
import ShPagination from '@/components/UI/ShPagination/index.vue';
import apiJSON from '@/pages/Pagination/api.json';
import parametersJSON from '@/pages/Pagination/parameters.json';
import { useParameter } from '@/composables/playground';
import type { TypeApiTable } from '@/components/common/VApiTable/types';
import type { TypeParameter } from '@/components/common/VPlayground/types';

const { setValue } = useParameter();

const api: TypeApiTable = apiJSON;
const parameters: TypeParameter = parametersJSON;
const gitLink: string = 'https://github.com/code-build-project/sham-ui/blob/main/src/components/UI/ShPagination/index.vue';

type TypeData = {
    modelValue: number,
    stepsLength: number,
}

const data: TypeData = reactive({
    modelValue: 1,
    stepsLength: 5,
});

</script>