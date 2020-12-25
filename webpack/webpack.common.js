const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('../config.json');
const isTypeScript = config.type === 'typescript';

module.exports = {
  entry: {
    app: isTypeScript ? './src/index.tsx': './src/index.js',
  },
  output: {
    filename: '[name].bundles.js',
    path: path.resolve( __dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /\.(js|jsx)/,
      exclude: /node_modules/,
      loaders: ['babel-loader'],
    }, {
      test: /\.tsx?$/,
      exclude: /node_modules/,
      loader: 'ts-loader',
    }, {
      test: /\.css/,
      exclude: /node_modules/,
      loader: ['style-loader', 'css-loader'],
    }],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
    })
  ]
}
