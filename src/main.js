// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './pages/App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
});

router.onReady(() => {
    if (window.innerWidth < 900) {
      // router.push('/mobile')
    }
    // else { //delete it if you want to allow user go directly to subroutes
    //     router.push('/')
    // }
});