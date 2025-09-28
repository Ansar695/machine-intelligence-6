import { categories, projects } from "@/utils/static-data/portfolioData";
import { useState } from "react";
import { Button } from "../ui/button";
import { Clock, ExternalLink, Filter, Github, Users } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

const FeaturedProjects = () => {
     const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div>
      {/* Portfolio Filter & Projects */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Discover how we've helped businesses across various industries
              achieve their digital transformation goals.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category)}
                  data-testid={`filter-${category
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  <Filter className="h-4 w-4 mr-2" />
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group hover-elevate overflow-hidden"
              >
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge variant="secondary" className="mb-2">
                      {project.category}
                    </Badge>
                    <h3
                      className="text-white font-semibold text-lg"
                      data-testid={`project-title-${project.id}`}
                    >
                      {project.title}
                    </h3>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {project.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {project.team}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(project.results).map(([key, value]) => (
                      <div
                        key={key}
                        className="text-center p-3 bg-muted/50 rounded-lg"
                      >
                        <div className="text-lg font-bold text-primary">
                          {value}
                        </div>
                        <div className="text-xs text-muted-foreground capitalize">
                          {key.replace("_", " ")}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1"
                      onClick={() => setSelectedProject(project.id)}
                      data-testid={`project-details-${project.id}`}
                    >
                      View Details
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid={`project-live-${project.id}`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid={`project-github-${project.id}`}
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Project Modal/Section */}
      {selectedProject && (
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            {(() => {
              const project = projects.find((p) => p.id === selectedProject);
              return (
                <div className="max-w-4xl mx-auto">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h2 className="text-3xl font-bold mb-2">
                        {project.title}
                      </h2>
                      <p className="text-lg text-muted-foreground">
                        {project.client}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      onClick={() => setSelectedProject(null)}
                      data-testid="close-project-details"
                    >
                      Close
                    </Button>
                  </div>

                  <Card>
                    <CardContent className="p-8">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-xl font-semibold mb-4">
                            Case Study
                          </h3>
                          <p className="text-muted-foreground mb-6 leading-relaxed">
                            {project.caseStudy}
                          </p>

                          <h4 className="font-semibold mb-3">Key Features</h4>
                          <ul className="space-y-2">
                            {project.features.map((feature, index) => (
                              <li
                                key={index}
                                className="flex items-center text-sm"
                              >
                                <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-4">
                            Project Results
                          </h3>
                          <div className="grid grid-cols-2 gap-4">
                            {Object.entries(project.results).map(
                              ([key, value]) => (
                                <div
                                  key={key}
                                  className="text-center p-4 bg-muted/50 rounded-lg"
                                >
                                  <div className="text-2xl font-bold text-primary mb-1">
                                    {value}
                                  </div>
                                  <div className="text-sm text-muted-foreground capitalize">
                                    {key.replace("_", " ")}
                                  </div>
                                </div>
                              )
                            )}
                          </div>

                          <div className="mt-6">
                            <h4 className="font-semibold mb-3">
                              Technology Stack
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })()}
          </div>
        </section>
      )}
    </div>
  );
};

export default FeaturedProjects;
