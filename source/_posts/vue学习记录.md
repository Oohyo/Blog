---
title: '一个简易多栏tab组件,以及npm发布'
comments: true
date: 2018-05-01 00:00:00
tags: [vue,js,npm]
categories: 学习笔记
---
## 介绍

之前h5移动端项目有一个顶部tab栏的组件,那个是基于jq的各种操作dom,现在项目用vue重构,所以便想用vue重构下这个组件.

## 思路

1. 先理清需求,把需要自定义配置的参数列出来(tab栏数量,tab栏文字,active颜色,tab栏点击事件..)
2. 在App.vue里将需要的参数传入组件,在组件内用数据渲染成需要的结构
3. 最后再完善样式 
<!-- more -->
## 使用

- 安装
```bash
npm install mm-vue-tab 
```

- 引用
```javascript
import Vue from 'vue'
import Tab from 'mm-vue-tab'
Vue.use(Tab); 
```

- 使用demo
```html
<mm-vue-tab :options="option">
    <div slot="bd-1">...</div>
    <div slot="bd-2">...</div>
</mm-vue-tab>
```
```javascript
option:{
    name: ['导航一','导航二'],   //导航名称
    lineColor: '',              //默认 #f95d5b
    slotName: ['bd-0','bd-1'],  //插槽名称
    tabClick:function(){        //触发导航
        console.log('click tab')
    }
} 
```

## 踩坑

1. 关于npm发布,需要先将项目打包到lib,并且配置好package.json

    "private": false, //设置为开源
    "main": "lib/index.js" //打包路径

2. 如果你切换过npm源,发布的时候需要在npm login前切换回来.

3. 在你决定正式发布之前应该在本地写demo测试几遍

## 附录

[Demo](http://ofj8a2i7u.bkt.clouddn.com/image/demo.gif)
[源码](https://github.com/er567/mm-vue-tab)