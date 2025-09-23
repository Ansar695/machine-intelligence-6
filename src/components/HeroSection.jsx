import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Zap, Users } from 'lucide-react';

const heroText = "Transform Ideas Into Powerful Software";
const subText = "We craft exceptional digital experiences through innovative software solutions, from custom applications to enterprise platforms.";

export default function HeroSection() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentIndex < heroText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(heroText.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [currentIndex]);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
  { icon: Code, label: "Projects Delivered", value: "200+" },
  { icon: Users, label: "Happy Clients", value: "150+" },
  { icon: Zap, label: "Years Experience", value: "10+" }];


  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_85%)]" />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-16 h-16 bg-chart-2/20 rounded-lg blur-lg rotate-45 animate-bounce"></div>
        <div className="absolute bottom-32 left-16 w-12 h-12 bg-chart-3/20 rounded-full blur-md animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent/20 rounded-xl blur-lg rotate-12 animate-bounce delay-500"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading with Typewriter Effect */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-foreground via-primary to-chart-2 bg-clip-text text-transparent">
              {displayedText}
            </span>
            {isTyping &&
            <span className="animate-pulse text-primary">|</span>
            }
          </h1>

          {/* Subtitle with Fade-in Animation */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in opacity-0 animation-delay-1000"
          style={{ animationFillMode: 'forwards' }}>
            {subText}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in opacity-0 animation-delay-1500"
          style={{ animationFillMode: 'forwards' }}>
            <Button
              size="lg"
              className="group bg-gradient-to-r from-primary to-chart-2 hover:from-primary/90 hover:to-chart-2/90"
              onClick={() => scrollToSection('#contact')}
              data-testid="button-get-started">
              
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('#portfolio')}
              data-testid="button-view-work">
              
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in opacity-0 animation-delay-2000"
          style={{ animationFillMode: 'forwards' }}>
            {stats.map((stat, index) =>
            <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-3 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>);

}

// Add custom animations to your global CSS or tailwind config
// @keyframes fade-in {
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// }
// .animate-fade-in { animation: fade-in 1s ease-out; }
// .animation-delay-1000 { animation-delay: 1s; }
// .animation-delay-1500 { animation-delay: 1.5s; }
// .animation-delay-2000 { animation-delay: 2s; }