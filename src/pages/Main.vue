<template>
    <div class="container">
        <transition mode="out-in" v-on:enter = "animationMounted" v-on:leave = "animationExit" v-bind:css="false">
            <component v-bind:is="currentFigure" ref="figuresMethods"/>
        </transition>
        <transition :name = "this.$store.state.main.currentFade" mode="out-in" >
            <component v-bind:is="currentComponent" />
        </transition>
        <ScrollBar v-show="largeScreen"/>
    </div>

</template>

<script>
    import {TweenMax, TimelineMax, Power2} from 'gsap'
    import {debounce} from 'lodash'
    import AboutUs1 from '@/components/MainSection/AboutUs/AboutUs1'
    import AboutUs2 from '@/components/MainSection/AboutUs/AboutUs2'
    import WhatWeDo from '@/components/MainSection/WhatWeDo'
    import Clients from '@/components/MainSection/Info/Clients'
    import Contacts from '@/components/MainSection/Info/Contacts'
    import Works from '@/components/MainSection/Info/Works'
    import MenuPage from '@/components/Menu/MenuPage'
    import Romb from '@/components/Figures/Romb/index.vue'
    import Triangle from '@/components/Figures/Triangle/index.vue'
    import Square from '@/components/Figures/Square/index.vue'
    import Ring from '@/components/Figures/Ring/index.vue'
    import ScrollBar from '@/components/partials/ScrollBar'
    import Vue from 'vue'
    import Vue2TouchEvents from 'vue2-touch-events'

    Vue.use(Vue2TouchEvents);

    export default {
        name: 'Wrapper',
        components: {
            MenuPage, AboutUs1, AboutUs2, WhatWeDo, Contacts, Romb, Triangle, Square, Ring, Clients, Works, ScrollBar
        },
        data() {
            return {
                startSwipe: '',
                endSwipe: '',
                largeScreen: window.innerWidth >= 900 ? true : false,
            }
        },
        computed: {
            currentComponent () {
                return this.$store.getters.mainCurrentComponent;
            },
            currentFigure () {
                return this.$store.getters.mainCurrentFigure;
            }
        },
        watch: {
            currentComponent (newComponent, oldComponent) {
                let timeOut;
                if (newComponent === 'AboutUs2') {
                    if (oldComponent === 'AboutUs1') {
                        this.$refs.figuresMethods.translateRombForward();
                    } else if (oldComponent === 'MenuPage') {
                        setTimeout( () => { this.$refs.figuresMethods.translateRombForward(); }, 0)
                    } else {
                        // this.$store.commit('figureAnimating');
                        timeOut = setTimeout( () => { this.$refs.figuresMethods.translateRombForward(); }, 2200)
                    }
                } else if (oldComponent === 'AboutUs2' && newComponent === 'AboutUs1') {
                    clearTimeout(timeOut);
                    this.$refs.figuresMethods.translateRombBack();
                }
            }
        },
        mounted() {
            if(this.$store.state.main.initialRendering) {
                this.animationMounted(null, null, 2.5);
            }
            window.addEventListener('wheel', debounce(this.toggleSection, 300, {
                'leading': true,
                'trailing': false,
                'maxWait': 3000
            }));
            if(!this.largeScreen){
                window.addEventListener('touchstart', this.swipeStart);
                window.addEventListener('touchend', this.swipeDirection);
            }

        },

        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.$store.commit('togglePage', 'mainPage');
            })
        },

        beforeRouteLeave (to, from, next) {
            this.$store.commit('togglePage', 'Portfolio');
            next(true)
        },
        methods: {
            toggleSection(e) {
                if ((this.currentComponent !== 'MenuPage') && (!this.$store.state.main.figureIsAnimating) && this.$route.name === 'Main') {
                    this.$store.commit('scrollMainPage', e.deltaY);
                    if (e.deltaY < 0) {
                        this.$store.commit('changeFade', 'fadeDown')
                    } else {
                        this.$store.commit('changeFade', 'fadeUp')
                    }
                }
            },
            animationMounted(el, done, del = 0) {
                this.$store.commit('figureAnimating');
                TweenMax.to('.lineCenter', 5, {'transform': 'translateY(0%);', delay: del, ease: "Power2.easeOut"});
                TweenMax.from('.light1,  .light2', .5, {opacity: 0, delay: 0.7 + del, ease: "Power2.easeOut", onComplete: done});
                TweenMax.from('.blurMask, .normalMask', 1, {x: -1400, rotation: 0, svgOrigin:"340 340", delay: del, ease: "Power2.easeOut"});
                TweenMax.from('.normalShape, .blurShape', 1, {x: 1400, rotation: 0, svgOrigin:"340 340", delay: del, ease: "Power2.easeOut", onComplete: () => {
                        this.$store.commit('figureAnimated');
                    }});
                if (this.currentFigure === 'Romb') {
                    TweenMax.from('#img-group-norm, #img-group-blur', 2, {x: 2000, rotation: 0, svgOrigin:"340 340", delay: del, ease: "Power2.easeOut"});
                }
            },
            animationExit(el, done) {
                this.$store.commit('figureAnimating');
                // TweenMax.to('#figuresSVG', 2, {height: 100, opacity: 0, ease: "Power2.easeOut"});
                TweenMax.to('.light1,  .light2', .3, {opacity: 0, delay: 0, ease: "Power2.easeOut", onComplete: done});
                TweenMax.to('.blurMask, .normalMask', 1, {x: 1400, rotation: 0, svgOrigin:"340 340", ease: "Power2.easeOut"});
                TweenMax.to('.normalShape, .blurShape', 1, {x: -1400, rotation: 0, svgOrigin:"340 340", ease: "Power2.easeOut", onComplete: () => {
                        this.$store.commit('figureAnimated');
                    }});
                if (this.currentFigure === 'Ring') { // the next after the romb, which is tweening at the moment
                    TweenMax.to('#img-group-norm, #img-group-blur', 1, {x: -1400, rotation: 0, svgOrigin:"340 340", ease: "Power2.easeOut"});
                }
            },
            swipeStart(e){
                this.startSwipe = e.changedTouches[0].pageY;
            },
            swipeDirection(e){
                this.endSwipe = e.changedTouches[0].pageY;
                if(this.endSwipe-this.startSwipe > 125){
                    this.$store.commit('scrollMainPage', -1);
                }
                if(this.endSwipe-this.startSwipe < -125){
                    this.$store.commit('scrollMainPage', 1);
                }
            }
        },
        beforeDestroy(){
            window.removeEventListener('touchstart', this.swipeStart);
            window.removeEventListener('touchend', this.swipeDirection);
        }
    }
</script>

<style lang="sass" scoped>
@import "@/assets/sass/main.sass"
</style>
