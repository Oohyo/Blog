---
title: 'Python学习笔记(一)'
comments: true
date: 2017-11-24 16:42:00
tags: [python]
categories: 学习笔记
---
### 一、环境搭建

#### 基础环境

https://www.python.org/ 下载python3.x安装包

安装好，并添加至系统环境变量。

#### 虚拟环境virtualenv

1. pip install virtualenv 
2. cd 到一个你想创建的目录路径
3. virtualenv venv 环境名称

### 二、基本语法

python对缩进要求非常严格，

如果格式有误则会抛出类似‘IndentationError: unexpected indent’的错误。

空格与tab不能混用，否则会报错。所以还是用两个空格吧><

<!-- more -->

#### 数字

1. 正常的+，-，*，/，取余%和js都是一样的；
2. 除法（/）永远返回一个浮点数   15/3=5.0
3. 如果想取整可以使用（//）运算符  17//3=5
4. 计算幂乘方使用（\*\*） 5\*\*2=25
5. 交互模式中，最近一个表达式的值会赋给变量（_），这是一个系统内置变量

#### 字符串

1. 和js一样，单引号‘’，双引号“”都可以表示字符串，\ 用来转义。
2. print() 函数生成可读性更好的输出, 它会省去引号并且打印出转义后的特殊字符
3. 如果字符串中的\字符被当作特殊字符，可以使用原始字符串，在第一个引号前加r

\>\>\> print('C:\some\name')  # here \n means newline!
C:\some
ame
\>\>\> print(r'C:\some\name')  # note the r before the quote
C:\some\name

4. 三个引号表示多行字符串文本，行尾的换行符会被自动包含在字符串中，可以在行尾加\来避免换行。
5. 字符串拼接用+，重复字符串用*；

\>\>\> 3 * 'un' + 'ium'
'unununium'

6. python相邻的字符串会自动连接，但字符串和变量不会自动连。

\>\>\> text = ('Put several strings within parentheses '
'to have them joined together.')
\>\>\> text
'Put several strings within parentheses to have them joined together.'

7. 字符串自带索引，左边从0开始，负数则从最后一个字符开始。
8. 字符串自带切片,'Python'[0:2] = 'Py';

s[:i] + s[i:] 永远等于 s ; 'Python'[:2]  + 'Python'[2:]  = 'Python'
9. len(str) 内置函数返回字符串长度