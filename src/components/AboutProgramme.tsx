import React from 'react';
import styles from './AboutProgramme.module.css';

const AboutProgramme = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.heading}>About Programme</h2>

            <div className={styles.contentWrapper}>
                <div className={styles.messageColumn}>
                    <p className={styles.paragraph}>
                        The Bachelor of Technology (BTech) programme at the Indian Institute of Science offers a rigorous, industry-relevant undergraduate education grounded in science, engineering, and computation. Students are well-prepared for professional careers across technology and engineering sectors, while also having opportunities to pursue advanced studies and research as they progress. Located in Bengaluru — one of India’s leading technology and innovation hubs — the programme benefits from strong industry interaction, a vibrant startup ecosystem, and exposure to cutting-edge technological developments.
                    </p>
                    <p className={styles.paragraph}>
                        Each BTech programme is designed as a focused academic pathway, enabling students to develop strong technical skills and practical expertise from the outset. The four BTech programmes offered are <span className={styles.highlight}>Mathematics and Computing</span>, <span className={styles.highlight}>Mechanics and Computing</span>, <span className={styles.highlight}>Aerospace Engineering</span>, and <span className={styles.highlight}>Materials Science and Engineering</span>. Embedded within IISc’s dynamic academic environment, the programmes combine strong fundamentals with hands-on learning, interdisciplinary collaboration, and modern engineering practices to support both career readiness and future academic growth. Students also benefit from access to world-class laboratories, collaborative projects, and a highly research-active campus that fosters innovation, problem-solving, and leadership.
                    </p>
                </div>

                {/* Video removed as per request */}
            </div>
        </section>
    );
};

export default AboutProgramme;
