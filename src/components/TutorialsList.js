'use client';
import { useState } from "react";

import styles from '../styles/content/TutorialsList.module.css';

export default function TutorialsList({ initialPosts, count }) {

    const [posts] = useState(initialPosts);

    return (
        <main>
            <section>
                <div className={styles.tutorialsContainer}>
                    {
                        posts.nodes.slice(0, count).map((post) => (
                            <li key={post.slug} className={styles.tutorialsListItem}>
                                <a href="/tutorial-item/{post.slug}" className={styles.themeTitle}>{post.title}</a>
                            </li>
                        ))
                    }
                </div>

            </section>
        </main>
    )


}