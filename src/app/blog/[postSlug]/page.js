import { getPostSlugs, getSinglePost } from "../../../lib/posts";

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

    const postData = await getSinglePost(params.postSlug);

    return (
        <>
            <article style={{ paddingTop:'110px' }}>
            <section className="container">
                <div>
                    <h1>{postData.title}</h1>

                    <div dangerouslySetInnerHTML={{ __html: postData.excerpt }} className="relative z-10 text-left text-slate-200 text-2xl pl-4 border-l-4 border-lime-200"/>
                </div>
            </section>
            <section className="content-area py-8">
                <div dangerouslySetInnerHTML={{ __html: postData.content }} className="post-content container lg:max-w-4xl mx-auto"/>
            </section>
        </article>

        </>
    );
}