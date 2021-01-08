// src/initialize/route.js

import router from '../router'
import apps from '../micro/apps'

router.beforeEach(async (to, from, next) => {
  // 有 name 属性，说明是主项目的路由
  if (to.name) {
    return next()
  }

  if (apps.some((app) => to.path.includes(app.path))) {
    return next()
  }

  next({ name: 'error-404' })
})
