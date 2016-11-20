# react-learning
the learning process of react.
### 种子项目
一个简单的react+webpack的项目，配置参考了[这里](https://github.com/huangtengfei/blog/issues/17)，自己写了一遍，中间碰过的错误不少，最后都解决了，舒畅！！
### 运行方法
> * npm install   //安装依赖
> * npm run dev

### 搭建
> 
 * npm init  //生成package.json文件
 * npm install react react-dom --save-dev //安装react和react-dom依赖
 * npm install webpack webpack-dev-server --save-dev //安装webpack和webpack-dev-server依赖
 * npm install babel-loader babel-core babel-preset-react babel-preset-es2015 --save-dev //安装bebel依赖
 
### 热刷新配置
在`webpack.config.js`文件下的入口文件添加如下代码
```javascript
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        '入口文件'
    ],
```
同时在`package.json`下的`scripts`下添加如下代码
```javascript
  "scripts": {
    "dev": "webpack-dev-server --devtool eval --progress --colors --hot --content-base build"
  },
```
具体配置请看webpack.config.js文件

### 参考
[使用 Webpack 和 ES6 进行 React 开发](https://github.com/huangtengfei/blog/issues/17)
