import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { techStack } from "@/utils/static-data/servicesData";

export default function TechStack() {
  const [selectedTechCategory, setSelectedTechCategory] = useState("frontend");
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Technology Stack</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We work with cutting-edge technologies to build robust, scalable, and future-proof solutions.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {Object.keys(techStack).map((category) => (
              <Button
                key={category}
                variant={selectedTechCategory === category ? "default" : "outline"}
                onClick={() => setSelectedTechCategory(category)}
                className="capitalize"
                data-testid={`tech-category-${category}`}
              >
                {category}
              </Button>
            ))}
          </div>
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {techStack[selectedTechCategory].map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50 hover-elevate transition-all duration-200"
                    data-testid={`tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}


