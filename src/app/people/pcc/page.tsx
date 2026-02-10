"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../people.module.css';

const PCCPage = () => {
    const [activeProgram, setActiveProgram] = useState("Mechanics and Computing");

    const pccData = [
        {
            program: "Mathematics and Computing",
            members: [] // To be updated
        },
        {
            program: "Mechanics and Computing",
            members: [
                {
                    name: "Ratnesh K. Shukla",
                    role: "Chair",
                    image: "/images/people/pcc/ratnesh_shukla.jpg",
                    link: "https://mecheng.iisc.ac.in/project/ratnesh-k-shukla/"
                },
                {
                    name: "Koushik Viswanathan",
                    role: "Member",
                    image: "/images/people/pcc/koushik_viswanathan.jpg",
                    link: "https://mecheng.iisc.ac.in/project/koushik-viswanathan/"
                },
                {
                    name: "Ramsharan Rangarajan",
                    role: "Member",
                    image: "/images/people/pcc/ramsharan_rangarajan.jpg",
                    link: "https://mecheng.iisc.ac.in/project/ramsharan-rangarajan/"
                },
                {
                    name: "Aloke Kumar",
                    role: "Member",
                    image: "/images/people/pcc/aloke_kumar.jpg",
                    link: "https://mecheng.iisc.ac.in/project/aloke-kumar/"
                },
                {
                    name: "Himabindu M.",
                    role: "Member",
                    image: "/images/people/pcc/himabindu_m.jpg",
                    link: "https://mecheng.iisc.ac.in/project/himabindu-m/"
                },
                {
                    name: "Navaneetha Krishnan Ravichandran",
                    role: "Member",
                    image: "/images/people/pcc/navaneetha_krishnan.jpg",
                    link: "https://mecheng.iisc.ac.in/project/n-k-ravichandran/"
                },
                {
                    name: "Jishnu Kesavan",
                    role: "Member",
                    image: "/images/people/pcc/jishnu_kesavan.jpg",
                    link: "https://mecheng.iisc.ac.in/project/jishnu-keshavan/"
                },
                {
                    name: "Balachandra Suri",
                    role: "Member",
                    image: "/images/people/pcc/balachandra_suri.jpg",
                    link: "https://mecheng.iisc.ac.in/project/balachandra-suri/"
                }
            ]
        },
        {
            program: "Aerospace Engineering",
            members: [] // To be updated
        },
        {
            program: "Materials Science and Engineering",
            members: [] // To be updated
        }
    ];

    const activeData = pccData.find(d => d.program === activeProgram);

    return (
        <div className={styles.container}>
            <h1 className={styles.pageTitle}>Programme Curriculum Committee (PCC)</h1>

            <p className={styles.deanDesc} style={{ fontSize: '1.1rem', marginBottom: '3rem', fontStyle: 'normal', color: '#475569', textAlign: 'center' }}>
                The Programme Curriculum Committee (PCC) is responsible for the design, development, and periodic review of the undergraduate curriculum for each discipline.
            </p>

            {/* Program Tabs */}
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                justifyContent: 'center',
                marginBottom: '3rem'
            }}>
                {pccData.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveProgram(item.program)}
                        style={{
                            padding: '0.75rem 1.5rem',
                            borderRadius: '9999px',
                            border: `1px solid ${activeProgram === item.program ? '#2563eb' : '#e2e8f0'}`,
                            background: activeProgram === item.program ? '#2563eb' : '#fff',
                            color: activeProgram === item.program ? '#fff' : '#64748b',
                            fontSize: '0.95rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            boxShadow: activeProgram === item.program ? '0 4px 6px -1px rgba(37, 99, 235, 0.2)' : 'none'
                        }}
                    >
                        {item.program}
                    </button>
                ))}
            </div>

            {/* Members Grid */}
            <div>
                {activeData && activeData.members.length > 0 ? (
                    <div className={styles.pccGrid}>
                        {activeData.members.map((member, mIdx) => (
                            <div key={mIdx} className={styles.pccCard}>
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className={styles.pccImage}
                                />
                                <div className={styles.deanInfo}>
                                    <h2>
                                        <Link href={member.link} className={styles.deanLink} target={member.link !== '#' ? "_blank" : "_self"}>
                                            {member.name}
                                        </Link>
                                    </h2>
                                    {member.role !== "Member" && (
                                        <p className={styles.deanRole} style={{ justifyContent: 'center' }}>{member.role}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div style={{
                        textAlign: 'center',
                        padding: '4rem 2rem',
                        background: '#f8fafc',
                        borderRadius: '12px',
                        border: '1px dashed #cbd5e1'
                    }}>
                        <p style={{ color: '#64748b', fontSize: '1.1rem' }}>
                            Committee members for {activeProgram} will be updated soon.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PCCPage;
