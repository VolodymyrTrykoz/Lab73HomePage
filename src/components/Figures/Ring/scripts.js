import {TweenMax, TimelineMax, Power2} from 'gsap'
import common from '../common.js'

export default {
    data() {
        return {
            originCorrection: 0,
            figureIsChanging: false,
            name: "Ring",
            path: {
                norm: `M340,194.9L340,194.9c80.1,0,145.1,65,145.1,145.1l0,0c0,80.1-65,145.1-145.1,145.1l0,0
									c-80.1,0-145.1-65-145.1-145.1l0,0C194.9,259.9,259.9,194.9,340,194.9z M499.2,340L499.2,340c0-87.9-71.3-159.2-159.2-159.2l0,0
									c-87.9,0-159.2,71.3-159.2,159.2l0,0c0,87.9,71.3,159.2,159.2,159.2l0,0C427.9,499.2,499.2,427.9,499.2,340z`,
                blured: `M492.2,340L492.2,340c0-84.1-68.1-152.2-152.2-152.2l0,0c-84.1,0-152.2,68.1-152.2,152.2l0,0
									c0,84.1,68.1,152.2,152.2,152.2l0,0C424.1,492.2,492.2,424.1,492.2,340z`
            },
            light: {
                top: "matrix(1 0 0 1 275 61)",
                bottom: "matrix(1 0 0 1 275 366)",
                correction: {
                    corSign: 0,
                    corY: 0,
                    corOffset: 0,
                    corYBottom: 0
                }
            }
        }
    },
    mixins: [common]
}