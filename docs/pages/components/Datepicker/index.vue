<template lang="pug">
page-wrap
    template(v-slot:title) Datepicker

    template(v-slot:text)
        | Компонент <b>vb-datepicker</b> предоставляет поле ввода даты.
        | Значение даты можно ввести вручную, либо выбрать из выпадающего списка.

    template(v-slot:playground)
        v-playground(
            :parameters="parameters"
            :codeTemplate="codeDatepicker"
            :parameterValues="data"
            :gitLink="gitLink"
            @change="setValue(data, $event)"
        )
            vb-datepicker.vb-datepicker(
                v-model="data.modelValue"
                :placeholder="data.placeholder"
                :isReadonly="data.readonly"
                :isDisabled="data.disabled"
                :isError="data.error"
                :message="data.message"
                :size="data.size"
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
import codeDatepicker from '@/pages/components/Datepicker/code';
import apiJSON from '@/pages/components/Datepicker/api.json';
import parametersJSON from '@/pages/components/Datepicker/parameters.json';
import { useParameter } from '@/composables/playground';
import type { TypeApiTable } from '@/components/common/VApiTable/types';
import type { TypeParameter } from '@/components/common/VPlayground/types';

const { setValue } = useParameter();

const api: TypeApiTable = apiJSON;
const parameters: TypeParameter = parametersJSON;
const gitLink: string = 'https://github.com/sham-soft/vueberry/tree/main/src/components/VbDatepicker/index.vue';

type TypeData = {
    modelValue: string,
    label: string,
    placeholder: string,
    readonly: boolean,
    disabled: boolean,
    error: boolean,
    message: string,
    size: string,
}

const data: TypeData = reactive({
    modelValue: '',
    label: 'Datapicker',
    placeholder: 'My Datapicker',
    readonly: false,
    disabled: false,
    error: false,
    message: '',
    size: '',
});

</script>

<style scoped lang="sass">
.vb-datepicker
    width: 180px
    padding-top: 80px
    padding-bottom: 350px

</style>