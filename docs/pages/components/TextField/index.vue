<template lang="pug">
page-wrap
    template(v-slot:title) TextField

    template(v-slot:text)
        | Компонент <b>vb-text-field</b> используется для сбора предоставленной
        | пользователем информации.

    template(v-slot:playground)
        v-playground(
            :parameters="parameters"
            :codeTemplate="codeTextField"
            :parameterValues="data"
            :gitLink="gitLink"
            @change="setValue(data, $event)"
        )
            vb-text-field.vb-text-field(
                v-model="data.modelValue"
                :placeholder="data.placeholder"
                :isReadonly="data.readonly"
                :isDisabled="data.disabled"
                :size="data.size"
                :variant="data.variant"
                :isError="data.error"
                :message="data.message"
                :isClearable="data.clear"
                :isPassword="data.password"
                :format="data.format"
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
import codeTextField from '@/pages/components/TextField/code';
import apiJSON from '@/pages/components/TextField/api.json';
import parametersJSON from '@/pages/components/TextField/parameters.json';
import { useParameter } from '@/composables/playground';
import type { TypeApiTable } from '@/components/common/VApiTable/types';
import type { TypeParameter } from '@/components/common/VPlayground/types';

const { setValue } = useParameter();

const api: TypeApiTable = apiJSON;
const parameters: TypeParameter = parametersJSON;
const gitLink: string = 'https://github.com/sham-soft/vueberry/tree/main/src/components/VbTextField/index.vue';

type TypeData = {
    modelValue: number | string,
    label: string,
    placeholder: string,
    readonly: boolean,
    disabled: boolean,
    clear: boolean,
    message: string,
    size: string,
    variant: string,
    error: boolean,
    password: boolean,
    format: string,
}

const data: TypeData = reactive({
    modelValue: '',
    label: '',
    placeholder: 'My TextField',
    readonly: false,
    disabled: false,
    clear: false,
    message: '',
    size: 'medium',
    variant: 'default',
    error: false,
    password: false,
    format: '',
});

</script>

<style scoped lang="sass">
.vb-text-field
    width: 200px

</style>