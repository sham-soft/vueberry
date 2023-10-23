<template lang="pug">
.sh-textarea-wrap
    .label(v-if="isLabel")
        slot {{ label }}

    textarea.textarea(
        :value="modelValue"
        :placeholder="placeholder"
        :readonly="isReadonly"
        :maxlength="maxlength"
        :spellcheck="isSpellcheck"
        :class="componentClasses"
        @blur="onBlur"
        @focus="onFocus"
        @input="onInput"
    )

</template>

<script setup lang="ts">
import { ref, computed, toRef } from 'vue';
import { useLabel } from '../../../composables/label';

const props = withDefaults(
    defineProps<{
        modelValue?: string,
        label?: string,
        placeholder?: string,
        isDisabled?: boolean,
        isReadonly?: boolean,
        isSpellcheck?: boolean,
        resize?: string,
        maxlength?: string,
    }>(),
    {
        modelValue: '',
        label: '',
        placeholder: '',
        isDisabled: false,
        isReadonly: false,
        isSpellcheck: false,
        resize: 'both',
        maxlength: '',
    },
);

const emits = defineEmits<{
    (e: 'update:modelValue', value: string): void
    (e: 'focus'): void
    (e: 'blur'): void
}>();

const componentClasses = computed<(string | object)[]>(() => {
    return [
        'resize-' + props.resize,
        {
            'textarea-focused': isFocus.value,
            'disabled': props.isDisabled,
        },
    ];
});

function onInput(event: Event): void {
    emits('update:modelValue', (event.target as HTMLInputElement).value);
}

// BLOCK "label"
const refLabel = toRef(props, 'label');
const { isLabel } = useLabel(refLabel);

// BLOCK "focus and blur"
const isFocus = ref<boolean>(false);

function onFocus(): void {
    isFocus.value = true;
    emits('focus');
}

function onBlur(): void {
    isFocus.value = false;
    emits('blur');
}

</script>