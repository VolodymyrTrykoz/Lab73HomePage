<template>
    <div v-if="dataCheck" class="wrap">
        <TitleSvgStroked :title="viagra" :style="`width: 100vw`" viewBox="0 0 426 73.3" class="animation4 svgTitle" v-show="!largeScreen"/>
        <section class="sectionSimpleImg">
            <parallax-container>
                <parallax-element :parallaxStrength="1" :type="'depth'">
                    <img :src="require(`@/assets/img/works/${projectIndex + 1}/${project.sections[0].img}`)" alt="">
                </parallax-element>
            </parallax-container>
        </section>
        <section class="sectionTextTitleText">
            <div class="halfScreen halfScreenLeft" v-show="largeScreen">
                <TextSlide marginTop="0" maxWidth="520px" lineHeight="23px" :title="project.sections[1].left.text[defineLanguage]"/>
            </div>
            <div class="halfScreen halfScreenRight">
                <TitleSlide :title="project.sections[1].right.title[defineLanguage]" :fontSize="titleFS"/>
                <TextSlide marginTop="20px" maxWidth="520px" lineHeight="23px" :title="project.sections[1].right.text[defineLanguage]"/>
            </div>
            <div class="halfScreen halfScreenLeft" v-show="!largeScreen">
                <TextSlide marginTop="0" maxWidth="520px" lineHeight="23px" :title="project.sections[1].left.text[defineLanguage]"/>
            </div>
        </section>
        <section class="sectionImgTitleTextImg">
            <div class="halfScreen halfScreenLeft" v-show="largeScreen">
                <!--wheel-->
                <img :src="require(`@/assets/img/works/${projectIndex + 1}/${project.sections[2].left.img}`)" alt="">
            </div>
            <div class="halfScreen halfScreenRight">
                <!--insights-->
                <TitleSlide :title="project.sections[2].right.title[defineLanguage]" :fontSize="titleFS"/>
                <TextSlide marginTop="20px" maxWidth="470px" lineHeight="23px" :title="project.sections[2].right.text[defineLanguage]"/>
                <img :src="require(`@/assets/img/works/${projectIndex + 1}/${project.sections[2].right.img}`)" alt="">
            </div>
            <div class="halfScreen halfScreenLeft" v-show="!largeScreen">
                <!--wheel-->
                <img :src="require(`@/assets/img/works/${projectIndex + 1}/${project.sections[2].left.img}`)" alt="">
            </div>
        </section>
        <section class="sectionImgTitleTextText">
            <!--scale-->
            <div class="halfScreen halfScreenLeft" v-show="largeScreen">
                <div class="imgScroll">
                    <img :src="require(`@/assets/img/works/${projectIndex + 1}/${project.sections[3].left.img}`)" alt="">
                </div>
            </div>
            <div class="halfScreen halfScreenLeft">
                <TitleSlide :title="project.sections[3].right.title[defineLanguage]" :fontSize="titleFS"/>
                <TextSlide marginTop="20px" maxWidth="520px" lineHeight="23px" :title="project.sections[3].right.text1[defineLanguage]"/>
                <div class="imgScroll" v-show="!largeScreen">
                    <img :src="require(`@/assets/img/works/${projectIndex + 1}/${project.sections[3].left.img}`)" alt="">
                </div>
                <TextSlide :marginTop="ukrLawTextOffsetTop" maxWidth="520px" lineHeight="23px" :title="project.sections[3].right.text2[defineLanguage]"/>
            </div>
        </section>
        <section class="sectionImgTitleText">
            <!--You run it-->
            <div class="halfScreen halfScreenLeft" v-show="largeScreen">
                <img :src="require(`@/assets/img/works/${projectIndex + 1}/${project.sections[4].left.img}`)" alt="">
            </div>
            <!--idea-->
            <div class="halfScreen halfScreenRight" v-show="largeScreen">
                <div>
                    <TitleSlide :title="project.sections[4].right.title[defineLanguage]" :fontSize="titleFS"/>
                    <TextSlide marginTop="20px" maxWidth="520px" lineHeight="23px" :title="project.sections[4].right.text[defineLanguage]"/>
                </div>
            </div>
        </section>
        <section class="sectionSimpleImg">
            <img :src="require(`@/assets/img/works/${projectIndex + 1}/${project.sections[5].img}`)" alt="">
        </section>
        <!--gear text-->
        <section class="sectionTextTitleText" v-show="largeScreen">
            <div class="halfScreen halfScreenLeft">
                <TextSlide marginTop="0" maxWidth="520px" lineHeight="23px" :title="project.sections[6].left.text[defineLanguage]"/>
            </div>
            <div class="halfScreen halfScreenRight">
                <TitleSlide :title="project.sections[6].right.title[defineLanguage]" :fontSize="titleFS"/>
                <TextSlide marginTop="20px" maxWidth="520px" lineHeight="23px" :title="project.sections[6].right.text[defineLanguage]"/>
            </div>
        </section>

        <!--gear imgs-->
        <section class="sectionImgImg" v-show="largeScreen">
            <div class="halfScreen halfScreenLeft">
                <img :src="require(`@/assets/img/works/${projectIndex + 1}/${project.sections[7].left.img}`)" alt="">
            </div>
            <div class="halfScreen halfScreenRight">
                <img :src="require(`@/assets/img/works/${projectIndex + 1}/${project.sections[7].right.img}`)" alt="">
            </div>
        </section>
        <section class="sectionSimpleImg">
            <img :src="require(`@/assets/img/works/${projectIndex + 1}/${project.sections[8].img}`)" alt="">
        </section>
        <!--Interactive and what we do-->
        <section class="sectionTextTitleText" v-show="largeScreen">
            <div class="halfScreen halfScreenLeft">
                <TextSlide marginTop="0" maxWidth="520px" lineHeight="23px" :title="project.sections[9].left.text[defineLanguage]"/>
            </div>
            <div class="halfScreen halfScreenRight">
                <TitleSlide :title="project.sections[9].right.title[defineLanguage]" :fontSize="titleFS"/>
                <TextSlide marginTop="20px" maxWidth="520px" lineHeight="23px" :title="project.sections[9].right.text[defineLanguage]"/>
            </div>
        </section>
        <section class="sectionSimpleImg">
            <img :src="require(`@/assets/img/works/${projectIndex + 1}/port-image-10.jpg`)" alt="">
        </section>
        <!--idea mobile-->
        <div class="halfScreen halfScreenRight" v-show="!largeScreen">
            <div>
                <TitleSlide :title="project.sections[4].right.title[defineLanguage]" :fontSize="titleFS"/>
                <TextSlide marginTop="20px" maxWidth="520px" lineHeight="23px" :title="project.sections[4].right.text[defineLanguage]"/>
            </div>
        </div>

        <!--You run it-->
        <div class="halfScreen halfScreenLeft" v-show="!largeScreen">
            <img :src="require(`@/assets/img/works/${projectIndex + 1}/${project.sections[4].left.img}`)" alt="">
        </div>

        <!--Result-->
        <div class="result">
            <div class="resultLeft">
                <TitleSlide :title="language[defineLanguage].result" :fontSize="titleFS"/>
                <TextSlide marginTop="20px" maxWidth="400px" lineHeight="23px" :title="language[defineLanguage].descr1"/>
            </div>
            <div class="resultCounter">
                <div class="resultCounterItem">
                    <p>{{ language[defineLanguage].conversion }}</p>
                    <span>{{project.sections[11].result.stats[0]}}<sup>%</sup></span>
                </div>
                <div class="resultCounterItem">
                    <p> {{ language[defineLanguage].visitors }} </p>
                    <span>{{project.sections[11].result.stats[1].toLocaleString('ru-RU')}}<sup> {{ language[defineLanguage].month }} </sup></span>
                </div>
                <div class="resultCounterItem">
                    <p> {{ language[defineLanguage].likes }} </p>
                    <span>{{project.sections[11].result.stats[2].toLocaleString('ru-RU')}}<sup> {{ language[defineLanguage].month }} </sup></span>
                </div>
                <div class="resultCounterItem">
                    <p> {{ language[defineLanguage].smiles }} </p>
                    <span>{{project.sections[11].result.stats[3].toLocaleString('ru-RU')}}<sup> {{ language[defineLanguage].people }} </sup></span>
                </div>
            </div>
            <div class="resultLeft">
                <TitleSlide :title="language[defineLanguage].timeForActions" :fontSize="titleFS"/>
                <TextSlide marginTop="20px" maxWidth="400px" lineHeight="23px" :title="language[defineLanguage].descr2"/>
                <router-link v-on:click.native="$store.commit('setMainPageState', 5)" :to="{path : '/'}" class="vue-link"> {{ language[defineLanguage].form }} </router-link>
            </div>
            <div class="resultChange" v-if="$store.getters.portfolioData.length > 1">
                <router-link v-on:click.native="scrollTop" :to="{name : `PortfolioProject`, params: {project: this.$store.getters.portfolioData[prevIndex].path, projectId : prevIndex}}" class="resultChangePrev">Предыдущий проект</router-link>
                <router-link v-on:click.native="scrollTop" :to="{name : `PortfolioProject`, params: {project: this.$store.getters.portfolioData[nextIndex].path, projectId : nextIndex}}" class="resultChangeNext">Следующий проект</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import {TweenMax, TimelineMax} from 'gsap';
    import TitleSlide from '@/components/partials/TitleSlide.vue';
    import TextSlide from '@/components/partials/TextSlide.vue';
    import VueMouseParallax from 'vue-mouse-parallax'
    import LineProgress from '@/components/partials/LineProgress';
    import Works from '@/components/MainSection/Info/Works/index.vue';
    import TitleSvgStroked from '@/components/partials/TitleSvgStroked';

    Vue.use(VueMouseParallax);

    export default {
        name: 'Project',
        data() {
            return {
                largeScreen: this.$store.state.main.largeScreen,
                titleFS: this.$store.state.main.largeScreen ? '48px': '28px',
                ukrLawTextOffsetTop: this.$store.state.main.largeScreen ? '150px': '0px',
                projectIndex: 0,
                project: 0,
                nextIndex: 0,
                prevIndex: 0,
                viagra: [
                {
                  word: 'Viagra',
                  text: `M33.5,73.4 L11,11h12.2l13.7,40.7l2.4,9.1h0.2c0.8-3.7,1.6-6.7,2.4-9.1L55.7,11h12L45.3,73.4H33.5z M85.1,20.9V11H74v9.9H85.1z M85.1,73.4V28.6 H74v44.8H85.1z M97.6,70.7c2.8,2.5,6.3,3.7,10.5,3.7c3,0,5.7-0.7,8.3-2.2c2.5-1.5,4.5-3.4,5.9-5.8h0.2l-0.3,3.3v3.8h10.4v-28 c0-5.6-1.6-10-4.9-13.1c-3.3-3.1-7.9-4.7-13.7-4.7c-3.2,0-6.5,0.5-9.8,1.6c-3.3,1.1-5.9,2.4-7.8,3.9l4.1,8c4.2-2.9,8.4-4.3,12.5-4.3 c5.6,0,8.4,2.6,8.4,7.9v0.6h-1.9c-2.9,0-5.7,0.2-8.4,0.6c-2.7,0.4-5.4,1.1-8.3,2.2c-2.8,1-5.1,2.7-6.9,4.9c-1.7,2.2-2.6,4.9-2.6,8.1 C93.4,65,94.8,68.2,97.6,70.7z M104.4,60c0,1.6,0.6,3,1.8,4.1c1.2,1.2,2.9,1.8,5,1.8c3,0,5.4-1.2,7.4-3.7c1.9-2.5,2.9-5.2,2.9-8.1 v-1.2h-1.9C109.5,52.9,104.4,55.3,104.4,60z M145.2,88c5,2.6,10.3,3.9,16,3.9c3,0,5.9-0.4,8.7-1.2c2.7-0.8,5.2-2,7.5-3.6 c2.3-1.6,4.1-3.8,5.4-6.6c1.3-2.8,2-6.1,2-9.8V28.6h-10.5v3.6c0,0.5,0.1,0.9,0.2,1.2h-0.3c-2.8-3.9-7.3-5.9-13.4-5.9 c-6.2,0-11.1,2.1-14.5,6.3c-3.5,4.2-5.2,9.6-5.2,16c0,6.4,1.8,11.8,5.4,16.2c3.6,4.3,8.5,6.5,14.7,6.5c5.6,0,9.8-2.1,12.6-6.2h0.2 l-0.2,2.4v2.8c0,3.7-1.2,6.5-3.5,8.3c-2.3,1.8-5.4,2.6-9.1,2.6c-4.3,0-8.4-1-12.4-2.9L145.2,88z M152.3,49.5c0,4,1,7.3,2.9,9.8 c2,2.5,4.7,3.8,8.3,3.8c3,0,5.5-1,7.4-3.1s2.9-5.4,2.9-10.1c0-8.6-3.7-12.9-11.1-12.9c-3.3,0-5.9,1.1-7.8,3.4 C153.2,42.7,152.3,45.7,152.3,49.5z M207.3,73.4V55.3c0-4.6,1.1-8.4,3.3-11.6c2.2-3.2,5.5-4.7,9.8-4.7c1.2,0,2.1,0.1,2.7,0.2v-11 c-0.9-0.1-1.6-0.2-2.1-0.2c-3.3,0-6.2,1.1-8.8,3.3c-2.6,2.2-4.4,5-5.4,8.3h-0.2l0.2-3.1v-7.9h-10.7v44.8H207.3z M230.8,70.7 c2.8,2.5,6.3,3.7,10.5,3.7c3,0,5.7-0.7,8.3-2.2c2.5-1.5,4.5-3.4,5.9-5.8h0.2l-0.3,3.3v3.8h10.4v-28c0-5.6-1.6-10-4.9-13.1 c-3.3-3.1-7.9-4.7-13.7-4.7c-3.2,0-6.5,0.5-9.8,1.6c-3.3,1.1-5.9,2.4-7.8,3.9l4.1,8c4.2-2.9,8.4-4.3,12.5-4.3c5.6,0,8.4,2.6,8.4,7.9 v0.6h-1.9c-2.9,0-5.7,0.2-8.4,0.6c-2.7,0.4-5.4,1.1-8.3,2.2c-2.8,1-5.1,2.7-6.9,4.9c-1.7,2.2-2.6,4.9-2.6,8.1 C226.6,65,228,68.2,230.8,70.7z M237.7,60c0,1.6,0.6,3,1.8,4.1c1.2,1.2,2.9,1.8,5,1.8c3,0,5.4-1.2,7.4-3.7c1.9-2.5,2.9-5.2,2.9-8.1 v-1.2h-1.9C242.7,52.9,237.7,55.3,237.7,60z`
                }
              ],
                language: {
                    ru: {
                        result: 'Результат',
                        descr1: 'В итоге мы повысили знание препарата среди ЦА, повысили лояльность к продукту и раскрыли данный вопрос с новой стороны',
                        conversion: 'Конверсия повысилась на:',
                        visitors: 'Посетителей:',
                        likes: 'Лайков в соцсетях:',
                        smiles: 'Улыбок пользователей',
                        month: 'мес',
                        people: 'чел',
                        timeForActions: 'Время действовать',
                        descr2: 'Свяжитесь с нами, чтобы вывести digital-присутствие своего бренда на новый уровень эффективности',
                        form: 'Форма обратной связи',

                    },
                    en: {
                        result: 'Result',
                        descr1: 'As a result, we have increased the knowledge of the drug among central auditory, increased loyalty to the product and opened the issue with a new side',
                        conversion: 'Conversion increased by:',
                        visitors: 'Visitors:',
                        likes: 'Likes:',
                        smiles: 'Smiles of users visited our project',
                        month: 'a month',
                        people: 'people',
                        timeForActions: `It's time to act`,
                        descr2: 'Свяжитесь с нами, чтобы вывести digital-присутствие своего бренда на новый уровень эффективности',
                        form: 'Contact us',
                    },
                },

            };
        },
        computed: {
            dataCheck() {
                if (this.$store.getters.portfolioData !== null) {
                    if (typeof this.$route.params.projectId !== 'undefined') {
                        this.projectIndex = +this.$route.params.projectId;
                    } else {
                        this.projectIndex = +this.$route.path; // just get a number from string
                    }
                    this.project = this.$store.getters.portfolioData[this.projectIndex].page;
                    this.nextIndex = this.getNextIndex;
                    this.prevIndex = this.getPrevIndex;
                    this.$nextTick(() => {
                        this.animationMounted();
                    });
                    return true
                } else {
                    return false
                }
            },
            getPrevIndex() {
                if (this.projectIndex === 0) {
                    return (this.$store.getters.portfolioData.length - 1)
                } else {
                    return (this.projectIndex - 1)
                }
            },
            getNextIndex() {
                if (this.projectIndex === this.$store.getters.portfolioData.length - 1) {
                    return 0
                } else {
                    return (this.projectIndex + 1)
                }
            },
            defineLanguage(){
              return this.$store.getters.getLanguage;
            }
        },
        components: {
            TitleSlide, TextSlide, TitleSvgStroked, LineProgress, Works
        },
        mounted() {
            this.$store.commit('initialRendered');
            new TimelineMax()
                .from(".animation2 .svgWordFilled", 3.5, {drawSVG:0, ease: Power4.easeInOut}, "-=1")
                .to(".animation2 .linearGradientFilled stop", 1, {stopOpacity: 1, ease: Power4.easeInOut}, "-=2.6")
        },
        methods: {
            animationMounted() {
                new TimelineMax()
                    .to('.titleSlideText', 0, {y:0, ease: Power4.easeInOut})
                    .to('.textSlideText', 0, {y:0, ease: Power4.easeInOut})
                    .from('img', 0, {opacity: 0, ease: Power4.easeInOut});
            },
            scrollTop() {
                new TimelineMax()
                    .to('.wrap', 0.3, {opacity: 0, ease: Power4.easeInOut, onComplete: () => {
                        document.querySelector('.wrap').scrollTo(0, 0);
                    }})
                    .to('.wrap', 0.3, {opacity: 1, delay: 0.3, ease: Power4.easeInOut});
            }
        }
    };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
/*@import "@/assets/sass/main.sass"*/
.wrap
    overflow-y: scroll
    height: 100vh
section
    text-align: left
    display: flex
    justify-content: center
    height: 100vh
.halfScreen
    width: 50%
    height: 100vh
.sectionImgTitleTextImg
    padding: 15vh 0 0 8vw
    img
        width: 40vw
    .halfScreenRight
        img
            transform: translate(-25%, 20%)
.sectionImgTitleTextText
    padding: 15vh 0 0 5vw
    img
        width: 40vw
.imgScroll
    height: 80vh
    width: 90%
    /*overflow-y: scroll*/
::-webkit-scrollbar
    width: 0
    background: transparent
.sectionSimpleImg
    display: flex
    justify-content: center
    align-items: center
    img
        width: 70vw
.sectionTextTitleText
    .halfScreenLeft
        display: flex
        justify-content: flex-end
        padding: 50vh 5vw 0 0
        text-align: right
    .halfScreenRight
        padding: 10vh 0 0 5vw
.sectionImgTitleText
    .halfScreenLeft
        display: flex
        justify-content: center
        align-items: center
        img
            width: 40vw
    .halfScreenRight
        display: flex
        justify-content: flex-start
        align-items: center
        padding: 5vw
.sectionImgImg
    .halfScreenLeft
        display: flex
        justify-content: center
        align-items: center
        img
            width: 40vw
            transform: translateY(-5vw)
    .halfScreenRight
        display: flex
        justify-content: center
        align-items: center
        img
            width: 40vw
            transform: translateY(5vw)
.result
    &Left
        width: 50%
        display: flex
        flex-direction: column
        align-items: flex-end
        text-align: right
    &Counter
        display: flex
        justify-content: space-around
        max-width: 90vw
        margin: 130px auto
        &Item
            color: white
            &:nth-child(2)
                margin-top: 20px
            &:nth-child(3)
                margin-top: 40px
            &:nth-child(4)
                margin-top: 60px
            p
                font-size: 18px
            span
                font-family: Museo, sans-serif
                font-size: 72px
            sup
                color: #00FFCE
                font-size: 40px
    &Change
        height: 184px
        display: flex
        margin-bottom: 100px
        a
            line-height: 184px
            display: block
            width: 50%
            height: 100%
            background: linear-gradient(to bottom, rgba(11,42,73,0) 0%, rgba(11,42,73,1) 50%, rgba(0,211,255,1) 50%,rgba(0,255,206,1) 100%)
            background-size: 100% 200%
            background-position: 0% 0%
            transition: background-position 0.3s ease-in-out, letter-spacing 0.3s ease-in-out
            font-family: Museo, sans-serif
            font-size: 48px
            color: white
            text-decoration: none
            letter-spacing: 0
            &:hover
                letter-spacing: 1px
                background-position: 0% 100%
.vue-link
    text-decoration: none
    border: none
    background-color: transparent
    font-size: 18px
    width: max-content
    text-transform: uppercase
    font-weight: 500
    padding-bottom: 20px
    background-image: linear-gradient(to right, rgba(0, 211, 255, 1) 0%, rgba(0, 255, 206, 1) 50%, rgba(9, 28, 51, 1) 49%, rgba(9, 28, 51, 0) 100%)
    background-size: 210% 3px
    background-position: 30% 100%
    background-repeat: no-repeat
    transition: background-position 0.4s ease-in-out
    cursor: pointer
    font-family: Roboto
    color: white
    margin: 100px 0
    &:hover
        background-position: 0% 100%
    &:focus
        outline: none
@media only screen and (max-width: 900px)
    img
        width: 90vw
    section
        height: initial
    .wrap
        background: #01010c
    .section
        display: block
        &TextTitleText
            display: block
            height: initial
            .halfScreen
                padding: 20vw 20px 0 20px
                text-align: left
        &ImgTitleText
            &Img
                display: block
                padding: 0
                img
                    width: 90vw
                    padding-top: 10vh
                .halfScreen
                    &Right
                        img
                            transform: none
                    &Left
                        img
                            padding-top: 0

            .halfScreen
                &Left
                    padding-top: 10vw
                    img
                        padding-top: 0
                        width: 90vw
        &ImgTitleText
            display: block
            &Text
                display: block
                padding: 0
                img
                    width: 150vw
                    margin-left: -32vw

            .halfScreenRight
                padding: 20vw 20px 0 20px

        &SimpleImg
            display: none
    .halfScreen
        display: block
        width: 100%
        height: initial
        padding: 20vw 20px 0 20px
        text-align: left
    .imgScroll
        height: initial
        width: 100%
        overflow: hidden
    .result
        padding: 20vw 20px 0 20px
        &Left
            display: block
            width: 100%
            text-align: left
        &Counter
            flex-wrap: wrap
            &Item
                width: 50%
                margin-top: 0
                &:nth-child(1)
                    order: 1
                    span
                        display: block
                        margin-top: 15px
                &:nth-child(2)
                    order: 3
                    margin-top: 20px
                    span
                        display: block
                        margin-top: 35px
                &:nth-child(3)
                    order: 2
                    margin-top: 0
                    span
                        display: block
                        margin-top: 15px
                &:nth-child(4)
                    order: 4
                    margin-top: 20px
                    span
                        display: block
                        margin-top: 15px
                p
                    font-size: 16px
                span
                    font-size: 25px
                sup
                    font-size: 15px
        &Change
            height: 184px
            display: flex
            margin-bottom: 100px
            a
                line-height: 184px
                font-size: 48px

    .vue-link
        display: block
    .lineContainer
        display: none
    .textSlideContainer
        text-align: left
    .svgTitle
        padding: 40vh 20px 30vh 20px
        background:  url("/static/img/viagra-bg.jpg")  50% -15% no-repeat
        background-size: cover
@media only screen and (max-width: 414px)
    .result
      &Counter
        &Item
          width: 45%
          margin-bottom: 50px
          &:nth-child(1)
            span
              margin-top: 15px
          &:nth-child(2)
            margin-top: 20px
            span
              margin-top: 15px
          &:nth-child(3)
            margin-top: 0
            span
              margin-top: 35px
          &:nth-child(4)
            margin-top: 20px
            span
              margin-top: 15px
@media only screen and (max-width: 375px)
    .result
      &Counter
        &Item
          &:nth-child(2)
            span
              margin-top: 35px

@media only screen and (max-width: 320px)
    .result
      &Counter
        margin: 80px 0 30px 0
        &Item
          &:nth-child(3)
            span
              margin-top: 15px
</style>