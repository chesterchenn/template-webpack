#!/usr/bin/env node
/**
 * 校验服务启动前是否进行初始化
 */
const spawn = require('cross-spawn');
const chalk =require('chalk');
const { isJavaScript, isTypeScript } = require('../paths.js')

const exec = () => {
  const args = ['serve', '--config', 'webpack/webpack.dev.js'];
  spawn('webpack', args, { stdio: 'inherit' });
}

if (!isTypeScript && !isJavaScript) {
  console.error(chalk.red('You need to run ') + chalk.green('npm run init ') + chalk.red('or ') 
    + chalk.green('yarn run init:js ') + chalk.red('at first.'));
} else {
  exec();
}
