<template>
    <div class="portfolioPageContainer">
        <Works/>
        <div class="otherWorks" v-if="false">
            <div class="otherWorksItem">
                <img src="@/assets/img/covers.jpg" alt="">
                <div class="otherWorksItemCover"></div>
                <h4>Asking Alexandia</h4>
            </div>
            <div class="otherWorksItem">
                <img src="@/assets/img/covers.jpg" alt="">
                <div class="otherWorksItemCover"></div>
                <h4>Asking Alexandia</h4>
            </div>
            <div class="otherWorksItem">
                <img src="@/assets/img/covers.jpg" alt="">
                <div class="otherWorksItemCover"></div>
                <h4>Asking Alexandia</h4>
            </div>
            <div class="otherWorksItem">
                <img src="@/assets/img/covers.jpg" alt="">
                <div class="otherWorksItemCover"></div>
                <h4>Asking Alexandia</h4>
            </div>
            <div class="otherWorksItem">
                <img src="@/assets/img/covers.jpg" alt="">
                <div class="otherWorksItemCover"></div>
                <h4>Asking Alexandia</h4>
            </div>
            <div class="otherWorksItem">
                <img src="@/assets/img/covers.jpg" alt="">
                <div class="otherWorksItemCover"></div>
                <h4>Asking Alexandia</h4>
            </div>
            <div class="otherWorksItem">
                <img src="@/assets/img/covers.jpg" alt="">
                <div class="otherWorksItemCover"></div>
                <h4>Asking Alexandia</h4>
            </div>
            <div class="otherWorksItem">
                <img src="@/assets/img/covers.jpg" alt="">
                <div class="otherWorksItemCover"></div>
                <h4>Asking Alexandia</h4>
            </div>
            <div class="otherWorksItem">
                <img src="@/assets/img/covers.jpg" alt="">
                <div class="otherWorksItemCover"></div>
                <h4>Asking Alexandia</h4>
            </div>
        </div>
    </div>
</template>

<script>
    import Works from '@/components/MainSection/Info/Works/index.vue';

    export default {
        name: 'PortfolioPage',
        data() {
            return {
            };
        },
        computed: {

        },
        components: {
            Works
        },
        mounted() {
        },
        methods: {

        }
    };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
//@import "@/assets/sass/main.sass"
.portfolioPageContainer
    width: 100%
    /*height: 200vh*/
    /*overflow-y: scroll*/
.otherWorks
    margin: auto
    max-width: 40%
    display: flex
    justify-content: center
    align-items: center
    align-content: center
    flex-wrap: wrap
    height: 100vh
    img
        max-width: 30%
    &Item
        height: 28vh
        width: 10vw
        position: relative
        margin: 5px
        cursor: pointer
        h4
            position: absolute
            top: 10px
            left: 10px
            font-size: 13px
            color: white
            font-weight: 400
            font-family: Roboto
        img
            max-width: unset
            width: 100%
            height: 100%
            filter: grayscale(100%)
            transition: filter 0.3s ease-in-out
        &Cover
            position: absolute
            top: 0
            left: 0
            width: 100%
            height: 100%
            background: #343e5a
            opacity: 0.7
            transition: opacity 0.3s ease-in-out
        &:hover
            .otherWorksItemCover
                opacity: 0
            img
                filter: grayscale(0%)
        &:nth-child(3n + 2)
            transform: translateY(5vh)


.container
    position: static!important
</style>