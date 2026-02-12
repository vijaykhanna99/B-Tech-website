'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Newsreader, Space_Grotesk } from 'next/font/google';
import styles from './page.module.css';
import { fellowshipsData } from '../../data/fellowships';

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

// Mock data for Institutional Support
const supportData = [
    {
        id: 'infra-fund',
        title: 'Infrastructure Development Fund',
        description: 'Supporting the construction of state-of-the-art academic blocks and residential facilities.',
        icon: '🏗️',
        accent: '#0891b2' // Cyan
    },
    {
        id: 'research-labs',
        title: 'Advanced Research Laboratories',
        description: 'Funding for establishing high-performance computing clusters and specialized experimental labs.',
        icon: '🔬',
        accent: '#7c3aed' // Violet
    },
    {
        id: 'faculty-excellence',
        title: 'Faculty Excellence Grants',
        description: 'Endowments to attract and retain world-class faculty through research grants and chair professorships.',
        icon: '👨‍🏫',
        accent: '#be123c' // Rose
    },
    {
        id: 'campus-green',
        title: 'Green Campus Initiative',
        description: 'Investments in sustainable energy, water conservation, and eco-friendly campus landscaping.',
        icon: '🌿',
        accent: '#059669' // Emerald
    },
    {
        id: 'smart-classrooms',
        title: 'Smart Classroom Project',
        description: 'Modernizing lecture halls with advanced audio-visual aids and hybrid learning capabilities.',
        icon: '🖥️',
        accent: '#d97706' // Amber
    },
    {
        id: 'innovation-hub',
        title: 'Innovation & Incubation Hub',
        description: 'Supporting deep-tech startups and student-led innovations through seed funding and mentorship.',
        icon: '🚀',
        accent: '#2563eb' // Blue
    }
];

const FellowshipsSupportPage = () => {
    const [activeTab, setActiveTab] = useState<'fellowships' | 'support'>('fellowships');

    return (
        <div className={`${styles.pageWrapper} ${spaceGrotesk.variable} ${newsreader.variable}`}>
            {/* Hero Banner */}
            <div className={styles.heroSection}>
                <div className={styles.heroOverlay} />
                <Image
                    src="/banner_hq_2.jpg" // Reusing existing banner
                    alt="IISc Campus"
                    fill
                    priority
                    style={{ objectFit: 'cover', zIndex: 0 }}
                    sizes="100vw"
                />
                <div className={styles.heroContent}>
                    <h1 className={styles.heroHeading}>Fellowships & Institutional Support</h1>
                    <p className={styles.heroSubtitle}>
                        Empowering the IISc community through student fellowships, infrastructure development, and academic excellence initiatives.
                    </p>
                </div>
            </div>

            <main className={styles.container}>
                {/* Tabs Navigation */}
                <div className={styles.tabsContainer}>
                    <button
                        className={`${styles.tabButton} ${activeTab === 'fellowships' ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab('fellowships')}
                    >
                        Student Fellowships
                    </button>
                    <button
                        className={`${styles.tabButton} ${activeTab === 'support' ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab('support')}
                    >
                        Institutional Support
                    </button>
                </div>

                {/* Tab Content: Fellowships */}
                {activeTab === 'fellowships' && (
                    <div className={`${styles.listSection} ${styles.tabContent}`}>
                        {fellowshipsData.map((fellowship, index) => {
                            const isClickable = fellowship.hasDetailPage || fellowship.externalLink;
                            const rowClassName = `${styles.rowLink} ${isClickable ? styles.isClickable : ''}`;

                            const RowContent = (
                                <div
                                    className={styles.row}
                                    style={{
                                        '--accent': fellowship.accent,
                                        animationDelay: `${index * 0.05}s`,
                                    } as React.CSSProperties}
                                    data-item-index={index}
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
                                        <div className={styles.arrow} style={{ background: `${fellowship.accent}10`, color: fellowship.accent }}>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14" />
                                                <path d="m12 5 7 7-7 7" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            );

                            if (fellowship.externalLink) {
                                return (
                                    <Link
                                        key={fellowship.slug}
                                        href={fellowship.externalLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={rowClassName}
                                    >
                                        {RowContent}
                                    </Link>
                                );
                            }

                            if (fellowship.hasDetailPage) {
                                return (
                                    <Link
                                        key={fellowship.slug}
                                        href={`/fellowships-support/${fellowship.slug}`}
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
                )}

                {/* Tab Content: Institutional Support */}
                {activeTab === 'support' && (
                    <div className={`${styles.listSection} ${styles.tabContent}`}>
                        {supportData.map((item, index) => (
                            <div
                                key={item.id}
                                className={styles.supportCard}
                                style={{
                                    borderLeftColor: item.accent
                                }}
                            >
                                <div className={styles.supportContent}>
                                    <div
                                        className={styles.iconBox}
                                        style={{ background: `${item.accent}15`, color: item.accent }}
                                    >
                                        <span className={styles.iconEmoji}>{item.icon}</span>
                                    </div>
                                    <div className={styles.mainInfo}>
                                        <h3 className={styles.supportTitle}>{item.title}</h3>
                                        <p className={styles.supportDesc}>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};

export default FellowshipsSupportPage;
