// vue.config.js

const name = '根联平台'

module.exports = {
  devServer: {
    port: '9000',
  },

  configureWebpack: {
    name: name,
    output: {
      library: 'MicroBase',
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_MicroBase`,
      filename: 'static/js/[name].[hash:6].js',
      chunkFilename: 'static/js/[name].[chunkhash:6].js',
    },
  },
}
