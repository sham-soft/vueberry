<template lang="pug">
page-wrap
    template(v-slot:title) Select

    template(v-slot:text)
        | Компонент <b>sh-select</b> используются для сбора предоставленной
        | пользователем информации из списка опций.

    template(v-slot:playground)
        v-playground(
            :parameters="parameters"
            :codeTemplate="codeSelect"
            :parameterValues="data"
            :gitLink="gitLink"
            @change="setParameterDecorator"
        )
            sh-select.sh-select(
                v-model="data.modelValue"
                :placeholder="data.placeholder"
                :isDisabled="data.disabled"
                :isClearable="data.clear"
                :message="data.message"
                :size="data.size"
                :variant="data.variant"
                :isError="data.error"
                :isMultiple="data.multiple"
                :options="options"
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
import codeSelect from '@/components/UI/ShSelect/code';
import ShSelect from '@/components/UI/ShSelect/index.vue';
import apiJSON from '@/pages/Select/api.json';
import optionsJSON from '@/pages/Select/options.json';
import parametersJSON from '@/pages/Select/parameters.json';
import { useParameter } from '@/composables/playground';
import type { TypeOption } from '@/components/UI/ShSelect/types';
import type { TypeApiTable } from '@/components/common/VApiTable/types';
import type { TypeParameter, TypeData } from '@/components/common/VPlayground/types';

const { setValue } = useParameter();

const api: TypeApiTable = apiJSON;
const options: TypeOption[]  = optionsJSON;
const parameters: TypeParameter = parametersJSON;
const gitLink: string = 'https://github.com/code-build-project/sham-ui/blob/main/src/components/UI/ShSelect/index.vue';

type TypeSelectData = {
    modelValue: string | string[],
    placeholder: string,
    disabled: boolean,
    clear: boolean,
    label: string,
    message: string,
    size: string,
    variant: string,
    error: boolean,
    multiple: boolean,
}

const data: TypeSelectData = reactive({
    modelValue: '',
    placeholder: 'My Select',
    disabled: false,
    clear: false,
    label: '',
    message: '',
    size: 'medium',
    variant: 'default',
    error: false,
    multiple: false,
});

function setParameterDecorator(event: TypeData): void {
    if (event.key === parameters.multiple.id) {
        if (event.value) {
            data.modelValue = [];
        } else {
            data.modelValue = '';
        }
    }

    setValue(data, event);
}

</script>

<style scoped lang="sass">
.sh-select
    padding-top: 80px
    padding-bottom: 130px
    width: 230px

</style>