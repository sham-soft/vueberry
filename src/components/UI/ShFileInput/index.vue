<template lang="pug">
.sh-file-input(:class="inputClasses")
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
        'sh-file-input_disabled': props.isDisabled,
        'sh-file-input_error': props.isError,
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