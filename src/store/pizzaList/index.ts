import { Pizza } from '@/types';
import { ActionTree } from 'vuex';
import { GET_PIZZALIST, FETCH_PIZZALIST, SET_PIZZALIST } from '../constants';

import { fetchPizzaList } from './api';

const state: State = {
  pizzaList: [],
};

const getters = {
  [GET_PIZZALIST]() {
    return state.pizzaList;
  },
};

const actions: ActionTree<State, State> = {
  async [FETCH_PIZZALIST]({ commit }) {
    const list = await fetchPizzaList();
    return commit(SET_PIZZALIST, list);
  },
};

const mutations = {
  [SET_PIZZALIST](state: State, list: Pizza[]) {
    state.pizzaList = list;
  },
};

interface State {
  pizzaList: Pizza[];
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
