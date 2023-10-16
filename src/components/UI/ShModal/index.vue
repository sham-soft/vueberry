<template lang="pug">
teleport(to="#app")
    .modal-wrap(@click.self="onClose")
        .modal
            .header
                .title
                    slot(name="title") {{ title }}

                v-icon.icon(
                    path="img/clearField.svg"
                    @click="onClose"
                )
                
            .text
                slot {{ text }}

            .footer
                .button-no(@click="onClickNo")
                    slot(name="textNo") {{ textNo }}

                .button-ok(@click="onClickOk")
                    slot(name="textOk") {{ textOk }}

</template>

<script setup lang="ts">
import VIcon from '@/components/common/VIcon/index.vue';

withDefaults(
    defineProps<{
        title?: string,
        text?: string,
        textNo?: string,
        textOk?: string,
    }>(),
    {
        title: 'Modal',
        text: 'Modal text',
        textNo: 'No',
        textOk: 'Ok',
    },
);

const emits = defineEmits<{
    (e: 'close'): void
    (e: 'no'): void
    (e: 'ok'): void
}>();

function onClose() {
    emits('close');
}

function onClickNo() {
    emits('no');
}

function onClickOk() {
    emits('ok');
}

</script>

<style lang="sass" scoped>
.modal-wrap
    @extend %flex_row-center-center
    position: fixed
    width: 100%
    height: 100%
    top: 0
    left: 0
    z-index: 2
    background: rgb($color-dark-1, 0.8)

.modal
    @extend %flex_column-between
    background: $color-white-1
    min-width: 300px
    border-radius: 8px
    overflow: hidden
    color: $color-dark-1
    font-weight: 500

.header
    @extend %flex_row-center-between
    background: $color-gray-4
    padding: 15px
    font-size: 24px

.icon
    width: 25px
    height: 25px
    fill: $color-gray-2
    cursor: pointer

.text
    margin: 40px 0
    padding: 0 20px
    font-size: 18px

.footer
    @extend %flex_row-center-end
    background: $color-gray-4
    padding: 15px
    font-size: 16px

.button-no
    @extend %flex_row-center-center
    width: 60px
    background: $color-white-1
    border: 1px solid $color-gray-1
    border-radius: 4px
    padding: 5px 10px

.button-ok
    @extend %flex_row-center-center
    width: 60px
    margin-left: 15px
    color: $color-white-1
    border: 1px solid $color-blue-1
    background: $color-blue-1
    border-radius: 4px
    padding: 5px 10px

</style>