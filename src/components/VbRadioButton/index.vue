<template lang="pug">
.vb-radio
    .vb-label(v-if="isLabel")
        slot {{ label }}

    .vb-button-group(:class="componentClasses")
        .vb-radio-button(
            v-for="item in radioList"
            :key="keyField + item.id"
        )
            input.vb-input-field(
                :id="keyField + item.id"
                type="radio"
                :value="item.id"
                :checked="modelValue === item.id"
                :name="keyField + item.id"
                @change="setRadio(item.id)"
            )

            label.vb-input-label(:for="keyField + item.id")

            .vb-name(@click="setRadio(item.id)") {{ item.name }}

</template>

<script setup lang="ts">
import { computed, toRef } from 'vue';
import { useLabel } from '../../composables/label';

interface TypeRadio {
    id: string | number,
    name: string,
}

const props = withDefaults(
    defineProps<{
        modelValue?: number | string,
        keyField: string,
        radioList?: TypeRadio[],
        label?: string,
        isColumn?: boolean,
        size?: string,
        type?: string,
    }>(),
    {
        modelValue: '',
        radioList: () => [],
        label: '',
        isColumn: false,
        size: 'medium',
        type: 'primary',
    },
);

const emits = defineEmits<{
    (e: 'update:modelValue', value: number | string): void
}>();

const componentClasses = computed<object>(() => {
    return [
        'vb-size-' + props.size,
        'vb-type-' + props.type,
        {
            'vb-group-column': props.isColumn,
        },
    ];
});

function setRadio(value: number | string): void {
    emits('update:modelValue', value);
}

// BLOCK "label"
const refLabel = toRef(props, 'label');
const { isLabel } = useLabel(refLabel);

</script>