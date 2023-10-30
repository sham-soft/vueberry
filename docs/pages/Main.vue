<!-- eslint-disable vue/multi-word-component-names -->
<template lang="pug">
.main
    .header-wrap
        .logo
            router-link(to="/") ShamUI
            .version V 1.0
        header-block.header-block

    .content
        .banner ShamUI

        .title Vue Component Library

        .buttons
            router-link.button-start(to="/getting-started/installation")
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
import HeaderBlock from '@/components/HeaderBlock/index.vue';

</script>

<style scoped lang="sass">
.main
    @extend %flex_column-start
    width: 100%
    max-height: calc(100vh - 64px)

.header-wrap
    @extend %flex_row

.logo
    @extend %flex_row-center
    padding-left: 32px
    font-size: 20px
    font-weight: 600
    border: 1px solid $color-gray-3
    border-right: none

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

.header-block
    justify-content: flex-start
    flex: auto
    padding-left: 40px 
    border-left: 1px solid transparent

.content
    @extend %flex_column-start-center

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