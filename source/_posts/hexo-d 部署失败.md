---
title: 'hexo--d部署失败'
comments: true
date: 2017-08-10 16:08:00
tags: [hexo,deployer,git ]
categories: 学习笔记
---
## fatal: in unpopulated submodule '.deploy_git' 

> 遇到这个错误首先可以先尝试重新安装hexo-deployer-git依赖

> npm install hexo-deployer-git --save

> 如果还是无法部署，可以尝试将.deploy_git文件夹删除，重新hexo g hexo d
