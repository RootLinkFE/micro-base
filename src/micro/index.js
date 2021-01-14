// src/micro/index.js

import {
  registerMicroApps,
  addGlobalUncaughtErrorHandler,
  start,
  initGlobalState,
} from 'qiankun'
import NProgress from 'nprogress'

import apps from './apps'

registerMicroApps(apps, {
  beforeLoad: (app) => {
    // 加载微应用前
    NProgress.start()
    console.log('[LifeCycle] before load %c%s', 'color: green;', app.name)
    return Promise.resolve()
  },

  afterMount: (app) => {
    // 挂载微应用后
    NProgress.done()
    console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)
    return Promise.resolve()
  },

  afterUnmount: (app) => {
    console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name)
    return Promise.resolve()
  },
})

addGlobalUncaughtErrorHandler((event) => {
  NProgress.remove()
  console.log('global uncaught error ', event)
  const { message } = event
  if (message && message.includes('died in status LOADING_SOURCE_CODE')) {
    console.log('micro app run fail')
  }
})

// 解决子应用间请求跨域问题
const request = (url) =>
  fetch(url, {
    headers: { 'Access-Control-Allow-Origin': '*' },
  })
const options = {
  request,
  prefetch: false,
  singular: false,
  // sandbox: { strictStyleIsolation: true },
}

const state = {
  a: 1,
}
// 初始化 state
const actions = initGlobalState(state)
actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log(state, prev, 'base')
})
window.base = 'base';

export default {
  start: () => start(options),
}
