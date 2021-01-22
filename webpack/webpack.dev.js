const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const paths = require('../paths');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: paths.dist,
    port: 8080,
    open: true,
    hot: true,
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
});