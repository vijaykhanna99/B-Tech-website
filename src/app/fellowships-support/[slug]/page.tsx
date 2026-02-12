import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getFellowshipBySlug, fellowshipsData } from '../../../data/fellowships';
import styles from './page.module.css';
import FellowshipGallery from './FellowshipGallery';

export async function generateStaticParams() {
    return fellowshipsData
        .filter(f => f.hasDetailPage)
        .map(f => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const fellowship = getFellowshipBySlug(slug);
    if (!fellowship) return { title: 'Fellowship Not Found' };
    return {
        title: `${fellowship.name} | IISc Fellowships`,
        description: fellowship.description,
    };
}

export default async function FellowshipDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const fellowship = getFellowshipBySlug(slug);

    if (!fellowship || !fellowship.hasDetailPage) {
        notFound();
    }

    const accentColor = fellowship.accent || '#2563eb';

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                {/* Back Link */}
                <Link href="/fellowships-support" className={styles.backLink}>
                    ← Back to All Fellowships
                </Link>

                {/* Page Header */}
                <header className={styles.header}>
                    <div className={styles.headerAccent} style={{ background: accentColor }} />
                    <div className={styles.headerBody}>
                        <span className={styles.headerIcon}>{fellowship.icon}</span>
                        <div>
                            <h1 className={styles.title}>{fellowship.name}</h1>
                            <p className={styles.subtitle}>Supported by <strong>{fellowship.donor}</strong></p>
                            <p className={styles.meta}>{fellowship.programme} • {fellowship.status}</p>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <div className={styles.content}>
                    {/* About */}
                    {fellowship.about && (
                        <section className={styles.section}>
                            <h2 className={styles.sectionHeading}>About</h2>
                            <p className={styles.bodyText}>{fellowship.about}</p>
                        </section>
                    )}

                    {/* Eligibility & Entitlements */}
                    {(fellowship.eligibility || fellowship.entitlements) && (
                        <div className={styles.grid2}>
                            {fellowship.eligibility && (
                                <section className={styles.card}>
                                    <div className={styles.cardAccent} style={{ background: '#2563eb' }} />
                                    <h3 className={styles.cardHeading}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                                        Eligibility
                                    </h3>
                                    <ul className={styles.checklist}>
                                        {fellowship.eligibility.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </section>
                            )}
                            {fellowship.entitlements && (
                                <section className={styles.card}>
                                    <div className={styles.cardAccent} style={{ background: '#059669' }} />
                                    <h3 className={styles.cardHeading}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                        Entitlements
                                    </h3>
                                    <ul className={styles.checklist}>
                                        {fellowship.entitlements.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </section>
                            )}
                        </div>
                    )}

                    {/* Grouped Winners (e.g. ITTIAM) */}
                    {fellowship.winnersGrouped && fellowship.winnersGrouped.length > 0 && (
                        <section className={styles.section}>
                            <h2 className={styles.sectionHeading}>Fellowship Recipients</h2>
                            <div className={styles.groupedWinners}>
                                {fellowship.winnersGrouped.map((group, gIdx) => (
                                    <div key={gIdx} className={styles.awardYearBlock}>
                                        <h3 className={styles.awardYearTitle}>{group.awardYear}</h3>
                                        <div className={styles.batchesGrid}>
                                            {group.batches.map((batch, bIdx) => (
                                                <div key={bIdx} className={styles.batchCard}>
                                                    <h4 className={styles.batchName}>{batch.batchName}</h4>
                                                    <ul className={styles.batchNames}>
                                                        {batch.names.map((name, nIdx) => (
                                                            <li key={nIdx}>{name}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Standard Winners Table */}
                    {!fellowship.winnersGrouped && fellowship.winners && fellowship.winners.length > 0 && (
                        <section className={styles.section}>
                            <h2 className={styles.sectionHeading}>Fellowship Recipients</h2>
                            <div className={styles.recipientsLayout}>
                                <div className={styles.recipientsTable}>
                                    <div className={styles.tableHead}>
                                        <span>Year</span>
                                        <span>Recipient</span>
                                    </div>
                                    {fellowship.winners.map((yearGroup, idx) => (
                                        <React.Fragment key={idx}>
                                            {yearGroup.names.map((name, i) => (
                                                <div key={`${idx}-${i}`} className={styles.tableRow}>
                                                    <span className={styles.cellYear}>{yearGroup.year}</span>
                                                    <span className={styles.cellName}>{name}</span>
                                                </div>
                                            ))}
                                        </React.Fragment>
                                    ))}
                                </div>
                                <div className={styles.recipientsGallery}>
                                    <FellowshipGallery winners={fellowship.winners} fellowshipName={fellowship.name} />
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Extra Info */}
                    {fellowship.extraInfo?.map((info, index) => (
                        <section key={index} className={styles.section}>
                            <h2 className={styles.sectionHeading}>{info.title}</h2>
                            <div className={styles.extraLayout}>
                                {info.image && (
                                    <div className={styles.extraImage}>
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src={info.image} alt={info.title} />
                                    </div>
                                )}
                                <p className={styles.bodyText} style={{ whiteSpace: 'pre-line' }}>
                                    {info.content}
                                </p>
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
}
