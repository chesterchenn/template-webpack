const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { dist, indexHTML, entryIndex } = require('../paths');

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
