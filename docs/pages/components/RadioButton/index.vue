<template lang="pug">
page-wrap
    template(v-slot:title) RadioButton

    template(v-slot:text)
        | Компонент <b>vb-radio-button</b> представляет собой простой переключатель.
        | Пользователь может выбрать один вариант из предоставляемых опций.

    template(v-slot:playground)
        v-playground(
            :parameters="parameters"
            :codeTemplate="codeRadioButton"
            :parameterValues="data"
            :gitLink="gitLink"
            @change="setValue(data, $event)"
        )
            vb-radio-button(
                v-model="data.modelValue"
                keyField="radio-button"
                :radioList="options"
                :isColumn="data.column"
            ) {{ data.label }}

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
import codeRadioButton from '@/pages/components/RadioButton/code';
import apiJSON from '@/pages/components/RadioButton/api.json';
import optionsJSON from '@/pages/components/RadioButton/options.json';
import parametersJSON from '@/pages/components/RadioButton/parameters.json';
import { useParameter } from '@/composables/playground';
import type { TypeApiTable } from '@/components/common/VApiTable/types';
import type { TypeParameter } from '@/components/common/VPlayground/types';

const { setValue } = useParameter();

const api: TypeApiTable = apiJSON;
const options: { id: number, name: string }[]  = optionsJSON;
const parameters: TypeParameter = parametersJSON;
const gitLink: string = 'https://github.com/code-build-project/sham-ui/blob/main/src/components/UI/ShRadioButton/index.vue';

type TypeData = {
    modelValue: string | number,
    label: string,
    column: boolean,
}

const data: TypeData = reactive({
    modelValue: 1,
    label: '',
    column: false,
});

</script>