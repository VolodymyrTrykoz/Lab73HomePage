<template>
    <router-link to="/portfolio">
        <!--<span class="indicator" v-on:click="$store.commit('setMainPageState', 3)">-->
        <span class="indicator"> {{ thisTitle }} </span>
    </router-link>
</template>

<script>

    export default {
        name: 'Indicator',
        data() {
            return {

            };
        },
        components: {

        },
        computed: {
          thisTitle() {
            return this.$store.state.main.language === 'ru' ? 'Портфолио' : 'Portfolio'
          }
        },
        mounted() {

        },
        methods: {

        }
    };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import "@/assets/sass/main.sass"
.indicator
    position: absolute
    top: 20px
    right: 30px
    color: white
    text-transform: uppercase
    letter-spacing: 2px
    display: block
    font-size: 15px
    font-weight: 500
    font-family: Roboto, sans-serif
    cursor: pointer

@media only screen and (max-width: 900px)
    .indicator
        display: none

</style>