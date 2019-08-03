# 开发者错误QA手册

#### 搭建出现问题及其解决方法

- Q1
```bash
ERROR in ./components/Alert/style/index.less
Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):
ReferenceError: window is not defined
    at /Users/v_zhongchao01/Desktop/MyWork/Notes/rmc-ui/node_modules/style-loader/index.js!/Users/v_zhongchao01/Desktop/MyWork/Notes/rmc-ui/node_modules/css-loader/dist/cjs.js??ref--4-oneOf-3-2!/Users/v_zhongchao01/Desktop/MyWork/Notes/rmc-ui/node_modules/postcss-loader/src/index.js??ref--4-oneOf-3-3!/Users/v_zhongchao01/Desktop/MyWork/Notes/rmc-ui/node_modules/less-loader/dist/cjs.js!/Users/v_zhongchao01/Desktop/MyWork/Notes/rmc-ui/components/Alert/style/index.less:958:2
```
![q1](./screenshots/q1.png)

> `MiniCSSExtractPlugin`将`CSS`提取到单独的文件中, 并将资源添加到`webpack`的资源`map`中。 另一方面, `style-loader`将`CSS`作为字符串嵌入到JS包本身中, 然后在运行时将其注入带有样式标记的`DOM`中, 通常用于在`html`文档中嵌入样式内联。这些方法冲突，因此错误。

解决办法: 注释`loader`中使用`mini-css-extract-plugin`的`style-loader`

[ReferenceError: window is not defined](https://github.com/webpack-contrib/mini-css-extract-plugin/issues/173#issuecomment-398144318)

- Q2
```bash
Invalid configuration object. Webpack has been initialised using a configuration object that does not match the API schema.
 - configuration.module.rules[0].oneOf[3].use should be one of these:
   non-empty string | function | object { ident?, loader?, options?, query? } | function | [non-empty string | function | object { ident?, loader?, options?, query? }]
```
![q2](./screenshots/q2.png)

解决办法: 配置的`loader`中类型不对

- Q3
```bash
error TS5042: Option 'project' cannot be mixed with source files on a command line.
```
![q3](./screenshots/q3.png)

解决办法: ![a3](./screenshots/a3.png)

- Q4
```bash
/usr/local/lib/node_modules/@commitlint/cli/lib/cli.js:119
        throw err;
        ^

Error: Recieved '.git/COMMIT_EDITMSG' as value for -E | --env, but environment variable '.git/COMMIT_EDITMSG' is not available globally
    at getEditValue (/usr/local/lib/node_modules/@commitlint/cli/lib/cli.js:271:10)
    at normalizeFlags (/usr/local/lib/node_modules/@commitlint/cli/lib/cli.js:264:15)
    at /usr/local/lib/node_modules/@commitlint/cli/lib/cli.js:126:11
    at new Promise (<anonymous>)
    at main (/usr/local/lib/node_modules/@commitlint/cli/lib/cli.js:123:9)
    at Object.<anonymous> (/usr/local/lib/node_modules/@commitlint/cli/lib/cli.js:115:1)
    at Module._compile (internal/modules/cjs/loader.js:776:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:787:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
husky > commit-msg hook failed (add --no-verify to bypass)
```

![q4-1](./screenshots/q4-1.png)
![q4-2](./screenshots/q4-1.png)

解决办法: 删除`commit-msg`中的`$`

![a4](./screenshots/a4.png)

- Q5
```bash
Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.
```

[解决办法](https://github.com/pedronauck/docz/issues/707):

1. Add .docz to .gitignore
2. In frontend folder, rm -rf node_modules package-lock.json .docz
3. In frontend folder, npm i
4. In frontend folder, docz dev

- Q6

`npm publish`

**402问题**

![npm-publish-402](./screenshots/q6-1.png)

```bash
npm ERR! publish Failed PUT 402
npm ERR! code E402
npm ERR! You must sign up for private packages : @zc/rmc-ui
```

解决办法:

```
npm publish --access=public
```

**[403 问题](https://stackoverflow.com/questions/55241605/npm-publish-to-private-scope-keeps-failing)**

```bash
npm ERR! publish Failed PUT 403
npm ERR! code E403
npm ERR! You cannot publish over the previously published versions: 0.0.1. : @zc/rmc-ui
```
[officially documented](https://docs.npmjs.com/files/package.json)

- Q7 
```bash
npm ERR! Unexpected end of JSON input while parsing near '...SoPR2sY8DfKnMMMkN/Zj9'

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\chao\AppData\Roaming\npm-cache\_logs\2019-08-03T10_33_18_238Z-debug.log
```

解决办法:

```bash
npm cache clean --force
```

- Q8

**Jest**

```bash
SyntaxError: Unexpected token export
```

[解决办法](https://github.com/facebook/jest/issues/2550#issuecomment-457828783):
1. Install latest Jest 24 (with better Babel 7 support)
2. yarn add --dev jest babel-jest @babel/core 
3. Make sure you use babel.config.js for Babel config
4. Remove "transform" from Jest config because it's covered by "react-native" preset
```javascript
-    "transform": {
-      "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
-      "^.+\\.jsx?$": "babel-jest"
-    }
```

```bash
SyntaxError: Invalid or unexpected token @import
```

解决办法:
新建`__mocks__`文件夹，该文件夹下新建`styleMock.js`, 

```javascipt
module.exports = {};
```

配置[jest.config.js](https://jestjs.io/docs/en/configuration.html)

```javascipt
module.exports = {
  rootDir: '.',
  moduleFileExtensions: [
    'ts',
    'tsx',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  transformIgnorePatterns: [
    '/node_modules/(?!transpile-me|transpile-me-too).+(ts|tsx)$'
  ],
  testRegex: '.*\\.test\\.tsx$',
  collectCoverage: false,
  collectCoverageFrom: [
    'components/**/*',
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.ts",
    "\\.(css|less|scss)$": "<rootDir>/__mocks__/styleMock.ts"
  },
  // transform: {
  //   "^.+\\.(tsx|tx)$": "babel-jest"
  // },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']  
};
```
