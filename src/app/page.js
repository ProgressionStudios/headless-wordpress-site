import { getSinglePage } from "../lib/pages";
import parse from 'html-react-parser';
import seoStringParser from "../lib/utilities/seoStringParser";
import Link from 'next/link';
import { getThemesList } from "../lib/themes";
import ThemeList from "../components/ThemeList";

import styles from "../styles/content/page.module.css";

export default async function Home() {
  const initialPosts = await getThemesList();
  
  return (
    <main className={styles.globalMain}>
      <div className={styles.hero}>
        <div className="container">
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>WordPress Experts</h1>
            <h2 className={styles.heroSubtitle}>We build Premium WordPress Themes available on ThemeForest.net</h2>
            <div className="alt-btn xl-btn"><Link href="/portfolio" className="button">Explore Themes</Link></div>
          </div>
        </div>
        <video className={styles.videoBG} playsInline muted autoPlay loop>
          <source src="/video/video.mp4" type="video/mp4" />
        </video>
          <img
            src="/images/mobile-hero.webp"
            alt="WordPress Experts"
            decoding="async"
            width="800"
            height="500"
            rel="preload" 
            type="image/webp"
            as="image"
            className={styles.heroMobile}
          />
        <div className={styles.heroOverlay}></div>
      </div>
      <div className="container">
        <div className="heading-section-global">
          <h2>Recent Themes</h2>
          <h3>Check out the latest WordPress Themes created by us.</h3>
        </div>
        <ThemeList initialPosts={initialPosts} count={3} />
        <div className="button-center-grid">
          <Link href="/portfolio" className="button">More Themes</Link>
        </div>
      </div>
      <div className={styles.eliteSection}>
        <div className="container">
          <div className={styles.eliteGrid}>
            <img
              src="/images/elitelogo.webp"
              alt="Elite Author"
              decoding="async"
              loading="lazy"
              width="125"
              height="124"
            />
            <div>
              <h2>$2+ Million in Sales on ThemeForest</h2>
              <h3>Join over <strong>60,000</strong> happy customers that are already using our services!</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.aboutContainer}>

          <div className={styles.aboutText}>
              <h2>Meet Michael Garcia</h2>
              <h3>About Progression Studios</h3>
              <div className={styles.aboutparagraph}>
              <p>I am Michael Garcia, the creator and owner of Progression Studios. My passion lies in working with WordPress, where I specialize in developing Premium WordPress Themes. </p>
                
              <p>Over the last 13 years, I have dedicated myself to creating themes and plugins for sale on ThemeForest.net. During that time I have attained the status of &quot;Power Elite Author&quot; on ThemeForest with more than 60,000 WordPress Themes sold.</p>

              </div>
          </div>

          <div className={styles.aboutImage}>
            <img
              src="/images/michael.webp"
              alt="Michael Garcia"
              decoding="async"
              loading="lazy"
              width="800"
              height="743"
              rel="preload"
              type="image/webp"
              as="image"
            />
          </div>

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
      icon: '/fav.webp',
    },
    twitter: {
      title: seoData.seo.title,
      description: seoData.seo.metaDesc,
      creator: 'progression_S'
    }
  }
}