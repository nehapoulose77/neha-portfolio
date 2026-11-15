// Portfolio Data for Neha Poulose K
// All data sourced directly from verified resume and profile specifications

import {
  Award,
  BookOpen,
  Briefcase,
  Code2,
  Database,
  FileCheck,
  FileText,
  FlaskConical,
  GraduationCap,
  Heart,
  Layers,
  Lightbulb,
  MonitorCheck,
  Palette,
  Sparkles,
  Terminal,
  Globe,
  UserCheck
} from "lucide-react";

export const PROFILE = {
  name: "Neha Poulose K",
  title: "Information Technology Graduate",
  roles: [
    "Information Technology Graduate",
    "Junior QA Engineer",
    "Software Tester",
    "QA Automation Engineer",
    "Junior Developer"
  ],
  tagline: "Passionate about Technology, Development, Software Testing and Building Innovative Solutions.",
  greeting: "Hello, I'm",
  location: "Kochi, Kerala, India",
  email: "nehapoulose77@gmail.com",
  phone: "+91 73566 37602",
  phoneRaw: "+917356637602",
  github: "https://github.com/nehapoulose77",
  linkedin: "https://linkedin.com/in/neha-poulose-k",
  availabilityStatus: "Open to Opportunities · Ready to Join",
  
  // Hero short introduction based on verified resume
  shortIntro:
    "B.Tech Information Technology graduate with hands-on knowledge in Python, SQL, OOP concepts, and Software Testing (Manual & Automation). Strong problem-solving aptitude with academic project and internship experience.",

  // Exact required About Me paragraph
  aboutParagraph:
    "I am Neha Poulose K, a Bachelor of Technology graduate in Information Technology. I have knowledge of Python, SQL, OOP concepts, and Software Testing. I possess strong analytical, problem-solving, and communication skills, with hands-on experience in academic project development. I am eager to apply my technical skills, contribute to organizational goals, and develop professional expertise.",

  // Uploaded photo path (inside public/assets)
  photo: "/assets/neha-profile.png",

  // Local resume path & configurable GitHub public URL
  // To configure GitHub hosted resume: set RESUME_GITHUB_URL to the raw URL
  // e.g., "https://raw.githubusercontent.com/nehapoulose77/portfolio/main/public/assets/Neha-Poulose-K-Resume.pdf"
  resumeGithubUrl: "",
  localResumeUrl: "/assets/Neha-Poulose-K-Resume.pdf",
  resumeFileName: "Neha-Poulose-K-Resume.pdf",
  resumeSize: "166 KB",
  resumeUpdated: "November 2026"
};

export const ABOUT_DETAILS = {
  educationOverview: "B.Tech in Information Technology from Rajagiri School of Engineering & Technology (Autonomous), Kochi with 7.9 CGPA (Class of 2026).",
  professionalInterests: "Software Quality Assurance, Manual & Automation Testing, API Testing, Python & Web Development, Machine Learning applications.",
  technicalBackground: "Sound foundation in Object-Oriented Programming, relational databases with SQL, test scenario design, defect reporting, Playwright automation, and Python-driven systems.",
  languages: [
    { name: "English", level: "Professional Working Proficiency" },
    { name: "Malayalam", level: "Native / Mother Tongue" },
    { name: "Hindi", level: "Conversational Proficiency" }
  ],
  interests: [
    { name: "Painting", description: "Creative expression, digital and canvas art", icon: Palette },
    { name: "Yoga", description: "Mindfulness, physical well-being and discipline", icon: Heart }
  ],
  highlights: [
    { label: "B.Tech IT CGPA", value: "7.9 / 10", subtitle: "Rajagiri School of Engg. (Autonomous)" },
    { label: "AI Fellowship", value: "₹1,00,000", subtitle: "HIRE AI Capstone Project" },
    { label: "Research Paper", value: "IC3SIS 2026", subtitle: "Accepted International Conference" },
    { label: "Internships", value: "2 Completed", subtitle: "QA Testing & ML/Data Science" }
  ]
};

export const EXPERIENCES = [
  {
    id: "testing-mavens",
    role: "QA Testing Intern",
    organization: "Testing Mavens",
    location: "Kochi, Kerala",
    duration: "October 2026 – December 2026",
    periodType: "Internship",
    badge: "QA & Automation",
    responsibilities: [
      "Performed Manual Testing, including test case design, test scenario preparation, and defect reporting.",
      "Gained hands-on experience in Automation Testing using Playwright and TypeScript.",
      "Performed API Testing to validate API requests, responses, and status codes.",
      "Learned Performance Testing to evaluate application response times and performance."
    ],
    skills: ["Manual Testing", "Test Case Design", "Playwright", "TypeScript", "API Testing", "Performance Testing", "Defect Reporting"]
  },
  {
    id: "camino-infotech",
    role: "Python, Data Science & Machine Learning Intern",
    organization: "Camino Infotech Pvt. Ltd.",
    location: "Kochi, Kerala",
    duration: "12 May 2025 – 28 May 2025",
    periodType: "Internship",
    badge: "Python & Data Science",
    responsibilities: [
      "Completed hands-on training in Python programming, Data Science, and Machine Learning fundamentals.",
      "Gained practical experience in data analysis and applying Python for data-related tasks.",
      "Developed technical, analytical, and problem-solving skills through practical learning."
    ],
    skills: ["Python", "Data Science", "Machine Learning", "Data Analysis", "NumPy", "Pandas", "Problem Solving"]
  }
];

export const EDUCATION = [
  {
    id: "btech-rajagiri",
    institution: "Rajagiri School of Engineering & Technology (Autonomous)",
    degree: "Bachelor of Technology in Information Technology",
    score: "CGPA: 7.9",
    scoreLabel: "Cumulative Grade Point Average",
    duration: "October 2022 – May 2026",
    location: "Kochi, Kerala",
    badge: "Undergraduate Degree",
    highlights: "Key coursework: OOPs, Database Management Systems, Software Engineering, Testing Methodologies, Cloud Computing."
  },
  {
    id: "12th-st-vincent",
    institution: "St. Vincent CMI Residential School",
    degree: "Higher Secondary Education (12th Bio-Maths)",
    score: "93.6%",
    scoreLabel: "Kerala State Board",
    duration: "June 2021 – April 2022",
    location: "Pala, Kerala",
    badge: "Higher Secondary",
    highlights: "Completed senior secondary schooling with 93.6% distinction in the Bio-Mathematics stream."
  },
  {
    id: "10th-cmi-public",
    institution: "CMI Public School",
    degree: "Secondary Education (10th)",
    score: "91%",
    scoreLabel: "CBSE Board",
    duration: "June 2020 – March 2021",
    location: "Chalakudy, Kerala",
    badge: "Secondary School",
    highlights: "Graduated with 91% academic distinction under the Central Board of Secondary Education (CBSE)."
  }
];

export const PROJECTS = [
  {
    id: "hire-ai",
    number: "01",
    title: "HIRE AI – GENERATIVE AI-BASED HIRING ASSISTANT FOR HUMAN CAPITAL MANAGEMENT",
    duration: "July 2025 – March 2026",
    icon: Sparkles,
    category: "AI & Human Capital Management",
    honors: [
      "Research paper accepted at IC3SIS 2026",
      "Received INR 1,00,000 AI Fellowship"
    ],
    description: [
      "Developed an AI-powered recruitment assistant using NLP and Machine Learning to automate job description generation, resume screening, and interview analysis.",
      "Research paper accepted at IC3SIS 2026.",
      "Received INR 1,00,000 AI Fellowship."
    ],
    stack: ["React.js", "Cloud Firestore", "Ollama", "NLP", "Machine Learning"],
    githubUrl: null, // No fake URLs allowed
    statusNote: "Academic Research Project · IC3SIS 2026 Paper"
  },
  {
    id: "calorease",
    number: "02",
    title: "CALOREASE – CALORIE TRACKING AND MEAL RECOMMENDATION SYSTEM",
    duration: "January 2025 – April 2025",
    icon: Heart,
    category: "HealthTech & Web Application",
    honors: [
      "Comprehensive Nutrition Tracking & Personalized Suggestions",
      "Integrated Real-Time Progress Analytics"
    ],
    description: [
      "Developed a web-based calorie tracking application to monitor daily calorie intake and nutritional habits.",
      "Integrated a food database to provide personalized diet suggestions, balanced meal recommendations, and real-time progress visualization."
    ],
    stack: ["HTML", "CSS", "Python (Flask)", "MongoDB"],
    githubUrl: null, // No fake URLs allowed
    statusNote: "Web-Based Calorie & Nutrition System"
  },
  {
    id: "heart-disease-prediction",
    number: "03",
    title: "HEART DISEASE PREDICTION SYSTEM",
    duration: "Academic Project",
    icon: FlaskConical,
    category: "Machine Learning & Health Informatics",
    honors: [
      "Supervised ML Classification Model",
      "End-to-End Data Pipeline & Metrics Evaluation"
    ],
    description: [
      "Developed a heart disease prediction system to analyze patient health data and classify risk levels using Machine Learning.",
      "Implemented data preprocessing, model training, and performance evaluation using Logistic Regression."
    ],
    stack: ["Python", "NumPy", "Pandas", "Scikit-learn", "Logistic Regression"],
    githubUrl: null, // No fake URLs allowed
    statusNote: "Machine Learning Diagnostic Classifier"
  }
];

export const SKILL_CATEGORIES = [
  {
    id: "programming",
    title: "Programming Languages",
    icon: Terminal,
    description: "Core programming languages and foundational computer science concepts.",
    skills: ["Python", "Java", "SQL", "TypeScript", "OOP Concepts"]
  },
  {
    id: "web",
    title: "Web Technologies",
    icon: Globe,
    description: "Frontend and full-stack building blocks for responsive interactive applications.",
    skills: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: "testing",
    title: "Testing",
    icon: MonitorCheck,
    description: "Quality assurance lifecycle, automated suites, API verification, and bug reporting.",
    skills: ["Manual Testing", "Automation Testing", "Playwright"]
  },
  {
    id: "tools",
    title: "Developer Tools",
    icon: Code2,
    description: "Version control, collaborative workflows, IDE environments, and data analysis notebooks.",
    skills: ["GitHub", "VS Code", "Google Colab"]
  }
];

export const ACHIEVEMENTS = [
  {
    id: "ai-fellowship",
    title: "INR 1,00,000 AI Fellowship for the HIRE AI project",
    issuer: "AI Fellowship Program",
    year: "2025 – 2026",
    type: "Award",
    icon: Award,
    description: "Prestigious financial fellowship grant awarded in recognition of innovative research and execution of the Generative AI hiring assistant."
  },
  {
    id: "ic3sis-paper",
    title: "Research Paper Acceptance – IC3SIS 2026",
    issuer: "IC3SIS International Conference",
    year: "2026",
    type: "Publication",
    icon: FileText,
    description: "Peer-reviewed research paper on Generative AI-based hiring automation accepted for presentation and publication at IC3SIS 2026."
  },
  {
    id: "fullstack-bootcamp",
    title: "The Complete Full-Stack Web Development Bootcamp – Udemy",
    issuer: "Udemy",
    year: "2026",
    type: "Certification",
    icon: Globe,
    description: "Comprehensive training covering frontend architecture, backend REST APIs, databases, authentication, and full-stack deployment."
  },
  {
    id: "python-infotact",
    title: "Python Development – Infotact Solutions",
    issuer: "Infotact Solutions",
    year: "2026",
    type: "Certification",
    icon: Code2,
    description: "Industrial training program focused on Python software development, modular programming, and data manipulation."
  },
  {
    id: "cloud-nptel",
    title: "Cloud Computing and Distributed Systems – NPTEL",
    issuer: "NPTEL (National Programme on Technology Enhanced Learning)",
    year: "2025",
    type: "Certification",
    icon: GraduationCap,
    description: "Rigorous academic certification exploring virtualization, distributed storage systems, containerization, and cloud paradigms."
  },
  {
    id: "llm-ibm",
    title: "Unlocking the Power of Large Language Models (LLMs) – IBM Workshop",
    issuer: "IBM Workshop, CONFLUENCE",
    year: "2024",
    type: "Workshop",
    icon: Sparkles,
    description: "Hands-on masterclass examining foundational LLM architectures, prompt engineering, fine-tuning methodologies, and enterprise AI."
  },
  {
    id: "cyber-security",
    title: "Cyber Security and Ethical Hacking – Blueshell Technologies",
    issuer: "Blueshell Technologies",
    year: "2024",
    type: "Certification",
    icon: MonitorCheck,
    description: "Hands-on training covering vulnerability assessment, penetration testing fundamentals, network security protocols, and counter-measures."
  },
  {
    id: "nodejs-udemy",
    title: "Introduction to Node.js for Beginners – Udemy",
    issuer: "Udemy",
    year: "2024",
    type: "Certification",
    icon: Terminal,
    description: "Core backend development course exploring Node.js runtime, asynchronous event-driven architecture, and npm ecosystems."
  }
];

export const EXTRACURRICULAR = [
  {
    id: "confluence-volunteer",
    title: "Confluence 2.0 Volunteer",
    role: "Student Coordinator & Technical Volunteer",
    event: "Confluence 2.0 National Tech Summit",
    description: "Supported event coordination, participant management, and technical activities during the flagship technical symposium.",
    icon: UserCheck,
    tags: ["Event Coordination", "Participant Management", "Technical Operations"]
  },
  {
    id: "smart-hackathon",
    title: "Smart Internal Hackathon Participant",
    role: "Hackathon Participant",
    event: "Rajagiri School of Engineering and Technology",
    duration: "August 2024",
    description: "Participated in the competitive internal hackathon at Rajagiri School of Engineering and Technology, collaborating on rapid prototyping and problem-solving.",
    icon: Lightbulb,
    tags: ["Hackathon", "Rapid Prototyping", "Teamwork", "Problem Solving"]
  }
];

export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Achievements", href: "#achievements" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" }
];

