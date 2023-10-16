<template lang="pug">
page-wrap
    template(v-slot:title) Textarea

    template(v-slot:text)
        | Компонент <b>sh-textarea</b> используются для сбора больших объемов текстовых данных.

    template(v-slot:playground)
        v-playground(
            :parameters="parameters"
            :codeTemplate="codeTextarea"
            :parameterValues="data"
            :gitLink="gitLink"
            @change="setValue(data, $event)"
        )
            sh-textarea.sh-textarea(
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
import codeTextarea from '@/components/UI/ShTextarea/code';
import ShTextarea from '@/components/UI/ShTextarea/index.vue';
import apiJSON from '@/pages/Textarea/api.json';
import parametersJSON from '@/pages/Textarea/parameters.json';
import { useParameter } from '@/composables/playground';
import type { TypeApiTable } from '@/components/common/VApiTable/types';
import type { TypeParameter } from '@/components/common/VPlayground/types';

const { setValue } = useParameter();

const api: TypeApiTable = apiJSON;
const parameters: TypeParameter = parametersJSON;
const gitLink: string = 'https://github.com/code-build-project/sham-ui/blob/main/src/components/UI/ShTextarea/index.vue';

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
.sh-textarea
    max-width: 250px

</style>