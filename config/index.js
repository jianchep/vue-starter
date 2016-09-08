import path from 'path'
import devEnv from './dev.env'
import prodEnv from './prod.env'

export default {
  dev: {
    env: devEnv,
    port: 3000,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/'
  },
  prod: {
    env: prodEnv,
    port: 4000,
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    viewsSubDirectory: 'views',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  }
}
