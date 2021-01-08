import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'

import Home from '../views/Home.vue'

const AccountLogin = () =>
  import(/* webpackChunkName: "account-login" */ '../views/account/login')
const Error404 = () =>
  import(/* webpackChunkName: "error-404" */ '../views/error/404')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/account/login',
    name: 'account-login',
    component: AccountLogin,
  },
  {
    path: '/error/404',
    name: 'error-404',
    component: Error404,
  },
]

const router = new VueRouter({
  routes,
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
