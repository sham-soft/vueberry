<template lang="pug">
.breadcrumbs
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
import type { TypeCrumb } from '@/components/UI/ShBreadcrumbs/types';

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

<style scoped lang="sass">
.breadcrumbs
    @extend %flex_wrap

.crumb
    @extend %flex_row
    margin-right: 10px
    color: $color-dark-1
    font-weight: 500
    &:last-child
        color: $color-gray-2

.link:hover
    text-decoration-line: underline
    text-underline-offset: 2px

.separator
    margin-left: 10px

.size
    &-small
        font-size: 16px
    &-medium
        font-size: 18px
    &-large
        font-size: 20px

</style>