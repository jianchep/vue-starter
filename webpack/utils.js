import path from 'path'
import config from '../config'

const env = process.env.NODE_ENV || 'production'

export const assetsPath = (_path) => {
  let assetsSubDirectory = env === 'production'
    ? config.prod.assetsSubDirectory
    : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}
