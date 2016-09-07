import webpack from 'webpack'
import merge from 'webpack-merge'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import config from '../config'
import baseWebpackConfig from './webpack.config.base.babel'

Object.keys(baseWebpackConfig.entry).forEach((name) => {
  baseWebpackConfig.entry[name] = ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'].concat(baseWebpackConfig.entry[name])
})

export default merge(baseWebpackConfig, {
  devtool: '#eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/template.html',
      inject: true
    })
  ]
})
