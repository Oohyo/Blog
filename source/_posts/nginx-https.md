---
title: 'window nginx配置https相关问题'
comments: true
date: 2017-12-11 18:00:01
tags: [前端,nginx]
categories: 学习笔记
---

1. [emerg] BIO_new_file("/usr/local/nginx/conf/cert/214291778530222.pem") failed (SSL: error:02001002:system library:fopen:No such file or directory:fopen('/usr/local/nginx/conf/cert/214291778530222.pem','r') error:2006D080:BIO routines:BIO_new_file:no such file) failed. 

=>原因未知，将证书和key的路径改成相对路径就可以了

2. [emerg] shared zone "SSL" has no equal addresses: 02CC0000 vs 02CB0000

=>错误原因：ssl_protocols SSLv2 SSLv3 TLSv1 应该是协议配置的问题
=>解决办法：ssl_protocols  SSLv3 TLSv1 TLSv1.1 TLSv1.2;

3. 如果是include vhost里的配置，则vhost里的conf配置也要加上listen 443;