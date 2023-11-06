<template lang="pug">
teleport(to="#app")
    .vb-modal-wrap(@click.self="onClose")
        .modal
            .vb-header
                .vb-title
                    slot(name="title") {{ title }}

                .vb-icon(@click="onClose")
                
            .vb-text
                slot {{ text }}

            .vb-footer
                .vb-button-no(@click="onClickNo")
                    slot(name="textNo") {{ textNo }}

                .vb-button-ok(@click="onClickOk")
                    slot(name="textOk") {{ textOk }}

</template>

<script setup lang="ts">
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