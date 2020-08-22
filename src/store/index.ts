import Vue from 'vue';
import Vuex from 'vuex';

import common from './common';
import pizzaList from './pizzaList';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pizzaList: [],
  },
  mutations: {},
  actions: {},
  modules: {
    common,
    pizzaList,
  },
});
