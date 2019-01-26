<template>
    <div class="lineCenter"></div>
</template>

<script>

    export default {
        name: 'LineCenter',
        data() {
            return {

            }
        },
        mounted() {
        }
    }
</script>

<style lang="sass" scoped>
.lineCenter
    width: 1px
    background: linear-gradient(to bottom, rgba(9,28,51,0) 0%,rgba(9,28,51,1) 50%,rgba(9,28,51,0) 100%)
    background-size: contain
    position: fixed
    top: 0
    bottom: 0
    left: 50%
    transform: translateX(-50%) translateY(-100%)
    opacity: 0.7

@media only screen and (max-width: 900px)
    .lineCenter
        display: none
</style>
