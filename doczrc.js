module.exports = {
  title: '@zc/rmc-ui',
  codeSandbox: false,
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
  propsParser: false,
  notUseSpecifiers: true,
  filterComponents: files => files.filter(filepath => /components\/.*\/*\.(js|jsx|ts|tsx)$/.test(filepath)),
  modifyBundlerConfig,
  plugins: [],
  menu: [
    'Introduction',
    'Quick Start',
    'Changelog',
    {
      name: 'Components'
    }
  ]
}