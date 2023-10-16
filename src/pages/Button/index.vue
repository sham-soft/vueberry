<template lang="pug">
page-wrap
    template(v-slot:title) Button

    template(v-slot:text)
        | Компонент <b>sh-button-origin</b> заменяет стандартную
        | html-кнопку и добавляет множество опций.
        | Вы так же можете кастомизировать кнопку добавив компонент-обертку
        | с необходимым функционалом.

    template(v-slot:playground)
        v-playground(
            :parameters="parameters"
            :codeTemplate="codeButton"
            :parameterValues="data"
            :gitLink="gitLink"
            @change="setValue(data, $event)"
        )
            sh-button(
                :variant="data.variant"
                :type="data.type"
                :size="data.size"
                :isLoading="data.loading"
                :isDisabled="data.disabled"
            ) {{ data.text || 'My button' }}

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
import codeButton from '@/components/UI/ShButton/code';
import ShButton from '@/components/UI/ShButton/index.vue';
import apiJSON from '@/pages/Button/api.json';
import parametersJSON from '@/pages/Button/parameters.json';
import { useParameter } from '@/composables/playground';
import type { TypeApiTable } from '@/components/common/VApiTable/types';
import type { TypeParameter } from '@/components/common/VPlayground/types';

const { setValue } = useParameter();

const api: TypeApiTable = apiJSON;
const parameters: TypeParameter = parametersJSON;
const gitLink: string = 'https://github.com/code-build-project/sham-ui/blob/main/src/components/UI/ShButton/index.vue';

type TypeData = {
    text: string,
    loading: boolean,
    disabled: boolean,
    variant: string,
    type: string,
    size: string,
}

const data: TypeData = reactive({
    text: '',
    loading: false,
    disabled: false,
    variant: 'default',
    type: 'primary',
    size: 'medium',
});

</script>