<template lang="pug">
.vb-checkbox(
    :class="componentClasses"
    @click="onChecked"
)
    input.vb-input(
        :id="keyField"
        type="checkbox"
        :checked="modelValue"
        :disabled="isDisabled"
        @change="onChecked"
    )

    label.vb-label(:for="keyField")

    .vb-name
        slot

</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
    defineProps<{
        modelValue?: boolean,
        keyField: string,
        isDisabled?: boolean,
        size?: string,
        type?: string,
    }>(),
    {
        modelValue: false,
        keyField: 'key-id',
        isDisabled: false,
        size: 'medium',
        type: 'primary',
    },
);

const emits = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
}>();

const componentClasses = computed<(string | object)[]>(() => {
    return [
        'vb-size-' + props.size,
        'vb-type-' + props.type,
        {
            'vb-disabled': props.isDisabled,
        },
    ];
});

function onChecked(): void {
    if (props.isDisabled) {
        return;
    }

    emits('update:modelValue', !props.modelValue);
}

</script>