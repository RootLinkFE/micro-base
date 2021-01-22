// vue.config.js

const name = 'RootHome基座'

module.exports = {
  devServer: {
    port: '8000',
  },

  configureWebpack: {
    name: name,
    output: {
      library: 'RHbase',
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_MicroBase`,
      filename: 'static/js/[name].[hash:6].js',
      chunkFilename: 'static/js/[name].[chunkhash:6].js',
    },
  },
}
