import {TweenMax, TimelineMax} from 'gsap'

export default {
    name: 'HelloWorld',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    mounted() {
        const tl1 = new TimelineMax({delay:1, repeat:-1, yoyo:true});
        tl1.to('#figure1', 5, {rotation: 75*Math.random(), x: 150*Math.random(), y: 150*Math.random(), z: 0, ease:Linear.easeNone})
            .to('#figure1', 5, {rotation: 45*Math.random(), x: 150*Math.random(), y: 150*Math.random(), z:0, ease:Linear.easeNone})
            .to('#figure1', 5, {rotation: -25*Math.random(), x: -250*Math.random(), y: -50*Math.random(), z:0, ease:Linear.easeNone})
            .to('#figure1', 5, {rotation: 75*Math.random(), x: 150*Math.random(), y: 150*Math.random(), z: 0, ease:Linear.easeNone});
        const tl2 = new TimelineMax({delay:1, repeat:-1, yoyo:true});
        tl2.to('#figure2', 5, {rotation: -35*Math.random(), x: 50*Math.random(), y: 150*Math.random(), z: 0, ease:Linear.easeNone})
            .to('#figure2', 5, {rotation: 15*Math.random(), x: -50*Math.random(), y: 150*Math.random(), z:0, ease:Linear.easeNone})
            .to('#figure2', 5, {rotation: 25*Math.random(), x: 350*Math.random(), y: -50*Math.random(), z:0, ease:Linear.easeNone})
            .to('#figure2', 5, {rotation: -35*Math.random(), x: 50*Math.random(), y: 150*Math.random(), z: 0, ease:Linear.easeNone});
        const tl3 = new TimelineMax({delay:1, repeat:-1, yoyo:true});
        tl3.to('#figure3', 5, {x: 150*Math.random(), y: 150*Math.random(), z: 0, ease:Linear.easeNone})
            .to('#figure3', 5, {x: -250*Math.random(), y: 150*Math.random(), z:0, ease:Linear.easeNone})
            .to('#figure3', 5, {x: 150*Math.random(), y: -50*Math.random(), z:0, ease:Linear.easeNone})
            .to('#figure3', 5, {x: 150*Math.random(), y: 150*Math.random(), z: 0, ease:Linear.easeNone});
        const tl4 = new TimelineMax({delay:1, repeat:-1, yoyo:true});
        tl4.to('#figure4', 5, {x: 150*Math.random(), y: -150*Math.random(), z: 0, ease:Linear.easeNone})
            .to('#figure4', 5, {x: 50*Math.random(), y: 350*Math.random(), z:0, ease:Linear.easeNone})
            .to('#figure4', 5, {x: 150*Math.random(), y: 150*Math.random(), z:0, ease:Linear.easeNone})
            .to('#figure4', 5, {x: 150*Math.random(), y: -150*Math.random(), z: 0, ease:Linear.easeNone});
        const tl5 = new TimelineMax({delay:1, repeat:-1, yoyo:true});
        tl5.to('#figure5', 5, {x: 150*Math.random(), y: 150*Math.random(), z: 0, ease:Linear.easeNone})
            .to('#figure5', 5, {x: 150*Math.random(), y: 350*Math.random(), z:0, ease:Linear.easeNone})
            .to('#figure5', 5, {x: -250*Math.random(), y: -50*Math.random(), z:0, ease:Linear.easeNone})
            .to('#figure5', 5, {x: 150*Math.random(), y: 150*Math.random(), z: 0, ease:Linear.easeNone});
    }
}