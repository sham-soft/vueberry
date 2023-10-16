<template lang="pug">
page-wrap
    template(v-slot:title) Modal

    template(v-slot:text)
        | Компонент <b>sh-modal</b> - это всплывающее окно с информацией для пользователя.
        | При появлении модального окна, вся работа блокируется до закрытия компонента.

    template(v-slot:playground)
        v-playground(
            :parameters="parameters"
            :codeTemplate="codeModal"
            :parameterValues="data"
            :gitLink="gitLink"
            @change="setValue(data, $event)"
        )
            sh-modal(
                v-if="data.modelValue"
                :title="data.title"
                :text="data.text"
                @close="data.modelValue = false"
            )
            .element(@click="data.modelValue = true") Click me!

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
import codeModal from '@/components/UI/ShModal/code';
import ShModal from '@/components/UI/ShModal/index.vue';
import apiJSON from '@/pages/Modal/api.json';
import parametersJSON from '@/pages/Modal/parameters.json';
import { useParameter } from '@/composables/playground';
import type { TypeApiTable } from '@/components/common/VApiTable/types';
import type { TypeParameter } from '@/components/common/VPlayground/types';

const { setValue } = useParameter();

const api: TypeApiTable = apiJSON;
const parameters: TypeParameter = parametersJSON;
const gitLink: string = 'https://github.com/code-build-project/sham-ui/blob/main/src/components/UI/ShModal/index.vue';

type TypeData = {
    modelValue: boolean,
    title: string,
    text: string,
}

const data: TypeData = reactive({
    modelValue: false,
    title: 'Modal',
    text: 'Modal text',
});

</script>

<style scoped lang="sass">
.element
    color: $color-white-1
    font-size: 18px
    background: $color-blue-1
    padding: 10px
    border-radius: 4px
    cursor: pointer

</style>