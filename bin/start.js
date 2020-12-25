#!/usr/bin/env node
/**
 * 校验服务启动前是否进行初始化
 */
const spawn = require('cross-spawn');
const config = require('../config.json');
const chalk =require('chalk');
const isTypeScript = config.type === 'typescript';
const isJavaScript = config.type === 'javascript';
const errMsg = `${chalk.red('You need to run')} ${chalk.green('npm run init')} ${chalk.red('at first.')}`;

const exec = () => {
  const command = 'npx';
  args = [
    'webpack-dev-server',
    '--open',
    '--config',
    'webpack.dev.js'
  ]

  spawn(command, args,  { stdio: 'inherit' });
}

if (!isTypeScript && !isJavaScript) {
  console.error(errMsg)
} else {
  exec();
}
