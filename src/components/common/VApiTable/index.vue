<template lang="pug">
.api
    .title API

    .nav
        .nav-item(
            v-for="nav in navList"
            :key="nav.id"
            :class="getActiveClass(nav.id)"
            @click="setActiveNav(nav.id)"
        ) {{ nav.title }}

    .table
        .header
            .header-item(
                v-for="header in headerList[activeNavId]"
                :key="header.id"
            ) {{ header.title }}

        .body
            template(
                v-for="item in items"
                :key="item.id"
            )
                .body-row
                    .body-column(
                        v-for="header in headerList[activeNavId]"
                        :key="header.id"
                        :class="['color-' + header.color]"
                    ) {{ item[header.id] }}
                .body-row-description {{  item.description }}

</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { TypeTableProp, TypeTableEvent, TypeTableSlot } from '@/components/common/VApiTable/types';

const props = withDefaults(
    defineProps<{
        propList?: TypeTableProp[],
        eventList?: TypeTableEvent[],
        slotList?: TypeTableSlot[],
    }>(),
    {
        propList: () => [],
        eventList: () => [],
        slotList: () => [],
    },
);


// BLOCK "nav"
type TypeNav = {
    id: string,
    title: string,
}

const navList = computed<TypeNav[]>(() => {
    const navs: TypeNav[] = [
        { id: 'propList', title: 'Properties' },
        { id: 'eventList', title: 'Events' },
        { id: 'slotList', title: 'Slots' },
    ];

    type TypeKey = keyof typeof props;
    return navs.filter(item => props[item.id as TypeKey].length);
});

const activeNavId = ref<string>(navList.value[0].id);

function getActiveClass(id: string) {
    if (activeNavId.value === id) {
        return 'nav_active';
    }
}

function setActiveNav(id: string): void {
    activeNavId.value = id;
}

// BLOCK "header"
type TypeHeader = {
    id: string,
    title: string,
    color?: string,
}

const headerList: { [name: string]: TypeHeader[] } = {
    propList: [
        { id: 'name', title: 'Name', color: 'blue' },
        { id: 'type', title: 'Type', color: 'green' },
        { id: 'default', title: 'Default' },
    ],
    eventList: [
        { id: 'name', title: 'Name', color: 'blue' },
        { id: 'parameters', title: 'Parameters', color: 'green' },
    ],
    slotList: [
        { id: 'name', title: 'Name', color: 'blue' },
        { id: 'default', title: 'Default' },
    ],
};

// BLOCK "body"
const items = computed<TypeTableProp[] | TypeTableEvent[] | TypeTableSlot[]>(() => {
    type TypeKey = keyof typeof props;
    return props[activeNavId.value as TypeKey];
});

</script>

<style lang="sass" scoped>
.title
    font-weight: 600
    font-size: 38px
    color: $color-dark-1

.nav
    @extend %flex_row
    padding-left: 10px
    margin-top: 30px
    &-item
        font-size: 18px
        color: $color-dark-1
        margin-right: 20px
        cursor: pointer
    &_active
        color: $color-blue-1
        border-bottom: 2px solid $color-blue-1


.table
    width: 100%
    color: $color-dark-1
    border-radius: 8px
    border: 1px solid $color-gray-3
    margin-top: 20px

.header
    @extend %flex_row
    border-bottom: 2px solid $color-gray-3
    &-item
        padding: 14px
        flex: 1 1 0
        font-weight: 500
        border-right: 1px solid $color-gray-3
        &:last-child
            border-right: none

.body
    &-row
        @extend %flex_row
        border-bottom: 1px solid $color-gray-3
    &-column
        padding: 14px
        flex: 1 1 0
        border-right: 1px solid $color-gray-3
        font-weight: 500
        &:last-child
            border-right: none
    &-row-description
        padding: 14px
        border-bottom: 1px solid $color-gray-3
        background: $color-gray-5
        font-size: 17px
        &:last-child
            border-bottom: none

.color
    &-blue
        color: $color-blue-1
    &-green
        color: $color-green-1

</style>