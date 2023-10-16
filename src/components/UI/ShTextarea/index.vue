<template lang="pug">
.textarea-wrap
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
import { useLabel } from '@/composables/label';

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

<style lang="sass" scoped>
.textarea-wrap
    width: 100%

.label
    font-weight: 600
    font-size: 12px
    color: $color-gray-2
    margin-bottom: 12px

.textarea
    border: 1px solid $color-gray-3
    border-radius: 8px
    width: 100%
    font-weight: 500
    font-size: 14px
    color: $color-dark-1
    outline: none
    height: 40px
    padding: 10px 12px
    background: $color-gray-5
    caret-color: $color-blue-1
    &:hover,
    &-focused
        border-color: $color-gray-2
    &::placeholder
        font-size: 14px
        color: $color-gray-2

.disabled
    pointer-events: none
    opacity: 0.8

.resize
    &-none
        resize: none
    &-both
        resize: both
    &-horizontal
        resize: horizontal
    &-vertical
        resize: vertical

</style>