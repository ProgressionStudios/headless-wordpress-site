import { getSinglePage } from "../lib/pages";
import parse from 'html-react-parser';
import seoStringParser from "../lib/seoStringParser";
import Link from 'next/link';
import { getThemesList } from "../lib/themes";
import OurServices from "../lib/home/OurServices";
import ThemeList from "../components/ThemeList";

import { getPostSlugs } from "../lib/freebies";

import styles from "../styles/pages/page.module.css";

export default async function Home() {
  const initialPosts = await getThemesList();
  
  

  return (
    <main className={styles.globalMain}>
      <div className={styles.hero}>
        <div className="container">
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>WordPress Experts</h1>
            <h2 className={styles.heroSubtitle}>Specializing in developing WordPress Themes on ThemeForest.net</h2>
            <div className="alt-btn xl-btn"><Link href="/portfolio" className="button">Explore Themes</Link></div>
          </div>
        </div>
        <video className={styles.videoBG} playsInline muted autoPlay loop>
          <source src="./video/video.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroOverlay}></div>
      </div>
      <OurServices />
      <div className={styles.eliteSection}>
        <div className="container">
          <div className={styles.eliteGrid}>
            <img
              src="./images/elitelogo.webp"
              alt="Elite Author"
              decoding="async"
              loading="lazy"
            />
            <div>
              <h2>$2+ Million in Sales on ThemeForest</h2>
              <h3>Join over <strong>50,000</strong> happy customers that are already using our services!</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="heading-section-global">
          <h2>WordPress Themes</h2>
          <h3>Check out the latest WordPress Themes created by us.</h3>
        </div>
        <ThemeList initialPosts={initialPosts} count={3} />
        <div className="button-center-grid">
          <Link href="/portfolio" className="button">More Themes</Link>
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