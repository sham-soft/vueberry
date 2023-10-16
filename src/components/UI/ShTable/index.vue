<template lang="pug">
.table-wrap(:style="{ height }")
    table.table
        thead.header
            tr.header-row
                th.header-item(
                    v-for="header in headers"
                    :key="header.id"
                ) {{ header.title }}

        tbody.body
            tr.body-row(
                v-for="item in items"
                :key="item.id"
            )
                td.body-column(
                    v-for="header in headers"
                    :key="header.id"
                )
                    slot(
                        :value="item[header.id]"
                        :name="header.id"
                    ) {{ item[header.id] }}

</template>

<script setup lang="ts">
withDefaults(
    defineProps<{
        headers: { id: string, title: string }[],
        items: { [name: string]: string }[],
        height?: string,
    }>(),
    {
        headers: () => [],
        items: () => [],
        height: '',
    },
);

</script>

<style lang="sass" scoped>
.table-wrap
    width: 100%
    color: $color-dark-1
    border-radius: 8px
    border: 1px solid $color-gray-3
    overflow: auto

.table
    width: 100%
    border-spacing: 0

.header
    position: sticky
    top: 0
    background: $color-white-1
    &-row
        @extend %flex_row
        border-bottom: 2px solid $color-gray-3
    &-item
        padding: 8px 6px
        flex: 1 1 0
        font-weight: 600
        border-right: 1px solid $color-gray-3
        &:last-child
            border-right: none

.body
    &-row
        @extend %flex_row
        border-bottom: 1px solid $color-gray-3
        &:last-child
            border-bottom: none
    &-column
        padding: 8px 6px
        flex: 1 1 0
        border-right: 1px solid $color-gray-3
        &:last-child
            border-right: none

</style>