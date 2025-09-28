import { departments, openPositions } from "@/utils/static-data/careerData";
import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import {
  ArrowRight,
  Building,
  CheckCircle,
  Clock,
  DollarSign,
  GraduationCap,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

const OpenPositions = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const filteredJobs =
    selectedDepartment === "All"
      ? openPositions
      : openPositions.filter((job) => job.department === selectedDepartment);

  const handleJobClick = (jobId) => {
    setSelectedJob(selectedJob === jobId ? null : jobId);
  };

  return (
    <section className="py-24 bg-muted/30" id="open-positions">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Open Positions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join our growing team and help us build the future of software
            development.
          </p>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {departments.map((dept) => (
              <Button
                key={dept}
                variant={selectedDepartment === dept ? "default" : "outline"}
                onClick={() => setSelectedDepartment(dept)}
                data-testid={`filter-${dept.toLowerCase()}`}
              >
                {dept}
              </Button>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="hover-elevate">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3
                        className="text-xl font-semibold text-card-foreground"
                        data-testid={`job-title-${job.id}`}
                      >
                        {job.title}
                      </h3>
                      {job.urgent && (
                        <Badge variant="default" className="bg-red-500">
                          Urgent
                        </Badge>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Building className="h-4 w-4 mr-1" />
                        {job.department}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <GraduationCap className="h-4 w-4 mr-1" />
                        {job.experience}
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1" />
                        {job.salary}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">
                        Posted {job.posted}
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => handleJobClick(job.id)}
                        data-testid={`job-details-${job.id}`}
                      >
                        {selectedJob === job.id
                          ? "Hide Details"
                          : "View Details"}
                      </Button>
                    </div>
                  </div>
                </div>

                {selectedJob === job.id && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <h4 className="font-semibold mb-3">Requirements</h4>
                    <ul className="space-y-2 mb-6">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>

                    <div className="flex gap-3">
                      <Button
                        asChild
                        className="bg-gradient-to-r from-primary to-chart-2"
                      >
                        <Link to="/contact" data-testid={`job-apply-${job.id}`}>
                          Apply Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <a
                          href="mailto:careers@softwarecraft.dev"
                          data-testid={`job-email-${job.id}`}
                        >
                          Email Us
                        </a>
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenPositions;
