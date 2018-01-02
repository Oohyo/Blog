---
title: 'WebPack学习笔记'
comments: true
date: 2017-06-15 16:50:00
tags: [WebPack,js ]
categories: WebPack
---

## 什么是WebPack?

webpack是一个模块打包工具，其可以兼容多种js书写规范，且可以处理模块间的依赖关系，具有更强大的js模块化的功能。

## 为什么是WebPack 

### 1.模块化 

- 将复杂的程序细分成小模块,通过可以将其他资源转换成 JavaScript 的加载器，实现一切皆模块
- 对 CommonJS 、 AMD 、ES6的语法做了兼容，以及特殊模块的 Shim 处理(shim:为那些没有使用define()来声明依赖关系、设置模块的"浏览器全局变量注入"型脚本做依赖和导出配置。) 
- CommonJS模块必须通过 module.exports 导出对外的变量或接口，通过 require() 来导入其他模块的输出到当前模块作用域中
- 异步加载,模块通过 define 函数定义在闭包中,return返回

<!-- more -->

### 2.开发便捷 

- 能替代部分 grunt/gulp 的工作，比如打包、压缩混淆、图片转base64等
- 对 JS、CSS、图片等资源文件都支持打包，配合 loader 加载器，也可以支持 Sass，Less 等 CSS 预处理器
- 串联式模块加载器以及插件机制，让其具有更好的灵活性和扩展性，通过 babel-loader 就可以直接使用 ES6 的模块机制
- 具有强大的 Plugin 接口，大多是内部插件，使用起来比较灵活。 

### 3.性能更优 

- 基于配置智能分析打包多个文件，实现公共模块按需加载
- 在内存中打包，性能更快
- 使用异步io,并具有多级缓存

### 4.区别于gulp&&grunt 

- Grunt和Gulp的工作方式是：在一个配置文件中，指明对某些文件进行类似编译，组合，压缩等任务的具体步骤，这个工具之后可以自动替你完成这些任务。
- Webpack的工作方式是：把你的项目当做一个整体，通过一个给定的主文件（如：index.js），Webpack将从这个文件开始找到你的项目的所有依赖文件，使用loaders处理它们，最后打包为一个浏览器可识别的JavaScript文件

## 文件目录
    |—— app
    |   |—— Greeter.js
    |   |__ main.js
    |   |__ module.js
    |   |__ color.scss
    |   |__ module.js
    |
    |—— public
    |   |—— bundle.js
    |   |__ index.html
    |
    |—— node_modules        //依赖
    |__ package.json        //环境配置
    |__ webpack.config.js   //参数配置

## WebPack安装与配置

    npm install -g webpack              //全局安装
    npm install --save-dev webpack      //当前项目中安装
    npm install                         //安装依赖
    npm install -g webpack-dev-server   //安装webpack开发服务器

## 插件

1.css - ExtractTextPlugin

### WebPack常用命令 

- webpack 最基本的启动webpack命令
- webpack -w 提供watch方法，实时进行打包更新
- webpack -p 对打包后的文件进行压缩
- webpack -d 提供SourceMaps，方便调试
- webpack-dev-server --open 静态资源服务器

## 静态资源服务器
    npm install -g webpack-dev-server   //安装webpack开发服务器 

## 从WebPack 1.X 迁移到 WebPack 2.X

### 1.Resolve
resolve.extensions 不再需要传入空字符串，extensions: ['', 'js'] -> extensions: ['js']。

### 2.Module 取消了在模块名中自动添加 -loader 后缀
module.loaders 修改为 module.rules 。
// 为了兼容旧版，module.loaders 语法仍然有效，旧的属性名依然可以被解析
Loaders 需要添加 -loader，如 babel -> babel-loader 。

    module: {
        rules: [
          {
            use: [
              //"style",
              "style-loader",
              //"css",
              "css-loader",
              //"less",
              "less-loader",
            ]
          }
        ]
      }

### 3.链式 loaders 
与 v1 版本相同，loaders 可以链式调用，上一个 loader 的输出被作为输入传给下一个 loader。使用 rule.use 配置项，use 可以设置为一个 loaders 的列表。在 v1 版本中，loaders 通常被用 ! 连写。这一写法在新版中只在使用旧的 module.loaders 时有效。

### 4.Extract-Text-Webpack-Plugin

    module: {
      rules: [
        test: /.css$/,
         //loader: ExtractTextPlugin.extract("style-loader", "css-loader", { publicPath: "/dist" })
         loader: ExtractTextPlugin.extract({
           fallbackLoader: "style-loader",
           loader: "css-loader",
           publicPath: "/dist"
         })
      ]
    } 

### 567...

## 参考资料

- 官方文档(https://webpack.js.org/guides/get-started/)
- 中文文档(https://doc.webpack-china.org/guides/get-started/)
