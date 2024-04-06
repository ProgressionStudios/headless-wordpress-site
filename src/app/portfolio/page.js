import { getSinglePage } from "../../lib/pages";
import parse from 'html-react-parser';
import seoStringParser from "../../lib/seoStringParser";
import PageTitle from "../../components/PageTitle";
import { getThemesList } from "../../lib/themes";
import ThemeList from "../../lib/ThemeList";

import styles from "../../styles/pages/page.module.css";

export default async function Page() {
    const pageData = await getSinglePage('portfolio');
    const initialPosts = await getThemesList();

    return (
        <main className={styles.globalMain}>
            <PageTitle titleField={pageData.title} subField={pageData.progressionStudiosSubTitle} />
            <div className="container">
                <ThemeList initialPosts={initialPosts} count={99} />
            </div>
        </main>
    );
}

export async function generateMetadata() {
    const seoData = await getSinglePage('portfolio');

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