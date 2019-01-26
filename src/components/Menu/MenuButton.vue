<template>
    <div class="menu" :class="{menuActive : this.$store.state.main.current.component === 'MenuPage'}" v-on:click="menuClick" ref="menuToggler">
        <div class="menuLine menuLineLeft"></div>
        <div class="menuLine menuLineCenter"></div>
        <div class="menuLine menuLineRight"></div>
    </div>
</template>

<script>
    export default {
        name: 'Menu',
        methods: {
            menuClick() {
                if (this.$store.state.main.figureIsAnimating) {
                    return
                } else if (this.$store.getters.mainCurrentComponent === 'MenuPage') {
                    if (this.$store.getters.menuOpenedInPortfolio) {
                        console.log(this.$store.getters.getPage);
                        this.$router.go(-1);
                        this.$store.commit('toggleMenuOpened', false);
                    }
                    //this.$store.commit('figureAnimating');
                    this.$store.commit('changeFade', 'fade');
                    this.$store.commit('closeMenu');
                } else {
                    if (this.$store.getters.mainCurrentComponent !== 'Works') {
                        this.$store.commit('figureAnimating');
                    }
                    if (this.$store.getters.getPage === 'Portfolio') {
                        this.$store.commit('toggleMenuOpened', true);
                        this.$router.push('/');
                        this.$store.commit('figureAnimated');
                    }
                    this.$store.commit('changeFade', 'fade');
                    this.$store.commit('openMenu');
                }
            }
        }
    };

</script>

<style lang="sass" scoped>
.menu
    width: 26px
    height: 50px
    position: absolute
    top: 0
    left: 50%
    transform: translate3d(-50%, 0, 0)
    background-color: transparent
    cursor: pointer
    &Line
        //border-radius: 1px
        position: absolute
        bottom: 0
        width: 1px
        height: 25px
        background-color: #00FFCE
        transition: transform 0.4s ease-in-out
        transform-origin: 50% 50%
        &Center
            height: 50px
            left: 50%
            transform: translate3d(-1px, 0, 0)
        &Left
            left: 0
            will-change: transform
            transform: translate3d(0, 0, 0)
        &Right
            right: 0
            will-change: transform
            transform: translate3d(0, 0, 0)
    &:hover
        .menuLineLeft
            transform: translate3d(4px, 0, 0)
        .menuLineRight
            transform: translate3d(-4px, 0, 0)
    &Active
        .menuLineLeft
            transform: translate3d(12.5px, 0, 0) rotate(-225deg)
        .menuLineCenter
            transform: translate3d(0, -50px, 0)
        .menuLineRight
            transform: translate3d(-12.5px, 0, 0) rotate(225deg)
        &:hover
            .menuLineLeft
                transform: translate3d(12.5px, 0, 0) rotate(-225deg)
            .menuLineRight
                transform: translate3d(-12.5px, 0, 0) rotate(225deg)

@media only screen and (max-width: 900px)
    .menu
        height: 25px
        top: 20px






</style>
