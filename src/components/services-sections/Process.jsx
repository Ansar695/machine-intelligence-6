import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";
import { processSteps } from "@/utils/static-data/servicesData";

export default function Process() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Development Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We follow a proven methodology to ensure successful project delivery on time and within budget.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          {processSteps.map((step, index) => (
            <div key={index} className="flex gap-8 mb-12 last:mb-0" data-testid={`process-step-${index}`}>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm mb-4">
                  {step.step}
                </div>
                {index < processSteps.length - 1 && <div className="w-0.5 h-24 bg-border"></div>}
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <h3 className="text-xl font-semibold text-card-foreground mb-2 md:mb-0">{step.title}</h3>
                  <Badge variant="outline" className="w-fit">
                    <Clock className="w-3 h-3 mr-1" />
                    {step.duration}
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">{step.description}</p>
                <div>
                  <h4 className="text-sm font-medium text-card-foreground mb-2">Deliverables:</h4>
                  <div className="flex flex-wrap gap-2">
                    {step.deliverables.map((deliverable) => (
                      <Badge key={deliverable} variant="secondary" className="text-xs">
                        {deliverable}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


