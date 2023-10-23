<template lang="pug">
.sh-text-field
    .label(v-if="isLabel")
        slot {{ label }}

    v-input(
        :modelValue="modelValue"
        :class="componentClasses"
        :type="isPassword ? 'password' : type"
        :placeholder="placeholder"
        :isDisabled="isDisabled"
        :isReadonly="isReadonly"
        :maxlength="maxlength"
        @blur="emits('blur')"
        @focus="emits('focus')"
        @input="onInput"
    )
        template(v-slot:left)
            slot(name="left")

        template(v-slot:right)
            slot(name="right")

            .icon(
                v-show="isIconClear"
                @click="clearField"
            )

    .message(v-if="message") {{ message }}

</template>

<script setup lang="ts">
import { computed, toRef } from 'vue';
import VInput from '../../common/VInput/index.vue';
import formatters from '../../../helpers/formatters';
import { useLabel } from '../../../composables/label';

const props = withDefaults(
    defineProps<{
        modelValue?: number | string,
        label?: string,
        type?: string,
        placeholder?: string,
        isDisabled?: boolean,
        isReadonly?: boolean,
        maxlength?: string,
        autocomplete?: string,
        size?: string,
        variant?: string,
        isError?: boolean,
        message?: string,
        isClearable?: boolean,
        isPassword?: boolean,
        format?: string,
    }>(),
    {
        modelValue: '',
        label: '',
        type: 'text',
        placeholder: '',
        isDisabled: false,
        isReadonly: false,
        maxlength: '',
        autocomplete: 'on',
        size: 'medium',
        variant: 'default',
        isError: false,
        message: '',
        isClearable: false,
        isPassword: false,
        format: '',
    },
);

const emits = defineEmits<{
  (e: 'update:modelValue', value: number | string): void
  (e: 'input', event: Event): void
  (e: 'focus'): void
  (e: 'blur'): void
}>();

const componentClasses = computed<(string | object)[]>(() => {
    return [
        'size-' + props.size,
        'variant-' + props.variant,
        {
            'error': props.isError,
        },
    ];
});

// BLOCK "label"
const refLabel = toRef(props, 'label');
const { isLabel } = useLabel(refLabel);

// BLOCK "input"
function onInput(event: Event) {
    const target = (event.target as HTMLInputElement);

    if (props.format) {
        target.value = formatters[props.format](target.value);
    }

    emits('update:modelValue', target.value);
    emits('input', event);
}

// BLOCK "clear"
const isIconClear = computed<boolean>(() => {
    return !!(props.isClearable && props.modelValue);
});

function clearField() {
    emits('update:modelValue', '');
}

</script>