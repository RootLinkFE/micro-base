// src/store/modules/user.js

// import Request from '../../request'

export default {
  state: {
    data: null,
    roles: null,
    ROLES_MAP: new Set(),
  },

  mutations: {
    SET_USER_DATA(state, data) {
      state.data = data
    },

    SET_USER_ROLES(state, roles) {
      if (roles === 'super') {
        state.roles = roles
        return
      }
      const ROLES_MAP = new Set()
      state.ROLES_MAP = ROLES_MAP
    },
  },

  actions: {
    async getUserData({ commit }) {
      commit('SET_USER_DATA', '')
    },

    async getUserRoles({ commit }) {
      commit('SET_USER_ROLES', 'super')
    },
  },
}
