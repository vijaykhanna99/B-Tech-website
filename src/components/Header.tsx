"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const [activeMobileSubmenu, setActiveMobileSubmenu] = React.useState<string | null>(null);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        if (!mobileMenuOpen) {
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        } else {
            document.body.style.overflow = '';
        }
    };

    const toggleSubmenu = (menu: string) => {
        setActiveMobileSubmenu(activeMobileSubmenu === menu ? null : menu);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
        setActiveMobileSubmenu(null);
        document.body.style.overflow = '';
    };

    return (
        <header className={styles.header}>
            {/* Top Section */}
            <div className={styles.topBar}>
                {/* Logo Section */}
                <div className={styles.logoSection}>
                    <div className={styles.logoContainer}>
                        <Image
                            src="/iisc_logo.jpg"
                            alt="IISc Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <div className={styles.titleContainer}>
                        <h1 className={styles.title}>
                            Bachelor of Technology
                        </h1>
                        <p className={styles.subtitle}>
                            Indian Institute of Science Bangalore
                        </p>
                    </div>
                </div>

                {/* Right Section: Search & Language */}
                <div className={styles.rightSection}>
                    <div className={styles.searchContainer}>
                        <div className={styles.searchWrapper}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={styles.searchIcon}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search..."
                                className={styles.searchInput}
                            />
                        </div>
                    </div>

                    <div className={styles.langSelector}>
                        <span className={styles.langText}>English</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className={styles.chevronIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Navigation Bar */}
            <nav className={styles.navBar}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <Link href="/" className={styles.navLink}>
                            Home
                        </Link>
                    </li>

                    <li className={styles.navItem}>
                        <span className={styles.navButton}>
                            Programs & Curriculum
                            <svg xmlns="http://www.w3.org/2000/svg" className={styles.chevronIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </span>
                        <div className={styles.dropdownMenu}>
                            <Link href="/programs/mathematics-and-computing" className={styles.dropdownItem}>
                                Mathematics and Computing
                            </Link>
                            <Link href="/programs/mechanics-and-computing" className={styles.dropdownItem}>
                                Mechanics and Computing
                                <span className={styles.badge}>New</span>
                            </Link>
                            <Link href="/programs/aerospace-engineering" className={styles.dropdownItem}>
                                Aerospace Engineering
                                <span className={styles.badge}>New</span>
                            </Link>
                            <Link href="/programs/materials-science-and-engineering" className={styles.dropdownItem}>
                                Materials Science and Engineering
                                <span className={styles.badge}>New</span>
                            </Link>
                        </div>
                    </li>

                    <li className={styles.navItem}>
                        <Link href="/handbook" className={styles.navLink}>
                            Student Handbook
                        </Link>
                    </li>

                    <li className={styles.navItem}>
                        <Link href="/admissions" className={styles.navLink}>
                            Admissions
                        </Link>

                    </li>

                    <li className={styles.navItem}>
                        <Link href="https://odaa.iisc.ac.in/fellowships/" className={styles.navLink} target="_blank" rel="noopener noreferrer">
                            Fellowship
                        </Link>
                    </li>

                    <li className={styles.navItem}>
                        <Link href="https://occap.iisc.ac.in/" className={styles.navLink} target="_blank" rel="noopener noreferrer">
                            Placements
                        </Link>
                    </li>

                    <li className={styles.navItem}>
                        <Link href="/people" className={styles.navButton}>
                            People
                            <svg xmlns="http://www.w3.org/2000/svg" className={styles.chevronIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </Link>
                        <div className={styles.dropdownMenu}>
                            <Link href="/people/deans" className={styles.dropdownItem}>
                                Deans
                            </Link>
                            <Link href="/people/coordinators" className={styles.dropdownItem}>
                                Coordinators
                            </Link>
                            <Link href="/people/ug-instructors" className={styles.dropdownItem}>
                                UG Instructors
                            </Link>
                            <Link href="/people/teaching-assistants" className={styles.dropdownItem}>
                                Teaching Assistants
                            </Link>
                            <Link href="/people/office-staff" className={styles.dropdownItem}>
                                Office Staff
                            </Link>
                        </div>
                    </li>

                    <li className={styles.navItem}>
                        <Link href="/contact" className={styles.navLink}>
                            Contact Us
                        </Link>
                    </li>
                </ul>

                {/* Mobile Hamburger Button */}
                <button
                    className={styles.mobileMenuBtn}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle Menu"
                >
                    {mobileMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: 28, height: 28 }}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: 28, height: 28 }}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>

                <div className={styles.mobileNavContent}>
                    <Link href="/" className={styles.mobileNavItem} onClick={closeMobileMenu}>
                        Home
                    </Link>

                    {/* Programs Mobile Submenu */}
                    <div>
                        <button
                            className={`${styles.mobileSubmenuHeader} ${activeMobileSubmenu === 'programs' ? styles.activeMobileSubmenuHeader : ''}`}
                            onClick={() => toggleSubmenu('programs')}
                        >
                            Programs & Curriculum
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                style={{
                                    width: 20,
                                    height: 20,
                                    transform: activeMobileSubmenu === 'programs' ? 'rotate(180deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.2s'
                                }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div className={`${styles.mobileSubmenuList} ${activeMobileSubmenu === 'programs' ? styles.mobileSubmenuOpen : ''}`}>
                            {/* Removed All Programs link */}
                            <Link href="/programs/mathematics-and-computing" className={styles.mobileSubItem} onClick={closeMobileMenu}>
                                Mathematics and Computing
                            </Link>
                            <Link href="/programs/mechanics-and-computing" className={styles.mobileSubItem} onClick={closeMobileMenu}>
                                Mechanics and Computing
                            </Link>
                            <Link href="/programs/aerospace-engineering" className={styles.mobileSubItem} onClick={closeMobileMenu}>
                                Aerospace Engineering
                            </Link>
                            <Link href="/programs/materials-science-and-engineering" className={styles.mobileSubItem} onClick={closeMobileMenu}>
                                Materials Science and Engineering
                            </Link>
                        </div>
                    </div>

                    <Link href="/handbook" className={styles.mobileNavItem} onClick={closeMobileMenu}>
                        Student Handbook
                    </Link>

                    <Link href="/admissions" className={styles.mobileNavItem} onClick={closeMobileMenu}>
                        Admissions
                    </Link>

                    <Link href="https://odaa.iisc.ac.in/fellowships/" className={styles.mobileNavItem} target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
                        Fellowship
                    </Link>

                    <Link href="https://occap.iisc.ac.in/" className={styles.mobileNavItem} target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
                        Placements
                    </Link>

                    {/* People Mobile Submenu */}
                    <div>
                        <button
                            className={`${styles.mobileSubmenuHeader} ${activeMobileSubmenu === 'people' ? styles.activeMobileSubmenuHeader : ''}`}
                            onClick={() => toggleSubmenu('people')}
                        >
                            People
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                style={{
                                    width: 20,
                                    height: 20,
                                    transform: activeMobileSubmenu === 'people' ? 'rotate(180deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.2s'
                                }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div className={`${styles.mobileSubmenuList} ${activeMobileSubmenu === 'people' ? styles.mobileSubmenuOpen : ''}`}>
                            <Link href="/people/deans" className={styles.mobileSubItem} onClick={closeMobileMenu}>
                                Deans
                            </Link>
                            <Link href="/people/coordinators" className={styles.mobileSubItem} onClick={closeMobileMenu}>
                                Coordinators
                            </Link>
                            <Link href="/people/ug-instructors" className={styles.mobileSubItem} onClick={closeMobileMenu}>
                                UG Instructors
                            </Link>
                            <Link href="/people/teaching-assistants" className={styles.mobileSubItem} onClick={closeMobileMenu}>
                                Teaching Assistants
                            </Link>
                            <Link href="/people/office-staff" className={styles.mobileSubItem} onClick={closeMobileMenu}>
                                Office Staff
                            </Link>
                        </div>
                    </div>

                    <Link href="/contact" className={styles.mobileNavItem} onClick={closeMobileMenu}>
                        Contact Us
                    </Link>
                </div>


            </div>
        </header>
    );
};

export default Header;
