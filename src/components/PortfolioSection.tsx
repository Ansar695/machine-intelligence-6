import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Briefcase, 
  ExternalLink, 
  Github,
  ArrowRight,
  Filter
} from 'lucide-react'

//todo: remove mock functionality
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A comprehensive online marketplace with advanced search, payment processing, and inventory management.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: "bg-gradient-to-br from-blue-500 to-purple-600",
    status: "Completed",
    metrics: "40% increase in sales"
  },
  {
    id: 2, 
    title: "Healthcare Management System",
    category: "Custom Software",
    description: "HIPAA-compliant patient management system with appointment scheduling and medical records.",
    technologies: ["React", "Python", "MongoDB", "AWS"],
    image: "bg-gradient-to-br from-green-500 to-teal-600", 
    status: "Completed",
    metrics: "50% time savings"
  },
  {
    id: 3,
    title: "Fitness Tracking App",
    category: "Mobile Development", 
    description: "Cross-platform mobile app for workout tracking, nutrition planning, and progress analytics.",
    technologies: ["React Native", "Node.js", "Firebase"],
    image: "bg-gradient-to-br from-orange-500 to-red-600",
    status: "Completed",
    metrics: "100K+ downloads"
  },
  {
    id: 4,
    title: "Real Estate CRM",
    category: "Custom Software",
    description: "Customer relationship management system tailored for real estate professionals.",
    technologies: ["Vue.js", "Laravel", "MySQL", "Redis"],
    image: "bg-gradient-to-br from-indigo-500 to-blue-600",
    status: "Completed", 
    metrics: "25% lead conversion"
  },
  {
    id: 5,
    title: "Analytics Dashboard",
    category: "Data & Analytics",
    description: "Real-time business intelligence dashboard with custom visualizations and reporting.",
    technologies: ["React", "D3.js", "Python", "BigQuery"],
    image: "bg-gradient-to-br from-purple-500 to-pink-600",
    status: "Completed",
    metrics: "Real-time insights"
  },
  {
    id: 6,
    title: "Logistics Platform", 
    category: "Web Development",
    description: "Supply chain management platform with route optimization and tracking capabilities.",
    technologies: ["Angular", "Java", "Spring Boot", "Docker"],
    image: "bg-gradient-to-br from-cyan-500 to-blue-600",
    status: "Completed",
    metrics: "30% cost reduction"
  }
]

const categories = ["All", "Web Development", "Mobile Development", "Custom Software", "Data & Analytics"]

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const openProjectModal = (project: typeof projects[0]) => {
    setSelectedProject(project)
    console.log('Opening project modal for:', project.title)
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
  }

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
            <Briefcase className="h-4 w-4" />
            Our Portfolio
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Recent Projects & Success Stories
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our latest work and see how we've helped businesses 
            transform their operations with innovative software solutions.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Filter className="h-4 w-4" />
            Filter by:
          </div>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="transition-all duration-200"
              data-testid={`filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="group hover-elevate cursor-pointer transition-all duration-300 overflow-hidden"
              onClick={() => openProjectModal(project)}
              data-testid={`project-card-${project.id}`}
            >
              {/* Project Image Placeholder */}
              <div className={`h-48 ${project.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/20">
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="icon" variant="secondary" className="bg-white/20 border-white/20 text-white hover:bg-white/30">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <Badge variant={project.status === "Completed" ? "default" : "secondary"} className="text-xs">
                    {project.status}
                  </Badge>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Metrics */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-primary font-medium">
                    {project.metrics}
                  </span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 via-chart-2/10 to-primary/10 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Next Project?</h3>
            <p className="text-muted-foreground mb-6">
              Let's bring your vision to life with our proven development process and expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-chart-2 hover:from-primary/90 hover:to-chart-2/90"
                onClick={() => {
                  const element = document.querySelector('#contact')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                data-testid="button-start-project"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => console.log('View all projects clicked')}
                data-testid="button-view-all"
              >
                View All Projects
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal - Simple overlay */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={closeProjectModal}>
          <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className={`h-64 ${selectedProject.image} relative`}>
              <div className="absolute inset-0 bg-black/20"></div>
              <Button 
                size="icon" 
                variant="secondary" 
                className="absolute top-4 right-4 bg-white/20 border-white/20 text-white"
                onClick={closeProjectModal}
                data-testid="button-close-modal"
              >
                ×
              </Button>
            </div>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
                <Badge>{selectedProject.category}</Badge>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">{selectedProject.description}</p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Results</h3>
                  <p className="text-primary font-medium">{selectedProject.metrics}</p>
                </div>
              </div>
              
              <div className="flex gap-4 mt-8">
                <Button className="flex-1" data-testid="button-view-live">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Live
                </Button>
                <Button variant="outline" className="flex-1" data-testid="button-view-code">
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </section>
  )
}