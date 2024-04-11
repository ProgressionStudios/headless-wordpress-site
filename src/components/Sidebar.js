import Image from "next/image";
import { getTutorialsList } from "../lib/tutorials";
import TutorialsSidebar from "./TutorialsSidebar";

import styles from '../styles/layout/Sidebar.module.css';

export default async function Sidebar() {
    const initialPosts = await getTutorialsList();

    return (
        <section className="sidebar-container">
            <div className={styles.sidebarItem}>
                <h2>Latest Tutorials</h2>
                <TutorialsSidebar initialPosts={initialPosts} count={5} />
            </div>

            <div className={styles.advertisement}>
                <a href="https://1.envato.market/x9N9QO" target="_blank">
                    <Image
                        src="/images/aztec-sidebar.webp"
                        alt="Aztec Theme"
                        width={500}
                        height={500}
                        loading="lazy"
                    />
                </a>
            </div>

            <div className={styles.advertisement}>
                <a href="https://1.envato.market/x9N9QO" target="_blank">
                    <Image
                        src="/images/vayvo-advert.webp"
                        alt="Vayvo Theme"
                        width={500}
                        height={500}
                        loading="lazy"
                    />
                </a>
            </div>
        </section>

    )

}