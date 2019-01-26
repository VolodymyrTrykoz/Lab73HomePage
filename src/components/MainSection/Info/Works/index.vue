<template>
    <div v-if="dataCheck" class="portfolioWrapper" >
        <div class="ourCases">
            <TitleSlide :title="language[defineLanguage].title" class="animation1" :fontSize= "titleFS"/>
            <TextSlide class="animation2 smallTitle" marginTop="20px" maxWidth="unset" :title="language[defineLanguage].description"/>
        </div>
        <slick ref="slick" :options="slickOptions" v-show="true">
            <div class="container">
                <div class="projectItem container flex">
                    <div class="imgContainer">
                        <SvgImage :image="projects[currentProjectIndex].img" v-show="largeScreen"/>
                    </div>
                    <div class="halfScreen halfScreenLeft">

                        <div class="halfScreenLeftContainer">
                            <transition name = "fade" mode="out-in" >
                                <h1 class="animation4">{{projects[currentProjectIndex].name[defineLanguage]}}</h1>
                            </transition>
                            <div class="madeDetails animation5">
                                <h5>{{projects[currentProjectIndex].client}}</h5>
                                <div class="horizontalSeparator"></div>
                                <h5>{{projects[currentProjectIndex].year}}</h5>
                            </div>
                        </div>
                    </div>
                    <div class="halfScreen halfScreenRight">
                        <div class="posRelative">
                            <TextSlide class="animation4_2" :style="{marginBottom: 0}" marginTop="40px" fontSize="16px" lineHeight="20px" maxWidth="490px" :title="projects[currentProjectIndex].description[defineLanguage]"/>
                            <router-link class="vue-link animation5"
                                         :to="{name : `PortfolioProject`, params: {project: projects[currentProjectIndex].path, projectId : currentProjectIndex}}">
                                {{ language[defineLanguage].openCase }}
                            </router-link>
                        </div>
                    </div>
                    <div class="dotContainer" v-if="$store.getters.portfolioData.length > 1">
                        <div class="dotLeft" v-on:click="changeProject('back')">
                            <div class="dotLeftInner"></div>
                        </div>
                        <div v-for="(project, index) in projects" class="dotItem" v-on:click="changeProject(index)">
                            <div class="dotItemInner" :class="{dotItemInnerActive : currentProjectIndex === index}"></div>
                        </div>
                        <div class="dotRight" v-on:click="changeProject('forward')">
                            <div class="dotRightInner"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="projectItem container flex">
                    <div class="imgContainer">
                        <SvgImage :image="projects[currentProjectIndex].img" v-show="largeScreen"/>
                    </div>
                    <div class="halfScreen halfScreenLeft">

                        <div class="halfScreenLeftContainer">
                            <transition name = "fade" mode="out-in" >
                                <h1 class="animation4">{{projects[currentProjectIndex].name[defineLanguage]}}</h1>
                            </transition>
                            <div class="madeDetails animation5">
                                <h5>{{projects[currentProjectIndex].client}}</h5>
                                <div class="horizontalSeparator"></div>
                                <h5>{{projects[currentProjectIndex].year}}</h5>
                            </div>
                        </div>
                    </div>
                    <div class="halfScreen halfScreenRight">
                        <div class="posRelative">
                            <TextSlide class="animation4_2" :style="{marginBottom: 0}" marginTop="40px" fontSize="16px" lineHeight="20px" maxWidth="490px" :title="projects[currentProjectIndex].description[defineLanguage]"/>
                            <router-link class="vue-link animation5"
                                         :to="{name : `PortfolioProject`, params: {project: projects[currentProjectIndex].path, projectId : currentProjectIndex}}">
                                {{ language[defineLanguage].openCase }}
                            </router-link>
                        </div>
                    </div>
                    <div class="dotContainer" v-if="$store.getters.portfolioData.length > 1">
                        <div class="dotLeft" v-on:click="changeProject('back')">
                            <div class="dotLeftInner"></div>
                        </div>
                        <div v-for="(project, index) in projects" class="dotItem" v-on:click="changeProject(index)">
                            <div class="dotItemInner" :class="{dotItemInnerActive : currentProjectIndex === index}"></div>
                        </div>
                        <div class="dotRight" v-on:click="changeProject('forward')">
                            <div class="dotRightInner"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="projectItem container flex">
                    <div class="imgContainer">
                        <SvgImage :image="projects[currentProjectIndex].img" v-show="largeScreen"/>
                    </div>
                    <div class="halfScreen halfScreenLeft">

                        <div class="halfScreenLeftContainer">
                            <transition name = "fade" mode="out-in" >
                                <h1 class="animation4">{{projects[currentProjectIndex].name[defineLanguage]}}</h1>
                            </transition>
                            <div class="madeDetails animation5">
                                <h5>{{projects[currentProjectIndex].client}}</h5>
                                <div class="horizontalSeparator"></div>
                                <h5>{{projects[currentProjectIndex].year}}</h5>
                            </div>
                        </div>
                    </div>
                    <div class="halfScreen halfScreenRight">
                        <div class="posRelative">
                            <TextSlide class="animation4_2" :style="{marginBottom: 0}" marginTop="40px" fontSize="16px" lineHeight="20px" maxWidth="490px" :title="projects[currentProjectIndex].description[defineLanguage]"/>
                            <router-link class="vue-link animation5"
                                         :to="{name : `PortfolioProject`, params: {project: projects[currentProjectIndex].path, projectId : currentProjectIndex}}">
                                {{ language[defineLanguage].openCase }}
                            </router-link>
                        </div>
                    </div>
                    <div class="dotContainer" v-if="$store.getters.portfolioData.length > 1">
                        <div class="dotLeft" v-on:click="changeProject('back')">
                            <div class="dotLeftInner"></div>
                        </div>
                        <div v-for="(project, index) in projects" class="dotItem" v-on:click="changeProject(index)">
                            <div class="dotItemInner" :class="{dotItemInnerActive : currentProjectIndex === index}"></div>
                        </div>
                        <div class="dotRight" v-on:click="changeProject('forward')">
                            <div class="dotRightInner"></div>
                        </div>
                    </div>
                </div>
            </div>
        </slick>

    </div>
</template>

<script>
    import {TweenMax, TimelineMax, Power4} from 'gsap';
    import TitleSlide from '@/components/partials/TitleSlide.vue';
    import SvgImage from '@/components/MainSection/Info/Works/partials/index.vue';
    import TextSlide from '@/components/partials/TextSlide.vue';
    import $ from "jquery";
    import Slick from 'vue-slick';

    export default {
        name: 'Works',
        data() {
            return {
                largeScreen: this.$store.state.main.largeScreen,
                titleFS: this.$store.state.main.largeScreen ? '48px': '25px',
                currentProjectIndex: 0,
                projects: null,
                language: {
                    ru: {
                      title: 'Наши кейсы',
                      description: 'Проекты, которыми мы гордимся',
                      openCase: 'Открыть кейс'
                    },
                    en: {
                      title: 'Our cases',
                      description: 'Projects we are proud of',
                      openCase: 'Open Case'
                    },
                },
                slickOptions: {
                  infinite: false,
                  dots: true,
                  draggable: true,
                  swipe: true,
                  arrows: false,
                },
            };
        },
        components: {
            TitleSlide, TextSlide, SvgImage, Slick
        },
        beforeDestroy() {
          this.$refs.slick.destroy()
        },
        computed: {
            dataCheck() {
                if (this.$store.getters.portfolioData !== null) {
                    this.projects = this.$store.getters.portfolioData;
                    this.$nextTick(() => {
                        this.animationMounted();
                    });
                    return true
                }
                return false
            },
            defineLanguage(){
              return this.$store.getters.getLanguage;
            }
        },
        mounted() {
            // change body background color for better slider picture reflection
            if(!this.largeScreen){
                $('body').css('background', '#01010c');
            }

        },
        methods: {
            animationMounted() {
                if(this.$store.state.main.largeScreen){
                    new TimelineMax()
                        .to('.animation1 .titleSlideText', 1, {y:0, ease: Power4.easeInOut})
                        .to('.animation2 .textSlideText', 1, {y:0, ease: Power4.easeInOut}, 0.5)
                        .fromTo('.normToMove', 2,
                            {force3D: true, x: 2000, ease: Power4.easeInOut},
                            {force3D: true, x: -20, ease: Power4.easeInOut}, 1)
                        .fromTo('.blurToMove', 2,
                            {force3D: true, x: 2000, ease: Power4.easeInOut},
                            {force3D: true, x: -60, ease: Power4.easeInOut}, 1)
                        .from('.animation4', 1, {y: 50, opacity: 0, ease: Power4.easeInOut}, 2)
                        .to('.animation4_2 .textSlideText ', 1, {y:0, delay: -1, ease: Power4.easeInOut}, 3)
                        .from('.animation5', 1, {y: -50, opacity: 0, ease: Power4.easeInOut}, 3)
                        .from('.dotContainer', 1, {y: 50, opacity: 0, ease: Power4.easeInOut}, 4)
                        .from('.slick-dots', 1, {y: 50, opacity: 0, ease: Power4.easeInOut}, 3.5);
                }
                else{
                    new TimelineMax()
                        .set('.animation1 .titleSlideText', {y:0})
                        .set('.animation2 .textSlideText', {y:0})
                        .set('.animation4_2 .textSlideText ', {y:0})

                }

            },
            changeProject(direction) {
                if (this.currentProjectIndex === direction) {
                    return
                }
                new TimelineMax()
                    .to('.normToMove, .blurToMove', 2, {x: -2000, ease: Power4.easeInOut})
                    .to('.animation4, .animation4_2 .textSlideText ', 0.5, {y: 100, opacity:0, ease: Power4.easeInOut}, 1)
                    .to('.animation5', 0.5, {y: 0, opacity: 0, ease: Power4.easeInOut, onComplete: () => {
                        if (direction === 'back') {
                            if (this.currentProjectIndex === 0) {
                                this.currentProjectIndex = this.projects.length - 1;
                            } else {
                                this.currentProjectIndex -= 1;
                            }
                        } else if (direction === 'forward') {
                            if (this.currentProjectIndex === this.projects.length - 1) {
                                this.currentProjectIndex = 0;
                            } else {
                                this.currentProjectIndex += 1;
                            }
                        } else if (!isNaN(direction)) {
                            this.currentProjectIndex = direction;
                        }
                        new TimelineMax()
                            .fromTo('.normToMove', 2, {x: 2000}, {x: -20, ease: Power4.easeInOut})
                            .fromTo('.blurToMove', 2, {x: 2000}, {x: -60, ease: Power4.easeInOut}, 0)
                            .to('.animation4, .animation4_2 .textSlideText', 0.5, {y: 0, opacity:1, ease: Power4.easeInOut})
                            .to('.animation5', 0.5, {y: 50, opacity: 1, ease: Power4.easeInOut});
                        }
                    }, 1.5)
            }
        }
    };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
    @import "@/assets/sass/slick.scss"
</style>
<style lang="sass" scoped>
@import "@/assets/sass/main.sass"

*
    color: white

.halfScreenLeft
    padding-right: 0
.halfScreenLeftContainer
    max-width: 450px
h1
    font-family: 'Museo'
    font-weight: 700
    font-size: 115px
h5
    font-size: 18px
    font-weight: 300
.horizontalSeparator
    width: 40px
    height: 2px
    background-color: #0B2B51
    margin: 0 10px
.madeDetails
    align-items: center
    display: flex
    justify-content: flex-end
    margin-top: 75px
.posAbs
    position: absolute
    top: 15vh
button
    margin-top: 95px
.imgContainer
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    z-index: -1
    height: 100vh
    width: 100%
.dot
    &Container
        display: flex
        width: 10vw
        justify-content: space-between
        align-items: center
        position: absolute
        bottom: 20vh
        left: 50%
        transform: translateX(-50%)
    &Left
        cursor: pointer
        width: 30px
        height: 30px
        padding: 10px
        border-radius: 50%
        &Inner
            width: 10px
            height: 10px
            border-left: 1px solid #0B2B51
            border-bottom: 1px solid #0B2B51
            transform-origin: 50% 50%
            transform: rotate(45deg)
            transition: border 0.2s ease-in-out
        &:hover
            .dotLeftInner
                border-color: #00FFCE
    &Right
        cursor: pointer
        width: 30px
        height: 30px
        padding: 10px
        border-radius: 50%
        &Inner
            width: 10px
            height: 10px
            border-right: 1px solid #0B2B51
            border-top: 1px solid #0B2B51
            transform-origin: 50% 50%
            transform: rotate(45deg)
            transition: border 0.2s ease-in-out
        &:hover
            .dotRightInner
                border-color: #00FFCE

    &Item
        width: 14px
        height: 14px
        padding: 4px
        cursor: pointer
        border-radius: 50%
        &Inner
            width: 6px
            height: 6px
            border: 1px solid transparent
            background-color: #0B2B51
            transform-origin: 50% 50%
            transform: rotate(45deg)
            transition: transform 0.3s ease-in-out, border 0.3s ease-in-out
            &Active
                border: 1px solid #00FFCE
                transform: rotate(45deg) scale(1.5)
.textSlideContainer
    margin-bottom: 90px
.container
    position: relative
.ourCases
    position: absolute
    z-index: 5
    left: 43%
    top: 40%
    transform: translate(-50%, -50%)
@media only screen and (max-width: 900px)
    h1
        font-size: 50px
    .flex
        display: block
    .smallTitle, .madeDetails
        display: none
    .container
        .container
            background: url("/static/img/viagra-bg.jpg")  no-repeat 50%
            background-size: cover
        .halfScreen
            width: 100%
            display: block
            height: initial
    .ourCases
        top: 15%
        left: 27%
@media only screen and (max-width: 375px)
    .ourCases
        left: 32%
@media only screen and (max-width: 320px)
    .vue-link
        margin-top: 20px


</style>
