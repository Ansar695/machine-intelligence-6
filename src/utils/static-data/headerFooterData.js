import { ExternalLink, Linkedin, Mail, Phone } from "lucide-react";

export const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/our-services" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ],

  company: [
    { name: "Clients & Partners", href: "/clients-partners" },
    { name: "Industries", href: "/industries" },
    { name: "Careers", href: "/careers" },
  ],
};

export const socialLinks = [
  {
    name: "Email",
    href: "mailto:info@mi6.global",
    icon: Mail,
    external: false,
  },
  {
    name: "Phone",
    href: "tel:+923330000688",
    icon: Phone,
    external: false,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/machineintelligence6/",
    icon: Linkedin,
    external: true,
  },
  {
    name: "Upwork",
    href: "https://www.upwork.com/agencies/mi6a/",
    icon: ExternalLink,
    external: true,
  },
];
