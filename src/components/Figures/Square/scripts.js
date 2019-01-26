import {TweenMax, TimelineMax, Power2} from 'gsap'
import common from '../common.js'

export default {
    data() {
        return {
            originCorrection: 0,
            figureIsChanging: false,
            name: "square",
            path: {
                norm: `M194.9,485.1V194.9h290.2v290.2H194.9 M180.8,499.2h318.5V180.8H180.8V499.2L180.8,499.2z`,
                blured: `M187.8,492.2h304.4V187.8H187.8V492.2L187.8,492.2z`
            },
            light: {
                top: "matrix(1 0 0 1 275 61.3333)",
                bottom: "matrix(1 0 0 1 275 365.5)",
                correction: {
                    corSign: -1,
                    corY: 70,
                    corOffset: 290,
                    corYBottom: 0
                }
            }
        }
    },
    mixins: [common]
}