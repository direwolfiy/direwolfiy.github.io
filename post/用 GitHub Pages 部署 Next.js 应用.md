---
title: 用 GitHub Pages 部署 Next.js 应用
description: 外网技术博客翻译
date: 2022-02-02
tags:
    - next.js
    - deploy
    - REACT
    - github pages
---

原文链接：[Deploying a Next.js app to GitHub Pages](https://dev.to/jameswallis/deploying-a-next-js-app-to-github-pages-24pn)

*“这篇博客是系列的一部分，这个系列文档说明如何用 Next.js 框架重构依赖于HTML，CSS 和 Bootstrap 的网页，形成更便捷的工作流，减少重复工作的消耗”*


> ## 2021更新
> 我已经把 Wallis Consultancy 从 GitHub Pages迁移到了Vercel.[我发了一篇文章说明我这么做的动机，你可以在这里看。](https://dev.to/jameswallis/launching-my-personal-next-js-site-on-vercel-in-less-than-a-minute-296h)实际上，Next.js 和 Vercel 结合得比 Github Pages更好。我在 GitHub Pages 上为这篇博客保留了一个版本的 Wallis Consultancy，并且更新了下面的所有指向 Wallis Consultancy 的链接。尽管如此，GitHub Pages 仍然 100% 是一个部署Next.js项目非常好的地方!

完成的网页（部署在 GitHub Pages 上）: [https://james-wallis.github.io/wallisconsultancy](https://james-wallis.github.io/wallisconsultancy)

源代码：[https://github.com/james-wallis/wallisconsultancy](https://github.com/james-wallis/wallisconsultancy)

用 Next.js 重新实现 Wallis Consultancy 已经完成了。这篇博文记录了将一个 Next.js 项目部署到 GitHub Pages.

包括:
- 用`next export`将 Next.js 项目转换成静态网页。
- 搭建一个 Travis 管道来构建网页并自动 push 到`gh-pages`分支

## 技术概述
### GitHub Pages
> GitHub Pages 提供静态网站部署服务，直接从 GitHub 仓库获取 HTML,CSS 和 JavaScript 文件，通过构建程序选择文件运行来发布网站。

[GitHub Pages](https://pages.github.com/)
### Travis
> Travis CI 是一个托管的持续集成服务，用于构建和测试托管在 GitHub 和 Bitbucket 的软件项目。
服务对开源项目是免费的，并且自动与 Github 集成。你所需要做的就是注册并添加一个`.travis.yml`文件就可以使用了。

[Travis CI](https://travis-ci.org/)
### Next.js export
> `next export`允许你将 next.js 应用导出成静态HTML，从而脱离 Node.js 服务独立运行。它将 HTML 生成到`out`目录中。在这里你可以使用诸如[serve](https://www.npmjs.com/package/serve)之类的工具来运行你的应用程序。

现在，我们已经介绍了本博客中使用的技术，让我们把我们的 Next.js 应用程序部署到 GitHub Pages。

## 创建 Travis build
关联 Travis 与一个 Github 仓库其实只需要配置一个`.travis.yml`文件。下面对这个过程以及如何设置 Travis build 环境变量进行了说明。
- 在你的 Github 仓库顶级顶级目录中创建一个`.travis.yml`文件
- 在文件中输入下面的代码（无需注释）：

```
language: node_js # Node.js based project
node_js:
  - 12 # Level of Node.js to use
cache:
  directories:
  - node_modules # Cache the node_modules folder for quicker build times
script:
  - npm run build # Runs next build
  - npm run export # Runs next export and generates the out directory
  - touch out/.nojekyll # Creates a file telling Github not to build the project using Jekyll
deploy:
  provider: pages # Informs Travis this is a deployment to GitHub Pages
  skip_cleanup: true # Prevents Travis from resetting the working directory made during the build
  github_token: $github_token # GitHub access token to use when pushing to the gh-pages branch
  local_dir: out # Directory to push to the gh-pages branch
  on:
    # Only deploy when the build is on master or main branch - two common default branch names
    # If you're using a different branch name, add it here
    all_branches: true
    condition: $TRAVIS_BRANCH =~ ^(master|main)$
```

在[official Travis Github Pages docs](https://docs.travis-ci.com/user/deployment-v2/providers/pages/)获取更多信息

一旦你向仓库中添加了`.travis.yml`文件，你需要向你的 Travis CI 设置中添加`github_token`变量。

- 首先根据说明获取一个 API token([Creating a personal access token - GitHub Docs](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)*注意:*因为我写这篇文章时我的仓库是非公开的，因此我启用了全部的`repo`scope。但是你可能只需要启用`public_repo`scope

![The Full GitHub repo scope](https://simonsayspic-1308039338.cos.ap-nanjing.myqcloud.com/pic/ogiqsi8d63glc59p6a4g.jpg)

- 在浏览器中打开`https://travis-ci.com/github/[your_username]/[your_repository]`
- 导航至更多选项（more options）-设置(setting)

![Travis Settings](https://simonsayspic-1308039338.cos.ap-nanjing.myqcloud.com/pic/av9vyftpt2sl5t843fph.png)

- 一旦添加了新的叫做`github_token`的`environment variable`并且用你的 access token 作为`value`。选择性地使它只在 master branch 上可见。
- 现在你已经配置好了 Travis 设置和`.travis.yml`，你已经可以启动你的第一个 Travis build了。想要启动，你只需发布你的新`.travis.yml`到你的master branch 它就会自动启动。如果你之前做过这个，那就从Travis-ci UI 为 master 启动一个新的 build.
- Phew(好可爱的语气词)，虽然配置很多，但已经完成了。接下来设置 GitHub Pages，然后就可以看到网站了。
## 设置 GitHub Pages
至此，Travis 构建应该已经成功完成，并在你的仓库中创建了`gh-page`分支。这意味着静态网站代码已经可以使用了，只需要 GitHub Pages 之类的地方提供服务。

![You should be able to see the gh-pages branch](https://simonsayspic-1308039338.cos.ap-nanjing.myqcloud.com/pic/08rfqglhw7huf4r0036u.jpg)

为你的仓库启用 GitHub Pages 你需要做:
- 导航至你 Github 仓库的设置标签页
- 滚动至 GitHub Pages 章节
- 在 Source 版块下选择`gh-pages` branch

![The GitHub Pages settings](https://simonsayspic-1308039338.cos.ap-nanjing.myqcloud.com/pic/oaq9ld9k5ucazxsu30np.jpg)

稍等片刻后，你应该就能通过 GitHub 提供的 URL 访问你的网站了（如果不行，返回到上面的 Travis-CI 步骤）。要在 GitHub Pages 部署静态页面，我们所需要做的就这么多了。

是。。。这样吗

## 有点儿问题...CSS 样式哪去了
如果你跟着上面的步骤下来，你期望看到你的网站和本地看到的一样。
 实际上你很可能看到一个内容正确，但是没有样式的网站。并且，如果你想在导航之间切换，它将无法正确解析。它看起来是下面这个样子:

 ![Wallis Consultancy website without the CSS](https://simonsayspic-1308039338.cos.ap-nanjing.myqcloud.com/pic/flj94q6oybmv6rxlbclr.png)

### 想知道为什么会这样？
next.js 期望所有的 CSS，JavaScript 和图片文件都被部署在`user.github.io/`，但因为我们用的是 GitHub Pages，网站会被部署在一个子路径上，在我的例子中是`user.github.io/wallisconsultancy`。这就导致了网站没法找到它的依赖文件或是指向其他页面的连接。

你可以在本地运行<code>next export</code>对齐进行重现，用[serve](https://www.npmjs.com/package/serve)来为你输出目录（通常是 out）的父级目录提供服务。对我来说就是`serve wallisconsultancy`，因为最终输出目录`wallisconsultancy/out`.

### 好吧，但是我们能解决这个问题吗？

当然可以!

*注意*:如果你是要部署在一个自定义域名上，这个问题就会自己消失（只要你不用像 GitHub Pages  一样的子路径。跳过这篇文章剩余的内容直接看我的下一篇文章:[用自定义域名访问 GitHub Pages](https://dev.to/jameswallis/using-a-custom-domain-with-github-pages-1g1m)

（先翻译到这，看看实际部署会不会遇到这个问题。）
2022.1.28

## 目前没有发现这个同样的问题。 -2022 年 2 月 2 日 21:21