import { ArrowRight, Award, Building, CheckCircle, Users } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const TransformBusiness = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-primary/10 via-chart-2/10 to-primary/10 rounded-2xl p-12 md:p-16 text-center max-w-5xl mx-auto">
          <Building className="h-16 w-16 text-primary mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Let's discuss your project and create a custom solution that
            delivers measurable results and exceeds your expectations.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-chart-2 text-lg px-8 py-6"
            >
              <Link to="/contact" data-testid="final-cta-primary">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6"
            >
              <Link to="/about" data-testid="final-cta-secondary">
                Learn About Us
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-border">
            <div className="text-center">
              <CheckCircle className="h-10 w-10 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground mb-1">98%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <Users className="h-10 w-10 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground mb-1">24h</div>
              <div className="text-muted-foreground">Response Time</div>
            </div>
            <div className="text-center">
              <Award className="h-10 w-10 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground mb-1">6+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformBusiness;
