const paths = require('./paths');
const tsImportPluginFactory = require('ts-import-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const autoprefixer = require('autoprefixer')({
  browsers: [
    '>1%',
    'last 4 versions',
    'Firefox ESR',
    'not ie < 9',
  ],
  flexbox: 'no-2009',
});

const precss = require('precss')();
const flexBugFixes = require('postcss-flexbugs-fixes')();

const publicPath = paths.servedPath;
const shouldUseRelativeAssetPaths = publicPath === './';
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';

const cssFilename = 'static/css/[name].[contenthash:8].css';

const extractTextPluginOptions = shouldUseRelativeAssetPaths
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
    name: 'static/media/[name].[hash:8].[ext]',
  },
};

const importPluginOption = [
  {
    libraryName: 'antd',
    libraryDirectory: 'lib',
    style: 'css'
  },
  {
    libraryName: 'antd-mobile',
    libraryDirectory: 'lib',
    style: 'css',
  }
];

// js loader
const jsLoader = {
  test: /\.(js|jsx|mjs)$/,
  include: paths.appSrc,
  loader: require.resolve('babel-loader'),
  options: {
    
    compact: true,
  },
};


// ts loader
const tsLoader = {
  test: /\.(ts|tsx)$/,
  include: paths.appSrc,
  use: [
    {
      loader: require.resolve('ts-loader'),
      options: {
        transpileOnly: true,
        getCustomTransformers: () => ({
          before: [tsImportPluginFactory(importPluginOption)]
        })
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
    require.resolve('style-loader'),
    rawCssLoaderDev,
    postcssLoader,
  ],
};

const cssLoaderProd = {
  test: /\.css$/,
  loader: ExtractTextPlugin.extract(
    Object.assign(
      {
        fallback: require.resolve('style-loader'),
        use: [
          rawCssLoaderProd,
          postcssLoader,
        ],
      },
      extractTextPluginOptions
    )
  ),
};

// scss loader
const scssLoaderDev = {
  test: /\.scss$/,
  use: [
    require.resolve('style-loader'),
    rawCssLoaderDev,
    precssLoader,
  ],
};

const scssLoaderProd = {
  test: /\.scss$/,
  loader: ExtractTextPlugin.extract(
    Object.assign(
      {
        fallback: require.resolve('style-loader'),
        use: [
          rawCssLoaderProd,
          precssLoader,
        ],
      },
      extractTextPluginOptions
    )
  )
};

// less loader
const lessLoaderDev = {
  test: /\.less$/,
  use: [
    require.resolve('style-loader'),
    rawCssLoaderDev,
    postcssLoader,
    require.resolve('less-loader')
  ],
};

const lessLoaderProd = {
  test: /\.less$/,
  loader: ExtractTextPlugin.extract(
    Object.assign(
      {
        fallback: require.resolve('style-loader'),
        use: [
          rawCssLoaderProd,
          postcssLoader,
          require.resolve('less-loader')
        ],
      },
      extractTextPluginOptions
    )
  )
};

const fileLoader = {
  loader: require.resolve('file-loader'),
  exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
  options: {
    name: 'static/media/[name].[hash:8].[ext]',
  },
};

module.exports = {
  urlLoader,
  jsLoader,
  tsLoader,
  cssLoaderDev,
  cssLoaderProd,
  scssLoaderDev,
  scssLoaderProd,
  lessLoaderDev,
  lessLoaderProd,
  fileLoader,
  postcssLoader
};
