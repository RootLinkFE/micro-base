import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import Request from './request'
import Micro from './micro'
import './initialize'
import './styles'
import './plugins/lazy-use'
import 'ant-design-vue/dist/antd.css';

document.title = '根联家居'
Vue.config.productionTip = false

Vue.prototype.$http = Request

let hasStartMicroApps = false
// 这里确保先经过 initialize 初始化鉴权路由取得用户信息
// 子应用挂载时才能从 props 中获取到数据
router.beforeEach((to, form, next) => {
  if (!hasStartMicroApps) {
    hasStartMicroApps = true
    Micro.start()
  }

  next()
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
