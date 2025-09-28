import {
  Code2,
  Smartphone,
  Globe,
  Database,
  Cloud,
  Cog,
  ChevronDown,
  ChevronUp,
  Users,
  Clock,
  Star,
  Target
} from "lucide-react";

export const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Tailored applications built from scratch to meet your unique business requirements and workflows.",
    technologies: [
      "React",
      "Node.js",
      "Python",
      "Java",
      "PostgreSQL",
      "MongoDB"
    ],
    features: [
      "Scalable Architecture",
      "API Integration",
      "Real-time Updates",
      "Security First",
      "Cloud Native",
      "Microservices"
    ],
    pricing: "Starting from $25,000",
    timeline: "8-16 weeks"
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications that deliver exceptional user experiences.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Node.js",
      "GraphQL"
    ],
    features: [
      "Mobile Responsive",
      "SEO Optimized",
      "Performance Focused",
      "Modern UI/UX",
      "PWA Support",
      "Analytics Integration"
    ],
    pricing: "Starting from $10,000",
    timeline: "4-8 weeks"
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android platforms.",
    technologies: [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "Firebase",
      "AWS"
    ],
    features: [
      "Cross Platform",
      "Native Performance",
      "App Store Ready",
      "Push Notifications",
      "Offline Support",
      "Social Integration"
    ],
    pricing: "Starting from $20,000",
    timeline: "10-14 weeks"
  },
  {
    icon: Database,
    title: "Data & Analytics",
    description:
      "Transform your data into actionable insights with advanced analytics and visualization tools.",
    technologies: [
      "Python",
      "SQL",
      "MongoDB",
      "AWS",
      "D3.js",
      "TensorFlow"
    ],
    features: [
      "Data Visualization",
      "Real-time Analytics",
      "Machine Learning",
      "Business Intelligence",
      "ETL Pipelines",
      "Custom Dashboards"
    ],
    pricing: "Starting from $15,000",
    timeline: "6-10 weeks"
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and migration services for modern business operations.",
    technologies: [
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Jenkins"
    ],
    features: [
      "Auto Scaling",
      "High Availability",
      "Cost Optimization",
      "Security Compliance",
      "DevOps Integration",
      "24/7 Monitoring"
    ],
    pricing: "Starting from $12,000",
    timeline: "4-12 weeks"
  },
  {
    icon: Cog,
    title: "API Development",
    description:
      "Robust and secure APIs that connect your systems and enable seamless data exchange.",
    technologies: [
      "REST",
      "GraphQL",
      "Node.js",
      "FastAPI",
      "OAuth",
      "Redis"
    ],
    features: [
      "RESTful Design",
      "GraphQL Support",
      "Authentication",
      "Rate Limiting",
      "Documentation",
      "Testing Suite"
    ],
    pricing: "Starting from $8,000",
    timeline: "3-6 weeks"
  }
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery & Planning",
    description:
      "We dive deep into your requirements, analyze your business goals, and create a comprehensive project roadmap.",
    duration: "1-2 weeks",
    deliverables: [
      "Requirements Document",
      "Technical Specification",
      "Project Timeline",
      "Resource Planning"
    ]
  },
  {
    step: "02",
    title: "Design & Architecture",
    description:
      "Our team designs the user experience and technical architecture to ensure optimal performance and scalability.",
    duration: "1-3 weeks",
    deliverables: [
      "UI/UX Mockups",
      "System Architecture",
      "Database Design",
      "API Specifications"
    ]
  },
  {
    step: "03",
    title: "Development & Testing",
    description:
      "We build your solution using agile methodologies with continuous testing and quality assurance.",
    duration: "4-12 weeks",
    deliverables: [
      "Working Software",
      "Test Coverage Reports",
      "Code Documentation",
      "Weekly Demos"
    ]
  },
  {
    step: "04",
    title: "Deployment & Launch",
    description:
      "We deploy your solution to production with monitoring, optimization, and launch support.",
    duration: "1-2 weeks",
    deliverables: [
      "Live Application",
      "Deployment Guide",
      "Monitoring Setup",
      "User Training"
    ]
  },
  {
    step: "05",
    title: "Support & Maintenance",
    description:
      "Ongoing support, updates, and enhancements to ensure your solution continues to meet your evolving needs.",
    duration: "Ongoing",
    deliverables: [
      "24/7 Support",
      "Regular Updates",
      "Performance Reports",
      "Feature Enhancements"
    ]
  }
];

export const techStack = {
  frontend: [
    "React",
    "Vue.js",
    "Angular",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Material-UI",
    "React Native",
    "Flutter"
  ],
  backend: [
    "Node.js",
    "Python",
    "Java",
    "C#",
    "PHP",
    "Ruby",
    "Express.js",
    "FastAPI",
    "Spring Boot"
  ],
  databases: [
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "Redis",
    "Elasticsearch",
    "DynamoDB",
    "Neo4j",
    "InfluxDB"
  ],
  cloud: [
    "AWS",
    "Azure",
    "Google Cloud",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Jenkins",
    "GitHub Actions"
  ],
  tools: [
    "Git",
    "Jira",
    "Figma",
    "Postman",
    "VS Code",
    "Slack",
    "Zoom",
    "Linear",
    "Notion"
  ]
};

export const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity and scope. A simple website might take 4-6 weeks, while a complex enterprise application could take 3-6 months. We provide detailed timelines during our discovery phase."
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes, we offer comprehensive support packages including bug fixes, updates, monitoring, and feature enhancements. Our support plans range from basic maintenance to full managed services."
  },
  {
    question: "Can you work with our existing team?",
    answer:
      "Absolutely! We often collaborate with internal teams, providing additional expertise and resources. We can integrate with your existing workflows and development processes."
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "We work with modern, proven technologies including React, Node.js, Python, AWS, and more. We choose the best technology stack based on your specific requirements and long-term goals."
  },
  {
    question: "How do you ensure code quality?",
    answer:
      "We follow strict code review processes, automated testing, continuous integration, and industry best practices. All code is thoroughly tested and documented before deployment."
  },
  {
    question: "What's included in your pricing?",
    answer:
      "Our pricing includes development, testing, documentation, deployment, and initial support. We provide transparent, fixed-price quotes with no hidden costs."
  }
];


