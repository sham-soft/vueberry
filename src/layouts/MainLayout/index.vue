<template lang="pug">
.layout
    sidebar-menu.sidebar-menu
    main.main-block
        header-block
        router-view.content

</template>

<script setup lang="ts">
import HeaderBlock from '@/components/HeaderBlock/index.vue';
import SidebarMenu from '@/components/SidebarMenu/index.vue';
</script>

<style lang="sass" scoped>
.layout
    @extend %flex_row
    height: 100%

.main-block
    flex: auto

.content
    @extend %flex_column-start
    width: 100%
    overflow-y: auto
    max-height: calc(100vh - 64px)
    scrollbar-gutter: stable

</style>