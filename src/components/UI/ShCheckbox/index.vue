<template lang="pug">
.sh-checkbox(
    :class="componentClasses"
    @click="onChecked"
)
    input.input(
        :id="keyField"
        type="checkbox"
        :checked="modelValue"
        :disabled="isDisabled"
        @change="onChecked"
    )

    label.label(:for="keyField")

    .name
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
    }>(),
    {
        modelValue: false,
        keyField: 'key-id',
        isDisabled: false,
        size: 'medium',
    },
);

const emits = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
}>();

const componentClasses = computed<(string | object)[]>(() => {
    return [
        'sh-checkbox_size-' + props.size,
        {
            'sh-checkbox_disabled': props.isDisabled,
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