import Link from 'next/link';

import styles from '../styles/layout/Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.newsletter}>
                <div className="container">
                    <div className={styles.newsleterFlex}>
                        <div>
                            <h3>Newsletter</h3>
                            <h4>Get notified when new themes are released!</h4>
                        </div>
                        <div className={styles.newsletterForm}>
                            MailChimp Component
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className={styles.footerMain}>
                    <h2 className={styles.title}>Let us build your website.</h2>
                    <h3 className={styles.description}>We can help create and update your website. Tell us about your next project.</h3>
                    <Link href="/contact-us" className={styles.button}>
                        <button>
                            Hire us today!
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title id="Email-Icon">Email</title><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
                        </button>
                    </Link>
                </div>
            </div>
            <div className={styles.copyright}>
                <div className="container">
                    Copyright 2008-{new Date().getFullYear()}
                    <span className={styles.divider}></span>
                    All Rights Reserved.
                    <span className={styles.divider}></span>
                    Developed by <Link href="/contact-us">Progression Studios</Link>.
                </div>
            </div>
        </footer>
    );
};

export default Footer;