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
        'size-' + props.size,
        'variant-' + props.variant,
        'type-' + props.type,
        {
            'loading': props.isLoading,
            'disabled': props.isDisabled,
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