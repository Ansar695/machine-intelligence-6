import {
  Calendar,
  Coffee,
  DollarSign,
  Globe,
  GraduationCap,
  Heart,
  Laptop,
  Lightbulb,
  Star,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

export const cultureValues = [
  {
    icon: Heart,
    title: "People First",
    description:
      "We prioritize work-life balance, mental health, and personal growth. Our team's wellbeing comes first.",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Growth",
    description:
      "We encourage experimentation, learning from failures, and continuous improvement in everything we do.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We believe diverse perspectives create better solutions. Every voice matters and contributes to our success.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Target,
    title: "Excellence",
    description:
      "We maintain high standards in our work while supporting each other to achieve ambitious goals.",
    color: "from-green-500 to-emerald-500",
  },
];

export const benefits = [
  {
    category: "Health & Wellness",
    icon: Heart,
    items: [
      "100% paid health, dental, and vision insurance",
      "Mental health support and counseling",
      "Annual wellness stipend ($1,500)",
      "Flexible working hours",
      "Unlimited paid time off",
      "4-day work week (pilot program)",
    ],
  },
  {
    category: "Professional Growth",
    icon: GraduationCap,
    items: [
      "Annual learning budget ($3,000)",
      "Conference attendance support",
      "Internal mentorship program",
      "Career development planning",
      "Technical certification reimbursement",
      "Speaker and workshop opportunities",
    ],
  },
  {
    category: "Financial Benefits",
    icon: DollarSign,
    items: [
      "Competitive salary with annual reviews",
      "Performance bonuses (up to 20%)",
      "Stock options for all employees",
      "401(k) with 6% company match",
      "Annual profit sharing",
      "Relocation assistance",
    ],
  },
  {
    category: "Work Environment",
    icon: Laptop,
    items: [
      "Remote-first culture",
      "Top-tier equipment allowance",
      "Home office setup budget ($2,000)",
      "Coworking space memberships",
      "Annual team retreats",
      "Flexible time zones",
    ],
  },
  {
    category: "Life & Family",
    icon: Users,
    items: [
      "16 weeks paid parental leave",
      "Family planning support",
      "Pet-friendly policies",
      "Sabbatical program (every 5 years)",
      "Life and disability insurance",
      "Employee assistance program",
    ],
  },
  {
    category: "Perks & Fun",
    icon: Coffee,
    items: [
      "Monthly team building activities",
      "Food and beverage allowance",
      "Gaming and entertainment budget",
      "Birthday and work anniversary gifts",
      "Employee referral bonuses",
      "Open source contribution time",
    ],
  },
];

export const openPositions = [
  {
    id: 1,
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    location: "Remote (US/EU timezones)",
    type: "Full-time",
    experience: "5+ years",
    salary: "$120k - $160k",
    description:
      "Lead development of scalable web applications using React, Node.js, and cloud technologies.",
    requirements: [
      "5+ years of full-stack development experience",
      "Expertise in React, Node.js, and TypeScript",
      "Experience with cloud platforms (AWS/Azure)",
      "Strong understanding of software architecture",
      "Excellent communication and mentoring skills",
    ],

    technologies: [
      "React",
      "Node.js",
      "TypeScript",
      "AWS",
      "PostgreSQL",
      "Docker",
    ],
    posted: "2 days ago",
    urgent: true,
  },
  {
    id: 2,
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote (Global)",
    type: "Full-time",
    experience: "3+ years",
    salary: "$100k - $140k",
    description:
      "Build and maintain CI/CD pipelines, infrastructure automation, and cloud deployments.",
    requirements: [
      "3+ years of DevOps/Infrastructure experience",
      "Proficiency with Kubernetes and Docker",
      "Experience with Infrastructure as Code (Terraform)",
      "Cloud platform expertise (AWS, Azure, or GCP)",
      "Strong scripting and automation skills",
    ],

    technologies: [
      "Kubernetes",
      "Docker",
      "Terraform",
      "AWS",
      "Jenkins",
      "Prometheus",
    ],
    posted: "1 week ago",
    urgent: false,
  },
  {
    id: 3,
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote (US timezones)",
    type: "Full-time",
    experience: "4+ years",
    salary: "$90k - $120k",
    description:
      "Create intuitive and engaging user experiences for web and mobile applications.",
    requirements: [
      "4+ years of UX/UI design experience",
      "Proficiency in Figma and design systems",
      "Experience with user research and testing",
      "Strong portfolio of digital products",
      "Understanding of front-end development",
    ],

    technologies: [
      "Figma",
      "Adobe Creative Suite",
      "Framer",
      "Principle",
      "React",
      "HTML/CSS",
    ],
    posted: "3 days ago",
    urgent: false,
  },
  {
    id: 4,
    title: "Product Manager",
    department: "Product",
    location: "San Francisco / Remote",
    type: "Full-time",
    experience: "6+ years",
    salary: "$130k - $170k",
    description:
      "Drive product strategy and execution for our growing portfolio of software solutions.",
    requirements: [
      "6+ years of product management experience",
      "Experience with B2B software products",
      "Strong analytical and data-driven mindset",
      "Excellent stakeholder management skills",
      "Technical background preferred",
    ],

    technologies: [
      "Jira",
      "Linear",
      "Figma",
      "Analytics Tools",
      "SQL",
      "API Documentation",
    ],
    posted: "5 days ago",
    urgent: false,
  },
  {
    id: 5,
    title: "Senior Mobile Developer",
    department: "Engineering",
    location: "Remote (Any timezone)",
    type: "Full-time",
    experience: "5+ years",
    salary: "$115k - $150k",
    description:
      "Develop high-quality mobile applications for iOS and Android platforms.",
    requirements: [
      "5+ years of mobile development experience",
      "Expertise in React Native or Flutter",
      "Native iOS/Android development experience",
      "App Store and Google Play deployment experience",
      "Performance optimization and testing skills",
    ],

    technologies: [
      "React Native",
      "Swift",
      "Kotlin",
      "Flutter",
      "Firebase",
      "REST APIs",
    ],
    posted: "1 week ago",
    urgent: false,
  },
  {
    id: 6,
    title: "Marketing Manager",
    department: "Marketing",
    location: "New York / Remote",
    type: "Full-time",
    experience: "4+ years",
    salary: "$80k - $110k",
    description:
      "Lead marketing initiatives to grow our brand and generate qualified leads.",
    requirements: [
      "4+ years of B2B marketing experience",
      "Experience with digital marketing channels",
      "Content creation and campaign management",
      "Analytics and performance tracking",
      "Tech industry experience preferred",
    ],

    technologies: [
      "HubSpot",
      "Google Analytics",
      "LinkedIn Ads",
      "Content Management",
      "SEO Tools",
    ],
    posted: "4 days ago",
    urgent: false,
  },
];

export const teamSpotlight = [
  {
    name: "Alex Rivera",
    role: "Senior Developer",
    quote:
      "The learning opportunities here are incredible. I've grown more in 2 years at SoftwareCraft than in my previous 5 years elsewhere.",
    avatar: "/api/placeholder/80/80",
    initials: "AR",
    tenure: "2 years",
    department: "Engineering",
  },
  {
    name: "Sarah Kim",
    role: "UX Designer",
    quote:
      "The collaborative culture and focus on user-centered design makes this the perfect place to create meaningful products.",
    avatar: "/api/placeholder/80/80",
    initials: "SK",
    tenure: "1.5 years",
    department: "Design",
  },
  {
    name: "Michael Thompson",
    role: "DevOps Engineer",
    quote:
      "Remote-first doesn't mean isolated. The team spirit and support system here is amazing. Best decision I ever made.",
    avatar: "/api/placeholder/80/80",
    initials: "MT",
    tenure: "3 years",
    department: "Infrastructure",
  },
];

export const workStats = [
  { label: "Team Members", value: "25+", icon: Users },
  { label: "Countries", value: "8", icon: Globe },
  { label: "Average Tenure", value: "3.2 years", icon: Calendar },
  { label: "Employee Rating", value: "4.9/5", icon: Star },
  { label: "Work-Life Balance", value: "9.2/10", icon: Heart },
  { label: "Growth Rate", value: "150%", icon: TrendingUp },
];

export const departments = [
  "All",
  "Engineering",
  "Design",
  "Product",
  "Infrastructure",
  "Marketing",
];
