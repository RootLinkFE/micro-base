// src/micro/apps.js

import store from '../store'

const apps = [
  {
    name: 'Poster',
    entry: process.env.VUE_APP_APP1,
    container: '#frame',
    activeRule: '/#/dayly',
    title: '知乎日报',
    path: '/dayly',
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
