export interface FellowshipWinner {
    year: string;
    names: string[];
    images?: string[];
}

export interface WinnerBatch {
    batchName: string;
    names: string[];
}

export interface WinnersGrouped {
    awardYear: string;
    batches: WinnerBatch[];
}

export interface FellowshipDetail {
    slug: string;
    name: string;
    donor: string;
    programme: string;
    status: string;
    category: string;
    icon: string;
    accent: string;
    bannerGradient: string;
    description?: string;
    about?: string;
    eligibility?: string[];
    entitlements?: string[];
    winners?: FellowshipWinner[];
    winnersGrouped?: WinnersGrouped[];
    hasDetailPage?: boolean;
    externalLink?: string;
    extraInfo?: { title: string; content: string; image?: string }[];
}


export const fellowshipsData: FellowshipDetail[] = [
    {
        slug: "squarepoint-foundation-fellowships",
        name: "Square Point Foundation Fellowships",
        donor: "Square Point Foundation",
        programme: "UG BTech Program",
        status: "Ongoing",
        category: "BTech",
        icon: "◈",
        accent: "#d97706",
        bannerGradient: "linear-gradient(135deg, #d97706 0%, #b45309 100%)",
        description: "Supporting STEM education and innovative research.",
        about: "Square Point Foundation is dedicated to making a difference by supporting STEM education, backing innovative research, and partnering with charities doing meaningful work. They also step in during global crises, contributing to relief efforts wherever help is most needed. Their mission is rooted in creating lasting, positive impact in communities around the world.",
        eligibility: [
            "A selection committee will nominate three B Tech Math & Computing students based on the JEE (Advanced) merit list of students who have joined the program."
        ],
        entitlements: [
            "Fellowship amount of Rs 7000 per month for a duration of the course.",
            "Tuition fee waiver."
        ],
        winners: [
            {
                year: "2024-2025",
                names: [
                    "Chitikela Veera Sai Charan Teja",
                    "Parikshitraj V K",
                    "Aditey Nandan"
                ]
            }
        ],
        hasDetailPage: true
    },
    {
        slug: "synchronoss-technologies-btech-fellowships",
        name: "Synchronoss Technologies BTech Fellowships",
        donor: "Synchronoss Technologies",
        programme: "UG BTech Program",
        status: "Ongoing",
        category: "BTech",
        icon: "◆",
        accent: "#2563eb",
        bannerGradient: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
        description: "Supporting excellence in technology and innovation.",
        about: "Synchronoss Technologies (India) Ltd under their corporate social responsibility initiative has come forward to provide financial assistance to meritorius students under the BTech and MSc Programs at IISc. Along with this, Synchronoss Technologies has provided travel grants to encourage students to attend and present their work at national and international conferences along with support for Persons with Disability. This initiative aims to provide equitable opportunities for women or underrepresented/ underprivileged students, empowering them to access world-class education and contribute to scientific advancements in India.",
        eligibility: [
            "2 students pursuing an MSc in Chemical Sciences at IISc, selected on the basis of merit and financial necessity. Recipients of this Fellowship will be recommended by the Program Curriculum Committee of the program.",
            "1 student pursuing a BTech in Mathematics and Computing at IISc, selected on the basis of merit and financial necessity. Recipients of this Fellowship will be recommended by the Fellowships Committee of the BTech Mathematics & Computing program.",
            "Travel grants to 2 students, as selected by a committee appointed by Chair, ODAA.",
            "One-time financial support for special equipment required for the daily activities of Persons with Disability (students or staff) members in IISc. An open call for applications will be made, and the selection of recipients will be done by an internal committee including medical professionals."
        ],
        entitlements: [
            "BTech and Msc fellowships offer a tuition fee waiver and a monthly fellowship of 7000.",
            "Travel Grants will be disbursed as decided by the selection committee appointed by Chair, ODAA.",
            "Financial support for special equipment will also be disbursed based on need as decided by the selection committee."
        ],
        winners: [
            {
                year: "2025-2026",
                names: ["Yada Bharani Shankar (BTech)"]
            },
            {
                year: "2024-2025",
                names: ["Sankarmahadev M (MSc Chemical Sciences)"]
            }
        ],
        hasDetailPage: true
    },
    {
        slug: "ittiam-btech-fellowships",
        name: "ITTIAM BTech Fellowships",
        donor: "ITTIAM Systems",
        programme: "UG BTech Program",
        status: "Ongoing",
        category: "BTech",
        icon: "❖",
        accent: "#059669",
        bannerGradient: "linear-gradient(135deg, #059669 0%, #047857 100%)",
        description: "Fostering talent in signal processing and media technologies.",
        about: "ITTIAM Systems seeks to support students pursuing BTech in Mathematics and Computing at IISc and establish an Equitable AI lab at CSA. The lab will focus on foundational aspects of fairness, scalability, and explainability in AI, and seek to uplift research capabilities in India.\n\nIttiam has earlier collaborated on two significant projects at IISc: the construction of a state-of-the-art auditorium in CSA and the Teachers’ Training program at the Talent Development Centre at IISc’s Challakere campus.",
        eligibility: [
            "The selection process for the ITTIAM BTech Fellowships is based on a thoughtful combination of merit and need. Eligibility considers academic performance (like minimum CGPA of 8.0 for 2022-2023 batches or JEE Advanced ranks under 2000 for the 2024 batch) and specific demographic criteria. The fellowship is open to female students and male students pursuing a BTech in Mathematics & Computing at IISc, ensuring diverse and deserving candidates benefit from this opportunity."
        ],
        entitlements: [
            "This fellowship offers multiple forms of financial assistance, determined by the committee based on the student’s needs. Support may include a partial or full tuition fee waiver and/or a monthly scholarship of ₹7,000. Adjustments are made to account for any other financial assistance the student receives, ensuring tailored support for each individual."
        ],
        winnersGrouped: [
            {
                awardYear: "Winners in 2025",
                batches: [
                    {
                        batchName: "Batch of 2025",
                        names: ["Badam Dheeraj", "Nanda Kishore C N", "Gunturu Rohit Pawan", "Ankita S"]
                    },
                    {
                        batchName: "Batch of 2024",
                        names: ["Rishe Raghavendira Gnanasekaran", "Abinav Thangaraju Sethupathy", "P Nihal Srivatsav", "Murali Krishna Dirisala"]
                    },
                    {
                        batchName: "Batch of 2023",
                        names: ["Keval Vijaybhai Pithadiya", "Harisrrinivas V", "Himesh Kumar Anant", "Om Prakash Choudhary", "Aditya Arsh", "Sehaj Ganjoo", "Ayush Priyadarshi", "Debanjan Saha"]
                    },
                    {
                        batchName: "Batch of 2022",
                        names: ["Ishaq Hamza", "Sannidhi V Hebbar", "Jajapuram Nagasai", "Anishka Vaitla", "Ramanan T", "Shankaradithyaa Venkateswaran", "Anushka Dassi", "Mehul Shrivastava"]
                    }
                ]
            },
            {
                awardYear: "Winners in 2024",
                batches: [
                    {
                        batchName: "Batch of 2024",
                        names: ["Sanjay C", "Pasam Abhiram Reddy", "Kaligatla Devi Prasad", "Bheesetty Hema Swarup", "Oruganti Rohan", "Garrepally Akshaya"]
                    },
                    {
                        batchName: "Batch of 2023",
                        names: ["Keval Vijaybhai Pithadiya", "Sehaj Ganjoo", "Aditya Arsh", "Harisrrinivas V", "Himesh Kumar Anant", "Debanjan Saha"]
                    },
                    {
                        batchName: "Batch of 2022",
                        names: ["Ishaq Hamza", "Sannidhi V Hebbar", "Nagasai Jajapuram", "Ramanan T"]
                    }
                ]
            }
        ],
        hasDetailPage: true
    },
    {
        slug: "kotak-women-btech-scholarship",
        name: "Kotak Women BTech Scholarship",
        donor: "Kotak Mahindra Bank",
        programme: "UG BTech Program",
        status: "Ongoing",
        category: "BTech (Women)",
        icon: "✿",
        accent: "#db2777",
        bannerGradient: "linear-gradient(135deg, #db2777 0%, #be185d 100%)",
        description: "Empowering women in engineering and technology."
    },
    {
        slug: "jay-pullur-memorial-fellowship",
        name: "Jay Pullur Memorial Fellowship for BTech Students",
        donor: "Jay Pullur Memorial",
        programme: "UG BTech Program",
        status: "Ongoing",
        category: "BTech",
        icon: "★",
        accent: "#7c3aed",
        bannerGradient: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",
        description: "In memory of Jay Pullur to support bright minds.",
        about: "The Jay Pullur Memorial Fellowship for BTech students in Mathematics & Computing has been established by Mrs Nirmala Jay Pullur (IISc Alumna, ME (Electrical Communication Engineering) – 1996) in fond memory of her husband Mr Jay Pullur (Founder of Pramati Technologies).\n\nThis new BTech program in Mathematics and Computing at IISc seeks to enter a niche area with the aim of producing future leaders who will be at the forefront of research, development, and innovation in futuristic disciplines and next generation technologies that require deep use of mathematics, computer science, and data science\n\nThe core of the program spread over four semesters includes six courses each in Mathematics and Computing apart from courses in the sciences, humanities, and other engineering disciplines. Students can then choose softcore credits from a large pool of courses in Mathematics and Computing areas apart from many exciting electives from across the institute. To help students navigate through the large number of available courses and guide them towards specialization, study tracks have been designed in Mathematics, AI and ML, Computational Science, Theoretical Computer Science, Quantum Computing, Signal Processing, Computational Biology and Mathematical Finance. Students can opt for Research/Industry projects in their fourth year. Students can obtain a MTech degree by taking an additional year of course and project credits.",
        eligibility: [
            "The top three rankers of the JEE Advanced exam who have enrolled in the BTech (Mathematics and Computing) undergraduate program."
        ],
        entitlements: [
            "Reimbursement of Tuition Fees and other fees for the entire program (Rs 2,05,200 Per Annum for 4 years): Rs 8,20,800/-",
            "Monthly Stipend for 48 Months: Rs 7000/-"
        ],
        winners: [
            {
                year: "2025-26",
                names: ["Sai Manogna Guthikonda", "Shreyas Ramakrishnan", "Dhakshith Raam Senthilvel", "Thrayambhakesh H"],
                images: ["/fellowships/image.png", "/fellowships/jay-pullur-group.jpg"]
            },
            {
                year: "2024-25",
                names: ["Perumalla Rithvik", "Sricheran Katta"]
            },
            {
                year: "2023-24",
                names: ["P Dhruv Shivkant", "Swarnava Chakraborty"]
            },
            {
                year: "2022-23",
                names: ["RK Shishir (All India Rank of 1)"]
            }
        ],
        hasDetailPage: true,
        extraInfo: [
            {
                title: "Mr. Jay Pullur",
                image: "/fellowships/jay-pullur-portrait.jpg",
                content: "Mr. Jay Pullur had been one of the pioneers of the Indian IT industry. Mr. Pullur and his brother Vijay co-founded Pramati Technologies in 1998 and the company grew to challenge global players in the niche area of Java Application Servers. Pramati Technologies had been the first IT product oriented company in India and had been able to do so under the leadership of Mr. Jay Pullur.\n\nMr. Jay Pullur, who had an M.Tech in Computer Science from IIT Kanpur, took Pramati from being a David among Goliaths to a company with a global reputation that counted, among its many customers, the likes of PayPal, Morgan Stanley and ICICI Bank. In 2013, they acquired WaveMaker from VMWare to focus on web and mobile businesses — one of the earliest instances of an Indian tech company acquiring a product from a global giant.\n\nMr. Jay Pullur and Pramati’s success is a significant chapter in the larger story of the Indian IT Revolution. He was featured among the Icons of Indian IT. Mr. Jay Pullur focused on building ‘Individual Excellence’ and this fellowship has been instituted to promote this excellence in fond memory of him by his wife, Mrs. Nirmala Jay Pullur. He passed away at the age of 59."
            }
        ]
    },
    {
        slug: "dibakar-das-research-endowment",
        name: "Dibakar Das Research Endowment Award and Fellowship",
        donor: "Deepak & Arundhati Das",
        programme: "UG BTech Program",
        status: "Ongoing",
        category: "BTech/Research",
        icon: "⚡",
        accent: "#dc2626",
        bannerGradient: "linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)",
        description: "Encouraging research excellence in engineering in memory of Dibakar Das.",
        about: "Dibakar Das Research Endowment Award in Electric Power has been instituted in 2022 in the Division of Electrical, Electronics, and Computer Sciences (EECS) by Deepak Das and his wife, Arundhati Das in the memory of their son Dibakar Das who was a Ph.D. student at IISc, through an endowment to IISc. Through this endowment, two initiatives have been created: a student award and a fellowship, both aimed at supporting and recognizing excellence in research.",
        eligibility: [
            "Award is open to all Undergraduate, Integrated PhD and PhD students, as well as Research Project Assistants and Postdoctoral Fellows of the EECS Division at IISc. Awarded for their excellence in academic research in the area of Electric power (Power System, Power Electronics, High voltage).",
            "The fellowship will be awarded, once in four years, to an outstanding student pursuing undergraduate BTech (Mathematics and Computing) programme at IISc, based on financial necessity and academic performance."
        ],
        entitlements: [
            "This annual award consists of a cash prize of Rs 1,00,000/- and a citation to the awardee. The award ceremony will be held on February 6 every year, on the Birthday of Dibakar Das.",
            "The fellowship awardee will be given a stipend amount of Rs 7000 per month and tuition fee reimbursement of Rs 60,000 per annum."
        ],
        winners: [
            {
                year: "2025",
                names: ["Himanshu Bhusan Sandhibigraha"],
                images: ["/fellowships/download-1.jpg", "/fellowships/download.jpg"]
            },
            {
                year: "2024",
                names: ["Deepak Kaushik (for his work on the development of solid-state device based high voltage and high current pulsed power systems and tooling coils for electromagnetic manufacturing applications.)"]
            },
            {
                year: "2023",
                names: ["Ranashree Ram (Award)", "Keval Vijaybhai Pithadiya (Fellowship)"]
            },
            {
                year: "2022",
                names: ["Utsab Kundu"]
            }
        ],
        hasDetailPage: true,
        extraInfo: [
            {
                title: "Dibakar Das",
                image: "/fellowships/dibakar.jpg",
                content: "Dibakar Das graduated in Electrical Engineering from the National Institute of Technology, Durgapur, in 2014, with the honor of being awarded the Gold Medal. He joined the Indian Institute of Science, Bangalore, to pursue M.Sc (Engg.) in the field of the power system. Dibakar received POSOCO Power System Award in the master’s Category for his excellent research contribution to microgrid operation and control. Later, he continued his Ph.D. in the same institute in power electronics with the Prime Minister Research Fellowship distinction. He worked on modulation and control of a dual-active-bridge-based converter for electric vehicle charging applications. One of his research papers was recognized as the second-best paper in IEEE Transactions on Transportation Electrification for 2019-2020. Dibakar was a bright student with an excellent academic career. However, what set him apart was his passionate participation in various discussions and teaching assistantships to help his friends and colleagues. Apart from the academics, Dibakar was also a deft violinist and a keen western classical music enthusiast."
            }
        ]
    },
    {
        slug: "kunal-roy-and-neelam-roy-btech-fellowships",
        name: "Kunal Roy and Neelam Roy BTech Fellowships",
        donor: "Kunal & Neelam Roy",
        programme: "Undergraduate Program",
        status: "Ongoing",
        category: "Alumni",
        icon: "♦",
        accent: "#0891b2",
        bannerGradient: "linear-gradient(135deg, #0891b2 0%, #0e7490 100%)",
        description: "Supporting undergraduate students in their academic journey.",
        about: "As a recipient of the TISCO scholarship during his Bachelor of Engineering program in the Department of Metallurgy, Kunal Kanti Roy always held a heartfelt desire to give back to IISc students in a similar way. This aspiration led him and his wife, Neelam Roy, to establish the Kunal Roy and Neelam Roy Fellowships in 2023 through an endowment to IISc.",
        eligibility: [
            "Awarded to four BTech students (one each in all years) in the Undergraduate programme.",
            "A selection committee will nominate the awardees based on the JEE (Advanced)-2024 merit list of students who have joined the program."
        ],
        entitlements: [
            "Monthly Stipend of Rs 7000/-"
        ],
        winners: [
            {
                year: "2025-2026",
                names: ["Sai Sumedh Manepalli"],
                images: ["/fellowships/kunal-neelam-roy-scaled.jpeg"]
            },
            {
                year: "2024-2025",
                names: ["Krishna Gupta"]
            }
        ],
        hasDetailPage: true,
        extraInfo: [
            {
                title: "Mr Kunal Roy",
                image: "/fellowships/Kunal-Roy.jpg",
                content: "Fifty years ago, Kunal was a B.E student (1969 – 1972) at IISc Bangalore. He graduated in 1972 in Metallurgy. At that time, the IISc Director was S. Dhawan. He studied under professors Dr KP Abraham, Dr Mallya, Dr Vasu to name a few distinguished faculty members. During 1969-72, he was a recipient of TISCO (Tata Iron and Steel Co.) scholarship for 3 years.\n\nHe received many state and national scholarships during his lifetime through Grade 8th, High School, Intermediate Science, and B.Sc from Kanpur. He was also awarded TISCO Scholarship at IISc, and a Graduate Assistantship at Stevens Institute of Technology in the USA. These scholarship awards gave pride, confidence, and determination to advance in his career. Therefore, it remained his heartfelt longing to create a lasting endowment in awarding fellowships to the IISc students in their formative stage.\n\nIn 1973, he came to the USA and did his M.S. in Materials Science/Metallurgy from Stevens Institute of Technology. He worked in many esteemed semiconductor and telecommunication industries. He worked in many technologies and product lines, for example, CMOS, Bipolar, digital cellular, DirecTV and satellite communication for voice, video, and data. At Philips-Signetics and IBM, he held various senior positions in engineering in the area of process and product development. Thereafter, he went to engineering management. He was a Manager at Raytheon, Director at Raychem, and Asst. Vice President at Hughes in the field of operations.\n\nDuring his career, Kunal travelled extensively to the Asia Pacific Rim, Japan, Taiwan, South Korea, Philippines; Europe, and South America in support of operations and customers. He retired from Hughes several years ago."
            },
            {
                title: "Ms Neelam Roy",
                image: "/fellowships/Neelam-Roy-e1693905914831.jpg",
                content: "Neelam Roy did her M.Sc in Biology from Lucknow University. She came to the USA in 1974 and worked in various companies but found most satisfaction in teaching children with autism in schools. She spent most of her life raising her two daughters. She has been very active with various charity organizations, supporting and volunteering in many institutions.\n\nKunal Roy and Neelam Roy, both were born and raised in Kanpur, India. Their parents were successful businessmen/industrialists in Kanpur. Kunal and Neelam have been married for nearly 50 years. They lived in many cities in the USA but mostly in Silicon Valley and San Diego California. San Diego has been their home for the last 30 years. They are blessed with two daughters, who also live in San Diego. They enjoy traveling worldwide. Both are fond of reading, gardening, volunteering, and engaging in various community and charity activities."
            }
        ]
    },
    {
        slug: "kodandapani-family-fellowship",
        name: "Dr Kolar and Mrs Girija Kodandapani Family Fellowship",
        donor: "Kolar & Girija Kodandapani",
        programme: "Undergraduate Program",
        status: "Ongoing",
        category: "Alumni",
        icon: "⚜️",
        accent: "#7c3aed",
        bannerGradient: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",
        description: "Supporting undergraduate students based on financial necessity and academic performance.",
        about: "The Dr Kolar and Mrs Girija Kodandapani Family Fellowship has been established by IISc Alumnus Dr Kolar Kodandapani and his wife Girija Kodandapani to aid undergraduate students at the Institute.",
        eligibility: [
            "Awarded based on financial necessity and academic performance for students in the BTech Program"
        ],
        entitlements: [
            "Monthly Stipend of Rs 7000"
        ],
        winners: [
            {
                year: "2025-2026",
                names: ["D Abhijith"],
                images: ["/fellowships/kodandapani-winner.jpeg", "/fellowships/group-image-kundpani.jpeg"]
            },
            { year: "2024-2025", names: ["Abinav Thangaraju Sethupathy"] },
            { year: "2023-2024", names: ["Aditya Arsh"] },
            { year: "2022-2023", names: ["Ishaq Hamza"] }
        ],
        hasDetailPage: true,
        extraInfo: [
            {
                title: "Dr Kolar and Mrs Girija Kodandapani",
                image: "/fellowships/kodandapani-and-wife.png",
                content: "Dr Kolar Kodandapani’s journey is a testament to the transformative power of resilience, education, and familial support. Growing up under the guidance of his single mother, who instilled in him the values of compassion and service, Dr Kodandapani learned the importance of helping others from a young age. With the aid of a government scholarship, he pursued his academic endeavors at the prestigious Indian Institute of Science.\n\nAs the first PhD in his family, Dr Kodandapani’s achievements were a source of immense pride. His academic pursuits at the Indian Institute of Science laid the foundation for a successful career in computer science. Armed with his degrees, he secured a rewarding job, marking the beginning of a journey marked by dedication and excellence.\n\nNow, Dr Kodandapani seeks to pay forward the opportunities he received. Motivated by his mother’s unwavering support and his own experiences, he is committed to giving back to his community and empowering others through education and mentorship. Dr. Kodandapani’s story serves as an inspiration to all, reminding us of the profound impact of perseverance, familial love, and the pursuit of knowledge."
            }
        ]
    },
    {
        slug: "sumana-memorial-ug-fellowship",
        name: "Ms Sumana Memorial Women UG Fellowship",
        donor: "Family of Ms Sumana",
        programme: "Undergraduate Program",
        status: "Ongoing",
        category: "Philanthropy",
        icon: "❀",
        accent: "#be123c",
        bannerGradient: "linear-gradient(135deg, #be123c 0%, #9f1239 100%)",
        description: "Encouraging women students to pursue careers in science and engineering.",
        about: "Ms Sumana Memorial UG Fellowship has been instituted in the fond memory of Ms Suman Swamy by her family to encourage more women students to pursue careers in science and engineering. This fellowship is specifically aimed at providing financial support to women students from economically-weaker sections of the society pursuing undergraduate courses at IISc.",
        eligibility: [
            "Open to women undergraduate students from the Economically Weaker Section, with selection guided by both academic merit and financial circumstances.",
            "Fellowship should be awarded to one student each from 4th Year BS Research & BTech Math & Computing each academic year.",
            "Every year, IISc shall nominate two students (one student each from 4th Year B S Research & B Tech Math & Computing) to whom this Fellowship shall be awarded."
        ],
        entitlements: [
            "Fellowship of Rs. 7000"
        ],
        winners: [
            {
                year: "2025",
                names: ["S Shruti (BS Research)", "Anumala Sravya (BTech)"],
                images: ["/fellowships/sumana-1-scaled.jpeg", "/fellowships/sumana-2-scaled.jpeg"]
            }
        ],
        hasDetailPage: true,
        extraInfo: [
            {
                title: "Sumana Swamy",
                image: "/fellowships/Suman-Swamy.jpg",
                content: "Sumana Swamy was a software engineer by profession. She was born in Mysore on July 14 1974, and attended the St Anne’s Public School, Millers Road in Bengaluru. She completed her Bachelor of Engineering (Instrumentation & Technology) at BIT, Bangalore. She completed software courses in Bengaluru and worked in the USA from 2000 to 2018. She passed away on September 22, 2020. Her friends and family remember her as a bold, helpful and kind-hearted person, who had a sharp intellect."
            }
        ]
    },
    {
        slug: "iisc-1975-be-eecs-batch-fellowships",
        name: "IISc 1975 BE EECS Batch Fellowships",
        donor: "IISc Class of 1975 BE EECS",
        programme: "Btech & UG Program",
        status: "Ongoing",
        category: "Alumni",
        icon: "🎓",
        accent: "#0f766e",
        bannerGradient: "linear-gradient(135deg, #0f766e 0%, #115e59 100%)",
        description: "Financial assistance to undergraduate students driven by gratitude and commitment to excellence.",
        about: "The 1972–75 BE batch from Electrical Engineering and Electrical Communication Engineering at IISc established an interest-bearing endowment to provide financial assistance to undergraduate students. The initiative was driven by a spirit of gratitude and a deep commitment to supporting the continued growth and excellence of their alma mater.\n\nA majority of the interest earned from the endowment will be directed towards supporting fellowships for BS Research and BTech Mathematics & Computing students. A substantial portion will be allocated to funding undergraduate student travel for presenting research at reputed international conferences. A small share will be reinvested into the corpus to ensure long-term sustainability. The remaining funds may be used to support international travel for UG students representing IISc at prestigious global science and technology competitions.",
        eligibility: [
            "Open to all women UG students and students from Economically and/or Socially Weaker Sections based on merit.",
            "Fellowship will be awarded to students from BSc Research and BTech programs in alternate academic years.",
            "Based on Highest rank in Entrance Exam/Highest TGPA in First-term or semester."
        ],
        entitlements: [
            "Monthly Stipend of Rs 7000, for the entire course period of 4 years."
        ],
        hasDetailPage: true
    },
    {
        slug: "axis-bank-btech-fellowships",
        name: "Axis Bank BTech Fellowships",
        donor: "Axis Bank",
        programme: "UG BTech Program",
        status: "Ongoing",
        category: "BTech",
        icon: "🏦",
        accent: "#9333ea",
        bannerGradient: "linear-gradient(135deg, #9333ea 0%, #7e22ce 100%)",
        description: "Corporate partnership for academic excellence.",
        externalLink: "https://abcmc.iisc.ac.in/activities/"
    },
    {
        slug: "subodh-arati-chakraborty-endowed-fellowship",
        name: "Subodh Arati Chakraborty Endowed Fellowship",
        donor: "Amit Kumar Chakraborty",
        programme: "UG BTech Program",
        status: "Ongoing",
        category: "Philanthropy",
        icon: "🌟",
        accent: "#c026d3",
        bannerGradient: "linear-gradient(135deg, #c026d3 0%, #a21caf 100%)",
        description: "Supporting underprivileged students in memory of Subodh and Arati Chakraborty.",
        about: "Belonging to a family, engaged in setting up some academic institutes and stood for the cause of underprivileged students, Amit Kumar Chakraborty always cherished an ardent desire to uplift the disadvantaged IISc students in an effective way. This intention steered him and his family to institute the Subodh Arati Chakraborty (Mangalarati) Endowed Fellowship for B.Tech. (Mathematics & Computing) students belonging to EWS category to honour the memory of his parents, Late Subodh Kumar Chakraborty (father) and Late Arati Chakraborty (mother) through an endowment to IISc.",
        eligibility: [
            "Top JEE ranker from socially disadvantaged category (who is not eligible for any other higher fellowships) who joins B.Tech. Math & Computing program of llSc.",
            "A selection committee will nominate the awardee based on the JEE (Advanced) merit list of students who have joined the program."
        ],
        entitlements: [
            "Fellowship amount of Rs 5000 per month for a duration of 48 months."
        ],
        winners: [
            {
                year: "2025-2029",
                names: ["Chinthan J Meghavath"]
            }
        ],
        hasDetailPage: true,
        extraInfo: [
            {
                title: "Amit Kumar Chakraborty",
                content: "Amit was a B.E student (1981 – 1985) at Jadavpur University. He graduated in 1985 in Mechanical Engineering. He studied under professors Dr. Rajat Chakraborty, Dr. Madhusudan Bhattacharya, Dr. BN Chandra, Dr. KN Chakraborty to name a few distinguished faculty members.\n\nHe received national scholarships during his academic career through Class 8, Secondary and Higher Secondary Schools and B.E from Jadavpur, Kolkata. He secured 25th state rank in the secondary examination, West Bengal. These scholarship awards accorded assurance and determination to move forward in his career. Hence, it persisted his earnest yearning to initiate a lifetime sponsorship in endowing fellowships to the underprivileged IISc students in their formative stage.\n\nWith a thriving career in the Information Technology services industry spanning about three decades, Amit has a unique track record of working across multiple roles and geographies including four and half years in UK, about a year in Australia and about two years in Denmark. From heading delivery, quality or P&L Account management and Practice Lead responsibilities for Europe, MEA & APAC clients, he had a 360-degree view of the industry. He has been Senior Project Manager, Delivery & Transformation Leader in BHEL, LTITL and IBM for large Innovation & Technology programs of Airlines, Freight & Logistics & Consumer Products, Manufacturing, Supply Chain, Energy and Higher Education & Research Industries. Amit, as SAP Program Manager, was instrumental in successfully implementing Wave 1 and Wave 2 of the SAP S/4 HANA system in IISc during 2018-20 and systematically conducted several training sessions on various SAP functional modules for the professors and administrative staff of Indian Institute of Science. For this challenging SAP implementation process, he worked under direct guidance of Prof. Anurag Kumar (Director), Prof. Jayant Modak (Dy. Director, A&F), Prof. Y Narahari (Dean, EECS Division) and in close association with Prof. KVS Hari (Chair, ECE Department), Prof. Joy Kuri (Chair, ESE Department), Prof. Anil Kumar (Dean, UG Program), all other Divisional Deans & Departmental Chairs and Finance Controller. This has created a strong bonding between IISc and Amit. He is also active on academic forums and has conducted IT awareness and cultural exchanges sessions in some of the leading schools and universities globally. Currently he is taking pleasure in teaching disadvantaged students at his own rural coaching centre and other social organizations."
            },
            {
                title: "Late Subodh Kumar Chakraborty & Late Arati Chakraborty",
                content: "Amit Kumar Chakraborty established this fellowship in honor of his parents, Late Subodh Kumar Chakraborty and Late Arati Chakraborty, to continue their legacy of supporting education and underprivileged students."
            }
        ]
    }
];

export function getFellowshipBySlug(slug: string): FellowshipDetail | undefined {
    return fellowshipsData.find(f => f.slug === slug);
}

export function getAllFellowshipSlugs() {
    return fellowshipsData.map(f => ({ slug: f.slug }));
}
