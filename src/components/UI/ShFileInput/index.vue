<template lang="pug">
.file-input(:class="inputClasses")
    .label(v-if="isLabel")
        slot {{ label }}

    .field-wrap
        .icon-clip(@click="clickClip")

        .field
            input.field-input(
                ref="refField"
                type="file"
                :multiple="isMultiple"
                :accept="accept"
                @change="onLoad($event)"
            )

            p.placeholder(v-if="!nameList") {{ placeholder }}

            p.name(v-else) {{ nameList }}

            .icon-clear(
                v-show="isIconClear"
                @click="clearField"
            )

    .message(v-if="message") {{ message }}

</template>

<script setup lang="ts">
import { ref, computed, toRef } from 'vue';
import { useLabel } from '../../../composables/label';

const props = withDefaults(
    defineProps<{
        modelValue?: { [key: string]: any }[],
        label?: string,
        isMultiple?: boolean,
        isDisabled?: boolean,
        isError?: boolean,
        message?: string,
        placeholder?: string,
        accept?: string,
    }>(),
    {
        modelValue: () => [],
        label: '',
        isMultiple: false,
        isDisabled: false,
        isError: false,
        message: '',
        placeholder: '',
        accept: '',
    },
);

const emits = defineEmits<{
    (e: 'update:modelValue', files: { [key: string]: any }[]): void
}>();

let isLoading = ref<boolean>(false);

async function onLoad(event: Event) {
    isLoading.value = true;

    const target = event.target as HTMLInputElement;

    if (!target.files?.length) {
        return;
    }

    let files = [];

    for (let i = 0; i < target.files.length; i++) {
        files.push(target.files[i]);
    }

    emits('update:modelValue', files);
    target.value = '';

    isLoading.value = false;
}

const nameList = computed<string>(() => {
    return props.modelValue?.map(item => item.name || '').join(', ');
});

const inputClasses = computed<object>(() => {
    return {
        'disabled': props.isDisabled,
        'error': props.isError,
    };
});

// BLOCK "label"
const refLabel = toRef(props, 'label');
const { isLabel } = useLabel(refLabel);

// BLOCK "clip"
const refField = ref<null | HTMLInputElement>(null);

function clickClip() {
    if (!refField.value) {
        return;
    }

    refField.value.click();
}

// BLOCK "clear"
const isIconClear = computed<boolean>(() => {
    return !!nameList.value;
});

function clearField() {
    emits('update:modelValue', []);
}

</script>

<style scoped lang="sass">
.label
    font-weight: 500
    font-size: 12px
    color: $sh-color-gray-2
    margin-left: 45px
    margin-bottom: 5px

.field-wrap
    @extend %sh-flex_row-center

.icon-clip
    min-width: 30px
    max-width: 30px
    height: 30px
    cursor: pointer
    background-image: sh-icon-clip($sh-color-gray-2)

.field
    @extend %sh-flex_row-center-between
    position: relative
    border: 1px solid $sh-color-gray-3
    border-radius: 8px
    height: 40px
    width: calc(100% - 40px)
    background: $sh-color-gray-5
    padding: 0 12px
    margin-left: 10px
    padding-right: 30px
    &:hover
        border-color: $sh-color-gray-2

.field-input
    width: 100%
    height: 100%
    opacity: 0
    position: absolute
    top: 0
    left: 0

.name, .placeholder
    font-weight: 500
    font-size: 14px
    color: $sh-color-gray-2
    text-overflow: ellipsis
    white-space: nowrap
    overflow: hidden

.name
    color: $sh-color-dark-1

.icon-clear
    width: 20px
    height: 20px
    cursor: pointer
    position: absolute
    right: 10px
    background-image: sh-icon-clear($sh-color-gray-2)

.message
    position: absolute
    margin-top: 5px
    margin-left: 45px
    color: $sh-color-gray-2
    font-size: 12px

.disabled
    pointer-events: none
    opacity: 0.8

.error
    .field
        border-color: $sh-color-red-1
        &:hover
            border-color: $sh-color-red-1
    .label, .message
        color: $sh-color-red-1

</style>