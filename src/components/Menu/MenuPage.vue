<template>
    <div class="container flex">
        <div class="halfScreen halfScreenLeft">
            <div class="menuLinks">
                <h5 class="h5Left"> {{ language[defineLanguage].menu }} </h5>
                <TitleSlide :color="color" :fontSize= "titleFS" menu="true" :title="language[defineLanguage].we" v-on:click.native="goToSection(0)" :class="{ active : this.$store.state.main.sectionsCounter === 0 || this.$store.state.main.sectionsCounter === 1}"/>
                <TitleSlide :color="color" :fontSize= "titleFS" menu="true" :title="language[defineLanguage].projects" v-on:click.native="goToSection(3)" :class="{ active : this.$store.state.main.sectionsCounter === 3}" />
                <TitleSlide :color="color" :fontSize= "titleFS" menu="true" :title="language[defineLanguage].contacts" v-on:click.native="goToSection(5)" :class="{ active : this.$store.state.main.sectionsCounter === 5}" />
                <button class="btn" v-on:click="goToSection(5)">{{ language[defineLanguage].feedback }}</button>
            </div>
        </div>
        <div class="halfScreen halfScreenRight">
            <div class="info">
                <h5 class="h5Right"> {{ language[defineLanguage].contacts }}  </h5>
                <a href="mailto:hi@lab73.digital">hi@lab73.digital</a>
                <h3>+38 (044) 498-51-95</h3>
                <p>{{ language[defineLanguage].addressEst }}</p>
                <p>{{ language[defineLanguage].addressUa }}</p>
                <p>{{ language[defineLanguage].addressBl }} <sup> {{ language[defineLanguage].dueToOpen }} </sup></p>
                <button v-on:click="goToSection(5)"> {{ language[defineLanguage].contactUs }} </button>
            </div>
        </div>
        <Footer v-show="!largeScreen"/>
    </div>
</template>

<script>
    import { TweenMax } from "gsap";
    import TitleSlide from "@/components/partials/TitleSlide";
    import Footer from '@/components/partials/Footer'

    export default {
        name: 'Menu',
        data(){
          return {
            color: this.$store.state.main.largeScreen ? 'white' : '#416487',
            titleFS: this.$store.state.main.largeScreen ? '36px': '40px',
            language: {
              ru: {
                menu: 'Меню',
                we: 'Мы',
                projects: 'Проекты',
                contacts: 'Контакты',
                contactUs: 'Свяжитесь с нами',
                addressEst: 'Эстония, Таллин: ул. Сепапая 6',
                addressUa: 'Украина, Киев: ул. Ильинская',
                addressBl: 'Беларусь, Минск',
                dueToOpen: 'ожидается открытие',
                feedback: 'Обратная связь'
              },
              en: {
                menu: 'Menu',
                we: 'We',
                projects: 'Projects',
                contacts: 'Contacts',
                contactUs: 'contact us',
                addressEst: 'Estonia, Tallinn, Sepapaja 6',
                addressUa: 'Ukraine, Kyiv, Illinska 8',
                addressBl: 'Belarus, Minsk',
                dueToOpen: 'is due to open',
                feedback: 'Feedback'

              },
            },
          }
        },
        components: {
            TitleSlide, Footer
        },
        mounted() {
            TweenMax.staggerTo('.titleSlideText', 2, {y:0, delay: -1, ease: Power4.easeInOut}, 0.3);
        },
        computed: {
            defineLanguage(){
              return this.$store.getters.getLanguage;
            }
        },
        methods: {
            goToSection(counter) {
                if (this.$store.getters.menuOpenedInPortfolio) {
                    this.$store.commit('toggleMenuOpened', false);
                }
                this.$store.commit('setMainPageState', counter);
                this.$store.commit('closeMenu');
            },
        }
    };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import "src/assets/sass/main.sass"
*
    color: white
.container
    background-color: rgba(0,0,0,0.5)
    transform: translateZ(0.1px)
.menuLinks
    position: relative
    margin-bottom: 0
    font-size: 30px
    font-weight: 300
    display: flex
    justify-content: space-around
    flex-direction: column
    min-height: 100%
    padding: 35% 0
    box-sizing: border-box
.active
    -webkit-text-fill-color: transparent
    -webkit-text-stroke: 1.5px #2CD9FD
.titleSlideContainer
    cursor: pointer
h5
    font-size: 18px
    font-weight: 400
    color: #0B2B51
h3, label
    font-size: 1.17em
    /*margin-top: 40px*/
a
    text-decoration: none
    font-size: 18px
    font-weight: 300
h3
    font-size: 26px
    margin: 20px 0 30px
sup
    color: #2CD9FD
p
    font-size: 16px
    margin-bottom: 10px
h5
    position: absolute
    top: 22vh
.h5Left
    right: 0
.btn
    display: none

@media only screen and (max-width: 900px)
    .halfScreen
        width: 100%
        display: block
        &Right
            display: none
    .btn
        display: block
    .menuLinks
        padding-top: 0
    .h5Left
        right: inherit
        top: -10vh
        color: #fff
        font-size: 32px
    .container
        background: initial
</style>
