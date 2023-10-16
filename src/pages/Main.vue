<!-- eslint-disable vue/multi-word-component-names -->
<template lang="pug">
.main
    .banner ShamUI

    .title Vue Component Library

    .buttons
        router-link.button-start(to="/autocomplete")
            v-button GET STARTED
        a.button-git(
            href="https://github.com/code-build-project/sham-ui-vue"
            target="_blank"
        )
            v-button
                v-icon.icon(path="img/github.svg")
                | GITHUB

</template>

<script setup lang="ts">
import VIcon from '@/components/common/VIcon/index.vue';
import VButton from '@/components/common/VButton/index.vue';

</script>

<style scoped lang="sass">
.main
    @extend %flex_column-start-center
    padding: 10px

.banner
    @extend %flex_row-center-center
    width: 400px
    height: 210px
    font-size: 52px
    font-weight: 700
    color: $color-white-1
    background: rgb($color-dark-1, 0.96)
    border-radius: 32px
    margin-top: 100px

.title
    color: $color-dark-1
    font-size: 46px
    font-weight: 500
    margin-top: 50px

.buttons
    @extend %flex_row
    margin-top: 80px

.button-start, .button-git
    &:deep(.button)
        width: 228px
        height: 52px
        font-size: 18px
        font-weight: 500
        border-radius: 8px
        background: $color-blue-1
        color: $color-white-1
        &:hover
            box-shadow: 2px 2px 4px rgb($color-blue-1, 0.5)
        &:active
            background: rgb($color-blue-1, 0.9)

.button-git:deep(.button)
    background: $color-dark-1
    margin-left: 30px
    &:hover
        box-shadow: 2px 2px 4px rgb($color-dark-1, 0.5)
    &:active
        background: rgb($color-dark-1, 0.9)

.icon
    width: 25px
    height: 25px
    margin-right: 8px
    fill: $color-white-1

</style>