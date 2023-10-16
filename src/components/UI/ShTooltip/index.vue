<template lang="pug">
.tooltip-wrap
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

<style scoped lang="sass">
.tooltip-wrap
    @extend %flex_row-center-center
    position: absolute
    left: 0
    top: 0
    background: transparent
    width: 100%
    height: 100%
    &:hover
        .tooltip:not(.hide)
            display: flex
            animation: slowlyAppear 0.3s ease-in-out

.tooltip
    @extend %flex_row-center-center
    position: absolute
    background: rgb($color-gray-1, 0.9)
    padding: 10px 20px
    color: $color-white-1
    border-radius: 4px
    font-weight: 500
    display: none
    width: max-content

.show
    display: flex
    animation: slowlyAppear 0.3s ease-in-out

@keyframes slowlyAppear
    0%
        display: none
        opacity: 0
    1%
        display: flex
        opacity: 0
    100%
        display: flex
        opacity: 1

$position-margin: calc(100% + 10px)

.position
    &-top
        bottom: $position-margin
    &-right
        left: $position-margin
    &-bottom
        top: $position-margin
    &-left
        right: $position-margin

</style>