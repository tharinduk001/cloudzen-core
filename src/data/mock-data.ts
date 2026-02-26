// ==================== COURSES ====================
export interface Course {
  id: string;
  title: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  price: number | "Free";
  type: "Recorded Free" | "Recorded Premium" | "Live";
  badge: string;
  description: string;
  instructor: string;
  rating: number;
  students: number;
  image: string;
  tags: string[];
}

export const courses: Course[] = [
  { id: "c1", title: "AWS Cloud Foundations", category: "Cloud", level: "Beginner", duration: "8 hours", price: "Free", type: "Recorded Free", badge: "Cloud Starter", description: "Learn the fundamentals of AWS cloud computing from scratch.", instructor: "Kasun Perera", rating: 4.8, students: 1240, image: "/placeholder.svg", tags: ["AWS", "Cloud", "IAM"] },
  { id: "c2", title: "Docker & Container Mastery", category: "DevOps", level: "Intermediate", duration: "12 hours", price: 49, type: "Recorded Premium", badge: "Container Pro", description: "Master Docker containers, Dockerfiles, and container orchestration.", instructor: "Amaya Silva", rating: 4.9, students: 890, image: "/placeholder.svg", tags: ["Docker", "Containers", "DevOps"] },
  { id: "c3", title: "Kubernetes in Production", category: "DevOps", level: "Advanced", duration: "16 hours", price: 79, type: "Recorded Premium", badge: "K8s Expert", description: "Deploy, manage, and scale applications with Kubernetes.", instructor: "Rohan Jayawardena", rating: 4.7, students: 560, image: "/placeholder.svg", tags: ["Kubernetes", "K8s", "Orchestration"] },
  { id: "c4", title: "CI/CD Pipeline Workshop", category: "DevOps", level: "Intermediate", duration: "6 hours", price: 39, type: "Live", badge: "CI/CD Builder", description: "Build production-ready CI/CD pipelines with Jenkins and GitHub Actions.", instructor: "Kasun Perera", rating: 4.6, students: 430, image: "/placeholder.svg", tags: ["CI/CD", "Jenkins", "GitHub Actions"] },
  { id: "c5", title: "Terraform Infrastructure as Code", category: "Cloud", level: "Intermediate", duration: "10 hours", price: 59, type: "Recorded Premium", badge: "IaC Engineer", description: "Automate cloud infrastructure provisioning with Terraform.", instructor: "Amaya Silva", rating: 4.8, students: 720, image: "/placeholder.svg", tags: ["Terraform", "IaC", "AWS"] },
  { id: "c6", title: "Git & GitHub Essentials", category: "Software Engineering", level: "Beginner", duration: "4 hours", price: "Free", type: "Recorded Free", badge: "Git Starter", description: "Version control fundamentals with Git and GitHub collaboration.", instructor: "Dinesh Fernando", rating: 4.9, students: 2100, image: "/placeholder.svg", tags: ["Git", "GitHub", "Version Control"] },
  { id: "c7", title: "Linux for DevOps Engineers", category: "DevOps", level: "Beginner", duration: "8 hours", price: "Free", type: "Recorded Free", badge: "Linux Basics", description: "Essential Linux commands and scripting for DevOps.", instructor: "Rohan Jayawardena", rating: 4.7, students: 1560, image: "/placeholder.svg", tags: ["Linux", "Shell", "DevOps"] },
  { id: "c8", title: "Cloud Security Fundamentals", category: "Cloud", level: "Intermediate", duration: "10 hours", price: 49, type: "Live", badge: "Security Aware", description: "Learn cloud security best practices and compliance frameworks.", instructor: "Kasun Perera", rating: 4.5, students: 340, image: "/placeholder.svg", tags: ["Security", "Cloud", "Compliance"] },
  { id: "c9", title: "Python for DevOps Automation", category: "DevOps", level: "Beginner", duration: "6 hours", price: "Free", type: "Recorded Free", badge: "Python Automator", description: "Automate repetitive tasks and build DevOps scripts with Python.", instructor: "Dinesh Fernando", rating: 4.8, students: 980, image: "/placeholder.svg", tags: ["Python", "Automation", "Scripting"] },
  { id: "c10", title: "Azure Fundamentals", category: "Cloud", level: "Beginner", duration: "7 hours", price: "Free", type: "Recorded Free", badge: "Azure Starter", description: "Get started with Microsoft Azure cloud services and core concepts.", instructor: "Kasun Perera", rating: 4.6, students: 760, image: "/placeholder.svg", tags: ["Azure", "Cloud", "Microsoft"] },
  { id: "c11", title: "Ansible Configuration Management", category: "DevOps", level: "Intermediate", duration: "9 hours", price: 45, type: "Recorded Premium", badge: "Ansible Pro", description: "Automate server configuration and application deployment with Ansible.", instructor: "Rohan Jayawardena", rating: 4.7, students: 520, image: "/placeholder.svg", tags: ["Ansible", "Configuration", "Automation"] },
  { id: "c12", title: "Microservices Architecture", category: "Software Engineering", level: "Advanced", duration: "14 hours", price: 69, type: "Recorded Premium", badge: "Microservices Architect", description: "Design, build, and deploy scalable microservices-based applications.", instructor: "Dinesh Fernando", rating: 4.8, students: 640, image: "/placeholder.svg", tags: ["Microservices", "API", "Architecture"] },
  { id: "c13", title: "Prometheus & Grafana Monitoring", category: "DevOps", level: "Intermediate", duration: "8 hours", price: 39, type: "Recorded Premium", badge: "Monitoring Expert", description: "Set up observability with Prometheus metrics and Grafana dashboards.", instructor: "Amaya Silva", rating: 4.7, students: 410, image: "/placeholder.svg", tags: ["Prometheus", "Grafana", "Monitoring"] },
  { id: "c14", title: "GitHub Actions Masterclass", category: "DevOps", level: "Beginner", duration: "5 hours", price: "Free", type: "Recorded Free", badge: "Actions Pro", description: "Build automated workflows with GitHub Actions for CI/CD and more.", instructor: "Kasun Perera", rating: 4.9, students: 1350, image: "/placeholder.svg", tags: ["GitHub Actions", "CI/CD", "Automation"] },
  { id: "c15", title: "AWS Lambda & Serverless", category: "Cloud", level: "Intermediate", duration: "10 hours", price: 55, type: "Recorded Premium", badge: "Serverless Dev", description: "Build event-driven serverless applications with AWS Lambda and API Gateway.", instructor: "Kasun Perera", rating: 4.8, students: 680, image: "/placeholder.svg", tags: ["AWS Lambda", "Serverless", "API Gateway"] },
  { id: "c16", title: "Networking for Cloud Engineers", category: "Cloud", level: "Beginner", duration: "6 hours", price: "Free", type: "Recorded Free", badge: "Network Foundations", description: "Understand TCP/IP, DNS, load balancing, and cloud networking essentials.", instructor: "Rohan Jayawardena", rating: 4.6, students: 920, image: "/placeholder.svg", tags: ["Networking", "TCP/IP", "DNS"] },
  { id: "c17", title: "Helm Charts for Kubernetes", category: "DevOps", level: "Advanced", duration: "7 hours", price: 45, type: "Live", badge: "Helm Master", description: "Package and deploy Kubernetes applications using Helm charts.", instructor: "Amaya Silva", rating: 4.7, students: 310, image: "/placeholder.svg", tags: ["Helm", "Kubernetes", "Packaging"] },
  { id: "c18", title: "REST API Design & Development", category: "Software Engineering", level: "Intermediate", duration: "8 hours", price: 39, type: "Recorded Premium", badge: "API Designer", description: "Design robust RESTful APIs following best practices and industry standards.", instructor: "Dinesh Fernando", rating: 4.8, students: 870, image: "/placeholder.svg", tags: ["REST", "API", "Backend"] },
];

// ==================== PROJECTS ====================
export interface Project {
  id: string;
  title: string;
  category: string;
  difficulty: "Easy" | "Medium" | "Hard";
  duration: string;
  tools: string[];
  description: string;
  image: string;
}

export const projects: Project[] = [
  { id: "p1", title: "Deploy a Static Website on AWS S3", category: "Cloud", difficulty: "Easy", duration: "1 hour", tools: ["AWS S3", "CloudFront", "Route 53"], description: "Deploy a static website using S3, configure CloudFront CDN, and set up a custom domain.", image: "/placeholder.svg" },
  { id: "p2", title: "Build a CI/CD Pipeline with Jenkins", category: "DevOps-Jenkins", difficulty: "Medium", duration: "3 hours", tools: ["Jenkins", "Docker", "GitHub"], description: "Create an automated CI/CD pipeline that builds, tests, and deploys a web app.", image: "/placeholder.svg" },
  { id: "p3", title: "Kubernetes Cluster Setup", category: "Kubernetes", difficulty: "Hard", duration: "4 hours", tools: ["Kubernetes", "kubectl", "Helm"], description: "Set up a multi-node Kubernetes cluster and deploy a microservices application.", image: "/placeholder.svg" },
  { id: "p4", title: "Infrastructure as Code with Terraform", category: "Terraform", difficulty: "Medium", duration: "2.5 hours", tools: ["Terraform", "AWS", "Git"], description: "Provision a complete cloud environment using Terraform modules.", image: "/placeholder.svg" },
  { id: "p5", title: "Monitoring Stack with Prometheus & Grafana", category: "Monitoring", difficulty: "Medium", duration: "3 hours", tools: ["Prometheus", "Grafana", "Docker"], description: "Set up a complete monitoring and alerting stack for your infrastructure.", image: "/placeholder.svg" },
  { id: "p6", title: "Git Workflow Simulation", category: "DevOps-Git", difficulty: "Easy", duration: "1.5 hours", tools: ["Git", "GitHub", "VS Code"], description: "Practice feature branching, pull requests, and merge conflict resolution.", image: "/placeholder.svg" },
];

// ==================== LEARNING PATHS ====================
export interface LearningPath {
  id: string;
  title: string;
  description: string;
  steps: number;
  duration: string;
  level: string;
  courses: string[];
  projects: string[];
}

export const learningPaths: LearningPath[] = [
  { id: "lp1", title: "Cloud Fundamentals", description: "Start your cloud journey from zero to deploying your first application.", steps: 5, duration: "4 weeks", level: "Beginner", courses: ["c1", "c6"], projects: ["p1"] },
  { id: "lp2", title: "DevOps Starter", description: "Learn the core DevOps tools and practices used in industry.", steps: 7, duration: "6 weeks", level: "Beginner → Intermediate", courses: ["c7", "c6", "c2"], projects: ["p2", "p6"] },
  { id: "lp3", title: "Kubernetes Practitioner", description: "Master container orchestration with Kubernetes from basics to production.", steps: 6, duration: "8 weeks", level: "Intermediate → Advanced", courses: ["c2", "c3"], projects: ["p3"] },
  { id: "lp4", title: "Job-Ready DevOps Engineer", description: "Complete path to becoming a job-ready DevOps engineer with hands-on experience.", steps: 12, duration: "16 weeks", level: "Beginner → Advanced", courses: ["c7", "c6", "c2", "c4", "c3", "c5"], projects: ["p1", "p2", "p3", "p4", "p5"] },
];

// ==================== ROADMAPS ====================
export interface Roadmap {
  id: string;
  role: string;
  description: string;
  milestones: { title: string; skills: string[] }[];
}

export const roadmaps: Roadmap[] = [
  { id: "r1", role: "Cloud Engineer", description: "Your path to becoming a cloud engineer with AWS, Azure, or GCP expertise.", milestones: [
    { title: "Foundations", skills: ["Linux Basics", "Networking", "Cloud Concepts"] },
    { title: "Core Cloud", skills: ["AWS/Azure/GCP", "IAM", "VPC", "S3/Storage"] },
    { title: "Infrastructure", skills: ["Terraform", "CloudFormation", "Ansible"] },
    { title: "Advanced", skills: ["Security", "Cost Optimization", "Architecture Patterns"] },
  ]},
  { id: "r2", role: "DevOps Engineer", description: "Master the tools and culture of DevOps to accelerate software delivery.", milestones: [
    { title: "Fundamentals", skills: ["Linux", "Git", "Scripting (Bash/Python)"] },
    { title: "Containerization", skills: ["Docker", "Docker Compose", "Container Security"] },
    { title: "CI/CD & Orchestration", skills: ["Jenkins", "GitHub Actions", "Kubernetes"] },
    { title: "Monitoring & SRE", skills: ["Prometheus", "Grafana", "SLIs/SLOs", "Incident Management"] },
  ]},
  { id: "r3", role: "Software Engineer", description: "Build strong software engineering fundamentals for modern development.", milestones: [
    { title: "Programming", skills: ["Data Structures", "Algorithms", "OOP"] },
    { title: "Web Development", skills: ["HTML/CSS/JS", "React/Angular", "REST APIs"] },
    { title: "Backend & DB", skills: ["Node.js/Python", "SQL/NoSQL", "Authentication"] },
    { title: "Professional", skills: ["System Design", "Testing", "Code Review", "Agile"] },
  ]},
];

// ==================== INSTRUCTORS ====================
export interface Instructor {
  id: string;
  name: string;
  title: string;
  bio: string;
  expertise: string[];
  courses: number;
  students: number;
  rating: number;
  image: string;
  socials: { linkedin?: string; github?: string; twitter?: string };
}

export const instructors: Instructor[] = [
  { id: "i1", name: "Kasun Perera", title: "Senior Cloud Architect", bio: "10+ years in cloud architecture. AWS Solutions Architect Professional certified. Passionate about making cloud accessible to everyone.", expertise: ["AWS", "Cloud Security", "CI/CD"], courses: 3, students: 2010, rating: 4.7, image: "/placeholder.svg", socials: { linkedin: "#", github: "#", twitter: "#" } },
  { id: "i2", name: "Amaya Silva", title: "DevOps Lead Engineer", bio: "Leading DevOps transformation at scale. Docker Captain and Terraform contributor. Loves teaching through hands-on projects.", expertise: ["Docker", "Terraform", "Kubernetes"], courses: 2, students: 1610, rating: 4.85, image: "/placeholder.svg", socials: { linkedin: "#", github: "#" } },
  { id: "i3", name: "Rohan Jayawardena", title: "Platform Engineer", bio: "Building developer platforms and internal tools. Kubernetes specialist with a passion for automation and developer experience.", expertise: ["Kubernetes", "Linux", "Platform Engineering"], courses: 2, students: 2120, rating: 4.7, image: "/placeholder.svg", socials: { linkedin: "#", github: "#", twitter: "#" } },
  { id: "i4", name: "Dinesh Fernando", title: "Software Engineer & Educator", bio: "Full-stack developer turned educator. Believes in teaching through building real-world projects.", expertise: ["Git", "JavaScript", "Software Engineering"], courses: 1, students: 2100, rating: 4.9, image: "/placeholder.svg", socials: { linkedin: "#", github: "#" } },
];

// ==================== EVENTS ====================
export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  type: "Meetup" | "Workshop" | "Webinar";
  description: string;
  speakers: string[];
  location: string;
  isPast: boolean;
}

export const events: Event[] = [
  { id: "e1", title: "Cloud Native Sri Lanka Meetup", date: "2026-03-15", time: "6:00 PM", type: "Meetup", description: "Monthly meetup for cloud native enthusiasts. Talks on Kubernetes and serverless.", speakers: ["Kasun Perera", "Guest Speaker"], location: "Colombo, Sri Lanka", isPast: false },
  { id: "e2", title: "Docker Deep Dive Workshop", date: "2026-03-22", time: "10:00 AM", type: "Workshop", description: "Hands-on Docker workshop covering multi-stage builds and security scanning.", speakers: ["Amaya Silva"], location: "Online", isPast: false },
  { id: "e3", title: "Terraform Best Practices Webinar", date: "2026-02-10", time: "7:00 PM", type: "Webinar", description: "Learn Terraform best practices for managing infrastructure at scale.", speakers: ["Amaya Silva"], location: "Online", isPast: true },
  { id: "e4", title: "DevOps Career Panel", date: "2026-01-20", time: "5:00 PM", type: "Webinar", description: "Panel discussion on building a career in DevOps with industry professionals.", speakers: ["Kasun Perera", "Rohan Jayawardena", "Dinesh Fernando"], location: "Online", isPast: true },
];

// ==================== BLOG ====================
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  { id: "b1", title: "Getting Started with Kubernetes: A Beginner's Guide", excerpt: "Everything you need to know to start your Kubernetes journey, from pods to deployments.", category: "DevOps", author: "Rohan Jayawardena", date: "2026-02-12", readTime: "8 min", image: "/placeholder.svg", tags: ["Kubernetes", "DevOps", "Containers"] },
  { id: "b2", title: "Why Open Badge 3.0 Matters for Your Career", excerpt: "How verifiable digital credentials are changing the way employers evaluate skills.", category: "Career", author: "Kasun Perera", date: "2026-02-08", readTime: "5 min", image: "/placeholder.svg", tags: ["Badges", "Career", "Credentials"] },
  { id: "b3", title: "Terraform vs CloudFormation: Which Should You Learn?", excerpt: "A detailed comparison of the two most popular Infrastructure as Code tools.", category: "Cloud", author: "Amaya Silva", date: "2026-02-01", readTime: "10 min", image: "/placeholder.svg", tags: ["Terraform", "CloudFormation", "IaC"] },
  { id: "b4", title: "5 CI/CD Mistakes Every Beginner Makes", excerpt: "Avoid these common pitfalls when building your first CI/CD pipeline.", category: "DevOps", author: "Kasun Perera", date: "2026-01-25", readTime: "6 min", image: "/placeholder.svg", tags: ["CI/CD", "Jenkins", "Best Practices"] },
  { id: "b5", title: "Building a DevOps Culture in Sri Lankan Startups", excerpt: "How local startups are adopting DevOps practices to compete globally.", category: "Industry", author: "Dinesh Fernando", date: "2026-01-18", readTime: "7 min", image: "/placeholder.svg", tags: ["DevOps", "Sri Lanka", "Culture"] },
  { id: "b6", title: "Docker Security: 10 Best Practices", excerpt: "Essential security practices every Docker user should follow in production.", category: "Security", author: "Amaya Silva", date: "2026-01-10", readTime: "9 min", image: "/placeholder.svg", tags: ["Docker", "Security", "Containers"] },
];

// ==================== TESTIMONIALS ====================
export interface Testimonial {
  name: string;
  university: string;
  quote: string;
  rating: number;
  image: string;
}

export const testimonials: Testimonial[] = [
  { name: "Sahan Wickramasinghe", university: "University of Moratuwa", quote: "CloudZen's hands-on projects helped me land my first DevOps internship. The practical approach is exactly what universities miss.", rating: 5, image: "/placeholder.svg" },
  { name: "Nethmi Rajapaksa", university: "University of Colombo", quote: "The Kubernetes course was incredibly well-structured. I went from zero to deploying my own cluster in weeks.", rating: 5, image: "/placeholder.svg" },
  { name: "Amal Dissanayake", university: "SLIIT", quote: "Best investment in my career. The learning paths gave me a clear roadmap and the badges look great on LinkedIn.", rating: 4, image: "/placeholder.svg" },
  { name: "Ishara Fernando", university: "University of Kelaniya", quote: "The interview prep section helped me ace my cloud engineer interview. Highly recommended for freshers!", rating: 5, image: "/placeholder.svg" },
];

// ==================== INTERVIEW PREP ====================
export interface InterviewQuestion {
  id: string;
  role: string;
  question: string;
  answer: string;
  difficulty: "Easy" | "Medium" | "Hard";
  category: string;
}

export const interviewQuestions: InterviewQuestion[] = [
  { id: "iq1", role: "Software Engineer", question: "What is the difference between a stack and a queue?", answer: "A stack follows LIFO (Last In, First Out) — the last element added is the first removed. A queue follows FIFO (First In, First Out) — the first element added is the first removed. Stacks are used in function calls and undo operations, while queues are used in task scheduling and BFS.", difficulty: "Easy", category: "Data Structures" },
  { id: "iq2", role: "Software Engineer", question: "Explain the SOLID principles.", answer: "SOLID stands for: Single Responsibility (one class, one job), Open/Closed (open for extension, closed for modification), Liskov Substitution (subtypes must be substitutable), Interface Segregation (prefer specific interfaces), Dependency Inversion (depend on abstractions, not concretions).", difficulty: "Medium", category: "OOP" },
  { id: "iq3", role: "DevOps Engineer", question: "What is Infrastructure as Code (IaC)?", answer: "IaC is the practice of managing and provisioning infrastructure through code rather than manual processes. Tools like Terraform, CloudFormation, and Pulumi allow you to define infrastructure in declarative files, enabling version control, reproducibility, and automation.", difficulty: "Easy", category: "DevOps Concepts" },
  { id: "iq4", role: "DevOps Engineer", question: "Explain the difference between Docker image and container.", answer: "A Docker image is a read-only template containing application code, libraries, and dependencies. A container is a running instance of an image — it's lightweight, isolated, and ephemeral. You can create multiple containers from a single image.", difficulty: "Easy", category: "Docker" },
  { id: "iq5", role: "Cloud Engineer", question: "What is a VPC and why is it important?", answer: "A Virtual Private Cloud (VPC) is a logically isolated section of a cloud provider's network where you can launch resources. It provides network-level security, IP address management, subnet creation, and routing control. VPCs are essential for security and network architecture in cloud environments.", difficulty: "Medium", category: "Networking" },
  { id: "iq6", role: "Cloud Engineer", question: "Explain the shared responsibility model in cloud computing.", answer: "The shared responsibility model divides security obligations between the cloud provider and the customer. The provider manages security 'of' the cloud (physical infrastructure, hypervisor, network), while the customer manages security 'in' the cloud (data, IAM, application security, OS patching).", difficulty: "Easy", category: "Cloud Concepts" },
  { id: "iq7", role: "DevOps Engineer", question: "What are the key differences between blue-green and canary deployments?", answer: "Blue-green deployment maintains two identical environments — one live (blue) and one staging (green). Traffic switches entirely to green after validation. Canary deployment gradually routes a small percentage of traffic to the new version, increasing it over time. Blue-green is simpler but requires double resources; canary is more gradual and reduces risk.", difficulty: "Hard", category: "Deployment" },
  { id: "iq8", role: "Software Engineer", question: "What is the time complexity of common sorting algorithms?", answer: "Bubble Sort: O(n²), Selection Sort: O(n²), Insertion Sort: O(n²) worst / O(n) best, Merge Sort: O(n log n), Quick Sort: O(n log n) avg / O(n²) worst, Heap Sort: O(n log n). Merge Sort and Heap Sort guarantee O(n log n), while Quick Sort is fastest in practice on average.", difficulty: "Medium", category: "Algorithms" },
];

// ==================== UNIVERSITY MODULES ====================
export interface UniversityModule {
  id: string;
  semester: string;
  title: string;
  description: string;
  lessons: number;
  duration: string;
  outcomes: string[];
}

export const universityModules: UniversityModule[] = [
  { id: "um1", semester: "Semester 1", title: "Introduction to Computing & Cloud", description: "Foundational computing concepts with an introduction to cloud platforms.", lessons: 10, duration: "5 weeks", outcomes: ["Understand cloud computing models", "Navigate AWS/Azure console", "Deploy a simple application"] },
  { id: "um2", semester: "Semester 1", title: "Version Control with Git", description: "Master Git fundamentals and collaborative development workflows.", lessons: 8, duration: "4 weeks", outcomes: ["Use Git for version control", "Collaborate with GitHub", "Resolve merge conflicts"] },
  { id: "um3", semester: "Semester 2", title: "Linux & Shell Scripting", description: "Essential Linux administration and Bash scripting for automation.", lessons: 12, duration: "6 weeks", outcomes: ["Navigate Linux filesystem", "Write Bash scripts", "Manage users and permissions"] },
  { id: "um4", semester: "Semester 2", title: "Containerization with Docker", description: "Container fundamentals and Docker-based application deployment.", lessons: 10, duration: "5 weeks", outcomes: ["Build Docker images", "Use Docker Compose", "Implement container networking"] },
  { id: "um5", semester: "Semester 3", title: "CI/CD Pipelines", description: "Build automated pipelines for continuous integration and delivery.", lessons: 8, duration: "4 weeks", outcomes: ["Set up Jenkins pipelines", "Use GitHub Actions", "Implement automated testing"] },
  { id: "um6", semester: "Semester 3", title: "Cloud Infrastructure & Terraform", description: "Infrastructure as Code with Terraform and cloud architecture.", lessons: 10, duration: "5 weeks", outcomes: ["Write Terraform configurations", "Manage cloud resources", "Implement state management"] },
];

// ==================== CATEGORIES ====================
export const categories = [
  { name: "Cloud", icon: "Cloud", count: 12, color: "from-blue-500 to-blue-600" },
  { name: "DevOps", icon: "Settings", count: 18, color: "from-purple-500 to-purple-600" },
  { name: "Software Engineering", icon: "Code", count: 8, color: "from-cyan-500 to-cyan-600" },
  { name: "Git & GitHub", icon: "GitBranch", count: 5, color: "from-orange-500 to-orange-600" },
  { name: "CI/CD", icon: "RefreshCw", count: 6, color: "from-green-500 to-green-600" },
  { name: "Kubernetes", icon: "Box", count: 7, color: "from-indigo-500 to-indigo-600" },
  { name: "Terraform", icon: "Layers", count: 4, color: "from-violet-500 to-violet-600" },
];
