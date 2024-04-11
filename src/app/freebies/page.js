import { getSinglePage } from "../../lib/pages";
import parse from 'html-react-parser';
import seoStringParser from "../../lib/utilities/seoStringParser";
import PageTitle from "../../components/PageTitle";
import { getFreebiesList } from "../../lib/freebies";
import FreebiesList from "../../components/FreebiesList";
import Sidebar from "../../components/Sidebar";

import styles from "../../styles/content/page.module.css";

export default async function Page() {
    const pageData = await getSinglePage('freebies');
    const initialPosts = await getFreebiesList();

    return (
        <main className={styles.globalMain}>
            <PageTitle titleField={pageData.title} subField={pageData.progressionStudiosSubTitle} featuredimg={pageData.featuredImage?.node?.mediaItemUrl ?? ''} />
            <div className="container">
                <main className="container-flex">
                    <section className="content-with-sidebar">
                        <FreebiesList initialPosts={initialPosts} count={99} />
                    </section>
                    <Sidebar />
                </main>

            </div>
        </main>
    );
}

export async function generateMetadata() {
    const seoData = await getSinglePage('freebies');

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