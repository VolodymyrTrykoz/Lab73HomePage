<template>
    <div id="app">
        <Background/>
        <ScrolLine/>
        <LineCenter/>
        <transition name = "fade" mode="out-in" >
            <router-view/>
        </transition>
        <Footer v-show="largeScreen"/>
        <MenuButton/>
        <Indicator/>
    </div>
</template>

<script>

    import Background from '@/components/Background'
    import LineCenter from '@/components/partials/LineCenter'
    import Footer from '@/components/partials/Footer'
    import Indicator from '@/components/partials/Indicator'
    import MenuButton from '@/components/Menu/MenuButton'
    import ScrolLine from '@/components/partials/ScrolLine'

    export default {
        data(){
          return {
            largeScreen: this.$store.state.main.largeScreen,
          }
        },
        name: 'App',
        components: {
            Background, LineCenter, Indicator, Footer, ScrolLine, MenuButton
        },
        beforeCreate() {
            circle.classList.add('loaderCircleComplete');
            document.querySelector('.loaderDigital').classList.add('fillGreen');
        },
        beforeMount() {

        },
        mounted() {
            this.$store.dispatch('loadPortfolioData');
            setTimeout(function () {
                document.querySelector('.loaderBackCircle').setAttribute('stroke', 'none');
                circle.classList.add('loaderCircleProgressBack');
                document.querySelector('.loaderLogo').classList.add('loaded');
            }, 1000);
            setTimeout(function () {
                document.querySelector('#app').classList.add('visibleApp');
                document.querySelector('.loader').classList.add('loaded');
            }, 2000);
        }
    }
</script>

<style>
    html {
        font-family: sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        box-sizing: border-box;
    }
    *, *:before, *:after {
        box-sizing: inherit
    }
    body, html, h1,h2,h3,h4,h5, p {
        padding: 0;
        margin: 0;
    }
    body {
        /*overscroll-behavior-y: none;*/
        /*overflow: hidden;*/
    }
    #app {
        font-family: Roboto, 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        min-height: 100vh;
        width: 100%;
        transition: opacity 0.5s ease-in-out 0s;
        opacity: 0;
    }
</style>
