<template>
    <svg id="svgWordsContainer_" class="svgWordsContainer" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
         y="0px" viewBox="0 0 334.3 73.3" style="enable-background:new 0 0 449 242.8; overflow: visible" xml:space="preserve">
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
            <linearGradient id="wordStrokeGrad_" gradientUnits="userSpaceOnUse" x1="2.8032" y1="214.4086" x2="245.9722" y2="214.4086">
                <stop  offset="0" style="stop-color:#00D3FF"/>
                <stop  offset="0.9949" style="stop-color:#00FFCE"/>
            </linearGradient>
                <g v-for="(word, index) in title">
                    <linearGradient :id="'wordGradFilled' + index" class="linearGradientFilled" gradientUnits="userSpaceOnUse" x1="2.8032" y1="214.4086" x2="245.9722" y2="214.4086">
                    <stop  offset="0" style="stop-opacity: 0; stop-color:#00D3FF"/>
                    <stop  offset="0.9949" style="stop-opacity: 0; stop-color:#00FFCE"/>
                    </linearGradient>
                    <path class="svgWord svgWordFilled" :d="word.text" :fill="'url(#wordGradFilled' + index +')'"></path>
                </g>
            </svg>
</template>

<script>

    export default {
        name: 'TitleSvgFilled',
        props: ['title','viewBox'],
        data() {
            return {

            };
        },
        mounted() {

        },
        methods: {

        }
    };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
    .svgWordsContainer
        width: 300px
    .svgWord
        stroke-width: 1.5
        stroke-miterlimit: 10
        &Filled
            stroke: url(#wordStrokeGrad_)
</style>