"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './mse.module.css';

const MaterialsScienceAndEngineering = () => {
    const [activeSemester, setActiveSemester] = useState(1);
    const [selectedCourse, setSelectedCourse] = useState<any>(null);
    const [activeTheme, setActiveTheme] = useState(1);

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
            { code: "UHS", name: "Humanities (Mandatory)*", instructor: "-", credits: "2:0", pdf: "/humanities_courses.pdf" },
        ],
        2: [
            {
                code: "UMA 102*",
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
                code: "UPH 102*",
                name: "Electricity, Magnetism, and Optics",
                instructor: "Gaurav Narain",
                credits: "3:1",
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
                    ],
                    instructorLink: "https://chep.iisc.ac.in/faculty/"
                }
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
                code: "UMT 202T/UMT 202L",
                name: "Structure of Materials(Theory/Lab)",
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
            { code: "UHS", name: "Humanities / UG elective", instructor: "-", credits: "2-4" },
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
            { code: "Elective", name: "Humanities / UG elective", instructor: "-", credits: "2:0 / 3:0" },
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
            { code: "Elective", name: "Humanities / UG elective", instructor: "-", credits: "2-4" },
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
            { code: "UHS", name: "Humanities / elective", instructor: "-", credits: "2-4" },
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
            { code: "Elective", name: "Humanities / elective", instructor: "-", credits: "6-7" },
            { code: "MT/MRC", name: "Thematic electives (I/II/III)", instructor: "-", credits: "9", isThematicLink: true },
        ],
        7: [
            { code: "XXX", name: "ISP-I", instructor: "-", credits: "0-6" },
            { code: "Core Elective", name: "Soft core I/II/III/ IV", instructor: "-", credits: "6-12" },
        ],
        8: [
            { code: "XXX", name: "ISP-II/Project/Core Elective", instructor: "-", credits: "6:0" },
            { code: "Core Elective", name: "Core Elective", instructor: "-", credits: "6" },
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
        if (sem === 5) return '14-15 (Any Course)';
        if (sem === 6) return '14-15 (Min 14 + UHS)';
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
            <div className={styles.headerSection}>
                <Link href="/departments" className={styles.backLink}>
                    ← Back to Departments
                </Link>
                <div className={styles.programTitle}>
                    B.Tech in Materials Science and Engineering
                </div>
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
                    <span className={styles.heroTag}>UNDERGRADUATE PROGRAM</span>
                    <h1 className={styles.heroHeading}>Materials Science and Engineering</h1>
                </div>
            </div>

            <div className={styles.contentWrapper}>
                {/* Course Overview */}
                <div className={styles.overviewSection}>
                    <h2 className={styles.sectionHeading}>Course Overview</h2>
                    <p className={styles.overviewText}>
                        The B.Tech program in Materials Science and Engineering provides a comprehensive education in the processing, structure, properties, and performance of materials. It integrates fundamental sciences with engineering principles to prepare students for challenges in advanced materials development.
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
                                    <th style={{ width: '10%', textAlign: 'center' }}>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentCourses.map((course: any, index: number) => {
                                    if (course.isHeader) {
                                        return (
                                            <tr key={index} style={{ backgroundColor: '#f1f5f9' }}>
                                                <td colSpan={5} style={{ fontWeight: '700', color: '#1e293b', borderBottom: '1px solid #e5e7eb', padding: '1rem', paddingLeft: '1.5rem' }}>
                                                    {course.title}
                                                </td>
                                            </tr>
                                        );
                                    }
                                    if (course.isOr) {
                                        return (
                                            <tr key={index}>
                                                <td colSpan={5} style={{ textAlign: 'center', fontWeight: '700', color: '#64748b', padding: '0.75rem', letterSpacing: '0.05em' }}>
                                                    — OR —
                                                </td>
                                            </tr>
                                        );
                                    }
                                    return (
                                        <tr key={index}>
                                            <td className={styles.courseCode}>{course.code}</td>
                                            <td className={styles.courseName}>{course.name}</td>
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
                                            <td style={{ textAlign: 'center' }}>
                                                {course.pdf ? (
                                                    <a
                                                        href={course.pdf}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={styles.pdfBadge}
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                        </svg>
                                                        View all Courses
                                                    </a>
                                                ) : course.isThematicLink ? (
                                                    <a
                                                        href="#thematic-electives"
                                                        style={{
                                                            display: 'inline-flex',
                                                            alignItems: 'center',
                                                            gap: '0.25rem',
                                                            padding: '0.4rem 0.8rem',
                                                            background: '#dcfce7',
                                                            color: '#166534',
                                                            border: '1px solid #86efac',
                                                            borderRadius: '6px',
                                                            textDecoration: 'none',
                                                            fontSize: '0.85rem',
                                                            fontWeight: '600',
                                                            transition: 'all 0.2s'
                                                        }}
                                                    >
                                                        View
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                        </svg>
                                                    </a>
                                                ) : (
                                                    <div
                                                        className={styles.infoIcon}
                                                        style={{ opacity: course.details ? 1 : 0.4, cursor: course.details ? 'pointer' : 'default' }}
                                                        onClick={() => course.details && setSelectedCourse(course)}
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                    );
                                })}

                                {/* Total Row - Normal Load */}
                                <tr className={styles.totalRow}>
                                    <td colSpan={3} className={styles.totalLabel}>Normal Load</td>
                                    <td className={styles.totalCredits}>{getTotalCredits(activeSemester)}</td>
                                    <td></td>
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
                                        <td></td>
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
                                        <td></td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Note below table */}
                    {/* Note below table */}
                    {activeSemester === 2 && (
                        <div className={styles.note}>
                            <div><strong>* Note:</strong> Choose any ONE out of the two courses marked with asterisk.</div>
                        </div>
                    )}

                    {/* Humanities Notes */}
                    {(activeSemester >= 2 && activeSemester <= 6) && (
                        <div className={styles.note} style={{ marginTop: activeSemester === 2 ? '0.5rem' : '0' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', color: '#475569', fontSize: '0.9rem' }}>
                                <div>A. Humanities courses cannot be dropped in both semesters II and III.</div>
                                <div>B. Humanities courses cannot be dropped in both semesters IV and V.</div>
                                <div>C. Students must complete 9 credits in humanities pool by the end of six semester.</div>
                            </div>
                        </div>
                    )}


                </div>

                {/* Recommended Course Load */}
                <div className={styles.overviewSection} style={{ marginTop: '3rem' }}>
                    <p className={styles.overviewText} style={{ marginBottom: '1.5rem' }}>
                        All students must complete a total of at least 128 credits comprising courses and other components like projects. The course load details for Normal, Reduced, and Enhanced loads are specified in the semester tables above. Based on their CGPA and previous-term TGPA, students must register for an appropriate course load as specified in the table below. Any deviation from the recommended load will be allowed only with the permission of the Dean.
                    </p>

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

                    <h2 id="thematic-electives" className={styles.sectionHeading} style={{ borderLeft: 'none', paddingLeft: 0, fontSize: '1.75rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
                        Thematic Electives
                    </h2>

                    <div className={styles.note} style={{ marginBottom: '2rem', padding: '1.5rem', background: '#f8fafc', borderRadius: '8px' }}>
                        <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#334155', lineHeight: '1.6' }}>
                            <li style={{ marginBottom: '0.5rem' }}>B.Tech. students need to take 2 courses from each bucket (I, II, and III), one in 5th and another in 6th semesters.</li>
                            <li style={{ marginBottom: '0.5rem' }}>There is flexibility for students to take more than one thematic elective in a semester (e.g., IA and IB can be done in the 5th semester, and no thematic elective in category I can be taken in the 6th semester).</li>
                            <li style={{ marginBottom: '0.5rem' }}>If courses have been listed in multiple thematic categories, such courses will be counted only once as a thematic elective in one specific category only (i.e., either I, II, or III).</li>
                            <li>Non-MTE courses that have been taken as electives can’t be double-counted as a thematic elective also.</li>
                        </ul>
                    </div>

                    {/* Thematic Electives Tabs */}
                    <div className={styles.semesterNav} style={{ marginBottom: '1.5rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>
                        {['I. Structural Materials', 'II. Functional Materials', 'III. Computational Materials', 'Non-MTE / Non MRC'].map((theme, index) => (
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
                                    Structural Materials
                                </h4>
                                <ul style={{ columnCount: 2, columnGap: '2rem', margin: 0, paddingLeft: '1.2rem' }}>
                                    {[
                                        "MT 201 (Phase Transformations)",
                                        "MT 202 (Thermodynamics and Kinetics of Materials)*",
                                        "MT 204 (Structure and Properties of Materials)*",
                                        "MT 205 (Structural Characterization of materials)",
                                        "MT 208 (Diffusion in solids)",
                                        "MT 209 (Defects in Materials)",
                                        "MT 220 (Microstructural Engineering of Structural Materials)",
                                        "MT 253 (Mechanical Behavior of Materials)",
                                        "MT 255 (Solidification Processing)",
                                        "MT 309 (Introduction to Manufacturing Science)"
                                    ].map((c, i) => <li key={i} style={{ marginBottom: '0.75rem', color: '#334155' }}>{c}</li>)}
                                </ul>
                            </div>
                        )}

                        {activeTheme === 2 && (
                            <div>
                                <h4 style={{ margin: '0 0 1.5rem 0', color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span style={{ background: '#d1fae5', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>II</span>
                                    Functional Materials
                                </h4>
                                <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
                                    {[
                                        "MT 213 (Electronic Properties of Materials)* OR IN 232 (Concepts in Solid State Physics)",
                                        "MT 211 (Magnetism, Magnetic Materials and Devices)",
                                        "MT 240 (Principles of Electrochemistry and Corrosion) OR SS 209 (Electrochemical Systems)",
                                        "MT 312 (Polymer Engineering and Sustainable Materials)",
                                        "MT 271 (Introduction to Biomaterials Science and Engineering) OR MR 203 (Introduction to Biomaterials)"
                                    ].map((c, i) => <li key={i} style={{ marginBottom: '0.75rem', color: '#334155' }}>{c}</li>)}
                                </ul>
                            </div>
                        )}

                        {activeTheme === 3 && (
                            <div>
                                <h4 style={{ margin: '0 0 1.5rem 0', color: '#f59e0b', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span style={{ background: '#fef3c7', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>III</span>
                                    Computational Materials
                                </h4>
                                <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
                                    {[
                                        "MT 217 (Computational Mathematics for Materials Engineers)* OR CH 202 (Numerical methods)",
                                        "MT 218 (Modelling and Simulation in Materials Engineering)",
                                        "MT 227 (Introduction to Crystal Mechanics and Plasticity)",
                                        "MT 303 (Materials Informatics)",
                                        "MT 305 (Integrated Computational Materials Engineering)"
                                    ].map((c, i) => <li key={i} style={{ marginBottom: '0.75rem', color: '#334155' }}>{c}</li>)}
                                </ul>
                            </div>
                        )}

                        {activeTheme === 4 && (
                            <div>
                                <h4 style={{ margin: '0 0 1.5rem 0', color: '#8b5cf6', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    Non-MTE / Non MRC Courses
                                </h4>
                                <ul style={{ columnCount: 2, columnGap: '2rem', margin: 0, paddingLeft: '1.2rem' }}>
                                    {[
                                        "NE 240 (Materials Design Principles)",
                                        "NE 201 (Micro and Nano Characterization Methods) OR IN 201 (Analytical Instrumentation)",
                                        "NE 205 / IN 214 / E3 282 (Semiconductor Devices)",
                                        "IN 224 (Nanoscience and Device Fabrication)",
                                        "PD 201 (Elements of Design) OR NE 203 (Advanced fabrication)",
                                        "QT 204 (Introduction to Materials for Quantum Technology)",
                                        "SS 205 (Symmetry and Structure in the Solid State)",
                                        "PD 202 (Elements of solid and fluid mechanics)",
                                        "PH 351 (Crystal Growth) OR NE 241 (Materials synthesis)",
                                        "QT 207 (Introduction to Quantum Computing)",
                                        "PD 212 (Computer Aided Design)",
                                        "CE 235 (Optimization Methods)",
                                        "UMC 203 (Introduction to AI & ML)"
                                    ].map((c, i) => <li key={i} style={{ marginBottom: '0.75rem', color: '#334155' }}>{c}</li>)}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                {/* Upgrade to M.Tech Section */}
                <div className={styles.overviewSection} style={{ marginTop: '0', marginBottom: '4rem', maxWidth: '1200px', margin: '4rem auto 4rem auto', padding: '0 1rem' }}>
                    <h2 className={styles.sectionHeading}>Continuing for MTech Degree</h2>
                    <p className={styles.overviewText} style={{ marginBottom: '1.5rem' }}>
                        Students can choose to obtain an additional M.Tech. degree, in any eligible program, provided they satisfy the eligibility norms as prescribed by the Institute Senate and the corresponding M.Tech. program.
                    </p>
                    <p className={styles.overviewText} style={{ marginBottom: '2rem' }}>
                        Students can obtain an M.Tech. degree in any department, provided they satisfy both the general criteria and any specific eligibility criteria specified by the admitting department (e.g., Aerospace Engineering). Similar criteria apply for continuing in Materials Engineering.
                    </p>

                    <div className={styles.mtechGrid}>
                        {/* Eligibility Card */}
                        <div className={styles.mtechCard}>
                            <div className={styles.mtechCardAccent} style={{ backgroundColor: '#2563eb' }} />
                            <div className={styles.mtechCardTitle}>
                                <div className={styles.mtechIcon} style={{ background: '#dbeafe', color: '#2563eb' }}>✓</div>
                                Eligibility Criteria
                            </div>
                            <ul className={styles.mtechList}>
                                <li className={styles.mtechItem}>
                                    <span style={{ fontWeight: '500' }}>Completed minimum <strong>80% credit requirements</strong> for B.Tech (102 credits).</span>
                                </li>
                                <li className={styles.mtechItem}>
                                    <span style={{ fontWeight: '500' }}>Maintain a <strong>CGPA of 8.0 or above</strong> at the end of the 6th semester.</span>
                                </li>
                                <li className={styles.mtechItem}>
                                    <span style={{ fontWeight: '500' }}>Satisfy <strong>eligibility criteria</strong> of the admitting department.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Requirements Card */}
                        <div className={styles.mtechCard}>
                            <div className={styles.mtechCardAccent} style={{ backgroundColor: '#10b981' }} />
                            <div className={styles.mtechCardTitle}>
                                <div className={styles.mtechIcon} style={{ background: '#ecfdf5', color: '#10b981' }}>🎓</div>
                                Degree Requirements
                            </div>
                            <ul className={styles.mtechList}>
                                <li className={styles.mtechItem}>
                                    <span style={{ fontWeight: '500' }}>Complete all core, soft-core, elective, and project requirements of the M.Tech program.</span>
                                </li>
                                <li className={styles.mtechItem}>
                                    <span style={{ fontWeight: '500' }}>Complete <strong>64 additional credits</strong> during 4th and 5th years.</span>
                                </li>
                                <li className={styles.mtechItem}>
                                    <span style={{ fontWeight: '500' }}>Total: <strong>102 B.Tech + 64 M.Tech credits</strong>.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
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
        </div >
    );
};

export default MaterialsScienceAndEngineering;
