<template>
    <svg version="1.1" class="viagraSvg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    width="1920px" height="974px" viewBox="0 0 1920 974" xml:space="preserve">
    <g id="viagra-no-blur">
      <defs>
        <rect id="Viagra_SVGID_1_" transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 960 974)" width="1260" height="974"/>
      </defs>
      <clipPath id="Viagra_SVGID_2_">
        <use xlink:href="#Viagra_SVGID_1_"/>
      </clipPath>
      <g clip-path="url(#Viagra_SVGID_2_)">
        <image class="normToMove" style="overflow:visible;" width="1130" height="814" :xlink:href="getNormImage"  transform="matrix(1 0 0 1 80 80)">
        </image>
      </g>
    </g>
    <g id="viagra-blur">
      <defs>
        <rect id="Viagra_SVGID_3_" x="960" width="1260" height="974"/>
      </defs>
      <clipPath id="Viagra_SVGID_4_">
        <use xlink:href="#Viagra_SVGID_3_"/>
      </clipPath>
      <g clip-path="url(#Viagra_SVGID_4_)">
        <image  class="blurToMove" style="overflow:visible;" width="1203" height="886" :xlink:href="getBluredImage"  transform="matrix(1 0 0 1 43 44)">
        </image>
      </g>
    </g>
  </svg>
</template>

<script>

    export default {
        name: 'WorksSVGTemplate',
        props: ['image'],
        computed: {
            getNormImage() {
                return require('@/assets/img/works/' + this.image +'.jpg')
            },
            getBluredImage() {
                return require('@/assets/img/works/' + this.image +'-blured.png')
            }
        },
        components: {
        },
        mounted() {

        },
        methods: {

        }
    };

</script>

<style lang="sass" scoped>
.imageToBlur
    width: 100%
    height: auto
.viagraSvg
    height: 96vh
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    /*overflow: hidden*/
    max-width: 100%
.normToMove, .blurToMove
    will-change: transform
</style>
