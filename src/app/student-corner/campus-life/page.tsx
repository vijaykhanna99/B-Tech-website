import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';

const CampusLifePage = () => {
    // Generate array of image paths from image1.jpg to image23.jpg
    const images = Array.from({ length: 23 }, (_, i) => `/images/campus-life/image${i + 1}.jpg`);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Campus Life at IISc</h1>
            <p className={styles.subtitle}>
                Experience the vibrant atmosphere, academic excellence, and lush greenery that make IISc a unique place to learn and grow.
            </p>

            <div className={styles.galleryGrid}>
                {images.map((src, index) => (
                    <div key={index} className={styles.imageCard}>
                        <div className={styles.imageWrapper} style={{ position: 'relative', width: '100%', height: '100%' }}>
                            <Image
                                src={src}
                                alt={`Campus Life Image ${index + 1}`}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className={styles.img}
                                placeholder="empty" // Since these are local images but downloaded via curl, next/image won't have blur data automatically without import. Sticky with empty for now.
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CampusLifePage;
