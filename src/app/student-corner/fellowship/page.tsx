import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Newsreader, Space_Grotesk } from 'next/font/google';
import styles from './page.module.css';
import { fellowshipsData } from './data';

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-display',
    weight: ['400', '500', '600', '700'],
});

const newsreader = Newsreader({
    subsets: ['latin'],
    variable: '--font-body',
    weight: ['300', '400', '500', '600'],
});

const FellowshipPage = () => {
    return (
        <div className={`${styles.pageWrapper} ${spaceGrotesk.variable} ${newsreader.variable}`}>
            {/* Hero Banner — same style as MnC page */}
            <div className={styles.heroSection}>
                <div className={styles.heroOverlay} />
                <Image
                    src="/banner_hq_2.jpg"
                    alt="IISc Campus"
                    fill
                    priority
                    style={{ objectFit: 'cover', zIndex: 0 }}
                    sizes="100vw"
                />
                <div className={styles.heroContent}>
                    <h1 className={styles.heroHeading}>Fellowships</h1>
                    <p className={styles.heroSubtitle}>
                        Supporting academic excellence and empowering the next generation of innovators at IISc.
                    </p>
                </div>
            </div>

            <main className={styles.container}>
                <div className={styles.listSection}>
                    {fellowshipsData.map((fellowship, index) => {
                        const isClickable = fellowship.hasDetailPage || fellowship.externalLink;
                        const rowClassName = `${styles.rowLink} ${isClickable ? styles.isClickable : styles.isStatic}`;

                        const RowContent = (
                            <div
                                className={styles.row}
                                style={{
                                    '--accent': fellowship.accent,
                                    animationDelay: `${index * 0.06}s`,
                                } as React.CSSProperties}
                            >
                                {/* Colored Icon */}
                                <div
                                    className={styles.iconBox}
                                    style={{ background: `${fellowship.accent}15`, color: fellowship.accent }}
                                >
                                    <span className={styles.iconEmoji}>{fellowship.icon}</span>
                                </div>

                                {/* Information Block */}
                                <div className={styles.mainInfo}>
                                    <span className={styles.name}>{fellowship.name}</span>
                                    <span className={styles.donor}>Supported by {fellowship.donor}</span>
                                </div>

                                {/* Arrow */}
                                {isClickable && (
                                    <div className={styles.arrow}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14" />
                                            <path d="m12 5 7 7-7 7" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        );

                        if (fellowship.externalLink) {
                            return (
                                <a
                                    key={fellowship.slug}
                                    href={fellowship.externalLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={rowClassName}
                                >
                                    {RowContent}
                                </a>
                            );
                        }

                        if (fellowship.hasDetailPage) {
                            return (
                                <Link
                                    key={fellowship.slug}
                                    href={`/student-corner/fellowship/${fellowship.slug}`}
                                    className={rowClassName}
                                >
                                    {RowContent}
                                </Link>
                            );
                        }

                        return (
                            <div key={fellowship.slug} className={rowClassName}>
                                {RowContent}
                            </div>
                        );
                    })}
                </div>
            </main>
        </div>
    );
};

export default FellowshipPage;
