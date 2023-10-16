<template lang="pug">
.autocomplete
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
                v-icon.icon-clear(path="img/clearField.svg")

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
import VIcon from '@/components/common/VIcon/index.vue';
import VInput from '@/components/common/VInput/index.vue';
import { useLabel } from '@/composables/label';

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

<style lang="sass" scoped>
.autocomplete
    position: relative

.label
    margin-left: 5px
    font-weight: 500
    font-size: 12px
    color: $color-gray-2
    margin-left: 5px
    margin-bottom: 5px

.icon-clear
    width: 20px
    height: 20px
    fill: $color-gray-2
    cursor: pointer

.list
    position: absolute
    width: 100%
    min-height: 40px
    max-height: 200px
    background-color: $color-white-1
    border-radius: 4px
    box-shadow: 0 3px 19px $color-gray-3
    overflow-y: auto
    z-index: 1

.item
    @extend %flex_row-center
    cursor: pointer
    padding: 9px 0 9px 15px
    min-height: 35px
    font-size: 14px
    color: $color-dark-1
    &:hover
        background: $color-gray-4

.message
    position: absolute
    margin-top: 5px
    margin-left: 5px
    color: $color-gray-2
    font-size: 12px

.size
    &-small
        height: 32px
        padding: 0 10px
        &:deep(.field)
            font-size: 12px
            &::placeholder
                font-size: 12px
    &-medium
        height: 40px
        padding: 0 12px
        &:deep(.field)
            font-size: 14px
            &::placeholder
                font-size: 14px
    &-large
        height: 48px
        padding: 0 14px
        &:deep(.field)
            font-size: 16px
            &::placeholder
                font-size: 16px

.autocomplete
    &:has(.size-small)
        .label,
        .message
            font-size: 10px
    &:has(.size-large)
        .label,
        .message
            font-size: 14px

.variant
    &-outline
        background: transparent
    &-underline
        border: none
        border-radius: 0
        border-bottom: 1px solid $color-gray-3
        background: transparent
        padding: 0

.autocomplete:has(.variant-underline)
    .label
        margin-left: 0
        margin-bottom: 0
    .message
        margin-left: 0

.error
    border-color: $color-red-1
    &:hover,
    &_focused
        border-color: $color-red-1

.autocomplete:has(.error)
    .label,
    .message
        color: $color-red-1

</style>