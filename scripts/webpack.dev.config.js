const merge = require('webpack-merge');
const path = require('path');
const loaders = require('./loaders');
const common = require('./webpack.base.config');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';

console.log(__dirname, path.join(__dirname, '../components', 'index'))

module.exports = merge(common, {
  mode: ENV,
  devtool: 'cheap-module-source-map',
  entry: {
    'rmc-ui': path.join(__dirname, '../components', 'index'),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].min.js',
    library: '@zc/rmc-ui',
    libraryTarget: 'umd',
    libraryExport: "default",
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
  plugins: [
    new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style/[name].css',
      chunkFilename: 'style/[id].css',
      ignoreOrder: false,
    }),
    new CleanWebpackPlugin({
      dry: true,
      verbose: true,
      protectWebpackAssets: false,
      cleanAfterEveryBuildPatterns: ['dist/**/*']
    })
  ]
});
