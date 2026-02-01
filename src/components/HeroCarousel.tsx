"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './HeroCarousel.module.css';
import { useLanguage } from '@/context/LanguageContext';

const images = [
    "/banner1.jpg",
    "/banner2.png",
    "/banner_hq_1.jpg",
    "/banner_hq_2.jpg"
];

const HeroCarousel = () => {
    const { t } = useLanguage();
    const [currentIndex, setCurrentIndex] = useState(0);

    const slidesContent = [
        {
            title: t('heroTitle1'),
            desc: t('heroDesc1'),
        },
        {
            title: t('heroTitle2'),
            desc: t('heroDesc2'),
        },
        {
            title: t('heroTitle3'),
            desc: t('heroDesc3'),
        },
        {
            title: t('heroTitle1'), // Repeating first logic for now or specific if needed
            desc: t('heroDesc1'),
        }
    ];

    // Auto-rotate every 15 seconds. Resets whenever currentIndex changes (including manual clicks).
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 15000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className={styles.carouselContainer}>
            {images.map((src, index) => (
                <div
                    key={src}
                    className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
                >
                    <Image
                        src={src}
                        alt={`Hero Banner ${index + 1}`}
                        fill
                        style={{ objectFit: 'cover' }}
                        priority={index === 0}
                    />
                </div>
            ))}

            {/* Left Arrow */}
            <button className={`${styles.arrowButton} ${styles.prevButton}`} onClick={goToPrevious} aria-label="Previous Slide">
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.arrowIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            {/* Right Arrow */}
            <button className={`${styles.arrowButton} ${styles.nextButton}`} onClick={goToNext} aria-label="Next Slide">
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.arrowIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Dots Navigation */}
            <div className={styles.dotsContainer}>
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div >
    );
};

export default HeroCarousel;
