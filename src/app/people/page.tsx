import React from 'react';
import Link from 'next/link';
import styles from './people.module.css';

const PeoplePage = () => {
    const sections = [
        {
            title: "Deans",
            description: "Leadership of the Undergraduate Program.",
            link: "/people/deans",
            icon: "🎓"
        },
        {
            title: "Coordinators",
            description: "Program Coordinators across departments.",
            link: "/people/coordinators",
            icon: "👥"
        },
        {
            title: "UG Instructors",
            description: "Faculty teaching Undergraduate courses.",
            link: "/people/ug-instructors",
            icon: "👨‍🏫"
        },
        {
            title: "Teaching Assistants",
            description: "Teaching Assistants supporting the courses.",
            link: "/people/teaching-assistants",
            icon: "📝"
        },
        {
            title: "Office Staff",
            description: "Administrative support staff.",
            link: "/people/office-staff",
            icon: "🏢"
        }
    ];

    return (
        <div className={styles.container}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1 className={styles.pageTitle} style={{ borderBottom: 'none', marginBottom: '1rem' }}>People</h1>
                <p style={{ color: '#475569', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                    Meet the leadership, faculty, and staff supporting the Bachelor of Technology program.
                </p>
            </div>

            <div className={styles.deansGrid}>
                {sections.map((section, index) => (
                    <Link href={section.link} key={index} style={{ textDecoration: 'none' }}>
                        <div className={styles.deanCard} style={{ flexDirection: 'column', alignItems: 'flex-start', height: '100%' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{section.icon}</div>
                            <div className={styles.deanInfo}>
                                <h2>{section.title}</h2>
                                <p className={styles.deanProgram} style={{ marginTop: '0.5rem' }}>{section.description}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default PeoplePage;
