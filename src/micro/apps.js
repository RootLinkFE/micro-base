// src/micro/apps.js

import store from '../store'

const apps = [
  {
    name: 'micro-admin-seed',
    entry: process.env.VUE_APP_APP1,
    container: '#frame',
    activeRule: '/#/seed',
    title: '种子工程1',
    path: '/seed',
    props: { store },
  },
  {
    name: 'Groupon',
    entry: process.env.VUE_APP_APP2,
    container: '#frame',
    activeRule: '/#/admin',
    title: 'vue后台',
    path: '/admin',
    props: { store },
  },
]

export default apps
