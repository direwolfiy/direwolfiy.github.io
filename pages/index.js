import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>The world is now real because Simon said so.</p>
        <Link href="posts/first-post">
          <a>Read First Post</a>
        </Link>
      </section>
      {/*new post*/}
      <section>
        <h2>2022.02.02</h2>
        <Link href="posts/first-trans">
          <a>用 GitHub Pages 部署 Next.js 应用。</a>
        </Link>
        <p className={utilStyles.sign}>文档翻译</p>
      </section>
    </Layout>
  );
}
