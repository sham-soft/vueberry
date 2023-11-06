<template lang="pug">
.vb-input(
    :class="inputClasses"
    @click="clickInput"
)
    slot(name="left")
    
    input.vb-field(
        ref="refInput"
        :value="modelValue"
        :type="type"
        :placeholder="placeholder"
        :readonly="isReadonly"
        :maxlength="maxlength"
        :autocomplete="autocomplete"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
    )

    slot(name="right")

</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const props = withDefaults(
    defineProps<{
        modelValue?: number | string,
        type?: string,
        placeholder?: string,
        isDisabled?: boolean,
        isReadonly?: boolean,
        maxlength?: string,
        autocomplete?: string,
    }>(),
    {
        modelValue: '',
        type: 'text',
        placeholder: '',
        isDisabled: false,
        isReadonly: false,
        maxlength: '',
        autocomplete: 'on',
    },
);

const emit = defineEmits<{
  (e: 'update:modelValue', value: number | string): void
  (e: 'input', event: Event): void
  (e: 'focus'): void
  (e: 'blur'): void
}>();

const inputClasses = computed<object>(() => {
    return {
        'vb-focused': isFocus.value,
        'vb-disabled': props.isDisabled,
    };
});

function onInput(event: Event): void {
    emit('update:modelValue', (event.target as HTMLInputElement).value);
    emit('input', event);
}

// BLOCK "focus and blur"
const isFocus = ref<boolean>(false);
const refInput = ref<null | HTMLInputElement>(null);

function clickInput(): void {
    refInput.value?.focus();
}

function onFocus(): void {
    isFocus.value = true;
    emit('focus');
}

function onBlur(): void {
    isFocus.value = false;
    emit('blur');
}

</script>