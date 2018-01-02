---
title: 'ibeacons管理后台'
comments: true
date: 2017-11-11 11:11:11
tags: [layui,后台]
categories: 工作笔记
---

&#160; &#160; &#160; &#160;最近写了一个ibeacons管理后台,用到了很多新的东西，也踩了很多坑，就写下来记录回顾一下吧。

**效果图:** 

![pic](https://tu-img-1.aixinxi.net/o_1bvmkgrdh14ls1uuqkmr1n08udja.png-w.jpg) 

<!-- more -->

![pic](https://tu-img-1.aixinxi.net/o_1bvmkgedh17apcrp22m5og1ejba.png-w.jpg) 

![pic](https://t1.aixinxi.net/o_1bvmka53i1to3g4gonbnbmh1aa.png-w.jpg)

### 1、Techniques used

* [layui](http://www.layui.com/) (phper推荐的,mmp)
* [context.js](http://lab.jakiestfu.com/contextjs/) (自定义右键菜单)
* [highcharts](https://www.hcharts.cn/),[echarts](http://echarts.baidu.com/)  (可视化图表)
* 等等还有一些其他东西

### 2、Problem

1. layui自称是一个模块化框架，首先引用它就和我们用的RequireJS模块加载器冲突了。

解决办法：
在app.js里需要配置路径，然后shim导出，然后在文件中还需要配置layui的指向
```javascript
layui.config({
    dir: '//s1.bbgstatic.com/beacon-manager/js/plug/layui/',
    debug: false //
});
```
2. layui里一些东西无法灵活的配置，满足你的需求，这个没办法，不好用就不用呗

3. 柱状图x轴条数过多，倾斜，默认超出会自适应的滚动条的
```javascript
xAxis: {
    min: 0,
    max :10,
    type: 'category',
    labels: {
        rotation: -45,
        style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
        }
    }
}
```
4. 一些正则和逻辑判断，continue break return

```javascript
for(var i in urlData.conf){
    var _weight = urlData.conf[i].urlList[0].weights;
    var _url = urlData.conf[i].urlList[0].url;
    if(_weight==''&&_url==''){//为空就跳过，验证下一行
        continue;
    }else{
        if(_weight<0||_weight>100||!(/^\d+$/.test(_weight))){                                
            weightBoolean = false;break;
        }else{
            weightBoolean = true;
            if(!/https?:\/{2}[^\s]*/.test(_url)){
                urlBoolean = false;break;
            }else{
                urlBoolean = true;continue;
            }
        }
    }
}
```
```javascript
if(!weightBoolean){
    layer.msg('权重请输入1-100的正整数！', { icon: 5})
    return;
}
if(!urlBoolean){
    layer.msg('url格式输入有误，请检查后重新输入！', { icon: 5})
    return;
}
```   
### 总结 

&#160; &#160; &#160; &#160;技术选型很重要，以后不要选layui这种啦。