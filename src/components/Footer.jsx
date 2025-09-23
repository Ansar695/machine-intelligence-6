import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin, ExternalLink, ArrowRight } from "lucide-react";

const navigation = {
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

const socialLinks = [
  {
    name: "Email",
    href: "mailto:hello@softwarecraft.com",
    icon: Mail,
    external: false,
  },
  {
    name: "Phone",
    href: "tel:+15551234567",
    icon: Phone,
    external: false,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/softwarecraft",
    icon: Linkedin,
    external: true,
  },
  {
    name: "Upwork",
    href: "https://upwork.com/agencies/softwarecraft",
    icon: ExternalLink,
    external: true,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info & CTA */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-chart-2 rounded-md"></div>
              <span className="text-xl font-bold text-foreground">
                SoftwareCraft
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              We transform ideas into powerful software solutions that drive
              business growth. Partner with us to accelerate your digital
              transformation journey.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-chart-2"
              data-testid="footer-cta-button"
            >
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    data-testid={`footer-nav-${item.name.toLowerCase()}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    data-testid={`footer-nav-${item.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Connect
            </h3>
            <div className="space-y-4">
              {socialLinks.map((link) => (
                <div key={link.name} className="flex items-center space-x-3">
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors duration-200 group hover-elevate"
                      data-testid={`footer-social-${link.name.toLowerCase()}`}
                    >
                      <div className="p-2 bg-muted rounded-lg transition-colors">
                        <link.icon className="h-4 w-4" />
                      </div>
                      <span className="text-sm">{link.name}</span>
                      <ExternalLink className="h-3 w-3 opacity-50" />
                    </a>
                  ) : (
                    <a
                      href={link.href}
                      className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors duration-200 group hover-elevate"
                      data-testid={`footer-contact-${link.name.toLowerCase()}`}
                    >
                      <div className="p-2 bg-muted rounded-lg transition-colors">
                        <link.icon className="h-4 w-4" />
                      </div>
                      <span className="text-sm">
                        {link.name === "Email"
                          ? "hello@softwarecraft.com"
                          : link.name === "Phone"
                          ? "+1 (555) 123-4567"
                          : link.name}
                      </span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-card-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} SoftwareCraft. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="footer-privacy-link"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="footer-terms-link"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
