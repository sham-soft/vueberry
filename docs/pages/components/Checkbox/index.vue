<template lang="pug">
page-wrap
    template(v-slot:title) Checkbox

    template(v-slot:text)
        | Компонент флажка <b>vb-checkbox</b> позволяет пользователю выбрать один или несколько элементов из набора.
        | Флажки можно использовать для включения или выключения опции.

    template(v-slot:playground)
        v-playground(
            :parameters="parameters"
            :codeTemplate="codeCheckbox"
            :parameterValues="data"
            :gitLink="gitLink"
            @change="setValue(data, $event)"
        )
            vb-checkbox(
                v-model="data.modelValue"
                keyField="checkbox"
                :isDisabled="data.disabled"
                :size="data.size"
                :type="data.type"
            ) {{ data.text }}

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
import codeCheckbox from './code';
import apiJSON from '@/pages/components/Checkbox/api.json';
import parametersJSON from '@/pages/components/Checkbox/parameters.json';
import { useParameter } from '@/composables/playground';
import type { TypeApiTable } from '@/components/common/VApiTable/types';
import type { TypeParameter } from '@/components/common/VPlayground/types';

const { setValue } = useParameter();

const api: TypeApiTable = apiJSON;
const parameters: TypeParameter = parametersJSON;
const gitLink: string = 'https://github.com/code-build-project/sham-ui/blob/main/src/components/UI/ShCheckbox/index.vue';

type TypeData = {
    modelValue: boolean,
    text: string,
    disabled: boolean,
    size: string,
    type: string,
}

const data: TypeData = reactive({
    modelValue: false,
    text: 'My Checkbox',
    disabled: false,
    size: 'medium',
    type: 'primary',
});

</script>