"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './mec.module.css';

const MechanicsAndComputing = () => {
    const [activeSemester, setActiveSemester] = useState(1);
    const [selectedCourse, setSelectedCourse] = useState<any>(null);
    const [activeTheme, setActiveTheme] = useState(1);
    const [activeTab, setActiveTab] = useState('home');
    const semesters = [1, 2, 3, 4, 5, 6, 7, 8];

    const dummyNews = [
        {
            date: "October 12, 2025",
            title: "Robotics Team Competes in Global Challenge",
            excerpt: "Advanced Mechanics students represent IISc at the International Robotics and Automation summit."
        },
        {
            date: "September 20, 2025",
            title: "Computational Mechanics Research Grant",
            excerpt: "The program was awarded a major grant for developing next-gen computational modeling tools."
        }
    ];

    const dummyAnnouncements = [
        { text: "Introductory seminar on 'Mechanobiology' this Friday.", link: "#" },
        { text: "Registration for 2026-2027 is opening soon.", link: "#" },
        { text: "New software licenses available for student research.", link: "#" }
    ];

    const semesterCourses: any = {
        1: [
            {
                code: "UMA 101",
                name: "Analysis and Linear Algebra I",
                instructor: "Soumya Das",
                credits: "4:0",
                details: {
                    parts: [
                        {
                            title: "Syllabus & Topics",
                            content: "One-variable Calculus: Real and Complex numbers. Convergence of sequences and series. Continuity, intermediate value theorem, existence of maxima and minima. Differentiation, mean value theorem, Taylor series. Integration, fundamental theorem of Calculus, improper integrals. Linear Algebra: Vector spaces (over real and complex numbers), basis and dimension. Linear transformations and matrices."
                        }
                    ],
                    books: [
                        "Apostol, T. M., Calculus, Volume I, 2nd edition, Wiley, India, 2007",
                        "Strang, G., Linear Algebra and its Applications, 4th Edition, Brooks/Cole, 2006"
                    ],
                    instructorLink: "https://math.iisc.ac.in/~library/soumya-das.html"
                }
            },
            {
                code: "UPH 101",
                name: "Introductory Physics I: Mechanics, Oscillations, and Waves",
                instructor: "Sebabrata Mukherjee",
                credits: "3:1",
                details: {
                    parts: [
                        {
                            title: "Syllabus & Topics",
                            content: "Kinetics, laws of motion. Circular motion, work. Kinetic and potential energy. Line integrals. Conservative forces. Friction, terminal velocity in air. Systems of particles. Conservation of linear momentum. Scattering in one and two dimensions. Angular momentum. Moment of inertia. Rotation about one axis. Precession of gyroscope. Central force. Reduction of two- body problem to one-body problem and effective one-body potential. Planetary motion and Kepler’s laws. Simple pendulum damped and forced, resonance. Coupled oscillators, normal modes. Small oscillations. Transverse waves on a string. Linear superposition, interference, beats. Fourier series. Sound waves in air. Doppler effect."
                        }
                    ],
                    books: [
                        "Kittel, C., Knight, W.D., Ruderman, M.A., Helmholz, A.C. and Moyer, B.J. 2011 Mechanics, Berkeley Physics Course: Volume 1, 2nd edition",
                        "Kleppner, D. and Kolenkow, R.J. 2007 An Introduction To Mechanics (Special Indian Edition)",
                        "David Halliday, Robert Resnick, Jearl Walker: Fundamentals of Physics",
                        "Raymond A. Serway and John W. Jewett: Physics for Scientists and Engineers with Modern Physics",
                        "Hugh D. Young and Roger A. Freedman: University Physics with Modern Physics",
                        "Vector Analysis (Schaum's Series) by M. R. Spiegel",
                        "Classical Mechanics By N. C. Rana & P. S. Joag"
                    ],
                    instructorLink: "https://physics.iisc.ac.in/people/sebabrata-mukherjee/"
                }
            },
            {
                code: "UENG 101",
                name: "Algorithms & Programming",
                instructor: "L. Sunil Chandran, Viraj Kumar",
                credits: "3:1",
                details: {
                    multiInstructors: [
                        { name: "L. Sunil Chandran", link: "https://eecs.iisc.ac.in/people/sunil-chandran-l/" },
                        { name: "Viraj Kumar", link: "http://dccc.iisc.ac.in/vk.html" }
                    ],
                    parts: [
                        {
                            title: "Course Overview",
                            content: "The emphasis of this course is on translating algorithms (either implicitly known or taught during the course as pseudocode) into both a high-level programming language (Python) and a systems-level high- performance programming language (C). This course is broadly divided into three parts."
                        },
                        {
                            title: "Part 1: Introduction to Python",
                            content: "Implementation, testing and debugging of elementary algorithms in Python involving operators and expressions, basic data types (integers, floats, Booleans, strings, lists), variables (references vs. objects), assignments, conditionals, iteration, functions, recursion, and modules."
                        },
                        {
                            title: "Part 2: Basic Algorithms and Data Structures",
                            content: "Implementation of iterative algorithms (linear and binary search, string matching, iterative sorting algorithms, etc.) and recursive algorithms (exponentiation, recursive sorting, etc.). Introduction to asymptotic analysis. Big O notation. Recursive relations. Arrays versus Linked lists. Improving running times of algorithms using appropriate data structures such as hash tables, binary search trees, heaps, etc. Simple graph algorithms (shortest path, minimal spanning tree)."
                        },
                        {
                            title: "Part 3: Introduction to C",
                            content: "Differences between C and Python with respect to syntax and semantics (basic data types: integers, C arrays vs. Python lists, and strings; passing arguments to functions). Pointers and managing dynamic memory in C. Comparing the runtime performance of Python and C implementations of algorithms."
                        }
                    ],
                    books: [
                        "How to Think Like a Computer Scientist: Interactive Edition, based on the book by Allan Downy and Jeff Elkner (link)",
                        "How to Solve it by Computer by R. G. Dromey, Pearson Education, 2007",
                        "Brian W. Kernighan and Dennis M. Ritchie, The C Programming Language. Prentice Hall of India, 2009",
                        "Introduction to Programming in Python by Robert Sedgewick, Kevin Wayne, and Robert Dondero, 1st edition, 2015 (link)",
                        "A Byte of Python by Swaroop C H (link)",
                        "CPython implementation of binary heaps (link)",
                        "Graphs and Graph Algorithms (link)",
                        "An Introduction to Programming through C++ by Abhiram Ranade. McGraw Hill, 1st"
                    ]
                }
            },
            {
                code: "UMEC 101",
                name: "Engineering Marvels",
                instructor: "Navaneetha K Ravichandran",
                credits: "2:0",
                details: {
                    parts: [],
                    books: [],
                    instructorLink: "https://mecheng.iisc.ac.in/project/n-k-ravichandran/"
                }
            },
            { code: "UHS**", name: "Humanities**", instructor: "-", credits: "2:0", pdf: "/humanities_courses.pdf" },
        ],
        2: [
            {
                code: "UMA 102",
                name: "Analysis and Linear Algebra II",
                instructor: "Purvi Gupta",
                credits: "4:0",
                details: {
                    parts: [
                        {
                            title: "Syllabus & Topics",
                            content: "Linear Algebra continued: Inner products and Orthogonality. Determinants. Eigenvalues and Eigenvectors. Diagonalisation of symmetric matrices. Multivariable calculus: Functions on Rn partial and total derivatives. Chain rule. Maxima, minima and saddles. Lagrange multipliers. Integration in Rn, change of variables, Fubini’s theorem. Gradient, Divergence and Curl. Line and Surface integrals in R2 and R3. Stokes, Green’s and Divergence theorems. Introduction to Ordinary Differential Equations. Linear ODEs and Canonical forms for linear transformations."
                        }
                    ],
                    books: [
                        "Apostol, T. M., Calculus, Volume II, 2nd edition, Wiley, India, 2007",
                        "Strang, G., Linear Algebra and its Applications, 4th Edition, Brooks/Cole, 2006",
                        "Artin, M., Algebra, Prentice Hall of India",
                        "Hirsch, M., Smale, S. and Devaney, R. L., Differential Equations, Dynamical Systems, and an Introduction to Chaos, 2nd edition, Academic Press, 2004"
                    ],
                    instructorLink: "https://math.iisc.ac.in/~purvigupta/"
                }
            },
            {
                isAlternative: true,
                alternatives: [
                    {
                        code: "UENG 102*",
                        name: "Electrical and Electronics Engineering",
                        instructor: "Kaushik Basu",
                        credits: "3:1",
                        instructorLink: "https://eecs.iisc.ac.in/people/kaushik-basu/",
                        details: {
                            parts: [
                                {
                                    title: "Syllabus & Topics",
                                    content: "Circuit analysis: KVL, KCL, dependent voltage/current sources, series and parallel equivalent, mesh and nodal analysis, Norton and Thevenin’s equivalent, network theorems (superposition, maximum power transfer, Tellegen, Millman etc.), Laplace transform, first and second order RLC circuit transient analysis, RLC circuit analysis in sinusoidal steady state using phasors, idea of complex impedance, active and reactive power, Fourier series, Bode plots and passive filters. P-Njunction theory. Ideal diode, Zener diodes,rectifier, clipper and clamper circuits, Zener- based power supply. MOSFET device theory and derivation of circuit model. MOSFET DC biasing and large signal analysis, small signal analysis CE, CG, CC amplifiers, differential amplifier and source coupled pair, a three-stage differential amplifier. Biasing with MOSFETs, current mirror, cascode, source degeneration. Amplifiers at high frequency. Two stage CMOS Operational Amplifier. Ideal Op-Amp. Op-Amp nonidealities, gain bandwidth product. Op-Amp with negative feedback and applications such as instrumentation amplifier, active filters, and analog computers. Operational Amplifier with positive feedback and applications such as Schmidt trigger, multivibrator, Wein-Bridge oscillator. Sample and Hold, ADC, DAC circuits. Combinational logic functions and its implementation using Boolean algebra (AND/OR/NOT), sum of products-product of sums, reduction with Karnaugh maps. Binary arithmetic, ripple carry adder and multiplier circuits. Multiplexer, de-multiplexer, decoder, encoders, and tri-state buffer. Logical sufficiency of NAND/NOR gates and their implementation with CMOS. Digital circuit design considerations-noise margin, propagation delay, fan- out, power loss. Sequential circuits with RS latch, D-T-JK flipflops and metastability. Asynchronous and synchronous counters. Finite state machines and its implementation. Introduction to computer organization: microprocessors and microcontrollers. Software: SPICE and Verilog/VHDL."
                                }
                            ],
                            books: [
                                "Electrical Engineering: Principles and Applications, Allan R Hambley",
                                "Microelectronic Circuits: Theory And Applications, Sedra, Smith and Chandorkar",
                                "Fundamentals of digital logic with Verilog design, Stephen Brown and Jovonko Vranesic"
                            ]
                        }
                    },
                    {
                        code: "UPH 102*",
                        name: "Introductory Physics II (Elec-MagOptics)",
                        instructor: "Gaurav Narain",
                        credits: "3:1",
                        instructorLink: "https://chep.iisc.ac.in/faculty/",
                        details: {
                            parts: [
                                {
                                    title: "Syllabus & Topics",
                                    content: "Introduction, review of vector algebra, vector calculus: gradient, divergence, curl, Gauss’ theorem and Stokes’ theorem, Laplacian etc. Coulomb’s law, electric field, electrostatic potential, Uniqueness theorem, conductors, capacitance, method of images, bound charges and dipole moment density, energy stored in electric fields. Magnetostatics: electric currents, Biot-savart law, Ampere’s law, magnetic fields of straight wires, circular loops and infinite solenoids, vector potential, magnetic dipole moment and bound currents. Lorentz force and Faraday’s law, inductance, energy stored in a magnetic field. Linear dielectric and magnetic materials, bound current, magnetism, charge conservation, displacement current, Maxwell’s equations."
                                }
                            ],
                            books: [
                                "Purcell, E.M. 2011 Electricity and Magnetism, Berkeley Physics Course-Volume2, 2nd edition, Tata Mc Graw Hill",
                                "Griffiths, D.J. 2003 Introduction to Electrodynamics, 3rd edition, Prentice- Hall of India. SICS"
                            ]
                        }
                    }
                ]
            },
            {
                code: "UMC 102",
                name: "Introduction to Computer Systems",
                instructor: "Vinod Ganapathy, Sanchari Sen",
                credits: "3:0",
                details: {
                    multiInstructors: [
                        { name: "Vinod Ganapathy", link: "https://www.csa.iisc.ac.in/~vg/" },
                        { name: "Sanchari Sen", link: "https://www.csa.iisc.ac.in/~sancharisen/" }
                    ],
                    parts: [
                        {
                            title: "Syllabus & Topics",
                            content: "Computer Programs as Instructions and Data; Instruction Execution; Representation of Data: Signed Integers, Reals; Program Execution: Function Call and Return, Memory Layout, Exceptions; Overview of System Software; Memory Hierarchy and Locality; Operating System Concepts: Process, Virtual Memory, File; Concurrency and Parallelism."
                        }
                    ],
                    books: [
                        "Computer Systems: A Programmer’s Perspective, by Randal E. Bryant and David R. O’Hallaron, Pearson, 2015"
                    ]
                }
            },
            { code: "UMEC 102", name: "Introduction to Mechanics & Computing I", instructor: "-", credits: "4:0" },
            { code: "UHS**", name: "Humanities**", instructor: "-", credits: "2:0", pdf: "/humanities_courses.pdf" },
        ],
        3: [
            {
                code: "UMA 201",
                name: "Probability & Statistics",
                instructor: "Sanchayan Sen",
                credits: "4:0",
                details: {
                    parts: [
                        {
                            title: "Syllabus & Topics",
                            content: "Basic notions of probability, conditional probability and independence, Bayes’ theorem, random variables and distributions, expectation and variance, conditional expectation, moment generating functions, limit theorems. Samples and sampling distributions, estimation of parameters, testing of hypotheses, regression, correlation and analysis of variance."
                        }
                    ],
                    books: [
                        "Ross, S., Introduction to Probability and Statistics for Engineers and Scientists, Academic Press; 4th ed. (2009)",
                        "Freedman, Pisani and Purves, Statistics, Viva Books; 4th ed. (2011)",
                        "Feller, W., An Introduction to Probability Theory and its Applications - Vol. 1, Wiley; 3rd ed. (2008)",
                        "Ross, S., A First Course in Probability, Pearson Education; 9th ed. (2013)",
                        "Athreya, S., Sarkar, D. and Tanner, S., Probability and Statistics (with Examples using R), Unfinished book"
                    ],
                    instructorLink: "https://math.iisc.ac.in/~library/sanchayan-sen.html"
                }
            },
            {
                code: "UMC 202",
                name: "Introduction to Numerical Methods",
                instructor: "Ratikanta Behera",
                credits: "3:1",
                details: {
                    parts: [
                        {
                            title: "Syllabus & Topics",
                            content: "Numerical Solution of Algebraic and Transcendental Equations, Iterative Algorithms, Convergence, Newton Raphson Procedure, Solutions of Polynomial and Simultaneous Linear Equations, Gauss Method, Relaxation Procedure, Error Estimates, Numerical Integration, Euler-Maclaurin Formula. Newton-Cotes Formulae, Error Estimates, Gaussian Quadratures, Extensions to Multiple Integrals. Numerical Integration of Ordinary Differential Equations: Methods of Euler, Adams, Runge-Kutta and Predictor – Corrector Procedures, Stability of Solution. Solution of Stiff Equations. Solution of Boundary Value Problems: Shooting Method with Least Square Convergence Criterion, Galerkin Method (Finite Element) Solution of Partial Differential Equations: Finite-Difference Techniques, Stability and Convergence of the Solution, Finite Element Methods."
                        }
                    ],
                    books: [
                        "Richard L. Burden and J.Douglas Faires, Numerical Analysis: Theory and Applications, India Edition, Cengage Brooks-Cole Publishers, 2010",
                        "Press,W.H., Teukolsky, S.A.,Vetterling, W. T., and Flannery, B. P.,Numerical Recipesin C/FORTRAN, Prentice Hall of India, New Delhi, 1994",
                        "Borse, G. J., Numerical Methods with MATLAB: A Resource for Scientists and Engineers, PWS Publishing Co., Boston, 1997",
                        "Conte, S. D. and Carl de Boor., Elementary Numerical Analysis, McGraw-Hill, 1980",
                        "Hildebrand, F. B., Introduction to Numerical Analysis, Tata McGraw-Hill, 1988",
                        "Froberg, C. E., Introduction to Numerical Analysis, Wiley, 1965"
                    ],
                    instructorLink: "https://cds.iisc.ac.in/faculty/ratikanta/"
                }
            },
            {
                code: "UENG 201",
                name: "Introduction to Materials Science",
                instructor: "Suchandrima Das",
                credits: "3:0",
                details: {
                    parts: [
                        {
                            title: "Syllabus & Topics",
                            content: "Bonding, types of materials, basics of crystal structures and crystallography. Thermodynamics, thermochemistry, unary systems, methods of structural characterization. Thermodynamics of solid solutions, phase diagrams, defects, diffusion. Solidification. Solid-solid phase transformations. Mechanical behaviour: elasticity, plasticity, fracture. Electrochemistry and corrosion. Band structure, electrical, magnetic and optical materials. Classes of practical materials systems: metallic alloys, ceramics, semiconductors, composites."
                        }
                    ],
                    books: [
                        "W.D. Callister: Materials Science and Engineering, Wiley India (2007)"
                    ],
                    instructorLink: "https://www.crystalmechanicslab.com/"
                }
            },
            {
                code: "UENG 202",
                name: "Thermodynamics",
                instructor: "AE/ME/MtE Faculty",
                credits: "4:0",
                details: {
                    parts: [
                        {
                            title: "Syllabus & Topics",
                            content: "Thermodynamic Systems, Thermodynamic Equilibrium, Zeroth Law of Thermodynamics, Temperature, Quasi-Static Processes; Properties of Pure Substances, Thermodynamic Property Tables and Charts, Ideal and Real Gases; Heat and Work Interactions; First Law of Thermodynamics, Internal Energy and Enthalpy, First Law Analysis of Closed and Open Systems; Second Law of Thermodynamics, Heat Engines and Refrigerators, Reversible and Irreversible Processes, Carnot Cycle; Entropy, Second Law Analysis of Closed and Open Systems, Third Law of Thermodynamics; Availability and Irreversibility, Exergy Analysis of Closed and Open Systems; Thermodynamic Property Relations; First and Second Law Analysis of Thermodynamic Cycles, Power and Refrigeration Cycles; Mixtures of Ideal Gases, Gas-Vapour Mixtures. Lab Demonstrations. Problem Solving using Software Tools."
                        }
                    ],
                    books: []
                }
            },
            { code: "UMEC 103", name: "Introduction to Mechanics & Computing II", instructor: "-", credits: "4:0" },
        ],
        4: [
            { code: "UENG 203", name: "Mechanics of Structures", instructor: "-", credits: "4:0" },
            { code: "UENG 204", name: "Mechanics of Fluids", instructor: "-", credits: "4:0" },
            {
                code: "UMC 203",
                name: "Introduction to AI/ML",
                instructor: "Aditya Gopalan, Shishir N Kolathaya",
                credits: "3:1",
                details: {
                    multiInstructors: [
                        { name: "Aditya Gopalan", link: "https://ece.iisc.ac.in/~aditya/" },
                        { name: "Shishir N Kolathaya", link: "https://eecs.iisc.ac.in/people/shishir-kolathaya/" }
                    ],
                    parts: [
                        {
                            title: "Syllabus & Topics",
                            content: "Overview: Machine Learning Paradigms; Supervised, Unsupervised, and Reinforcement Learning. Supervised Learning: Bayes Classifier, Optimality; Risk Minimization; Generalisation Error Estimation. Perceptron, Logistic Regression, Least Squares, Regularization, Kernel Methods; SVMs, Multilayer Perceptrons, CNNs and Other Neural Network Models. Classifier Ensembles, Adaboost Algorithm. Unsupervised Learning: Generative Models, Parameter Estimation – Maximum Likelihood, Bayesian Methods; Latent Variables and EM Algorithm; Graphical Models, Deep Generative Models, Principal Component Analysis, Independent Component Analysis. Reinforcement Learning and Markov Decision Processes."
                        }
                    ],
                    books: [
                        "C. M. Bishop, Pattern Recognition and Machine Learning, Springer, 2006",
                        "S. Shalev-Shwartz and S. Ben-David, Understanding Machine Learning: From Theory to Algorithms, Cambridge University Press, 2014",
                        "Kevin Murphy, Machine learning: A probabilistic perspective, 2012",
                        "T. Hastie, R. Tibshirani and J. Friedman, The Elements of Statistical Learning: Data Mining, Inference and Prediction’, Springer, 2009",
                        "A. Zhang, Z. C. Lipton, M. Li, A. J. Smola, Dive into Deep Learning, 2019 (free PDF available)",
                        "I. Goodfellow, Y. Bengio and A. Courville, Deep Learning, MIT Press, 2016"
                    ]
                }
            },
            { code: "UMEC 205", name: "Product Realization", instructor: "-", credits: "2:1" },
            { code: "-", name: "Humanities** / UG elective / Elective", instructor: "-", credits: "2-4" },
        ],
        5: [
            { code: "UENG 207", name: "Solids & Fluids Lab", instructor: "-", credits: "0:1" },
            { code: "UMEC 301", name: "Data driven analysis of ME systems", instructor: "-", credits: "4:0" },
            { code: "-", name: "Humanities** / UG elective / Elective", instructor: "-", credits: "12-15" },
        ],
        6: [
            { code: "UMEC 302", name: "Sensors, measurement & hardware", instructor: "-", credits: "2:2" },
            { code: "-", name: "Humanities** / UG elective / Elective", instructor: "-", credits: "12-16" },
        ],
        7: [
            { code: "Elective", name: "UG elective / Elective / ISP-1 / Seminar course", instructor: "-", credits: "14-19" },
        ],
        8: [
            { code: "UMEC 403", name: "BTech Project / ISP II / Soft Core / Electives", instructor: "-", credits: "12:0" },
        ],
    };

    const currentCourses = semesterCourses[activeSemester] || [];

    const getTotalCredits = (sem: number) => {
        if (sem === 1) return '16';
        if (sem === 2) return '17';
        if (sem === 3) return '19';
        if (sem === 4) return '17-19';
        if (sem === 5) return '17-20';
        if (sem === 6) return '16-20';
        if (sem === 7) return '14-19';
        if (sem === 8) return '12-16';
        return '';
    };

    const getReducedCredits = (sem: number) => {
        if (sem === 2) return '13 (Drop breadth soft core course)';
        if (sem === 3) return '16 (Drop UENG 201)';
        if (sem === 4) return '13-15 (Drop one Humanities / UG elective / Elective)';
        if (sem === 5) return '13-15 (Drop one Humanities / UG elective / Elective)';
        if (sem === 6) return '14-16';
        return '';
    };

    const getEnhancedCredits = (sem: number) => {
        if (sem === 4) return '17-21';
        if (sem === 5) return '17-21';
        if (sem === 6) return '16-21';
        if (sem === 7) return '14-21';
        return '';
    };

    return (
        <div className={styles.pageContainer}>
            {/* Top Header Bar */}
            <div className={styles.headerSection}>
                <Link href="/programs" className={styles.backLink}>
                    ← Back to Programs
                </Link>

            </div>

            {/* Hero Section */}
            <div className={styles.heroSection}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    zIndex: 1
                }} />
                <Image
                    src="/banner_hq_2.jpg"
                    alt="Mechanics and Computing Banner"
                    fill
                    priority
                    style={{ objectFit: 'cover', zIndex: 0 }}
                    sizes="100vw"
                />
                <div style={{ position: 'relative', zIndex: 2 }}>
                    <span className={styles.heroTag}>Bachelor of Technology</span>
                    <h1 className={styles.heroHeading}>Mechanics and Computing</h1>
                </div>
            </div>

            <div className={styles.contentWrapper}>
                {/* Top Level Tabs */}
                <div className={styles.pageTabs}>
                    <div className={styles.pageTabContainer}>
                        <button
                            className={`${styles.pageTabButton} ${activeTab === 'home' ? styles.pageTabButtonActive : ''}`}
                            onClick={() => setActiveTab('home')}
                        >
                            <svg className={styles.tabIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                <polyline points="9 22 9 12 15 12 15 22" />
                            </svg>
                            Home
                        </button>
                        <button
                            className={`${styles.pageTabButton} ${activeTab === 'structure' ? styles.pageTabButtonActive : ''}`}
                            onClick={() => setActiveTab('structure')}
                        >
                            <svg className={styles.tabIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                                <polyline points="2 17 12 22 22 17" />
                                <polyline points="2 12 12 17 22 12" />
                            </svg>
                            Course Structure
                        </button>
                    </div>
                </div>

                {/* Home Tab Content */}
                {activeTab === 'home' && (
                    <div className={styles.homeGrid}>
                        <div className={styles.mainContent}>
                            <div className={styles.introSection}>
                                <h2 className={styles.sectionHeading} style={{ fontSize: '2rem', color: '#0f172a', marginBottom: '1rem', borderLeft: 'none', paddingLeft: 0 }}>
                                    About the Programme
                                </h2>
                                <p className={styles.introText}>
                                    The B.Tech program in Mechanics and Computing at IISc provides a unique blend of classical mechanics, modern mathematics, and advanced computing. This interdisciplinary approach prepares students to solve complex engineering problems using both theoretical insights and powerful computational tools, with applications ranging from robotics to biomechanics.
                                </p>
                            </div>

                            <div className={styles.newsSection}>
                                <div className={styles.newsSectionTitle}>
                                    <span style={{ fontSize: '1.5rem' }}>📰</span> Latest News
                                </div>
                                {dummyNews.map((news, index) => (
                                    <div key={index} className={styles.newsCard}>
                                        <div className={styles.newsContent}>
                                            <div className={styles.newsDate}>{news.date}</div>
                                            <div className={styles.newsTitle}>{news.title}</div>
                                            <div className={styles.newsExcerpt}>{news.excerpt}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={styles.sidebar}>
                            <div className={styles.announcementList}>
                                <div className={styles.newsSectionTitle} style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
                                    <span style={{ fontSize: '1.2rem' }}>📢</span> Announcements
                                </div>
                                {dummyAnnouncements.map((ann, index) => (
                                    <div key={index} className={styles.announcementItem}>
                                        <div className={styles.announcementBadge}>New</div>
                                        <div className={styles.announcementText}>{ann.text}</div>
                                        {ann.link && (
                                            <Link href={ann.link} className={styles.announcementLink}>
                                                Read More →
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Course Structure Tab Content */}
                {activeTab === 'structure' && (
                    <>
                        <div className={styles.overviewSection}>
                            <h2 className={styles.sectionHeading}>Course Overview</h2>
                            <p className={styles.overviewText}>
                                The B.Tech program in Mechanics and Computing focuses on the intersection of mechanics, computation, and data science. It equips students with the skills to analyze, design, and control complex mechanical systems using modern computational tools.
                            </p>
                        </div>

                        {/* Semester-wise Requirements Section */}
                        <div className={styles.semesterSection}>
                            <h2 className={styles.sectionHeading} style={{ borderLeft: 'none', paddingLeft: 0, fontSize: '1.75rem', marginBottom: '1.5rem' }}>
                                Semester-wise Course Requirements
                            </h2>

                            {/* Semester Navigation */}
                            <div className={styles.semesterNav}>
                                {semesters.map(sem => (
                                    <button
                                        key={sem}
                                        className={`${styles.semesterTab} ${activeSemester === sem ? styles.activeTab : ''}`}
                                        onClick={() => setActiveSemester(sem)}
                                    >
                                        Semester {sem}
                                    </button>
                                ))}
                            </div>

                            {/* Course Table */}
                            <div className={styles.tableContainer}>
                                <table className={styles.courseTable}>
                                    <thead>
                                        <tr>
                                            <th style={{ width: '15%' }}>Course Code</th>
                                            <th style={{ width: '40%' }}>Course Name</th>
                                            <th style={{ width: '25%' }}>Instructor</th>
                                            <th style={{ width: '10%', textAlign: 'center' }}>Credits</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentCourses.map((course: any, index: number) => {
                                            if (course.isAlternative) {
                                                return (
                                                    <tr key={index}>
                                                        <td className={styles.courseCode}>
                                                            {course.alternatives.map((alt: any, altIndex: number) => (
                                                                <React.Fragment key={altIndex}>
                                                                    {altIndex > 0 && <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#64748b', margin: '0.25rem 0' }}>OR</div>}
                                                                    {alt.details ? (
                                                                        <span className={styles.courseLink} onClick={() => setSelectedCourse(alt)}>
                                                                            {alt.code}
                                                                        </span>
                                                                    ) : (
                                                                        alt.code
                                                                    )}
                                                                </React.Fragment>
                                                            ))}
                                                        </td>
                                                        <td className={styles.courseName}>
                                                            {course.alternatives.map((alt: any, altIndex: number) => (
                                                                <React.Fragment key={altIndex}>
                                                                    {altIndex > 0 && <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#64748b', margin: '0.25rem 0' }}>OR</div>}
                                                                    {alt.details ? (
                                                                        <span className={styles.courseLink} onClick={() => setSelectedCourse(alt)}>
                                                                            {alt.name}
                                                                        </span>
                                                                    ) : (
                                                                        alt.name
                                                                    )}
                                                                </React.Fragment>
                                                            ))}
                                                        </td>
                                                        <td>
                                                            {course.alternatives.map((alt: any, altIndex: number) => (
                                                                <React.Fragment key={altIndex}>
                                                                    {altIndex > 0 && <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#64748b', margin: '0.25rem 0' }}>OR</div>}
                                                                    {alt.instructorLink ? (
                                                                        <a href={alt.instructorLink} target="_blank" rel="noopener noreferrer" className={styles.instructorLink}>
                                                                            {alt.instructor}
                                                                        </a>
                                                                    ) : (
                                                                        <span style={{ color: '#64748b' }}>{alt.instructor}</span>
                                                                    )}
                                                                </React.Fragment>
                                                            ))}
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>
                                                            {course.alternatives.map((alt: any, altIndex: number) => (
                                                                <React.Fragment key={altIndex}>
                                                                    {altIndex > 0 && <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#64748b', margin: '0.25rem 0' }}>OR</div>}
                                                                    {alt.credits}
                                                                </React.Fragment>
                                                            ))}
                                                        </td>
                                                    </tr>
                                                );
                                            }
                                            return (
                                                <tr key={index}>
                                                    <td className={styles.courseCode}>
                                                        {course.details ? (
                                                            <span
                                                                className={styles.courseLink}
                                                                onClick={() => setSelectedCourse(course)}
                                                            >
                                                                {course.code}
                                                            </span>
                                                        ) : course.pdf ? (
                                                            <a
                                                                href={course.pdf}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className={styles.courseLink}
                                                            >
                                                                {course.code}
                                                            </a>
                                                        ) : course.redirect ? (
                                                            <span
                                                                className={styles.courseLink}
                                                                onClick={() => {
                                                                    const element = document.getElementById(course.redirect);
                                                                    if (element) {
                                                                        element.scrollIntoView({ behavior: 'smooth' });
                                                                    }
                                                                }}
                                                            >
                                                                {course.code}
                                                            </span>
                                                        ) : (
                                                            course.code
                                                        )}
                                                    </td>
                                                    <td className={styles.courseName}>
                                                        {course.details ? (
                                                            <span
                                                                className={styles.courseLink}
                                                                onClick={() => setSelectedCourse(course)}
                                                            >
                                                                {course.name}
                                                            </span>
                                                        ) : course.pdf ? (
                                                            <a
                                                                href={course.pdf}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className={styles.courseLink}
                                                            >
                                                                {course.name}
                                                            </a>
                                                        ) : course.redirect ? (
                                                            <span
                                                                className={styles.courseLink}
                                                                onClick={() => {
                                                                    const element = document.getElementById(course.redirect);
                                                                    if (element) {
                                                                        element.scrollIntoView({ behavior: 'smooth' });
                                                                    }
                                                                }}
                                                            >
                                                                {course.name}
                                                            </span>
                                                        ) : (
                                                            course.name
                                                        )}
                                                    </td>
                                                    <td>
                                                        {course.details?.multiInstructors ? (
                                                            course.details.multiInstructors.map((inst: any, i: number) => (
                                                                <span key={i}>
                                                                    <a
                                                                        href={inst.link}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className={styles.instructorLink}
                                                                    >
                                                                        {inst.name}
                                                                    </a>
                                                                    {i < course.details.multiInstructors.length - 1 ? ", " : ""}
                                                                </span>
                                                            ))
                                                        ) : course.details?.instructorLink ? (
                                                            <a
                                                                href={course.details.instructorLink}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className={styles.instructorLink}
                                                            >
                                                                {course.instructor}
                                                            </a>
                                                        ) : (
                                                            <span style={{ color: '#64748b' }}>{course.instructor}</span>
                                                        )}
                                                    </td>
                                                    <td style={{ textAlign: 'center' }}>{course.credits}</td>
                                                </tr>
                                            );
                                        })}

                                        {/* Total Row - Normal Load */}
                                        <tr className={styles.totalRow}>
                                            <td colSpan={3} className={styles.totalLabel}>Normal Load</td>
                                            <td className={styles.totalCredits}>{getTotalCredits(activeSemester)}</td>
                                        </tr>

                                        {/* Reduced Load Row */}
                                        {getReducedCredits(activeSemester) && (
                                            <tr className={styles.totalRow} style={{ borderTop: '1px solid #e5e7eb' }}>
                                                <td colSpan={3} className={styles.totalLabel}>
                                                    Reduced Load
                                                    <div style={{ fontWeight: '400', fontSize: '0.8rem', color: '#64748b', marginTop: '0.2rem' }}>
                                                        {getReducedCredits(activeSemester).includes('(') ?
                                                            `(${getReducedCredits(activeSemester).split('(')[1].replace(')', '')})` : ''}
                                                    </div>
                                                </td>
                                                <td className={styles.totalCredits} style={{ verticalAlign: 'top' }}>
                                                    {getReducedCredits(activeSemester).split(' ')[0]}
                                                </td>
                                            </tr>
                                        )}

                                        {/* Enhanced Load Row */}
                                        {getEnhancedCredits(activeSemester) && (
                                            <tr className={styles.totalRow} style={{ borderTop: '1px solid #e5e7eb' }}>
                                                <td colSpan={3} className={styles.totalLabel} style={{ verticalAlign: 'top' }}>
                                                    Enhanced Load
                                                </td>
                                                <td className={styles.totalCredits} style={{ verticalAlign: 'top' }}>
                                                    {getEnhancedCredits(activeSemester)}
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            {/* Note below table */}
                            {(activeSemester >= 4 && activeSemester <= 6) && (
                                <div className={styles.note}>
                                    <div style={{ fontWeight: 700, marginBottom: '0.75rem', color: '#0f172a', fontSize: '1rem' }}>Note:</div>
                                    <div style={{ marginLeft: '0.5rem' }}>
                                        <div style={{ fontWeight: 700, marginBottom: '0.5rem', color: '#334155' }}>** Humanities:</div>
                                        <div style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.35rem', color: '#475569' }}>
                                            <div>A. Humanities courses cannot be dropped in both semesters IV and V.</div>
                                            <div>B. Students must complete 9 credits in humanities pool by the end of six semester.</div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Recommended Course Load */}
                        <div className={styles.overviewSection} style={{ marginTop: '3rem' }}>


                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1e293b', marginBottom: '1rem', marginTop: '2rem' }}>
                                Recommended Course Load
                            </h3>

                            <div className={styles.tableContainer}>
                                <table className={styles.courseTable}>
                                    <thead>
                                        <tr>
                                            <th style={{ width: '40%' }}>Criteria</th>
                                            <th style={{ width: '60%' }}>Course Load</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{ fontWeight: '500', color: '#334155' }}>CGPA ≤ 6.0 AND Prev-TGPA ≤ 5.5</td>
                                            <td>
                                                Reduced in Semester II to IV,<br />
                                                Normal in Semester V to VIII
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ fontWeight: '500', color: '#334155' }}>
                                                6.0 &lt; CGPA &lt; 8.0 OR 5.5 &lt; Prev-TGPA &lt; 8.0
                                            </td>
                                            <td>Normal in Semester II to VIII</td>
                                        </tr>
                                        <tr>
                                            <td style={{ fontWeight: '500', color: '#334155' }}>CGPA ≥ 8.0 AND Prev-TGPA ≥ 8.0</td>
                                            <td>
                                                Normal in Semester II and III,<br />
                                                Enhanced in Semester IV to VIII
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className={styles.overviewSection} style={{ marginTop: '3rem' }}>
                            <h2 id="thematic-electives" className={styles.sectionHeading} style={{ borderLeft: 'none', paddingLeft: 0, fontSize: '1.75rem', marginBottom: '1.5rem' }}>
                                Thematic Elective streams:
                            </h2>

                            {/* Thematic Electives Tabs */}
                            <div className={styles.semesterNav} style={{ marginBottom: '1.5rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>
                                {[
                                    'I: Fluid, Thermal and Energy',
                                    'II: Mechanisms and Robots',
                                    'III: Computational Mechanics',
                                    'IV: Core Mechanics',
                                    'V: Mechanobiology'
                                ].map((theme, index) => (
                                    <button
                                        key={index}
                                        className={`${styles.semesterTab} ${activeTheme === index + 1 ? styles.activeTab : ''}`}
                                        onClick={() => setActiveTheme(index + 1)}
                                        style={{
                                            borderRadius: '99px',
                                            padding: '0.6rem 1.25rem',
                                            backgroundColor: activeTheme === index + 1 ? '#0f172a' : '#f1f5f9',
                                            color: activeTheme === index + 1 ? 'white' : '#64748b'
                                        }}
                                    >
                                        {theme}
                                    </button>
                                ))}
                            </div>

                            <div style={{ background: '#f8fafc', borderRadius: '12px', padding: '2rem', border: '1px solid #e2e8f0' }}>

                                {activeTheme === 1 && (
                                    <div>
                                        <h4 style={{ margin: '0 0 1.5rem 0', color: '#3b82f6', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <span style={{ background: '#dbeafe', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>I</span>
                                            Fluid, Thermal and Energy
                                        </h4>
                                        <div style={{ fontWeight: 600, marginBottom: '1rem', color: '#1e293b', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>Suggested Basket of Courses</div>
                                        <ul style={{ columnCount: 1, margin: 0, paddingLeft: '1.2rem' }}>
                                            {[
                                                "ME 202 (Microhydrodynamics)",
                                                "ME 207 (Capillarity and Wetting Phenomena)",
                                                "ME 272 (Thermal management of electronics)",
                                                "ME 274 (Convective Heat Transfer)",
                                                "ME 279 (Radiative Transport)",
                                                "ME 280 (Fundamentals of Nanoscale Conduction Heat Transport)",
                                                "ME 284 (Applied Combustion)",
                                                "ME 285 (Turbomachine Theory)",
                                                "ME 298 (Fluid Turbulence)",
                                                "SS 205 (Symmetry and Structure in the Solid State)",
                                                "PD 202 (Elements of solid and fluid mechanics)"
                                            ].map((item, idx) => (
                                                <li key={idx} style={{ marginBottom: '0.5rem', color: '#334155' }}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {activeTheme === 2 && (
                                    <div>
                                        <h4 style={{ margin: '0 0 1.5rem 0', color: '#3b82f6', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <span style={{ background: '#dbeafe', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>II</span>
                                            Mechanisms and Robots
                                        </h4>
                                        <div style={{ fontWeight: 600, marginBottom: '1rem', color: '#1e293b', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>Suggested Basket of Courses</div>
                                        <ul style={{ columnCount: 1, margin: 0, paddingLeft: '1.2rem' }}>
                                            {[
                                                "ME 246 (Introduction to Robotics)",
                                                "ME 254 (Compliant Mechanisms)",
                                                "ME 260 (Structural Optimization)",
                                                "IN 227 (Control Systems Design)",
                                                "CP 315 (Robot learning and control)",
                                                "CP 232 (Swarm robotic systems)",
                                                "CP 230 (Autonomous navigation and planning)",
                                                "CP 260 (Robot perception)"
                                            ].map((item, idx) => (
                                                <li key={idx} style={{ marginBottom: '0.5rem', color: '#334155' }}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {activeTheme === 3 && (
                                    <div>
                                        <h4 style={{ margin: '0 0 1.5rem 0', color: '#3b82f6', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <span style={{ background: '#dbeafe', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>III</span>
                                            Computational Mechanics
                                        </h4>
                                        <div style={{ fontWeight: 600, marginBottom: '1rem', color: '#1e293b', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>Suggested Basket of Courses</div>
                                        <ul style={{ columnCount: 1, margin: 0, paddingLeft: '1.2rem' }}>
                                            {[
                                                "ME 257 (Finite Element Methods)",
                                                "ME 259 (Nonlinear Finite Element Methods)",
                                                "ME 278 (Practical introduction to Data Analysis for Engineers)",
                                                "ME 303 (Partial Differential Equations with Applications)",
                                                "ME 282 (Computational Heat Transfer and Fluid Flow)",
                                                "DS 211 (Numerical Optimization)",
                                                "DS 226 (Introduction to computing for AI and machine learning)",
                                                "DS 284 (Numerical linear algebra)"
                                            ].map((item, idx) => (
                                                <li key={idx} style={{ marginBottom: '0.5rem', color: '#334155' }}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {activeTheme === 4 && (
                                    <div>
                                        <h4 style={{ margin: '0 0 1.5rem 0', color: '#3b82f6', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <span style={{ background: '#dbeafe', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>IV</span>
                                            Core Mechanics
                                        </h4>
                                        <div style={{ fontWeight: 600, marginBottom: '1rem', color: '#1e293b', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>Suggested Basket of Courses</div>
                                        <ul style={{ columnCount: 1, margin: 0, paddingLeft: '1.2rem' }}>
                                            {[
                                                "ME 253 (Vibrations of Plates and Shells)",
                                                "ME 255 (Fundamentals of Tribology)",
                                                "ME 204 (Mechanics of the Elastica)",
                                                "ME 292 (Contact and Impact Mechanics)",
                                                "ME 293 (Fracture Mechanics)",
                                                "ME 223 (Nonlinear Dynamics of Physical Systems)",
                                                "ME 242 (Solid Mechanics)",
                                                "ME 224 (Mechanical Vibrations)"
                                            ].map((item, idx) => (
                                                <li key={idx} style={{ marginBottom: '0.5rem', color: '#334155' }}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {activeTheme === 5 && (
                                    <div>
                                        <h4 style={{ margin: '0 0 1.5rem 0', color: '#3b82f6', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <span style={{ background: '#dbeafe', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>V</span>
                                            Mechanobiology
                                        </h4>
                                        <div style={{ fontWeight: 600, marginBottom: '1rem', color: '#1e293b', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>ME courses</div>
                                        <ul style={{ columnCount: 1, margin: 0, paddingLeft: '1.2rem' }}>
                                            {[
                                                "ME 225 (Introduction to Soft Matter)",
                                                "ME 251 (Biomechanics)",
                                                "ME 264 (Mechanics in Biology)",
                                                "BE 213 (Fundamentals of Bioengineering)",
                                                "BE 211 (Cell Mechanics)",
                                                "BE 207 (Mathematical Methods for Bioengineers)",
                                                "MT 271 (Introduction to Biomaterials Science and Engineering)",
                                                "PH 350 (Physics of Soft Condensed Matter)",
                                                "EC 303 (Stochastic and Spatial Dynamics in Biology)"
                                            ].map((item, idx) => (
                                                <li key={idx} style={{ marginBottom: '0.5rem', color: '#334155' }}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                            </div>
                        </div>

                        {/* Continuing to M.Tech / M.Tech (Research) - Updated Section */}
                        <div className={styles.overviewSection} style={{ marginTop: '3rem' }}>
                            <h2 className={styles.sectionHeading}>Continuing to M.Tech / M.Tech (Research)</h2>
                            <p className={styles.overviewText} style={{ marginBottom: '1.5rem' }}>
                                B.Tech students of IISc may apply for admission to the M.Tech and M.Tech (Research) programmes at the end of their third year, subject to fulfilling the existing rules and regulations.
                            </p>

                            <div className={styles.mtechGrid} style={{ gridTemplateColumns: '1fr', gap: '2rem' }}>

                                {/* Eligibility & Selection */}
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                                    {/* Eligibility Card */}
                                    <div className={styles.mtechCard}>
                                        <div className={styles.mtechCardAccent} style={{ backgroundColor: '#2563eb' }} />
                                        <div className={styles.mtechCardTitle}>
                                            <div className={styles.mtechIcon} style={{ background: '#dbeafe', color: '#2563eb' }}>✓</div>
                                            Eligibility
                                        </div>
                                        <ul className={styles.mtechList}>
                                            <li className={styles.mtechItem}>
                                                <span style={{ fontWeight: '500' }}>Students must be in the third year of the B.Tech programme.</span>
                                            </li>
                                            <li className={styles.mtechItem}>
                                                <span style={{ fontWeight: '500' }}>Students must have completed at least 80% of the prescribed credits (i.e., 102 credits) with a minimum CGPA of 8.0.</span>
                                            </li>
                                            <li className={styles.mtechItem}>
                                                <span style={{ fontWeight: '500' }}>Students must have completed the minimum pool-wise credit requirements prescribed for the programme for continuation to M.Tech / M.Tech (Research).</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Selection Card */}
                                    <div className={styles.mtechCard}>
                                        <div className={styles.mtechCardAccent} style={{ backgroundColor: '#8b5cf6' }} />
                                        <div className={styles.mtechCardTitle}>
                                            <div className={styles.mtechIcon} style={{ background: '#ede9fe', color: '#8b5cf6' }}>🎯</div>
                                            Selection
                                        </div>
                                        <ul className={styles.mtechList}>
                                            <li className={styles.mtechItem}>
                                                <span style={{ fontWeight: '500' }}>Applicants must satisfy the programme-specific eligibility conditions as notified by the concerned program from time to time.</span>
                                            </li>
                                            <li className={styles.mtechItem}>
                                                <span style={{ fontWeight: '500' }}>Selection shall be based on interviews conducted by the respective program.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Programme Structure */}
                                <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#1e293b', marginTop: '1rem', marginBottom: '0.5rem' }}>
                                    Programme Structure
                                </h3>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                                    {/* M.Tech Structure */}
                                    <div className={styles.mtechCard}>
                                        <div className={styles.mtechCardAccent} style={{ backgroundColor: '#10b981' }} />
                                        <div className={styles.mtechCardTitle}>
                                            <div className={styles.mtechIcon} style={{ background: '#ecfdf5', color: '#10b981' }}>🎓</div>
                                            M.Tech
                                        </div>
                                        <ul className={styles.mtechList}>
                                            <li className={styles.mtechItem}>
                                                <span style={{ fontWeight: '500' }}>Admission is from the seventh semester onwards.</span>
                                            </li>
                                            <li className={styles.mtechItem}>
                                                <span style={{ fontWeight: '500' }}>Students are required to complete 64 additional credits and fulfil all M.Tech degree requirements of the programme.</span>
                                            </li>
                                            <li className={styles.mtechItem}>
                                                <span style={{ fontWeight: '500' }}>On successful completion, separate B. Tech and M. Tech degrees shall be awarded.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* M.Tech (Research) Structure */}
                                    <div className={styles.mtechCard}>
                                        <div className={styles.mtechCardAccent} style={{ backgroundColor: '#f59e0b' }} />
                                        <div className={styles.mtechCardTitle}>
                                            <div className={styles.mtechIcon} style={{ background: '#fef3c7', color: '#f59e0b' }}>🔬</div>
                                            M.Tech (Research)
                                        </div>
                                        <ul className={styles.mtechList}>
                                            <li className={styles.mtechItem}>
                                                <span style={{ fontWeight: '500' }}>Students are required to complete 12 course credits beyond the B.Tech requirements, along with a research thesis.</span>
                                            </li>
                                            <li className={styles.mtechItem}>
                                                <span style={{ fontWeight: '500' }}>On successful completion, separate B. Tech and M.Tech (Research) degrees shall be awarded.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Footer Note */}
                                <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid #3b82f6' }}>
                                    <p style={{ margin: 0, color: '#475569', fontSize: '0.95rem' }}>
                                        <strong>Note:</strong> For detailed rules, eligibility conditions, and procedural requirements, students are advised to refer to the <Link href="/handbook" style={{ color: '#2563eb', textDecoration: 'underline' }}>Student Information Handbook</Link>.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </>
                )}
            </div>

            {/* Course Details Modal */}
            {selectedCourse && (
                <div className={styles.modalOverlay} onClick={() => setSelectedCourse(null)}>
                    <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <div style={{ paddingRight: '2rem' }}>
                                <div className={styles.modalBadgeContainer}>
                                    <span className={`${styles.courseBadge} ${styles.badgeBlue}`}>
                                        {selectedCourse.code}
                                    </span>
                                </div>
                                <div className={styles.modalTitle} style={{ fontSize: '1.75rem' }}>
                                    {selectedCourse.name}
                                </div>
                            </div>
                            <button className={styles.closeButton} onClick={() => setSelectedCourse(null)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className={styles.modalBody}>

                            {/* Syllabus Section - Bullet Points */}
                            {selectedCourse.details.parts && selectedCourse.details.parts.map((part: any, index: number) => {
                                // Split content by periods followed by space to create bullets
                                const items = part.content.split('. ').filter((item: string) => item.trim().length > 0);

                                return (
                                    <div key={index} className={styles.modalSection}>
                                        {part.title && (
                                            <div className={styles.sectionHeaderWithIcon}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className={styles.bookIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                                {part.title}
                                            </div>
                                        )}
                                        <ul className={styles.syllabusList}>
                                            {items.map((item: string, i: number) => (
                                                <li key={i} className={styles.syllabusItem}>
                                                    <span className={styles.syllabusBullet}>•</span>
                                                    <span>{item.trim()}{!item.endsWith('.') ? '.' : ''}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                );
                            })}

                            {/* Books Section - Styled */}
                            {selectedCourse.details.books && (
                                <div className={styles.modalSection} style={{ marginTop: '3rem' }}>
                                    <div className={styles.sectionHeaderWithIcon}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className={styles.bookIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                        SUGGESTED BOOKS & REFERENCES
                                    </div>
                                    <ul className={styles.bookList}>
                                        {selectedCourse.details.books.map((book: string, index: number) => (
                                            <li key={index} className={styles.bookItem}>
                                                <div className={styles.bookNumber}>{index + 1}</div>
                                                <div className={styles.bookText}>{book}</div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MechanicsAndComputing;
