// src/micro/apps.js

import store from '../store'
import router from '../router'

const apps = [
  {
    name: 'edu-app',
    entry: process.env.VUE_APP_EDU_APP,
    container: '#frame',
    activeRule: '/app',
    title: '教育应用',
    path: '/app',
    props: { store, baseRouter: router },
  },
  {
    name: 'micro-admin-seed',
    entry: process.env.VUE_APP_EDU_APP1,
    container: '#frame',
    activeRule: '/app1',
    title: '测试',
    path: '/app1',
    props: { store, baseRouter: router },
  },
]

export default apps
