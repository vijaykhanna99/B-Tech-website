"use client";

import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';

const TeamVicharakaNews = () => {
    return (
        <main className={styles.container}>
            <header className={styles.headerContent}>
                <h1 className={styles.title}>Team Vicharaka Secures Strong Finish at International Rover Challenge (IRC) 2026 Finals</h1>
                <span className={styles.date}>January 28, 2026</span>
            </header>

            {/* Hero Image - Group Photo */}
            <div className={styles.heroSection}>
                <Image
                    src="/images/news/vicharaka/team_group.jpg"
                    alt="Team Vicharaka group photo at IRC 2026"
                    width={1400}
                    height={800}
                    className={styles.heroImage}
                    priority
                />
            </div>

            <div className={styles.mainLayout}>
                {/* Text Content Column */}
                <div className={styles.textContent}>
                    <p className={styles.paragraph}>
                        Team Vicharaka, the undergraduate rover team at IISc, achieved an impressive milestone at the International Rover Challenge (IRC) 2026 Finals, securing 15th place among 33 finalist teams from around the world. Participating in their first major international competition, the team demonstrated strong technical capability and resilience on a global stage.
                    </p>
                    <p className={styles.paragraph}>
                        The rover received special appreciation from the international jury for its robust mechanical design and an advanced 6 Degrees-of-Freedom (6 DOF) robotic arm, highlighting the engineering excellence of the IISc undergraduate community. Despite the challenges and pressures that come with debuting at an international event, the team showcased remarkable determination and proved the growing strength of student-led innovation at IISc.
                    </p>
                    <p className={styles.paragraph}>
                        Team Vicharaka expressed sincere gratitude to the Undergraduate Programme and the institute for their continued support. Energized by this experience, the team is now focused on further advancing their design and aims to elevate IISc’s presence even higher in future international competitions.
                    </p>
                </div>

                {/* Sidebar - Outdoor Action Shot */}
                <aside className={styles.sideGallery}>
                    <div className={styles.sideImageWrapper}>
                        <Image
                            src="/images/news/vicharaka/rover_outdoor.jpg"
                            alt="Vicharaka Rover navigating the competition terrain"
                            width={500}
                            height={700}
                            className={styles.sideImage}
                        />
                    </div>
                </aside>
            </div>

            {/* Bottom Gallery - Stage Photo & Arm Detail */}
            <div className={styles.bottomGallery}>
                <div className={styles.bottomImageWrapper}>
                    <Image
                        src="/images/news/vicharaka/team_stage.jpg"
                        alt="Team Vicharaka receiving recognition on stage"
                        width={800}
                        height={500}
                        className={styles.sideImage}
                    />
                </div>
                <div className={styles.bottomImageWrapper}>
                    <Image
                        src="/images/news/vicharaka/rover_arm.jpg"
                        alt="Close to of the Vicharaka Rover 6-DOF robotic arm"
                        width={800}
                        height={500}
                        className={styles.sideImage}
                    />
                </div>
            </div>
        </main>
    );
};

export default TeamVicharakaNews;
