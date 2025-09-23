import {
  Target,
  Users,
  Heart,
  Lightbulb,
  Shield,
  Rocket,
  Award,
  Globe,
  Calendar,
  Building,
  Trophy,
  Star,
  Zap,
  CheckCircle
} from "lucide-react";

export const mission = {
  title: "Our Mission",
  description:
    "To empower businesses worldwide with innovative software solutions that drive growth, efficiency, and digital transformation.",
  vision:
    "To be the leading software development partner that transforms ideas into powerful digital experiences.",
  values: [
    {
      icon: Heart,
      title: "Client-First Approach",
      description:
        "Every decision we make prioritizes our clients' success and satisfaction.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We embrace cutting-edge technologies and creative solutions to solve complex challenges.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We believe in the power of teamwork, both within our team and with our clients.",
    },
    {
      icon: Shield,
      title: "Quality & Security",
      description:
        "We maintain the highest standards of code quality and security in everything we build.",
    },
  ],
};

export const timeline = [
  { year: "2019", title: "Company Founded", description: "Started as a small team with a vision to create exceptional software solutions for growing businesses.", milestone: "Founded" },
  { year: "2020", title: "First Major Client", description: "Landed our first enterprise client and delivered a scalable e-commerce platform that increased their revenue by 300%.", milestone: "Growth" },
  { year: "2021", title: "Team Expansion", description: "Grew our team to 15+ experienced developers and designers, enabling us to take on larger, more complex projects.", milestone: "Scale" },
  { year: "2022", title: "International Reach", description: "Expanded our client base globally, working with companies across North America, Europe, and Asia.", milestone: "Global" },
  { year: "2023", title: "Technology Leadership", description: "Became early adopters of AI/ML integration in software development, helping clients leverage cutting-edge technology.", milestone: "Innovation" },
  { year: "2024", title: "Award Recognition", description: "Received multiple industry awards for excellence in software development and client satisfaction.", milestone: "Recognition" },
  { year: "2025", title: "Future Vision", description: "Continuing to innovate and expand our services to help more businesses succeed in the digital economy.", milestone: "Future" },
];

export const team = [
  { name: "Alex Johnson", role: "CEO & Founder", bio: "15+ years in software development with expertise in scaling tech teams and delivering enterprise solutions.", avatar: "/api/placeholder/120/120", initials: "AJ", linkedin: "#", github: "#" },
  { name: "Sarah Chen", role: "CTO", bio: "Former Google engineer with deep expertise in cloud architecture and system design.", avatar: "/api/placeholder/120/120", initials: "SC", linkedin: "#", github: "#" },
  { name: "Michael Rodriguez", role: "Head of Design", bio: "Award-winning UX designer focused on creating intuitive and accessible user experiences.", avatar: "/api/placeholder/120/120", initials: "MR", linkedin: "#", github: "#" },
  { name: "Emily Watson", role: "VP of Engineering", bio: "Expert in agile development methodologies and building high-performance development teams.", avatar: "/api/placeholder/120/120", initials: "EW", linkedin: "#", github: "#" },
];

export const certifications = [
  { title: "AWS Advanced Consulting Partner", issuer: "Amazon Web Services", year: "2024", description: "Recognized expertise in cloud architecture and migration services", icon: Award },
  { title: "Google Cloud Partner", issuer: "Google Cloud", year: "2023", description: "Certified expertise in Google Cloud Platform solutions", icon: Trophy },
  { title: "Microsoft Gold Partner", issuer: "Microsoft", year: "2023", description: "Highest level of Microsoft partnership for Azure and development services", icon: Star },
  { title: "ISO 27001 Certified", issuer: "International Organization for Standardization", year: "2022", description: "Information security management system certification", icon: Shield },
  { title: "SOC 2 Type II Compliant", issuer: "AICPA", year: "2024", description: "Security, availability, and confidentiality compliance certification", icon: CheckCircle },
];

export const stats = [
  { label: "Years of Experience", value: "6+", icon: Calendar },
  { label: "Projects Delivered", value: "200+", icon: Rocket },
  { label: "Happy Clients", value: "150+", icon: Users },
  { label: "Team Members", value: "25+", icon: Building },
  { label: "Countries Served", value: "15+", icon: Globe },
  { label: "Success Rate", value: "98%", icon: Target },
];

export const culture = [
  { title: "Remote-First Culture", description: "We embrace flexible working arrangements that prioritize work-life balance and productivity.", icon: Globe },
  { title: "Continuous Learning", description: "Investment in team growth through training, conferences, and certification programs.", icon: Lightbulb },
  { title: "Innovation Time", description: "20% time dedicated to exploring new technologies and contributing to open-source projects.", icon: Zap },
  { title: "Diverse & Inclusive", description: "Building a team that represents diverse backgrounds, perspectives, and experiences.", icon: Users },
];


