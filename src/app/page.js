import { getSinglePage } from "../lib/pages";
import parse from 'html-react-parser';
import seoStringParser from "../lib/seoStringParser";
import { getThemesList } from "../lib/themes";
import ThemeList from "../lib/ThemeList";

import styles from "../styles/pages/page.module.css";

export default async function Home() {
  const pageData = await getSinglePage('home');
  const initialPosts = await getThemesList();

  return (
    <main className={styles.globalMain}>
      <div className={styles.hero}>
        <div className="container">
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>WordPress Experts</h1>
            <h2 className={styles.heroSubtitle}>Specializing in developing WordPress Themes on ThemeForest.net</h2>
            <div className="alt-btn xl-btn"><a href="/contact-us" className="button">Explore Themes</a></div>
          </div>
        </div>
        <video className={styles.videoBG} playsInline muted autoPlay loop>
          <source src="./video/video.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroOverlay}></div>
      </div>

      <div className={styles.description}>
          <h1 className="text-6xl text-center text-slate-700 relative py-8">
                        {pageData.title}
                    </h1>
        <div dangerouslySetInnerHTML={{ __html: pageData.content }} className="post-content container mx-auto lg:max-w-4xl" />
        <div>
        </div>
      </div>
      <ThemeList initialPosts={initialPosts} count={3} />
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