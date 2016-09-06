import webpack from 'webpack'
import merge from 'webpack-merge'

import * as utils from './utils'
import config from '../config'
import baseWebpackConfig from './webpack.config.base.babel'

const env = process.env.NODE_ENV === 'testing'
  ? 'testing'
  : config.prod.env

export default merge(baseWebpackConfig, {
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
