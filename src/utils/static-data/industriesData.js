import {
  Building,
  Calendar,
  DollarSign,
  Globe,
  GraduationCap,
  Heart,
  Shield,
  ShoppingCart,
  Star,
  TrendingUp,
  Truck,
} from "lucide-react";

export const industries = [
  {
    id: "technology",
    name: "Technology",
    icon: Building,
    description:
      "Scalable solutions for tech companies, startups, and software businesses",
    color: "from-blue-500 to-cyan-500",
    stats: { projects: "45+", avgIncrease: "300%", clients: "25+" },
    solutions: [
      "SaaS Platform Development",
      "API & Microservices Architecture",
      "DevOps & Cloud Infrastructure",
      "Data Analytics Platforms",
      "AI/ML Integration",
      "Security & Compliance Tools",
    ],

    technologies: [
      "React",
      "Node.js",
      "Python",
      "AWS",
      "Kubernetes",
      "PostgreSQL",
    ],
    caseStudy: {
      client: "TechFlow Solutions",
      challenge: "Legacy system migration and scaling for 10x user growth",
      solution:
        "Cloud-native microservices architecture with automated scaling",
      results: [
        "300% performance improvement",
        "99.9% uptime achieved",
        "50% cost reduction",
      ],
    },
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: Heart,
    description:
      "HIPAA-compliant solutions for medical practices and healthcare organizations",
    color: "from-red-500 to-pink-500",
    stats: { projects: "30+", avgIncrease: "180%", clients: "15+" },
    solutions: [
      "Electronic Health Records (EHR)",
      "Telemedicine Platforms",
      "Patient Management Systems",
      "Medical Billing & Claims",
      "Healthcare Analytics",
      "Compliance & Security",
    ],

    technologies: ["React", "Python", "FHIR", "PostgreSQL", "AWS", "Docker"],
    caseStudy: {
      client: "MedCare Group",
      challenge: "Streamline patient care and ensure HIPAA compliance",
      solution: "Integrated EHR system with telemedicine capabilities",
      results: [
        "60% efficiency increase",
        "100% HIPAA compliance",
        "25K+ patients served",
      ],
    },
  },
  {
    id: "finance",
    name: "Financial Services",
    icon: DollarSign,
    description:
      "Secure financial applications with advanced analytics and compliance",
    color: "from-green-500 to-emerald-500",
    stats: { projects: "25+", avgIncrease: "220%", clients: "12+" },
    solutions: [
      "Digital Banking Platforms",
      "Payment Processing Systems",
      "Risk Management Tools",
      "Trading & Investment Apps",
      "Compliance & Reporting",
      "Fraud Detection Systems",
    ],

    technologies: [
      "React Native",
      "Java",
      "Spring Boot",
      "Oracle",
      "AWS",
      "Redis",
    ],
    caseStudy: {
      client: "Community Bank",
      challenge: "Modernize banking experience and increase digital adoption",
      solution: "Mobile-first banking app with biometric security",
      results: ["180% user adoption", "4.8/5 app rating", "92% retention rate"],
    },
  },
  {
    id: "education",
    name: "Education",
    icon: GraduationCap,
    description:
      "Innovative learning platforms and educational management systems",
    color: "from-purple-500 to-violet-500",
    stats: { projects: "20+", avgIncrease: "250%", clients: "10+" },
    solutions: [
      "Learning Management Systems",
      "Virtual Classroom Platforms",
      "Student Information Systems",
      "Online Assessment Tools",
      "Educational Analytics",
      "Mobile Learning Apps",
    ],

    technologies: [
      "Vue.js",
      "Node.js",
      "MongoDB",
      "Socket.io",
      "AWS",
      "WebRTC",
    ],
    caseStudy: {
      client: "University of Innovation",
      challenge: "Enhance remote learning and student engagement",
      solution: "Comprehensive LMS with virtual classroom integration",
      results: [
        "75% engagement increase",
        "89% completion rate",
        "15K+ students",
      ],
    },
  },
  {
    id: "retail",
    name: "Retail & E-commerce",
    icon: ShoppingCart,
    description: "Modern e-commerce platforms and retail management solutions",
    color: "from-orange-500 to-yellow-500",
    stats: { projects: "35+", avgIncrease: "280%", clients: "20+" },
    solutions: [
      "E-commerce Platforms",
      "Inventory Management",
      "POS & Payment Systems",
      "Customer Analytics",
      "Supply Chain Integration",
      "Mobile Shopping Apps",
    ],

    technologies: [
      "React",
      "Node.js",
      "Shopify API",
      "Stripe",
      "PostgreSQL",
      "Redis",
    ],
    caseStudy: {
      client: "RetailMax Inc.",
      challenge: "Scale online operations and improve customer experience",
      solution: "Multi-vendor e-commerce platform with AI recommendations",
      results: ["300% sales increase", "50% faster load times", "98% uptime"],
    },
  },
  {
    id: "logistics",
    name: "Logistics & Supply Chain",
    icon: Truck,
    description:
      "End-to-end supply chain visibility and logistics optimization",
    color: "from-indigo-500 to-blue-500",
    stats: { projects: "15+", avgIncrease: "200%", clients: "8+" },
    solutions: [
      "Supply Chain Management",
      "Fleet Tracking Systems",
      "Warehouse Management",
      "Route Optimization",
      "Shipping & Delivery",
      "Predictive Analytics",
    ],

    technologies: [
      "Angular",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Kafka",
      "Azure",
    ],
    caseStudy: {
      client: "GlobalLogistics Ltd.",
      challenge:
        "Real-time visibility and cost optimization across supply chain",
      solution: "Integrated platform with predictive analytics and tracking",
      results: [
        "25% cost reduction",
        "98% on-time delivery",
        "100% visibility",
      ],
    },
  },
];

export const overallStats = [
  { label: "Industries Served", value: "12+", icon: Building },
  { label: "Industry Expertise", value: "6+ years", icon: Calendar },
  { label: "Avg ROI Increase", value: "240%", icon: TrendingUp },
  { label: "Compliance Rate", value: "100%", icon: Shield },
  { label: "Global Reach", value: "15+ countries", icon: Globe },
  { label: "Client Satisfaction", value: "4.9/5", icon: Star },
];

export const certifications = [
  { name: "HIPAA Compliance", industries: ["Healthcare"] },
  { name: "SOC 2 Type II", industries: ["Finance", "Healthcare"] },
  { name: "PCI DSS", industries: ["Retail", "Finance"] },
  { name: "GDPR Compliance", industries: ["All Industries"] },
  { name: "ISO 27001", industries: ["Technology", "Finance"] },
  { name: "FedRAMP", industries: ["Government", "Healthcare"] },
];
