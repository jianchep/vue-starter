import path from 'path'
import webpack from 'webpack'
import merge from 'webpack-merge'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import * as utils from './utils'
import config from '../config'
import baseWebpackConfig from './webpack.config.base.babel'

const env = process.env.NODE_ENV === 'testing'
  ? 'testing'
  : config.prod.env

let prodConfig = merge(baseWebpackConfig, {
  devtool: config.prod.productionSourceMap ? '#source-map' : false,
  output: {
    path: config.prod.assetsRoot,
    filename: utils.assetsPath('js/[name]-[chunkhash:8].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        // remove `console.*`
        drop_console: true
      },
      output: {
        comments: false
      }
    })
  ]
})

const chunks = Object.keys(prodConfig.entry)

chunks.forEach((pathname) => {
  if (pathname === 'vendor') {
    return
  }
  let conf = {
    filename: path.resolve(__dirname, `../dist/views/${pathname}.html`),
    template: 'src/template.html',
    inject: true,
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true
    },
    chunksSortMode: 'dependency'
  }
  if (pathname in prodConfig.entry) {
    conf.chunks = ['vendor', pathname]
    conf.hash = false
  }
  prodConfig.plugins.push(new HtmlWebpackPlugin(conf))
})

export default prodConfig
