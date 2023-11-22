<template lang="pug">
.layout
    header-block.header-block
    main.main-block
        sidebar-menu.sidebar-menu
        .content(ref="refContent")
            router-view

</template>

<script setup lang="ts">
import { ref } from 'vue';
import { onBeforeRouteUpdate, onBeforeRouteLeave } from 'vue-router';
import HeaderBlock from '@/components/HeaderBlock/index.vue';
import SidebarMenu from '@/components/SidebarMenu/index.vue';

const refContent = ref<null | HTMLInputElement>(null);

function scrollTo() {
    refContent.value?.scrollTo({ top: 0, behavior: 'smooth' });
};

onBeforeRouteLeave(scrollTo);
onBeforeRouteUpdate(scrollTo);
</script>

<style lang="sass" scoped>
.layout
    height: 100%

.header-block
    &:deep(.logo)
        background: $color-dark-1
        color: $color-white-1
        border-bottom: 1px solid rgb($color-white-1, 0.08)
    &:deep(.version)
        background: rgb($color-white-1, 0.08)

.main-block
    @extend %flex_row
    height: 100%

.content
    @extend %flex_column-start-center
    flex: auto
    overflow-y: auto
    max-height: calc(100vh - 64px)
    scrollbar-gutter: stable

</style>