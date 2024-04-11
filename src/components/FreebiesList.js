'use client';
import { useState } from "react";
import Link from 'next/link';

import styles from '../styles/content/FreebiesList.module.css';

export default function FreebiesList({ initialPosts, count }) {

    const [posts] = useState(initialPosts);

    return (
        <div className={styles.freebiesContainer}>
                    {
                        posts.nodes.slice(0, count).map((post) => (
                            <div key={post.slug} className={styles.tutorialsListItem}>
                                <Link href={`/freebie-item/${post.slug}`} className={styles.themesImageLink}>
                                    <img
                                        width="900"
                                        height="900"
                                        src={post.featuredImage.node.sourceUrl}
                                        alt={post.title}
                                        decoding="async"
                                        loading="lazy"
                                        srcSet={post.featuredImage.node.sourceUrl}
                                        sizes={(post.featuredImage.node.sizes) ? post.featuredImage.node.sizes : "(max-width: 900px) 100vw, 900px"}
                                    />
                                </Link>
                                <div className={styles.freebiesCard}>
                                    <h4><Link href={`/freebie-item/${post.slug}`} className={styles.themeTitle}>{post.title}</Link></h4>
                                    {post.progressionStudiosSubTitle && (
                                        <div>{post.progressionStudiosSubTitle}</div>
                                    )}
                                </div>
                            </div>
                        ))
                    }
                </div>

    )


}