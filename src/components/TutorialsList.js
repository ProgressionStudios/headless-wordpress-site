'use client';
import { useState } from "react";
import Link from 'next/link';
import { getTutorialsList } from "../lib/tutorials";

import styles from '../styles/content/TutorialsList.module.css';

export default function TutorialsList({ initialPosts, count, category }) {

    const [posts] = useState(initialPosts);

    // First, filter the posts based on the category.
    const filteredPosts = posts.nodes.filter(post =>
        post.tutorialCategories.edges.some(edge => edge.node.slug === category)
    );

    // Then, determine the number of posts to display, limited by `count`.
    const displayPosts = filteredPosts.slice(0, count);

    // Calculate the display count.
    const displayPostCount = displayPosts.length;

    console.log(getTutorialsList);

    return (
        <div className={styles.tutorialsContainer}>
            <div className={styles.tutorialsCount}>{displayPostCount} Articles</div>
            <div className={styles.divider}></div>
            <ul className={styles.tutorialslist}>
                {displayPosts.map((post) => (
                    <li key={post.slug} className={styles.tutorialsListItem}>
                        <Link href={`/tutorial-item/${post.slug}`} className={styles.themeTitle}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )

}