---
title: 'Linux折腾记录(一)'
comments: true
date: 2018-03-28 22:00:00
tags: [linux,centos,定时任务]
categories: 折腾记录
---
1. linux下安装git环境

  yum -y install git

2. 给git账户配置密钥 //生成密钥:ssh-keygen -t rsa -C "邮箱地址"

  cd ~/.ssh/
  cat id_rsa.pub   //将密钥复制添加到你的git账户

3. clone项目,安装依赖

4. 写python脚本(路径要写绝对路径)

5. 添加定时任务(crontab命令)

6. 执行crond

> 在执行crond 时提示cron: can’t lock /var/run/crond.pid, otherpid may be 2699: Resource temporarily unavailable;
> 解决方案 rm -rf /var/run/crond.pid 
> 重启即可 /etc/init.d/crond restart   