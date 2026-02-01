"use client";

import React from 'react';
import styles from './DeanMessage.module.css';
import { useLanguage } from '@/context/LanguageContext';

const DeanMessage = () => {
    const { t, language } = useLanguage();

    return (
        <section className={styles.container}>
            <h2 className={styles.heading}>{t('deanTitle')}</h2>

            <div className={styles.contentWrapper}>
                <div className={styles.messageColumn}>
                    <p className={styles.introText}>
                        {t('deanIntro')}
                    </p>
                    <p>
                        {t('deanProgramsPart1')}
                        <span className={styles.highlight}> {t('aeroEng')}</span>,
                        <span className={styles.highlight}> {t('mathComputing')}</span>,
                        <span className={styles.highlight}> {t('mechComputing')}</span>, {language === 'en' ? 'and' : language === 'hi' ? 'और' : 'ಮತ್ತು'}
                        <span className={styles.highlight}> {t('matScience')}</span> {t('deanProgramsPart2')}
                    </p>
                    <p>
                        {t('deanAdvice')}
                    </p>
                    <p className={styles.closingText}>
                        {t('deanClosing')}
                    </p>
                </div>

                <div className={styles.videoColumn}>
                    <div className={styles.videoContainer}>
                        <iframe
                            className={styles.videoFrame}
                            src="https://www.youtube.com/embed/2Pvr06wBOXk?si=kI7OoaxeYw2YM6PE"
                            title="IISc B.Tech Message"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DeanMessage;
