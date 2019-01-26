<template>
    <div class="mobileOld">
        <div class="section-shadow"></div>
        <section>
            <div class="shine shine-1"></div>
            <div class="shine shine-2"></div>
            <div class="shine shine-3"></div>
            <img v-bind:src="language === 'ru' ? logoRu : logoEn" alt="" class="logo">
            <div class="contacts">
                <div class="contacts__title">
                    <img v-bind:src="language === 'ru' ? contactsTitle : contactsTitleEn" alt="">
                    <hr>
                </div>
                <div class="clr"></div>
                <div class="phone contacts__block"><img src="./img/icons/icon-1.svg" alt=""><span>Номер телефона —</span><a href="tel:+380444985195">+38 (044) 498-51-95</a></div>
                <div class="portfolio contacts__block"><img src="./img/icons/behance-ic.svg" alt=""><span>{{language === 'ru' ? 'портфолио' : 'portfolio' }} —</span><a href="https://www.behance.net/lab73digital">behance.net/lab73digital</a></div>
                <div class="email contacts__block"><img src="./img/icons/icon-2.svg" alt=""><span>E-mail —</span><a href="mailto:hi@lab73.digital">hi@lab73.digital</a></div>
            </div>
            <div class="lang-switcher">
                <div class="en-lang" v-bind:class="{ langOpacity : language === 'ru' }"><a href="/./" v-on:click.prevent="setEn">EN</a></div>
                <div class="ru-lang" v-bind:class="{ langOpacity : language === 'en' }"><a href="/" v-on:click.prevent="setRu">RU</a></div>
            </div>
        </section>
    </div>
</template>

<script>
    import logoRu from './img/logo.svg'
    import logoEn from './img/logo-en.svg'
    import contactsTitle from './img/contacts-title.svg'
    import contactsTitleEn from './img/contacts-title-en.svg'
    export default {
        data() {
            return {
                language: 'ru',
                logoRu : logoRu,
                logoEn : logoEn,
                contactsTitle : contactsTitle,
                contactsTitleEn : contactsTitleEn
            }
        },
        computed: {

        },
        methods: {
            setRu() {
                this.language = 'ru'
            },
            setEn() {
                this.language = 'en'
            }
        }
    }
</script>

<style scoped>
    @font-face {
        font-family: "Gotham Pro";
        src: url("./fonts/GothamPro-Light.eot");
        src: url("./fonts/GothamPro-Light.eot?#iefix") format("embedded-opentype"), url("./fonts/GothamPro-Light.woff2") format("woff2"), url("./fonts/GothamPro-Light.ttf") format("truetype");
        font-weight: 300;
        font-style: normal; }

    .clr {
        clear: both; }

    .mobileOld {
        min-width: 100%;
        min-height: 100vh;
        position: relative;
        overflow: hidden;
        /*background: url(./img/bg-main.jpg) center no-repeat;*/
        /*background-size: cover;*/
        font-family: "Gotham Pro";
        letter-spacing: 3px;
        text-align: left;
        -webkit-font-smoothing: subpixel-antialiased;
    }

    #scene .layer {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 666;
        width: 100%;
        height: 100%; }

    #scene .layer img {
        width: 110vw;
        height: 110vh;
        margin: -5vh 0 0 -5vw; }

    .section-size, .section-shadow, section {
        position: fixed;
        top: 50%;
        left: 50%;
        width: 83%;
        height: 83vh;
        -webkit-transform: translate(-50%, -55%);
            -ms-transform: translate(-50%, -55%);
                transform: translate(-50%, -55%); }

    .section-shadow {
        content: '';
        -webkit-box-shadow: 0 0 40px 0 #00ece3;
            box-shadow: 0 0 40px 0 #00ece3;
        -webkit-border-radius: 40%;
            border-radius: 40%; }

    section {
        overflow: hidden;
        z-index: 999;
        background: url(./img/bg-section.jpg) center no-repeat;
        background-size: 100% 100%;
        padding: 10% 0 10% 10%;
        -webkit-box-sizing: border-box;
            box-sizing: border-box;
        border-width: 1px;
        border-style: solid;
        -webkit-border-image: -webkit-gradient (linear, left top, right top, from(#00d3ff), to(#00ffce)) 1 round;
        -webkit-border-image: -webkit-linear-gradient(left, #00d3ff 0%, #00ffce 100%) 1 round;
            -o-border-image: linear-gradient(to right, #00d3ff 0%, #00ffce 100%) 1 round;
                border-image: -webkit-gradient(linear, left top, right top, from(#00d3ff), to(#00ffce)) 1 round;
                border-image: linear-gradient(to right, #00d3ff 0%, #00ffce 100%) 1 round; }

    .shine {
        position: absolute;
        width: 100px;
        height: 100px;
        -webkit-box-shadow: 0 0 60px 0 rgba(0, 236, 227, 0.7);
            box-shadow: 0 0 60px 0 rgba(0, 236, 227, 0.7);
        -webkit-border-radius: 40%;
            border-radius: 40%; }

    .shine.shine-1 {
        top: 15vh;
        right: 100%; }

    .shine.shine-2 {
        top: 100%;
        left: 20vw; }

    .shine.shine-3 {
        bottom: 25vh;
        left: 100%; }

    .logo {
        display: block;
        position: absolute;
        top: 15vh;
        width: 35%;
        max-width: 553px; }

    .contacts {
        position: absolute;
        left: 10vw;
        bottom: 20vh;
        right: 0; }

    .contacts__title {
        position: relative;
        display: inline-block;
        height: 20px;
        margin-bottom: 25px; }

    .contacts__title:after {
        content: '';
        position: absolute;
        left: 100%;
        top: 49%;
        height: 1px;
        width: 60vw;
        float: right;
        background: -webkit-gradient (linear, left top, right top, from #00d3ff, to #00ffce);
        background: -webkit-linear-gradient(left, #00d3ff 0%, #00ffce 100%);
        background: linear-gradient(to right, #00d3ff 0%, #00ffce 100%);
        border: none 0; }

    .contacts__title img {
        position: relative;
        height: 100%;
        display: block;
        margin-right: 20px; }

    .contacts__title hr {
        display: none;
        height: 1px;
        width: 60%;
        float: right;
        background: -webkit-gradient (linear, left top, right top, from #00d3ff, to #00ffce);
        background: -webkit-linear-gradient(left, #00d3ff 0%, #00ffce 100%);
        background: linear-gradient(to right, #00d3ff 0%, #00ffce 100%);
        border: none 0; }

    .contacts__block {
        position: relative;
        display: inline-block;
        margin: 0 120px 10px 40px;
        padding-left: 20px; }

    .contacts__block img {
        display: block;
        right: 100%;
        position: absolute;
        height: 37px; }

    .contacts__block span {
        display: block;
        font-size: 12px;
        color: #ddd;
        text-transform: uppercase;
        line-height: 1; }

    .contacts__block a {
        display: block;
        text-decoration: none;
        font-size: 18px;
        font-weight: 300;
        color: #4bd2f7;
        line-height: 1.524;
        text-align: justify;
        margin-top: 3px;}

    .contacts__block.phone {
        display: none;
        padding-left: 0; }

    .contacts__block.newSite {
        position: absolute;
        right: 3vw;
        bottom: -10vh; }

    .contacts__block.newSite img {
        height: 25px; }

    .contacts__block.newSite a {
        cursor: default;
        font-size: 12px;
        text-transform: uppercase; }

    .lang-switcher {
        position: absolute;
        top: 5%;
        right: 3%;
    }

    .lang-switcher a {
        color: #4bd2f7;
        text-decoration: none;
    }

    .en-lang {
        margin-bottom: 10px;
    }

    .langOpacity {
        opacity: 0.5;
    }

    .langOpacity a {
        color: #ddd;
    }

    .langOpacity:hover {
        opacity: 0.8;
    }


    @media (max-width: 1000px) and (orientation: portrait) {
    #scene,
    .section-shadow {
        display: none; }

    section {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: none 0;
        -webkit-transform: translate(0);
        -ms-transform: translate(0);
        transform: translate(0);
        padding: 0; }

    .logo {
        width: 60%;
        margin-left: 10vw; } }

    @media (max-width: 1000px) and (orientation: landscape) {
    #scene,
    .section-shadow {
    display: none; }

    section {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: none 0;
        padding: 0;
        -webkit-transform: translate(0);
            -ms-transform: translate(0);
                transform: translate(0);}

    .logo {
        width: 50%;
        margin-left: 10vw; }

    .contacts {
        bottom: 50px; }

    .contacts__block {
        display: inline-block;
        margin: 0 20px 10px 27px;
        padding-left: 10px; }

    .contacts__block img {
        height: 25px; }

    .contacts__block a {
        font-size: 12px; }

    .contacts__block.phone {
        padding-left: 0; }

    .contacts__block.newSite {
        position: fixed;
        right: 0;
        bottom: 1vh; } }


    @media (max-width: 480px) {
    .contacts {
    bottom: 20vh; }
    .contacts__block {
    display: block;
    margin: 0 20px 10px 27px;
    padding-left: 10px; }

    .contacts__block img {
        height: 25px; }

    .contacts__block a {
        font-size: 12px; }

    .contacts__block.phone {
        padding-left: 0; }

    .contacts__block.newSite {
        position: fixed;
        right: 0;
        bottom: 1vh; }
    }
</style>
