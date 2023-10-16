<template lang="pug">
button.button(@click="onClick")
    slot Button

</template>

<script setup lang="ts">
const emit = defineEmits<{
    (e: 'click'): void
}>();

function onClick(): void {
    emit('click');
}

</script>

<style scoped lang="sass">
.button
    @extend %flex_row-center-center
    background: $color-gray-5
    color: $color-dark-1
    border: 1px solid $color-gray-3
    border-radius: 8px
    overflow: hidden
    &:hover
        border-color: $color-gray-2

</style>