import { getPostList } from "../../lib/posts";
import PostList from "../../lib/PostList";

export default async function BlogHome() {

    const initialPosts = await getPostList();

    return (
        <>
            <div>
                <div></div>

                <h1 className="text-6xl text-center text-slate-100 relative z-10 py-8">BLOG</h1>

                <p className="relative z-10 text-center text-slate-200 text-2xl">Read our latest articles</p>

            </div>
            <PostList initialPosts={initialPosts} />
        </>
    );
}