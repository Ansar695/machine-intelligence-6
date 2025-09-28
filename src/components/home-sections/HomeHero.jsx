import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { stats } from "@/utils/static-data/homeData";
import { Zap, ArrowRight } from "lucide-react";

const HomeHero = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_85%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Zap className="h-4 w-4" />
            Trusted by 150+ Companies Worldwide
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-foreground via-primary to-chart-2 bg-clip-text text-transparent">
              Build Software That Scales Your Business
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            We're a team of passionate developers, designers, and strategists
            who craft custom software solutions that drive growth, efficiency,
            and digital transformation.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-chart-2 text-lg px-8 py-6"
            >
              <Link to="/contact" data-testid="hero-cta-primary">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6"
            >
              <Link to="/portfolio" data-testid="hero-cta-secondary">
                View Our Work
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
                data-testid={`hero-stat-${index}`}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
