import { ArrowRight, CheckCircle } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { featuredServices } from "@/utils/static-data/homeData";

const FeaturedServices = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What We Build</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to deployment, we deliver software solutions that
            transform your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featuredServices.map((service, index) => (
            <Card
              key={index}
              className="group hover-elevate text-center h-full"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3
                  className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors"
                  data-testid={`service-title-${index}`}
                >
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center justify-center text-sm"
                    >
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link to={service.href} data-testid={`service-cta-${index}`}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link to="/our-services" data-testid="all-services-cta">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
