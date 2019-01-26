import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const currentPage = {
    state: {
      current: 'Portfolio',
        menuOpenedInPortfolio: false
    },
    mutations: {
        togglePage(state, page) {
            state.current = page;
        },
        toggleMenuOpened(state, boolean) {
            state.menuOpenedInPortfolio = boolean;
        }
    },
    getters: {
        getPage(state) {
            return state.current
        },
        menuOpenedInPortfolio(state) {
            return state.menuOpenedInPortfolio
        }
    }
}

const mainPage = {
  state: {
    current: {component: 'AboutUs1', title: 'Главная', figure: 'Romb'},
    language: 'ru',
    sectionsCounter: 0,
    initialRendering: true,
    active: true,
    figureIsAnimating: false,
    currentFade: 'fadeUp',
    portfolioData: null,
    largeScreen: window.innerWidth >= 900 ? true : false,
    sections: [
      {component: 'AboutUs1', title: {
        ru: 'Главная',
        en: 'Main',
      }, figure: 'Romb'},
      {component: 'AboutUs2', title: {ru: 'Кейсы',
          en: 'Cases',}, figure: 'Romb'},
      {component: 'WhatWeDo', title: {
          ru: 'Услуги',
          en: 'Services',
        }, figure: 'Ring'},
      {component: 'Works', title: {
          ru: 'Работы',
          en: 'Works',
        }, figure: null},
      {component: 'Clients', title: {
          ru: 'Клиенты',
          en: 'Clients',
        }, figure: 'Triangle'},
      {component: 'Contacts', title: {
          ru: 'Контакты',
          en: 'Contacts',
        }, figure: 'Square'}]
  },
  mutations: {
    scrollMainPage (state, delta) {
      if (delta > 0 && state.sectionsCounter < 5) {
        state.sectionsCounter++;
        state.current = state.sections[state.sectionsCounter];
      } else if (delta < 0 && state.sectionsCounter > 0) {
        state.sectionsCounter--;
        state.current = state.sections[state.sectionsCounter];
      }
    },
    setMainPageState (state, counter) {
      state.sectionsCounter = counter;
      state.current = state.sections[state.sectionsCounter];
    },
    initialRendered (state) {
      state.initialRendering = false;
    },
    changeLanguage (state , lang) {
      state.language = lang;
    },
    changeFade (state, fadeName) {
      state.currentFade = fadeName;
    },
    openMenu (state) {
      state.current = {component: 'MenuPage', title: 'Меню', figure: state.current.figure}
    },
    closeMenu (state) {
      state.current = state.sections[state.sectionsCounter]
    },
    figureAnimated (state) {
      state.figureIsAnimating = false
    },
    figureAnimating (state) {
      state.figureIsAnimating = true
    },
    setPortfolioData (state, data) {
      state.portfolioData = data
    }
  },
  actions: {
    loadPortfolioData(context) {
      // ('http://lab73.digital/static/portfolio/data/data.json')
      axios.get('https://api.myjson.com/bins/x8v8c')
        .then((res) => {
          context.commit('setPortfolioData', res.data);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  },
  getters: {
      getLanguage: state => {
      return state.language;
    },
      mainCurrentComponent: state => {
      return state.current.component;
    },
      mainCurrentFigure: state => {
      return state.current.figure;
    },
      currentCounter: state => {
      return state.sectionsCounter;
    },
      portfolioData: state => {
      return state.portfolioData;
    }
  }
}

const store = new Vuex.Store({
  modules: {
    main: mainPage,
    page: currentPage
  }
})

export default store
