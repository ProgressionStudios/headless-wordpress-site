import { getSinglePage } from "../../lib/pages";
import parse from 'html-react-parser';
import seoStringParser from "../../lib/utilities/seoStringParser";
import PageTitle from "../../components/PageTitle";
import ContactForm from "../../lib/forms/ContactForm7";
import GoogleMapComponent from '../../lib/utilities/GoogleMap';
import { Suspense } from 'react';

import styles from "../../styles/content/contactPage.module.css";


export default async function Page() {
    const pageData = await getSinglePage('contact-us');

    return (
        <main className="globalMain">
            <PageTitle titleField={pageData.title} subField={pageData.progressionStudiosSubTitle} featuredimg={pageData.featuredImage?.node?.mediaItemUrl ?? ''} />
            <div className={styles.containerContact}>
                <div className={styles.googleMap}>
                    <Suspense fallback={null}>
                        <GoogleMapComponent />
                    </Suspense>
                </div>
                <div className={styles.contactContainer}>
                    <ContactForm />
                </div>
            </div>
        </main>
    );
}

export async function generateMetadata() {
    const seoData = await getSinglePage('contact-us');

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