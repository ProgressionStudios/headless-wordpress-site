'use client';
import { useState } from "react";

import styles from '../styles/layout/ThemesList.module.css';

export default function ThemeList({ initialPosts, count }) {

    const [posts] = useState(initialPosts);

    return (
        <main>
            <section>
                <div className={styles.themesContainer}>
                    {
                        posts.nodes.slice(0, count).map((post) => (
                            <div key={post.slug} className={styles.themesGrid}>
                                {post.featuredImage && (
                                    <div className={styles.themesImageContainer}>
                                        <a href={post.progressionStudiosButtonLeftLink} target="_blank" className={styles.themesImageLink}>
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
                                        </a>
                                        <div className={styles.btnOverlay}>
                                            {post.progressionStudiosButtonLeftText && (
                                                <a href={post.progressionStudiosButtonLeftLink} target="_blank">{post.progressionStudiosButtonLeftText}</a>
                                            )}
                                            {post.progressionStudiosButtonRightText && (
                                                <a href={post.progressionStudiosButtonRightLink} target="_blank" className={styles.secondary}>{post.progressionStudiosButtonRightText}</a>
                                            )}
                                        </div>
                                    </div>
                                )}
                                <div className={styles.themesCard}>
                                    <h3 className={styles.themeTitle}>{post.title}</h3>
                                    {post.progressionStudiosSubTitle && (
                                        <h4 className={styles.themeSubtitle}>{post.progressionStudiosSubTitle}</h4>
                                    )}
                                </div>
                            </div>
                        ))
                    }
                </div>

            </section>
        </main>
    )


}