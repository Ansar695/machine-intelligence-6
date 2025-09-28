import { benefits } from "@/utils/static-data/careerData";
import { Card, CardContent, CardHeader } from "../ui/card";
import { CheckCircle } from "lucide-react";

const Benefits = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Comprehensive Benefits Package
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We invest in our team's success with industry-leading benefits and
            perks that support your whole life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover-elevate">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <benefit.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3
                    className="text-lg font-semibold"
                    data-testid={`benefit-category-${index}`}
                  >
                    {benefit.category}
                  </h3>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {benefit.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
