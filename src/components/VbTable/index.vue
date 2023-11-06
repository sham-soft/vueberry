<template lang="pug">
.vb-table-wrap(:style="{ height }")
    table.vb-table
        thead.vb-header
            tr.vb-header-row
                th.vb-header-item(
                    v-for="header in headers"
                    :key="header.id"
                ) {{ header.title }}

        tbody.vb-body
            tr.vb-body-row(
                v-for="item in items"
                :key="item.id"
            )
                td.vb-body-column(
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