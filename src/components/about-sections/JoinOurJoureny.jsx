import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";

export default function JoinOurJoureny() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-primary/10 via-chart-2/10 to-primary/10 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Journey?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're looking for a development partner or want to join our team, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-chart-2">
              <Link to="/contact" data-testid="final-cta-client">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/careers" data-testid="final-cta-careers">
                Explore Careers
              </Link>
            </Button>
          </div>
          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              <MapPin className="inline h-4 w-4 mr-1" />
              Remote-first company with team members across 5 continents
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


