<template>
    <div id="demo-simple-slider" class="dragdealer">
        <div class="dragTitles">
            <h3 v-for="(item, index) in this.$store.state.main.sections"
                :class="{dragTitlesActive : index === currentNavIndex,
                        dragTitlesPreActive : Math.abs(index - currentNavIndex) === 1}">
                {{item.title[defineLanguage]}}
            </h3>
        </div>
        <div class="dragLine"></div>
        <div class="handle">
            <div class="handleRomb"></div>
        </div>
    </div>
</template>

<script>
import Dragdealer from 'dragdealer'

    export default {
        name: 'Bar',
        props: ['title'],
        data() {
            return {
                scrollBar: 0,
                currentNavIndex: 0,
                titles: {
                    main: {
                        ru: 'Главная',
                        en: 'Main',
                    },
                    cases: {
                      ru: 'Кейсы',
                      en: 'Cases',
                    },
                    services: {
                      ru: 'Услуги',
                      en: 'Services',
                    },
                    works: {
                      ru: 'Работы',
                      en: 'Works',
                    },
                    clients: {
                      ru: 'Клиенты',
                      en: 'Clients',
                    },
                    contacts: {
                      ru: 'Контакты',
                      en: 'Contacts',
                    }
                },
            };
        },
        components: {

        },
        computed: {
            currentCounter () {
                return this.$store.getters.currentCounter;
            },
            defineLanguage(){
              return this.$store.getters.getLanguage;
            }
        },
        watch: {
            currentCounter (newCounter, oldCounter) {
                this.scrollBar.setStep(1, newCounter + 1, false);
            }
        },
        mounted() {
            this.scrollBar = new Dragdealer('demo-simple-slider', {
                horizontal: false,
                vertical: true,
                steps: 6,
                callback: (x, y) => {
                    this.$store.commit('setMainPageState', this.scrollBar.getStep()[1] - 1);
                    this.currentNavIndex = this.scrollBar.getStep()[1] - 1;
                }
            });
        },
        methods: {

        }
    };

</script>

<style lang="sass" scoped>
.dragdealer
    position: absolute
    top: 50%
    right: 2.5vw
    transform: translate(0, -50%)
    height: 40vh
    width: 17px
    overflow: visible
    &:hover
        .dragTitles
            opacity: 1
            visibility: visible
.handle
    width: 17px
    height: 17px
    transform: rotate(45deg)
    transform-origin: 50% 50%
    position: absolute
    top: 0
    left: 0
    overflow: visible
    cursor: pointer
    &:hover
        .handleRomb
            transform: translate(-50%, -50%) rotate(45deg) scale(1.3)
    &Romb
        position: absolute
        top: 50%
        left: 50%
        width: 10px
        height: 10px
        transform: translate(-50%, -50%) rotate(45deg)
        transform-origin: 50% 50%
        border: none
        background: #00FFCE
        transition: transform 0.3s ease-in-out
.dragTitles
    position: absolute
    top: 0
    bottom: 0
    right: 100%
    display: flex
    flex-direction: column
    justify-content: space-between
    text-align: right
    padding-right: 20px
    opacity: 0
    visibility: hidden
    transition: opacity 0.4s ease-in-out, visibility 0.4s ease-in-out
    pointer-events: none
    h3
        font-weight: 300
        font-size: 16px
        transition: color 0.3s ease-in-out
        color: #0B2A49
h3.dragTitlesPreActive
    color: #2D5D84
h3.dragTitlesActive
        color: white
.dragLine
    position: absolute
    top: 0
    bottom: 0
    left: 50%
    transform: translate(-50%,0)
    background: linear-gradient(to bottom, rgba(9,28,51,0) 0%,rgba(9,28,51,1) 50%,rgba(9,28,51,0) 100%)
    width: 1px
</style>