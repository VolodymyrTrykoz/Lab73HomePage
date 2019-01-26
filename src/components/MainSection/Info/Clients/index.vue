<template>
    <div class="container clients" >
        <div class="centerLeft">
            <TitleSlide :title="language[defineLanguage].title" :fontSize="titleFS"/>
            <TextSlide :fontSize="textFz" :marginTop="textMarginTop" maxWidth="470px" :title="language[defineLanguage].description"/>
        </div>
        <div class="clientsContainer">
            <div v-for="client in clients" class="clientsItem">
                <img :src="client.image" :alt="client.name">
            </div>
        </div>

        <slick ref="slick" :options="slickOptions" v-show="!largeScreen">
            <div class="page">
                <div v-for="client in getFirstHalfArray()" class="page__item">
                    <img :src="client.image" :alt="client.name">
                </div>
            </div>
            <div class="page">
                <div v-for="client in getSecondHalfArray()" class="page__item">
                    <img :src="client.image" :alt="client.name">
                </div>
            </div>
        </slick>

    </div>
</template>

<script>
    import {TweenMax, TimelineMax} from 'gsap';
    import TitleSlide from '@/components/partials/TitleSlide.vue';
    import TextSlide from '@/components/partials/TextSlide.vue';
    import Slick from 'vue-slick';



    export default {
        name: 'Clients',
        data() {
            return {
                textMarginTop: this.$store.state.main.largeScreen ? '16px': '20px',
                textFz: this.$store.state.main.largeScreen ? '16px': '14px',
                titleFS: this.$store.state.main.largeScreen ? '36px': '32px',
                largeScreen: this.$store.state.main.largeScreen,
                slickOptions: {
                    infinite: false,
                    dots: true,
                    draggable: true,
                    swipe: true
                },
                language: {
                    ru: {
                        title: 'Наши клиенты',
                        description: 'Эти компании ценят наше знание отрасли, высокое качество работы и глубокое понимание проблем потребителей.'
                    },
                    en: {
                        title: 'Our clients',
                          description: 'These companies value our knowledge of the industry, high quality of out work and a deep understanding of consumers` issues.'
                    },
                },
                clients: [
                    {
                        name: 'pfizer',
                        image: require('@/assets/img/clients/pfizer.png')
                    },
                    {
                        name: 'berlin',
                        image: require('@/assets/img/clients/berlin.png')
                    },
                    {
                        name: 'teva',
                        image: require('@/assets/img/clients/teva.png')
                    },
                    {
                        name: 'gedeon',
                        image: require('@/assets/img/clients/gedeon.png')
                    },
                    {
                        name: 'sparco',
                        image: require('@/assets/img/clients/sparco.png')
                    },
                    {
                        name: 'mili',
                        image: require('@/assets/img/clients/mili.png')
                    },
                    {
                        name: 'vishpa',
                        image: require('@/assets/img/clients/vishpa.png')
                    },
                    {
                        name: 'stada',
                        image: require('@/assets/img/clients/stada.png')
                    },
                    {
                        name: 'ecofarm',
                        image: require('@/assets/img/clients/ecofarm.png')
                    },
                    {
                        name: 'parimatch',
                        image: require('@/assets/img/clients/parimatch.png')
                    },
                    {
                        name: 'leon',
                        image: require('@/assets/img/clients/leon.png')
                    },
                    {
                        name: 'bazabet',
                        image: require('@/assets/img/clients/bazabet.png')
                    }
                ]
            };
        },
        components: {
            TitleSlide, TextSlide, Slick
        },
        beforeDestroy() {
          this.$refs.slick.destroy()
        },
        mounted() {
            if(this.$store.state.main.largeScreen){
                new TimelineMax()
                    .to('.titleSlideText', 1, {y:0, ease: Power4.easeInOut})
                    .to('.textSlideText', 1, {y:0, ease: Power4.easeInOut}, 0.5)
                    .staggerFrom('.clientsItem', 0.5, {delay: 0, autoAlpha: 0, x: -50, ease: Power2.easeInOut}, 0.1);
            }
            else {
                new TimelineMax()
                    .set('.titleSlideText', {y:0})
                    .set('.textSlideText', {y:0})
                    .set('.clientsItem', {autoAlpha: 0, x: 0});
            }

            this.$nextTick(function(){
                this.$refs.slick.reSlick();
            });
        },
        computed: {
            defineLanguage(){
                return this.$store.getters.getLanguage;
            }
        },
        methods: {
            next() {
                this.$refs.slick.next();
            },

            prev() {
                this.$refs.slick.prev();
            },


            getFirstHalfArray(){
                return this.clients.slice(0, this.clients.length / 2);
            },
            getSecondHalfArray(){
                return this.clients.slice(this.clients.length / 2, this.clients.length);
            },


        }
    };

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import "@/assets/sass/main.sass"
.container
    text-align: left
    display: flex
    justify-content: center
    flex-direction: column

.clientsContainer
    display: flex
    flex-wrap: wrap
    justify-content: space-around
    align-items: center
    align-content: space-around
    min-height: 45vh
    width: 100vw
    margin-top: 5vh
.clientsItem
    flex: 1 1 25vw
    text-align: center
img
    max-height: 60px
    display: inline-block
.textSlideContainer
    text-align: right
.centerLeft
    width: 50%
    display: flex
    align-items: flex-end
    flex-direction: column


@media only screen and (max-width: 900px)
    .container
        background: url("/static/img/bg-section-4.jpg")  no-repeat 50%
        background-size: cover
        justify-content: flex-start
    .centerLeft
        display: block
        width: 100%
        margin-top: 12vh
    .textSlideContainer
        text-align: left
    .clientsContainer
        display: none
    .slick
        &-slider
            display: block
    .page
        display: flex !important
        flex-wrap: wrap !important
        justify-content: space-around !important
        align-items: center !important
        align-content: space-around !important
        margin: -3vh auto 0 !important
        &__item
            margin: 5px
    img
        max-height: 12vw



</style>