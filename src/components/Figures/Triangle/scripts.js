import {TweenMax, TimelineMax, Power2} from 'gsap'
import common from '../common.js'

export default {
    data() {
        return {
            originCorrection: 0,
            figureIsChanging: false,
            name: "triangle",
            path: {
                norm: `M496.3,496.5H183.7l156.3-313L496.3,496.5z M207.9,481.5h264.1L340,217L207.9,481.5z`,
                blured: `M196,489h288L340,200.5L196,489z`
            },
            light: {
                top: "matrix(1 0 0 1 275 76)",
                bottom: "matrix(1 0 0 1 275 363)",
                correction: {
                    corSign: 1,
                    corY: 100,
                    corOffset: 460,
                    corYBottom: -1.8
                }
            }
        }
    },
    mixins: [common]
}