// src/store/modules/config.js

// import Request from '../../request'

export default {
  state: {
    data: null,
  },

  mutations: {
    SET_CONFIG_DATA(state, data) {
      state.data = data
    },
  },

  actions: {
    getConfigData({ commit }) {
      commit('SET_CONFIG_DATA', '')
    },
  },
}
