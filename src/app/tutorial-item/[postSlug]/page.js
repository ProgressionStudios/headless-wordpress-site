import { getPostSlugs, getSinglePost } from "../../../lib/tutorials";
import { getSinglePage } from "../../../lib/pages";
import PageTitle from "../../../components/PageTitle";
import Sidebar from "../../../components/Sidebar";
import Link from "next/link";

import styles from "../../../styles/content/tutorialsPost.module.css";

export async function generateStaticParams() {
    const postSlugs = await getPostSlugs();

    const paths = postSlugs.map((s) => (
        {
            postSlug: s.slug
        }
    ));

    return paths
}

export default async function Post({ params }) {

    const pageData = await getSinglePage('tutorials');
    const postData = await getSinglePost(params.postSlug);

    return (
        <main className={styles.globalMain}>
            <PageTitle titleField={pageData.title} subField={pageData.progressionStudiosSubTitle} featuredimg={pageData.featuredImage?.node?.mediaItemUrl ?? ''} />
            <div className="container">
                <main className="container-flex">
                    <section className="content-with-sidebar">
                        <div className={styles.tutorialsSingle}>
                            <h1 className={styles.pageHeading}>{postData.title}</h1>
                            {postData.progressionStudiosSubTitle && (
                                <h3>{postData.progressionStudiosSubTitle}</h3>
                            )}
                            <div dangerouslySetInnerHTML={{ __html: postData.content }} className={styles.content} />
                            <div className={styles.back}><Link href="/tutorials" className="button">Back to  Index</Link></div>
                        </div>
                    </section>
                    <Sidebar />
                </main>

            </div>
        </main>
    );
}



export async function generateMetadata({ params }) {
    const postData = await getSinglePost(params.postSlug);

    return {
        title: postData.title,
        description: postData.seo.metaDesc,
    }
}