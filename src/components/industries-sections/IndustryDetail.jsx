import { industries } from "@/utils/static-data/industriesData";
import { Card, CardContent, CardHeader } from "../ui/card";
import { ArrowRight, Award, CheckCircle, TrendingUp } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const IndustryDetail = ({ selectedIndustry }) => {
  return (
    <>
      {selectedIndustry && (
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            {(() => {
              const industry = industries.find(
                (i) => i.id === selectedIndustry
              );
              return (
                <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-lg flex items-center justify-center`}
                      >
                        <industry.icon className="h-8 w-8 text-white" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold">
                        {industry.name} Solutions
                      </h2>
                    </div>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                      Specialized solutions designed for the unique challenges
                      of the {industry.name.toLowerCase()} industry.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Solutions & Technologies */}
                    <div className="space-y-8">
                      <Card>
                        <CardHeader>
                          <h3 className="text-xl font-semibold">
                            Our Solutions
                          </h3>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-3">
                            {industry.solutions.map((solution, index) => (
                              <li
                                key={index}
                                className="flex items-center text-sm"
                              >
                                <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                                {solution}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <h3 className="text-xl font-semibold">
                            Technology Stack
                          </h3>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2">
                            {industry.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Case Study */}
                    <Card>
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Award className="h-5 w-5 text-primary" />
                          <h3 className="text-xl font-semibold">
                            Success Story
                          </h3>
                        </div>
                        <h4 className="text-lg font-medium text-primary">
                          {industry.caseStudy.client}
                        </h4>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div>
                          <h5 className="font-semibold mb-2">Challenge</h5>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {industry.caseStudy.challenge}
                          </p>
                        </div>

                        <div>
                          <h5 className="font-semibold mb-2">Solution</h5>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {industry.caseStudy.solution}
                          </p>
                        </div>

                        <div>
                          <h5 className="font-semibold mb-3">Results</h5>
                          <div className="space-y-2">
                            {industry.caseStudy.results.map((result, index) => (
                              <div
                                key={index}
                                className="flex items-center text-sm"
                              >
                                <TrendingUp className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                                {result}
                              </div>
                            ))}
                          </div>
                        </div>

                        <Button asChild className="w-full">
                          <Link
                            to="/portfolio"
                            data-testid={`case-study-cta-${industry.id}`}
                          >
                            View Full Case Study
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })()}
          </div>
        </section>
      )}
    </>
  );
};

export default IndustryDetail;
