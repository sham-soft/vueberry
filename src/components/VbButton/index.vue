<template lang="pug">
button.vb-button(
        :class="componentClasses"
        @click="onClick"
    )
    .vb-loader(v-if="isLoading")
        .vb-loader-circle

    .vb-text
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
        'vb-button_size-' + props.size,
        'vb-button_variant-' + props.variant,
        'vb-button_type-' + props.type,
        {
            'vb-button_loading': props.isLoading,
            'vb-button_disabled': props.isDisabled,
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