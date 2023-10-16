<template lang="pug">
.icon(
    @click="emit('click')"
    @mousedown="emit('mousedown', $event)"
    @mouseup="emit('mouseup')"
)
    svg.icon__svg(
        v-if="format === 'svg'"
        :style="{ width, height, fill, stroke }"
    )
        use(:xlink:href="path + '#' + name")

    img.icon__img(
        v-else
        :src="path"
    )

</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
    defineProps<{
        path: string,
        width?: string,
        height?: string,
        fill?: string,
        stroke?: string,
    }>(),
    {
        width: '100%',
        height: '100%',
    },
);

const emit = defineEmits<{
    (e: 'click'): void,
    (e: 'mousedown', value: MouseEvent): MouseEvent,
    (e: 'mouseup'): void,
}>();

const name = computed<string>(() => props.path.substring(props.path.indexOf('/') + 1, props.path.lastIndexOf('.')));
const format = computed<string>(() => props.path.substring(props.path.lastIndexOf('.') + 1));
</script>

<style lang="sass" scoped>
.icon
    @extend %flex_row
    &__img
        width: inherit
        height: inherit

</style>