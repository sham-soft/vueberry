<template lang="pug">
page-wrap
    template(v-slot:title) Tabs

    template(v-slot:text)
        | Компонент <b>sh-tabs</b> может быть использован
        | в качестве псевдонавигации для страницы, где вкладки
        | являются ссылками, а элементы вкладок - содержимым.

    template(v-slot:playground)
        v-playground(
            :parameters="parameters"
            :codeTemplate="codeTabs"
            :parameterValues="data"
            :gitLink="gitLink"
            @change="setValue(data, $event)"
        )
            sh-tabs(
                v-model="data.modelValue"
                :tabs="tabs"
                :isColumn="data.column"
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
import codeTabs from '@/components/UI/ShTabs/code';
import ShTabs from '@/components/UI/ShTabs/index.vue';
import apiJSON from '@/pages/Tabs/api.json';
import optionsJSON from '@/pages/Tabs/options.json';
import parametersJSON from '@/pages/Tabs/parameters.json';
import { useParameter } from '@/composables/playground';
import type { TypeApiTable } from '@/components/common/VApiTable/types';
import type { TypeParameter } from '@/components/common/VPlayground/types';

const { setValue } = useParameter();

const api: TypeApiTable = apiJSON;
const tabs: { id: string, title: string }[]  = optionsJSON;
const parameters: TypeParameter = parametersJSON;
const gitLink: string = 'https://github.com/code-build-project/sham-ui/blob/main/src/components/UI/ShTabs/index.vue';

type TypeData = {
    modelValue: string,
    column: boolean,
}

const data: TypeData = reactive({
    modelValue: tabs[0].id,
    column: false,
});

</script>