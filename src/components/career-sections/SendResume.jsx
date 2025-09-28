import { ArrowRight, Award, Globe, Rocket, TrendingUp } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const SendResume = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-primary/10 via-chart-2/10 to-primary/10 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <Rocket className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't See a Perfect Match?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always looking for exceptional talent. If you're passionate
            about building amazing software and want to be part of our journey,
            we'd love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-chart-2"
            >
              <a
                href="mailto:careers@softwarecraft.dev"
                data-testid="final-cta-primary"
              >
                Send Us Your Resume
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact" data-testid="final-cta-secondary">
                Get in Touch
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
            <div className="text-center">
              <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">
                Remote-First
              </div>
              <div className="text-sm text-muted-foreground">
                Work From Anywhere
              </div>
            </div>
            <div className="text-center">
              <Award className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">
                Top Benefits
              </div>
              <div className="text-sm text-muted-foreground">
                Industry Leading Package
              </div>
            </div>
            <div className="text-center">
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">
                Growing Team
              </div>
              <div className="text-sm text-muted-foreground">
                Join Our Success
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SendResume;
