<template lang="pug">
.pagination
    .prev(
        :class="geDisabledClasses(1)"
        @click="setStep(modelValue - 1)"
    )

    .step(
        v-for="step in stepList"
        :key="step"
        :class="getStepClasses(step)"
        @click="setStep(step)"
    ) {{ step }}

    template(v-if="stepsLength > maxViewSteps")
        .step-ellipsis ...

        .step(
            :class="getStepClasses(stepsLength)"
            @click="setStep(stepsLength)"
        ) {{ stepsLength }}

    .next(
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
        'step-active': props.modelValue === step,
    };
}

function geDisabledClasses(step: number): object {
    return {
        'disabled': props.modelValue === step,
    };
}

</script>

<style scoped lang="sass">
.pagination
    @extend %sh-flex_row-center-center
    font-size: 20px
    font-weight: 500
    color: $sh-color-dark-1

.prev, .next
    min-width: 35px
    max-width: 35px
    height: 35px
    transform: rotate(90deg)
    border: 1px solid $sh-color-dark-2
    border-radius: 8px
    cursor: pointer
    background-image: sh-icon-chevron($sh-color-dark-2)
    &:hover
        border-color: $sh-color-gray-1
        background-image: sh-icon-chevron($sh-color-gray-1)

.prev
    margin-right: 10px

.next
    transform: rotate(270deg)
    margin-left: 10px

.step
    @extend %sh-flex_row-center-center
    width: 40px
    height: 40px
    margin-right: 5px
    cursor: pointer
    border-radius: 50%
    &:hover
        background: $sh-color-gray-4
    &-active
        background: $sh-color-gray-3
    &-ellipsis
        margin: 0 20px

.disabled
    pointer-events: none
    opacity: 0.8
    border-color: $sh-color-gray-2
    background-image: sh-icon-chevron($sh-color-gray-2)

</style>