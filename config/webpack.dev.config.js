const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const paths = require('./paths');
const loaders = require('./loaders');
const common = require('./webpack.base.config');

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 9999;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].min.js',
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        oneOf: [
          loaders.urlLoader,
          loaders.jsLoader,
          loaders.tsLoader,
          loaders.cssLoaderDev,
          loaders.lessLoaderDev,
          loaders.fileLoader,
          loaders.scssLoaderDev,
        ]
      }
    ]
  },
  plugins: [],
  devServer: {
    contentBase: '../dist',
    port: PORT,
    host: HOST,
    hot: true,
    compress: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
      ignored: /node_modules/
    }
  }
});
