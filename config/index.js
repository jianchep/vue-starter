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
    productionSourceMap: true
  }
}
