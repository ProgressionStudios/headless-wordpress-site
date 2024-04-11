import { getPostSlugs, getSinglePost } from "../../../lib/freebies";
import { getSinglePage } from "../../../lib/pages";
import PageTitle from "../../../components/PageTitle";

import styles from "../../../styles/content/page.module.css";

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

    const pageData = await getSinglePage('freebies');
    const postData = await getSinglePost(params.postSlug);

    return (
        <main className={styles.globalMain}>
            <PageTitle titleField={pageData.title} subField={pageData.progressionStudiosSubTitle} featuredimg={pageData.featuredImage?.node?.mediaItemUrl ?? ''} />
            
            <section className="content-area py-8">
                <article>
                    <h1>{postData.title}</h1>
                </article>
            </section>
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