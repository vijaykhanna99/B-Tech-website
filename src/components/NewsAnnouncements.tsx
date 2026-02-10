"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './NewsAnnouncements.module.css';

const NewsAnnouncements = () => {
    // Current date logic
    // Helper to format date relative to today
    const getDisplayDate = (dateString: string) => {
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
            return "Today";
        } else if (isSameDay(inputDate, yesterday)) {
            return "Yesterday";
        } else {
            return dateString;
        }
    };

    const newsItems = [
        {
            id: 2,
            date: 'February 05, 2026',
            title: 'New Suggested Electives Introduced for MnC Students',
            excerpt: 'A new set of suggested electives has been added to the Mathematics & Computing programme, enabling students to pursue diverse academic interests and emerging topics. Students can now view the updated elective options in the course structure.',
            link: '/programs/mathematics-and-computing'
        },
        {
            id: 1,
            date: 'January 28, 2026',
            title: 'Team Vicharaka Secures Strong Finish at International Rover Challenge (IRC) 2026 Finals',
            excerpt: 'Team Vicharaka, the undergraduate rover team at IISc, achieved an impressive milestone at the IRC 2026 Finals, securing 15th place among 33 finalist teams...',
            link: '/news/team-vicharaka'
        },
        {
            id: 0,
            date: 'August 01, 2023',
            title: 'New Computer Lab Opened for All UG Students',
            excerpt: 'A new state-of-the-art computer lab facility is now open and accessible to all undergraduate students for academic and research purposes.',
            link: '#'
        }
    ];

    const announcements = [
        {
            id: 1,
            // 'Today' - Fixed date so it becomes 'Yesterday' tomorrow
            date: 'February 01, 2026',
            title: '🎓 Admissions for the Academic Year 2026–2027 (Coming Soon)',
            excerpt: 'Admissions for the Bachelor of Technology programmes for the Academic Year 2026–2027 will open soon. Please stay tuned for official updates and announcements through JoSAA.',
            link: 'https://josaa.nic.in/'
        },
        {
            id: 2,
            // 'Today' - Fixed date so it becomes 'Yesterday' tomorrow
            date: 'February 01, 2026',
            title: '🏫 Introduction of New B.Tech Programs (2026–2027)',
            excerpt: (
                <>
                    We are pleased to announce the introduction of new programs under the Bachelor of Technology programme starting from the Academic Year 2026–2027: <strong>Aerospace Engineering, Mechanics and Computing, and Materials Science and Engineering</strong>. These programmes will be offered along with the existing <strong>Mathematics and Computing</strong> programme.
                </>
            ),
            link: '#'
        },
        {
            id: 4,
            date: 'January 01, 2026',
            title: '🚀 Annual Tech Symposium “Pravega” – Schedule Released',
            excerpt: 'The schedule for the Annual Technical Symposium “Pravega” has been released. Students are invited to visit the official event website for details on sessions, workshops, competitions, and registrations.',
            link: 'https://www.pravega.in/'
        },
        {
            id: 3,
            date: 'December 20, 2025', // User said "December 2025", setting specific day to parse correctly
            title: '🌞 Applications Open: Summer Internship Programme 2026',
            excerpt: 'Applications are now open for the Summer Internship Programme 2026. Eligible students are encouraged to apply through the official application portal.',
            link: 'https://occap.iisc.ac.in/'
        }
    ];

    const [expandedId, setExpandedId] = useState<number | null>(null);

    const toggleExpand = (id: number) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <section className={styles.container}>
            <h2 className={styles.heading}>Latest News & Announcements</h2>

            <div className={styles.contentWrapper}>
                {/* News Section */}
                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>Latest News</h3>
                    <ul className={styles.newsList}>
                        {newsItems.map(item => (
                            <li key={item.id} className={styles.newsItem}>
                                <span className={styles.date}>{getDisplayDate(item.date)}</span>
                                <Link href={item.link} className={styles.link}>
                                    {item.title}
                                </Link>
                                <p className={styles.excerpt}>{item.excerpt}</p>
                            </li>
                        ))}
                    </ul>
                    <span className={`${styles.viewAll} ${styles.disabled}`}>
                        View All News &rarr;
                    </span>
                </div>

                {/* Announcements Section */}
                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>Announcements</h3>
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
                                            <Link href={item.link} className={styles.visitLink} target="_blank" rel="noopener noreferrer">
                                                Visit Official Website &rarr;
                                            </Link>
                                        )}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                    <span className={`${styles.viewAll} ${styles.disabled}`}>
                        View All Announcements &rarr;
                    </span>
                </div>
            </div>
        </section>
    );
};

export default NewsAnnouncements;
