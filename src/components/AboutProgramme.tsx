import React from 'react';
import styles from './AboutProgramme.module.css';

const AboutProgramme = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.heading}>About Programme</h2>

            <div className={styles.contentWrapper}>
                <div className={styles.messageColumn}>
                    <p className={styles.introText}>
                        The Bachelor of Technology (BTech) programme at the Indian Institute of Science offers rigorous, discipline-focused undergraduate education grounded in science, engineering, and computation.
                    </p>
                    <p>
                        Each BTech programme is an independent academic track, enabling students to develop deep expertise in their chosen field from the outset.
                    </p>
                    <p>
                        The four BTech programmes offered are
                        <span className={styles.highlight}> Mathematics and Computing</span>,
                        <span className={styles.highlight}> Mechanics and Computing</span>,
                        <span className={styles.highlight}> Aerospace Engineering</span>, and
                        <span className={styles.highlight}> Materials Science and Engineering</span>.
                    </p>
                    <p>
                        Embedded within IISc’s world-class research environment, the programmes prepare graduates for advanced studies, research, and high-impact careers in engineering and technology.
                    </p>
                </div>

                {/* Video removed as per request */}
            </div>
        </section>
    );
};

export default AboutProgramme;
