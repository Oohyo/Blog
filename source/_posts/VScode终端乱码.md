---
title: '解决 Windows 下 VSCode 运行 Python 程序的中文乱码问题'
comments: true
date: 2017-11-28 18:30:00
tags: [python]
categories: 学习笔记
---

### 原因

Windows 下的 cmd 和 powershell 默认是 GBK 编码显示输出内容， 这导致使用 UTF-8 的 Python 程序中的中文内容（包括注释、文档、和字符串字面量）会以不正确的解码方式输出成乱码内容。

### 解决办法

Windows 内置了一个叫 “chcp” 的命令，它可以修改要显示的字符集编码的编号。UTF-8 的编号是 65001，所以启动 cmd 或者 powershell 以后可以手动输入：chcp 65001来改变编码。 

启动 powershell 的时候带上修改编码的参数: “chcp.com 65001” 即可做到自动设置编码。设置如下:
<!-- more -->
选择：文件 - 首选项 - 用户设置，粘贴下面的配置键值到 json 中保存：

    "terminal.integrated.shellArgs.windows": ["-NoExit", "/c", "chcp 65001"]

但是注意：仅靠修改代码页编号在 cmd 下仍然无法正常显示中文，需要进一步修改字体（有待考证）。
ps:(当我用默认的cmd,没换成poweshell时候,)
所以没有管 cmd 了，因为在 powershell 下是正常的。

**修改 Terminal**

选择：文件 - 首选项 - 用户设置，粘贴下面的配置键值到 json 中保存：

    "terminal.integrated.shell.windows": "C:\\WINDOWS\\sysnative\\WindowsPowerShell\\v1.0\\powershell.exe"

### 附参考链接：

[蓝雨博客](https://blog.bluerain.io/p/Windows-Terminal-Coding.html)