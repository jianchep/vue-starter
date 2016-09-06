import path from 'path'
import devEnv from './dev.env'
import prodEnv from './prod.env'

export default {
  dev: {
    env: devEnv,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/'
  },
  prod: {
    env: prodEnv,
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true
  }
}
