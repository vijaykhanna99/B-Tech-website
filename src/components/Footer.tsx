import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.compactRow}>
                    <p className={styles.copyright}>© 2026 Indian Institute of Science. All rights reserved.</p>
                    <Link href="https://bs-ug.iisc.ac.in/" target="_blank" rel="noopener noreferrer" className={styles.noticeableLink}>
                        Main UG Website <span className={styles.arrow}>→</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
