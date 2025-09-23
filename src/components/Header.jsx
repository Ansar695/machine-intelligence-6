import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Menu, X, Mail, Phone, Linkedin, ExternalLink } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@/components/ThemeProvider';

const navItems = [
{ name: 'Home', href: '/' },
{ name: 'Services', href: '/services' },
{ name: 'About', href: '/about' },
{ name: 'Portfolio', href: '/portfolio' },
{ name: 'Contact', href: '/contact' }];


const moreItems = [
{ name: 'Clients & Partners', href: '/clients-partners' },
{ name: 'Industries', href: '/industries' },
{ name: 'Careers', href: '/careers' }];


const socialLinks = [
{ name: 'Email', href: 'mailto:hello@softwarecraft.com', icon: Mail },
{ name: 'Phone', href: 'tel:+15551234567', icon: Phone },
{ name: 'LinkedIn', href: 'https://linkedin.com/company/softwarecraft', icon: Linkedin, external: true },
{ name: 'Upwork', href: 'https://upwork.com/agencies/softwarecraft', icon: ExternalLink, external: true }];


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname: location } = useLocation();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled ?
    'bg-background/80 backdrop-blur-md border-b border-border' :
    'bg-transparent'}`
    }>
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" data-testid="logo-link">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-chart-2 rounded-md"></div>
            <span className="text-xl font-bold text-foreground">SoftwareCraft</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) =>
            <Link
              key={item.name}
              to={item.href}
              className={`transition-colors duration-200 ${
              location === item.href ?
              'text-primary font-medium' :
              'text-muted-foreground hover:text-foreground'}`
              }
              data-testid={`nav-${item.name.toLowerCase()}`}>
              
                {item.name}
              </Link>
            )}
            
            {/* More dropdown items for larger screens */}
            {moreItems.map((item) =>
            <Link
              key={item.name}
              to={item.href}
              className={`transition-colors duration-200 ${
              location === item.href ?
              'text-primary font-medium' :
              'text-muted-foreground hover:text-foreground'}`
              }
              data-testid={`nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}>
              
                {item.name}
              </Link>
            )}
          </div>

          {/* Social Links + Theme Toggle + Mobile Menu */}
          <div className="flex items-center space-x-2">
            {/* Desktop Social Links */}
            <div className="hidden lg:flex items-center space-x-2 mr-4">
              {socialLinks.map((link) =>
              link.external ?
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-lg hover-elevate"
                data-testid={`header-social-${link.name.toLowerCase()}`}>
                
                    <link.icon className="h-4 w-4" />
                    <span className="sr-only">{link.name}</span>
                  </a> :

              <a
                key={link.name}
                href={link.href}
                className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-lg hover-elevate"
                data-testid={`header-contact-${link.name.toLowerCase()}`}>
                
                    <link.icon className="h-4 w-4" />
                    <span className="sr-only">{link.name}</span>
                  </a>

              )}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              data-testid="button-theme-toggle">
              
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden"
              data-testid="button-mobile-menu">
              
              {isMobileMenuOpen ?
              <X className="h-4 w-4" /> :

              <Menu className="h-4 w-4" />
              }
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen &&
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border">
            <div className="container mx-auto px-4 py-6">
              <div className="space-y-6">
                {/* Main Navigation */}
                <div className="space-y-3">
                  {navItems.map((item) =>
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={closeMobileMenu}
                  className={`block py-2 transition-colors duration-200 ${
                  location === item.href ?
                  'text-primary font-medium' :
                  'text-muted-foreground hover:text-foreground'}`
                  }
                  data-testid={`mobile-nav-${item.name.toLowerCase()}`}>
                  
                      {item.name}
                    </Link>
                )}
                </div>

                {/* Additional Pages */}
                <div className="space-y-3 border-t border-border pt-4">
                  {moreItems.map((item) =>
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={closeMobileMenu}
                  className={`block py-2 transition-colors duration-200 ${
                  location === item.href ?
                  'text-primary font-medium' :
                  'text-muted-foreground hover:text-foreground'}`
                  }
                  data-testid={`mobile-nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  
                      {item.name}
                    </Link>
                )}
                </div>

                {/* Social Links */}
                <div className="border-t border-border pt-4">
                  <div className="flex items-center space-x-4">
                    {socialLinks.map((link) =>
                  link.external ?
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-lg hover-elevate"
                    data-testid={`mobile-social-${link.name.toLowerCase()}`}>
                    
                          <link.icon className="h-4 w-4" />
                          <span className="sr-only">{link.name}</span>
                        </a> :

                  <a
                    key={link.name}
                    href={link.href}
                    className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-lg hover-elevate"
                    data-testid={`mobile-contact-${link.name.toLowerCase()}`}>
                    
                          <link.icon className="h-4 w-4" />
                          <span className="sr-only">{link.name}</span>
                        </a>

                  )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </header>);

}