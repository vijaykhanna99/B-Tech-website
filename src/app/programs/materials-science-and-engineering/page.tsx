"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './mse.module.css';

const MaterialsScienceAndEngineering = () => {
    const [activeSemester, setActiveSemester] = useState(1);
    const [selectedCourse, setSelectedCourse] = useState<any>(null);
    const [activeTheme, setActiveTheme] = useState(1);
    const [activeTab, setActiveTab] = useState('home');
    const [activeOverviewSoftCoreTab, setActiveOverviewSoftCoreTab] = useState<string | null>(null);



    const semesters = [1, 2, 3, 4, 5, 6, 7, 8];

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
                name: "Mechanics, Oscillations, and Waves",
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
                code: "UCY 101",
                name: "Physical Principles of Chemistry",
                instructor: "Anshu Pandey",
                credits: "3:1",
                details: {
                    parts: [
                        {
                            title: "Syllabus & Topics",
                            content: "Overview of atoms, molecules and chemical bonding, intermolecular forces and interaction potentials. Introduction to quantum mechanics, postulates, exemplary exact solutions. Chemical thermodynamics, state functions, spontaneity, reaction thermodynamics. Chemical equilibrium and chemical kinetics, reaction coordinate diagrams. Properties of solutions, colligative properties."
                        }
                    ],
                    books: [
                        "D. A. McQuarrie, and J. D. Simon, Physical Chemistry – A Molecular Approach",
                        "R. J. Silbey, R. A. Alberty and M. G. Bawendi, Physical Chemistry",
                        "R. S. Berry, S. A. Rice and J. Ross, Physical Chemistry"
                    ],
                    instructorLink: "https://sscu.iisc.ac.in/pandey/"
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
                            content: "Classification of materials. Bonding and crystal/electronic/atomic structure of materials and their relationships with properties. Role of defects in material properties. Mass transport in materials and applications in manufacturing and processing. Thermodynamics of materials, phase diagrams and important of (meta)stability. Mechanics of materials: terminologies, types, and applications. Functional properties of materials: underlying physics and industrial applications. Overview of processing and manufacturing techniques. Role of materials in renewable energy, sustainability, and in extreme environments. Introduction to computations and AI/ML in materials. Innovation and entrepreneurship opportunities in materials science. Course will include case studies from automotive, electronics, biomedical, and energy sectors."
                        }
                    ],
                    books: [
                        "Callister, W.D., and Rethwisch, D.G., Materials Science and Engineering: An Introduction, Wiley.",
                        "Smith, W.F., and Hashemi, J., Foundations of Materials Science and Engineering, McGraw- Hill."
                    ],
                    instructorLink: "https://www.crystalmechanicslab.com/"
                }
            },
            { code: "UHS**", name: "Humanities", instructor: "-", credits: "2:0", pdf: "/humanities_courses.pdf" },
        ],
        2: [
            {
                isAlternative: true,
                alternatives: [
                    {
                        code: "UMA 102*",
                        name: "Analysis and Linear Algebra II",
                        instructor: "Purvi Gupta",
                        credits: "4:0",
                        instructorLink: "https://math.iisc.ac.in/~purvigupta/",
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
                            ]
                        }
                    },
                    {
                        code: "UPH 102*",
                        name: "Electricity, Magnetism, and Optics",
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
                code: "UENG 102",
                name: "Electrical and Electronics Engineering",
                instructor: "Kaushik Basu",
                credits: "3:1",
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
                    ],
                    instructorLink: "https://eecs.iisc.ac.in/people/kaushik-basu/"
                }
            },
            { code: "UENG 103", name: "Engineering Mechanics", instructor: "-", credits: "4:0" },
            {
                code: "UMT 202T",
                name: "Structure of Materials",
                instructor: "N. Ravishankar",
                credits: "2:1",
                details: {
                    parts: [
                        {
                            title: "Syllabus & Topics",
                            content: "Elements of bonding, structures of simple metallic, ionic and covalent solids; Coordination polyhedra, projections of structures, stacking; Lattices, symmetry operations, stereographic projection; Structure and thermodynamics of point defects and solid solutions, non-stoichiometry, ordered structures; Dislocations and slip, twinning and interfaces."
                        }
                    ],
                    books: [
                        "Kelly, A. and Groves, G. W., Crystallography & Crystal Defects, Addison Wesley",
                        "Barrett, C.S. and Massalski, T. B., Structure of Metals, Pergamon",
                        "West, A. R., Introduction to Solid State Chemistry, John Wiley"
                    ],
                    instructorLink: "https://mrc.iisc.ac.in/n-ravishankar/"
                }
            },
            { code: "-", name: "Humanities** / UG elective", instructor: "-", credits: "2-4" },
        ],
        3: [
            {
                code: "UMA 201",
                name: "Probability and Statistics",
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
                code: "UENG 101",
                name: "Algorithms and Programming",
                instructor: "L. Sunil Chandran, Viraj Kumar",
                credits: "3:1",
                details: {
                    multiInstructors: [
                        { name: "L. Sunil Chandran", link: "https://eecs.iisc.ac.in/people/sunil-chandran-l/" },
                        { name: "Viraj Kumar", link: "https://eecs.iisc.ac.in/people/prof-viraj-kumar/" }
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
                        "How to Think Like a Computer Scientist: Interactive Edition, based on the book by Allan Downy and Jeff Elkner",
                        "How to Solve it by Computer by R. G. Dromey, Pearson Education, 2007",
                        "Brian W. Kernighan and Dennis M. Ritchie, The C Programming Language. Prentice Hall of India, 2009",
                        "Introduction to Programming in Python by Robert Sedgewick, Kevin Wayne, and Robert Dondero, 1st edition, 2015",
                        "A Byte of Python by Swaroop C H",
                        "CPython implementation of binary heaps",
                        "Graphs and Graph Algorithms",
                        "An Introduction to Programming through C++ by Abhiram Ranade. McGraw Hill, 1st"
                    ]
                }
            },
            {
                code: "UMC 202",
                name: "Numerical Methods",
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
                    instructorLink: "https://cids.iisc.ac.in/people/ratikanta-behera/"
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
                            content: "Thermodynamic Systems, Thermodynamic Equilibrium, Zeroth Law of Thermodynamics, Temperature, Quasi-Static Processes; Properties of Pure Substances, Thermodynamic Property Tables and Charts, Ideal and Real Gases; Heat and Work Interactions; First Law of Thermodynamics, Internal Energy and Enthalpy, First Law Analysis of Closed and Open Systems; Second Law of Thermodynamics, Heat Engines and Refrigerators, Reversible and Irreversible Processes, Carnot Cycle; Entropy, Second Law Analysis of Closed and Open Systems, Third Law of Thermodynamics; Availability and Irreversibility, Exergy Analysis of Closed and Open Systems; Thermodynamic Property Relations; First and Second Law Analysis of Thermodynamic Cycles, Power and Refrigeration Cycles; Mixtures of Ideal Gases, Gas-Vapour Mixtures. • Lab Demonstrations. • Problem Solving using Software Tools."
                        }
                    ]
                }
            },
            { code: "-", name: "Humanities** / UG elective", instructor: "-", credits: "2:0 / 3:0" },
        ],
        4: [
            {
                code: "UMT 203",
                name: "Thermodynamics of Materials",
                instructor: "Chandan Srivastava",
                credits: "3:0",
                details: {
                    parts: [
                        {
                            title: "Syllabus & Topics",
                            content: "First law, enthalpy, thermochemistry; Second law, entropy, statistical interpretation; Helmholtz and Gibbs free energies, chemical potential; Solution thermodynamics; Conditions for equilibrium, phase rule, phase diagrams; Chemical reactions and equilibria; Surfaces and interfaces"
                        }
                    ],
                    books: [
                        "DeHoff, R.T. 2006. Thermodynamics in Materials Science, Taylor & Francis",
                        "Gaskell, D. R. 2003. Introduction to the Thermodynamics of Materials (4th Ed), Taylor & Francis"
                    ],
                    instructorLink: "https://sites.google.com/site/chandantem1/home/"
                }
            },
            {
                code: "UMT 205A",
                name: "Mechanics of Materials",
                instructor: "S. Karthikeyan",
                credits: "3:0",
                details: {
                    parts: [
                        {
                            title: "Syllabus & Topics",
                            content: "Structures, vector mechanics (statics) and types of loads; Introductory concepts in stress and strain and their transformation; Linear elasticity in single and poly-crystals and in amorphous solids; Stresses in constrained systems - thermal and misfit stresses; Viscoelasticity and hyper elasticity in polymers; Stress concentration; Fracture mechanics and toughening mechanisms; Introduction to plastic deformation; Uniaxial stress-strain curve and flow instabilities; Effect of strain, strain-rate and temperature of flow stress; Continuum-based yield criteria; Plastic deformation mechanisms - slip, twinning and diffusion; Introduction to dislocation theory - slip systems, critical resolved shear stress, strengthening mechanisms."
                        }
                    ],
                    books: [
                        "Beer, F. P., Johnston, E. R., DeWolf, J. T., and Mazurek, D.F. 2014. Mechanics of Materials, 7th edition, McGraw Hill",
                        "Hosford, W. 2010. Mechanical Behavior of Materials, 2nd edition, Cambridge University Press",
                        "Courtney, T. H. 2001. Mechanical Behavior of Materials, 2nd edition, Tata McGraw Hill",
                        "Ward, I. M. and Sweeney, J. 2012. Mechanical Properties of Solid Polymers, 3rd edition, Wiley"
                    ],
                    instructorLink: "https://materials.iisc.ac.in/~karthik/"
                }
            },
            {
                code: "UMT 309A",
                name: "Physics of Materials",
                instructor: "Subho Dasgupta",
                credits: "3:0",
                details: {
                    parts: [
                        {
                            title: "Syllabus & Topics",
                            content: "Brief review of the fundamentals of quantum mechanics, statistical mechanics, electrostatics and electrodynamics; Energy bands in crystals, density of states, electric conduction in metals and alloys, thermoelectric phenomenon and applications, semiconductors and devices, electrical properties of polymers, ceramics, dielectric and amorphous materials, classical and quantum mechanical description of optical properties, lasers, LEDs, photonics, magnetic phenomenon and applications, thermal properties of materials."
                        }
                    ],
                    books: [
                        "Kittel, C., Introduction to Solid State Physics, McGraw-Hill",
                        "Solymar, L. and Walsh, D., Lectures on Electrical Properties of Materials",
                        "Omar, M. A., Elementary Solid State Physics",
                        "Hummel, R. E., Electronic Properties of Materials",
                        "Hench, L.L, West, J.K. 1990. Principles of Electronic Ceramics, Wiley",
                        "West, A.F., Solid State Chemistry and its Applications, Wiley (2nd ed.)"
                    ],
                    instructorLink: "https://materials.iisc.ac.in/~dasgupta/pages/People.html"
                }
            },
            { code: "UENG 206", name: "Science of Design", instructor: "-", credits: "3:1" },
            { code: "-", name: "Humanities** / UG elective", instructor: "-", credits: "2-4" },
            { code: "UENG XXX", name: "Transport Processes", instructor: "-", credits: "3:0" },
        ],
        5: [
            {
                code: "UMT 301A",
                name: "Transport in Materials",
                instructor: "Abhik N. Choudhury",
                credits: "3:0",
                details: {
                    parts: [
                        {
                            title: "Syllabus & Topics",
                            content: "Point defects, Fick’s laws of diffusion, concept of jump frequency, activation energy, Kirkendall effect, solidification, nucleation, constitutional supercooling, sintering, interfaces, grain growth, solid state transformations, JMA theory, GP zone, Spinodal decomposition, ordering and martensitic transformations, effect of stress and electric current."
                        }
                    ],
                    books: [
                        "Reed-Hill, R. E. and Abbaschian, R. 2009. Physical Metallurgy Principles, Cengage",
                        "Porter, D. A. and Easterling, K. E. 2009. Phase Transformations in Metals and Alloys, Taylor and Francis"
                    ],
                    instructorLink: "https://materials.iisc.ac.in/faculty/abhik"
                }
            },
            {
                code: "UMT 311",
                name: "Functional Properties Lab",
                instructor: "Subho Dasgupta",
                credits: "0:1",
                details: {
                    parts: [
                        {
                            title: "Syllabus & Topics",
                            content: "Resistivity measurement by different methods, four probe method, determination of B-H curve, Curie point measurement Hall effect experiment, magnetostriction measurement, measurement of dielectric constant as function of temperature, Seebeck effect, efficiency of solar cell."
                        }
                    ],
                    instructorLink: "https://materials.iisc.ac.in/~dasgupta/pages/People.html"
                }
            },
            {
                code: "UMT 312L",
                name: "Mechanical Testing Lab",
                instructor: "S. Karthikeyan",
                credits: "0:1",
                details: {
                    parts: [
                        {
                            title: "Syllabus & Topics",
                            content: "Overview of solid mechanics, Overview of deformation and failure mechanisms in metals, ceramics and polymers, Mechanical testing techniques: Tensile and compression, hardness, fatigue, impact, creep, fracture, Introduction to instrumentation, controls and data acquisition."
                        }
                    ],
                    books: [
                        "Hosford, W. 2010. Mechanical Behavior of Materials, 2nd edition, Cambridge University Press",
                        "Courtney, T. H. 2001. Mechanical Behavior of Materials, 2nd edition, Tata McGraw Hill",
                        "Ward, I. M. and Sweeney, J. 2012. Mechanical Properties of Solid Polymers, 3rd edition, Wiley"
                    ],
                    instructorLink: "https://materials.iisc.ac.in/~karthik/"
                }
            },
            { code: "-", name: "Humanities** / elective", instructor: "-", credits: "2-4" },
            { code: "MT/MRC", name: "Thematic electives (I/II/III)", instructor: "-", credits: "9", isThematicLink: true },
            {
                code: "Free Electives",
                name: "Free Electives",
                instructor: "-",
                credits: "2:0",
                details: {
                    parts: [
                        {
                            title: "Note",
                            content: "Any undergraduate or master-level course across the institute can be considered as a free elective."
                        }
                    ]
                }
            },
        ],
        6: [
            {
                code: "UMT 313",
                name: "Materials Innovation (Lab)",
                instructor: "Sai Gautam Gopalakrishnan",
                credits: "0:2",
                details: {
                    parts: [
                        {
                            title: "Syllabus & Topics",
                            content: "End-to-end innovation going from ideation to prototype, run in a semester-long project- mode. Each project will be executed in groups of students and will involve steps related to design and computations at the beginning, choice of synthesis/processing/manufacturing methods to produce a prototype, utilize suitable characterization techniques to verify if the desired specifications are achieved. Feedback loop within various stages of the project to rectify issues and arrive at the final prototype."
                        }
                    ],
                    instructorLink: "https://fellows.ias.ac.in/profile/v/AS2022010"
                }
            },
            { code: "-", name: "Humanities** / elective", instructor: "-", credits: "6-7" },
            { code: "MT/MRC", name: "Thematic electives (I/II/III)", instructor: "-", credits: "9", isThematicLink: true },
        ],
        7: [
            { code: "ISP 1", name: "Independent Study / Research Experience (Optional)", instructor: "Faculty Advisor", credits: "0-6" },
            { code: "Core Elective", name: "Major Electives", instructor: "-", credits: "6-12" },
        ],
        8: [
            { code: "ISP 2", name: "Independent Study / Research Experience (Optional)", instructor: "Faculty Advisor", credits: "0-6" },
            { code: "Core Elective", name: "Major Electives", instructor: "-", credits: "6-12" },
        ],
    };

    const currentCourses = semesterCourses[activeSemester] || [];

    const getTotalCredits = (sem: number) => {
        if (sem === 1) return '17';
        if (sem === 2) return '17-19';
        if (sem === 3) return '18-19';
        if (sem === 4) return '18-20';
        if (sem === 5) return '17-19';
        if (sem === 6) return '17-18';
        if (sem === 7) return '12';
        if (sem === 8) return '12';
        return '';
    };

    const getReducedCredits = (sem: number) => {
        if (sem === 2) return '13-15 (Min 11 + UHS)';
        if (sem === 3) return '14-16 (Any Course)';
        if (sem === 4) return '14-16 (Any Course)';

        return '';
    };

    const getEnhancedCredits = (sem: number) => {
        if (sem === 4) return '18-21';
        if (sem === 5) return '17-21';
        if (sem === 6) return '17-21';
        if (sem === 7) return '21';
        if (sem === 8) return '21';
        return '';
    };

    return (
        <div className={styles.pageContainer}>
            {/* Top Header Bar */}
            {/* Top Header Bar - Removed Back Link */}
            <div className={styles.headerSection}>
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
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <Image
                    src="/banner_hq_2.jpg"
                    alt="Materials Science and Engineering Banner"
                    fill
                    priority
                    style={{ objectFit: 'cover', zIndex: 0 }}
                    sizes="100vw"
                />
                <div style={{ position: 'relative', zIndex: 2 }}>
                    <span className={styles.heroTag}>Bachelor of Technology</span>
                    <h1 className={styles.heroHeading}>Materials Science and Engineering</h1>
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
                        <button
                            className={`${styles.pageTabButton} ${activeTab === 'mtech' ? styles.pageTabButtonActive : ''}`}
                            onClick={() => setActiveTab('mtech')}
                        >
                            <svg className={styles.tabIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                <path d="M6 12v5c3 3 9 3 12 0v-5" />
                            </svg>
                            Continuing to M.Tech
                        </button>
                    </div>
                </div>

                {/* Home Tab Content */}
                {activeTab === 'home' && (
                    <div className={styles.mainContent}>
                        <div className={styles.introSection}>
                            <div className={styles.aboutWithVideo}>
                                <div>
                                    <h1 className={styles.heroHeading} style={{ fontSize: '2rem', color: '#0f172a', marginBottom: '1rem' }}>
                                        About the Programme
                                    </h1>
                                    <p className={styles.introText} style={{ marginBottom: '1.5rem' }}>
                                        The BTech program in Materials Science and Engineering is aimed at producing engineers and leaders who will be at the forefront of the materials revolution that drives our transition into a developed, sustainable, and futuristic society that enables the advancements in artificial intelligence, quantum computing, space, healthcare, energy, and infrastructure.
                                    </p>
                                    <p className={styles.introText} style={{ marginBottom: 0 }}>
                                        With a strong emphasis on scientific fundamentals, interdisciplinary learning, and practical problem-solving, the programme equips students with the knowledge and skills required for impactful careers in industry, deep-tech innovation, and advanced engineering domains, while also providing pathways toward higher studies and research.
                                    </p>
                                </div>
                                <div className={styles.videoSection}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', height: '100%' }}>
                                        <div style={{
                                            position: 'relative',
                                            width: '100%',
                                            height: '220px',
                                            borderRadius: '16px',
                                            overflow: 'hidden',
                                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                                        }}>
                                            <Image
                                                src="/images/campus-life/image8.jpg"
                                                alt="Materials Science Facility"
                                                fill
                                                style={{ objectFit: 'cover' }}
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />
                                        </div>
                                        <div style={{
                                            position: 'relative',
                                            width: '100%',
                                            height: '220px',
                                            borderRadius: '16px',
                                            overflow: 'hidden',
                                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                                        }}>
                                            <Image
                                                src="/images/campus-life/image9.jpg"
                                                alt="Research at Materials Department"
                                                fill
                                                style={{ objectFit: 'cover' }}
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginTop: '2rem', color: '#334155', lineHeight: '1.7' }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1e293b', marginBottom: '1rem' }}>
                                    Key Highlights
                                </h3>
                                <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <li><strong>Materials Science Core:</strong> Comprehensive training in structure–property–processing relationships of materials, covering metals, ceramics, polymers, electronic materials, biomaterials, and emerging functional materials.</li>
                                    <li><strong>Interdisciplinary scientific foundation:</strong> Strong grounding in physics, chemistry, biology, mathematics, and computational methods, enabling students to approach materials challenges from multiple scientific perspectives.</li>
                                    <li><strong>Innovation-driven curriculum:</strong> Focus on designing, characterising, and engineering materials for next-generation applications across energy, electronics, healthcare, aerospace, and sustainability.</li>
                                    <li><strong>Institute-wide collaboration:</strong> Opportunities to engage with IISc initiatives such as the medical school, AI and high-performance computing centres, and specialised centres of excellence in advanced materials and characterisation.</li>
                                    <li><strong>Flexibility through electives and specialisations:</strong> Students can shape their academic trajectory through interdisciplinary electives and diverse project opportunities across the Institute.</li>
                                    <li><strong>Industry and research exposure:</strong> Access to world-class laboratories, collaborative projects, and IISc’s ecosystem in Bengaluru — India’s technology hub — enabling strong academic, industrial, and strategic impact.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Why Materials Science & Engineering Section */}
                        <div style={{ textAlign: 'center', marginTop: '5rem', marginBottom: '4rem' }}>
                            <h2 style={{
                                fontSize: '2rem',
                                fontWeight: '700',
                                color: '#0f172a',
                                letterSpacing: '-0.02em',
                                marginBottom: '1rem'
                            }}>
                                Why <span style={{ color: '#2563eb' }}>Materials Science & Engineering</span>
                            </h2>
                            <p style={{
                                color: '#475569',
                                fontSize: '1.1rem',
                                maxWidth: '900px',
                                margin: '0 auto',
                                lineHeight: '1.7'
                            }}>
                                Fostering innovation through the understanding and design of advanced materials for future technologies.
                            </p>
                        </div>

                        <div className="features-grid" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '2rem',
                            marginBottom: '4rem',
                            width: '100%'
                        }}>
                            {[
                                {
                                    title: "The Foundation",
                                    heading: "Why Materials Science & Engineering?",
                                    points: [
                                        "Materials Science & Engineering focuses on understanding how the structure, properties, and processing of materials influence their performance in real-world applications.",
                                        "The field combines principles from physics, chemistry, and engineering to design advanced materials used in electronics, aerospace, energy, and biomedical technologies.",
                                        "Students develop strong analytical and experimental skills to innovate at the material level."
                                    ],
                                    theme: "slate",
                                    icon: (
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <line x1="12" y1="16" x2="12" y2="12"></line>
                                            <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                        </svg>
                                    )
                                },
                                {
                                    title: "The Institute",
                                    heading: "Why Materials Science & Engineering at IISc?",
                                    points: [
                                        "IISc offers a research-driven environment with strong interdisciplinary foundations across science and engineering.",
                                        "Students gain exposure to advanced laboratories, modern characterization techniques, and collaborative research opportunities.",
                                        "The academic structure emphasizes both fundamental science and engineering applications of materials."
                                    ],
                                    theme: "indigo",
                                    icon: (
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M3 21h18M5 21V7l8-4 8 4v14M8 21v-4h8v4" />
                                        </svg>
                                    )
                                },
                                {
                                    title: "Uniqueness",
                                    heading: "What is Unique about IISc Materials Science & Engineering Program?",
                                    points: [
                                        "Core scientific and engineering fundamentals are built in the early years, followed by flexible electives aligned with student interests.",
                                        "The curriculum integrates experimentation, computational methods, and real-world research problems.",
                                        "This flexibility allows students to explore areas such as nanomaterials, electronic materials, biomaterials, and energy materials."
                                    ],
                                    theme: "teal",
                                    icon: (
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                    )
                                },
                                {
                                    title: "Career",
                                    heading: "What are the Career Options after IISc Materials Science & Engineering?",
                                    points: [
                                        "Graduates can pursue careers in semiconductor technology, advanced manufacturing, aerospace materials, energy storage, and research laboratories.",
                                        "Higher studies opportunities include nanotechnology, biomaterials, electronic materials, metallurgy, and materials physics.",
                                        "Emerging areas such as sustainable materials, quantum materials, and next-generation electronics are also growing pathways."
                                    ],
                                    theme: "blue",
                                    icon: (
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                        </svg>
                                    )
                                }
                            ].map((card, idx) => (
                                <div key={idx} style={{
                                    background: '#ffffff',
                                    borderRadius: '16px',
                                    padding: '2.5rem',
                                    border: '1px solid #e2e8f0',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                                    transition: 'all 0.3s ease',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%',
                                    isolation: 'isolate'
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
                                        e.currentTarget.style.borderColor = '#cbd5e1';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)';
                                        e.currentTarget.style.borderColor = '#e2e8f0';
                                    }}
                                >
                                    {/* Accent Top Line */}
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: '4px',
                                        background: card.theme === 'slate' ? '#475569' :
                                            card.theme === 'indigo' ? '#4f46e5' :
                                                card.theme === 'teal' ? '#0d9488' : '#2563eb'
                                    }} />

                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                                        <span style={{
                                            fontSize: '0.8rem',
                                            fontWeight: '700',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em',
                                            color: card.theme === 'slate' ? '#475569' :
                                                card.theme === 'indigo' ? '#4f46e5' :
                                                    card.theme === 'teal' ? '#0d9488' : '#2563eb',
                                            background: card.theme === 'slate' ? '#f1f5f9' :
                                                card.theme === 'indigo' ? '#eef2ff' :
                                                    card.theme === 'teal' ? '#ccfbf1' : '#eff6ff',
                                            padding: '0.4rem 0.8rem',
                                            borderRadius: '6px'
                                        }}>
                                            {card.title}
                                        </span>
                                        <div style={{ color: '#94a3b8' }}>
                                            {card.icon}
                                        </div>
                                    </div>

                                    <h3 style={{
                                        fontSize: '1.25rem',
                                        fontWeight: '800',
                                        color: '#0f172a',
                                        marginBottom: '1rem',
                                        lineHeight: '1.3',
                                        minHeight: '3rem'
                                    }}>
                                        {card.heading}
                                    </h3>

                                    <ul style={{
                                        margin: 0,
                                        paddingLeft: '1.5rem',
                                        color: '#334155',
                                        flex: 1,
                                        listStyleType: 'disc',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '0.75rem'
                                    }}>
                                        {card.points.map((point, i) => (
                                            <li key={i} style={{ lineHeight: '1.6' }}>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <style jsx>{`
                            @media (max-width: 900px) {
                                .features-grid {
                                    grid-template-columns: 1fr !important;
                                }
                            }
                        `}</style>
                    </div>
                )}

                {/* Course Structure Tab Content */}
                {activeTab === 'structure' && (
                    <>
                        {/* Basic Structure */}
                        <div className={styles.overviewSection}>
                            <h2 className={styles.sectionHeading}>Basic Structure</h2>
                            <p className={styles.overviewText}>
                                The Bachelor of Technology (Materials Science and Engineering) is a four-year programme, organised into 8 semesters. Students need to complete 128 credits as specified in the table and sections below.
                            </p>

                            <div style={{ marginBottom: '2rem', marginTop: '1.5rem' }}>
                                <div className={styles.tableContainer}>
                                    <table className={styles.courseTable}>
                                        <thead>
                                            <tr>
                                                <th rowSpan={2} style={{ verticalAlign: 'middle', textAlign: 'center' }}>Core</th>
                                                <th rowSpan={2} style={{ verticalAlign: 'middle', textAlign: 'center' }}>Breadth Soft Core</th>
                                                <th rowSpan={2} style={{ verticalAlign: 'middle', textAlign: 'center' }}>Humanities</th>
                                                <th colSpan={4} style={{ verticalAlign: 'middle', textAlign: 'center' }}>Soft Core</th>
                                                <th rowSpan={2} style={{ verticalAlign: 'middle', textAlign: 'center' }}>ISP/Project</th>
                                                <th rowSpan={2} style={{ verticalAlign: 'middle', textAlign: 'center' }}>Elective</th>
                                                <th rowSpan={2} style={{ verticalAlign: 'middle', textAlign: 'center' }}>Total</th>
                                            </tr>
                                            <tr>
                                                <th style={{ textAlign: 'center', padding: '0.5rem' }}>I</th>
                                                <th style={{ textAlign: 'center', padding: '0.5rem' }}>II</th>
                                                <th style={{ textAlign: 'center', padding: '0.5rem' }}>III</th>
                                                <th style={{ textAlign: 'center', padding: '0.5rem' }}>IV</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr style={{ textAlign: 'center' }}>
                                                <td>65</td>
                                                <td>4</td>
                                                <td>9</td>
                                                <td>6</td>
                                                <td>6</td>
                                                <td>6</td>
                                                <td>0-24</td>
                                                <td>0-12</td>
                                                <td>8*</td>
                                                <td style={{ fontWeight: 'bold' }}>128</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td colSpan={5} style={{ textAlign: 'center', fontWeight: 'bold', backgroundColor: '#f8fafc' }}>
                                                    42<sup>#</sup>
                                                </td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div style={{ fontSize: '0.95rem', color: '#334155', marginTop: '1rem' }}>
                                <div style={{ marginBottom: '0.25rem' }}>
                                    <strong>Note:</strong>
                                </div>
                                <div style={{ marginBottom: '0.25rem' }}>
                                    <sup>#</sup> A student shall complete a total of 42 credits from Soft Core Courses (I, II, and III), Core Electives, and ISP. A minimum of 6 credits each must be completed from Soft core I, II & III.
                                </div>
                                <div>
                                    *Excess credits from any pool will be counted towards elective credits.
                                </div>
                            </div>
                        </div>

                        {/* Overview of Course Requirements */}
                        <div className={styles.overviewSection} style={{ marginTop: '3rem' }}>
                            <h2 className={styles.sectionHeading}>Overview of Course Requirements</h2>
                            {/* i) CORE */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1e293b', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                                    i) CORE
                                </h3>
                                <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#334155', fontSize: '1rem', lineHeight: '1.6' }}>
                                    <li style={{ marginBottom: '0.5rem' }}>
                                        <strong>Sciences:</strong> Analysis and Linear Algebra I, Mechanics, Oscillations and Waves, Physical Principles of Chemistry, Electricity, Probability and Statistics
                                    </li>
                                    <li style={{ marginBottom: '0.5rem' }}>
                                        <strong>Engineering:</strong> Introduction to Electrical and Electronics Engineering, Algorithms and Programming, Numerical Methods, Engineering Mechanics, Thermodynamics, Science of Design, Transport phenomena.
                                    </li>
                                    <li>
                                        <strong>Materials:</strong> Introduction, Structure, Thermodynamics, Mechanics, Physics, and Transport.
                                    </li>
                                </ul>
                            </div>

                            {/* ii) BREADTH */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1e293b', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                                    ii) BREADTH SOFT CORE
                                </h3>
                                <p style={{ margin: 0, color: '#334155', fontSize: '1rem', lineHeight: '1.6' }}>
                                    4 credits from a selection of Mathematics and Physics subjects.
                                </p>
                                <p style={{ margin: '0.5rem 0 0', color: '#334155', fontStyle: 'italic', fontSize: '0.95rem' }}>
                                    The list of core and breadth soft core courses and their semester wise break-up can be found in the scheme of instructions (SoI).
                                </p>
                            </div>

                            {/* iii) SOFT CORE */}
                            <div id="soft-core-section" style={{ marginBottom: '1.5rem' }}>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1e293b', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                                    iii) SOFT CORE
                                </h3>
                                <p style={{ margin: 0, color: '#334155', marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                                    There are four Soft Core pools.
                                </p>
                                <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#334155', marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                                    <li style={{ marginBottom: '0.5rem' }}>
                                        <strong>Soft Core Pool I (Structural Materials):</strong> Courses pertaining to the Structural Materials theme are included in this pool. Students are required to complete a minimum of 06 credits from this pool by the end of the 6th semester.
                                    </li>
                                    <li style={{ marginBottom: '0.5rem' }}>
                                        <strong>Soft Core Pool II (Functional Materials):</strong> Courses pertaining to the Functional Materials theme are included in this pool. Students are required to complete a minimum of 06 credits from this pool by the end of the 6th semester.
                                    </li>
                                    <li style={{ marginBottom: '0.5rem' }}>
                                        <strong>Soft Core Pool III (Computational Materials):</strong> Courses pertaining to the Computational Materials theme are included in this pool. Students are required to complete a minimum of 06 credits from this pool by the end of the 6th semester.
                                    </li>
                                    <li>
                                        <strong>Soft Core Pool IV:</strong> This pool consists of all courses listed within soft core pools I, II, and III, any MTE/MRC department courses that are offered, and select non-MTE/non-MRC department courses that are not listed in soft core pools I, II, and III.
                                    </li>
                                </ul>
                                <p style={{ margin: 0, color: '#334155', marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                                    In addition, students are required to complete a minimum of 42 credits in total from the Soft Core pools by the end of the 8th semester.
                                </p>
                                <p style={{ margin: 0, color: '#334155', fontStyle: 'italic', marginBottom: '1rem', fontSize: '0.95rem' }}>
                                    The list of courses in each soft-core pool is specified below.
                                </p>

                                {/* Accordions */}
                                <div className={styles.studyTrackAccordionContainer} style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                                    {/* Structural Accordion */}
                                    <div className={styles.accordionItem}>
                                        <button
                                            className={`${styles.accordionHeader} ${activeOverviewSoftCoreTab === 'structural' ? styles.accordionHeaderActive : ''}`}
                                            onClick={() => setActiveOverviewSoftCoreTab(activeOverviewSoftCoreTab === 'structural' ? null : 'structural')}
                                        >
                                            <span className={styles.accordionTitle} style={{ fontSize: '1rem' }}>
                                                Pool I: Structural Materials
                                            </span>
                                            <span className={styles.accordionIcon} style={{ fontSize: '1.25rem' }}>
                                                {activeOverviewSoftCoreTab === 'structural' ? '−' : '+'}
                                            </span>
                                        </button>
                                        {activeOverviewSoftCoreTab === 'structural' && (
                                            <div className={styles.accordionContent} style={{ padding: '1.5rem' }}>
                                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', columnGap: '4rem' }}>
                                                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#475569', fontSize: '0.95rem' }}>
                                                        <li><strong>MT 201</strong> (Phase Transformations)</li>
                                                        <li><strong>MT 202</strong> (Thermodynamics and Kinetics of Materials)*</li>
                                                        <li><strong>MT 204</strong> (Structure and Properties of Materials)*</li>
                                                        <li><strong>MT 205</strong> (Structural Characterization of materials)</li>
                                                        <li><strong>MT 208</strong> (Diffusion in solids)</li>
                                                    </ul>
                                                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#475569', fontSize: '0.95rem' }}>
                                                        <li><strong>MT 209</strong> (Defects in Materials)</li>
                                                        <li><strong>MT 220</strong> (Microstructural Engineering of Structural Materials)</li>
                                                        <li><strong>MT 253</strong> (Mechanical Behavior of Materials)</li>
                                                        <li><strong>MT 255</strong> (Solidification Processing)</li>
                                                        <li><strong>MT 309</strong> (Introduction to Manufacturing Science)</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Functional Accordion */}
                                    <div className={styles.accordionItem}>
                                        <button
                                            className={`${styles.accordionHeader} ${activeOverviewSoftCoreTab === 'functional' ? styles.accordionHeaderActive : ''}`}
                                            onClick={() => setActiveOverviewSoftCoreTab(activeOverviewSoftCoreTab === 'functional' ? null : 'functional')}
                                        >
                                            <span className={styles.accordionTitle} style={{ fontSize: '1rem' }}>
                                                Pool II: Functional Materials
                                            </span>
                                            <span className={styles.accordionIcon} style={{ fontSize: '1.25rem' }}>
                                                {activeOverviewSoftCoreTab === 'functional' ? '−' : '+'}
                                            </span>
                                        </button>
                                        {activeOverviewSoftCoreTab === 'functional' && (
                                            <div className={styles.accordionContent} style={{ padding: '1.5rem' }}>
                                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', columnGap: '4rem' }}>
                                                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#475569', fontSize: '0.95rem' }}>
                                                        <li><strong>MT 213</strong> (Electronic Properties of Materials)* OR <strong>IN 232</strong> (Concepts in Solid State Physics)</li>
                                                        <li><strong>MT 211</strong> (Magnetism, Magnetic Materials and Devices)</li>
                                                        <li><strong>MT 240</strong> (Principles of Electrochemistry and Corrosion) OR <strong>SS 209</strong> (Electrochemical Systems)</li>
                                                    </ul>
                                                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#475569', fontSize: '0.95rem' }}>
                                                        <li><strong>MT 312</strong> (Polymer Engineering and Sustainable Materials)</li>
                                                        <li><strong>MT 271</strong> (Introduction to Biomaterials Science and Engineering) OR <strong>MR 203</strong> (Introduction to Biomaterials)</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Computational Accordion */}
                                    <div className={styles.accordionItem}>
                                        <button
                                            className={`${styles.accordionHeader} ${activeOverviewSoftCoreTab === 'computational' ? styles.accordionHeaderActive : ''}`}
                                            onClick={() => setActiveOverviewSoftCoreTab(activeOverviewSoftCoreTab === 'computational' ? null : 'computational')}
                                        >
                                            <span className={styles.accordionTitle} style={{ fontSize: '1rem' }}>
                                                Pool III: Computational Materials
                                            </span>
                                            <span className={styles.accordionIcon} style={{ fontSize: '1.25rem' }}>
                                                {activeOverviewSoftCoreTab === 'computational' ? '−' : '+'}
                                            </span>
                                        </button>
                                        {activeOverviewSoftCoreTab === 'computational' && (
                                            <div className={styles.accordionContent} style={{ padding: '1.5rem' }}>
                                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', columnGap: '4rem' }}>
                                                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#475569', fontSize: '0.95rem' }}>
                                                        <li><strong>MT 217</strong> (Computational Mathematics for Materials Engineers)* OR <strong>CH 202</strong> (Numerical methods)</li>
                                                        <li><strong>MT 218</strong> (Modelling and Simulation in Materials Engineering)</li>
                                                        <li><strong>MT 227</strong> (Introduction to Crystal Mechanics and Plasticity)</li>
                                                    </ul>
                                                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#475569', fontSize: '0.95rem' }}>
                                                        <li><strong>MT 303</strong> (Materials Informatics)</li>
                                                        <li><strong>MT 305</strong> (Integrated Computational Materials Engineering)</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Non-MTE Accordion */}
                                    <div className={styles.accordionItem}>
                                        <button
                                            className={`${styles.accordionHeader} ${activeOverviewSoftCoreTab === 'non_mte' ? styles.accordionHeaderActive : ''}`}
                                            onClick={() => setActiveOverviewSoftCoreTab(activeOverviewSoftCoreTab === 'non_mte' ? null : 'non_mte')}
                                        >
                                            <span className={styles.accordionTitle} style={{ fontSize: '1rem' }}>
                                                Pool IV: Non-MTE / Non MRC
                                            </span>
                                            <span className={styles.accordionIcon} style={{ fontSize: '1.25rem' }}>
                                                {activeOverviewSoftCoreTab === 'non_mte' ? '−' : '+'}
                                            </span>
                                        </button>
                                        {activeOverviewSoftCoreTab === 'non_mte' && (
                                            <div className={styles.accordionContent} style={{ padding: '1.5rem' }}>
                                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', columnGap: '4rem' }}>
                                                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#475569', fontSize: '0.95rem' }}>
                                                        <li><strong>NE 240</strong> (Materials Design Principles)</li>
                                                        <li><strong>NE 201</strong> (Micro and Nano Characterization Methods) OR <strong>IN 201</strong> (Analytical Instrumentation)</li>
                                                        <li><strong>NE 205 / IN 214 / E3 282</strong> (Semiconductor Devices)</li>
                                                        <li><strong>IN 224</strong> (Nanoscience and Device Fabrication)</li>
                                                        <li><strong>PD 201</strong> (Elements of Design) OR <strong>NE 203</strong> (Advanced fabrication)</li>
                                                        <li><strong>QT 204</strong> (Introduction to Materials for Quantum Technology)</li>
                                                        <li><strong>SS 205</strong> (Symmetry and Structure in the Solid State)</li>
                                                    </ul>
                                                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#475569', fontSize: '0.95rem' }}>
                                                        <li><strong>PD 202</strong> (Elements of solid and fluid mechanics)</li>
                                                        <li><strong>PH 351</strong> (Crystal Growth) OR <strong>NE 241</strong> (Materials synthesis)</li>
                                                        <li><strong>QT 207</strong> (Introduction to Quantum Computing)</li>
                                                        <li><strong>PD 212</strong> (Computer Aided Design)</li>
                                                        <li><strong>CE 235</strong> (Optimization Methods)</li>
                                                        <li><strong>UMC 203</strong> (Introduction to AI & ML)</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* iv) PROJECTS */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1e293b', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                                    iv) PROJECTS
                                </h3>
                                <p style={{ margin: 0, color: '#444' }}>
                                    ISP stands for Independent Study Project. ISP-I (semester 7), ISP-II (semester 8) carries 6 credits each. Detailed rules governing ISP/Research Projects are specified in Section 5.6.
                                </p>
                            </div>

                            {/* v) ELECTIVES */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1e293b', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                                    v) ELECTIVES
                                </h3>
                                <p style={{ margin: 0, color: '#444' }}>
                                    Elective credits can be fulfilled by passing any course offered across the institute. Some useful elective courses are also provided under the category of suggested electives in the SoI.
                                </p>
                            </div>
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
                                            if (course.isHeader) {
                                                return (
                                                    <tr key={index} style={{ backgroundColor: '#f1f5f9' }}>
                                                        <td colSpan={4} style={{ fontWeight: '700', color: '#1e293b', borderBottom: '1px solid #e5e7eb', padding: '1rem', paddingLeft: '1.5rem' }}>
                                                            {course.title}
                                                        </td>
                                                    </tr>
                                                );
                                            }
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
                                            if (course.isOr) {
                                                return (
                                                    <tr key={index}>
                                                        <td colSpan={4} style={{ textAlign: 'center', fontWeight: '700', color: '#64748b', padding: '0.75rem', letterSpacing: '0.05em' }}>
                                                            — OR —
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
                                                        ) : course.isThematicLink ? (
                                                            <a
                                                                href="#thematic-electives"
                                                                className={styles.courseLink}
                                                            >
                                                                {course.code}
                                                            </a>
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
                                                        ) : course.isThematicLink ? (
                                                            <a
                                                                href="#thematic-electives"
                                                                className={styles.courseLink}
                                                            >
                                                                {course.name}
                                                            </a>
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
                            {/* Note below table */}
                            {(activeSemester >= 2 && activeSemester <= 6) && (
                                <div className={styles.note}>
                                    <div style={{ fontWeight: 700, marginBottom: '0.75rem', color: '#0f172a', fontSize: '1rem' }}>Note:</div>
                                    <div style={{ marginLeft: '0.5rem' }}>
                                        <div style={{ fontWeight: 700, marginBottom: '0.5rem', color: '#334155' }}>** Humanities:</div>
                                        <div style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.35rem', color: '#475569' }}>
                                            <div>A. Humanities courses cannot be dropped in both semesters II and III.</div>
                                            <div>B. Humanities courses cannot be dropped in both semesters IV and V.</div>
                                            <div>C. Students must complete 9 credits in humanities pool by the end of six semester.</div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {(activeSemester === 7 || activeSemester === 8) && (
                                <div className={styles.note} style={{ marginTop: '2rem', padding: '1.5rem', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#334155', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                        <p style={{ margin: 0 }}>
                                            <strong>Independent Study / Research Project:</strong> Students can choose to undertake an independent study/research experience advised or
                                            co-advised by a faculty member of the Materials Engineering program. If the primary advisor of the project is not affiliated to Materials Engineering, then the student will have
                                            to nominate a co-advisor from the program for supervision. The project, which is fully optional, can be worth a maximum of 6 credits each in the 7th and 8th semesters.
                                        </p>
                                        <p style={{ margin: 0 }}>
                                            Students have to satisfy eligibility criteria, as notified in due course, to take up a research project (or continue with their existing project) in the 8th semester. If a student does not satisfy the eligibility s(he)
                                            will have to take major electives to fulfil the credit requirements in the 7th and/or 8th semester. Students who have taken up a project in their
                                            7th semester can also choose not to take up a project in their 8th semester.
                                        </p>
                                        <p style={{ margin: 0, fontStyle: 'italic', color: '#475569' }}>
                                            Note that the option of doing either independent study/research project or courses is available only.
                                        </p>
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

                    </>
                )}

                {activeTab === 'mtech' && (
                    <>
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

export default MaterialsScienceAndEngineering;
