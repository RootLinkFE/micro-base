// src/store/modules/app.js

export default {
  state: {
    isShowAppHeader: true,
  },

  mutations: {
    SET_IS_SHOW_APP_HEADER(state, isShow) {
      state.isShowAppHeader = isShow
    },
  },

  actions: {},
}
