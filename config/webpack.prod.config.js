const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const paths = require('./paths');
const loaders = require('./loaders');
const common = require('./webpack.base.config');

const ENV = process.env.ENV = process.env.NODE_ENV = 'production';

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: '[name].min.js',
    library: '@zc/rmc-ui',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react"
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom"
    }
  },
  resolve: {
    enforceExtension: false,
    extensions: [".ts", ".tsx", ".js", ".jsx", ".less"]
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        oneOf: [
          loaders.urlLoader,
          loaders.jsLoader,
          loaders.tsLoader,
          loaders.cssLoaderProd,
          loaders.lessLoaderProd,
          loaders.scssLoaderProd,
          loaders.fileLoader,
        ]
      }
    ]
  }
});