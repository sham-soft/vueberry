<template lang="pug">
.sh-tooltip-wrap
    .tooltip(:class="componentClasses")
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
        'position-' + props.position,
        {
            'show': props.isShow !== undefined && props.isShow,
            'hide': props.isShow === false,
        },
    ];
});

</script>