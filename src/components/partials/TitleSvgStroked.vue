<template>
    <svg id="svgWordsContainer" class="svgWordsContainer" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
         y="0px" :viewBox="viewBox" style="enable-background:new 0 0 449 242.8; overflow: visible" xml:space="preserve">
            <defs>
                <filter id="burShadow" x="-20%" y="-20%" width="200%" height="200%" style="overflow: visible">
                  <feOffset result="offOut" in="SourceGraphic" dx="0" dy="0" />
                  <feGaussianBlur result="blurOut" in="offOut" stdDeviation="6" />
                  <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                    <feComponentTransfer>
                        <feFuncA type="linear" slope="0.6"/>
                    </feComponentTransfer>
                     <feMerge>
                        <feMergeNode/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                </filter>
              </defs>
            <linearGradient id="wordStrokeGrad" gradientUnits="userSpaceOnUse" x1="2.8032" y1="214.4086" x2="245.9722" y2="214.4086">
                <stop  offset="0" style="stop-color:#00D3FF"></stop>
                <stop  offset="0.9949" style="stop-color:#00FFCE"></stop>
            </linearGradient>
                <g class="wordGroup" v-for="(word, index) in title" :key="word.index">
                    <linearGradient :id="'fillForBlink' + index" gradientUnits="userSpaceOnUse" x1="2.8032" y1="214.4086" x2="245.9722" y2="214.4086">
                        <stop  offset="0" style="stop-opacity: 0; stop-color:#00D3FF"></stop>
                        <stop  offset="0.9949" style="stop-opacity: 0; stop-color:#00FFCE"></stop>
                    </linearGradient>
                    <path class="svgWord svgWordStroked" :d="word.text" :fill="'url(#fillForBlink' + index +')'"></path>
                </g>
            </svg>
</template>

<script>
    import $ from "jquery";
    import {TweenMax, TimelineMax} from 'gsap';


    export default {
        name: 'TitleSvgStroked',
        props: ['title','viewBox'],
        data() {
            return {

            };
        },
        mounted() {
            setTimeout(() => {
                this.hoverListener()
            }, 4000);
        },
        methods: {
            hoverListener() {
                $('.wordGroup').on("mouseenter", function () {
                    const thisStops = ($(this)).find('linearGradient stop');
                    if(TweenMax.isTweening('.svgWordStroked')) {
                        //return
                    }
                    const blinkText = new TimelineMax();
                    blinkText.to(thisStops, 0.5, {
                        stopOpacity: 1,
                        ease: RoughEase.ease.config({
                            template: Power4.easeOut,
                            strength: 14,
                            points: 100,
                            taper: 'none',
                            randomize: true,
                            clamp: false
                        }),
                    });
                }).on("mouseout", function () {
                    const thisStops = ($(this)).find('linearGradient stop');
                    TweenMax.to(thisStops, 0.2, {
                        stopOpacity: 0,
                        delay: 0.2
                    });
                });
            }
        }
    };

</script>

<style lang="sass" scoped>
    .wordGroup
        pointer-events: bounding-box
    .svgWordsContainer
        width: 370px
    .svgWord
        stroke-width: 1.5
        stroke-miterlimit: 10
        //fill: none
        &Stroked
            stroke: url(#wordStrokeGrad)
            &:hover
                filter: url(#burShadow)

    @media only screen and (max-width: 900px)
      .svgWordsContainer
          width: 330px
</style>
