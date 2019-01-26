import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/Main'
import Project from '@/pages/Portfolio/Project'
import PortfolioPage from '@/pages/Portfolio/index.vue'
import MobileOld from '@/pages/MobilleOld/index.vue'
// import Vuex from 'vuex';

// Vue.use(Vuex);
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/portfolio/',
      name: 'PortfolioPage',
      component: PortfolioPage
    },
    {
      path: '/portfolio/:projectId/:project',
      name: 'PortfolioProject',
      component: Project,
      props: true
    },
    {
      path: '/mobile',
      name: 'MobileVersion',
      component: MobileOld
    }
  ],
    // scrollBehavior (to, from, savedPosition) {
    //   return {x: 0, y: 0}
    // },
    // mode: 'history'
});



export default router