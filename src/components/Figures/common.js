import {TweenMax, TimelineMax, Power2} from 'gsap'
export default {
    name: 'figures',
    data() {
        return {
            originCorrection: 0
            //figureIsChanging: false
        }
    },
    mounted() {
        window.addEventListener("mousemove", this.mouseListener);
    },
    computed: {
        currentComponent () {
            return this.$store.getters.mainCurrentComponent;
        }
    },
    watch: {
        currentComponent (newComponent, oldComponent) {
            if (newComponent === 'MenuPage') {
                this.transformMenuIn();
            } else if (oldComponent === 'MenuPage') {
                this.transformMenuOut();
            }
        }
    },
    beforeDestroy() {
        window.removeEventListener("mousemove", this.mouseListener);
    },
    methods: {
        transformMenuIn() {
            if (this.name !== 'Ring') {
                this.rotateShape(0,2);
            }
            this.figureIsChanging = true;
            TweenMax.to('#figuresSVG', 0.7, {scale: 0.5, ease: "Power2.easeOut",
                onComplete: () => this.figureIsChanging = false});
            TweenMax.to('.light1,  .light2', .7, {opacity: 0, ease: "Power2.easeOut"});
            TweenMax.to('.blurMask, .normalMask', 0.7, {x: -340, svgOrigin:"340 340", ease: "Power2.easeOut", onComplete: () => {
                    this.$store.commit('figureAnimated');
                }});
        },
        transformMenuOut() {
            if (this.name !== 'Ring') {
                this.rotateShape(0,2);
            }
            this.figureIsChanging = true;
            TweenMax.to('#figuresSVG', 0.7, {scale: 1, ease: "Power2.easeOut",
                onComplete: () => {
                    this.figureIsChanging = false;
                    //this.$store.commit('figureAnimated');
                }
            });
            TweenMax.to('.light1,  .light2', .5, {opacity: 1, ease: "Power2.easeOut"});
            if (this.currentComponent !== 'AboutUs2') {
                TweenMax.to('.blurMask, .normalMask', 0.7, {x: 0, svgOrigin:"340 340", ease: "Power2.easeOut"});
            } else {
                TweenMax.to('.blurMask, .normalMask', 0.7, {x: 100, svgOrigin:"340 340", ease: "Power2.easeOut"});
                this.rotateShape(0,2);
            }
        },
        rotateShape(deg, duration = 1, ease = "Power2.easeOut") {
            const correction = this.light.correction;
            TweenMax.to('.light1', duration, {y: correction.corSign*Math.abs(deg)+correction.corY, ease: ease});
            TweenMax.to('.light2', duration, {y: correction.corOffset-correction.corSign*(Math.abs(deg)+correction.corY + Math.abs(deg)*correction.corYBottom), ease: ease});
            TweenMax.to('.blurMask, .normalMask', duration, {rotation: -deg, svgOrigin:"340 340", ease: ease});
            TweenMax.to('.normalShape, .blurShape', duration, {rotation: deg, svgOrigin: 340 + this.originCorrection +" 340", ease: ease});
            if (this.name === 'Romb') {
                TweenMax.to('#img-group-norm, #img-group-blur', duration, {rotation: deg, svgOrigin: 340 + this.originCorrection +" 340", ease: ease});
            }
        },
        mouseListener(event) {
            if (this.figureIsChanging || this.name === 'Ring' || this.$store.state.main.figureIsAnimating) {
                return
            }
            const
                windowCenterX = window.innerWidth / 2,
                windowCenterY = window.innerHeight / 2,
                x = event.clientX - windowCenterX,
                y = event.clientY - windowCenterY,
                xsys = x / windowCenterX,
                ysys = -y / windowCenterY;
            if((Math.abs(xsys) < (ysys)) && (ysys > 0)){ //top
                this.rotateShape(60 * xsys);
            } else if((Math.abs(xsys) < Math.abs(ysys)) && (ysys < 0)) { //bottom
                this.rotateShape(-60 * xsys);
            //} else if((Math.abs(xsys) > Math.abs(ysys)) && (xsys > 0)) { //right
                //this.rotateShape(0,2);
            //} else if((Math.abs(xsys) > Math.abs(ysys)) && (xsys < 0)) { //left
                //this.rotateShape(0,2);
            }
        }
    }
}