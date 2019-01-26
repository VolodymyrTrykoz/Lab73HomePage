<template>
    <div class="lineContainer" v-on:click="nextSection" :class="{ lineContainerEnd : this.$store.state.main.current.component === 'Contacts', lineContainerTransparent : this.$store.state.main.current.component === 'MenuPage' }">
        <div class="line" :class="{ lineEnd : this.$store.state.main.current.component === 'Contacts' }"></div>
    </div>
</template>

<script>
    // import $ from "jquery";

    export default {
        name: 'ScrolLine',
        data() {
            return {

            };
        },
        components: {

        },
        mounted() {

        },
        methods: {
            nextSection() {
                if (!this.$store.state.main.figureIsAnimating) {
                    this.$store.commit('scrollMainPage', 1);
                }
            }
        }
    };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
//@import "src/assets/sass/main.sass"
.lineContainer
    width: 2px
    height: 50px
    position: absolute
    bottom: 5%
    left: 50%
    transform: translate3d(-50%, 0, 0)
    //background-color: transparent
    cursor: pointer
    overflow: hidden
    transition: opacity 0.4s ease-in-out
    opacity: 1
    padding: 0 5px
    z-index: 2
    &Transparent
        opacity: 0
    &End
        width: 50px
        transition: width 0.7s ease-in-out, border-bottom 0.4s ease-in-out
        transition-delay: 2.3s
        border-bottom: 1px solid #00FFCE
        cursor: default

.line
    position: absolute
    top: 0
    width: 1px
    height: 100%
    background-color: #00FFCE
    animation-name: growth
    animation-duration: 2.5s
    transform: translate3d(0, -100%, 0)
    animation-iteration-count: infinite
    animation-timing-function: ease-in-out
    &End
        animation-name: end
        animation-iteration-count: 1
        transform: translate3d(0, 99.5%, 0)
        overflow: visible
@keyframes growth
    0%
        transform: translate3d(0, -100%, 0)
    100%
        transform: translate3d(0, 100%, 0)
@keyframes end
    0%
        transform: translate3d(0, -100%, 0)
    100%
        transform: translate3d(0, 99.5%, 0)

@media only screen and (max-width: 900px)
    .line
        &Container
            height: 30px
            bottom: 20px
            display: none

</style>