const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const paths = require('./paths');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const pkg = require(path.join(process.cwd(), 'package.json'));

module.exports = {
  entry: {
    examples: path.join(__dirname, '../examples/', 'src/index'),
    components: path.join(__dirname, '../components', 'index')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash:8].js',
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
  plugins: [
    new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: ['dist'] }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../examples/public/index.html'),
      filename: 'index.html'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        VERSION: JSON.stringify(pkg.version)
      }
    }),
  ]
};