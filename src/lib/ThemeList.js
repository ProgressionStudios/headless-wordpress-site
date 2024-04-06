'use client';
import { useState } from "react";

export default function ThemeList({ initialPosts, count }) {

    const [posts] = useState(initialPosts);

    return (
        <main>
            <section>
                <ul>
                    {
                        posts.nodes.slice(0, count).map((post) => (
                            <li key={post.slug} className="grid grid-cols-5 gap-4 mb-4">
                                <div className="col-span-2">
                                </div>
                                <div className="col-span-3">
                                    <h2 className="py-4">
                                        {post.title}
                                    </h2>
                                    <ul>
                                        <li>{post.progressionStudiosSubTitle}</li>
                                        <li>{post.progressionStudiosButtonLeftText}</li>
                                        <li>{post.progressionStudiosButtonLeftLink}</li>
                                        <li>{post.progressionStudiosButtonRightText}</li>
                                        <li>{post.progressionStudiosButtonRightLink}</li>
                                    </ul>

                                    <div>
                                        {post.featuredImage && (
                                            <img
                                                width="600"
                                                height="525"
                                                src={post.featuredImage.node.sourceUrl}
                                                alt={post.title}
                                                decoding="async"
                                                loading="lazy"
                                                srcSet={post.featuredImage.node.sourceUrl}
                                                sizes={(post.featuredImage.node.sizes) ? post.featuredImage.node.sizes : "(max-width: 600px) 100vw, 600px"}
                                            />
                                        )}


                                    </div>

                                </div>
                            </li>
                        ))
                    }
                </ul>

            </section>
        </main>
    )


}