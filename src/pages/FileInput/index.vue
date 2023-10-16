<template lang="pug">
page-wrap
    template(v-slot:title) FileInput

    template(v-slot:text)
        | Компонент <b>sh-file-input</b> - это специализированный инструмент ввода,
        | который обеспечивает понятный интерфейс для выбора файлов.

    template(v-slot:playground)
        v-playground(
            :parameters="parameters"
            :codeTemplate="codeFileInput"
            :parameterValues="data"
            :gitLink="gitLink"
            @change="setValue(data, $event)"
        )
            sh-file-input.sh-file-input(
                v-model="modelValue"
                :placeholder="data.placeholder"
                :isMultiple="data.multiple"
                :isDisabled="data.disabled"
                :isError="data.error"
                :accept="data.accept"
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
import { ref, reactive } from 'vue';
import PageWrap from '@/components/PageWrap/index.vue';
import VApiTable from '@/components/common/VApiTable/index.vue';
import VPlayground from '@/components/common/VPlayground/index.vue';
import codeFileInput from '@/components/UI/ShFileInput/code';
import ShFileInput from '@/components/UI/ShFileInput/index.vue';
import apiJSON from '@/pages/FileInput/api.json';
import parametersJSON from '@/pages/FileInput/parameters.json';
import { useParameter } from '@/composables/playground';
import type { TypeApiTable } from '@/components/common/VApiTable/types';
import type { TypeParameter } from '@/components/common/VPlayground/types';

const { setValue } = useParameter();

const api: TypeApiTable = apiJSON;
const parameters: TypeParameter = parametersJSON;
const gitLink: string = 'https://github.com/code-build-project/sham-ui/blob/main/src/components/UI/ShFileInput/index.vue';

let modelValue = ref<{ [key: string]: any }[]>([{}]);

type TypeData = {
    label: string,
    multiple: boolean,
    disabled: boolean,
    error: boolean,
    message: string,
    placeholder: string,
    accept: string,
}

const data: TypeData = reactive({
    label: 'FileInput',
    multiple: false,
    disabled: false,
    error: false,
    message: '',
    placeholder: 'My FileInput',
    accept: '',
});

</script>

<style scoped lang="sass">
.sh-file-input
    width: 220px

</style>