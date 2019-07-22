const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const path = require('path');
const paths = require('./paths');
const loaders = require('./loaders');
const common = require('./webpack.base.config');

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 9999;
const pkg = require(path.join(process.cwd(), 'package.json'));

module.exports = merge(common({ env: ENV}), {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: path.join(__dirname, '../examples/', 'src/index.tsx'),
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: '[name].[hash:8].js'
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
          loaders.scssLoaderDev,
          loaders.fileLoader,
        ]
      }
    ]
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../examples/public/index.html')
    }),
    new webpack.DefinePlugin({
      'process.env': {
        VERSION: JSON.stringify(pkg.version)
      }
    })
  ],
  devServer: {
    // contentBase: path.resolve(__dirname, "../examples/src"),
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
