<template lang="pug">
.file-input(:class="inputClasses")
    .label(v-if="isLabel")
        slot {{ label }}

    .field-wrap
        v-icon.icon-clip(
            path="img/clip.svg"
            @click="clickClip"
        )

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

            v-icon.icon-clear(
                v-show="isIconClear"
                path="img/clearField.svg"
                @click="clearField"
            )

    .message(v-if="message") {{ message }}

</template>

<script setup lang="ts">
import { ref, computed, toRef } from 'vue';
import VIcon from '@/components/common/VIcon/index.vue';
import { useLabel } from '@/composables/label';

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
    color: $color-gray-2
    margin-left: 45px
    margin-bottom: 5px

.field-wrap
    @extend %flex_row-center

.icon-clip
    min-width: 30px
    max-width: 30px
    height: 30px
    fill: $color-gray-2
    cursor: pointer

.field
    @extend %flex_row-center-between
    position: relative
    border: 1px solid $color-gray-3
    border-radius: 8px
    height: 40px
    width: calc(100% - 40px)
    background: $color-gray-5
    padding: 0 12px
    margin-left: 10px
    padding-right: 30px
    &:hover
        border-color: $color-gray-2

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
    color: $color-gray-2
    text-overflow: ellipsis
    white-space: nowrap
    overflow: hidden

.name
    color: $color-dark-1

.icon-clear
    width: 20px
    height: 20px
    fill: $color-gray-2
    cursor: pointer
    position: absolute
    right: 10px

.message
    position: absolute
    margin-top: 5px
    margin-left: 45px
    color: $color-gray-2
    font-size: 12px

.disabled
    pointer-events: none
    opacity: 0.8

.error
    .field
        border-color: $color-red-1
        &:hover
            border-color: $color-red-1
    .label, .message
        color: $color-red-1

</style>