import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { services } from "@/utils/static-data/servicesData";

export default function ServicesGrid() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Service Offerings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover-elevate h-full">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-primary">{service.pricing}</div>
                    <div className="text-xs text-muted-foreground">{service.timeline}</div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                <div>
                  <h4 className="text-sm font-medium text-card-foreground mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-card-foreground mb-2">Key Features</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <CheckCircle className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button asChild className="w-full" variant="outline">
                  <Link to="/contact" data-testid={`service-cta-${index}`}>
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


