import parse from 'html-react-parser';
import seoStringParser from "../../lib/seoStringParser";
import { getPageSlugs, getSinglePage } from "../../lib/pages";
import PageTitle from "../../components/PageTitle";

import styles from "../../styles/pages/page.module.css";

export async function generateStaticParams() {
    const pageSlugs = await getPageSlugs();

    const paths = pageSlugs.map((s) => (
        {
            pageSlug: s.slug,
        }
    ));

    return paths;

}

export default async function Page({ params }) {

    const pageData = await getSinglePage(params.pageSlug);

    return (
        <main className={styles.globalMain}>
            <PageTitle titleField={pageData.title} subField={pageData.progressionStudiosSubTitle} />
            
            <section className="content-area py-8">
                <article>
                    <div dangerouslySetInnerHTML={{ __html: pageData.content }} className="post-content container mx-auto lg:max-w-4xl" />
                </article>
            </section>
        </main>
        
    );
}

export async function generateMetadata({ params }) {
    const seoData = await getSinglePage(params.pageSlug);

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