<template lang="pug">
page-wrap
    template(v-slot:title) Tooltip

    template(v-slot:text)
        | Компонент <b>vb-tooltip</b> полезен для передачи информации,
        | когда пользователь наводит курсор мыши на элемент.

    template(v-slot:playground)
        v-playground(
            :parameters="parameters"
            :codeTemplate="codeTooltip"
            :parameterValues="data"
            :gitLink="gitLink"
            @change="setValue(data, $event)"
        )
            .element
                vb-tooltip(
                    :isShow="data.show || undefined"
                    :position="data.position"
                ) {{ data.text || 'Tooltip' }}
                | Hover me!

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
import codeTooltip from '@/pages/components/Tooltip/code';
import apiJSON from '@/pages/components/Tooltip/api.json';
import parametersJSON from '@/pages/components/Tooltip/parameters.json';
import { useParameter } from '@/composables/playground';
import type { TypeApiTable } from '@/components/common/VApiTable/types';
import type { TypeParameter } from '@/components/common/VPlayground/types';

const { setValue } = useParameter();

const api: TypeApiTable = apiJSON;
const parameters: TypeParameter = parametersJSON;
const gitLink: string = 'https://github.com/sham-soft/vueberry/tree/main/src/components/VbTooltip/index.vue';

type TypeData = {
    text: string,
    show: boolean,
    position: string,
}

const data: TypeData = reactive({
    text: 'Tooltip',
    show: false,
    position: 'right',
});

</script>

<style scoped lang="sass">
.element
    position: relative
    color: $color-white-1
    font-size: 18px
    background: $color-blue-1
    padding: 10px
    border-radius: 4px

</style>