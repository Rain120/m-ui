/*
 * @Author: Rainy
 * @Date: 2019-08-06 20:24:20
 * @LastEditors: Rainy
 * @LastEditTime: 2019-08-15 22:19:27
 */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');

const modifyBundlerConfig = (config, dev) => {
  const styleLoaders = ['css-loader'];
  // styleLoaders.unshift(dev ? 'style-loader' : MiniCssExtractPlugin.loader);
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
    // plugins: [
    //   dev
    //     ? () => {}
    //     : new MiniCssExtractPlugin({
    //         chunkFilename: 'static/css/common.[hash].css'
    //       })
    // ]
  });
}

module.exports = {
  title: 'rmc-ui',
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
    showPlaygroundEditor: true,
    codemirrorTheme: 'material'
  },
  typescript: true,
  propsParser: true,
  notUseSpecifiers: true,
  filterComponents: files => files.filter(filepath => /components\/.*\/*\.(js|jsx|ts|tsx)$/.test(filepath)),
  modifyBundlerConfig,
  plugins: [],
  menu: [
    { name: '介绍', route: '/introduction' },
    { name: '快速开始', route: '/quick-start' },
    { name: '更新日志', route: '/changelog' },
    {
      name: '组件'
    }
  ]
}