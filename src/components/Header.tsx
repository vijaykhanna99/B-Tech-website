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
                            Indian Institute of Science
                        </h1>
                        <p className={styles.subtitle}>
                            Bachelor of Technology
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
                        <Link href="/departments" className={styles.navButton}>
                            Departments & Curriculum
                            <svg xmlns="http://www.w3.org/2000/svg" className={styles.chevronIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </Link>
                        {/* Dropdown Content */}
                        <div className={styles.dropdownMenu}>
                            <Link href="/departments/mathematics-and-computing" className={styles.dropdownItem}>
                                Mathematics and Computing
                            </Link>
                            <Link href="/departments/mechanics-and-computing" className={styles.dropdownItem}>
                                Mechanics and Computing
                                <span className={styles.badge}>New</span>
                            </Link>
                            <Link href="/departments/aerospace-engineering" className={styles.dropdownItem}>
                                Aerospace Engineering
                                <span className={styles.badge}>New</span>
                            </Link>
                            <Link href="/departments/materials-science-and-engineering" className={styles.dropdownItem}>
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
                        <Link href="/admissions" className={styles.navButton}>
                            Admissions
                            <svg xmlns="http://www.w3.org/2000/svg" className={styles.chevronIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </Link>
                        {/* Admissions Dropdown */}
                        <div className={`${styles.dropdownMenu} ${styles.dropdownMenuAdmissions}`}>
                            <Link href="#" className={styles.iconDropdownItem}>
                                <div className={`${styles.iconBox} ${styles.iconBoxBlue}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                                </div>
                                Apply Online
                            </Link>
                            <Link href="#" className={styles.iconDropdownItem}>
                                <div className={`${styles.iconBox} ${styles.iconBoxOrange}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                    </svg>
                                </div>
                                Important Dates
                            </Link>
                            <Link href="#" className={styles.iconDropdownItem}>
                                <div className={`${styles.iconBox} ${styles.iconBoxGreen}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                    </svg>
                                </div>
                                Selection Process
                            </Link>
                            <Link href="#" className={styles.iconDropdownItem}>
                                <div className={`${styles.iconBox} ${styles.iconBoxPink}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                                    </svg>
                                </div>
                                Fee Structure
                            </Link>
                            <Link href="#" className={styles.iconDropdownItem}>
                                <div className={`${styles.iconBox} ${styles.iconBoxPurple}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                                    </svg>
                                </div>
                                FAQ
                            </Link>
                        </div>
                    </li>

                    <li className={styles.navItem}>
                        <Link href="https://odaa.iisc.ac.in/fellowships/" className={styles.navLink} target="_blank">
                            Fellowship
                        </Link>
                    </li>

                    <li className={styles.navItem}>
                        <Link href="https://occap.iisc.ac.in/" className={styles.navLink} target="_blank">
                            Placements
                        </Link>
                    </li>

                    <li className={styles.navItem}>
                        <Link href="/faculty-advisors" className={styles.navLink}>
                            Faculty Advisors
                        </Link>
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

                    {/* Departments Mobile Submenu */}
                    <div>
                        <button
                            className={`${styles.mobileSubmenuHeader} ${activeMobileSubmenu === 'departments' ? styles.activeMobileSubmenuHeader : ''}`}
                            onClick={() => toggleSubmenu('departments')}
                        >
                            Departments & Curriculum
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                style={{
                                    width: 20,
                                    height: 20,
                                    transform: activeMobileSubmenu === 'departments' ? 'rotate(180deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.2s'
                                }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div className={`${styles.mobileSubmenuList} ${activeMobileSubmenu === 'departments' ? styles.mobileSubmenuOpen : ''}`}>
                            <Link href="/departments" className={styles.mobileSubItem} onClick={closeMobileMenu}>
                                All Departments
                            </Link>
                            <Link href="/departments/mathematics-and-computing" className={styles.mobileSubItem} onClick={closeMobileMenu}>
                                Mathematics and Computing
                            </Link>
                            <Link href="/departments/mechanics-and-computing" className={styles.mobileSubItem} onClick={closeMobileMenu}>
                                Mechanics and Computing
                            </Link>
                            <Link href="/departments/aerospace-engineering" className={styles.mobileSubItem} onClick={closeMobileMenu}>
                                Aerospace Engineering
                            </Link>
                            <Link href="/departments/materials-science-and-engineering" className={styles.mobileSubItem} onClick={closeMobileMenu}>
                                Materials Science and Engineering
                            </Link>
                        </div>
                    </div>

                    <Link href="/handbook" className={styles.mobileNavItem} onClick={closeMobileMenu}>
                        Student Handbook
                    </Link>

                    {/* Admissions Mobile Submenu */}
                    <div>
                        <button
                            className={`${styles.mobileSubmenuHeader} ${activeMobileSubmenu === 'admissions' ? styles.activeMobileSubmenuHeader : ''}`}
                            onClick={() => toggleSubmenu('admissions')}
                        >
                            Admissions
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                style={{
                                    width: 20,
                                    height: 20,
                                    transform: activeMobileSubmenu === 'admissions' ? 'rotate(180deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.2s'
                                }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div className={`${styles.mobileSubmenuList} ${activeMobileSubmenu === 'admissions' ? styles.mobileSubmenuOpen : ''}`}>
                            <Link href="/admissions" className={styles.mobileSubItem} onClick={closeMobileMenu}>
                                Apply Online
                            </Link>
                            <Link href="#" className={styles.mobileSubItem} onClick={closeMobileMenu}>
                                Important Dates
                            </Link>
                            <Link href="#" className={styles.mobileSubItem} onClick={closeMobileMenu}>
                                Selection Process
                            </Link>
                            <Link href="#" className={styles.mobileSubItem} onClick={closeMobileMenu}>
                                Fee Structure
                            </Link>
                            <Link href="#" className={styles.mobileSubItem} onClick={closeMobileMenu}>
                                FAQ
                            </Link>
                        </div>
                    </div>

                    <Link href="https://odaa.iisc.ac.in/fellowships/" className={styles.mobileNavItem} target="_blank" onClick={closeMobileMenu}>
                        Fellowship
                    </Link>

                    <Link href="https://occap.iisc.ac.in/" className={styles.mobileNavItem} target="_blank" onClick={closeMobileMenu}>
                        Placements
                    </Link>

                    <Link href="/faculty-advisors" className={styles.mobileNavItem} onClick={closeMobileMenu}>
                        Faculty Advisors
                    </Link>

                    <Link href="/contact" className={styles.mobileNavItem} onClick={closeMobileMenu}>
                        Contact Us
                    </Link>
                </div>


            </div>
        </header>
    );
};

export default Header;
