import { industries } from "@/utils/static-data/industriesData";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const IndustriesServerd = ({ selectedIndustry, setSelectedIndustry }) => {

  const handleIndustrySelect = (industryId) => {
    setSelectedIndustry(selectedIndustry === industryId ? null : industryId);
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Industries We Serve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Click on any industry to explore our specialized solutions and
            success stories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {industries.map((industry) => (
            <Card
              key={industry.id}
              className={`group hover-elevate cursor-pointer transition-all duration-300 ${
                selectedIndustry === industry.id ? "ring-2 ring-primary/50" : ""
              }`}
              onClick={() => handleIndustrySelect(industry.id)}
            >
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${industry.color}`}
              />

              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <industry.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="outline">
                    {industry.stats.projects} projects
                  </Badge>
                </div>
                <h3
                  className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors"
                  data-testid={`industry-title-${industry.id}`}
                >
                  {industry.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {industry.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-primary">
                      {industry.stats.projects}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Projects
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-primary">
                      {industry.stats.avgIncrease}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Avg Growth
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-primary">
                      {industry.stats.clients}
                    </div>
                    <div className="text-xs text-muted-foreground">Clients</div>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full"
                  data-testid={`industry-explore-${industry.id}`}
                >
                  {selectedIndustry === industry.id
                    ? "Hide Details"
                    : "Explore Solutions"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesServerd;
