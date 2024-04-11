import { getPostSlugs, getSinglePost } from "../../../lib/freebies";
import { getSinglePage } from "../../../lib/pages";
import PageTitle from "../../../components/PageTitle";
import Sidebar from "../../../components/Sidebar";

import styles from "../../../styles/content/freebies.module.css";

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
            <div className="container">
                <main className="container-flex">
                    <section className="content-with-sidebar">
                        <div className={styles.freebiesCard}>
                            <div className={styles.freebiesIMG}>
                                <img
                                    width="900"
                                    height="900"
                                    src={postData.featuredImage.node.sourceUrl}
                                    alt={postData.title}
                                    decoding="async"
                                    loading="lazy"
                                    srcSet={postData.featuredImage.node.sourceUrl}
                                    sizes={(postData.featuredImage.node.sizes) ? postData.featuredImage.node.sizes : "(max-width: 900px) 100vw, 900px"}
                                />
                            </div>
                            <div className={styles.freebiesText}>
                                <h2>{postData.title}</h2>
                                {postData.progressionStudiosSubTitle && (
                                    <h3>{postData.progressionStudiosSubTitle}</h3>
                                )}
                                <div dangerouslySetInnerHTML={{ __html: postData.content }} className={styles.content} />
                                {postData.progressionStudiosFileDownload && (
                                    <div>
                                        <a href="{postData.progressionStudiosFileDownload}" target="_blank" className="button">
                                            Download
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" /></svg>
                                        </a>
                                    </div>
                                )}
                            </div>
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