"use client";

import React from 'react';
import Link from 'next/link';
import styles from './handbook.module.css';

const StudentHandbook = () => {
    const handbooks = [
        {
            year: "2025-26",
            title: "UG Information Handbook",
            description: "Complete scheme of instruction, course details, and academic policies.",
            isLatest: true,
            link: "/UG-HandBook-25-26.pdf"
        },
        {
            year: "2024-25",
            title: "UG Information Handbook",
            description: "Scheme of instruction and policies for the 2024-25 academic session.",
            isLatest: false,
            link: "/UG-Handbook-2024-25-Version-II.pdf"
        }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Student Handbooks</h1>
                <p className={styles.subtitle}>Official academic documents, schemes of instruction, and rulebooks.</p>
            </div>

            <div className={styles.handbookList}>
                {handbooks.map((handbook, index) => (
                    <div key={index} className={styles.handbookCard}>
                        {/* Left Panel - Year & Badge */}
                        <div className={styles.cardLeft}>
                            <div>
                                <div className={styles.yearLabel}>ACADEMIC YEAR</div>
                                <div className={styles.year}>{handbook.year}</div>
                                {handbook.isLatest && (
                                    <span className={styles.latestBadge}>Latest Edition</span>
                                )}
                            </div>
                        </div>

                        {/* Right Panel - Content & Action */}
                        <div className={styles.cardRight}>
                            <div className={styles.cardContent}>
                                <h2 className={styles.cardTitle}>{handbook.title}</h2>
                                <p className={styles.cardDesc}>{handbook.description}</p>
                            </div>

                            <div className={styles.buttonWrapper}>
                                <Link href={handbook.link} className={styles.viewButton} target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    View & Download
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StudentHandbook;
