<template>
    <div class="lineProgress"></div>
</template>

<script>

    export default {
        name: 'lineProgress',
        data() {
            return {

            }
        },
        mounted() {
        }
    }
</script>

<style lang="sass" scoped>
.lineProgress
    width: 1px
    //height: 100%
    background-color: #00FFCE
    position: fixed
    top: 0
    bottom: 0
    left: 50%
    transform: translateX(-50%)
    opacity: 1
    z-index: -1
</style>
