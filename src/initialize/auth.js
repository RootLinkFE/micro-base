// src/initialize/auth.js

import NProgress from 'nprogress'

import * as Auth from '../utils/auth'
import store from '../store'
import router from '../router'

NProgress.configure({ showSpinner: false })

const LOGIN_PATH = '/account/login'

router.beforeEach(async (to, from, next) => {
  const isToLoginPath = to.path === LOGIN_PATH

  if (isToLoginPath) return next()
  // return next()
  if (!Auth.getToken().Authorization) {
    return next({ path: LOGIN_PATH, replace: true })
  }

  try {
    if (!store.state.user.data) {
      store
        .dispatch('getUserData')
        .then(async () => {
          await store.dispatch('getUserRoles')
          await store.dispatch('getConfigData')
        })
        .catch(() => {
          return next({ path: LOGIN_PATH, replace: true })
        })
    }

    next()
  } catch (error) {
    NProgress.done()
    console.log(error)
  }
})
