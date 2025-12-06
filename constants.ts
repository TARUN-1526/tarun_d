import { ExperienceItem, ProjectItem, EducationItem, SkillCategory, Certification, Award } from './types';

// SECURITY: Change this password to secure your admin area
export const EDIT_PASSWORD = "admin123";

export const PERSONAL_INFO = {
  name: "Tarun Dwarakacharla",
  role: "Salesforce Developer & Full Stack Engineer",
  email: "dwarakacharlatarun@gmail.com",
  phone: "+91-7993648137",
  linkedin: "https://linkedin.com/in/tarun-dwarakacharla",
  github: "https://github.com/TARUN-1526",
  // ---- new coding profiles (replace with real profile URLs) ----
  leetcode: "https://leetcode.com/your-username",
  hackerrank: "https://www.hackerrank.com/your-username",
  codechef: "https://www.codechef.com/users/your-username",
  trailhead: "https://trailhead.salesforce.com/en/me/your-username",
  // -------------------------------------------------------------
  location: "Guntur, India",
  avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=500&h=500&q=80",
  summary: "Computer Science graduate with expertise in Salesforce CRM (Apex, Lightning Components, Workflows), Java, Python, SQL, and AWS. Engineered web applications and ML models with measurable impact. Skilled in REST API development, data analysis, CI/CD, and cross-functional team collaboration."
};


export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 1,
    role: "Salesforce Developer Intern",
    company: "TCS Lastmile (SmartBridge)",
    period: "Jul 2025 – Oct 2025",
    location: "Remote",
    type: "Virtual Internship",
    description: [
      "Built a Salesforce CRM application enabling distributors to place orders, track inventory, and view product analytics.",
      "Developed record-triggered Flows and validation rules to auto-update inventory and prevent invalid orders.",
      "Implemented Apex classes, triggers, and REST API endpoints for partner order creation with bulk-safe operations.",
      "Designed dynamic LWC interfaces integrated with Apex for real-time inventory and toast notifications.",
      "Created Product Insights dashboards for sales tracking and inventory monitoring."
    ]
  },
  {
    id: 2,
    role: "Artificial Intelligence Intern",
    company: "Infosys Springboard",
    period: "Feb 2025 – Apr 2025",
    location: "Remote",
    type: "Internship",
    description: [
      "Engineered YOLOv5 object detection pipeline achieving 92% accuracy.",
      "Reduced inference time by 30% through optimized preprocessing and batch operations.",
      "Coordinated with 3 interns to present model deployment results and cloud integration."
    ]
  },
  {
    id: 3,
    role: "Full-Stack Java Developer Intern",
    company: "Infosys Springboard",
    period: "Dec 2024 – Feb 2025",
    location: "Remote",
    type: "Internship",
    description: [
      "Engineered Spring Boot and Thymeleaf-based Food Ordering App serving 50+ concurrent users.",
      "Optimized SQL queries reducing response time by 25%.",
      "Implemented authentication, backend APIs, and front-end integration within a 4-member Agile team."
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: "Consumer Goods Distributor Partner Portal",
    tech: "Salesforce, Apex, LWC, Reports",
    category: "Salesforce",
    description: [
      "CRM solution managing 100+ distributors and 2000+ orders.",
      "Automated workflows and approval processes reduced manual reporting effort by 40%.",
      "Tracks inventory and sales pipelines efficiently."
    ]
  },
  {
    id: 2,
    title: "Veteran Talent Finder",
    tech: "Python, GitHub API, Streamlit, SerpAPI",
    category: "AI/ML",
    description: [
      "Recruitment tool filtering 500+ candidate profiles by skills and location.",
      "Improved selection efficiency by 50% with filtering, pagination, and CSV export.",
      "Coordinated UI/UX design and backend integration."
    ]
  },
  {
    id: 3,
    title: "YOLOv5 Real-Time Object Detection",
    tech: "Python, PyTorch, YOLOv5",
    category: "AI/ML",
    description: [
      "Real-time detection pipeline for 20+ object classes.",
      "Improved mAP by 15% using data augmentation.",
      "Reduced inference time by 30% through batch optimization."
    ]
  },
  {
    id: 4,
    title: "Food Express Web App",
    tech: "Spring Boot, SQL, Thymeleaf",
    category: "Full Stack",
    description: [
      "Built backend APIs supporting 50+ concurrent users.",
      "Optimized SQL queries and caching to reduce response time by 25%.",
      "Implemented secure authentication and full frontend integration."
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    school: "R.V.R. & J.C. College of Engineering",
    degree: "B.Tech - Computer Science",
    score: "GPA: 8.63",
    period: "Aug 2023 – May 2026",
    location: "Guntur, India"
  },
  {
    school: "A.A.N.M. & V.V.R.S.R. Polytechnic College",
    degree: "Diploma in Computer Engineering",
    score: "95.42%",
    period: "Jun 2020 – May 2023",
    location: "Gudlavalleru, India"
  },
  {
    school: "Citizens High School",
    degree: "Secondary Education",
    score: "GPA: 9.3",
    period: "2019 – 2020",
    location: "Vijayawada, India"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  { name: "Programming", skills: ["Python", "Java", "C", "SQL"] },
  { name: "Web / Frameworks", skills: ["Spring Boot", "Thymeleaf", "HTML/CSS", "JavaScript", "React", "REST APIs"] },
  { name: "Salesforce", skills: ["Apex", "LWC", "Workflows", "SOQL/SOSL", "Reports & Dashboards"] },
  { name: "AI / Tools", skills: ["PyTorch", "YOLOv5", "OpenCV", "Git", "AWS", "Docker"] },
];

export const CHART_DATA = [
  { subject: 'Salesforce', A: 95, fullMark: 100 },
  { subject: 'Java/Spring', A: 85, fullMark: 100 },
  { subject: 'Python/AI', A: 80, fullMark: 100 },
  { subject: 'SQL/DB', A: 90, fullMark: 100 },
  { subject: 'Web/JS', A: 75, fullMark: 100 },
  { subject: 'DevOps', A: 70, fullMark: 100 },
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Certified Generative AI Professional (OCI 2025)", issuer: "Oracle Cloud Infrastructure", details: "ID: 102246585OCI25GAIOCP" },
  { name: "Generative AI Fundamentals", issuer: "Databricks" },
  { name: "Data Structures & Algorithms Using Python", issuer: "NPTEL" },
  { name: "Java Full Stack, Git & GitHub", issuer: "Infosys Springboard" },
  { name: "Prompt Engineering, NLP Skills", issuer: "IBM SkillsBuild" },
  { name: "Intro to Machine Learning", issuer: "Kaggle" },
];

export const AWARDS: Award[] = [
  { title: "Salesforce Trailhead Ranger", description: "Earned 90,000+ points completing multiple badges and superbadges." },
  { title: "HackAP Finalist", description: "Selected as finalist at ā hub (Andhra University Incubation Center)." },
  { title: "Rank 106", description: "Andhra Pradesh Engineering Common Entrance Test." },
  { title: "Hindi Language Proficiency", description: "Completed Dakshin Bharat Hindi Prachar Sabha Examinations." },
];