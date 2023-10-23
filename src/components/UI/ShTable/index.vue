<template lang="pug">
.sh-table-wrap(:style="{ height }")
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