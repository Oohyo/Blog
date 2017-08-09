---
title: 'BFC'
date: 2017-08-01 13:00:00
tags: [css,布局]
categories: 学习笔记
---

&#160; &#160; &#160; &#160;前段时间,在写一个积分规则的静态页面时(如图),想了一下便用了最容易想到的方法实现了...之后code review的时候便被指了出来= = 因为前面有一个点,然后下面一行需要和第一行的文字对齐,便选择用白点占位...

**效果图:** 

![pic](http://otzmem48k.bkt.clouddn.com/imgs/pointrules/point.png) 

**代码:**  

![pic](http://otzmem48k.bkt.clouddn.com/imgs/pointrules/code.png)

&#160; &#160; &#160; &#160;显然这么写是不行的,增加了许多没意义的标签,可维护性也不好!整个文本就应该用一个标签包起来,这样也方便维护,所以就了解到了BFC(块级格式化上下文)

<!-- more -->

### 1、触发BFC的条件

    float元素；
    overflow:auto,scroll,hidden,
    display :inline-block,table,table-caotion
    position:absolute,fixed 

### 2、布局规则 

* 里面元素不影响外面，完全独立
* 从上到下，同一父BFC内margin重叠
* BFC不与浮动元素重叠，浮动参与高度计算、
* 内部BFC margin 贴紧 外部border 左或右

**注意:** 在这里是用到了第3条.overflow:hidden触发了BFC,导致自己内部浮动元素高度参与计算,从而避免了高度塌陷.

**改完之后:**

    <ul>
        <li>
            <i class="dot"></i>
            <div>积分金额指有效真实消费，仅计算使用现金、信用卡、借记卡、步步高商务卡付款等实际付款金额。</div>
        </li>
        <li>
            <i class="dot"></i>
            <div>健身卡、课程卡、礼品卡、购买商务卡、优惠券（代金券）等礼券类付款部分、促销活动立减部分及积分抵扣部分、特殊品牌（详见门店公告）不参与积分。</div>
        </li>
    </ul> 

前面的dot需要浮动,文本段加上overflow:hidden即可
    
### 总结 

&#160; &#160; &#160; &#160;平时写代码的时候最好不要图快,抱着实现就可以了的想法,做到扩展性强,可读性好,方便维护.