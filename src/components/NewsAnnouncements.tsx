"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './NewsAnnouncements.module.css';
import { useLanguage } from '@/context/LanguageContext';

const NewsAnnouncements = () => {
    const { t } = useLanguage();
    const [expandedId, setExpandedId] = useState<number | null>(null);

    // Helper to format date relative to today
    // We use a state to store formatted dates to avoid hydration mismatch
    const [formattedDates, setFormattedDates] = useState<Record<string, string>>({});

    useEffect(() => {
        const calculateDisplayDate = (dateString: string) => {
            const inputDate = new Date(dateString);
            const today = new Date();
            const yesterday = new Date();
            yesterday.setDate(today.getDate() - 1);

            const isSameDay = (d1: Date, d2: Date) => {
                return d1.getDate() === d2.getDate() &&
                    d1.getMonth() === d2.getMonth() &&
                    d1.getFullYear() === d2.getFullYear();
            };

            if (isSameDay(inputDate, today)) {
                return t('today');
            } else if (isSameDay(inputDate, yesterday)) {
                return t('yesterday');
            } else {
                return dateString;
            }
        };

        const newFormattedDates: Record<string, string> = {};
        [...newsItems, ...announcements].forEach(item => {
            newFormattedDates[item.date] = calculateDisplayDate(item.date);
        });
        setFormattedDates(newFormattedDates);
    }, [t]); // Recalculate if language changes

    const getDisplayDate = (dateString: string) => {
        return formattedDates[dateString] || dateString;
    };

    const newsItems = [
        {
            id: 0,
            date: 'August 01, 2023',
            title: t('newsTitle1'),
            excerpt: t('newsExcerpt1')
        },
        {
            id: 1,
            date: 'January 28, 2026',
            title: t('newsTitle2'),
            excerpt: t('newsExcerpt2')
        },
        {
            id: 2,
            date: 'January 15, 2026',
            title: t('newsTitle3'),
            excerpt: t('newsExcerpt3')
        },
        {
            id: 3,
            date: 'December 10, 2025',
            title: t('newsTitle4'),
            excerpt: t('newsExcerpt4')
        }
    ];

    const announcements = [
        {
            id: 1,
            date: 'February 01, 2026',
            title: t('announceTitle1'),
            excerpt: t('announceExcerpt1'),
            link: 'https://josaa.nic.in/'
        },
        {
            id: 2,
            date: 'February 01, 2026',
            title: t('announceTitle2'),
            excerpt: t('announceExcerpt2'),
            link: '#'
        },
        {
            id: 3,
            date: 'December 20, 2025',
            title: t('announceTitle3'),
            excerpt: t('announceExcerpt3'),
            link: 'https://occap.iisc.ac.in/'
        },
        {
            id: 4,
            date: 'January 01, 2026',
            title: t('announceTitle4'),
            excerpt: t('announceExcerpt4'),
            link: 'https://www.pravega.in/'
        }
    ];

    const toggleExpand = (id: number) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <section className={styles.container}>
            <h2 className={styles.heading}>{t('latestNewsAnnouncements')}</h2>

            <div className={styles.contentWrapper}>
                {/* News Section */}
                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>{t('latestNews')}</h3>
                    <ul className={styles.newsList}>
                        {newsItems.map(item => (
                            <li key={item.id} className={styles.newsItem}>
                                <span className={styles.date}>{getDisplayDate(item.date)}</span>
                                <Link href="#" className={styles.link}>
                                    {item.title}
                                </Link>
                                <p className={styles.excerpt}>{item.excerpt}</p>
                            </li>
                        ))}
                    </ul>
                    <span className={`${styles.viewAll} ${styles.disabled}`}>
                        {t('viewAllNews')} &rarr;
                    </span>
                </div>

                {/* Announcements Section */}
                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>{t('announcements')}</h3>
                    <ul className={styles.announcementList}>
                        {announcements.map(item => (
                            <li key={item.id} className={styles.announcementItem} onClick={() => toggleExpand(item.id)}>
                                <div className={styles.clickableHeader}>
                                    <div>
                                        <span className={styles.date}>{getDisplayDate(item.date)}</span>
                                        <div className={styles.link} style={{ cursor: 'pointer' }}>
                                            {item.title}
                                        </div>
                                    </div>
                                    <span className={`${styles.chevron} ${expandedId === item.id ? styles.rotated : ''}`}>
                                        ▼
                                    </span>
                                </div>
                                {expandedId === item.id && (
                                    <div className={styles.accordionContent}>
                                        <p className={styles.excerpt}>{item.excerpt}</p>
                                        {item.link && item.link !== '#' && (
                                            <Link href={item.link} className={styles.visitLink} target="_blank">
                                                {t('visitWebsite')} &rarr;
                                            </Link>
                                        )}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                    <span className={`${styles.viewAll} ${styles.disabled}`}>
                        {t('viewAllAnnouncements')} &rarr;
                    </span>
                </div>
            </div>
        </section>
    );
};

export default NewsAnnouncements;
