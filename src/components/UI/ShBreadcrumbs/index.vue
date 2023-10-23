<template lang="pug">
.sh-breadcrumbs
    .crumb(
        v-for="(item, index) in items"
        :key="item.id"
        :class="componentClasses"
    )
        router-link.link(
            v-if="item.url"
            :to="item.url"
        ) {{ item.title }}

        .title(v-else) {{ item.title }}

        .separator(v-if="isSeparator(index)")
            slot(name="separator") /

</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { TypeCrumb } from './types';

const props = withDefaults(
    defineProps<{
        size?: string,
        items: TypeCrumb[],
    }>(),
    {
        size: 'medium',
        items: () => [],
    },
);

const componentClasses = computed<string[]>(() => {
    return [
        'size-' + props.size,
    ];
});

function isSeparator(index: number) {
    const lastIndex = props.items.length - 1;
    return index < lastIndex;
}

</script>