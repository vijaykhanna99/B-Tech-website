"use client";

import React from 'react';
import Link from 'next/link';
import styles from './faculty.module.css';

const FacultyAdvisors = () => {
    const faculty = [
        {
            role: "Dean, Undergraduate Program",
            name: "Prof. Prabal K. Maiti",
            department: "Physics",
            image: "https://iisc.ac.in/wp-content/uploads/2024/06/Prabal-Kumar-Maiti-photo-259x300.png",
            link: "https://physics.iisc.ac.in/~maiti/",
            description: ""
        },
        {
            role: "Associate Dean, Undergraduate Program (B.Tech)",
            name: "Prof. Srikanth Krishnan Iyer",
            department: "Mathematics",
            image: "https://iisc.ac.in/wp-content/uploads/2022/01/skiyer-1.jpg",
            link: "https://math.iisc.ac.in/~skiyer/",
            description: "Oversees the academic framework of the B.Tech program in collaboration with departmental faculty advisors."
        }
    ];

    const advisors = [
        {
            name: "Prof. V.R. Sastry",
            department: "Mechanical Engineering",
            image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
            link: "#"
        },
        {
            name: "Prof. K.V.S. Hari",
            department: "ECE",
            image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
            link: "https://ece.iisc.ac.in/~hari/"
        },
        {
            name: "Prof. U. Ramamurty",
            department: "Materials Engineering",
            image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
            link: "#"
        },
        {
            name: "Prof. G. Rangarajan",
            department: "Mathematics",
            image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
            link: "https://math.iisc.ac.in/~rangaraj/"
        }

    ];

    return (
        <div className={styles.container}>


            {/* Deans Section */}
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
                                <Link href={person.link} target="_blank" className={styles.deanLink}>
                                    {person.name}
                                </Link>
                            </h2>
                            <p className={styles.deanRole}>{person.role}</p>
                            <p className={styles.deanDept}>{person.department}</p>
                            <p className={styles.deanDesc}>{person.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Advisors Grid */}
            <h2 className={styles.sectionTitle}>Faculty Advisors</h2>
            <div className={styles.advisorsGrid}>
                {advisors.map((advisor, index) => (
                    <div key={index} className={styles.advisorCard}>
                        <div className={styles.advisorImageWrapper}>
                            <img
                                src={advisor.image}
                                alt={advisor.name}
                                className={styles.advisorImage}
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';
                                }}
                            />
                        </div>
                        <h3 className={styles.advisorName}>
                            <Link href={advisor.link} target="_blank" className={styles.advisorLink}>
                                {advisor.name}
                            </Link>
                        </h3>
                        <p className={styles.advisorDept}>{advisor.department}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FacultyAdvisors;
