<template>
    <router-view/>
</template>

<style lang="sass">
@import 'normalize.css/normalize.css'

#app
    font-family: SFProDisplay, Avenir, Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: $color-white-1
    font-size: 16px

#nav
    padding: 30px
    a
        font-weight: bold
        color: #2c3e50
        &.router-link-exact-active
            color: #42b983

body
    margin: 0
    user-select: none

html,
body,
#app
    height: 100%
    overflow: hidden

// Отлючение дефолтных свойст браузера для тегов
*
    margin: 0
    padding: 0
    text-align: left
    box-sizing: border-box

a
    color: inherit
    text-decoration: none

button
    text-decoration: none
    outline: none
    cursor: pointer

ul
    list-style: none

h1,
h2
    font-size: 100%
    font-weight: normal
    margin: 0%

input::-ms-reveal,
input::-ms-clear
    display: none

</style>