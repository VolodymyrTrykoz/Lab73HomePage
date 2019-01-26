<template>
    <div class="container " :class="{flex: largeScreen}">
        <h5>LAB<sup>73</sup></h5>
        <div class="halfScreen halfScreenLeft">
            <div class="halfScreenLeftContainer">
                <TitleSlide :title="language[defineLanguage].title"  :fontSize= "titleFS"/>
                <TextSlide class="" marginTop="20px" maxWidth="unset" :title="language[defineLanguage].description"/>
                <form @submit.prevent="submit">
                    <div class="formGroup">
                        <input v-model="InputName" id="InputName" name="name" type="text" formtarget="blank" required autocomplete="off">
                        <label for="InputName">{{language[defineLanguage].clientName}}</label>
                    </div>
                    <div class="formGroup">
                        <input v-model="InputMail" id="InputEmail" name="email" type="email" formtarget="blank" required autocomplete="off">
                        <label for="InputEmail">{{language[defineLanguage].clientEmail}}</label>
                    </div>
                    <button type="submit">{{language[defineLanguage].send}}</button>
                </form>
            </div>
        </div>
        <div class="halfScreen halfScreenRight">
            <div class="posRelative">
                <a href="mailto:hi@lab73.digital">hi@lab73.digital</a>
                <h3>+38 (044) 498-51-95</h3>
                <p>{{ language[defineLanguage].addressEst }}</p>
                <p>{{ language[defineLanguage].addressUa }}</p>
                <p>{{ language[defineLanguage].addressBl }} <sup> {{ language[defineLanguage].dueToOpen }} </sup></p>
            </div>
        </div>
    </div>
</template>

<script>
    import {TweenMax, TimelineMax} from 'gsap';
    import TitleSlide from '@/components/partials/TitleSlide.vue';
    import TextSlide from '@/components/partials/TextSlide.vue';
    import axios from 'axios';

    export default {
      name: 'Contacts',
      data () {
        return {
          InputName: '',
          InputMail: '',
          largeScreen: this.$store.state.main.largeScreen,
          titleFS: this.$store.state.main.largeScreen ? '48px' : '30px',
          language: {
              ru: {
                  title: 'Время действовать!',
                  description: 'Свяжитесь с нами, чтобы вывести digital-присутствие своего бренда на новый уровень эффективности',
                  clientName: 'Ваше имя',
                  clientEmail: 'Ваш e-mail',
                  send: 'Отправить',
                  addressEst: 'Эстония, Таллин: ул. Сепапая 6',
                  addressUa: 'Украина, Киев: ул. Ильинская',
                  addressBl: 'Беларусь, Минск',
              },
              en: {
                  title: `It's time to act!`,
                  description: 'Contact us to bring a digital presence of your brand to a new level of efficiency',
                  clientName: 'Your name',
                  clientEmail: 'Your e-mail',
                  send: 'Send e-mail',
                  addressEst: 'Estonia, Tallinn, Sepapaja 6',
                  addressUa: 'Ukraine, Kyiv, Illinska 8',
                  addressBl: 'Belarus, Minsk',
                  dueToOpen: 'is due to open',
              },
          },
        };
      },
      components: {
        TitleSlide, TextSlide
      },
      mounted () {
          if(this.$store.state.main.largeScreen){
              new TimelineMax()
                .to('.titleSlideText', 1, {y: 0, ease: Power4.easeInOut}, 0)
                .to('.textSlideText', 1, {y: 0, ease: Power4.easeInOut}, 0.5)
                .from('form', 1, {opacity: 0, x: -50, ease: Power4.easeInOut}, 1)
                .from('.halfScreenRight', 1, {opacity: 0, x: 50, ease: Power4.easeInOut}, 1.5)
                .from('h5', 1, {opacity: 0, y: 50, ease: Power4.easeInOut}, 2)
          }
          else {
              new TimelineMax()
                .set('.titleSlideText', {y: 0})
                .set('.textSlideText',  {y: 0})

          }

      },
      computed: {
        defineLanguage(){
          return this.$store.getters.getLanguage;
        }
      },
      methods: {
        submit () {
          axios.post('https://jsonplaceholder.typicode.com/todos/1',
            {
              InputName: this.InputName,
              InputMail: this.InputMail
            })
            .then(res => {
              this.InputName = '',
              this.InputMail = '',
              console.log(res);
            })
            .catch(err => {
              console.log(err)
            })
        },
      }
    }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
    @import "@/assets/sass/main.sass"
    *
        color: white
    input, input:before, input:after
        -webkit-user-select: initial
        user-select: initial

    form
        display: flex
        flex-direction: column
        align-items: stretch
        text-align: left
        font-size: 18px
        margin-top: 90px
    input
        background-color: transparent
        border: none
        color: #fff
        padding: 10px 0
        outline: none
        transition: background-position 0.4s ease-in-out
        background-image: linear-gradient(to right, rgba(0, 211, 255, 1) 0%, rgba(0, 255, 206, 1) 50%, rgba(9, 28, 51, 1) 49%, rgba(9, 28, 51, 0) 100%)
        background-size: 210% 3px
        background-position: 100% 103%
        background-repeat: no-repeat
        font-size: 18px
        width: 100%
        &:focus, &:valid, &.validated
            background-position: 0% 100%
            & ~ label
                font-size: 14px
                transform: translateY(-100%)
        &.invalidated
            background-position: 100% 103%
            & ~ label
                font-size: 18px
                transform: translateY(0)
    label
        transition: transform 0.4s ease-in-out, font-size 0.4s ease-in-out
        position: absolute
        top: 0
        left: 0
    a
        text-decoration: none
        font-size: 18px
    h3
        font-size: 26px
        margin: 25px 0 40px
    h5
        position: absolute
        top: 65%
        left: 50%
        transform: translate(-50%,-50%)
        color: white
        font-size: 18px
        font-weight: 700
        letter-spacing: 5px
        sup
            color: #0CF3D0
            font-size: 14px
    table
        font-size: 18px
        font-weight: 300
    td
        min-width: 160px
    sup
        color: #00ECE3
    p
        font-size: 16px
        margin-bottom: 10px
    .halfScreenLeft
        padding-right: 0
    .halfScreenLeftContainer
        max-width: 450px
    .formGroup
        position: relative
        max-width: 80%
        margin-bottom: 40px

    @media only screen and (max-width: 900px)
        h5
            display: none
        form
            margin-top: 25px
            font-size: 14px
        button
            font-size: 16px
        .formGroup
            margin-bottom: 25px
        .halfScreen
            display: block
            width: 100%
            margin-top: 10vw
            height: initial
            &Left
                padding-top: 0
                margin-top: 25vw
        p
            font-size: 15px
            margin-bottom: 3px
            &:last-child
                position: relative
                transform: translateY(-3px)
        .posRelative
            a, h3
                font-size: 18px
                margin: 5px 0 5px
        .container
            background: url("/static/img/bg-section-5.jpg")  no-repeat 50%
            background-size: cover


</style>
