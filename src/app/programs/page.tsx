"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './programs.module.css';

const ProgramsPage = () => {
    return (
        <div className={styles.pageWrapper}>
            {/* Hero Header */}
            <div className={styles.heroHeader}>
                <h1 className={styles.title}>Programs & Curriculum</h1>
                <p className={styles.subtitle}>
                    Explore the interdisciplinary programs and academic structure offered by the B.Tech program at IISc.
                </p>
            </div>

            {/* Content Section */}
            <div className={styles.contentContainer}>

                {/* Program Overview */}
                <div className={styles.overviewSection}>
                    <h2 className={styles.overviewTitle}>Program Overview</h2>
                    <p className={styles.overviewText}>
                        The Bachelor of Technology (B.Tech) program at IISc is built upon four distinct and powerful disciplines: Mathematics & Computing, Mechanics & Computing, Aerospace Engineering, and Materials Science. This unique interdisciplinary framework ensures that students receive world-class training across these domains, fostering a deep understanding of both computational sciences and core engineering principles.
                    </p>
                </div>

                {/* Programs Section */}
                <h2 className={styles.sectionHeading}>Available B.Tech Programs</h2>

                <div className={styles.grid}>
                    <div className={styles.programList}>
                        {/* Mathematics & Computing */}
                        <Link href="/programs/mathematics-and-computing" className={styles.programCard}>
                            <div className={styles.cardImageWrapper}>
                                <Image
                                    src="/assets/images/programs/math.png"
                                    alt="Mathematics & Computing"
                                    fill
                                    priority
                                    className={styles.cardImage}
                                />
                            </div>
                            <div className={styles.cardContent}>
                                <div className={styles.cardTitle}>Mathematics & Computing</div>
                                <div className={styles.cardCurriculumLink}>
                                    View Curriculum
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" style={{ width: '16px', height: '16px' }}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>

                        {/* Mechanics & Computing */}
                        <Link href="/programs/mechanics-and-computing" className={styles.programCard}>
                            <div className={styles.cardImageWrapper}>
                                <Image
                                    src="/assets/images/programs/mechanics.png"
                                    alt="Mechanics & Computing"
                                    fill
                                    className={styles.cardImage}
                                />
                            </div>
                            <div className={styles.cardContent}>
                                <div className={styles.cardTitle}>
                                    Mechanics & Computing
                                    <span className={styles.badge}>New</span>
                                </div>
                                <div className={styles.cardCurriculumLink}>
                                    View Curriculum
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" style={{ width: '16px', height: '16px' }}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>

                        {/* Aerospace Engineering */}
                        <Link href="/programs/aerospace-engineering" className={styles.programCard}>
                            <div className={styles.cardImageWrapper}>
                                <Image
                                    src="/assets/images/programs/aerospace.png"
                                    alt="Aerospace Engineering"
                                    fill
                                    className={styles.cardImage}
                                />
                            </div>
                            <div className={styles.cardContent}>
                                <div className={styles.cardTitle}>
                                    Aerospace Engineering
                                    <span className={styles.badge}>New</span>
                                </div>
                                <div className={styles.cardCurriculumLink}>
                                    View Curriculum
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" style={{ width: '16px', height: '16px' }}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>

                        {/* Materials Science */}
                        <Link href="/programs/materials-science-and-engineering" className={styles.programCard}>
                            <div className={styles.cardImageWrapper}>
                                <Image
                                    src="/assets/images/programs/materials.png"
                                    alt="Materials Science"
                                    fill
                                    className={styles.cardImage}
                                />
                            </div>
                            <div className={styles.cardContent}>
                                <div className={styles.cardTitle}>
                                    Materials Science
                                    <span className={styles.badge}>New</span>
                                </div>
                                <div className={styles.cardCurriculumLink}>
                                    View Curriculum
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" style={{ width: '16px', height: '16px' }}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgramsPage;
