"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './ae.module.css';

const AerospaceEngineering = () => {
    const [activeSemester, setActiveSemester] = useState(1);
    const [selectedCourse, setSelectedCourse] = useState<any>(null);
    const [activeTab, setActiveTab] = useState('home');



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
            { code: "UHS**", name: "Humanities", instructor: "-", credits: "2:0", pdf: "/humanities_courses.pdf" },
            {
                code: "UENG 101",
                name: "Algorithms & Programming",
                instructor: "L. Sunil Chandran, Viraj Kumar",
                credits: "3:1",
                details: {
                    instructors: [
                        { name: "L. Sunil Chandran", link: "https://eecs.iisc.ac.in/people/sunil-chandran-l/" },
                        { name: "Viraj Kumar", link: "http://dccc.iisc.ac.in/vk.html" }
                    ],
                    parts: [
                        {
                            title: "Syllabus & Topics",
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
                        <span key="1">How to Think Like a Computer Scientist: Interactive Edition, based on the book by Allan Downy and Jeff Elkner (<a href="https://runestone.academy/ns/books/published/thinkcspy/index.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>link</a>)</span>,
                        "How to Solve it by Computer by R. G. Dromey, Pearson Education, 2007",
                        "Brian W. Kernighan and Dennis M. Ritchie, The C Programming Language. Prentice Hall of India, 2009",
                        <span key="4">Introduction to Programming in Python by Robert Sedgewick, Kevin Wayne, and Robert Dondero, 1st edition, 2015 (<a href="https://introcs.cs.princeton.edu/python/home/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>link</a>)</span>,
                        <span key="5">A Byte of Python by Swaroop C H (<a href="https://python.swaroopch.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>link</a>)</span>,
                        <span key="6">CPython implementation of binary heaps (<a href="https://github.com/python/cpython/blob/main/Lib/heapq.py" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>link</a>)</span>,
                        <span key="7">Graphs and Graph Algorithms (<a href="https://runestone.academy/ns/books/published/pythonds/Graphs/toctree.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>link</a>)</span>,
                        "An Introduction to Programming through C++ by Abhiram Ranade. McGraw Hill, 1st"
                    ]
                }
            },
            {
                code: "UAE 101",
                name: "The Science of Flight",
                instructor: "Duvvuri Subrahmanyam",
                credits: "2:0",
                details: {
                    parts: [
                        {
                            title: "Syllabus",
                            content: "What is flight? The human urge to fly through air and beyond—a brief historical perspective on engineered air and space flight. Flying through air— the standard atmosphere. Forces in atmospheric flight—elementary ideas in aerodynamics and propulsion. Building atmospheric flight vehicles and achieving controlled flight—elementary ideas in aerostructures and vehicle stability/control. Reaching for the stars—elementary ideas in rocket propulsion and orbital mechanics. Diversity in air and space flight vehicles—from millimeter-scale drones to Starship. The future of flight—grand challenge problems for the next-generation of Aerospace engineers. This course will include visits to HAL, IAF-ASTE, ISRO-URSC, ISRO-ISITE, ISRO-SDSC (see a live launch if the dates work out), and AFS Sulur (see operational squadrons of Tejas and Dhruv)."
                        }
                    ],
                    books: [
                        "DF Anderson and S Eberhardt. 2010. Understanding Flight. McGraw Hill.",
                        "Henk Tennekes. The Simple Science of Flight: From Insects to Jumbo Jets. MIT Press.",
                        "JD Anderson, Jr., Introduction to Flight, McGraw Hill."
                    ],
                    instructorLink: "https://aero.iisc.ac.in/ds/"
                }
            },
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
                code: "UENG 103",
                name: "Engineering Mechanics",
                instructor: "AE/MtE Faculty",
                credits: "4:0",
                details: {
                    parts: [
                        {
                            title: "Syllabus",
                            content: "Force and Moment Vectors, Resultants , Principles of Statics and Free-Body Diagrams, Properties of Areas, second Moments and distributed forces, Applications to Simple Trusses, Frames, and Machines, Laws of Friction, , Motion and Dynamics of Particles Motion of Rigid bodies, Dynamics of Rigid bodies"
                        }
                    ]
                }
            },
            {
                code: "UPH 102",
                name: "Physics II: Electricity, Magnetism, and Optics",
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
            { code: "-", name: "Humanities** / UG elective", instructor: "-", credits: "2-4" },
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
                code: "UENG 202",
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
                code: "UCY 101",
                name: "Introductory Chemistry",
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
                code: "UENG 203",
                name: "Thermodynamics",
                instructor: "AE/ME/MtE Faculty",
                credits: "4:0",
                details: {
                    parts: [
                        {
                            title: "Syllabus",
                            content: "Thermodynamic Systems, Thermodynamic Equilibrium, Zeroth Law of Thermodynamics, Temperature, Quasi-Static Processes; Properties of Pure Substances, Thermodynamic Property Tables and Charts, Ideal and Real Gases; Heat and Work Interactions; First Law of Thermodynamics, Internal Energy and Enthalpy, First Law Analysis of Closed and Open Systems; Second Law of Thermodynamics, Heat Engines and Refrigerators, Reversible and Irreversible Processes, Carnot Cycle; Entropy, Second Law Analysis of Closed and Open Systems, Third Law of Thermodynamics; Availability and Irreversibility, Exergy Analysis of Closed and Open Systems; Thermodynamic Property Relations; First and Second Law Analysis of Thermodynamic Cycles, Power and Refrigeration Cycles; Mixtures of Ideal Gases, Gas-Vapour Mixtures. Lab Demonstrations. Problem Solving using Software Tools."
                        }
                    ]
                }
            },
            { code: "-", name: "Humanities**/ UG elective", instructor: "-", credits: "2-4" },
        ],
        4: [
            {
                code: "UENG 204",
                name: "Mechanics of Fluids",
                instructor: "AE/ME Faculty",
                credits: "4:0",
                details: {
                    parts: [
                        {
                            title: "Syllabus",
                            content: "Definition of a fluid, concept of continuum, properties of fluids, equation of state, Fluid statics, Conservation laws: Mass, linear and angular Momentum, and energy. Reynolds transport theorem. Control volume analysis in inertial and accelerating reference frames, Kinematics of flows: Concept of fluid particle, fluid acceleration, Eulerian vs Lagrangian framework, relative motion between fluid particles, concepts of deformation and vorticity, flow lines, stream function, velocity potential, Bernoulli’s equation and applications; Differential analysis of fluid flow, Derivation of Navier-Stokes equation. Euler equation. Concept of potential flow and simple potential flow solutions, Flow past streamlined and bluff bodies, solutions to basic incompressible flows, Dimensional analysis and similitude, Advanced topics in fluid mechanics."
                        }
                    ]
                }
            },
            { code: "UENG 205", name: "Fluid Mechanics", instructor: "-", credits: "4:0" },
            {
                code: "UMC 203",
                name: "Introduction to Artificial Intelligence and Machine Learning",
                instructor: "Aditya Gopalan, Shishir N Kolathaya",
                credits: "3:1",
                details: {
                    instructors: [
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
            { code: "-", name: "Humanities** / UG elective / Elective", instructor: "-", credits: "2-4" },
            { code: "UENG 206", name: "Science of Design", instructor: "-", credits: "3:1" },
        ],
        5: [
            {
                code: "UAE 301",
                name: "Flight Vehicle Propulsion",
                instructor: "Irfan Mulla",
                credits: "3:0",
                details: {
                    parts: [
                        {
                            title: "Syllabus",
                            content: "Aircraft Engines: Description of air breathing engines, propeller theory, engine propeller matching, piston engines, turbofan, turbo-prop, turbojet, component analysis, ramjets. Rocket propulsion: Introduction to rocket engines, features of chemical rocket propulsion, rocket equation, thrust equation, quasi-one-dimensional nozzle flow."
                        }
                    ],
                    books: [
                        "Hill, P.G., and Peterson, C.R., Mechanics and Thermodynamics of Propulsion, Addison Wesley, 1965.",
                        "Sutton, G.P., Rocket Propulsion Elements, John Wiley and Sons, 2001."
                    ],
                    instructorLink: "https://aero.iisc.ac.in/people/irfan-mulla/"
                }
            },
            {
                code: "UAE 302",
                name: "Flight Vehicle Structures",
                instructor: "Rajesh Chaunsali",
                credits: "3:0",
                details: {
                    parts: [
                        {
                            title: "Syllabus",
                            content: "Linear elasticity: Stress, strain, and constitutive relations; Calculus of variations and variational principles in elasticity; Torsion of non-circular, and thin-walled cross-sections; Flexure and shear flow in thin-walled open and closed section beams, flexural shear flow, flexure-torsion coupling in open and closed thin-walled beams; Flexure of thin plates, bending and twisting of thin plates, bending and in-plane loading of thin plates; Euler buckling of columns, flexure-torsion buckling of columns, buckling of thin plates; Structural components of flight vehicles and spacecraft; Loads on flight vehicles and V-N diagram."
                        }
                    ],
                    books: [
                        "T H G Megson. Aircraft Structures for Engineering Students. Elsevier. 2022.",
                        "I H Shames and C L Dym. Energy and Finite Element Methods in Structural Mechanics. 1985."
                    ],
                    instructorLink: "https://aero.iisc.ac.in/people/rajesh-chaunsali/"
                }
            },
            {
                code: "UAE 303",
                name: "Flight Vehicle Navigation, Guidance, and Control",
                instructor: "Ashwini Ratnoo",
                credits: "3:0",
                details: {
                    parts: [
                        {
                            title: "Syllabus",
                            content: "Navigation: Dead reckoning systems, accelerometers and gyros, air data systems: pressure, airspeed and temperature measurements, navigation on spherical earth, GPS and IRNSS; Guidance: Guided missiles, guidance laws: pursuit, LOS and PN laws, Aircraft flight management systems, Guidance of UAVs; Control: Linear time invariant systems, LTI system response, stability of LTI systems, transfer functions and state space modeling, time response characteristics, analysis and synthesis of linear control systems, applications to autopilot design."
                        }
                    ],
                    books: [
                        "AE NGC Faculty Lecture Notes.",
                        "Collinson, R.P.G., 2023, Introduction to Avionics Systems, Springer Nature.",
                        "Shneydor, N.A., 1998, Missile Guidance and Pursuit: Kinematics, Dynamics and Control, 1st edition, Horwood Publishing.",
                        "Nise, N.S., 2018, Control Systems Engineering, Wiley India.",
                        "Ogata, Katsuhiko., 2015 Modern Control Engineering, 5th Edition, Prentice Hall India."
                    ],
                    instructorLink: "https://aero.iisc.ac.in/people/ashwini-ratnoo/"
                }
            },
            { code: "-", name: "Humanities** / UG elective / Elective", instructor: "-", credits: "6-8" },
            {
                code: "UENG 207",
                name: "Solids and Fluids Lab",
                instructor: "AE/ME Faculty",
                credits: "0:1",
                details: {
                    parts: [
                        {
                            title: "Experiments for Fluid Mechanics",
                            content: "Pascal’s law : Force measurement , Flow through pipe: Venturi meters for flow measurements; volume flow rate vs pressure drop, Flow visualization: Use smoke/oil droplets to show streak lines in the flow , Jet flow with PIV, Low Re flows: Demonstrate the kinematic reversibility using dye in a very viscous fluid, Bernoulli principle: Using a Pitot tube setup in a pipe flow, Model testing and similitude: Flow past bluff bodies (force measurement)"
                        },
                        {
                            title: "Experiments for Solid Mechanics",
                            content: "Universal Testing Machine (UTM) Experiment: Perform tensile tests using a Universal Testing Machine. Utilize Digital Image Correlation (DIC) and an extensometer to accurately measure strain.Indentation and Hardness Testing: Conduct nanoindentation tests to determine the reduced modulus and hardness of materials. Additionally, macroscale Rockwell, Brinell, or Vickers hardness tests would be conducted. Photoelastic Stress Measurement: Perform 4-point bending tests on unnotched and notched photoelastic materials to observe stress distribution through photoelasticity. Bending and Torsion of Beams: Measure stresses in loaded beams using resistive strain gauges and compare the results with theoretical predictions from beam bending and torsion theories. Buckling of Slender Rods (Columns): Study the buckling behavior of slender rods with varying end conditions to understand stability and failure modes. Structural Dynamics of a Cantilever Beam: Investigate the dynamics of a vibrating cantilever beam, analyzing its eigenshapes and eigenmodes."
                        }
                    ]
                }
            },
        ],
        6: [
            {
                code: "UAE 306",
                name: "Flight Lab (Winter term)",
                instructor: "AE Faculty",
                credits: "0:0",
                details: {
                    parts: [
                        {
                            title: "Course Description",
                            content: "The Flight Lab will be conducted in the Program of Aerospace Engineering. The students participate to collect, analyze and evaluate performance and handling qualities of the airplanes through flight simulator and/or on an instrumented aircraft."
                        }
                    ]
                }
            },
            {
                code: "UAE 304",
                name: "Flight and Space Mechanics",
                instructor: "Duvvuri Subrahmanyam",
                credits: "4:0",
                details: {
                    parts: [
                        {
                            title: "Syllabus",
                            content: "Flight Mechanics: Atmosphere, Essentials of Aerodynamics and Propulsion, Aircraft Performance, Static Stability, Equations of Motion- 3 DOF and 6 DOF, Attitude representation, Dynamic Stability Essentials, Flight Control Overview, Launch Vehicle Flight Essentials. Space Mechanics: Orbits in 2D and 3D, Orbital Manoeuvres, Docking, Interplanetary trajectories, Planetary Entry, Descent and Landing, Lagrange points and Halo Orbits, Orbital perturbations, Orbits in the Time Domain, Spacecraft attitude dynamics essentials."
                        }
                    ],
                    books: [
                        "Introduction to Flight, John D Anderson.",
                        "Aircraft Performance and Design, John D Anderson.",
                        "Fundamentals of Airplane Flight Mechanics, David G Hull.",
                        "Orbital Mechanics for Engineering Students, Howard D. Curtis."
                    ],
                    instructorLink: "https://aero.iisc.ac.in/ds/"
                }
            },
            {
                code: "UAE 305",
                name: "Aerodynamics of Flight Vehicles",
                instructor: "Srisha Rao M V",
                credits: "3:0",
                details: {
                    parts: [
                        {
                            title: "Syllabus",
                            content: "Introduction to aerodynamics, potential flows, conformal mapping and Joukowski airfoils, Kutta condition, thin airfoil theory, viscous effects and high-lift flows, lifting line theory, vortex lattice method, flow over delta wings, compressibility effect, supersonic flows, unsteady aerodynamics."
                        }
                    ],
                    books: [
                        "Houghton, E.L. and Carpenter, P.W., Aerodynamics for Engineering Students, Butterworth-Heinemann, 2003.",
                        "Katz, J. and Plotkin, A., Low-speed Aerodynamics, Cambridge, 2001.",
                        "Bertin, J.J. and Smith, M.L., Aerodynamics for Engineers, Prentice-Hall, 1989."
                    ],
                    instructorLink: "https://aero.iisc.ac.in/people/srisha-rao-m-v/"
                }
            },
            {
                code: "UAE 307",
                name: "AE X Lab",
                instructor: "AE Faculty",
                credits: "0:2",
                details: {
                    parts: [
                        {
                            title: "Course Description",
                            content: "Small groups of students are trained in the research labs in the Aerospace Engineering Program for over a semester. This laboratory experience will provide a deep understanding of measurement techniques and principles while allowing students to contribute to ongoing research problems in these labs. This not only enriches the UG students' experience by participating in a research laboratory but also supports AE Program experiment research."
                        }
                    ]
                }
            },
            { code: "-", name: "Humanities** / UG elective / Elective", instructor: "-", credits: "8-10" },
        ],
        7: [
            {
                code: "UAE 401",
                name: "Design-Build-Fly",
                instructor: "AE Faculty",
                credits: "6",
                details: {
                    parts: [
                        {
                            title: "Course Description",
                            content: "This course is intended to provide students to apply what they have learnt in AE core courses, as well as UENG courses to real-world flight vehicle design experience. Student teams will design, fabricate, and demonstrate the flight capabilities of an unmanned flight vehicle that can best meet the specified mission profile. The goal is to arrive at a balanced flight vehicle design possessing good, demonstrated flight handling qualities and practical and affordable manufacturing requirements while providing an optimal performance."
                        }
                    ]
                }
            },
            { code: "Elective", name: "UG Elective / Elective", instructor: "-", credits: "6-12" },
        ],
        8: [
            { code: "UAE 402", name: "AE Project", instructor: "-", credits: "14" },
        ],
    };

    const currentCourses = semesterCourses[activeSemester] || [];

    const getTotalCredits = (sem: number) => {
        if (sem === 1) return '16';
        if (sem === 2) return '18-20';
        if (sem === 3) return '17-19';
        if (sem === 4) return '18-20';
        if (sem === 5) return '16-18';
        if (sem === 6) return '17-19';
        if (sem === 7) return '12-18';
        if (sem === 8) return '14-19';
        return '';
    };

    const getReducedCredits = (sem: number) => {
        if (sem === 2) return '14-16 (Drop any one course)';
        if (sem === 3) return '13-15 (Drop any one course)';
        if (sem === 4) return '14-16 (Drop any one course)';

        return '';
    };

    const getEnhancedCredits = (sem: number) => {
        if (sem === 4) return '18-21';
        if (sem === 5) return '16-21';
        if (sem === 6) return '17-21';
        if (sem === 7) return '12-21';
        if (sem === 8) return '14-21';
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
                    alt="Aerospace Engineering Banner"
                    fill
                    priority
                    style={{ objectFit: 'cover', zIndex: 0 }}
                    sizes="100vw"
                />
                <div style={{ position: 'relative', zIndex: 2 }}>
                    <span className={styles.heroTag}>Bachelor of Technology</span>
                    <h1 className={styles.heroHeading}>Aerospace Engineering</h1>
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
                    <div className={styles.homeGrid}>
                        <div className={styles.mainContent}>
                            <div className={styles.introSection}>
                                <h1 className={styles.heroHeading} style={{ fontSize: '2rem', color: '#0f172a', marginBottom: '1rem' }}>
                                    About the Programme
                                </h1>
                                <p className={styles.introText} style={{ marginBottom: 0 }}>
                                    The B.Tech programme in Aerospace Engineering trains students in core aerospace disciplines, while building the necessary foundations in mathematics, physical sciences, and engineering mechanics. The programme focuses on analysis, design, and experimentation, preparing students for research, industry, and deep tech entrepreneurial opportunities in aerospace and related engineering fields.
                                </p>
                                <div style={{ marginTop: '2rem', color: '#334155', lineHeight: '1.7' }}>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1e293b', marginBottom: '1rem' }}>
                                        Key Highlights
                                    </h3>
                                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <li><strong>Aerospace Engineering Core:</strong> A comprehensive foundation in the science and engineering of flight and space systems, encompassing aerodynamics, propulsion, structures and materials, flight and space mechanics, and guidance and control.</li>
                                        <li><strong>Strong scientific foundations:</strong> Rigorous training in mathematics, statistics, physics, chemistry and engineering mechanics as preparation for topics in aerospace engineering.</li>
                                        <li><strong>Design and experimentation focus:</strong> Dedicated laboratories, AE X Lab, and the Design–Build–Fly capstone emphasize hands-on learning and system-level thinking.</li>
                                        <li><strong>Flexibility through electives:</strong> Students may tailor their academic trajectory by choosing electives across the Institute, enabling interdisciplinary exposure.</li>
                                        <li><strong>Advanced coursework:</strong> Exposure to advanced graduate-level courses in fundamental science, engineering and AI/ML, providing a deep foundation for aerospace research and innovation.</li>
                                        <li><strong>Research and industry engagement:</strong> Structured project components fostering independent inquiry, industry-relevant research, and preparation for higher studies.</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Why Aerospace Engineering - Section */}
                            <div style={{ marginTop: '5rem', marginBottom: '4rem' }}>
                                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                                    <h2 style={{
                                        fontSize: '2rem',
                                        fontWeight: '700',
                                        color: '#0f172a',
                                        letterSpacing: '-0.02em',
                                        marginBottom: '1rem'
                                    }}>
                                        Why <span style={{ color: '#d97706' }}>Aerospace Engineering</span>
                                    </h2>
                                    <p style={{
                                        color: '#475569',
                                        fontSize: '1.1rem',
                                        maxWidth: '900px',
                                        margin: '0 auto',
                                        lineHeight: '1.7'
                                    }}>
                                        Empowering future leaders with a rigorous, interdisciplinary blend of flight science and engineering innovation.
                                    </p>
                                </div>

                                <div className="features-grid" style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(2, 1fr)',
                                    gap: '2rem',
                                    maxWidth: '1200px',
                                    margin: '0 auto',
                                    width: '100%'
                                }}>
                                    {[
                                        {
                                            title: "The Field",
                                            subtitle: "Why Aerospace Engineering?",
                                            text: "Aerospace Engineering focuses on aircraft, spacecraft, aerodynamics, propulsion, and flight systems, combining strong foundations in physics, mathematics, and engineering design. The field addresses modern challenges in aviation, space exploration, and autonomous flight technologies.",
                                            theme: "blue",
                                            icon: (
                                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M2 12h20M2 12l5-5m-5 5l5 5" />
                                                    <path d="M22 12l-5-5m5 5l-5 5" opacity="0" />
                                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                                </svg>
                                            )
                                        },
                                        {
                                            title: "The Institute",
                                            subtitle: "Why IISc Aerospace?",
                                            text: "IISc offers a research-driven aerospace program integrating theoretical learning with experimental and computational approaches. Students gain exposure to advanced laboratories and interdisciplinary collaboration across mechanics, AI, robotics, and materials science.",
                                            theme: "indigo",
                                            icon: (
                                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M3 21h18M5 21V7l8-4 8 4v14M8 21v-4h8v4" />
                                                </svg>
                                            )
                                        },
                                        {
                                            title: "Uniqueness",
                                            subtitle: "What Defines Us?",
                                            text: "Core engineering fundamentals are built in the early years, followed by flexible electives aligned with student interests. The curriculum emphasizes computational modeling, design projects, and practical laboratory experience, exploring both theoretical concepts and real-world applications.",
                                            theme: "sky",
                                            icon: (
                                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <circle cx="12" cy="12" r="10" />
                                                    <path d="M12 16v-4M12 8h.01" />
                                                </svg>
                                            )
                                        },
                                        {
                                            title: "Career",
                                            subtitle: "Future Horizons",
                                            text: "Graduates pursue careers in aerospace industries, space research (ISRO, NASA), defense (DRDO), and advanced tech sectors. Emerging pathways like AI for aerospace, autonomous systems, and computational fluid dynamics offer vast opportunities for innovation.",
                                            theme: "slate",
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
                                                background: card.theme === 'blue' ? '#2563eb' :
                                                    card.theme === 'indigo' ? '#4f46e5' :
                                                        card.theme === 'sky' ? '#0ea5e9' : '#475569'
                                            }} />

                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                                                <span style={{
                                                    fontSize: '0.8rem',
                                                    fontWeight: '700',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.05em',
                                                    color: card.theme === 'blue' ? '#2563eb' :
                                                        card.theme === 'indigo' ? '#4f46e5' :
                                                            card.theme === 'sky' ? '#0ea5e9' : '#475569',
                                                    background: card.theme === 'blue' ? '#eff6ff' :
                                                        card.theme === 'indigo' ? '#eef2ff' :
                                                            card.theme === 'sky' ? '#e0f2fe' : '#f1f5f9',
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
                                                fontSize: '1.5rem',
                                                fontWeight: '800',
                                                color: '#0f172a',
                                                marginBottom: '1rem',
                                                lineHeight: '1.3'
                                            }}>
                                                {card.subtitle}
                                            </h3>

                                            <p style={{
                                                fontSize: '1rem',
                                                lineHeight: '1.7',
                                                color: '#475569',
                                                flex: 1
                                            }}>
                                                {card.text}
                                            </p>
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

                        </div>
                        <div className={styles.sidebar}>
                            {/* Sidebar kept empty as per request */}
                        </div>
                    </div>
                )}

                {/* Course Structure Tab Content */}
                {activeTab === 'structure' && (
                    <>
                        {/* Basic Structure */}
                        <div className={styles.overviewSection}>
                            <h2 className={styles.sectionHeading}>Basic Structure</h2>
                            <p className={styles.overviewText}>
                                The Bachelor of Technology (Aerospace Engineering) is a four-year programme, organised into 8 semesters. Students need to complete 128 credits as specified in the table and sections below.
                            </p>

                            <div style={{ marginBottom: '2rem', marginTop: '1.5rem' }}>
                                <div className={styles.tableContainer}>
                                    <table className={styles.courseTable}>
                                        <thead>
                                            <tr>
                                                <th style={{ verticalAlign: 'middle', textAlign: 'center', width: '25%' }}>Course Category</th>
                                                <th style={{ verticalAlign: 'middle', textAlign: 'center' }}>Core</th>
                                                <th style={{ verticalAlign: 'middle', textAlign: 'center' }}>Humanities</th>
                                                <th style={{ verticalAlign: 'middle', textAlign: 'center' }}>Project</th>
                                                <th style={{ verticalAlign: 'middle', textAlign: 'center' }}>Electives</th>
                                                <th style={{ verticalAlign: 'middle', textAlign: 'center' }}>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style={{ fontWeight: 600 }}>Minimum Credit Requirement</td>
                                                <td style={{ textAlign: 'center' }}>86</td>
                                                <td style={{ textAlign: 'center' }}>9</td>
                                                <td style={{ textAlign: 'center' }}>14</td>
                                                <td style={{ textAlign: 'center' }}>19</td>
                                                <td style={{ textAlign: 'center', fontWeight: 'bold' }}>128</td>
                                            </tr>
                                        </tbody>
                                    </table>
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
                                        <strong>Science:</strong> Analysis and Linear Algebra I and II, Mechanics, Oscillations and Waves, Physical Principles of Chemistry, Electricity, Magnetism and Optics, Probability and Statistics.
                                    </li>
                                    <li style={{ marginBottom: '0.5rem' }}>
                                        <strong>Engineering:</strong> Introduction to Electrical and Electronics Engineering, Programming and AI, Engineering Mechanics, Solid and Fluid Mechanics, Thermodynamics, Science of Design.
                                    </li>
                                    <li>
                                        <strong>Aerospace:</strong> Flight Vehicle Aerodynamics, Flight Vehicle Propulsion, Flight Vehicle Structures, Flight Vehicle Navigation, Guidance, and Control, and Flight and Space Mechanics., AE X Lab, and Design-Build-Fly.
                                    </li>
                                </ul>
                                <p style={{ margin: '0.5rem 0 0', color: '#334155', fontStyle: 'italic', fontSize: '0.95rem' }}>
                                    The list of core courses and their semester wise break-up can be found in the scheme of instructions (SoI).
                                </p>
                            </div>

                            {/* ii) PROJECTS */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1e293b', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                                    ii) PROJECTS
                                </h3>
                                <p style={{ margin: 0, color: '#334155', fontSize: '1rem', lineHeight: '1.6' }}>
                                    Project refers to Research or Industry Project and carries 14 credits. Detailed rules governing projects are specified in Section 4.6.
                                </p>
                            </div>

                            {/* iii) ELECTIVES */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1e293b', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                                    iii) ELECTIVES
                                </h3>
                                <p style={{ margin: 0, color: '#334155', fontSize: '1rem', lineHeight: '1.6' }}>
                                    Elective credits can be fulfilled by passing any course offered across the institute.
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
                                        {currentCourses.map((course: any, index: number) => (
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
                                                    ) : (
                                                        course.name
                                                    )}
                                                </td>
                                                <td>
                                                    {course.details?.instructors ? (
                                                        course.details.instructors.map((inst: any, idx: number) => (
                                                            <React.Fragment key={idx}>
                                                                {idx > 0 && ", "}
                                                                <a
                                                                    href={inst.link}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className={styles.instructorLink}
                                                                >
                                                                    {inst.name}
                                                                </a>
                                                            </React.Fragment>
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
                                        ))}

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
                                                        {activeSemester === 2 ? '(drop any one course)' :
                                                            activeSemester === 3 ? '(drop any one course)' :
                                                                activeSemester === 4 ? '(drop one core course; can register for a maximum of 4 additional credits)' :
                                                                    activeSemester === 5 ? '(drop any one course)' : ''}
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
                        </div>

                        {/* Course Load Information */}
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
            {
                selectedCourse && (
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
                                            {selectedCourse.details.books.map((book: any, index: number) => (
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
                )
            }
        </div >
    );
};

export default AerospaceEngineering;
