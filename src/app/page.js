import { getSinglePage } from "../lib/pages";
import parse from 'html-react-parser';
import seoStringParser from "../lib/seoStringParser";

import styles from "../styles/pages/page.module.css";

export default async function Home() {
  const pageData = await getSinglePage('home');

  return (
    <main className={styles.main}>
      <div className={styles.description}>
          <h1 className="text-6xl text-center text-slate-700 relative py-8">
                        {pageData.title}
                    </h1>
        <div dangerouslySetInnerHTML={{ __html: pageData.content }} className="post-content container mx-auto lg:max-w-4xl" />
        <div>
        </div>
      </div>
    </main>
  );
}

export async function generateMetadata() {
  const seoData = await getSinglePage('home');

  return {
    title: seoData.seo.title,
    description: seoData.seo.metaDesc,
    alternates: {
      canonical: parse(seoStringParser(seoData.seo.canonical)), // Added missing closing parenthesis here
    },
    openGraph: {
      title: seoData.seo.opengraphTitle,
      description: seoData.seo.opengraphDescription,
      url: parse(seoStringParser(seoData.seo.opengraphUrl)),
      siteName: seoData.seo.opengraphSiteName,
      locale: 'en_US',
      type: 'website',
    },
    icons: {
      icon: './fav.webp',
    },
    twitter: {
      title: seoData.seo.title,
      description: seoData.seo.metaDesc,
      creator: 'progression_S'
    }
  }
}