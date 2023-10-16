<template lang="pug">
page-wrap
    template(v-slot:title) Datepicker

    template(v-slot:text)
        | Компонент <b>sh-datepicker</b> является полем ввода даты.
        | Значение даты можно ввести вручную, либо выбрать из выпадающего списка.

    template(v-slot:playground)
        v-playground(
            :parameters="parameters"
            :codeTemplate="codeDatepicker"
            :parameterValues="data"
            :gitLink="gitLink"
            @change="setValue(data, $event)"
        )
            sh-datepicker.sh-datepicker(
                v-model="data.modelValue"
                :placeholder="data.placeholder"
                :isReadonly="data.readonly"
                :isDisabled="data.disabled"
                :isError="data.error"
                :message="data.message"
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
import codeDatepicker from '@/components/UI/ShDatepicker/code';
import ShDatepicker from '@/components/UI/ShDatepicker/index.vue';
import apiJSON from '@/pages/Datepicker/api.json';
import parametersJSON from '@/pages/Datepicker/parameters.json';
import { useParameter } from '@/composables/playground';
import type { TypeApiTable } from '@/components/common/VApiTable/types';
import type { TypeParameter } from '@/components/common/VPlayground/types';

const { setValue } = useParameter();

const api: TypeApiTable = apiJSON;
const parameters: TypeParameter = parametersJSON;
const gitLink: string = 'https://github.com/code-build-project/sham-ui/blob/main/src/components/UI/ShDatepicker/index.vue';

type TypeData = {
    modelValue: string,
    label: string,
    placeholder: string,
    readonly: boolean,
    disabled: boolean,
    error: boolean,
    message: string,
}

const data: TypeData = reactive({
    modelValue: '',
    label: 'Datapicker',
    placeholder: 'My Datapicker',
    readonly: false,
    disabled: false,
    error: false,
    message: '',
});

</script>

<style scoped lang="sass">
.sh-datepicker
    width: 180px
    padding-top: 80px
    padding-bottom: 350px

</style>