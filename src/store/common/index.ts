import { GET_TABLIST } from '../types';

const state = {
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
};

const getters = {
  [GET_TABLIST]() {
    return state.tabList;
  },
};

const actions = {};

const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
