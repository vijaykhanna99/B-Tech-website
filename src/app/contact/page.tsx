"use client";

import React from 'react';
import styles from './contact.module.css';
import { useLanguage } from '@/context/LanguageContext';

const ContactPage = () => {
    const { t } = useLanguage();

    return (
        <div className={styles.pageContainer}>
            {/* Header Section */}
            <div className={styles.headerSection}>
                <h1 className={styles.title}>{t('contactPageTitle')}</h1>
                <p className={styles.subtitle}>
                    {t('contactPageSubtitle')}
                </p>
            </div>

            <div className={styles.contentWrapper}>
                <div className={styles.splitLayout}>
                    {/* Left Column: Contact Cards */}
                    <div className={styles.leftColumn}>

                        {/* Card 1: Admission Queries */}
                        <div className={styles.contactCard}>
                            <div className={styles.cardHeader}>
                                <div className={`${styles.iconBox} ${styles.iconBoxBlue}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div className={styles.cardTitle}>{t('admissionQueries')}</div>
                            </div>

                            {/* Timings Box */}
                            <div className={styles.timingsBox}>
                                <div className={styles.clockIcon}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className={styles.timingsLabel}>{t('timings')}</div>
                                    <div className={styles.timingsValue}>{t('timingsValue')}</div>
                                </div>
                            </div>

                            {/* Section 1: Programme Related Queries */}
                            <div className={styles.querySection}>
                                <div className={styles.sectionTitle}>{t('progQueries')}</div>

                                <div className={styles.fieldGroup}>
                                    <div className={styles.fieldLabel}>{t('telephoneNumber')}</div>
                                    <div className={styles.phoneRow}>
                                        <span className={styles.fieldValue} style={{ color: '#64748b' }}>{t('primaryNo')}</span>
                                        <a href="tel:08022934060" className={styles.fieldValue}>080 2293 4060</a>
                                    </div>
                                    <div className={styles.phoneRow}>
                                        <span className={styles.fieldValue} style={{ color: '#64748b' }}>{t('alternativeNo')}</span>
                                        <div className={styles.fieldValue}>
                                            <a href="tel:08022933379">080 2293 3379</a> / <a href="tel:08022933388">3388</a>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.fieldGroup}>
                                    <div className={styles.fieldLabel}>{t('emailId')}</div>
                                    <div className={styles.fieldValue}>
                                        <a href="mailto:admission.ug@iisc.ac.in">admission.ug@iisc.ac.in</a>
                                    </div>
                                </div>
                            </div>

                            {/* Section 2: Fees Related Queries */}
                            <div className={styles.querySection}>
                                <div className={styles.sectionTitle}>{t('feesQueries')} <span style={{ fontSize: '0.9rem', fontWeight: '400', color: '#64748b' }}>{t('feesNote')}</span></div>

                                <div className={styles.fieldGroup}>
                                    <div className={styles.fieldLabel}>{t('telephoneNumber')}</div>
                                    <div className={styles.fieldValue}>
                                        <a href="tel:08022932977">080 2293 2977</a>
                                    </div>
                                </div>

                                <div className={styles.fieldGroup}>
                                    <div className={styles.fieldLabel}>{t('emailId')}</div>
                                    <div className={styles.fieldValue}>
                                        <a href="mailto:admission.acad@iisc.ac.in">admission.acad@iisc.ac.in</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Other Contact Details */}
                        <div className={styles.contactCard}>
                            <div className={styles.cardHeader}>
                                <div className={`${styles.iconBox} ${styles.iconBoxPurple}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className={styles.cardTitle}>{t('otherContactDetails')}</div>
                            </div>

                            <div className={styles.officialsGrid}>
                                {/* Official 1 */}
                                <div>
                                    <div className={styles.officialTitle}>{t('deanUGStudies')}</div>
                                    <div className={styles.officialAddress}>
                                        {t('instituteName')}<br />
                                        {t('bangalorePin')}
                                    </div>
                                    <div className={styles.fieldLabel}>{t('emailLabel')}</div>
                                    <div className={styles.fieldValue}>
                                        <a href="mailto:office.ugdean@iisc.ac.in">office.ugdean@iisc.ac.in</a>
                                    </div>
                                </div>

                                {/* Official 2 */}
                                <div>
                                    <div className={styles.officialTitle}>{t('assistantRegistrar')}<br />{t('academicLabel')}</div>
                                    <div className={styles.officialAddress}>
                                        {t('instituteName')}<br />
                                        {t('bangalorePin')}
                                    </div>
                                    <div className={styles.fieldLabel}>{t('emailLabel')}</div>
                                    <div className={styles.fieldValue}>
                                        <a href="mailto:ar.acad@iisc.ac.in">ar.acad@iisc.ac.in</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Map */}
                    <div className={styles.mapContainer}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3551525287383!2d77.56477127599723!3d13.013063687306067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17d74e1d6e3d%3A0xd64ce6e9b380484!2sIndian%20Institute%20of%20Science%20(IISc)%20Bengaluru!5e0!3m2!1sen!2sin!4v1706689123456!5m2!1sen!2sin"
                            className={styles.mapFrame}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Indian Institute of Science Bangalore - Campus Map"
                            aria-label="Google Map showing the location of Indian Institute of Science, Bangalore"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
