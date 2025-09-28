import {
  Award,
  CheckCircle,
  Star,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

export const overallMetrics = [
  { label: "Projects Delivered", value: "200+", icon: Target },
  { label: "Happy Clients", value: "150+", icon: Users },
  { label: "Success Rate", value: "98%", icon: TrendingUp },
  { label: "Avg. ROI Increase", value: "180%", icon: Award },
  { label: "Code Quality Score", value: "9.8/10", icon: Star },
  { label: "On-Time Delivery", value: "95%", icon: CheckCircle },
];

export const projects = [
  {
    id: 1,
    title: "EcomPro - Enterprise E-commerce Platform",
    category: "E-commerce",
    type: "Web Application",
    client: "RetailCorp Inc.",
    description:
      "A comprehensive e-commerce platform with advanced inventory management, multi-vendor support, and AI-powered recommendations.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS", "Stripe"],
    duration: "6 months",
    team: "8 developers",
    results: {
      revenue: "+250%",
      users: "50K+",
      performance: "98%",
      satisfaction: "4.9/5",
    },
    features: [
      "Multi-vendor marketplace",
      "AI-powered recommendations",
      "Real-time inventory tracking",
      "Advanced analytics dashboard",
      "Mobile-responsive design",
      "Secure payment processing",
    ],

    liveUrl: "#",
    githubUrl: "#",
    caseStudy:
      "Increased client revenue by 250% through improved user experience and conversion optimization.",
  },
  {
    id: 2,
    title: "HealthTracker - Medical Records System",
    category: "Healthcare",
    type: "Web Application",
    client: "MedGroup Solutions",
    description:
      "HIPAA-compliant medical records management system with telemedicine integration and patient portal.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Python", "FastAPI", "PostgreSQL", "Docker", "AWS"],
    duration: "8 months",
    team: "12 developers",
    results: {
      efficiency: "+60%",
      patients: "25K+",
      uptime: "99.9%",
      compliance: "100%",
    },
    features: [
      "HIPAA-compliant architecture",
      "Telemedicine integration",
      "Patient portal & scheduling",
      "Electronic prescriptions",
      "Insurance claim processing",
      "Real-time notifications",
    ],

    liveUrl: "#",
    githubUrl: "#",
    caseStudy:
      "Improved operational efficiency by 60% while maintaining 100% HIPAA compliance standards.",
  },
  {
    id: 3,
    title: "FinanceFlow - Digital Banking App",
    category: "FinTech",
    type: "Mobile Application",
    client: "Community Bank",
    description:
      "Modern mobile banking application with biometric authentication, budgeting tools, and investment tracking.",
    image: "/api/placeholder/600/400",
    technologies: [
      "React Native",
      "Node.js",
      "MongoDB",
      "Firebase",
      "Plaid API",
    ],
    duration: "10 months",
    team: "10 developers",
    results: {
      adoption: "+180%",
      transactions: "1M+",
      rating: "4.8/5",
      retention: "92%",
    },
    features: [
      "Biometric authentication",
      "Real-time transaction tracking",
      "Budgeting & goal setting",
      "Investment portfolio tracking",
      "Bill pay & transfers",
      "Fraud detection alerts",
    ],

    liveUrl: "#",
    githubUrl: "#",
    caseStudy:
      "Achieved 180% increase in mobile adoption with industry-leading 4.8/5 app store rating.",
  },
  {
    id: 4,
    title: "EduConnect - Learning Management System",
    category: "Education",
    type: "Web Application",
    client: "University of Innovation",
    description:
      "Comprehensive LMS with virtual classroom integration, assignment tracking, and student analytics.",
    image: "/api/placeholder/600/400",
    technologies: [
      "Vue.js",
      "Node.js",
      "MySQL",
      "Socket.io",
      "AWS",
      "Zoom API",
    ],
    duration: "5 months",
    team: "6 developers",
    results: {
      students: "15K+",
      engagement: "+75%",
      completion: "89%",
      satisfaction: "4.7/5",
    },
    features: [
      "Virtual classroom integration",
      "Assignment & grade tracking",
      "Student analytics dashboard",
      "Discussion forums",
      "Mobile learning app",
      "Plagiarism detection",
    ],

    liveUrl: "#",
    githubUrl: "#",
    caseStudy:
      "Increased student engagement by 75% with 89% course completion rate across 15K+ students.",
  },
  {
    id: 5,
    title: "LogiTrack - Supply Chain Management",
    category: "Logistics",
    type: "Web Application",
    client: "GlobalLogistics Ltd.",
    description:
      "End-to-end supply chain visibility platform with real-time tracking and predictive analytics.",
    image: "/api/placeholder/600/400",
    technologies: [
      "Angular",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Kafka",
      "Azure",
    ],
    duration: "12 months",
    team: "15 developers",
    results: {
      efficiency: "+40%",
      visibility: "100%",
      costs: "-25%",
      delivery: "98%",
    },
    features: [
      "Real-time shipment tracking",
      "Predictive analytics",
      "Inventory optimization",
      "Supplier management",
      "Automated reporting",
      "Mobile driver app",
    ],

    liveUrl: "#",
    githubUrl: "#",
    caseStudy:
      "Reduced operational costs by 25% while achieving 98% on-time delivery rate.",
  },
  {
    id: 6,
    title: "SocialBuzz - Content Management Platform",
    category: "Social Media",
    type: "Web Application",
    client: "Digital Marketing Agency",
    description:
      "Multi-platform content scheduling and analytics tool for social media management.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Node.js", "MongoDB", "Redis", "Bull Queue", "AWS"],
    duration: "4 months",
    team: "5 developers",
    results: {
      clients: "500+",
      posts: "100K+",
      engagement: "+85%",
      time_saved: "70%",
    },
    features: [
      "Multi-platform scheduling",
      "Content calendar view",
      "Analytics & reporting",
      "Team collaboration tools",
      "AI content suggestions",
      "Brand management",
    ],

    liveUrl: "#",
    githubUrl: "#",
    caseStudy:
      "Saved clients 70% time in social media management while increasing engagement by 85%.",
  },
];

export const categories = [
  "All",
  "E-commerce",
  "Healthcare",
  "FinTech",
  "Education",
  "Logistics",
  "Social Media",
];
