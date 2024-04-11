import { getSinglePage } from "../../lib/pages";
import parse from 'html-react-parser';
import seoStringParser from "../../lib/utilities/seoStringParser";
import PageTitle from "../../components/PageTitle";
import { getTutorialsList } from "../../lib/tutorials";
import TutorialsList from "../../components/TutorialsList";

import styles from "../../styles/content/page.module.css";

export default async function Page() {
    const pageData = await getSinglePage('tutorials');
    const initialPosts = await getTutorialsList();

    return (
        <main className={styles.globalMain}>
            <PageTitle titleField={pageData.title} subField={pageData.progressionStudiosSubTitle} featuredimg={pageData.featuredImage?.node?.mediaItemUrl ?? ''} />
            <div className="container">
                <TutorialsList initialPosts={initialPosts} count={6} />
            </div>
        </main>
    );
}

export async function generateMetadata() {
    const seoData = await getSinglePage('tutorials');

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