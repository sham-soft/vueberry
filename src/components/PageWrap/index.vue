<template lang="pug">
.page-wrap
    .page
        h1.title
            slot(name="title")

        p.text
            slot(name="text")

        .playground
            slot(name="playground")

        .api-table
            slot(name="apiTable")

</template>

<style scoped lang="sass">
.page-wrap
    @extend %flex_column-start-center

.page
    width: 768px
    padding: 32px 0 80px 0

.title
    font-weight: 600
    font-size: 48px
    color: $color-dark-1

.sub-title
    font-weight: 600
    font-size: 38px
    color: $color-dark-1

.text
    color: $color-dark-1
    line-height: 28px
    margin-top: 12px

.playground
    margin-top: 32px

.api-table
    margin-top: 80px

</style>