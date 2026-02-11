'use client';

import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import { FellowshipWinner } from '../data';

interface Props {
    winners: FellowshipWinner[];
    fellowshipName: string;
}

export default function FellowshipGallery({ winners, fellowshipName }: Props) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isZoomed, setIsZoomed] = useState(false);

    useEffect(() => {
        if (selectedImage) {
            // Lock scrolling on both html and body to prevent background interaction
            document.documentElement.style.overflow = 'hidden';
            document.body.style.overflow = 'hidden';
            setIsZoomed(false);
        } else {
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
        }
        return () => {
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
        };
    }, [selectedImage]);

    // Check if there are any images to display
    const hasImages = winners.some(g => g.images && g.images.length > 0);
    if (!hasImages) return null;

    return (
        <div className={styles.gallerySection}>
            <div className={styles.galleryGrid}>
                {winners.map((yearGroup) => (
                    yearGroup.images && yearGroup.images.map((img, i) => (
                        <div
                            key={`${yearGroup.year}-${i}`}
                            className={styles.galleryThumbnailWrapper}
                            onClick={() => setSelectedImage(img)}
                            role="button"
                            tabIndex={0}
                            aria-label={`View full size image for ${yearGroup.year}`}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={img}
                                alt={`${fellowshipName} ${yearGroup.year}`}
                                className={styles.galleryShowcaseImage}
                            />
                        </div>
                    ))
                ))}
            </div>

            {selectedImage && (
                <div
                    className={styles.modalOverlay}
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className={styles.modalCloseButton}
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage(null);
                        }}
                        aria-label="Close"
                    >
                        ×
                    </button>

                    <div
                        className={styles.modalContentWrapper}
                        onClick={(e) => {
                            // If clicking on the wrapper background (not image), close the modal
                            // unless we are zoomed, in which case scrolling might be happening
                            if (e.target === e.currentTarget) {
                                setSelectedImage(null);
                            }
                        }}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={selectedImage}
                            alt="Full View"
                            className={`${styles.modalImage} ${isZoomed ? styles.zoomed : ''}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsZoomed(!isZoomed);
                            }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
