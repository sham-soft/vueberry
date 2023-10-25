<template lang="pug">
button.sh-button(
        :class="componentClasses"
        @click="onClick"
    )
    .loader(v-if="isLoading")
        .loader-circle

    .text
        slot Button

</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
    defineProps<{
        isLoading?: boolean,
        isDisabled?: boolean,
        size?: string,
        variant?: string,
        type?: string,
    }>(),
    {
        isLoading: false,
        isDisabled: false,
        size: 'medium',
        variant: 'default',
        type: 'primary',
    },
);

const emits = defineEmits<{
    (e: 'click'): void
}>();

const componentClasses = computed<(string | object)[]>(() => {
    return [
        'sh-button_size-' + props.size,
        'sh-button_variant-' + props.variant,
        'sh-button_type-' + props.type,
        {
            'sh-button_loading': props.isLoading,
            'sh-button_disabled': props.isDisabled,
        },
    ];
});


function onClick(): void {
    if (props.isLoading || props.isDisabled) {
        return;
    }

    emits('click');
}

</script>