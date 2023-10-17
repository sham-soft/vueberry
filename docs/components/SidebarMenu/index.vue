<template lang="pug">
aside.sidebar
    .header
        router-link(to="/") ShamUI
        .version V 1.0

    .components
        .components-title
            span COMPONENTS
            span {{ links.length }}

        router-link.components-link(
            v-for="link in links"
            active-class="components-link_active"
            :key="link.id"
            :to="link.path"
        )
            | {{ link.name }}
            v-icon.components-link-icon(path="img/arrow.svg")

</template>

<script setup lang="ts">
import VIcon from '@/components/common/VIcon/index.vue';

type TypeLink = {
    id: string,
    name: string,
    path: string,
}

const links: TypeLink[] = [
    { id: 'auto', name: 'Autocomplete', path: '/autocomplete' },
    { id: 'crumbs', name: 'Breadcrumbs', path: '/breadcrumbs' },
    { id: 'button', name: 'Button', path: '/button' },
    { id: 'checkbox', name: 'Checkbox', path: '/checkbox' },
    { id: 'date', name: 'Datepicker', path: '/datepicker' },
    { id: 'file', name: 'FileInput', path: '/file-input' },
    { id: 'modal', name: 'Modal', path: '/modal' },
    { id: 'pagination', name: 'Pagination', path: '/pagination' },
    { id: 'radio', name: 'RadioButton', path: '/radio-button' },
    { id: 'select', name: 'Select', path: '/select' },
    { id: 'table', name: 'Table', path: '/table' },
    { id: 'tabs', name: 'Tabs', path: '/tabs' },
    { id: 'textarea', name: 'Textarea', path: '/textarea' },
    { id: 'text', name: 'TextField', path: '/text-field' },
    { id: 'tooltip', name: 'Tooltip', path: '/tooltip' },
];
</script>

<style scoped lang="sass">
.sidebar
    width: 300px
    height: 100%
    background: $color-dark-1

.header
    @extend %flex_row-center
    height: 64px
    padding-left: 32px
    font-size: 20px
    font-weight: 600
    border-bottom: 1px solid rgb($color-white-1, 0.08)

.version
    @extend %flex_row-center-center
    width: 43px
    height: 24px
    background: rgb($color-white-1, 0.08)
    border-radius: 55px
    font-weight: 600
    font-size: 12px
    margin-left: 8px
    line-height: 12px

.components
    padding: 0 16px 32px 16px
    font-weight: 600
    overflow-y: auto
    height: calc(100% - 64px)
    scrollbar-width: thin
    scrollbar-color: $color-gray-1
    &::-webkit-scrollbar
        height: 6px
        width: 6px
    &::-webkit-scrollbar-thumb
        background-color: $color-gray-1
    &::-webkit-scrollbar-track
        background: $color-gray-3
    &-title
        @extend %flex_row-start-between
        padding: 32px 16px 10px 16px
        margin-bottom: 8px
        color: rgb($color-white-1, 0.24)
        position: sticky
        top: 0px
        background: $color-dark-1
    &-link
        @extend %flex_row-center-between
        height: 44px
        padding: 0 16px
        border-radius: 8px
        &:hover
            background: rgb($color-white-1, 0.03)

    &-link-icon
        width: 20px
        height: 20px
        fill: transparent
    &-link_active
        background: rgb($color-white-1, 0.08)
        .components-link-icon
            fill: rgb($color-white-1, 0.5)

@media screen and (max-width: 1440px)
    .sidebar
        width: 260px

</style>