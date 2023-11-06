<template lang="pug">
.vb-tooltip-wrap
    .vb-tooltip(:class="componentClasses")
        slot Tooltip

</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
    defineProps<{
        isShow?: boolean | undefined,
        position?: string,
    }>(),
    {
        isShow: undefined,
        position: 'right',
    },
);

const componentClasses = computed<(string | object)[]>(() => {
    return [
        'vb-position-' + props.position,
        {
            'vb-show': props.isShow !== undefined && props.isShow,
            'vb-hide': props.isShow === false,
        },
    ];
});

</script>