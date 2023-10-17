<template lang="pug">
.datepicker
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
                v-icon.icon-calendar(path="img/calendar.svg")

        template(v-slot:right)
            slot(name="right")

            div(
                v-show="isIconClear"
                @click.stop="clearField"
            )
                v-icon.icon-clear(path="img/clearField.svg")

    .message(v-if="message") {{ message }}

    .calendar(
        v-show="isOpenCalendar"
        @focus="onFocus('calendar')"
        @focusout="onBlur('calendar')"
        tabindex="-1"
    )
        .calendar-heaeder
            v-icon.prev(
                path="img/chevron.svg"
                @click="setMonth(false)"
            )
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
            v-icon.next(
                path="img/chevron.svg"
                @click="setMonth(true)"
            )

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
import VIcon from '@/components/common/VIcon/index.vue';
import VInput from '@/components/common/VInput/index.vue';
import formatters from '@/helpers/formatters';
import monthsJSON from './months.json';
import weekdaysJSON from './weekdays.json';
import { useLabel } from '@/composables/label';

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

<style scoped lang="sass">
.datepicker
    position: relative

.label
    margin-left: 5px
    font-weight: 500
    font-size: 12px
    color: $sh-color-gray-2
    margin-left: 5px
    margin-bottom: 5px

.icon-calendar
    min-width: 20px
    max-width: 20px
    height: 20px
    fill: $sh-color-gray-2
    margin-right: 5px

.icon-clear
    width: 20px
    height: 20px
    fill: $sh-color-gray-2
    cursor: pointer

.message
    position: absolute
    margin-top: 5px
    margin-left: 5px
    color: $sh-color-gray-2
    font-size: 12px

.calendar
    position: absolute
    padding: 15px
    background: $sh-color-gray-4
    border-radius: 4px
    margin-top: 10px
    color: $sh-color-dark-1

.calendar-heaeder
    @extend %sh-flex_row-center-between

.prev, .next
    min-width: 35px
    max-width: 35px
    height: 35px
    fill: $sh-color-gray-2
    transform: rotate(90deg)
    border: 1px solid $sh-color-gray-2
    border-radius: 8px
    cursor: pointer
    &:hover
        border-color: $sh-color-gray-1

.next
    transform: rotate(270deg)

.calendar-select
    padding: 0 5px
    margin: 0 5px
    height: 35px
    border-radius: 8px
    border-color: $sh-color-gray-2
    cursor: pointer
    background: transparent
    &:hover
        border-color: $sh-color-gray-1

.calendar-body
    margin-top: 15px

.week
    @extend %sh-flex_row-center
    padding-bottom: 10px
    border-bottom: 2px solid $sh-color-gray-3

.week-day
    color: $sh-color-blue-1
    width: 35px

.day-list
    margin-top: 10px

.day-row
    @extend %sh-flex_row-center
    margin-top: 10px

.day
    @extend %sh-flex_row-center-center
    color: $sh-color-dark-1
    width: 30px
    height: 30px
    margin-right: 5px
    border-radius: 50%
    line-height: 1px
    cursor: pointer
    &:hover
        background: $sh-color-gray-3
    &-active
        background: $sh-color-gray-3

.error
    border-color: $sh-color-red-1
    &:hover
        border-color: $sh-color-red-1

.datepicker:has(.error)
    .label,
    .message
        color: $sh-color-red-1

</style>