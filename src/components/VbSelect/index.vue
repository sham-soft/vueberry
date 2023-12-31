<template lang="pug">
.vb-select
    .vb-label(v-if="isLabel")
        slot {{ label }}

    vb-input(
        :modelValue="valueInput"
        :class="componentClasses"
        :placeholder="placeholder"
        :isDisabled="isDisabled"
        isReadonly
        @blur="onBlur"
        @focus="emits('focus')"
        @click="clickInput"
    )
        template(v-slot:left)
            slot(name="left")

        template(v-slot:right)
            slot(name="right")

            div(
                v-show="isIconClear"
                @click.stop="clearField"
            )
                .vb-icon-clear

            .vb-icon-chevron(:class="iconClasses")

    .vb-message(v-if="message") {{ message }}

    ul.vb-list(
        v-show="isOpenList"
        @focus="handleFocus"
        @focusout="handleFocusOut"
        tabindex="-1"
    )
        li.vb-item(
            v-for="option in options"
            :key="option.id"
            @click.prevent="updateValue(option.id)"
        )
            vb-checkbox(
                v-if="isMultiple"
                :modelValue="modelValue.includes(option.id)"
                :keyField="option.id"
            ) {{ option.value }}

            div(v-else) {{ option.value }}

</template>

<script setup lang="ts">
import { ref, computed, toRef } from 'vue';
import VbInput from '../VbInput/index.vue';
import VbCheckbox from '../VbCheckbox/index.vue';
import type { TypeOption } from './types';
import { useLabel } from '../../composables/label';

type TypeModelValue = string | string[];

const props = withDefaults(
    defineProps<{
        modelValue?: TypeModelValue,
        label?: string,
        placeholder?: string,
        isDisabled?: boolean,
        isClearable?: boolean,
        message?: string,
        size?: string,
        variant?: string,
        isError?: boolean,
        isMultiple?: boolean,
        options?: TypeOption[],
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
        isMultiple: false,
        options: () => [],
    },
);

const emits = defineEmits<{
  (e: 'update:modelValue', id: TypeModelValue): void
  (e: 'focus'): void
  (e: 'blur'): void
}>();

const componentClasses = computed<(string | object)[]>(() => {
    return [
        'vb-size-' + props.size,
        'vb-variant-' + props.variant,
        {
            'vb-error': props.isError,
            'vb-focus': isOpenList.value,
        },
    ];
});

const iconClasses = computed<object>(() => {
    return {
        'vb-icon-chevron-invert': isOpenList.value,
    };
});

// BLOCK "label"
const refLabel = toRef(props, 'label');
const { isLabel } = useLabel(refLabel);

// BLOCK "focus and blur"
let isOpenList = ref<boolean>(false);
let isFocusList = ref<boolean>(false);

function clickInput(): void {
    isOpenList.value = !isOpenList.value;
}

function onBlur(): void {
    setTimeout( () => {
        if (props.isMultiple && isFocusList.value) {
            return;
        }

        isOpenList.value = false;
        emits('blur');
    }, 100);
}

function handleFocus() {
    if (!props.isMultiple) {
        return;
    }
    isFocusList.value = true;
}

function handleFocusOut() {
    if (!props.isMultiple) {
        return;
    }
    isFocusList.value = false;
    onBlur();
}

// BLOCK "show and update value"
const valueInput = computed<string>(() => {
    if (props.isMultiple && Array.isArray(props.modelValue)) {
        let values: string[] = [];
    
        props.modelValue.forEach(value => {
            const newItem = props.options.find((item) => value === item.id);
            if (newItem) {
                values.push(newItem.value);
            }
        });

        return values.join(', ');
    }

    const item = props.options.find((item) => props.modelValue === item.id);
    return item?.value || '';
});

function updateValue(id: string): void {
    if (props.isMultiple) {
        let array: string[] = props.modelValue.slice() as string[];

        if (array.includes(id)) {
            array.splice(array.indexOf(id), 1);
        } else {
            array.push(id);
        }

        emits('update:modelValue', array.slice());
    } else {
        emits('update:modelValue', id);
    }
}

// BLOCK "clear"
const isIconClear = computed<boolean>(() => {
    return !!(props.isClearable && props.modelValue.length);
});

function clearField() {
    if (props.isMultiple) {
        emits('update:modelValue', []);
    } else {
        emits('update:modelValue', '');
    }
}

</script>