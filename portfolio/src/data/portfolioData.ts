export interface Project {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  technologies: string[];
  category: string;
  githubLink: string;
  liveLink: string;
  image: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  contributions: string[];
}

export interface Education {
  school: string;
  degree: string;
  graduationDate: string;
  cgpa: string;
  coursework: string[];
}

export const portfolioData = {
  personalInfo: {
    name: "Nandini Kushwah",
    role: "Software Engineer | Backend Developer | AI/ML Enthusiast",
    location: "India",
    email: "nandinikushwah7898@gmail.com",
    phone: "+91 9329444049",
    github: "https://github.com/Nandini-kush",
    linkedin: "https://linkedin.com/in/nandini-kushwah",
    resumeUrl: "/Nandini-Resume.pdf",
    profileImage: "/src/assets/profile.jpg",
  },
  summary: "Final year B.Tech Information Technology student with hands-on experience building scalable backend systems and AI-driven applications using Django, FastAPI, PostgreSQL, and React.js. Skilled in Retrieval-Augmented Generation (RAG), semantic search, NLP, and recommendation systems, with a strong foundation in full-stack development and machine learning. Seeking Software Engineering, Backend Development, Machine Learning, and AI internship opportunities.",
  hero: {
    headline: "Building Scalable Backend Systems and AI-Powered Applications",
    tagline: "Software Engineering | Backend Development | Machine Learning | AI",
    intro: "Final year B.Tech IT student passionate about developing production-grade backend systems and intelligent applications. I build full-stack solutions using Django, FastAPI, React.js, PostgreSQL, and modern AI/ML technologies.",
  },
  about: `I am a final year B.Tech Information Technology student at SGSITS Indore with hands-on experience in backend development, full-stack engineering, and applied artificial intelligence. Through internships and academic projects, I have built scalable systems using Django, FastAPI, PostgreSQL, and React.js.

My work focuses on Retrieval-Augmented Generation (RAG), semantic search, recommendation systems, and machine learning. I enjoy solving real-world problems by combining robust backend architectures with AI-driven features.

I am currently seeking internship opportunities in Software Engineering, Backend Development, Machine Learning, and AI where I can contribute to impactful products and continue growing as an engineer.`,
  stats: [
    { label: "Internships Completed", value: "2" },
    { label: "Major Projects Built", value: "3" },
    { label: "LeetCode Problems Solved", value: "150+" },
  ],
  skills: {
    languages: ["Python", "Java", "JavaScript", "SQL", "C"],
    frontend: ["React.js", "Tailwind CSS", "HTML5", "CSS3"],
    backend: ["Django", "FastAPI", "Flask", "REST APIs", "JWT Authentication", "RBAC", "Microservices Architecture"],
    databases: ["PostgreSQL", "MySQL", "Redis"],
    mlAndAi: [
      "Machine Learning", "Deep Learning", "NLP", "RAG", "Generative AI", 
      "Prompt Engineering", "Semantic Search", "Vector Embeddings", 
      "Recommendation Systems", "FAISS", "SentenceTransformers", 
      "scikit-learn", "PyTorch", "Pandas", "NumPy"
    ],
    devops: ["Docker", "AWS (EC2, S3, RDS)", "GitHub Actions", "CI/CD", "Linux"],
    tools: ["Git", "GitHub", "Postman", "Swagger UI", "Pytest", "Streamlit"],
    coreCs: ["DSA", "OOP", "System Design", "Caching", "Database Indexing"]
  },
  projects: [
    {
      title: "Repo-Veda",
      subtitle: "AI-Powered GitHub Repository Recommendation Platform",
      description: "An intelligent platform that recommends relevant GitHub repositories based on a user’s skills and interests using semantic search, vector embeddings, and machine learning ranking.",
      features: [
        "Skill-based repository recommendations",
        "GitHub API integration",
        "Semantic similarity search",
        "Dynamic filtering and ranking",
        "Responsive dashboard UI"
      ],
      technologies: ["React.js", "FastAPI", "PostgreSQL", "GitHub API", "FAISS", "SentenceTransformers", "Machine Learning"],
      category: "AI/ML & Full Stack",
      githubLink: "https://github.com/Nandini-kush",
      liveLink: "#",
      image: "/projects/repoveda-home.jpg"
    },
    {
      title: "DocuMind",
      subtitle: "AI-Powered PDF Chatbot using Retrieval-Augmented Generation",
      description: "A RAG-based application that enables natural language conversations with PDF documents using vector search and grounded response generation.",
      features: [
        "PDF upload and processing",
        "Semantic retrieval",
        "Context-aware question answering",
        "Fast response times"
      ],
      technologies: ["FastAPI", "React.js", "FAISS", "SentenceTransformers", "FLAN-T5"],
      category: "AI/RAG",
      githubLink: "https://github.com/Nandini-kush",
      liveLink: "#",
      image: "/projects/documind-home.jpg"
    },
    {
      title: "YojnaSathi",
      subtitle: "Government Scheme Recommendation Engine",
      description: "A platform that matches users with relevant government schemes using eligibility rules and weighted scoring.",
      features: [
        "User profile-based recommendations",
        "Eligibility matching",
        "JWT authentication",
        "Modular service architecture"
      ],
      technologies: ["FastAPI", "PostgreSQL", "JWT Authentication", "Rule-Based Recommendation"],
      category: "Backend",
      githubLink: "https://github.com/Nandini-kush",
      liveLink: "#",
      image: "/projects/yojnasathi-home.jpg"
    }
  ],
  experience: [
    {
      role: "IT Intern",
      company: "Labour Department, Government of Madhya Pradesh",
      duration: "Jan 2026 – Apr 2026",
      contributions: [
        "Built the SRAM platform backend using Django and PostgreSQL.",
        "Implemented RBAC and JWT authentication.",
        "Developed reporting pipelines and deployment documentation."
      ]
    },
    {
      role: "Full Stack Developer Intern",
      company: "BoltLabs",
      duration: "May 2025 – Jul 2025",
      contributions: [
        "Built a production platform using React.js and FastAPI.",
        "Developed admin workflows and task assignment modules.",
        "Designed and documented REST APIs."
      ]
    }
  ],
  education: {
    school: "SGSITS Indore",
    degree: "Bachelor of Technology in Information Technology",
    graduationDate: "May 2027",
    cgpa: "7.95/10",
    coursework: ["DSA", "DBMS", "Operating Systems", "Computer Networks", "Machine Learning"]
  },
  leadership: {
    role: "Executive Member, Entrepreneurship Cell",
    details: [
      "Coordinated 3 college-level events with 200+ participants.",
      "Managed logistics, speaker coordination, and team collaboration."
    ]
  },
  learning: [
    "Advanced Data Structures and Algorithms",
    "Docker and Kubernetes",
    "AWS Cloud Services",
    "System Design",
    "PyTorch and Deep Learning"
  ],
  seo: {
    title: "Nandini Kushwah | Software Engineer | Backend Developer | AI/ML Enthusiast",
    description: "Portfolio of Nandini Kushwah, a final year B.Tech IT student specializing in backend development, full-stack engineering, machine learning, and AI-powered applications.",
    keywords: "Nandini Kushwah, Software Engineer, Backend Developer, FastAPI, Django, React.js, Machine Learning, AI, RAG, NLP, Portfolio"
  }
};
