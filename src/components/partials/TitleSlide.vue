<template>
  <div class="titleSlideContainer">
    <h2 class="titleSlideText" :class="{titleSlideTextMenu : menu === 'true'}" :style="`font-size: ${fontSize}; color: ${color}`">
      {{ title }}
    </h2>
  </div>
</template>

<script>
  // import {TweenMax} from 'gsap';

  export default {
    name: 'TitleSlide',
    props: {
      title: {
        default: "No title provided",
        type: String
      },
      fontSize: {
        default: "36px",
        type: String
      },
      color: {
        default: "white",
        type: String
      },
      menu: {
        default: "false",
        type: String
      }
    },
    data () {
      return {}
    },
    mounted () {

    },
    methods: {
      // enter(el, done) {
      //     TweenMax.to(el, 2, {y:0, ease: Power2.easeInOut, onComplete: () => {done();}});
      // },
      // leave(el, done) {
      //     TweenMax.to(el, 2, {y:-100, autoAlpha: 0, ease: Power2.easeInOut, onComplete: () => {done();}});
      // }
    }

  }
</script>

<style lang="sass">
  .titleSlideContainer
    min-height: 60px
    overflow: hidden

  .titleSlideText
    transform: translate3d(0, 100px, 0)
    font-weight: 300
    font-family: 'Museo', sans-serif

  .titleSlideTextMenu
    transition: letter-spacing 0.4s ease-in-out
    &:hover
      letter-spacing: 2px
  @media only screen and (max-width: 900px)
    .titleSlideContainer
      min-height: 30px
</style>
