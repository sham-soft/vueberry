<template lang="pug">
page-wrap
    template(v-slot:title) Breadcrumbs

    template(v-slot:text) Компонент <b>sh-breadcrumbs</b> является компонентом навигации.

    template(v-slot:playground)
        v-playground(
            :parameters="parameters"
            :codeTemplate="codeBreadcrumbs"
            :parameterValues="data"
            :gitLink="gitLink"
            @change="setValue(data, $event)"
        )
            sh-breadcrumbs(
                :size="data.size"
                :items="options"
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
import codeBreadcrumbs from '@/components/UI/ShBreadcrumbs/code';
import ShBreadcrumbs from '@/components/UI/ShBreadcrumbs/index.vue';
import apiJSON from '@/pages/Breadcrumbs/api.json';
import optionsJSON from '@/pages/Breadcrumbs/options.json';
import parametersJSON from '@/pages/Breadcrumbs/parameters.json';
import { useParameter } from '@/composables/playground';
import type { TypeCrumb } from '@/components/UI/ShBreadcrumbs/types';
import type { TypeApiTable } from '@/components/common/VApiTable/types';
import type { TypeParameter } from '@/components/common/VPlayground/types';

const { setValue } = useParameter();

const api: TypeApiTable = apiJSON;
const options: TypeCrumb[] = optionsJSON;
const parameters: TypeParameter = parametersJSON;
const gitLink: string = 'https://github.com/code-build-project/sham-ui/blob/main/src/components/UI/ShBreadcrumbs/index.vue';

type TypeData = {
    size: string,
}

const data: TypeData = reactive({
    size: 'medium',
});

</script>