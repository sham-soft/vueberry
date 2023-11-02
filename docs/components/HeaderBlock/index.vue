<template lang="pug">
.header
    .logo
        router-link(to="/") ShamUI
        .version V 1.0

    .control
        .search-wrap
            v-input-search.search(
                v-model="textButton"
                placeholder="Search"
            )

        v-button.button(@click="isLike = true")
            v-icon.button-icon(
                :class="iconClasses"
                path="img/heart.svg"
            )
            | Сказать спасибо автору

</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import VIcon from '@/components/common/VIcon/index.vue';
import VButton from '@/components/common/VButton/index.vue';
import VInputSearch from '@/components/common/VInputSearch/index.vue';

const textButton = ref<string>('');
const isLike = ref<boolean>(false);

const iconClasses = computed<object>(() => {
    return {
        'like-animate': isLike.value,
    };
});

</script>

<style scoped lang="sass">
.header
    @extend %flex_row
    height: 64px

.logo
    @extend %flex_row-center
    padding-left: 32px
    font-size: 20px
    font-weight: 600
    width: 300px
    height: 100%
    border-bottom: 1px solid $color-gray-3

.version
    @extend %flex_row-center-center
    width: 43px
    height: 24px
    background: rgb($color-dark-1, 0.08)
    border-radius: 55px
    font-weight: 600
    font-size: 12px
    margin-left: 8px
    line-height: 12px

.control
    @extend %flex_row-center-center
    flex: auto
    border-bottom: 1px solid $color-gray-3

.search-wrap
    @extend %flex_row-center-between
    width: 785px

.search
    width: 211px

.button
    position: absolute
    right: 12px
    width: 211px
    height: 40px
    font-size: 14px
    font-weight: 500
    line-height: 16px
    &-icon
        width: 20px
        height: 20px
        margin-right: 8px
        fill: $color-gray-2

.like-animate
    animation: anim 0.4s ease forwards

@keyframes anim
    0%
        transform: scale(1)
    50%
        transform: scale(0.7)
    100%
        transform: scale(1)
        fill: $color-red-1

@media screen and (max-width: 1440px)
    .logo
        width: 260px

</style>