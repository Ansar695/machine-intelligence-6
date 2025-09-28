import { ArrowRight, Building } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const IndustriesHero = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_85%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-6">
            <Building className="h-4 w-4" />
            Industry Solutions
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-foreground via-primary to-chart-2 bg-clip-text text-transparent">
              Tailored Solutions for Every Industry
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            We understand that every industry has unique challenges and
            requirements. Our expert team delivers specialized software
            solutions that drive growth and innovation across diverse sectors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-chart-2"
            >
              <Link to="/contact" data-testid="hero-cta-primary">
                Discuss Your Needs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/portfolio" data-testid="hero-cta-secondary">
                View Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesHero;
