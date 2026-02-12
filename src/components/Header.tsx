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
                        <Link href="/admissions" className={styles.navButton}>
                            Admissions
                            <svg xmlns="http://www.w3.org/2000/svg" className={styles.chevronIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </Link>
                        <div className={`${styles.dropdownMenu} ${styles.dropdownMenuAdmissions}`}>
                            <Link href="/admissions/news-and-updates" className={styles.iconDropdownItem}>
                                <div className={`${styles.iconBox} ${styles.iconBoxBlue}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                    </svg>
                                </div>
                                <span>News and Updates</span>
                            </Link>
                            <Link href="/admissions/selection-process" className={styles.iconDropdownItem}>
                                <div className={`${styles.iconBox} ${styles.iconBoxOrange}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <span>Application & Selection Process</span>
                            </Link>
                            <Link href="/admissions/fee-structure" className={styles.iconDropdownItem}>
                                <div className={`${styles.iconBox} ${styles.iconBoxGreen}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <span>Fee Structure</span>
                            </Link>
                            <Link href="/admissions/faqs" className={styles.iconDropdownItem}>
                                <div className={`${styles.iconBox} ${styles.iconBoxPurple}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <span>FAQs</span>
                            </Link>
                        </div>

                    </li>



                    <li className={styles.navItem}>
                        <span className={styles.navButton}>
                            Student Corner
                            <svg xmlns="http://www.w3.org/2000/svg" className={styles.chevronIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </span>
                        <div className={styles.dropdownMenu}>
                            <Link href="/handbook" className={styles.dropdownItem}>
                                Student Handbook
                            </Link>
                            <Link href="/ug_academic_calendar_2026.pdf" className={styles.dropdownItem} target="_blank" rel="noopener noreferrer">
                                Academic Calendar
                            </Link>
                            <Link href="https://occap.iisc.ac.in/" className={styles.dropdownItem} target="_blank" rel="noopener noreferrer">
                                Placements
                            </Link>

                            <Link href="https://scouncil.iisc.ac.in/" className={styles.dropdownItem} target="_blank" rel="noopener noreferrer">
                                Student Council
                            </Link>
                            <Link href="https://iisc.ac.in/about/administration/internal-complaints-committee/" className={styles.dropdownItem} target="_blank" rel="noopener noreferrer">
                                Internal Complaint Committee
                            </Link>
                            <Link href="https://hc.iisc.ac.in/" className={styles.dropdownItem} target="_blank" rel="noopener noreferrer">
                                Health Center
                            </Link>
                            <Link href="https://s4ppas.iisc.ac.in:8081/sap/bc/ui2/flp?sap-client=800&sap-language=EN" className={styles.dropdownItem} target="_blank" rel="noopener noreferrer">
                                SAP
                            </Link>
                            <Link href="/Travelling Allowance Form.pdf" className={styles.dropdownItem} target="_blank" rel="noopener noreferrer">
                                Travelling Allowance Form
                            </Link>
                        </div>
                    </li>



                    <li className={styles.navItem}>
                        <Link href="/fellowships-support" className={styles.navLink}>
                            Fellowships & Support
                        </Link>
                    </li>

                    <li className={styles.navItem}>
                        <Link href="/student-corner/campus-life" className={styles.navLink}>
                            Campus Life
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
                            <Link href="/people/pcc" className={styles.dropdownItem}>
                                PCC (Programme Curriculum Committee)
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
                            <Link href="/admissions/news-and-updates" className={styles.mobileSubItem} onClick={closeMobileMenu}>
                                News and Updates
                            </Link>
                            <Link href="/admissions/selection-process" className={styles.mobileSubItem} onClick={closeMobileMenu}>
                                Application & Selection Process
                            </Link>
                            <Link href="/admissions/fee-structure" className={styles.mobileSubItem} onClick={closeMobileMenu}>
                                Fee Structure
                            </Link>
                            <Link href="/admissions/faqs" className={styles.mobileSubItem} onClick={closeMobileMenu}>
                                FAQs
                            </Link>
                            <Link href="/admissions" className={styles.mobileSubItem} onClick={closeMobileMenu}>
                                View All (Admissions)
                            </Link>
                        </div>
                    </div>



                    {/* Student Corner Mobile Submenu */}
                    <div>
                        <button
                            className={`${styles.mobileSubmenuHeader} ${activeMobileSubmenu === 'student-corner' ? styles.activeMobileSubmenuHeader : ''}`}
                            onClick={() => toggleSubmenu('student-corner')}
                        >
                            Student Corner
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                style={{
                                    width: 20,
                                    height: 20,
                                    transform: activeMobileSubmenu === 'student-corner' ? 'rotate(180deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.2s'
                                }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div className={`${styles.mobileSubmenuList} ${activeMobileSubmenu === 'student-corner' ? styles.mobileSubmenuOpen : ''}`}>
                            <Link href="/handbook" className={styles.mobileSubItem} onClick={closeMobileMenu}>
                                Student Handbook
                            </Link>
                            <Link href="/ug_academic_calendar_2026.pdf" className={styles.mobileSubItem} target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
                                Academic Calendar
                            </Link>
                            <Link href="https://occap.iisc.ac.in/" className={styles.mobileSubItem} target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
                                Placements
                            </Link>

                            <Link href="https://scouncil.iisc.ac.in/" className={styles.mobileSubItem} target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
                                Student Council
                            </Link>
                            <Link href="https://iisc.ac.in/about/administration/internal-complaints-committee/" className={styles.mobileSubItem} target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
                                Internal Complaint Committee
                            </Link>
                            <Link href="https://hc.iisc.ac.in/" className={styles.mobileSubItem} target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
                                Health Center
                            </Link>
                            <Link href="https://s4ppas.iisc.ac.in:8081/sap/bc/ui2/flp?sap-client=800&sap-language=EN" className={styles.mobileSubItem} target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
                                SAP
                            </Link>
                            <Link href="/Travelling Allowance Form.pdf" className={styles.mobileSubItem} target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
                                Travelling Allowance Form
                            </Link>
                        </div>
                    </div>



                    <Link href="/fellowships-support" className={styles.mobileNavItem} onClick={closeMobileMenu}>
                        Fellowships & Support
                    </Link>

                    <Link href="/student-corner/campus-life" className={styles.mobileNavItem} onClick={closeMobileMenu}>
                        Campus Life
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
                            <Link href="/people/pcc" className={styles.mobileSubItem} onClick={closeMobileMenu}>
                                PCC (Programme Curriculum Committee)
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
