import {TweenMax, TimelineMax, Power2} from 'gsap'
import common from '../common.js'

export default {
    data() {
        return {
            originCorrection: 0,
            figureIsChanging: false,
            name: "Romb",
            path: {
                norm: `M545.2,340L340,545.2L134.8,340L340,134.8L545.2,340 M565.2,340L340,114.8L114.8,340L340,565.2
            L565.2,340L565.2,340z`,
                blured: `M555.5,340L340,124.6L124.6,340L340,555.5L555.5,340L555.5,340z`
            },
            light: {
                top: "matrix(1 0 0 1 275 0)",
                bottom: "matrix(1 0 0 1 275 427)",
                correction: {
                    corSign: 1,
                    corY: 10,
                    corOffset: 427,
                    corYBottom: 0
                }
            }
        }
    },
    mixins: [common],
    methods: {
        translateRombForward() {
            this.rotateShape(0,2);
            this.originCorrection = -100;
            TweenMax.to('.light1', 0.7, {y: 100, ease: Power2.easeOut});
            TweenMax.to('.light2', 0.7, {y: 320, ease: Power2.easeOut});
            TweenMax.to('#img-group-norm, #img-group-blur', 0.7, {x: -100});
            TweenMax.to('.blurMask, .normalMask', 0.7, {x: 100});
            TweenMax.to('.normalShape, .blurShape', 0.7, {x: -100, onComplete: () => {
                    this.figureIsChanging = false;
                    //this.light.top = "matrix(1 0 0 1 275 101)";
                    this.light.correction.corOffset = 230;
                    this.light.correction.corY = 100;
                    this.light.correction.corSign = -1;
                }});
            TweenMax.to('#figuresSVG', 0.7, {scale: 1.2});
            TweenMax.to('.figure-background-img', 1, {autoAlpha: 1});
        },
        translateRombBack() {
            this.rotateShape(0,2);
            this.originCorrection = 0;
            //this.figureIsChanging = true;
            //this.light.top = "matrix(1 0 0 1 275 101)";
            const correction = this.light.correction;
            const deg = 0;
            this.light.correction.corOffset = 427;
            this.light.correction.corY = 10;
            this.light.correction.corSign = 1;
            TweenMax.to('.light1', 1, {y: correction.corSign*Math.abs(deg)+correction.corY});
            TweenMax.to('.light2', 1, {y: correction.corOffset-correction.corSign*(Math.abs(deg)+correction.corY + Math.abs(deg)*correction.corYBottom)});
            TweenMax.to('#img-group-norm, #img-group-blur', 0.7, {x: -0});
            TweenMax.to('.blurMask, .normalMask', 0.7, {x: 0});
            TweenMax.to('.normalShape, .blurShape', 0.7, {x: -0, onComplete: () => {
                    this.figureIsChanging = false;
                }});
            TweenMax.to('#figuresSVG', 0.7, {scale: 1});
            TweenMax.to('.figure-background-img', 1, {autoAlpha: 0, onComplete: () => {this.$store.commit('figureAnimated');}});
        },
    }
}