const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('../config.json');

const root = process.cwd();
const src = path.resolve(root, 'src');
const dist = path.resolve(root, 'dist');
const isTypeScript = config.type === 'typescript';
const entryIndex = isTypeScript ? path.join(src, 'index.tsx') : path.join(src, '/index.js');
const indexHTML = path.resolve(root, 'index.html');

module.exports = {
  entry: {
    app: entryIndex,
  },
  output: {
    filename: '[name].bundles.js',
    path: dist,
  },
  module: {
    rules: [{
      test: /\.(js|jsx)/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    }, {
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: ['ts-loader'],
    }, {
      test: /\.css/,
      exclude: /node_modules/,
      use: ['style-loader', 'css-loader'],
    }],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: indexHTML,
    })
  ]
}
