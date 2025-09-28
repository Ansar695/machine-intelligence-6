import { Linkedin, Mail, MessageSquare, Phone } from "lucide-react";

export const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Get in touch via email for detailed discussions",
    contact: "hello@softwarecraft.dev",
    action: "mailto:hello@softwarecraft.dev",
    responseTime: "24 hours",
    primary: true,
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our team",
    contact: "+1 (555) 123-4567",
    action: "tel:+15551234567",
    responseTime: "Immediate",
    primary: false,
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Real-time chat support during business hours",
    contact: "Available 9 AM - 6 PM EST",
    action: "#",
    responseTime: "< 5 minutes",
    primary: false,
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    description: "Connect with us professionally",
    contact: "linkedin.com/company/softwarecraft",
    action: "https://linkedin.com/company/softwarecraft",
    responseTime: "48 hours",
    primary: false,
  },
];

export const offices = [
  {
    city: "New York",
    address: "123 Tech Street, Suite 100\nNew York, NY 10001",
    phone: "+1 (555) 123-4567",
    email: "ny@softwarecraft.dev",
    timezone: "EST",
    hours: "9 AM - 6 PM",
  },
  {
    city: "San Francisco",
    address: "456 Innovation Ave, Floor 5\nSan Francisco, CA 94105",
    phone: "+1 (555) 987-6543",
    email: "sf@softwarecraft.dev",
    timezone: "PST",
    hours: "9 AM - 6 PM",
  },
  {
    city: "Remote",
    address: "Global team available\nacross all time zones",
    phone: "+1 (555) 123-4567",
    email: "remote@softwarecraft.dev",
    timezone: "UTC",
    hours: "24/7 Support",
  },
];

export const projectTypes = [
  "Web Development",
  "Mobile App Development",
  "E-commerce Platform",
  "Enterprise Software",
  "API Development",
  "Cloud Migration",
  "Data Analytics",
  "Custom Integration",
  "Consulting",
  "Other",
];

export const budgetRanges = [
  "Under $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000 - $250,000",
  "$250,000+",
];

export const faqs = [
  {
    question: "How quickly can you start my project?",
    answer:
      "We typically begin new projects within 1-2 weeks of contract signing, depending on our current capacity and project complexity.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes, we offer various support packages including maintenance, updates, monitoring, and feature enhancements to ensure your solution continues to meet your needs.",
  },
  {
    question: "Can you work with our existing team?",
    answer:
      "Absolutely! We frequently collaborate with internal teams, providing additional expertise and resources while integrating with your existing workflows and processes.",
  },
  {
    question: "What's your payment structure?",
    answer:
      "We typically work with milestone-based payments aligned with project deliverables. For larger projects, we offer flexible payment terms to accommodate your cash flow requirements.",
  },
];
