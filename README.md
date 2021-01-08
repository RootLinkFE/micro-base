# crm-base

> 虚拟组后台基座

基于 [qiankun](https://qiankun.umijs.org/zh/guide) 微前端框架进行搭建，为虚拟组各子项目后台基座

### 相关文档 & 技术文章
- [虚拟组后台技术方案](https://wiki.vipthink.cn/pages/viewpage.action?pageId=56661870)
- [可能是你见过最完善的微前端解决方案](https://zhuanlan.zhihu.com/p/78362028)

## 接入方式
```js
// src/micro/app.js
const apps = [
  ...
  {
    name: 'CrmGroupon',
    entry: process.env.VUE_APP_CRM_GROUPON,
    container: '#frame',
    activeRule: '/#/groupon',
    title: '拼团',
    path: '/groupon',
    props: { store },
  },
]
```

- 添加子项目配置，具体查看 qiankun 文档
- `title` 对应导航栏 tab 名称，`props` 为子应用挂载时传递的共享数据，现在把 `store` 抛出去，存在更新同步问题，后面可以用 iceStore 做响应更新
- 子应用接入可查看 `qiankun` 文档，可以参考 `crm-poster` 项目 (坑点仍需整理)

## 业务 & 代码
- 目前只是简单的实现聚合子应用和登录，登录页可以作为子应用的通用登录，详细跳转请查看相关代码
- 大部分代码迁移自旧 crm 项目，后续需要完善用户信息 / 用户鉴权 / 状态共享
- 并没有做公共的函数库，应该遵循子应用独立自治的原则，公共库可以使用 npm 包维护，或者后面权衡作出调整

## 开发

### 安装依赖
```bash
$ npm install # or yarn
```

### 代码规范
使用 `eslint` / `prettier` 作代码检查和格式规范，为了确保能正常处理，请使用 `vscode` 作为开发 IDE，并安装插件 `ESLint` / `Prettier - Code formatter`

### 本地开发
```bash
$ npm run serve:dev # uat 变量环境 npm run serve:uat
```

### 测试构建
```bash
$ npm run build:dev # uat 环境 npm run serve:uat
```

目前由于 jenkins 只管分支不做命令操作，建议构建部署步骤为
1. 本地开发分支 merge 到 dev / test (运维要求，所以分支名非 uat) 分支
2. 在 dev / test 分支下解决冲突后执行对应的构建命令获得 `dist` 目录并推到远端
3. 使用 [jenkins](http://js-op.vipthink.cn/)，项目 `market-admin`，选择对应环境填写对应 tag (branch)

### 版本管理
tag 弱版本概念，每次进 0.0.1，逢 10 进 1
