/*
 * @Author: Rain120
 * @Date: 2019-08-18 15:19:09
 * @LastEditTime: 2019-08-18 17:53:27
 */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');

const modifyBundlerConfig = (config, dev) => {
  const styleLoaders = ['css-loader'];
  styleLoaders.unshift(dev ? 'style-loader' : MiniCssExtractPlugin.loader);
  return merge(config, {
    resolve: {
      alias: {
        components: path.resolve(__dirname, './components')
      }
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: styleLoaders
        },
        { test: /\.less$/, use: [...styleLoaders, 'less-loader'] }
      ]
    },
    optimization: {},
    plugins: [
      dev
        ? () => {}
        : new MiniCssExtractPlugin({
            chunkFilename: 'static/css/common.[hash].css'
          })
    ]
  });
}

module.exports = {
  title: 'RMC-UI',
  codeSandbox: false,
  hashRouter: true,
  dest: 'netlify-docs',
  htmlContext: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://codemirror.net/theme/material.css'
        }
      ]
    }
  },
  themeConfig: {
    showPlaygroundEditor: false,
    codemirrorTheme: 'material'
  },
  typescript: true,
  propsParser: true,
  notUseSpecifiers: true,
  filterComponents: files => files.filter(filepath => /components\/.*\/*\.(js|jsx|ts|tsx)$/.test(filepath)),
  modifyBundlerConfig,
  plugins: [],
  menu: [
    { name: 'Home', route: '/' },
    { name: 'Quick Start', route: '/quick-start' },
    { name: 'Introduction', route: '/introduction' },
    { name: 'Changelog', route: '/changelog' },
    { name: 'Components' }
  ]
}