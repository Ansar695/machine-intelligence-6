import {
  industries,
  testimonials,
} from "@/utils/static-data/clientPartnerData";
import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Quote, Star, TrendingUp } from "lucide-react";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Link } from "react-router-dom";

const ClientPartnerTestimonials = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("All");

  const filteredTestimonials =
    selectedIndustry === "All"
      ? testimonials
      : testimonials.filter(
          (testimonial) => testimonial.industry === selectedIndustry
        );

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Our Partners Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Real feedback from real partners who have experienced
            transformational results.
          </p>

          {/* Industry Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <Button
              variant={selectedIndustry === "All" ? "default" : "outline"}
              onClick={() => setSelectedIndustry("All")}
              data-testid="filter-all"
            >
              All Industries
            </Button>
            {industries.map((industry) => (
              <Button
                key={industry}
                variant={selectedIndustry === industry ? "default" : "outline"}
                onClick={() => setSelectedIndustry(industry)}
                data-testid={`filter-${industry.toLowerCase()}`}
              >
                {industry}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredTestimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover-elevate">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <Badge variant="secondary" className="ml-auto text-xs">
                    {testimonial.industry}
                  </Badge>
                </div>

                <Quote className="h-8 w-8 text-primary/20 mb-4" />

                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center space-x-4 mb-4">
                  <Avatar>
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.author}
                    />
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div
                      className="font-semibold text-card-foreground"
                      data-testid={`testimonial-author-${testimonial.id}`}
                    >
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-primary font-medium">
                      {testimonial.title}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.company}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <Badge variant="outline" className="text-xs">
                    {testimonial.project}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Key Results:</h4>
                  {testimonial.results.map((result, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <TrendingUp className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                      {result}
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="w-full mt-4"
                >
                  <Link
                    to="/portfolio"
                    data-testid={`testimonial-details-${testimonial.id}`}
                  >
                    View Full Case Study
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

export default ClientPartnerTestimonials;
