"use client";

import React from 'react';
import Link from 'next/link';
import styles from './admissions.module.css';

const AdmissionsPage = () => {
    const admissionItems = [
        {
            title: "Apply Online",
            description: "Submit your application for the undergraduate program.",
            iconColor: styles.blue,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={styles.icon}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
            ),
            link: "#"
        },
        {
            title: "Important Dates",
            description: "Key deadlines for applications, exams, and admissions.",
            iconColor: styles.orange,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={styles.icon}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
            ),
            link: "#"
        },
        {
            title: "Selection Process",
            description: "Understand the criteria and process for student selection.",
            iconColor: styles.green,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={styles.icon}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
            ),
            link: "#"
        },
        {
            title: "Fee Structure",
            description: "Details on tuition fees, hostel charges, and other expenses.",
            iconColor: styles.pink,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={styles.icon}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
            ),
            link: "#"
        },
        {
            title: "FAQ",
            description: "Frequently asked questions about the B.Tech program.",
            iconColor: styles.purple,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={styles.icon}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
            ),
            link: "#"
        }
    ];

    return (
        <div className={styles.pageWrapper}>
            {/* Full Width Hero Header */}
            <div className={styles.heroHeader}>
                <h1 className={styles.title}>Admissions</h1>
                <p className={styles.subtitle}>
                    All the information you need to join the Bachelor of Technology program at IISc.
                </p>
            </div>

            {/* Content Section with Grid */}
            <div className={styles.contentContainer}>
                <div className={styles.grid}>
                    {admissionItems.map((item, index) => (
                        <Link href={item.link} key={index} className={styles.card}>
                            <div className={`${styles.iconWrapper} ${item.iconColor}`}>
                                {item.icon}
                            </div>
                            <h2 className={styles.cardTitle}>{item.title}</h2>
                            <p className={styles.cardDescription}>{item.description}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdmissionsPage;
