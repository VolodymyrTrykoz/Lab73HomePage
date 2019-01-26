<template>
    <div class="textSlideContainer" :style="'margin-top: ' + marginTop + '; max-width: ' + maxWidth + '; line-height: ' + lineHeight">
        <p class="textSlideText" :style="'font-size: ' + fontSize">
            {{ title }}
        </p>
    </div>
</template>

<script>
//import {TweenMax} from 'gsap';
export default {
    name: 'TextSlide',
    props: {
        title: {
        default: "Any text provided",
        type: String
        },
        marginTop: {
        default: "0px",
        type: String
            },
        maxWidth: {
        default: "unset",
        type: String
            },
        lineHeight: {
        default: "18px",
        type: String
            },
        fontSize: {
        default: "16px",
        type: String
            }},
    data() {
        return {

        }
    },
    mounted() {
        //TweenMax.to('.textSlideText', 2, {y:0, ease: Power2.easeInOut});
    }
}
</script>

<style lang="sass" scoped>
    @import "@/assets/sass/main.sass"
    p
        color: white
        font-size: 16px
        font-family: 'Roboto', sans-serif
        font-weight: 300
    .textSlideContainer
        position: relative
        min-height: 60px
        overflow: hidden
    .textSlideText
        transform: translate3d(0, 150px, 0)

</style>
