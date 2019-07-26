# rmc-ui
@react mobile components ui design for study

### origin

- study for design mobile components using react

### plan

- **Branch**

```javascript
master -> framework
components -> components-xxx -> coding for components
release -> lib
```

- **How to design and coding component?**

```javascript
need to suggest
```

- **Other aspects**

```javascript
need to consider
```

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