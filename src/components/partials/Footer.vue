<template>
    <div class="footer">
        <div class="footerLeft">
            <a v-for="item in ourLinks" target="_blank" :href=item.link>{{item.name}}</a>
        </div>

        <div class="footerRight">
            <a v-for="item in languages" href="#" :class="[item.option, {active: isActive(item.option)}]" @click="changeLang(item.option)">{{item.option}}</a>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'FooterLanguage',
        data() {
           return {
               ourLinks: [{
                 name: 'Facebook',
                 link: 'https://www.facebook.com/lab73.digital/'
               },{
                 name: 'Behance',
                 link: 'https://www.behance.net/lab73digital'
               }],
               languages: [
                 {option: 'en'},
                 {option: 'ru'}
               ]

           };
        },
        components: {


        },
        mounted() {

        },
        computed: {

        },
        methods: {
           changeLang(lang){
              this.$store.commit('changeLanguage', lang);
           },
           isActive(lang){
              return this.$store.getters.getLanguage === lang;
           },
        },
        mutations: {

        }
    };

</script>



<style lang="sass" scoped>
//@import "src/assets/sass/main.sass"
.footer
    position: absolute
    left: 0
    bottom: 0
    right: 0
    display: flex
    justify-content: space-between
    padding: 20px
a
    text-decoration: none
    font-size: 11px
    color: #15344f
    text-transform: uppercase
    letter-spacing: 5px
    transition: color 0.3s ease-in-out
    &.active
        color: #0cf3d0
    &:first-of-type
        margin-right: 100px
@media only screen and (max-width: 900px)
    .footer
        display: block
        bottom: inherit

</style>
