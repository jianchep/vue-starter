import shell from 'shelljs'
shell.env.NODE_ENV = 'production'

import webpack from 'webpack'
import path from 'path'
import ora from 'ora'

import config from '../config'
import webpackConfig from './webpack.config.prod.babel'

const spinner = ora('building for production...')
spinner.start()

let assetsPath = path.join(config.prod.assetsRoot, config.prod.assetsSubDirectory)
shell.rm('-rf', assetsPath)
shell.mkdir('-p', assetsPath)
// shell.cp('-R', 'static/', assetsPath)

webpack(webpackConfig, (err, stats) => {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})
