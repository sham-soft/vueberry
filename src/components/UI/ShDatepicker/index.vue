<template lang="pug">
.sh-datepicker
    .label(v-if="isLabel")
        slot {{ label }}

    v-input(
        :modelValue="modelValue"
        :class="componentClasses"
        :placeholder="placeholder"
        :isDisabled="isDisabled"
        :isReadonly="isReadonly"
        @blur="onBlur('input')"
        @focus="onFocus('input')"
        @input="onInput"
    )
        template(v-slot:left)
            slot(name="left")
                .icon-calendar

        template(v-slot:right)
            slot(name="right")

            div(
                v-show="isIconClear"
                @click.stop="clearField"
            )
                .icon-clear

    .message(v-if="message") {{ message }}

    .calendar(
        v-show="isOpenCalendar"
        @focus="onFocus('calendar')"
        @focusout="onBlur('calendar')"
        tabindex="-1"
    )
        .calendar-heaeder
            .prev(@click="setMonth(false)")
            select.calendar-select(
                v-model="monthValue"
                @focus="onFocus('month')"
                @blur="onBlur('month')"
            )
                option(
                    v-for="month in monthList"
                    :key="month.id"
                    :value="month.id"
                ) {{ month.name }}
            select.calendar-select(
                v-model="yearValue"
                @focus="onFocus('year')"
                @blur="onBlur('year')"
            )
                option(
                    v-for="year in yearList"
                    :key="year"
                    :value="year"
                ) {{ year }}
            .next(@click="setMonth(true)")

        .calendar-body
            .week
                .week-day(
                    v-for="dayWeek in dayWeekList"
                    :key="dayWeek"
                ) {{ dayWeek.toUpperCase() }}
            .day-list
                .day-row(
                    v-for="(week, index) in dayMonthList"
                    :key="index"
                )
                    .day(
                        v-for="day in week"
                        :key="day"
                        :class="getDayClasses(day)"
                        @click="setDay(day)"
                    ) {{ day }}

</template>

<script setup lang="ts">
import { ref, reactive, computed, toRef } from 'vue';
import VInput from '../../common/VInput/index.vue';
import formatters from '../../../helpers/formatters';
import monthsJSON from './months.json';
import weekdaysJSON from './weekdays.json';
import { useLabel } from '../../../composables/label';

const props = withDefaults(
    defineProps<{
        modelValue?: string,
        label?: string,
        placeholder?: string,
        isDisabled?: boolean,
        isReadonly?: boolean,
        isError?: boolean,
        message?: string,
    }>(),
    {
        modelValue: '',
        label: '',
        placeholder: '',
        isDisabled: false,
        isReadonly: false,
        isError: false,
        message: '',
    },
);

const emits = defineEmits<{
  (e: 'update:modelValue', date: string): void
}>();

let yearValue = ref<number>(new Date().getFullYear());
let monthValue = ref<number>(new Date().getMonth());
let dayValue = ref<number>(new Date().getDate());

const yearList = computed<number[]>(() => {
    const minYear = 1980;
    const maxYear = 2064;
    let yearsArray: number[] = [];

    for (let i = minYear; i <= maxYear; i++) {
        yearsArray.push(i);
    }

    return yearsArray;
});

const monthList = monthsJSON;
const dayWeekList = weekdaysJSON;

const dayMonthList = computed<number[][]>(() => {
    const maxWeekDays = 7;
    let arrayIndex: number = 0;
    let daysArray: number[][] = [[]];
    const daysInMonth: number = new Date(yearValue.value, monthValue.value + 1, 0).getDate();

    for (let i = 1; i <= daysInMonth; i++) {
        daysArray[arrayIndex].push(i);

        if (i % maxWeekDays === 0) {
            arrayIndex++;
            daysArray.push([]);
        }
    }

    return daysArray;
});

function getDayClasses(day: number): object {
    return {
        'day-active': dayValue.value === day,
    };
}

function setMonth(operation: boolean): void {
    let newIndex: number = 0;
    const lastIndexMonth = monthList.length - 1;
    const indexMonth = monthList.findIndex(item => item.id === monthValue.value);

    if (operation) {        
        newIndex = indexMonth === lastIndexMonth ? 0 : indexMonth + 1;
    } else {
        newIndex = indexMonth === 0 ? lastIndexMonth : indexMonth - 1;
    }

    monthValue.value = monthList[newIndex].id;
}

function setDay(day: number): void {
    dayValue.value = day;

    const date = new Date(yearValue.value, monthValue.value, dayValue.value);
    const newDate = date.toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });

    setTimeout( () => {
        emits('update:modelValue', newDate);
        onBlur('calendar');
    }, 100);
}

const componentClasses = computed<object>(() => {
    return {
        'error': props.isError,
    };
});

// BLOCK "label"
const refLabel = toRef(props, 'label');
const { isLabel } = useLabel(refLabel);

// BLOCK "focus and blur"
const focusList: { [key: string]: boolean } = reactive({
    input: false,
    month: false,
    year: false,
    calendar: false,
});

const isOpenCalendar = computed<boolean>(() => {
    return Object.values(focusList).some(item => !!item);
});

function onFocus(key: string): void {
    focusList[key] = true;
}

function onBlur(key: string): void {
    setTimeout(() => {
        focusList[key] = false;
        checkDate();
    }, 100);
}

// BLOCK "input"
function onInput(event: Event) {
    (event.target as HTMLInputElement).value = formatters.date((event.target as HTMLInputElement).value);
    emits('update:modelValue', (event.target as HTMLInputElement).value);
}

function checkDate(): void {
    const requiredDateLength = 10;
    const isValidDateLength = props.modelValue && props.modelValue.length < requiredDateLength;

    if (isValidDateLength && !isOpenCalendar.value) {
        emits('update:modelValue', '');
    }
}

// BLOCK "clear"
const isIconClear = computed<boolean>(() => {
    return !!props.modelValue.length;
});

function clearField(): void {
    emits('update:modelValue', '');
}

</script>