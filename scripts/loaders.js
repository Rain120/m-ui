const paths = require('./paths');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const autoprefixer = require('autoprefixer')({
  // browsers: [
  //   '>1%',
  //   'last 4 versions',
  //   'Firefox ESR',
  //   'not ie < 9',
  // ],
  flexbox: 'no-2009',
});

const precss = require('precss')();
const flexBugFixes = require('postcss-flexbugs-fixes')();

const publicPath = paths.servedPath;
const shouldUseRelativeAssetPaths = publicPath === './';
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';

const cssFilename = 'style/css/[name].[contenthash:8].css';

const miniCssExtractPluginOptions = shouldUseRelativeAssetPaths
  ?
  {
    publicPath: Array(cssFilename.split('/').length).join('../')
  }
  : {};

const urlLoader = {
  test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
  loader: require.resolve('url-loader'),
  options: {
    limit: 10000,
    name: '[name].[hash:8].[ext]',
  },
};

// js loader
const jsLoader = {
  test: /\.(js|jsx|mjs)$/,
  include: path.join(__dirname, '../components'),
  loader: require.resolve('babel-loader'),
  options: {
    compact: true,
  },
};


// ts loader
const tsLoader = {
  test: /\.(ts|tsx)$/,
  include: path.join(__dirname, '../components'),
  use: [
    {
      loader: require.resolve('ts-loader'),
      options: {
        transpileOnly: true,
      }
    }
  ]
};

const postcssLoader = {
  loader: require.resolve('postcss-loader'),
  options: {
    plugins: () => [
      flexBugFixes,
      autoprefixer
    ],
  },
};

const precssLoader = {
  loader: require.resolve('postcss-loader'),
  options: {
    plugins: () => [
      precss,
      flexBugFixes,
      autoprefixer
    ],
  },
};

const rawCssLoaderDev = {
  loader: require.resolve('css-loader'),
  options: {
    importLoaders: 1,
  },
};

const rawCssLoaderProd = {
  loader: require.resolve('css-loader'),
  options: {
    importLoaders: 1,
    minimize: true,
    sourceMap: shouldUseSourceMap,
  },
};

const cssLoaderDev = {
  test: /\.css$/,
  use: [
    MiniCssExtractPlugin.loader,
    // require.resolve('style-loader'),
    rawCssLoaderDev,
    postcssLoader,
  ],
};

const cssLoaderProd = {
  test: /\.css$/,
  loader: Object.assign({
      fallback: require.resolve('style-loader'),
      use: [
        MiniCssExtractPlugin.loader,
        rawCssLoaderProd,
        postcssLoader,
      ],
    },
    miniCssExtractPluginOptions
  )
};

// less loader
const lessLoaderDev = {
  test: /\.less$/,
  use: [
    MiniCssExtractPlugin.loader,
    // require.resolve('style-loader'),
    rawCssLoaderDev,
    postcssLoader,
    require.resolve('less-loader')
  ],
};

const lessLoaderProd = {
  test: /\.less$/,
  loader: Object.assign({
      // fallback: require.resolve('style-loader'),
      use: [
        MiniCssExtractPlugin.loader,
        rawCssLoaderProd,
        postcssLoader,
        require.resolve('less-loader')
      ],
    },
    miniCssExtractPluginOptions
  )
};

// scss loader
const scssLoaderDev = {
  test: /\.scss$/,
  use: [
    MiniCssExtractPlugin.loader,
    // require.resolve('style-loader'),
    rawCssLoaderDev,
    precssLoader,
  ],
};

const scssLoaderProd = {
  test: /\.scss$/,
  loader: Object.assign({
      // fallback: require.resolve('style-loader'),
      enforce: "pre",
      use: [
        MiniCssExtractPlugin.loader,
        rawCssLoaderProd,
        precssLoader
      ],
    },
    miniCssExtractPluginOptions
  )
};

const fileLoader = {
  loader: require.resolve('file-loader'),
  exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
  options: {
    name: '[name].[hash:8].[ext]',
  },
};

module.exports = {
  urlLoader,
  jsLoader,
  tsLoader,
  cssLoaderDev,
  cssLoaderProd,
  lessLoaderDev,
  lessLoaderProd,
  scssLoaderDev,
  scssLoaderProd,
  fileLoader,
  postcssLoader
};
