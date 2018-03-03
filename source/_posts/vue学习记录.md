---
title: 'vue学习记录'
comments: true
date: 2018-02-15 12:13:14
tags: [vue,js,Mint Ui]
categories: 学习笔记
---

没有先后顺序，想到什么就写什么吧。

#### npm start的时候正常有样式但npm run build之后没有样式

> 原因：样式被覆盖了
> 解决：main.js里将router在引入ui组件之前引入或者组件样式加scoped
> 注意组件嵌套的层级合理布局，最好每个分组组件的样式都独立，公用样式抽离

#### 跳转同一路由不同参数，页面不会刷新

> 原因：组件复用，没有重新加载组件
> 解决：监听路由的变化执行数据变化的时候请求数据的方法，页面初始化的时候也调用一次

```javascript
mounted() {
    this.author = this.$store.state.demo.author;
    this.getTheme(`/${this.$route.params.id}`);
},
methods: {
    getTheme(id) {
        this.$ajax.get(url + id).then(res => {
            //传参或者拼接url 视接口而定
        });
    }
},
beforeRouteUpdate(to, from, next) {
    this.getTheme(`/${to.params.id}`);
    next();
}
```
<!--more-->
#### 组件通信

**1. prop**
添加[sync修饰符](https://cn.vuejs.org/v2/guide/components.html#sync-修饰符)，可以实现子组件修改父组件的值，形成‘双向绑定’
注意：vue版本需2.3.0及以上
```javascript
//父组件 引用sidebar，将showSidebar传给子组件
<sidebar :showSidebar.sync="showSidebar"></sidebar>
//子组件 将改变后的sidebarShow传给父组件
this.$emit("update:showSidebar", this.sidebarShow);
```
**2. $on监听$emit触发**
```javascript
vm.$on('test', function (msg) {
  console.log(msg)
})
vm.$emit('test', 'hi')
// => "hi"
```
**3. var bus = new Vue()**
将事件的绑定和监听都在bus上进行，组件之间可以随意通信。
#### 自定义指令directives（钩子函数及参数）详见官网
 
[钩子函数](https://cn.vuejs.org/v2/guide/custom-directive.html#钩子函数)：bind/inserted/updata/componentUpdated/unbind

[钩子函数参数](https://cn.vuejs.org/v2/guide/custom-directive.html#钩子函数参数)：el/binding(传参对象)/vnode/oldVnode

