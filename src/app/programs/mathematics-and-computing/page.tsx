"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './mnc.module.css';

const MathematicsAndComputing = () => {
    const [activeSemester, setActiveSemester] = useState(1);

    const [activeOverviewSoftCoreTab, setActiveOverviewSoftCoreTab] = useState<string | null>(null);
    const [activeMasterPath, setActiveMasterPath] = useState<string>('mnc');
    const [activeElectivesTab, setActiveElectivesTab] = useState<boolean>(false);

    const [selectedCourse, setSelectedCourse] = useState<any>(null);
    const [openTrack, setOpenTrack] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState('home');
    const [showTestimonials, setShowTestimonials] = useState(false);
    const [selectedStudentTestimonial, setSelectedStudentTestimonial] = useState<any>(null);

    const dummyNews = [
        {
            date: "October 15, 2025",
            title: "MnC Students Win Hackathon",
            excerpt: "A team of third-year Mathematics and Computing students secured the first place in the International Algo-Challenge."
        },
        {
            date: "September 2, 2025",
            title: "New Research Lab Inaugurated",
            excerpt: "The program announcement the opening of the new High-Performance Computing facility for undergraduate research."
        }
    ];

    const dummyAnnouncements = [
        { text: "End Semester Exam Schedule released.", link: "#" },
        { text: "Registration for Spring 2026 electives opens next week.", link: "#" },
        { text: "Guest Lecture on 'Quantum Computing' by Dr. A. Smith.", link: "#" }
    ];

    const toggleTrack = (trackId: string) => {
        setOpenTrack(openTrack === trackId ? null : trackId);
    };

    const semesters = [1, 2, 3, 4, 5, 6, 7, 8];

    // Dummy data structure for courses designed to look like the reference
    const semesterCourses: any = {
        1: [
            {
                code: "UENG 101",
                name: "Algorithms and Programming",
                type: "Core Courses",
                typeRowSpan: 2,
                instructors: [
                    { name: "L. Sunil Chandran", link: "https://eecs.iisc.ac.in/people/sunil-chandran-l/" },
                    { name: "Viraj Kumar", link: "http://dccc.iisc.ac.in/vk.html" }
                ],
                credits: "3:1",
                details: {
                    description: "The emphasis of this course is on translating algorithms (either implicitly known or taught during the course as pseudocode) into both a high-level programming language (Python) and a systems-level high- performance programming language (C). This course is broadly divided into three parts.",
                    parts: [
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
                        "How to Think Like a Computer Scientist: Interactive Edition, based on the book by Allan Downy and Jeff Elkner (https://runestone.academy/ns/books/published/thinkcspy/index.html)",
                        "How to Solve it by Computer by R. G. Dromey, Pearson Education, 2007",
                        "Brian W. Kernighan and Dennis M. Ritchie, The C Programming Language. Prentice Hall of India, 2009",
                        "Introduction to Programming in Python by Robert Sedgewick, Kevin Wayne, and Robert Dondero, 1st edition, 2015 (https://introcs.cs.princeton.edu/python/home/)",
                        "A Byte of Python by Swaroop C H (https://python.swaroopch.com/)",
                        "CPython implementation of binary heaps (https://github.com/python/cpython/blob/3.10/Lib/heapq.py)",
                        "Graphs and Graph Algorithms (https://runestone.academy/ns/books/published/pythonds3/Graphs/toctree.html)",
                        "An Introduction to Programming through C++ by Abhiram Ranade. McGraw Hill, 1st"
                    ]
                }
            },
            {
                code: "UMA 101",
                name: "Analysis and Linear Algebra I",
                isTypeMerged: true,
                instructors: [{ name: "Soumya Das", link: "https://math.iisc.ac.in/~library/soumya-das.html" }],
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
                    ]
                }
            },
            {
                code: "UBL 101",
                name: "Introductory Biology I",
                type: "Breadth Soft Core",
                typeRowSpan: 3,
                typeDescription: "Choose any TWO out of the three courses",
                instructors: [{ name: "Sumanta Bagchi", link: "https://ces.iisc.ac.in/?q=user/85" }],
                credits: "3:1",
                details: {
                    parts: [
                        {
                            title: "THEORY",
                            content: "Organismal Biology and the Molecular Basis of Life. Introduction to the World of Living Organisms; Levels of Biological Organisation; the Scientific Method and Causation in Biology; Diversity of life on Earth; Evolution: History and Evolution of Life on Earth; Mechanisms of Evolution; the Evidence for Evolution and Natural Selection; Adaptation, Speciation and Diversification; Phylogenetics; Sex and Sexual selection; Animal Behavior: Classical Experiments in Ethology; Communities and Ecosystem: Species Interactions, Trophic Cascades, Ecology and Global Change; Why Biodiversity Matters? Introduction to Chemical Evolution; Thermodynamic Principles and Biological Macromolecules (water, lipids, carbohydrates, nucleic acids, proteins, enzymes); Placing Biomolecules in the Cellular Context: Cell as a Unit of Life and the Site for Life Processes. Elementary Enzymology."
                        },
                        {
                            title: "LAB",
                            content: "Understanding methods and concepts in evolution, ecology, and behaviour by observing, describing and quantifying; experimental manipulations; representing and interpreting data; titration of amino acids, estimation of reducing and nonreducing sugars, estimation of proteins, DNA, RNA, lipids. Techniques like thin layer chromatography for lipids, melting curves for DNA and SDS-PAGE for proteins."
                        }
                    ],
                    books: [
                        "Campbell Biology (10th/11th editions) By JB Reese, LA Urrey, ML Cain, SA Wasserman. Pearson Global Editions",
                        "Ernst Mayr, This is Biology: The Science of the Living World, Harvard University Press, 1997",
                        "Jerry A. Coyne, Why Evolution is True, Viking Penguin, New York, USA, 2009",
                        "Jonathan Weiner, The Beak of the Finch, Vintage Books, New York, USA, 1995",
                        "Sean B. Carroll, The Serengeti Rules: The Quest to Discover How Life Works and Why it Matters, Princeton University Press, New Jersey, 2016",
                        "Wilson, E. O., Life on Earth. Freely available at: http://eowilsonfoundation.org/e-o-wilson-s-life-on-earth",
                        "Wilson, E. O. The Future of Life, Alfred A. Knopr, 2002",
                        "Lodish, H. et al., Molecular Cell Biology, W. H. Freeman Publishers, 6th Edition, 2008",
                        "Krebs, J. E. et al., Lewin’s Genes X, Jones and Bartlett Publishers, 10th Edition, 2011",
                        "Nelson, D. L. and Cox, M. M., Lehninger Principles of Biochemistry, W. H. Freeman Publishers, 5th Edition, 2009",
                        "Berg, J. M., Tymoczko, J. L. and Styrer, L., Biochemistry, W. H. Freeman & Co., 6th Edition, 2006",
                        "Voet, D. and Voet, J. G., Biochemistry, Wiley, 4th Edition, 2010"
                    ]
                }
            },
            {
                code: "UCY 101",
                name: "Introductory Chemistry I",
                isTypeMerged: true,
                instructors: [{ name: "Anshu Pandey", link: "https://sscu.iisc.ac.in/pandey/" }],
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
                    ]
                }
            },
            {
                code: "UPH 101",
                name: "Introductory Physics I",
                isTypeMerged: true,
                instructors: [{ name: "Sebabrata Mukherjee", link: "https://physics.iisc.ac.in/people/sebabrata-mukherjee/" }],
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
                    ]
                }
            },
            {
                code: "UHS**",
                name: "Humanities",
                type: "Humanities",
                instructor: "-",
                credits: "2:0",
                pdf: "/humanities_courses.pdf"
            },
        ],
        2: [
            {
                code: "UENG 102",
                name: "Electrical and Electronics Engineering",
                type: "Core Courses",
                typeRowSpan: 4,
                instructors: [{ name: "Kaushik Basu", link: "https://eecs.iisc.ac.in/people/kaushik-basu/" }],
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
                    ]
                }
            },
            {
                code: "UMA 102",
                name: "Analysis and Linear Algebra II",
                isTypeMerged: true,
                instructors: [{ name: "Purvi Gupta", link: "https://math.iisc.ac.in/~purvigupta/" }],
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
                    ]
                }
            },
            {
                code: "UMC 102",
                name: "Introduction to Computer Systems",
                isTypeMerged: true,
                instructors: [
                    { name: "Vinod Ganapathy", link: "https://www.csa.iisc.ac.in/~vg/" },
                    { name: "Sanchari Sen", link: "https://www.csa.iisc.ac.in/~sancharisen/" }
                ],
                credits: "3:0",
                details: {
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
            {
                code: "UMC 103A",
                name: "Discrete Mathematics",
                isTypeMerged: true,
                instructors: [{ name: "C. Pandu Rangan", link: "https://eecs.iisc.ac.in/people/pandu-rangan/" }],
                credits: "3:0",
                details: {
                    parts: [
                        {
                            title: "Syllabus & Topics",
                            content: "Mathematical Logic: Propositional logic: connectives,tautologies, and contradictions, logical equivalences, normal forms and applications. Predicates and quantifiers, interpretation and validity, proving validity, rules of inference. Sets, Functions and Relations: Sets and cardinality, relations, functions, partial orders, total orders, linear orders, equivalence relations, partitions, n-ary relations. Induction and Recursion: Induction, strong induction, well-ordering principle, recursive definitions and structural induction. Basic Counting Principles: Pigeon-hole principle, permutations and combinations, Binomial coefficients and identities, elementary applications to discrete probability, recurrence relations and equations, generating function techniques, principles of inclusion and exclusion and its applications. Graph Theory:Graphs and graphmodels, basic notions and operations,matchings, Hall'smarriage theorem, vertex and edge connectivity, Euler and Hamiltonian circuits, vertex coloring. Trees."
                        }
                    ],
                    books: [
                        "Kenneth H Rosen: Discrete Mathematics and its Applications, McGraw Hill (2012)",
                        "Winfield K Grassmann and Jean-Paul Tremblay: Logic and Discrete Mathematics: A Computer Science Perspective, Prentice-Hall (1996)",
                        "M. Ben Ari: Mathematical Logic for Computer Science, 3rd edition, Springer (2012)",
                        "Eric Lehman, F Thomson Leighton, Albert R Meyer: Mathematics for Computer Science, (Open Edition 2013)"
                    ]
                }
            },
            {
                code: "UBL 102",
                name: "Introductory Biology II",
                type: "Breadth Soft Core",
                typeRowSpan: 4,
                typeDescription: "Choose any ONE out of the four courses",
                instructors: [{ name: "Dipshikha Chakravortty", link: "https://mcb.iisc.ac.in/public/dipshikhachakravortty" }],
                credits: "3:1",
                details: {
                    parts: [
                        {
                            title: "THEORY",
                            content: "Introduction to the microbial world and its diversity; the importance of microbes in the exploration of basic principles of biology; bacterial growth and its modulation by nutrient availability in the medium; structure and function of a bacterial cell; structure of cell wall; isolation of auxotrophs; introduction to viruses – life cycles of temperate and lytic bacteriophages, structure and function of extra-chromosomal elements and their applications in molecular microbiology. Introduction to cell biology, eukaryotic cells and their intracellular organization; introduction to the light microscopes and other methods of studying intracellular organelles; further studies on endoplasmic reticulum, Golgi apparatus, lysosomes, mitochondria, nucleus (organization and function), plasma membrane structure and its function, the cytoskeleton, the cell cycle. Mendelian genetics (segregation and independent assortment); sex determination and sex linkage in diploids; cytoplasmic inheritance; pedigrees, markers, mapping and genetic disorders; gene frequencies and HardyWeinberg principle."
                        },
                        {
                            title: "LAB",
                            content: "Light microscopy, identification of microorganisms, staining techniques (Gram’s, acid fast), bacterial plating, tests for antibiotic resistance, cell media and tissue culture; cell counting, immunostaining for actin, microtubules, DNA and identifying interphase and various mitotic phases; Drosophila crosses using red eye and white eye mutants, observation of Barr body in buccal mucosa cells, preparation of mitotic/ polytene chromosomes from Drosophila larvae; and karyotyping using human metaphase plate photos"
                        }
                    ],
                    books: [
                        "Berg, J. M., Tymoczko, J. L. and Styrer, L., Biochemistry, W. H. Freeman & Co., 6th Edition, 2006",
                        "Stanier, R. Y., Adelberg, E. A. and Ingraham, J. L., General Microbiology, MacMillan Press, 5th Edition, 2007",
                        "Alberts, B., Molecular Biology of the Cell, Garland Science, 5th Edition, 2008",
                        "Strick berger, M. W., Genetics, Prentice-Hall, India, 3rd Edition, 2008",
                        "Daniel, H., Essential Genetics: A genomics perspective, Jones & Bartlett, 3rd Edition, 2002",
                        "Strachan, T. and Read, A. P., Human Molecular Genetics, Garland Science, 3rd Edition, 2004"
                    ]
                }
            },
            {
                code: "UCY 102",
                name: "Introductory Chemistry II",
                isTypeMerged: true,
                instructors: [{ name: "Sreedhara M B", link: "https://sscu.iisc.ac.in/sreedhara/" }],
                credits: "3:1",
                details: {
                    parts: [
                        {
                            title: "Syllabus & Topics",
                            content: "Multi-electron atoms – periodic trends, Chemical bonding: ionic solids, CFT: d-orbital splitting, tetrahedral, square planar, cubic and octahedral crystal fields, covalent bonding, Lewis model (2 Dim), VSEPR (3 Dim) hybridization, Molecular orbital theory: heteronuclear diatomics, triatomics, Shapes of main group compounds, Acid -base chemistry: concepts, measures of acid-base strength, HSAB, Main group chemistry: carbon group compounds and noble gases."
                        }
                    ],
                    books: [
                        "Lee, J. D. Concise Inorganic Chemistry, 5/E, Oxford University Press, Indian Edition",
                        "Miessler, G. L. and Tarr, D.A. Pearson Inorganic Chemistry, Third Edition",
                        "Shriver, D. F., Atkins, P. W. and Langford, C. H. Inorganic Chemistry, Oxford University Press",
                        "Huheey, J. E., Keiter, E.A. and Keiter, R. L. Inorganic Chemistry, 4/E, Pearson Education Asia"
                    ]
                }
            },
            {
                code: "UPH 102",
                name: "Introductory Physics II (Elec-MagOptics)",
                isTypeMerged: true,
                instructors: [{ name: "Gaurav Narain", link: "https://chep.iisc.ac.in/faculty/" }],
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
                    ]
                }
            },
            {
                code: "UENG 103",
                name: "Introduction to Earth and its Environment",
                isTypeMerged: true,
                instructors: [
                    { name: "Ramananda Chakrabarti", link: "https://ceas.iisc.ac.in/author/ramananda-chakrabarti/" },
                    { name: "Attreyee Ghosh", link: "https://ceas.iisc.ac.in/~aghosh/" },
                    { name: "Sambuddha Misra", link: "https://ceas.iisc.ac.in/author/sambuddha-misra/" }
                ],
                credits: "3:0",
                details: {
                    parts: [
                        {
                            title: "Syllabus & Topics",
                            content: "Nucleosynthesis, formation of planets, minerals, rocks and bulk earth composition. Radioactivity and age of the earth. Mantle convection and plate tectonics. Introduction to stable isotope geochemistry. General application of stable isotopes. The carbon cycle. The S cycle. The nitrogen cycle. Chemical weathering and global thermostat. Shortterm climate variation. Wind and oceanic circulation. Thermohaline circulation and its role in climate change. Surficial water cycle aqueous chemistry. Redox chemistry in aquatic environment – implication and application. Carbonate chemistry and its application. Instrumentation in environmental and low-temperature geochemistry."
                        }
                    ],
                    books: [
                        "Environmental and Low-temperature Geochemistry - Peter Ryan",
                        "How to Build a Habitable Planet - Langmuir and Broecker"
                    ]
                }
            },
            { code: "UHS**", name: "Humanities", type: "Humanities", instructor: "-", credits: "0-2", pdf: "/humanities_courses.pdf" },
        ],
        3: [
            {
                code: "UMA 201",
                name: "Probability and Statistics",
                type: "Core Courses",
                typeRowSpan: 3,
                instructors: [{ name: "Sanchayan Sen", link: "https://math.iisc.ac.in/~library/sanchayan-sen.html" }],
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
                    ]
                }
            },
            {
                code: "UMC 201",
                name: "Data Structures & Algorithms",
                isTypeMerged: true,
                instructors: [{ name: "C. Pandu Rangan", link: "https://eecs.iisc.ac.in/people/pandu-rangan/" }],
                credits: "3:1",
                details: {
                    parts: [
                        {
                            title: "Syllabus & Topics",
                            content: "Review of Basic Data Structures - Arrays, Linked Lists, Stacks, Queues. Asymptotic complexity functions. Standard Data Structures - Heaps, Balanced Search Trees. Algorithmic Paradigms - Divide and Conquer, Greedy, Dynamic Programming. Graph Algorithms- Traversals, Shortest Paths, Minimum Spanning Trees. Advanced Data Structures - Union Find, Hashing. Amortized analysis, Splay trees, Fibonacci trees."
                        }
                    ],
                    books: [
                        "Data Structures and Algorithm Analysis in C by Mark Allen Weiss, Second edition, 1997 (Pearson)",
                        "Algorithm Design by Kleinberg and Tardos, 2006 (Pearson)",
                        "Introduction to Algorithms by Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein, Fourth edition, 2022 (MIT Press)"
                    ]
                }
            },
            {
                code: "UMC 202",
                name: "Numerical Methods",
                isTypeMerged: true,
                instructors: [{ name: "Ratikanta Behera", link: "https://cds.iisc.ac.in/faculty/ratikanta/" }],
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
                    ]
                }
            },
            {
                code: "UBL 201",
                name: "Introductory Biology III",
                type: "Breadth Soft Core",
                typeRowSpan: 4,
                typeDescription: "Choose any ONE out of the Four",
                instructors: [{ name: "Dipankar Nandi", link: "https://biochem.iisc.ac.in/dipankar-nandi.php" }],
                credits: "3:1",
                details: {
                    parts: [
                        {
                            title: "THEORY",
                            content: "Molecular biology (central dogma, DNA repair, replication, transcription, genetic code and translation); examples of post-transcriptional and post-translational modifications; genetic methods of gene transfer in bacteria. Introduction to the immune system – the players and mechanisms, innate immunity, adaptive responses, B cell receptor and immunoglobulins, T cell activation and differentiation and Major Histocompatibility Complex encoded molecules. Overview of the nervous system, ionic basis of resting membrane potential and action potentials, neurodevelopment, neurotransmitters, sensory systems, motor systems, learning and memory, attention and decision making."
                        },
                        {
                            title: "LAB",
                            content: "M13 infection, plaque assay, preparation of bacterial competent cells, transformation, transduction, conjugation, β -galactosidase assay. Immune organs and isolation of cells from lymph node, spleen and thymus; lymphocyte and macrophage activation studies, nitrite detection, ELISA and cell cycle analysis; gross anatomy of the human brain; staining of mouse brain sections; generation of action- potential; psychophysical and cognitive neurobiology experiments."
                        }
                    ],
                    books: [
                        "Lodish, H., Berk, A., Kaiser, C. A., Krieger, M., Scott, M. P., Bretscher, A., Ploegh, H. and Matsudaira, P., Molecular Cell Biology, W. H. Freeman Publishers, 6th Edition, 2007",
                        "Kindt, T., Goldsby, R. and Osborne, B. A., Kuby Immunology, W. H. Freeman Publishers, 6th Edition, 2006",
                        "Bear, M., Connors, B. and Paradiso, M., Neuroscience: Exploring the Brain, Lippincott Williams & Wilkins, 3rd Edition, 2006"
                    ]
                }
            },
            {
                code: "UCY 201",
                name: "Introductory Chemistry III",
                isTypeMerged: true,
                instructors: [{ name: "Akkattu T Biju", link: "https://orgchem.iisc.ac.in/atbiju/" }],
                credits: "3:1",
                details: {
                    parts: [
                        {
                            title: "Part 1: Syllabus & Topics",
                            content: "Nomenclature of Organic Compounds, Orbital Picture of Molecular Structure, Aromaticity, Acids and Bases, Organic Reactions and Mechanism: Substitution, Aromatic Substitution, Elimination, Addition And Rearrangements, Oxidation-Reduction etc."
                        },
                        {
                            title: "Part 2: Syllabus & Topics",
                            content: "Introduction to Chirality and Stereochemistry. Elements of Symmetry. Configurational Nomenclatures. Optical Activity. Chiral Resolution and Kinetic Resolution. Stereospecific and Stereoselective Reactions and Mechanisms. Conformation of Acyclic and Cyclic Systems."
                        }
                    ],
                    books: [
                        "Solomons, T. W. G. and Fryhle, C. 2009 Organic Chemistry, John Wiley & Sons",
                        "McMurry, J. E. 2007 Organic Chemistry 7th edition, Thomson",
                        "Bruice, P. Y. Organic Chemistry, 6th edition, Pearson",
                        "Nasipuri, D. Stereochemistry of Organic Compounds, Principles and Applications",
                        "Eliel, E. L. Stereochemistry of Carbon Compounds"
                    ]
                }
            },
            {
                code: "UPH 201",
                name: "Introductory Physics III",
                isTypeMerged: true,
                instructors: [{ name: "Prerna Sharma", link: "https://physics.iisc.ac.in/people/prerna-sharma/" }],
                credits: "3:1",
                details: {
                    parts: [
                        {
                            title: "Syllabus & Topics",
                            content: "Temperature, The First Law of Thermodynamics, Kinetic Theory of Gases and Maxwell-Boltzmann Statistics, Heat Engines, Entropy and the Second Law of Thermodynamics, Relativity, Introduction to Quantum Physics, Basics of Quantum Mechanics, Atomic, Molecular and Solid-state physics, Nuclear Physics, Particle Physics and Cosmology."
                        }
                    ],
                    books: [
                        "Serway and Jewett, Physics for Scientists and Engineers (7th Edition)",
                        "Young and Freedman, University Physics (12th Edition)",
                        "Halliday, Resnick and Walker, Fundamentals of Physics, Extended (8th Edition)",
                        "Harris Benson, University Physics, Revised Edition",
                        "Kenneth Krane, Modern Physics, Second Edition",
                        "Resnick -- Introduction to Special Relativity"
                    ]
                }
            },
            {
                code: "UENG 201",
                name: "Materials Science",
                isTypeMerged: true,
                instructors: [{ name: "Suchandrima Das", link: "https://www.crystalmechanicslab.com/" }],
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
                    ]
                }
            },
            { code: "UHS**", name: "Humanities", type: "Humanities", instructor: "-", credits: "0-2", pdf: "/humanities_courses.pdf" },
        ],
        4: [
            {
                code: "UM 204",
                name: "Analysis",
                instructors: [{ name: "Purvi Gupta", link: "https://math.iisc.ac.in/~purvigupta/" }],
                credits: "3:1",
                details: {
                    parts: [
                        {
                            title: "Syllabus & Topics",
                            content: "Basic notions from set theory, countable and uncountable sets. Metric spaces: definition and examples, basic topological notions. The topology of Rn: topology induced by norms, the Heine-Borel theorem, connected sets. Sequences and series: essential definitions, absolute versus conditional convergence of series, some tests of convergence of series. Continuous functions: properties, the sequential and the open- set characterizations of continuity, uniform continuity. Differentiation in one variable. The Riemann integral: formal definitions and properties, continuous functions and integration, the Fundamental Theorem of Calculus. Uniform convergence: definition, motivations and examples, uniform convergence and integration, the Weierstrass Approximation Theorem."
                        }
                    ],
                    books: [
                        "Tao, T. 2014., Analysis I, 3rd edition, Texts and Readings in Mathematics, vol. 37, Hindustan Book Agency.",
                        "Tao, T. 2014., Analysis II, 3rd edition, Texts and Readings in Mathematics, vol. 38, Hindustan Book Agency.",
                        "Apostol, T. M., Mathematical Analysis, 2nd edition, Narosa."
                    ]
                }
            },
            {
                code: "UM 205",
                name: "Algebraic Structures",
                instructors: [{ name: "Arvind Ayyer", link: "https://math.iisc.ac.in/~arvind/" }],
                credits: "3:1",
                details: {
                    parts: [
                        {
                            title: "Syllabus & Topics",
                            content: "Set theory: equivalence classes, partitions, posets, axiom of choice/Zorn’s lemma, countable and uncountable sets. Combinatorics: induction, pigeonhole principle, inclusion-exclusion, Möbius inversion formula, recurrence relations. Number theory: Divisibility and Euclids algorithm, Pythagorean triples, solving cubics, Infinitude of primes, arithmetic functions, Fundamental theorem of arithmetic, Congruences, Fermat’s little theorem and Euler’s theorem, ring of integers modulo n, factorisation of polynomials, algebraic and transcendental numbers. Graph theory: Basic definitions, trees, Eulerian tours, matchings, matrices associated to graphs. Algebra: groups, permutations, group actions, Cayley’s theorem, dihedral groups, introduction to rings and fields."
                        }
                    ],
                    books: [
                        "L. Childs, A Concrete Introduction to Higher Algebra, 3rd edition, Springer-Verlag.",
                        "M. A. Armstrong, Groups and Symmetry, Springer-Verlag.",
                        "Miklos Bona, A Walk Through Combinatorics: An Introduction to Enumeration and Graph Theory, World Scientific.",
                        "D. M. Burton., Elementary Number Theory, McGraw Hill.",
                        "Niven, Zuckerman, H. S. and Montgomery, H. L., An Introduction to the Theory of Numbers, 5th edition, Wiley Student Editions.",
                        "Fraleigh, G., A First Course in Abstract Algebra, 7th edition, Pearson."
                    ]
                }
            },
            {
                code: "UMC 203",
                name: "Introduction to Artificial Intelligence and Machine Learning",
                instructors: [
                    { name: "Aditya Gopalan", link: "https://ece.iisc.ac.in/~aditya/" },
                    { name: "Shishir N Kolathaya", link: "https://eecs.iisc.ac.in/people/shishir-kolathaya/" }
                ],
                credits: "3:1",
                details: {
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
            {
                code: "UMC 205",
                name: "Automata Theory and Computability",
                instructors: [{ name: "Deepak D’Souza", link: "https://eecs.iisc.ac.in/people/deepak-dsouza/" }],
                credits: "3:1",
                details: {
                    parts: [
                        {
                            title: "Syllabus & Topics",
                            content: "Finite-state automata: deterministic finite-state automata, pumping lemma, non-deterministc automata, regular expressions, Myhill-Nerode theorem, and ultimate periodicity. Pushdown automata and context-free languages: Context-free grammars, Chomsky normal form, pumping lemma for CFLs, Parikh's semilinearity theorem, non-deterministic pushdown automata, equivalence of contextfree grammars and pushdown automata, pushdown systems and reachability, and complementing deterministic PDAs. Turing machines and undecidability: deterministic Turing machines, notion of computable functions using Turing machines, recursive and recursively enumerable languages, halting problem, reductions, Rice's theorems, undecidable problems related to context-free languages, and Godel's Incompleteness theorem. Finite-State Automata, including the Myhill-Nerode Theorem, Ultimate Periodicity, and Buchi’s Logical Characterization. Pushdown Automata and Context-Free Languages, Including Deterministic PDA’s, Parikh’s Theorem, and The Chomsky-Shutzenberger Theorem. Turing Machines and Undecidability, Including Rice’s Theorem and Godel’s Incompleteness Theorem."
                        }
                    ],
                    books: [
                        "Dexter Kozen: Automata and Computability. Springer 1997.",
                        "Hopcroft J.E. and Ullman J.D.: Introduction to Automata, Languages and Computation. Addison Wesley, 1979."
                    ]
                }
            },
            { code: "UHS**", name: "Humanities", instructor: "-", credits: "0-3", pdf: "/humanities_courses.pdf" },
        ],
        5: [
            {
                code: "Electives",
                name: "Soft Core / Elective",
                instructor: "-",
                credits: "16",
                action: "scroll",
                targetId: "soft-core-section"
            },
            { code: "UHS**", name: "Humanities", instructor: "-", credits: "0-3", pdf: "/humanities_courses.pdf" },
        ],
        6: [
            { code: "Electives", name: "Soft Core / Elective", instructor: "-", credits: "15", action: "scroll", targetId: "soft-core-section" },
            { code: "UHS**", name: "Humanities", instructor: "-", credits: "0-3", pdf: "/humanities_courses.pdf" },
        ],
        7: [
            { code: "UMC 401 / Electives", name: "ISP I / Soft Core / Electives", instructor: "-", credits: "6", action: "scroll", targetId: "soft-core-section" },
            { code: "Electives", name: "Soft Core / Electives", instructor: "-", credits: "6", action: "scroll", targetId: "soft-core-section" },
        ],
        8: [
            { code: "UMC 402 / Electives", name: "ISP II / Soft Core / Electives", instructor: "-", credits: "12", action: "scroll", targetId: "soft-core-section" },
            { isOr: true },
            {
                code: "UMC 403",
                name: "Project",
                instructor: "-",
                credits: "0:12",
                details: {
                    parts: [
                        {
                            title: "Project Structure",
                            content: "Sem 7 & 8: Independent Study/Research Experience project (ISP)* (6 credits). Sem 8: Research/Industry project* (12 credits)."
                        },
                        {
                            title: "Selection & Supervision",
                            content: "Project availability is subject to the student finding a supervisor. Faculty or Research Groups can advertise projects and students can apply and be selected."
                        },
                        {
                            title: "Industry Focus",
                            content: "Students will be encouraged to carry out project work in the industry."
                        }
                    ]
                }
            },
        ],
        // ... fill other semesters as needed
    };

    const currentCourses = semesterCourses[activeSemester] || [
        { code: `MC ${activeSemester}01`, name: "Advanced Computational Mathematics", instructor: "Department Faculty", credits: "3:0" },
        { code: `MC ${activeSemester}02`, name: "Data Structures & Algorithms", instructor: "Department Faculty", credits: "3:1" },
        { code: `MC ${activeSemester}03`, name: "Systems Programming", instructor: "Department Faculty", credits: "3:0" },
        { code: `MC ${activeSemester}04`, name: "Elective I", instructor: "Various", credits: "3:0" },
    ];

    const getTotalCredits = (sem: number) => {
        if (sem === 1) return '18';
        if (sem === 2) return '17-20';
        if (sem === 3) return '15-18';
        if (sem === 4 || sem === 5) return '16-19';
        if (sem === 6) return '15-19';
        if (sem === 7 || sem === 8) return '12-16';
        return '19:0'; // Fallback
    };

    const [showProjectModal, setShowProjectModal] = useState(false);

    return (
        <div className={styles.container}>
            {/* Project Details Modal */}
            {showProjectModal && (
                <div className={styles.modalOverlay} onClick={() => setShowProjectModal(false)}>
                    <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <div className={styles.modalTitle}>Section 3.6: Project Guidelines</div>
                            <button className={styles.closeButton} onClick={() => setShowProjectModal(false)}>
                                <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>×</span>
                            </button>
                        </div>
                        <div className={styles.modalBody}>
                            <div className={styles.modalSection}>
                                <div className={styles.modalSectionTitle}>A. Project Options & Eligibility</div>
                                <p>Students can choose to undertake an independent study/research experience/industry project (denoted ‘ISP’ in the course table) worth 6 credits in their 7th semester, followed by either an ISP for 6 credits or a research/industry project worth 12 credits in their 8th semester.</p>
                                <p>Alternatively, students can choose to earn credits for one or more of these components from courses. The choice of ISP/project/electives must satisfy the following criteria:</p>
                                <ul className={styles.modalList}>
                                    <li>i) The topics can be broadly in applications of Math or EECS, possibly advised by faculty in other programs.</li>
                                    <li>ii) Each ISP/Project needs a faculty advisor from the institute, even if the ISP/Project is done outside. It is deemed to be done outside the Institute if it involves visiting an organization outside the Institute for more than 30 days in the semester.</li>
                                    <li>iii) Students who have not opted for ISP-I are eligible for the 12-credit Project in semester 8, provided they have a CGPA of 7.0 or above at the end of Sem 6.</li>
                                    <li>iv) Students who have opted for ISP-I are eligible for ISP-II provided they do not have a C grade or lower in ISP-I.</li>
                                    <li>v) Students who have opted for ISP-I are eligible for the 12-credit Project in semester 8 provided they do not have a B grade or lower in ISP-I.</li>
                                    <li>vi) <strong>For ISP/Project outside the Institute:</strong>
                                        <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                                            <li>At most *one* of ISP-I, ISP-II, or Project can be done outside the institute (academia or industry).</li>
                                            <li>Students and outside organizations must be aware that the ISP/Project is not an internship, but an industry-relevant research-oriented project and will be evaluated as such.</li>
                                            <li>Students doing ISP-I in Sem 7 outside must satisfy the following conditions:
                                                <ul style={{ listStyle: 'circle', paddingLeft: '1.5rem', marginTop: '0.25rem' }}>
                                                    <li>Must have a CGPA of at least 7.0 up to and including Sem 5.</li>
                                                    <li>Must have completed at least 3 of the 6 credits needed for Sem 7. The remaining can be completed in Sem 8. More precisely, the student should have completed 104+3=107 credits before Sem 7. Here 104 is the total minimum normal credit load in Sems 1-6.</li>
                                                    <li>Must have completed at least 18 soft-core credits before Sem 7.</li>
                                                </ul>
                                            </li>
                                            <li>Students doing ISP-II / Project in Semester 8 outside, must have completed all other credit requirements earlier.</li>
                                        </ul>
                                    </li>
                                    <li>vii) Students who choose to do an ISP/Project component must obtain the consent of a faculty member who is willing to act as a Project Advisor. If the student chooses to do a project, the Project Advisor becomes the student’s Faculty Advisor from that point.</li>
                                    <li>viii) For applying internship/ project outside the Institute refer the procedure outlined in Chapter – 5, section -5.12.</li>
                                </ul>
                            </div>

                            <div className={styles.modalSection}>
                                <div className={styles.modalSectionTitle}>B. Minimum Project Pass Grade</div>
                                <p>The minimum pass grade is D. Should there be a need for extension of the project, prior approval from the Dean needs to be obtained before the end of the 8th semester. In such cases, an application forwarded by the project advisor and the subject coordinator is to be submitted. The student must then register for the summer term and the maximum grade that can be obtained for project will be a B grade.</p>
                            </div>

                            <div className={styles.modalSection}>
                                <div className={styles.modalSectionTitle}>C. Internship in Connection with Project</div>
                                <p>Internship to be undertaken in a laboratory/institute outside the institute in connection with the project, has to be proposed by the primary project advisor at IISc in the form of an application to the Dean with details of the work to be carried out by the student. A period not exceeding one semester may be permitted based on the application. A specific recommendation by the primary project advisor at IISc has to be made. No exemptions will be given for compulsory courses during the period of absence. Project credits will have to be registered for that semester before leaving for internship.</p>
                            </div>

                            <div className={styles.modalSection}>
                                <div className={styles.modalSectionTitle}>D. Process Overview/ Logistics</div>
                                <ul className={styles.modalList}>
                                    <li>The PCC will gather ISP/Project proposals from faculty and share them with the students.</li>
                                    <li>Students must approach a faculty member to fix an advisor and select a project topic. This can be done either from the list of proposals shared by the PCC or by choosing a topic independently.</li>
                                    <li>After selecting an advisor and project topic, students are required to fill in the ISP/Project Form and have it signed by the advisor. This completed form must be submitted to the UG Office for processing.</li>
                                    <li>Students must register for the ISP/Project on SAP at the beginning of the semester.</li>
                                </ul>
                            </div>

                            <div className={styles.modalSection}>
                                <div className={styles.modalSectionTitle}>E. Evaluation</div>
                                <ul className={styles.modalList}>
                                    <li>Students must submit a midterm report that outlines their progress on the project.</li>
                                    <li>Students must submit a final report and present their work to a committee, which will include their Advisor and the PCC coordinators.</li>
                                    <li>The final grade will be based on evaluations from the Advisor (70% weightage) and the Committee (30% weightage).</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Student Testimonial Modal */}
            {selectedStudentTestimonial && (
                <div className={styles.modalOverlay} onClick={() => setSelectedStudentTestimonial(null)}>
                    <div className={styles.modalContent} onClick={e => e.stopPropagation()} style={{ maxWidth: '800px' }}>
                        <div className={styles.modalHeader}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div className={styles.testimonialAvatarPlaceholder} style={{ width: '40px', height: '40px' }}>
                                    {selectedStudentTestimonial.name.split(' ').map((n: string) => n[0]).join('')}
                                </div>
                                <div>
                                    <div className={styles.modalTitle} style={{ fontSize: '1.2rem' }}>{selectedStudentTestimonial.name}</div>
                                    <div className={styles.testimonialYear}>{selectedStudentTestimonial.year}</div>
                                </div>
                            </div>
                            <button className={styles.closeButton} onClick={() => setSelectedStudentTestimonial(null)}>
                                <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>×</span>
                            </button>
                        </div>
                        <div className={styles.modalBody} style={{ padding: '2rem' }}>
                            <div className={styles.testimonialQuote} style={{ fontSize: '1.1rem', fontStyle: 'italic', color: '#1e293b' }}>
                                "{selectedStudentTestimonial.quote}"
                            </div>
                        </div>
                    </div>
                </div>
            )}
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
                    alt="Mathematics and Computing Banner"
                    fill
                    priority
                    style={{ objectFit: 'cover', zIndex: 0 }}
                    sizes="100vw"
                />
                <div style={{ position: 'relative', zIndex: 2 }}>
                    <span className={styles.heroTag}>Bachelor of Technology</span>
                    <h1 className={styles.heroHeading}>Mathematics and Computing</h1>
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
                                <div className={styles.aboutWithVideo}>
                                    <div>
                                        <h1 className={styles.heroHeading} style={{ fontSize: '2rem', color: '#0f172a', marginBottom: '1rem' }}>
                                            About the Programme
                                        </h1>
                                        <p className={styles.introText} style={{ marginBottom: 0 }}>
                                            The BTech program in Mathematics and Computing is aimed at producing leaders who will be at the forefront of research, development, and innovation in futuristic disciplines and next generation technologies that require deep use of mathematics, computer science, and data science.
                                        </p>
                                    </div>
                                    <div className={styles.videoSection}>
                                        <div className={styles.videoWrapper}>
                                            <iframe
                                                src="https://www.youtube.com/embed/2Pvr06wBOXk"
                                                title="B.Tech in Mathematics and Computing at IISc"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div style={{ marginTop: '2rem', color: '#334155', lineHeight: '1.7' }}>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1e293b', marginBottom: '1rem' }}>
                                        Key Highlights
                                    </h3>
                                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <li>Immense value to be unlocked by providing a strong foundation in Mathematics, Computation and Data Science at the UG level.</li>
                                        <li>Significant impact in both academia and industry.</li>
                                        <li>Interdisciplinary program by leveraging the unmatched expertise available across the institute.</li>
                                        <li>Located in the tech hub of the country.</li>
                                        <li>Opportunities for various specializations and diverse projects.</li>
                                        <li>Institute PG Medical School Initiative: Projects in precision, AI enabled medicine.</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Why IISc B.Tech - Exact Content from Image */}
                            <div style={{ marginTop: '5rem', marginBottom: '4rem' }}>
                                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                                    <h2 style={{
                                        fontSize: '2rem',
                                        fontWeight: '700',
                                        color: '#0f172a',
                                        letterSpacing: '-0.02em',
                                        marginBottom: '1rem'
                                    }}>
                                        Why <span style={{ color: '#d97706' }}>IISc BTech</span>
                                    </h2>
                                    <p style={{
                                        color: '#475569',
                                        fontSize: '1.1rem',
                                        maxWidth: '900px',
                                        margin: '0 auto',
                                        lineHeight: '1.7'
                                    }}>
                                        Empowering future leaders with a rigorous, interdisciplinary blend of Mathematics and Computing.
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
                                            title: "The Difference",
                                            heading: "Why Maths & Computing (M&C) instead of CSE?",
                                            text: "Traditionally Computer Science did not demand a solid mathematics foundation. However, with the advent of math intensive fields such as AI (Artificial Intelligence) and Data Science, a solid Mathematics foundation is required even for a computer engineer.",
                                            theme: "sky",
                                            icon: (
                                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                                    <line x1="8" y1="21" x2="16" y2="21"></line>
                                                    <line x1="12" y1="17" x2="12" y2="21"></line>
                                                </svg>
                                            )
                                        },
                                        {
                                            title: "The Advantage",
                                            heading: "Why Maths & Computing (M&C) at IISc?",
                                            text: "Majority of M&C programs are run by Mathematics department with a heavy focus on Mathematics. In contrast, M&C at IISc is truly interdisciplinary with flexible weightage of mathematics & computer science. This provides students with a strong foundation in mathematics and also the freedom to pursue any field they are interested in.",
                                            theme: "purple",
                                            icon: (
                                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                                                </svg>
                                            )
                                        },
                                        {
                                            title: "Uniqueness",
                                            heading: "What is unique about the Program?",
                                            text: "At IISc, the core courses are completed by 2nd year. From third year, a student can choose electives, based on career aspirations. This flexibility is not offered in any other academic institutions.",
                                            theme: "lime",
                                            icon: (
                                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                </svg>
                                            )
                                        },
                                        {
                                            title: "Future Paths",
                                            heading: "What are the Career Options?",
                                            text: "Students can choose to pursue jobs or higher studies and focus on research. They can explore multiple career options such as Mathematics, AI & ML, Computational Science, Theoretical Computer Science, Quantum Computing, Computational Biology, Signal Processing, Mathematical Finance, and more.",
                                            theme: "red",
                                            icon: (
                                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
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
                                                background: card.theme === 'sky' ? '#0ea5e9' :
                                                    card.theme === 'purple' ? '#9333ea' :
                                                        card.theme === 'lime' ? '#65a30d' : '#dc2626'
                                            }} />

                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                                                <span style={{
                                                    fontSize: '0.8rem',
                                                    fontWeight: '700',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.05em',
                                                    color: card.theme === 'sky' ? '#0ea5e9' :
                                                        card.theme === 'purple' ? '#9333ea' :
                                                            card.theme === 'lime' ? '#65a30d' : '#dc2626',
                                                    background: card.theme === 'sky' ? '#e0f2fe' :
                                                        card.theme === 'purple' ? '#f3e8ff' :
                                                            card.theme === 'lime' ? '#ecfccb' : '#fee2e2',
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

                                {/* Student Voice Section */}
                                <div className={styles.studentVoiceSection}>
                                    <h2 className={styles.studentVoiceHeading}>Student Voice</h2>
                                    <p className={styles.studentVoiceText}>
                                        Hear from our students about their experiences in the B.Tech Mathematics and Computing program at IISc.
                                    </p>
                                    <button
                                        className={styles.studentVoiceButton}
                                        onClick={() => setShowTestimonials(!showTestimonials)}
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                        {showTestimonials ? 'Hide Student Testimonials' : 'Read Student Testimonials'}
                                    </button>

                                    {/* Testimonials Grid - Shows when button is clicked */}
                                    {showTestimonials && (
                                        <div className={styles.testimonialsGrid}>
                                            {[
                                                {
                                                    name: "Mrigank Pawagi",
                                                    year: "2022",
                                                    quote: "As a school student, I wished for a college experience that provided me with the opportunity to explore a wide variety of disciplines, while offering the resources to dive into what I like at whatever depth I want. IISc has exceeded my expectations in both regards. On one hand, through the various courses which I have taken across different areas of computer science and even the natural sciences, I am confident that my career choices are well-informed and that I have a solid understanding of basics of areas beyond my own. At the same time, I have had the opportunity to take advanced classes in areas of my interest and thus develop a deep understanding of the method and the kind of research that they involve. The faculty in IISc has been extremely helpful, not just in academic matters where their expertise and willingness to answer questions is well-known, but also in matters related to career guidance and administrative tasks. The student body, though small, is very talented, and my peers, who are experts in their own varied fields, teach me something new every day. I feel lucky to have made the decision to join IISc three years ago."
                                                },
                                                {
                                                    name: "R Balaji",
                                                    year: "2022",
                                                    quote: "Choosing B.Tech at IISc was notably one of the most significant and unexpected decisions of my life. And it turned out to be one of the best decisions I have made. It has opened me to the significantly challenging world of applied mathematics and modelling and rewarded my thought process while solving a complex problem. I have learnt a systematic and methodical approach to problem solving requiring deep conceptual understanding. The teaching here is very interactive and at par with western style education which emphasizes on depth of knowledge as opposed to an engineering curriculum where shortcuts are the key to success. IISc has truly inspired me to pursue my research interests and has given me a solid foundation in computational techniques so that I can pursue modelling in the field of my choice, let it be finance, data science, astronomy or quantum computing. I have interned in Purdue university because of the mathematical background I gained at IISc. As I move on to the next chapter in my life, IISc has given me clarity, direction and helped making dreams come true."
                                                },
                                                {
                                                    name: "Varivashva Poladi",
                                                    year: "2022",
                                                    quote: "I've been a student of IISc for three years, and my time here so far has helped me grow as a person in unimaginable ways. What I hoped to do in college was explore each and every field that intrigued me, learn as much as possible from every person I meet, make great friends, and find myself as a person. IISc is a place where everyone can do all that, and more. Reflecting upon my experiences here, I strongly feel that there is no other place like IISc. Students here are encouraged to learn about different disciplines, take up a variety of courses. The professors are the most helpful people you will find on campus. Their extensive knowledge, experience in their respective fields, and eagerness to explain everything will not only enhance your skillset but also instill basic work ethics, punctuality, and encourage you to take on future challenges. The peer group and seniors are the people you will interact with the most. You will make new friends who will transform your 'difficult' journey into a much cooler experience. Their enthusiasm and diverse ways of thinking will undoubtedly drive you to work harder and improve constantly. In the B.Tech Programme, alongside the Computer Science courses, you will gain significant exposure to the rigour of Core Mathematics, creating a deeper level of appreciation for every mathematical statement you write. The faculties are usually very helpful and cooperative beyond the standard working hours, providing valuable research experience early on. Overall, the environment at IISc never makes you feel away from home. After every semester, you will discover a better version of yourself, both professionally and personally."
                                                },
                                                {
                                                    name: "Saksham Agrawal",
                                                    year: "2023",
                                                    quote: "After completing my four semesters at IISc, I can proudly say that studying here has been nothing short of a blessing. This place encapsulates an immense wealth of knowledge, allowing anyone to satisfy their urge for learning in any field imaginable. The lush green campus, pleasant weather, historical buildings, and super-cooperative faculties make the journey unforgettable. The professors are the most helpful people you will find on campus. Their extensive knowledge, experience in their respective fields, and eagerness to explain everything will not only enhance your deftset but also instill basic work ethics, punctuality, and encourage you to take on future challenges. The peer group and seniors are the people you will interact with the most. You will make new friends who will transform your 'difficult' journey into a much cooler experience. Their enthusiasm and diverse ways of thinking will undoubtedly drive you to work harder and improve constantly. In the B.Tech Programme, alongside the Computer Science courses, you will gain significant exposure to the rigour of Core Mathematics, creating a deeper level of appreciation for every mathematical statement you write. The faculties are usually very helpful and cooperative beyond the standard working hours, providing valuable research experience early on. Overall, the environment at IISc never makes you feel away from home. After every semester, you will discover a better version of yourself, both professionally and personally."
                                                },
                                                {
                                                    name: "Durga Naniwadekar",
                                                    year: "2024",
                                                    quote: "My first year at IISc has been a truly enjoyable and enriching experience. I came here with an interest in Math, a desire to learn Computer Science, and a love for Biology — and the program has been perfect for me. The breadth of courses offered has been amazing. The atmosphere was refreshingly focused on learning, and I've felt truly at home interacting with professors who are so experienced and committed, and peers who are open and thoughtful. I'm very happy to be here, and I'm looking forward to the years ahead!"
                                                },
                                                {
                                                    name: "Aditey Nandan",
                                                    year: "2024",
                                                    quote: "Joining IISc has been one of the most transformative experiences of my life. Right from the start of my undergraduate journey, IISc has offered the unique opportunity to explore diverse fields while building a strong foundation in my chosen discipline. The academic culture here encourages exploration across a wide range of subjects, extending beyond my core branch into areas such as the natural sciences. The Institute provides ample opportunities for students to engage in research and computing courses have expanded my thinking abilities, emphasizing rigor and fostering a deep and structured approach to problem solving. The professors are genuinely invested in helping students learn, often going out of their way to simplify complex concepts and connect them to real world applications. They also provide numerous opportunities to work with them outside of coursework, helping us to gain valuable research experience. The seniors here are equally supportive, always willing to guide us and help us find opportunities aligned with our interests and future goals. I couldn't have asked for a better place, as the wide range of opportunities, stimulating peer group, and supportive environment have continually contributed to my academic development and personal growth."
                                                },
                                                {
                                                    name: "Pratham Gupta",
                                                    year: "2023",
                                                    quote: "After spending four incredible semesters at the Indian Institute of Science (IISc), I can confidently say it has exceeded all my expectations. What truly sets IISc apart is its unique blend of academic rigour, a supportive community, and a strong focus on research. The coursework here is demanding, pushing you outside your comfort zone and forcing you to think critically. Yet, the environment remains supportive, with professors who are invested in your success. Transforming challenges into opportunities to gain a deep and meaningful understanding of your chosen field. My batchmates and seniors have been incredibly supportive, making hostel life feel like a second home. The vibrant student life at IISc extends beyond the classroom. Participating in clubs like Databased, Vicharaka, Samaasy, and Ensemble allowed me to connect with like-minded peers and explore various fields. The students here are very enthusiastic and eager to learn and make their mark in society. In IISc, I've found amazing opportunities to learn various disciplines to great depth, a wonderful peer group and the opportunity to better myself as a student and person. If you're looking for an institute that fosters a spirit of curiosity, research, and collaboration, then IISc is definitely worth exploring."
                                                },
                                                {
                                                    name: "Sehaj Ganjoo",
                                                    year: "2023",
                                                    quote: "My past two years at IISc has been like stepping into a hidden world. Sure, everyone knows about academics, research and all but what they don't tell you is the feeling you get when you walk onto campus and suddenly you're surrounded by your people. The campus's lush greens and delightful weather will easily push you past your daily step goal. With the best faculty and best-tailored courses, the curriculum is a perfect blend of theoretical depth and practical application. Diving deep into the foundations of computer science and the core of mathematics, the BTech program prepares you for anything the tech industry can throw your way. The professors here are super minds; they can explain complex concepts with remarkable patience. Even the research opportunities come in, allowing you to contribute to real-world problems alongside these brilliant minds. But the best part? The people you meet become your family. My batchmates and seniors are a hilarious, supportive bunch— the kind who'll transform the finer points of quantum mechanics over chai at the mess, then dive headfirst into a late-night coding session fuelled by filter coffee. We push each other to new heights, celebrate each other's victories and cry together over debugging nightmares. IISc offers a lot more than just academics, its a sense of belonging. It provides a platform for exploring diverse interests, from cultural fests to sporting events. It's just the beginning of a lifelong journey of learning."
                                                }
                                            ].map((testimonial, idx) => {
                                                const previewLength = 150;
                                                const shouldShowReadMore = testimonial.quote.length > previewLength;
                                                const displayText = shouldShowReadMore ? testimonial.quote.slice(0, previewLength) + '...' : testimonial.quote;

                                                return (
                                                    <div key={idx} className={styles.testimonialCard}>
                                                        <div className={styles.testimonialHeader}>
                                                            <div className={styles.testimonialAvatarPlaceholder}>
                                                                {testimonial.name.split(' ').map(n => n[0]).join('')}
                                                            </div>
                                                            <div>
                                                                <div className={styles.testimonialName}>{testimonial.name}</div>
                                                                <div className={styles.testimonialYear}>{testimonial.year}</div>
                                                            </div>
                                                        </div>
                                                        <div className={styles.testimonialQuote}>
                                                            "{displayText}"
                                                        </div>
                                                        {shouldShowReadMore && (
                                                            <button
                                                                className={styles.readMoreBtn}
                                                                onClick={() => setSelectedStudentTestimonial(testimonial)}
                                                            >
                                                                Read More <span style={{ fontSize: '1.2rem' }}>→</span>
                                                            </button>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className={styles.sidebar}>
                            {/* Sidebar kept empty as per previous request */}
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
                                The Bachelor of Technology (Mathematics and Computing) is a four-year programme, organised into 8 semesters. Students need to complete 128 credits as specified in the table and sections below.
                            </p>

                            <div style={{ marginBottom: '2rem', marginTop: '1.5rem' }}>
                                <div className={styles.tableContainer}>
                                    <table className={styles.courseTable}>
                                        <thead>
                                            <tr>
                                                <th rowSpan={2} style={{ verticalAlign: 'middle', textAlign: 'center', width: '20%' }}>Course Category</th>
                                                <th rowSpan={2} style={{ verticalAlign: 'middle', textAlign: 'center', width: '10%' }}>Core</th>
                                                <th rowSpan={2} style={{ verticalAlign: 'middle', textAlign: 'center', width: '15%' }}>Breadth Soft Core</th>
                                                <th rowSpan={2} style={{ verticalAlign: 'middle', textAlign: 'center', width: '10%' }}>Humanities</th>
                                                <th colSpan={2} style={{ textAlign: 'center', width: '20%' }}>Soft Core</th>
                                                <th rowSpan={2} style={{ verticalAlign: 'middle', textAlign: 'center', width: '15%' }}>ISP-I / ISP-II / Project / Electives</th>
                                                <th rowSpan={2} style={{ verticalAlign: 'middle', textAlign: 'center', width: '10%' }}>Total</th>
                                            </tr>
                                            <tr>
                                                <th style={{ textAlign: 'center', borderTop: '1px solid #e5e7eb' }}>Math</th>
                                                <th style={{ textAlign: 'center', borderTop: '1px solid #e5e7eb' }}>Computing</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td rowSpan={2} style={{ fontWeight: 600 }}>Minimum Credit Requirement</td>
                                                <td rowSpan={2} style={{ textAlign: 'center' }}>50</td>
                                                <td rowSpan={2} style={{ textAlign: 'center' }}>14</td>
                                                <td rowSpan={2} style={{ textAlign: 'center' }}>9</td>
                                                <td colSpan={2} style={{ textAlign: 'center', borderBottom: '1px solid #e5e7eb' }}>21</td>
                                                <td rowSpan={2} style={{ textAlign: 'center' }}>34*</td>
                                                <td rowSpan={2} style={{ textAlign: 'center', fontWeight: 'bold' }}>128</td>
                                            </tr>
                                            <tr>
                                                <td style={{ textAlign: 'center' }}>6</td>
                                                <td style={{ textAlign: 'center' }}>6</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#000', fontWeight: 700 }}>
                                Note: *Any excess credits in the Breadth Soft Core, Humanities or Soft Core pool will be counted towards elective credits.
                            </div>
                        </div>

                        {/* Overview of Course Requirements */}
                        <div className={styles.overviewSection} style={{ marginTop: '3rem' }}>
                            <h2 className={styles.sectionHeading}>Overview of Course Requirements</h2>

                            <div style={{ color: '#0f172a', lineHeight: '1.7', fontSize: '1rem' }}>

                                {/* i) CORE */}
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1e293b', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                                        i) CORE
                                    </h3>
                                    <div style={{ marginBottom: '1rem' }}>
                                        <div style={{ fontWeight: 600, color: '#334155' }}>Mathematics:</div>
                                        <ul className={styles.simpleReqList}>
                                            <li>Analysis and Linear Algebra I, II, Probability and Statistics, Basic Analysis, Introduction to Algebraic Structures.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 600, color: '#334155' }}>Computing:</div>
                                        <ul className={styles.simpleReqList}>
                                            <li>Algorithms and Programming, Introduction to Electronics and Electrical Engineering, Introduction to Computer Systems, Discrete Mathematics, Data Structures and Algorithms, Automata Theory and Computability, Introduction to Numerical Methods, and Introduction to Artificial Intelligence & Machine Learning.</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* ii) BREADTH SOFT CORE */}
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1e293b', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                                        ii) BREADTH SOFT CORE
                                    </h3>
                                    <p style={{ margin: 0, color: '#444' }}>
                                        14 credits from a selection of Physics, Chemistry, Biology, Material Science, Earth and Environmental Science subjects.
                                    </p>
                                    <p style={{ margin: '0.25rem 0 0 0', fontStyle: 'italic', fontSize: '0.9rem', color: '#64748b' }}>
                                        The list of core and breadth soft core courses and their semester wise break-up can be <span style={{ color: '#2563eb', cursor: 'pointer', textDecoration: 'underline' }} onClick={() => document.getElementById('semester-wise')?.scrollIntoView({ behavior: 'smooth' })}>found in the scheme of instructions (SoI)</span>.
                                    </p>
                                </div>

                                {/* iii) SOFT CORE */}
                                <div id="soft-core-section" style={{ marginBottom: '1.5rem' }}>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1e293b', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                                        iii) SOFT CORE
                                    </h3>
                                    <p style={{ margin: 0, color: '#444' }}>
                                        The soft core consists of the Mathematics and Computing streams. Students have to take at least 6 credits in each stream. Students have to take at least 21 credits from the combined list of soft-core courses. The list of courses in each stream is listed below.
                                    </p>

                                    {/* Soft Core Accordions */}
                                    <div className={styles.studyTrackAccordionContainer} style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                                        {/* Mathematics Accordion */}
                                        <div className={styles.accordionItem}>
                                            <button
                                                className={`${styles.accordionHeader} ${activeOverviewSoftCoreTab === 'mathematics' ? styles.accordionHeaderActive : ''}`}
                                                onClick={() => setActiveOverviewSoftCoreTab(activeOverviewSoftCoreTab === 'mathematics' ? null : 'mathematics')}
                                            >
                                                <span className={styles.accordionTitle} style={{ fontSize: '1rem' }}>
                                                    Soft Core: Mathematics
                                                </span>
                                                <span className={styles.accordionIcon} style={{ fontSize: '1.25rem' }}>
                                                    {activeOverviewSoftCoreTab === 'mathematics' ? '−' : '+'}
                                                </span>
                                            </button>

                                            {activeOverviewSoftCoreTab === 'mathematics' && (
                                                <div className={styles.accordionContent} style={{ padding: '1.5rem' }}>
                                                    <div style={{ marginBottom: '1rem', color: '#475569', fontSize: '0.95rem' }}>
                                                        For details of below mathematics courses, Please <a href="https://math.iisc.ac.in/catalogue.html#ma-212" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', fontWeight: '600', textDecoration: 'underline' }}>click here</a>.
                                                    </div>
                                                    <div className={styles.softCoreScrollableTable} style={{ border: '1px solid #e2e8f0', borderRadius: '8px', marginBottom: 0 }}>
                                                        <table className={styles.courseTable}>
                                                            <thead>
                                                                <tr>
                                                                    <th style={{ width: '15%' }}>Code</th>
                                                                    <th style={{ width: '70%' }}>Title</th>
                                                                    <th style={{ width: '15%', textAlign: 'center' }}>Credits</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {[
                                                                    { code: "E0 220", title: "Graph Theory", credits: "3:1" },
                                                                    { code: "E0 228", title: "Combinatorics", credits: "3:1" },
                                                                    { code: "E0 265", title: "Convex Optimization and Applications", credits: "3:1" },
                                                                    { code: "E0 298", title: "Linear Algebra and its Applications", credits: "3:1" },
                                                                    { code: "E0 350", title: "Advanced Convex Optimization", credits: "3:1" },
                                                                    { code: "E1 222", title: "Stochastic Models and Applications", credits: "3:0" },
                                                                    { code: "E1 251", title: "Linear and Nonlinear Optimization", credits: "3:0" },
                                                                    { code: "E2 202", title: "Random Processes", credits: "3:0" },
                                                                    { code: "E2 212", title: "Matrix Theory", credits: "3:0" },
                                                                    { code: "MA 200", title: "Multivariable Calculus", credits: "3:1" },
                                                                    { code: "MA 212", title: "Algebra I", credits: "3:0" },
                                                                    { code: "MA 216", title: "Introduction to Graph Theory", credits: "3:0" },
                                                                    { code: "MA 218", title: "Number Theory", credits: "3:0" },
                                                                    { code: "MA 219", title: "Linear Algebra", credits: "3:1" },
                                                                    { code: "MA 222", title: "Analysis – II", credits: "3:1" },
                                                                    { code: "MA 223", title: "Functional Analysis", credits: "3:0" },
                                                                    { code: "MA 224", title: "Complex Analysis", credits: "3:1" },
                                                                    { code: "MA 231", title: "Topology", credits: "3:1" },
                                                                    { code: "MA 232", title: "Introduction to Algebraic Topology", credits: "3:0" },
                                                                    { code: "MA 235", title: "Introduction to Differentiable Manifolds", credits: "3:0" },
                                                                    { code: "MA 241", title: "Ordinary Differential Equations", credits: "3:1" },
                                                                    { code: "MA 242", title: "Partial Differential Equations", credits: "3:0" },
                                                                    { code: "MA 262", title: "Introduction to Stochastic Processes", credits: "3:0" },
                                                                    { code: "MA 278", title: "Introduction to Dynamical Systems Theory", credits: "3:0" },
                                                                    { code: "MA 347A", title: "Topics in Finite Element Methods", credits: "3:1" },
                                                                    { code: "MA 361", title: "Probability Theory", credits: "3:0" },
                                                                    { code: "PH 205", title: "Mathematical Methods of Physics", credits: "3:0" },
                                                                ].map((course, index) => (
                                                                    <tr key={index}>
                                                                        <td className={styles.courseCode}>{course.code}</td>
                                                                        <td className={styles.courseName}>{course.title}</td>
                                                                        <td style={{ textAlign: 'center' }}>{course.credits}</td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Computing Accordion */}
                                        <div className={styles.accordionItem}>
                                            <button
                                                className={`${styles.accordionHeader} ${activeOverviewSoftCoreTab === 'computing' ? styles.accordionHeaderActive : ''}`}
                                                onClick={() => setActiveOverviewSoftCoreTab(activeOverviewSoftCoreTab === 'computing' ? null : 'computing')}
                                            >
                                                <span className={styles.accordionTitle} style={{ fontSize: '1rem' }}>
                                                    Soft Core: Computing
                                                </span>
                                                <span className={styles.accordionIcon} style={{ fontSize: '1.25rem' }}>
                                                    {activeOverviewSoftCoreTab === 'computing' ? '−' : '+'}
                                                </span>
                                            </button>

                                            {activeOverviewSoftCoreTab === 'computing' && (
                                                <div className={styles.accordionContent} style={{ padding: '1.5rem' }}>
                                                    <div style={{ marginBottom: '1rem', color: '#475569', fontSize: '0.95rem' }}>
                                                        For details of below computing courses, Please <a href="https://www.csa.iisc.ac.in/academics-all/courses/descriptions/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', fontWeight: '600', textDecoration: 'underline' }}>click here</a>.
                                                    </div>
                                                    <div className={styles.softCoreScrollableTable} style={{ border: '1px solid #e2e8f0', borderRadius: '8px', marginBottom: 0 }}>
                                                        <table className={styles.courseTable}>
                                                            <thead>
                                                                <tr>
                                                                    <th style={{ width: '15%' }}>Code</th>
                                                                    <th style={{ width: '70%' }}>Title</th>
                                                                    <th style={{ width: '15%', textAlign: 'center' }}>Credits</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {[
                                                                    { code: "UMC 301", title: "Applied Data Science and Artificial Intelligence", credits: "3:1" },
                                                                    { code: "DS 207", title: "Introduction to Natural Language Processing", credits: "3:1" },
                                                                    { code: "DS 211", title: "Numerical Optimization", credits: "3:0" },
                                                                    { code: "DS 221", title: "Introduction to Scalable Systems", credits: "3:1" },
                                                                    { code: "DS 250", title: "Multigrid Methods", credits: "3:1" },
                                                                    { code: "DS 252", title: "Introduction to Cloud Computing", credits: "3:1" },
                                                                    { code: "DS 256", title: "Scalable Systems for Data Science", credits: "3:1" },
                                                                    { code: "DS 284", title: "Numerical Linear Algebra", credits: "2:1" },
                                                                    { code: "DS 289", title: "Numerical Solution of Differential Equations", credits: "3:1" },
                                                                    { code: "DS 291", title: "Finite Elements: Theory and Algorithms", credits: "3:1" },
                                                                    { code: "DS 294", title: "Data Analysis and Visualization", credits: "3:0" },
                                                                    { code: "DS 295", title: "Parallel Programming", credits: "3:1" },
                                                                    { code: "DS 301", title: "Bioinformatics", credits: "2:0" },
                                                                    { code: "E0 205", title: "Mathematical Logic and Theorem Proving", credits: "3:1" },
                                                                    { code: "E0 206", title: "Theorist’s Toolkit", credits: "3:1" },
                                                                    { code: "E0 208", title: "Computational Geometry", credits: "3:1" },
                                                                    { code: "E0 209", title: "Principles of Distributed Software", credits: "3:1" },
                                                                    { code: "E0 224", title: "Computational Complexity Theory", credits: "3:1" },
                                                                    { code: "E0 225", title: "Design and Analysis of Algorithms", credits: "3:1" },
                                                                    { code: "E0 227", title: "Program Analysis and Verification", credits: "3:1" },
                                                                    { code: "E0 230", title: "Computational Methods of Optimization", credits: "3:1" },
                                                                    { code: "E0 234", title: "Introduction to Randomized Algorithms", credits: "3:1" },
                                                                    { code: "E0 235", title: "Cryptography", credits: "3:1" },
                                                                    { code: "E0 240", title: "Modelling and Simulation", credits: "3:1" },
                                                                    { code: "E0 244", title: "Computational Geometry and Topology", credits: "3:1" },
                                                                    { code: "E0 248", title: "Theoretical Foundations of Cryptography", credits: "3:1" },
                                                                    { code: "E0 249", title: "Approximation Algorithms", credits: "3:1" },
                                                                    { code: "E0 255", title: "Compiler Design", credits: "3:1" },
                                                                    { code: "E0 259", title: "Data Analytics", credits: "3:1" },
                                                                    { code: "E0 267", title: "Soft Computing", credits: "3:1" },
                                                                    { code: "E0 270", title: "Machine Learning", credits: "3:1" },
                                                                    { code: "E0 272", title: "Formal Methods in Software Engineering", credits: "3:1" },
                                                                    { code: "E1 213", title: "Pattern Recognition and Neural Networks", credits: "3:1" },
                                                                    { code: "E1 244", title: "Detection and Estimation Theory", credits: "3:0" },
                                                                    { code: "E1 254", title: "Game Theory", credits: "3:1" },
                                                                    { code: "E1 277", title: "Reinforcement Learning", credits: "3:1" },
                                                                    { code: "E2 201", title: "Information Theory", credits: "3:0" },
                                                                    { code: "E2 230", title: "Network Science and Modelling", credits: "3:0" },
                                                                    { code: "E2 232", title: "TCP/IP Networking", credits: "2:1" },
                                                                    { code: "QT 207", title: "Introduction to Quantum Computation", credits: "3:0" },
                                                                    { code: "BE 218", title: "Computational Epidemiology", credits: "3:1" },
                                                                    { code: "MA 208", title: "Proofs and Programs", credits: "3:1" },
                                                                ].map((course, index) => (
                                                                    <tr key={index}>
                                                                        <td className={styles.courseCode}>{course.code}</td>
                                                                        <td className={styles.courseName}>{course.title}</td>
                                                                        <td style={{ textAlign: 'center' }}>{course.credits}</td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
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
                                        ISP stands for Independent Study Project. ISP-I (semester 7), ISP-II (semester 8) carries 6 credits each. Project refers to Research or Industry Project and carries 12 credits.
                                    </p>
                                    <div style={{ fontStyle: 'italic', fontSize: '0.9rem', color: '#64748b' }}>
                                        Detailed rules governing projects are specified in <span style={{ color: '#2563eb', cursor: 'pointer', textDecoration: 'underline' }} onClick={() => setShowProjectModal(true)}>Section 3.6</span>.
                                    </div>
                                </div>

                                {/* v) ELECTIVES */}
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1e293b', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                                        v) ELECTIVES
                                    </h3>
                                    <p style={{ margin: 0, color: '#444' }}>
                                        Elective credits can be fulfilled by passing any course offered across the institute.
                                    </p>
                                    <p style={{ margin: '0.25rem 0 1rem 0', fontStyle: 'italic', fontSize: '0.9rem', color: '#64748b' }}>
                                        Some useful elective courses are also provided under the category of suggested electives.
                                    </p>

                                    {/* Suggested Electives Accordion */}
                                    <div className={styles.studyTrackAccordionContainer} style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>
                                        <div className={styles.accordionItem}>
                                            <button
                                                className={`${styles.accordionHeader} ${activeElectivesTab ? styles.accordionHeaderActive : ''}`}
                                                onClick={() => setActiveElectivesTab(!activeElectivesTab)}
                                            >
                                                <span className={styles.accordionTitle} style={{ fontSize: '1rem' }}>
                                                    View Suggested Electives List
                                                </span>
                                                <span className={styles.accordionIcon} style={{ fontSize: '1.25rem' }}>
                                                    {activeElectivesTab ? '−' : '+'}
                                                </span>
                                            </button>

                                            {activeElectivesTab && (
                                                <div className={styles.accordionContent} style={{ padding: '1.5rem' }}>
                                                    <div className={styles.softCoreScrollableTable} style={{ border: '1px solid #e2e8f0', borderRadius: '8px', marginBottom: 0 }}>
                                                        <table className={styles.courseTable}>
                                                            <thead>
                                                                <tr>
                                                                    <th style={{ width: '15%' }}>Code</th>
                                                                    <th style={{ width: '70%' }}>Title</th>
                                                                    <th style={{ width: '15%', textAlign: 'center' }}>Credits</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {[
                                                                    { code: "MG 201", title: "Managerial Economics", credits: "3:0" },
                                                                    { code: "MG 265", title: "Data Mining", credits: "3:0" },
                                                                    { code: "MG 221", title: "Applied Probability and Statistics", credits: "2:1" },
                                                                    { code: "MG 226", title: "Time Series Analysis and Forecasting", credits: "3:0" },
                                                                    { code: "MG 258", title: "Financial Instruments and Risk Management Strategies", credits: "3:0" },
                                                                    { code: "PH 202", title: "Statistical Mechanics", credits: "3:0" },
                                                                    { code: "PH 204", title: "Quantum Mechanics II", credits: "3:0" },
                                                                    { code: "PH 206", title: "Electromagnetic Theory", credits: "3:0" },
                                                                    { code: "BC 302", title: "Current Trends in Drug Discovery", credits: "3:0" },
                                                                    { code: "MA 253", title: "Numerical Methods for Partial Differential Equations", credits: "3:0" },
                                                                    { code: "EC 201", title: "Theoretical and Mathematical Ecology", credits: "2:1" },
                                                                    { code: "EC 303", title: "Spatial dynamic in Biology", credits: "2:1" },
                                                                    { code: "NE 101", title: "Entrepreneurship, Ethics and Societal Impact", credits: "1:0" },
                                                                    { code: "E1 396", title: "Stochastic Approximation Algorithms", credits: "3:1" },
                                                                    { code: "MA 331", title: "Topology and Geometry", credits: "3:0" },
                                                                    { code: "E0 259", title: "Data Analytics", credits: "3:1" },
                                                                    { code: "BE 218", title: "Computational Epidemiology", credits: "3:1" },
                                                                    { code: "CP 214", title: "Foundations of Robotics", credits: "3:1" },
                                                                    { code: "PH 354", title: "Computational Physics", credits: "3:0" },
                                                                    { code: "E2 270", title: "Quantum Information Theory", credits: "3:0" },
                                                                    { code: "DS 301", title: "Bioinformatics", credits: "2:0" },
                                                                    { code: "E0 207", title: "Computational Topology", credits: "3:1" },
                                                                ].map((course, index) => (
                                                                    <tr key={index}>
                                                                        <td className={styles.courseCode}>{course.code}</td>
                                                                        <td className={styles.courseName}>{course.title}</td>
                                                                        <td style={{ textAlign: 'center' }}>{course.credits}</td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>

                        {/* Semester-wise Requirements Section */}
                        <div className={styles.semesterSection}>
                            <h2 id="semester-wise" className={styles.sectionHeading}>
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
                                            {[1, 2, 3].includes(activeSemester) && <th style={{ width: '15%' }}>Course Type</th>}
                                            <th style={{ width: '15%' }}>Course Code</th>
                                            <th style={{ width: [1, 2, 3].includes(activeSemester) ? '35%' : '50%' }}>Course Name</th>
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
                                                    {[1, 2, 3].includes(activeSemester) && !course.isTypeMerged && (
                                                        <td
                                                            rowSpan={course.typeRowSpan}
                                                            style={{
                                                                backgroundColor: '#fff',
                                                                borderRight: '1px solid #e5e7eb',
                                                                padding: '1rem',
                                                                verticalAlign: 'middle',
                                                                fontWeight: 600,
                                                                color: '#1e293b'
                                                            }}
                                                        >
                                                            {course.type}
                                                            {course.typeDescription && (
                                                                <div style={{ fontWeight: 400, fontSize: '0.85rem', color: '#64748b', fontStyle: 'italic', marginTop: '4px' }}>
                                                                    {course.typeDescription}
                                                                </div>
                                                            )}
                                                        </td>
                                                    )}
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
                                                        ) : course.action === 'scroll' ? (
                                                            <span
                                                                className={styles.courseLink}
                                                                onClick={() => {
                                                                    const element = document.getElementById(course.targetId);
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
                                                        ) : course.action === 'scroll' ? (
                                                            <span
                                                                className={styles.courseLink}
                                                                onClick={() => {
                                                                    const element = document.getElementById(course.targetId);
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
                                                        {course.instructors ? (
                                                            course.instructors.map((inst: any, i: number) => (
                                                                <React.Fragment key={i}>
                                                                    {i > 0 && ", "}
                                                                    <a href={inst.link} target="_blank" rel="noopener noreferrer" className={styles.instructorLink}>
                                                                        {inst.name}
                                                                    </a>
                                                                </React.Fragment>
                                                            ))
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
                                            <td colSpan={[1, 2, 3].includes(activeSemester) ? 4 : 3} className={styles.totalLabel}>Normal Load</td>
                                            <td className={styles.totalCredits}>{getTotalCredits(activeSemester)}</td>
                                        </tr>
                                        {/* Reduced Load Row (Sem 2, 3, 4) */}
                                        {(activeSemester === 2 || activeSemester === 3 || activeSemester === 4) && (
                                            <tr className={styles.totalRow} style={{ borderTop: '1px solid #e5e7eb' }}>
                                                <td colSpan={3} className={styles.totalLabel} style={{ verticalAlign: 'top' }}>
                                                    Reduced Load
                                                    <div style={{ fontWeight: '400', fontSize: '0.8rem', color: '#64748b', marginTop: '0.2rem' }}>
                                                        {activeSemester === 2
                                                            ? "(UMA 102, UMC 102, UMC 103A are mandatory. Must register for an additional 2 to 5 credits)"
                                                            : activeSemester === 3
                                                                ? "(UMA 201, UMC 201, UMC 202 are mandatory. Can register for a maximum of 4 additional credits)"
                                                                : "(drop one core course; can register for a maximum of 4 additional credits)"}
                                                    </div>
                                                </td>
                                                <td className={styles.totalCredits} style={{ verticalAlign: 'top' }}>
                                                    {activeSemester === 2 ? '12-15' : '12-16'}
                                                </td>
                                            </tr>
                                        )}
                                        {/* Enhanced Load Row (Sem 4, 5, 6, 7, 8) */}
                                        {(activeSemester >= 4) && (
                                            <tr className={styles.totalRow} style={{ borderTop: '1px solid #e5e7eb' }}>
                                                <td colSpan={3} className={styles.totalLabel} style={{ verticalAlign: 'top' }}>
                                                    Enhanced Load
                                                </td>
                                                <td className={styles.totalCredits} style={{ verticalAlign: 'top' }}>
                                                    {(activeSemester === 7 || activeSemester === 8) ? '12-21' : activeSemester === 6 ? '15-21' : '16-21'}
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



                        {/* Soft Core Courses Section */}






                        {/* STUDY TRACKS Section */}
                        <div className={styles.overviewSection} style={{ marginTop: '3rem' }}>
                            <h2 className={styles.sectionHeading}>Study Tracks</h2>
                            <p className={styles.overviewText} style={{ marginBottom: '2rem' }}>
                                The program structure encourages interested students to pursue a study track should they wish to do so. Here is an indicative list of study tracks.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {[
                                    {
                                        title: "A. MATHEMATICS",
                                        items: [
                                            "Linear Algebra, Multivariable calculus",
                                            "Algebra: Algebra-I, Algebra-II, Number theory, Graph theory, Cryptography",
                                            "Analysis: Measure and Integration, Functional Analysis, ODE, PDE, Convex Optimization, Numerical solutions to Differential Equations",
                                            "Geometry/Topology: Topology, Differentiable Manifolds, Algebraic Topology, Graph theory, Computational Geometry and Topology",
                                            "Probability: Measure and Integration, Probability Theory, Random Processes, Stochastic Processes, Percolation and Random Graphs, Random Matrix Theory"
                                        ]
                                    },
                                    {
                                        title: "B. INTRODUCTION TO ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING",
                                        items: [
                                            "Random Processes",
                                            "Applied Data Science and Artificial Intelligence",
                                            "Computational Methods of Optimization",
                                            "Machine Learning, Game Theory",
                                            "Data Mining",
                                            "Soft Computing",
                                            "Reinforcement Learning",
                                            "Scalable Systems for Data Science",
                                            "Foundations of Robotics",
                                            "Data Analysis and Visualization"
                                        ]
                                    },
                                    {
                                        title: "C. COMPUTATIONAL SCIENCE",
                                        items: [
                                            "Numerical Optimization",
                                            "Multigrid Methods",
                                            "Numerical Solution of Differential Equations",
                                            "Finite Element Methods, Bioinformatics"
                                        ]
                                    },
                                    {
                                        title: "D. THEORETICAL COMPUTER SCIENCE",
                                        items: [
                                            "Algorithms and Complexity: Design and Analysis of Algorithms, Theorist’s Toolkit, Computational Complexity Theory, Introduction to Randomized Algorithms, Approximation Algorithms",
                                            "Combinatorics and Geometry: Computational Geometry, Computational Topology, Combinatorics, Graph Theory",
                                            "Cryptography and Security: Theoretical Foundations of Cryptography, Cryptography, Network and Distributed Systems Security, Foundations of Secure Computation",
                                            "Logic and Verification: Mathematical Logic and Theorem Proving, Formal Methods in Software Engineering, Program Analysis and Verification, Proofs and Programs"
                                        ]
                                    },
                                    {
                                        title: "E. QUANTUM COMPUTING",
                                        items: [
                                            "Mechanics",
                                            "Electricity, Magnetism and Optics",
                                            "Quantum Mechanics I",
                                            "Physics/Engineering foundations of Quantum Technologies",
                                            "Introduction to Quantum Computation",
                                            "Introduction to Quantum Communication & Cryptography",
                                            "Advanced Quantum Computing & Information"
                                        ]
                                    },
                                    {
                                        title: "F. COMPUTATIONAL BIOLOGY",
                                        items: [
                                            "Biology for Engineers",
                                            "Fundamentals of Bio Engineering I, II",
                                            "Theoretical and Mathematical Ecology",
                                            "Dynamical Systems in Biology",
                                            "Introduction to Molecular Simulation",
                                            "Current Trends in Drug Discovery",
                                            "Digital Epidemiology",
                                            "Neural Signal Processing",
                                            "Theoretical and Computational Neuroscience",
                                            "Algorithmic foundations of Big Data Biology"
                                        ]
                                    },
                                    {
                                        title: "G. SIGNAL PROCESSING",
                                        items: [
                                            "Detection and estimation theory",
                                            "Random processes",
                                            "Linear and non-linear optimization",
                                            "Matrix theory or Computational linear algebra",
                                            "Pattern recognition and neural networks",
                                            "Signal processing in practice",
                                            "Digital Signal Processing",
                                            "Digital Image Processing",
                                            "Neural Signal Processing"
                                        ]
                                    },
                                    {
                                        title: "H. MATHEMATICAL FINANCE",
                                        items: [
                                            "Probability Theory",
                                            "Stochastic Finance",
                                            "Random Processes",
                                            "Detection and Estimation",
                                            "Data Analysis",
                                            "Financial Instruments and Risk Management",
                                            "Statistics",
                                            "Time Series Analysis",
                                            "Numerical Solutions to Differential Equations"
                                        ]
                                    }
                                ].map((track, index) => (
                                    <div key={index} style={{ marginBottom: '0.5rem', border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden' }}>
                                        <button
                                            onClick={() => setOpenTrack(openTrack === track.title ? null : track.title)}
                                            style={{
                                                width: '100%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                padding: '1.25rem',
                                                background: '#f8fafc',
                                                border: 'none',
                                                cursor: 'pointer',
                                                textAlign: 'left'
                                            }}
                                        >
                                            <span style={{ fontWeight: '700', color: '#0f172a', fontSize: '1rem', flex: 1 }}>{track.title}</span>
                                            <span style={{
                                                fontSize: '1.5rem',
                                                color: '#3b82f6',
                                                lineHeight: 1,
                                                marginLeft: '1rem',
                                                transform: openTrack === track.title ? 'rotate(45deg)' : 'rotate(0deg)',
                                                transition: 'transform 0.3s ease'
                                            }}>+</span>
                                        </button>
                                        {openTrack === track.title && (
                                            <div style={{ padding: '1.5rem', borderTop: '1px solid #e2e8f0', background: 'white' }}>
                                                <ul style={{ paddingLeft: '1.25rem', margin: 0 }}>
                                                    {track.items.map((item, idx) => (
                                                        <li key={idx} style={{ color: '#475569', marginBottom: '0.5rem', lineHeight: '1.6', fontSize: '0.95rem' }}>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Pathways to Master's Degree - New Tabbed UI */}
                        <div className={styles.overviewSection} style={{ marginTop: '4rem' }}>
                            <h2 className={styles.sectionHeading}>Pathways to Master's Degree</h2>
                            <p className={styles.overviewText} style={{ marginBottom: '2rem' }}>
                                B.Tech in Mathematics and Computing offers two distinct pathways for students to pursue a Master's degree.
                            </p>

                            {/* Pathway Tabs */}
                            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                                <button
                                    onClick={() => setActiveMasterPath('mnc')}
                                    style={{
                                        flex: '1',
                                        padding: '1rem 1.5rem',
                                        background: activeMasterPath === 'mnc' ? '#2563eb' : '#f1f5f9',
                                        color: activeMasterPath === 'mnc' ? 'white' : '#64748b',
                                        border: 'none',
                                        borderRadius: '8px',
                                        fontWeight: '700',
                                        cursor: 'pointer',
                                        boxShadow: activeMasterPath === 'mnc' ? '0 10px 15px -3px rgba(37, 99, 235, 0.2)' : 'none',
                                        transition: 'all 0.2s ease',
                                        fontSize: '1rem'
                                    }}
                                >
                                    Option A (after 4 years) : M.Tech in MnC
                                </button>
                                <button
                                    onClick={() => setActiveMasterPath('general')}
                                    style={{
                                        flex: '1',
                                        padding: '1rem 1.5rem',
                                        background: activeMasterPath === 'general' ? '#0f172a' : '#f1f5f9',
                                        color: activeMasterPath === 'general' ? 'white' : '#64748b',
                                        border: 'none',
                                        borderRadius: '8px',
                                        fontWeight: '700',
                                        cursor: 'pointer',
                                        boxShadow: activeMasterPath === 'general' ? '0 10px 15px -3px rgba(15, 23, 42, 0.2)' : 'none',
                                        transition: 'all 0.2s ease',
                                        fontSize: '1rem'
                                    }}
                                >
                                    Option B (after 3 years) : Early Exit to M.Tech (General)
                                </button>
                            </div>

                            {/* Option A: 5th Year M.Tech (MnC) Content */}
                            {activeMasterPath === 'mnc' && (
                                <div style={{ animation: 'fadeIn 0.3s ease-out' }}>
                                    <div style={{ background: '#eff6ff', border: '1px solid #dbeafe', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem' }}>
                                        <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1e40af', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <span style={{ fontSize: '1.25rem' }}>✨</span> Exclusive to Math & Computing
                                        </h3>
                                        <p style={{ margin: 0, color: '#1e3a8a', fontSize: '0.95rem' }}>
                                            Students have the option to continue for their 5th year to obtain an M.Tech degree specifically in Mathematics and Computing.
                                        </p>
                                    </div>

                                    <div className={styles.mtechGrid} style={{ gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                        <div className={styles.mtechCard}>
                                            <div className={styles.mtechCardAccent} style={{ backgroundColor: '#2563eb' }} />
                                            <div className={styles.mtechCardTitle}>
                                                <div className={styles.mtechIcon} style={{ background: '#dbeafe', color: '#2563eb' }}>✓</div>
                                                Eligibility
                                            </div>
                                            <div style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                                                To be eligible to exercise this option, students must:
                                            </div>
                                            <ul className={styles.mtechList}>
                                                <li className={styles.mtechItem}>
                                                    <div className={styles.mtechItemIcon} style={{ fontSize: '1.5rem', lineHeight: '1rem', color: '#000000' }}>•</div>
                                                    <span>Have completed all the requirements of the B.Tech Mathematics and Computing degree at the end of their 8th semester.</span>
                                                </li>
                                                <li className={styles.mtechItem}>
                                                    <div className={styles.mtechItemIcon} style={{ fontSize: '1.5rem', lineHeight: '1rem', color: '#000000' }}>•</div>
                                                    <span>Have a CGPA of <strong>7.0 or more</strong> at the end of their 8th semester.</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className={styles.mtechCard}>
                                            <div className={styles.mtechCardAccent} style={{ backgroundColor: '#f59e0b' }} />
                                            <div className={styles.mtechCardTitle}>
                                                <div className={styles.mtechIcon} style={{ background: '#fef3c7', color: '#d97706' }}>📋</div>
                                                Requirements (32 Credits)
                                            </div>
                                            <div style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                                                To obtain the M.Tech degree, students need to complete 32 credits in the 9th and 10th semesters:
                                            </div>
                                            <ul className={styles.mtechList}>
                                                <li className={styles.mtechItem}>
                                                    <div className={styles.mtechItemIcon} style={{ fontSize: '1.5rem', lineHeight: '1rem', color: '#000000' }}>•</div>
                                                    <span><strong>13 Course Credits:</strong> Completion of courses in the 9th and 10th semesters.</span>
                                                </li>
                                                <li className={styles.mtechItem}>
                                                    <div className={styles.mtechItemIcon} style={{ fontSize: '1.5rem', lineHeight: '1rem', color: '#000000' }}>•</div>
                                                    <span><strong>19 Project Credits:</strong> A research project during the 9th and 10th semesters.</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Soft Core Rule Box */}
                                    <div className={styles.mtechRequirementBox} style={{ marginTop: '2rem', background: '#fff', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                                        <div style={{ flex: 1 }}>
                                            <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#0f172a', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <div style={{ width: '24px', height: '24px', background: '#f1f5f9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem' }}>ℹ️</div>
                                                Important Soft Core Requirement
                                            </h4>
                                            <p style={{ margin: 0, color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                                Students are required to have completed a minimum of <strong>10 credits</strong> of courses from the Mathematics Soft Core Pool and <strong>10 credits</strong> of courses from the Computing Soft Core Pool, <span style={{ textDecoration: 'underline' }}>across the 10 semesters</span> of the B.Tech/M.Tech programme.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Option B: General M.Tech Content */}
                            {activeMasterPath === 'general' && (
                                <div style={{ animation: 'fadeIn 0.3s ease-out' }}>
                                    <div className={styles.mtechGrid} style={{ gridTemplateColumns: '1fr', gap: '2rem' }}>
                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                                            {/* Eligibility Card */}
                                            <div className={styles.mtechCard}>
                                                <div className={styles.mtechCardAccent} style={{ backgroundColor: '#0f172a' }} />
                                                <div className={styles.mtechCardTitle}>
                                                    <div className={styles.mtechIcon} style={{ background: '#f1f5f9', color: '#0f172a' }}>✓</div>
                                                    Eligibility
                                                </div>
                                                <ul className={styles.mtechList}>
                                                    <li className={styles.mtechItem}>
                                                        <div className={styles.mtechItemIcon} style={{ fontSize: '1.5rem', lineHeight: '1rem', color: '#000000' }}>•</div>
                                                        <span style={{ fontWeight: '500' }}>Students must be in the third year of the B.Tech programme.</span>
                                                    </li>
                                                    <li className={styles.mtechItem}>
                                                        <div className={styles.mtechItemIcon} style={{ fontSize: '1.5rem', lineHeight: '1rem', color: '#000000' }}>•</div>
                                                        <span style={{ fontWeight: '500' }}>Students must have completed at least 80% of the prescribed credits (i.e., 102 credits) with a minimum CGPA of 8.0.</span>
                                                    </li>
                                                    <li className={styles.mtechItem}>
                                                        <div className={styles.mtechItemIcon} style={{ fontSize: '1.5rem', lineHeight: '1rem', color: '#000000' }}>•</div>
                                                        <span style={{ fontWeight: '500' }}>Students must have completed the minimum pool-wise credit requirements prescribed for the programme.</span>
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
                                                        <div className={styles.mtechItemIcon} style={{ fontSize: '1.5rem', lineHeight: '1rem', color: '#000000' }}>•</div>
                                                        <span style={{ fontWeight: '500' }}>Applicants must satisfy the programme-specific eligibility conditions as notified by the concerned program.</span>
                                                    </li>
                                                    <li className={styles.mtechItem}>
                                                        <div className={styles.mtechItemIcon} style={{ fontSize: '1.5rem', lineHeight: '1rem', color: '#000000' }}>•</div>
                                                        <span style={{ fontWeight: '500' }}>Selection shall be based on interviews conducted by the respective program.</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Programme Structure */}
                                        <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1e293b', marginTop: '1rem', marginBottom: '0.5rem' }}>
                                            Programme Structure
                                        </h3>

                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                                            <div className={styles.mtechCard}>
                                                <div className={styles.mtechCardAccent} style={{ backgroundColor: '#10b981' }} />
                                                <div className={styles.mtechCardTitle}>
                                                    <div className={styles.mtechIcon} style={{ background: '#ecfdf5', color: '#10b981' }}>🎓</div>
                                                    M.Tech
                                                </div>
                                                <ul className={styles.mtechList}>
                                                    <li className={styles.mtechItem}>
                                                        <div className={styles.mtechItemIcon} style={{ fontSize: '1.5rem', lineHeight: '1rem', color: '#000000' }}>•</div>
                                                        <span style={{ fontWeight: '500' }}>Admission is from the seventh semester onwards.</span>
                                                    </li>
                                                    <li className={styles.mtechItem}>
                                                        <div className={styles.mtechItemIcon} style={{ fontSize: '1.5rem', lineHeight: '1rem', color: '#000000' }}>•</div>
                                                        <span style={{ fontWeight: '500' }}>Students are required to complete 64 additional credits and fulfil all M.Tech requirements.</span>
                                                    </li>
                                                    <li className={styles.mtechItem}>
                                                        <div className={styles.mtechItemIcon} style={{ fontSize: '1.5rem', lineHeight: '1rem', color: '#000000' }}>•</div>
                                                        <span style={{ fontWeight: '500' }}>On successful completion, separate B.Tech and M.Tech degrees shall be awarded.</span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className={styles.mtechCard}>
                                                <div className={styles.mtechCardAccent} style={{ backgroundColor: '#ec4899' }} />
                                                <div className={styles.mtechCardTitle}>
                                                    <div className={styles.mtechIcon} style={{ background: '#fce7f3', color: '#ec4899' }}>🔬</div>
                                                    M.Tech (Research)
                                                </div>
                                                <ul className={styles.mtechList}>
                                                    <li className={styles.mtechItem}>
                                                        <div className={styles.mtechItemIcon} style={{ fontSize: '1.5rem', lineHeight: '1rem', color: '#000000' }}>•</div>
                                                        <span style={{ fontWeight: '500' }}>Students are required to complete 12 course credits beyond the B.Tech requirements, along with a research thesis.</span>
                                                    </li>
                                                    <li className={styles.mtechItem}>
                                                        <div className={styles.mtechItemIcon} style={{ fontSize: '1.5rem', lineHeight: '1rem', color: '#000000' }}>•</div>
                                                        <span style={{ fontWeight: '500' }}>On successful completion, separate B.Tech and M.Tech (Research) degrees shall be awarded.</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className={styles.note} style={{ marginTop: '1rem' }}>
                                            <strong>Note:</strong> For detailed rules, eligibility conditions, and procedural requirements, students are advised to refer to the <Link href="/handbook" style={{ color: '#2563eb', textDecoration: 'underline' }}>Student Information Handbook</Link>.
                                        </div>
                                    </div>
                                </div>
                            )}
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
                                                    <div className={styles.bookText}>
                                                        {(() => {
                                                            const parts = book.split(/\((https?:\/\/[^\s]+)\)/g);
                                                            return parts.map((part: string, i: number) => {
                                                                if (part.match(/^https?:\/\/[^\s]+$/)) {
                                                                    return (
                                                                        <span key={i}>
                                                                            (<a
                                                                                href={part}
                                                                                target="_blank"
                                                                                rel="noopener noreferrer"
                                                                                style={{ color: '#2563eb', textDecoration: 'underline' }}
                                                                            >
                                                                                link
                                                                            </a>)
                                                                        </span>
                                                                    );
                                                                } else if (i > 0 && parts[i - 1].match(/^https?:\/\/[^\s]+$/)) {
                                                                    // handling the closing parenthesis which was consumed by split if we aren't careful, 
                                                                    // but split with capturing group returns [text, group, text...]. 
                                                                    // The regex `/\((https?:\/\/[^\s]+)\)/` matches the WHOLE `(url)`.
                                                                    // So split will give: "Book Title " -> "https://..." -> "".
                                                                    // My regex in replacement was specific. 
                                                                    // Let's refine the logic to be robust.
                                                                    return <span key={i}>{part}</span>;
                                                                }
                                                                return <span key={i}>{part}</span>;
                                                            });
                                                        })()}
                                                    </div>
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

export default MathematicsAndComputing;
