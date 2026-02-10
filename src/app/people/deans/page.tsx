"use client";

import React from 'react';
import Link from 'next/link';
import styles from '../people.module.css';

const DeansPage = () => {
    const faculty = [
        {
            role: "Dean, Undergraduate Program",
            name: "Prof. Prabal K. Maiti",
            program: "Physics",
            image: "https://iisc.ac.in/wp-content/uploads/2024/06/Prabal-Kumar-Maiti-photo-259x300.png",
            link: "https://physics.iisc.ac.in/~maiti/",
            description: ""
        },
        {
            role: "Associate Dean, Undergraduate Program (B.Tech)",
            name: "Prof. Srikanth Krishnan Iyer",
            program: "Mathematics",
            image: "https://iisc.ac.in/wp-content/uploads/2022/01/skiyer-1.jpg",
            link: "https://math.iisc.ac.in/~skiyer/"
        }
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.pageTitle}>Deans</h1>
            <div className={styles.deansGrid}>
                {faculty.map((person, index) => (
                    <div key={index} className={styles.deanCard}>
                        <img
                            src={person.image}
                            alt={person.name}
                            className={styles.deanImage}
                        />
                        <div className={styles.deanInfo}>
                            <h2>
                                <Link href={person.link} target="_blank" rel="noopener noreferrer" className={styles.deanLink}>
                                    {person.name}
                                </Link>
                            </h2>
                            <p className={styles.deanRole}>{person.role}</p>
                            <p className={styles.deanProgram}>{person.program}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DeansPage;
