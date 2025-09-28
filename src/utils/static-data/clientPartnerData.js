import {
  Building,
  Calendar,
  Crown,
  Handshake,
  Heart,
  Medal,
  Shield,
  Star,
  Target,
} from "lucide-react";

export const clientLogos = [
  { name: "TechCorp", logo: "/api/placeholder/120/60", industry: "Technology" },
  {
    name: "HealthPlus",
    logo: "/api/placeholder/120/60",
    industry: "Healthcare",
  },
  { name: "FinanceFlow", logo: "/api/placeholder/120/60", industry: "Finance" },
  { name: "EduTech", logo: "/api/placeholder/120/60", industry: "Education" },
  { name: "RetailMax", logo: "/api/placeholder/120/60", industry: "Retail" },
  { name: "LogiTrans", logo: "/api/placeholder/120/60", industry: "Logistics" },
  { name: "GreenEnergy", logo: "/api/placeholder/120/60", industry: "Energy" },
  { name: "CloudSystems", logo: "/api/placeholder/120/60", industry: "Cloud" },
  { name: "DataViz", logo: "/api/placeholder/120/60", industry: "Analytics" },
  { name: "MobileFirst", logo: "/api/placeholder/120/60", industry: "Mobile" },
  {
    name: "SecurityPro",
    logo: "/api/placeholder/120/60",
    industry: "Security",
  },
  {
    name: "AutoMotive",
    logo: "/api/placeholder/120/60",
    industry: "Automotive",
  },
];

export const testimonials = [
  {
    id: 1,
    quote:
      "SoftwareCraft delivered beyond our expectations. Their expertise in e-commerce development transformed our business, resulting in a 300% increase in online sales within 6 months.",
    author: "Sarah Johnson",
    title: "CEO",
    company: "RetailMax Inc.",
    avatar: "/api/placeholder/80/80",
    initials: "SJ",
    rating: 5,
    project: "E-commerce Platform",
    results: ["300% sales increase", "50% faster page load", "98% uptime"],
    industry: "Retail",
  },
  {
    id: 2,
    quote:
      "The team's attention to HIPAA compliance and security standards was exceptional. They built a robust medical records system that streamlined our operations and improved patient care.",
    author: "Dr. Michael Chen",
    title: "CTO",
    company: "HealthPlus Medical Group",
    avatar: "/api/placeholder/80/80",
    initials: "MC",
    rating: 5,
    project: "Healthcare Management System",
    results: [
      "60% efficiency gain",
      "100% HIPAA compliance",
      "25K+ patients served",
    ],
    industry: "Healthcare",
  },
  {
    id: 3,
    quote:
      "Outstanding mobile development expertise. Our banking app now has industry-leading ratings and significantly improved customer engagement. The team was professional and delivered on time.",
    author: "Lisa Rodriguez",
    title: "VP of Digital Products",
    company: "Community Bank",
    avatar: "/api/placeholder/80/80",
    initials: "LR",
    rating: 5,
    project: "Mobile Banking App",
    results: ["4.8/5 app rating", "180% user adoption", "92% retention rate"],
    industry: "Finance",
  },
  {
    id: 4,
    quote:
      "SoftwareCraft revolutionized our learning management system. Student engagement increased dramatically, and our course completion rates are now among the highest in the industry.",
    author: "Prof. David Kim",
    title: "Director of Technology",
    company: "University of Innovation",
    avatar: "/api/placeholder/80/80",
    initials: "DK",
    rating: 5,
    project: "Learning Management System",
    results: [
      "75% engagement increase",
      "89% completion rate",
      "15K+ students",
    ],
    industry: "Education",
  },
  {
    id: 5,
    quote:
      "Their supply chain solution provided real-time visibility across our entire operation. We've reduced costs by 25% while improving delivery times. Exceptional work from start to finish.",
    author: "James Wilson",
    title: "Operations Director",
    company: "GlobalLogistics Ltd.",
    avatar: "/api/placeholder/80/80",
    initials: "JW",
    rating: 5,
    project: "Supply Chain Platform",
    results: ["25% cost reduction", "98% on-time delivery", "100% visibility"],
    industry: "Logistics",
  },
  {
    id: 6,
    quote:
      "The social media management platform they built saved us 70% of our time while increasing client engagement by 85%. The ROI has been incredible.",
    author: "Emma Thompson",
    title: "Creative Director",
    company: "Digital Marketing Pro",
    avatar: "/api/placeholder/80/80",
    initials: "ET",
    rating: 5,
    project: "Social Media Platform",
    results: ["70% time saved", "85% engagement boost", "500+ clients"],
    industry: "Marketing",
  },
];

export const partnershipTiers = [
  {
    tier: "Strategic Partner",
    icon: Crown,
    description:
      "Comprehensive long-term partnership with dedicated resources and priority support",
    benefits: [
      "Dedicated development team",
      "24/7 priority support",
      "Custom SLA agreements",
      "Quarterly business reviews",
      "Technology roadmap planning",
      "Executive-level partnership",
    ],

    requirements: [
      "$500K+ annual engagement",
      "Multi-year commitment",
      "Strategic alignment",
    ],

    clients: 5,
    color: "from-yellow-500 to-orange-500",
  },
  {
    tier: "Premium Partner",
    icon: Medal,
    description:
      "Enhanced partnership with priority access to resources and specialized support",
    benefits: [
      "Priority project scheduling",
      "Enhanced support SLA",
      "Dedicated account manager",
      "Monthly progress reviews",
      "Early access to new services",
      "Preferred pricing structure",
    ],

    requirements: [
      "$100K+ annual engagement",
      "12+ month commitment",
      "Collaborative approach",
    ],

    clients: 25,
    color: "from-blue-500 to-purple-500",
  },
  {
    tier: "Preferred Partner",
    icon: Shield,
    description:
      "Standard partnership with reliable support and collaborative project management",
    benefits: [
      "Regular project updates",
      "Standard support SLA",
      "Project management tools",
      "Quality assurance process",
      "Documentation package",
      "Ongoing maintenance",
    ],

    requirements: [
      "$25K+ project value",
      "Professional engagement",
      "Clear project scope",
    ],

    clients: 120,
    color: "from-green-500 to-teal-500",
  },
];

export const partnershipStats = [
  { label: "Active Partnerships", value: "150+", icon: Handshake },
  { label: "Partner Retention", value: "95%", icon: Heart },
  { label: "Avg Partnership Length", value: "3.2 years", icon: Calendar },
  { label: "Partner Satisfaction", value: "4.9/5", icon: Star },
  { label: "Joint Projects", value: "200+", icon: Building },
  { label: "Success Rate", value: "98%", icon: Target },
];

export const industries = [
  "Technology",
  "Healthcare",
  "Finance",
  "Education",
  "Retail",
  "Logistics",
  "Energy",
  "Manufacturing",
  "Real Estate",
  "Entertainment",
  "Non-Profit",
  "Government",
  "Marketing",
];
