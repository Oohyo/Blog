---
title: 'Linux折腾记录(一)'
comments: true
date: 2018-03-28 22:00:00
tags: [linux,centos,定时任务]
categories: 折腾记录
---
起因,想在服务器启一个定时任务,每天晚上9点自动去github上拉取最新的代码,然后vue-build编译,想试试水,弄了一下还是踩了蛮多坑的TAT

**1.linux下安装git环境**

    yum -y install git

**2.给git账户配置密钥 //生成密钥:ssh-keygen -t rsa -C "邮箱地址"**

    cd ~/.ssh/
    cat id_rsa.pub   //将密钥复制添加到你的git账户

**3.clone项目,安装依赖**

**4.写python脚本(路径要写绝对路径)**

**5.添加定时任务(crontab命令)**

**6.执行crond**  

### 遇到的一些问题

#### 1.crontab添加了定时任务之后没有crond start启动

  /sbin/service crond start //启动服务 
  /sbin/service crond stop //关闭服务 
  /sbin/service crond restart //重启服务 
  /sbin/service crond reload //重新载入配置 
  /sbin/service crond status //查看状态

> 在执行crond 时提示cron: can’t lock /var/run/crond.pid, otherpid may be 2699: Resource temporarily unavailable;
> 解决方案 rm -rf /var/run/crond.pid 
> 重启即可 /etc/init.d/crond restart 

#### 2.在定时任务跑python脚本没有环境变量

搜索了一下,采用shell脚本来执行..

#### 3.关于shell脚本

注意要写成绝对路径;注意.sh文件的文件格式(我在window下编辑好上传了一个shell脚本,然后运行报错了,最后发现是文件格式的问题)
可以使用:set ff=unix转换文件格式.