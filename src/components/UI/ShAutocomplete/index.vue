<template lang="pug">
.sh-autocomplete
    .label(v-if="isLabel")
        slot {{ label }}

    v-input(
        :modelValue="modelValue"
        :class="componentClasses"
        :placeholder="placeholder"
        :isDisabled="isDisabled"
        @blur="onBlur"
        @focus="onFocus"
        @update:modelValue="updateValue"
    )
        template(v-slot:left)
            slot(name="left")

        template(v-slot:right)
            slot(name="right")

            div(
                v-show="isIconClear"
                @click.stop="clearField"
            )
                .icon-clear

    .message(v-if="message") {{ message }}

    ul.list(v-show="isShowList")
        li.item(
            v-for="(option, index) in filteredOptions"
            :key="option + index"
            @click="updateValue(option)"
        ) {{ option }}

</template>

<script setup lang="ts">
import { ref, computed, toRef } from 'vue';
import VInput from '../../common/VInput/index.vue';
import { useLabel } from '../../../composables/label';

const props = withDefaults(
    defineProps<{
        modelValue?: string,
        label?: string,
        placeholder?: string,
        isDisabled?: boolean,
        isClearable?: boolean,
        message?: string,
        size?: string,
        variant?: string,
        isError?: boolean,
        isListWithoutValue?: boolean,
        options?: string[],
    }>(),
    {
        modelValue: '',
        label: '',
        placeholder: '',
        isDisabled: false,
        isClearable: false,
        message: '',
        size: 'medium',
        variant: 'default',
        isError: false,
        isListWithoutValue: true,
        options: () => [],
    },
);

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'focus'): void
  (e: 'blur'): void
}>();

function updateValue(value: number | string) {
    emits('update:modelValue', value as string);
}

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

// BLOCK "focus and blur"
const isFocus = ref<boolean>(false);

function onFocus(): void {
    isFocus.value = true;
    emits('focus');
}

function onBlur(): void {
    setTimeout(() => {
        isFocus.value = false;
        emits('blur');
    }, 100);
}

// BLOCK "list"
const filteredOptions = computed<string[]>(() => {
    return props.options.filter((option) => {
        return option.toUpperCase().startsWith(props.modelValue.toUpperCase());
    });
});

const isShowList = computed<boolean>(() => {
    if (props.isListWithoutValue) {
        return !!(isFocus.value && filteredOptions.value.length);
    } else {
        return !!(isFocus.value && filteredOptions.value.length && props.modelValue);
    }
});

// BLOCK "clear"
const isIconClear = computed<boolean>(() => {
    return !!(props.isClearable && props.modelValue);
});

function clearField() {
    updateValue('');
}

</script>