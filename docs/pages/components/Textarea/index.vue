<template lang="pug">
page-wrap
    template(v-slot:title) Textarea

    template(v-slot:text) Компонент <b>vb-textarea</b> используется для сбора больших объемов текстовых данных.

    template(v-slot:playground)
        v-playground(
            :parameters="parameters"
            :codeTemplate="codeTextarea"
            :parameterValues="data"
            :gitLink="gitLink"
            @change="setValue(data, $event)"
        )
            vb-textarea.vb-textarea(
                v-model="data.modelValue"
                :placeholder="data.placeholder"
                :isReadonly="data.readonly"
                :isDisabled="data.disabled"
                :isSpellcheck="data.spellcheck"
                :resize="data.resize"
                :label="data.label"
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
import codeTextarea from '@/pages/components/Textarea/code';
import apiJSON from '@/pages/components/Textarea/api.json';
import parametersJSON from '@/pages/components/Textarea/parameters.json';
import { useParameter } from '@/composables/playground';
import type { TypeApiTable } from '@/components/common/VApiTable/types';
import type { TypeParameter } from '@/components/common/VPlayground/types';

const { setValue } = useParameter();

const api: TypeApiTable = apiJSON;
const parameters: TypeParameter = parametersJSON;
const gitLink: string = 'https://github.com/sham-soft/vueberry/tree/main/src/components/VbTextarea/index.vue';

type TypeData = {
    modelValue: string,
    label: string,
    placeholder: string,
    readonly: boolean,
    disabled: boolean,
    spellcheck: boolean,
    resize: string,
}

const data: TypeData = reactive({
    modelValue: '',
    label: '',
    placeholder: 'My Textarea',
    readonly: false,
    disabled: false,
    spellcheck: false,
    resize: 'both',
});

</script>

<style scoped lang="sass">
.vb-textarea
    max-width: 250px

</style>