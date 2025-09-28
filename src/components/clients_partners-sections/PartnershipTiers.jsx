import { partnershipTiers } from "@/utils/static-data/clientPartnerData";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import { ArrowRight, CheckCircle, Target } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const PartnershipTiers = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Partnership Tiers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer flexible partnership levels designed to match your business
            needs and growth trajectory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {partnershipTiers.map((tier, index) => (
            <Card
              key={index}
              className="relative overflow-hidden hover-elevate"
            >
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${tier.color}`}
              />

              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <tier.icon className="h-8 w-8 text-primary" />
                </div>
                <h3
                  className="text-xl font-bold mb-2"
                  data-testid={`tier-title-${index}`}
                >
                  {tier.tier}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {tier.description}
                </p>
                <Badge variant="outline" className="mt-2">
                  {tier.clients} active partners
                </Badge>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Benefits</h4>
                  <ul className="space-y-2">
                    {tier.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Requirements</h4>
                  <ul className="space-y-2">
                    {tier.requirements.map((requirement, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm text-muted-foreground"
                      >
                        <Target className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button asChild className="w-full" variant="outline">
                  <Link href="/contact" data-testid={`tier-cta-${index}`}>
                    Learn More
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
};

export default PartnershipTiers;
