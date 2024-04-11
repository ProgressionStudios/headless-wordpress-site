'use client';
import { useState } from "react";

import styles from '../styles/layout/TutorialsSidebar.module.css';

export default function TutorialsSidebar({ initialPosts, count }) {

    const [posts] = useState(initialPosts);

    return (
        <ul className={styles.tutorialsContainer}>
            {
                posts.nodes.slice(0, count).map((post) => (
                    <li key={post.slug} className={styles.tutorialsListItem}>
                        <a href={`/tutorial-item/${post.slug}`} className={styles.themeTitle}>{post.title}</a>
                    </li>
                ))
            }
        </ul>
    )


}