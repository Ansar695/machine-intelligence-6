import {
  Award,
  TrendingUp,
  Users,
  Target,
  Globe,
  Smartphone,
  Cloud,
  Heart,
  Lightbulb,
  Shield,
} from "lucide-react";

export const stats = [
  { label: "Projects Delivered", value: "200+", icon: Target },
  { label: "Happy Clients", value: "150+", icon: Users },
  { label: "Success Rate", value: "98%", icon: TrendingUp },
  { label: "Years Experience", value: "6+", icon: Award },
];

export const featuredServices = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive websites and web applications",
    features: ["React & Next.js", "Mobile Responsive", "SEO Optimized"],
    href: "/our-services",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications",
    features: ["iOS & Android", "React Native", "App Store Ready"],
    href: "/our-services",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration",
    features: ["AWS & Azure", "Auto Scaling", "99.9% Uptime"],
    href: "/our-services",
  },
];

export const companyValues = [
  {
    icon: Heart,
    title: "Client-First",
    description: "Your success is our priority",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Cutting-edge solutions",
  },
  {
    icon: Shield,
    title: "Quality",
    description: "Security & excellence",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Teamwork & transparency",
  },
];

export const testimonials = [
  {
    quote:
      "SoftwareCraft transformed our business with their innovative e-commerce solution. Revenue increased by 250% in just 6 months.",
    author: "Sarah Johnson",
    title: "CEO, RetailCorp Inc.",
    avatar: "/api/placeholder/60/60",
    initials: "SJ",
  },
  {
    quote:
      "Outstanding mobile development expertise. Our banking app now has industry-leading ratings and significantly improved customer engagement.",
    author: "Lisa Rodriguez",
    title: "VP Product, Community Bank",
    avatar: "/api/placeholder/60/60",
    initials: "LR",
  },
  {
    quote:
      "The quality of their code and attention to security standards is exceptional. Perfect for our healthcare compliance needs.",
    author: "Dr. Michael Chen",
    title: "CTO, MedGroup Solutions",
    avatar: "/api/placeholder/60/60",
    initials: "MC",
  },
];
