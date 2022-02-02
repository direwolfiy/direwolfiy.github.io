import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
//import article from "../../styles/trans.module.css";
import utilStyles from "../../styles/utils.module.css";

export default function FirstTrans() {
  return (
    <Layout>
      <Head>
        <title>First Translation</title>
      </Head>

      <div>
        <h1 className={utilStyles.headingLg}>
          用 GitHub Pages 部署 Next.js 应用
        </h1>
        <p className={utilStyles.citation}>
          <span>
            译注：
            <a href="https://dev.to/jameswallis/deploying-a-next-js-app-to-github-pages-24pn">
              原文链接
            </a>
          </span>
          <br />
          <span>最后更新：2022 年 2 月 2 日 22:34:18</span>
        </p>
        <p className={utilStyles.intro}>
          这篇博客是系列的一部分，这个系列文档说明如何用 Next.js 框架重构依赖于
          HTML，CSS 和 Bootstrap 的网页，形成更便捷的工作流，减少重复工作的消耗
        </p>
        <div className={utilStyles.bodyText}>
          {" "}
          {/*文章主体 */}
          <p className={utilStyles.citation}>
            <span className={utilStyles.inlineBold}>2021更新</span>
            <br />
            我已经把 Wallis Consultancy 从 GitHub Pages迁移到了Vercel.
            <a href="https://dev.to/jameswallis/launching-my-personal-next-js-site-on-vercel-in-less-than-a-minute-296h">
              我发了一篇文章说明我这么做的动机，你可以在这里看。
            </a>
            （然而链接已经挂了）实际上，Next.js 和 Vercel 结合得比 Github
            Pages更好。
            <br />
            我在 GitHub Pages 上为这篇博客保留了一个版本的 Wallis
            Consultancy，并且更新了下面的所有指向 Wallis Consultancy 的链接。
            <br />
            尽管如此，GitHub Pages 仍然 100%是一个部署 Next.js项目非常好的地方！
          </p>
          <p>
            完成的网页（部署在 GitHub Pages 上）：
            <br />
            https://james-wallis.github.io/wallisconsultancy/
          </p>
          <p>源代码：https://github.com/james-wallis/wallisconsultancy</p>
          <h2 className={utilStyles.headingMd}>引言</h2>
          <p>
            用 Next.js 重新实现 Wallis Consultancy
            已经完成了。这篇博文记录了将一个 Next.js 项目部署到 GitHub Pages.
            包括：
          </p>
          <ul>
            <li>
              用<code>next export</code>将 Next.js 项目转换成静态网页。
            </li>
            <li>
              搭建一个 Travis 管道来构建网页并 push 到一个<code>gh-pages</code>
              分支
            </li>
          </ul>
          <h2 className={utilStyles.headingMd}>技术概述</h2>
          <h3>GitHub Pages</h3>
          <p className={utilStyles.citation}>
            GitHub Pages 提供静态网站部署服务，直接从 GitHub 仓库获取 HTML,CSS
            和 JavaScript 文件，通过构建程序选择文件运行来发布网站。
          </p>
          <p>
            <a href="https://pages.github.com/">GitHub Pages</a>
          </p>
          <h3>Travis</h3>
          <p className={utilStyles.citation}>
            Travis CI 是一个托管的持续集成服务，用于构建和测试托管在 GitHub 和
            Bitbucket 的软件项目。
            <br />
            服务对开源项目是免费的，并且自动与 Github
            集成。你所需要做的就是注册并添加一个<code>.travis.yml</code>
            文件就可以使用了。
          </p>
          <p>
            <a href="https://travis-ci.org/">Travis CI</a>
          </p>
          <h3>Next.js export 导出</h3>
          <p className={utilStyles.citation}>
            <code>next export</code>允许你将 next.js 应用导出成静态
            HTML，从而脱离 Node.js 服务独立运行。
          </p>
          <p className={utilStyles.citation}>
            它将 HTML 生成到<code>out</code>目录中。在这里你可以使用诸如
            <a href="https://www.npmjs.com/package/serve">serve</a>
            之类的工具来运行你的应用程序。
            现在，我们已经介绍了本博客中使用的技术，让我们把我们的 Next.js
            应用程序部署到 GitHub Pages。
          </p>
          <h2 className={utilStyles.headingMd}>创建 Travis build</h2>
          <p>
            关联 Travis 与一个 Github 仓库就和创建一个<code>.travis.yml</code>
            一样简单。下面对这个过程以及如何通过 Travis build
            用秘密环境变量进行了说明。
          </p>
          <ol>
            <li>
              在你的 Github 仓库顶级顶级目录中创建一个<code>.travis.yml</code>
              文件
            </li>
            <li>在文件中输入下面的代码（无需注释）:</li>
          </ol>
          <p>
            <pre>
              language: node_js # Node.js based project node_js: - 12 # Level of
              Node.js to use cache: directories: - node_modules # Cache the
              node_modules folder for quicker build times script: - npm run
              build # Runs next build - npm run export # Runs next export and
              generates the out directory - touch out/.nojekyll # Creates a file
              telling Github not to build the project using Jekyll deploy:
              provider: pages # Informs Travis this is a deployment to GitHub
              Pages skip_cleanup: true # Prevents Travis from resetting the
              working directory made during the build github_token:
              $github_token # GitHub access token to use when pushing to the
              gh-pages branch local_dir: out # Directory to push to the gh-pages
              branch on: # Only deploy when the build is on master or main
              branch - two common default branch names # If you're using a
              different branch name, add it here all_branches: true condition:
              $TRAVIS_BRANCH =~ ^(master|main)$
            </pre>
          </p>
          <p>
            在
            <a href="https://docs.travis-ci.com/user/deployment-v2/providers/pages/">
              official Travis Github Pages docs
            </a>
            获取更多信息
          </p>
          <ol>
            <li>
              <p>
                一旦你向仓库中添加了<code>.travis.yml</code>文件，你需要向你的
                Travis CI 设置中添加<code>github_token</code>变量。
              </p>

              <ol>
                <li>
                  <p>
                    首先根据说明获取一个 API token(
                    <a href="https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token">
                      Creating a personal access token - GitHub Docs
                    </a>
                    )<em>注意</em>
                    ：因为我写这篇文章时我的仓库是非公开的，因此我启用了全部的
                    <code>repo</code>scope。但是你可能只需要启用
                    <code>public_repo</code>scope
                  </p>

                  <p>
                    <img
                      src="/images/ogiqsi8d63glc59p6a4g.jpg"
                      alt="The Full GitHub repo scope"
                      title=""
                    />
                  </p>
                </li>
                <li>
                  <p>
                    在浏览器中打开
                    <code>
                      https://travis-ci.com/github/[your_username]/
                      [your_repository]
                    </code>
                  </p>
                </li>
                <li>
                  导航至更多选项（more options）-设置(setting)
                  <img
                    src="/images/av9vyftpt2sl5t843fph.png"
                    alt="Travis Settings"
                    title=""
                  />
                </li>
                <li>
                  一旦添加了新的叫做<code>github_token</code>的
                  <code>environment variable</code>并且用你的 access token 作为
                  <code>value</code>。选择性地使它只在 master branch 上可见。
                  <img
                    src="/images/6f84pfcxgpxmo8ccivgz.png"
                    alt="Travis Settings Environment Variable"
                    title=""
                  />
                </li>
              </ol>
            </li>
            <li>
              <p>
                现在你已经配置好了 Travis 设置和<code>.travis.yml</code>
                ，你已经可以启动你的第一个 Travis build
                了。想要启动，你只需发布你的新<code>.travis.yml</code>到你的
                master branch 它就会自动启动。如果你之前做过这个，那就从
                Travis-ci UI 为 master 启动一个新的 build.
              </p>
            </li>
          </ol>
          <p>
            Phew(好可爱的语气词)，虽然配置很多，但已经完成了。接下来设置 GitHub
            Pages，然后就可以看到网站了。
          </p>
          <h2 className={utilStyles.headingMd}>设置 GitHub Pages</h2>
          <p>
            至此，Travis 构建应该已经成功完成，并在你的仓库中创建了
            <code>gh-page</code>分支。这意味着静态网站代码已经可以使用了，只需要
            GitHub Pages 之类的地方提供服务。
          </p>
          <p>
            <img
              src="/images/08rfqglhw7huf4r0036u.jpg"
              alt="You should be able to see the gh-pages branch."
              title=""
            />
          </p>
          <p>为你的仓库启用 GitHub Pages 你需要做：</p>
          <ol>
            <li>导航至你 Github 仓库的设置标签页</li>
            <li>滚动至"GitHub Pages"章节</li>
            <li>
              <p>
                在 Source 版块下选择<code>gh-pages branch</code>
              </p>

              <p>
                <img
                  src="/images/oaq9ld9k5ucazxsu30np.jpg"
                  alt="The GitHub Pages settings"
                  title=""
                />
              </p>
            </li>
          </ol>
          <p>
            稍等片刻后，你应该就能通过 GitHub 提供的 URL
            访问你的网站了（如果不行，返回到上面的 Travis-CI 步骤）。要在 GitHub
            Pages 部署静态页面，我们所需要做的就这么多了。
          </p>
          <p>是。。。这样吗</p>
          <h2 className={utilStyles.headingMd}>有点儿问题...CSS 样式哪去了</h2>
          <p>如果你跟着上面的步骤下来，你期望看到你的网站和本地看到的一样。</p>
          <p>
            但实际上你很可能看到一个内容正确，但是没有样式的网站。并且，如果你想在导航之间切换，它将无法正确解析。它看起来是下面这个样子：
            <img
              src="/images/flj94q6oybmv6rxlbclr.png"
              alt="Wallis Consultancy website without the CSS"
              title=""
            />
          </p>
          <h3>想知道为什么会这样？</h3>
          <p>
            next.js 期望所有的 CSS，JavaScript 和图片文件都被部署在
            <code>user.github.io/</code>，但因为我们用的是 GitHub
            Pages，网站会被部署在一个子路径上，在我的例子中是
            <code>user.github.io/wallisconsultancy</code>
            。这就导致了网站没法找到它的依赖文件或是指向其他页面的连接。
          </p>
          <p>
            你可以在本地运行<code>next export</code>对齐进行重现，用
            <a href="https://www.npmjs.com/package/serve">serve</a>
            来为你输出目录（通常是 out）的父级目录提供服务。对我来说就是
            <code>serve wallisconsultancy</code>，因为最终输出目录是
            <code>wallisconsultancy/out</code>.
          </p>
          <h3>好吧，但是我们能解决这个问题吗？</h3>
          <p>当然可以！</p>
          <p>
            <em>注意</em>
            ：如果你是要部署在一个自定义域名上，这个问题就会自己消失（只要你不用像
            GitHub Pages
            一样的子路径）。跳过这篇文章剩余的内容直接看我的下一篇文章：
            <a href="https://dev.to/jameswallis/using-a-custom-domain-with-github-pages-1g1m">
              用自定义域名访问 GitHub Pages
            </a>
          </p>
          <p>（先翻译到这，看看实际部署会不会遇到这个问题。）</p>
          <p>2022.1.28</p>
          <h2 className={utilStyles.headingMd}>
            目前没有发现这个同样的问题。 -2022 年 2 月 2 日 21:21
          </h2>
        </div>
      </div>
    </Layout>
  );
}
