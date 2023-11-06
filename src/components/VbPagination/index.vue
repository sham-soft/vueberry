<template lang="pug">
.vb-pagination
    .vb-prev(
        :class="geDisabledClasses(1)"
        @click="setStep(modelValue - 1)"
    )

    .vb-step(
        v-for="step in stepList"
        :key="step"
        :class="getStepClasses(step)"
        @click="setStep(step)"
    ) {{ step }}

    template(v-if="stepsLength > maxViewSteps")
        .vb-step-ellipsis ...

        .vb-step(
            :class="getStepClasses(stepsLength)"
            @click="setStep(stepsLength)"
        ) {{ stepsLength }}

    .vb-next(
        :class="geDisabledClasses(stepsLength)"
        @click="setStep(modelValue + 1)"
    )

</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = withDefaults(
    defineProps<{
        modelValue?: number,
        stepsLength?: number,
    }>(),
    {
        modelValue: 1,
        stepsLength: 5,
    },
);

const emits = defineEmits<{
    (e: 'update:modelValue', step: number): void
}>();

const maxViewSteps = 5;

let stepList = ref<number[]>([]);
initStepList();

function initStepList(): void {
    const arraySize = props.stepsLength > maxViewSteps ? maxViewSteps : props.stepsLength;
    stepList.value = [...Array(arraySize).keys()].map(index => index + 1);
}

watch(() => props.stepsLength, () => initStepList());

function setStep(step: number): void {
    emits('update:modelValue', step);

    const lastIndex = stepList.value.length - 1;

    if (step === stepList.value[lastIndex] && step < (props.stepsLength - 1)) {
        stepList.value = stepList.value.map(item => item + 1);
    }

    if (step === stepList.value[0] && step > 1) {
        stepList.value = stepList.value.map(item => item - 1);
    }
}

function getStepClasses(step: number): object {
    return {
        'vb-step-active': props.modelValue === step,
    };
}

function geDisabledClasses(step: number): object {
    return {
        'vb-disabled': props.modelValue === step,
    };
}

</script>