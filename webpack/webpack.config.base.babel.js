import path from 'path'
import glob from 'glob'

import config from '../config'
import * as utils from './utils'

const env = process.env.NODE_ENV || config.prod.env
const projectRoot = path.resolve(__dirname, '../')

let getEntry = (globPath) => {
  let entries = {
    vendor: ['vue']
  }
  glob.sync(globPath).forEach((entry) => {
    var pathname = entry.split('/').splice(-2).join('/').split('.')[0]
    entries[pathname] = [entry]
  })
  return entries
}
let entries = getEntry('./src/client/modules/**/*.js')

export default {
  entry: entries,
  output: {
    path: config.prod.assetsRoot,
    publicPath: env === 'production' ? config.prod.assetsPublicPath : config.dev.assetsPublicPath,
    filename: 'js/[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/client/assets'),
      'components': path.resolve(__dirname, '../src/client/components')
    }
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
