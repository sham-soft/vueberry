<template lang="pug">
aside.sidebar
    .header
        router-link(to="/") ShamUI
        .version V 1.0

    .navigation
        .list-group(
            v-for="nav in navList"
            :key="nav.id"
            :class="getGroupClasses(nav.id)"
        )
            .list-title(@click="setActiveList(nav.id)")
                span {{ nav.title }}
                v-icon.bracket-icon(path="img/bracket.svg")

            router-link.list-link(
                v-for="link in nav.links"
                active-class="link_active"
                :key="link.id"
                :to="link.path"
            )
                | {{ link.name }}
                v-icon.link-icon(path="img/arrow.svg")

</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import VIcon from '@/components/common/VIcon/index.vue';

type TypeLink = {
    id: string,
    name: string,
    path: string,
}

type TypeNav = {
    id: string,
    title: string,
    links: TypeLink[],
}

const startLinks: TypeLink[] = [
    { id: 'install', name: 'Installation', path: '/getting-started/installation' },
    { id: 'custom', name: 'Customization', path: '/getting-started/customization' },
];

const componentLinks: TypeLink[] = [
    { id: 'auto', name: 'Autocomplete', path: '/components/autocomplete' },
    { id: 'crumbs', name: 'Breadcrumbs', path: '/components/breadcrumbs' },
    { id: 'button', name: 'Button', path: '/components/button' },
    { id: 'checkbox', name: 'Checkbox', path: '/components/checkbox' },
    { id: 'date', name: 'Datepicker', path: '/components/datepicker' },
    { id: 'file', name: 'FileInput', path: '/components/file-input' },
    { id: 'modal', name: 'Modal', path: '/components/modal' },
    { id: 'pagination', name: 'Pagination', path: '/components/pagination' },
    { id: 'radio', name: 'RadioButton', path: '/components/radio-button' },
    { id: 'select', name: 'Select', path: '/components/select' },
    { id: 'table', name: 'Table', path: '/components/table' },
    { id: 'tabs', name: 'Tabs', path: '/components/tabs' },
    { id: 'textarea', name: 'Textarea', path: '/components/textarea' },
    { id: 'text', name: 'TextField', path: '/components/text-field' },
    { id: 'tooltip', name: 'Tooltip', path: '/components/tooltip' },
];

const snippetLinks: TypeLink[] = [
    { id: 'format', name: 'Formatters', path: '/snippets/formatters' },
];

const navList: TypeNav[] = [
    { id: 'getting-started', title: 'GETTING STARTED', links: startLinks },
    { id: 'components', title: 'COMPONENTS', links: componentLinks },
    { id: 'snippets', title: 'SNIPPETS', links: snippetLinks },
];

const route = useRoute();

function getACtiveNav() {
    const splitPath = route.fullPath.split('/');
    const activeNav = navList.find((item) => item.id === splitPath[1]);

    return activeNav?.id || navList[0].id;
}

const activeListId = ref<string[]>([getACtiveNav()]);

function setActiveList(id: string) {
    if (activeListId.value.includes(id)) {
        activeListId.value.splice(activeListId.value.indexOf(id), 1);
    } else {
        activeListId.value.push(id);
    }
}

function getGroupClasses(id: string) {
    return {
        [`list-group-${id}`]: activeListId.value.includes(id),
    };
}
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
    color: $color-white-1

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

.navigation
    padding: 16px 16px 32px 16px
    font-weight: 600
    overflow-y: auto
    height: calc(100% - 64px)
    scrollbar-width: thin
    scrollbar-color: $color-gray-1
    scrollbar-gutter: stable
    &::-webkit-scrollbar
        height: 6px
        width: 6px
    &::-webkit-scrollbar-thumb
        background-color: $color-gray-1
    &::-webkit-scrollbar-track
        background: $color-gray-3

.list-group
    max-height: 39px
    transition: all 0.5s ease
    overflow: hidden
    &-getting-started, &-snippets
        max-height: 150px
    &-components
        max-height: 750px
    &-getting-started, &-components, &-snippets
        .bracket-icon
                transform: rotate(180deg)

.list-title
    @extend %flex_row-center-between
    padding: 10px 16px
    color: rgb($color-white-1, 0.24)
    background: $color-dark-1
    cursor: pointer
    &:hover
        background: rgb($color-white-1, 0.03)

.bracket-icon
    width: 23px
    height: 23px
    fill: rgb($color-white-1, 0.24)

.list-link
    @extend %flex_row-center-between
    height: 44px
    padding: 0 16px
    border-radius: 8px
    color: $color-white-1
    &:hover
        background: rgb($color-white-1, 0.03)

.link-icon
    width: 20px
    height: 20px
    fill: transparent

.link_active
    background: rgb($color-white-1, 0.08)
    .link-icon
        fill: rgb($color-white-1, 0.5)

@media screen and (max-width: 1440px)
    .sidebar
        width: 260px

</style>