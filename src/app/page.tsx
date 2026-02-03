import Image from "next/image";
import styles from "./page.module.css";

import HeroCarousel from "@/components/HeroCarousel";
import AboutProgramme from "@/components/AboutProgramme";

import NewsAnnouncements from "@/components/NewsAnnouncements";

export default function Home() {
    return (
        <main className={styles.main}>
            {/* Hero Section */}
            <div className={styles.hero}>
                {/* Background Image Carousel */}
                <div className={styles.heroBackground}>
                    <HeroCarousel />
                </div>


            </div>

            {/* About Programme & Video Section */}
            <div className={styles.contentSection}>
                <AboutProgramme />
            </div>

            {/* News & Announcements Section */}
            <NewsAnnouncements />
        </main>
    );
}
