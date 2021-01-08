// vue.config.js

const name = '快乐种子｜营销中心后台'

module.exports = {
  devServer: {
    port: '9000',
  },

  configureWebpack: {
    name: name,
    output: {
      library: 'CrmBase',
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_CrmBase`,
      filename: 'static/js/[name].[hash:6].js',
      chunkFilename: 'static/js/[name].[chunkhash:6].js',
    },
  },
}
