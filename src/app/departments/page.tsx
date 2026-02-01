"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './departments.module.css';
import { useLanguage } from '@/context/LanguageContext';

const DepartmentsPage = () => {
    const { t } = useLanguage();

    return (
        <div className={styles.pageWrapper}>
            {/* Hero Header */}
            <div className={styles.heroHeader}>
                <h1 className={styles.title}>{t('deptTitle')}</h1>
                <p className={styles.subtitle}>
                    {t('deptSubtitle')}
                </p>
            </div>

            {/* Content Section */}
            <div className={styles.contentContainer}>

                {/* Program Overview */}
                <div className={styles.overviewSection}>
                    <h2 className={styles.overviewTitle}>{t('programOverview')}</h2>
                    <p className={styles.overviewText}>
                        {t('programOverviewText')}
                    </p>
                </div>

                {/* Departments Section */}
                <h2 className={styles.sectionHeading}>{t('ourDepartments')}</h2>

                <div className={styles.grid}>
                    <div className={styles.deptList}>
                        {/* Mathematics & Computing */}
                        <Link href="/departments/mathematics-and-computing" className={styles.deptCard}>
                            <div className={styles.cardImageWrapper}>
                                <Image
                                    src="/assets/images/departments/math.png"
                                    alt={t('mathComputing')}
                                    fill
                                    priority
                                    className={styles.cardImage}
                                />
                            </div>
                            <div className={styles.cardContent}>
                                <div className={styles.cardTitle}>{t('mathComputing')}</div>
                                <div className={styles.cardCurriculumLink}>
                                    {t('viewCurriculum')}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" style={{ width: '16px', height: '16px' }}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>

                        {/* Mechanics & Computing */}
                        <Link href="/departments/mechanics-and-computing" className={styles.deptCard}>
                            <div className={styles.cardImageWrapper}>
                                <Image
                                    src="/assets/images/departments/mechanics.png"
                                    alt={t('mechComputing')}
                                    fill
                                    className={styles.cardImage}
                                />
                            </div>
                            <div className={styles.cardContent}>
                                <div className={styles.cardTitle}>
                                    {t('mechComputing')}
                                    <span className={styles.badge}>{t('newBadge')}</span>
                                </div>
                                <div className={styles.cardCurriculumLink}>
                                    {t('viewCurriculum')}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" style={{ width: '16px', height: '16px' }}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>

                        {/* Aerospace Engineering */}
                        <Link href="/departments/aerospace-engineering" className={styles.deptCard}>
                            <div className={styles.cardImageWrapper}>
                                <Image
                                    src="/assets/images/departments/aerospace.png"
                                    alt={t('aeroEng')}
                                    fill
                                    className={styles.cardImage}
                                />
                            </div>
                            <div className={styles.cardContent}>
                                <div className={styles.cardTitle}>
                                    {t('aeroEng')}
                                    <span className={styles.badge}>{t('newBadge')}</span>
                                </div>
                                <div className={styles.cardCurriculumLink}>
                                    {t('viewCurriculum')}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" style={{ width: '16px', height: '16px' }}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>

                        {/* Materials Science */}
                        <Link href="/departments/materials-science-and-engineering" className={styles.deptCard}>
                            <div className={styles.cardImageWrapper}>
                                <Image
                                    src="/assets/images/departments/materials.png"
                                    alt={t('matScience')}
                                    fill
                                    className={styles.cardImage}
                                />
                            </div>
                            <div className={styles.cardContent}>
                                <div className={styles.cardTitle}>
                                    {t('matScience')}
                                    <span className={styles.badge}>{t('newBadge')}</span>
                                </div>
                                <div className={styles.cardCurriculumLink}>
                                    {t('viewCurriculum')}
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

export default DepartmentsPage;
