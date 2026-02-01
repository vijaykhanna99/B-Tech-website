import React from 'react';
import styles from './DeanMessage.module.css';

const DeanMessage = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.heading}>Message from the Dean, Undergraduate Studies</h2>

            <div className={styles.contentWrapper}>
                <div className={styles.messageColumn}>
                    <p className={styles.introText}>
                        Welcome to the Bachelor of Technology programmes.
                    </p>
                    <p>
                        Our B.Tech programmes in
                        <span className={styles.highlight}> Aerospace Engineering</span>,
                        <span className={styles.highlight}> Mathematics and Computing</span>,
                        <span className={styles.highlight}> Mechanics and Computing</span>, and
                        <span className={styles.highlight}> Materials Science and Engineering</span> are designed to build strong fundamentals, encourage curiosity, and promote innovative thinking.
                    </p>
                    <p>
                        As undergraduate students, you are encouraged to actively engage in academics, explore research and interdisciplinary learning, and make the most of the opportunities available on campus. Your time here is not only about gaining technical knowledge, but also about developing problem-solving skills, teamwork, and a sense of responsibility toward society.
                    </p>
                    <p className={styles.closingText}>
                        We hope you use this journey to learn, grow, and shape your future with confidence.
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
