import { GET_TABLIST, SET_ACTIVE_TAB, GET_ACTIVE_TAB } from '../constants';

const state: State = {
  tabList: [
    {
      label: 'Все',
      value: 0,
    },
    {
      label: 'Мясные',
      value: 1,
    },
    {
      label: 'Вегетарианская',
      value: 2,
    },
    {
      label: 'Гриль',
      value: 3,
    },
    {
      label: 'Острые',
      value: 4,
    },
    {
      label: 'Закрытые',
      value: 5,
    },
  ],
  activeTab: 0,
};

const getters = {
  [GET_TABLIST]() {
    return state.tabList;
  },
  [GET_ACTIVE_TAB]() {
    return state.activeTab;
  },
};

const actions = {};

const mutations = {
  [SET_ACTIVE_TAB](state: State, payload: number) {
    state.activeTab = payload;
  },
};

interface State {
  tabList: { value: number; label: string }[];
  activeTab: number;
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
