import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import {
  ExternalLink,
  Github,
  ArrowRight,
  Filter,
  TrendingUp,
  Users,
  Clock,





  Target,
  Star,
  Award,
  CheckCircle,
  Zap,
  Building } from
'lucide-react';

const projects = [
{
  id: 1,
  title: "EcomPro - Enterprise E-commerce Platform",
  category: "E-commerce",
  type: "Web Application",
  client: "RetailCorp Inc.",
  description: "A comprehensive e-commerce platform with advanced inventory management, multi-vendor support, and AI-powered recommendations.",
  image: "/api/placeholder/600/400",
  technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS", "Stripe"],
  duration: "6 months",
  team: "8 developers",
  results: {
    revenue: "+250%",
    users: "50K+",
    performance: "98%",
    satisfaction: "4.9/5"
  },
  features: [
  "Multi-vendor marketplace",
  "AI-powered recommendations",
  "Real-time inventory tracking",
  "Advanced analytics dashboard",
  "Mobile-responsive design",
  "Secure payment processing"],

  liveUrl: "#",
  githubUrl: "#",
  caseStudy: "Increased client revenue by 250% through improved user experience and conversion optimization."
},
{
  id: 2,
  title: "HealthTracker - Medical Records System",
  category: "Healthcare",
  type: "Web Application",
  client: "MedGroup Solutions",
  description: "HIPAA-compliant medical records management system with telemedicine integration and patient portal.",
  image: "/api/placeholder/600/400",
  technologies: ["React", "Python", "FastAPI", "PostgreSQL", "Docker", "AWS"],
  duration: "8 months",
  team: "12 developers",
  results: {
    efficiency: "+60%",
    patients: "25K+",
    uptime: "99.9%",
    compliance: "100%"
  },
  features: [
  "HIPAA-compliant architecture",
  "Telemedicine integration",
  "Patient portal & scheduling",
  "Electronic prescriptions",
  "Insurance claim processing",
  "Real-time notifications"],

  liveUrl: "#",
  githubUrl: "#",
  caseStudy: "Improved operational efficiency by 60% while maintaining 100% HIPAA compliance standards."
},
{
  id: 3,
  title: "FinanceFlow - Digital Banking App",
  category: "FinTech",
  type: "Mobile Application",
  client: "Community Bank",
  description: "Modern mobile banking application with biometric authentication, budgeting tools, and investment tracking.",
  image: "/api/placeholder/600/400",
  technologies: ["React Native", "Node.js", "MongoDB", "Firebase", "Plaid API"],
  duration: "10 months",
  team: "10 developers",
  results: {
    adoption: "+180%",
    transactions: "1M+",
    rating: "4.8/5",
    retention: "92%"
  },
  features: [
  "Biometric authentication",
  "Real-time transaction tracking",
  "Budgeting & goal setting",
  "Investment portfolio tracking",
  "Bill pay & transfers",
  "Fraud detection alerts"],

  liveUrl: "#",
  githubUrl: "#",
  caseStudy: "Achieved 180% increase in mobile adoption with industry-leading 4.8/5 app store rating."
},
{
  id: 4,
  title: "EduConnect - Learning Management System",
  category: "Education",
  type: "Web Application",
  client: "University of Innovation",
  description: "Comprehensive LMS with virtual classroom integration, assignment tracking, and student analytics.",
  image: "/api/placeholder/600/400",
  technologies: ["Vue.js", "Node.js", "MySQL", "Socket.io", "AWS", "Zoom API"],
  duration: "5 months",
  team: "6 developers",
  results: {
    students: "15K+",
    engagement: "+75%",
    completion: "89%",
    satisfaction: "4.7/5"
  },
  features: [
  "Virtual classroom integration",
  "Assignment & grade tracking",
  "Student analytics dashboard",
  "Discussion forums",
  "Mobile learning app",
  "Plagiarism detection"],

  liveUrl: "#",
  githubUrl: "#",
  caseStudy: "Increased student engagement by 75% with 89% course completion rate across 15K+ students."
},
{
  id: 5,
  title: "LogiTrack - Supply Chain Management",
  category: "Logistics",
  type: "Web Application",
  client: "GlobalLogistics Ltd.",
  description: "End-to-end supply chain visibility platform with real-time tracking and predictive analytics.",
  image: "/api/placeholder/600/400",
  technologies: ["Angular", "Java", "Spring Boot", "PostgreSQL", "Kafka", "Azure"],
  duration: "12 months",
  team: "15 developers",
  results: {
    efficiency: "+40%",
    visibility: "100%",
    costs: "-25%",
    delivery: "98%"
  },
  features: [
  "Real-time shipment tracking",
  "Predictive analytics",
  "Inventory optimization",
  "Supplier management",
  "Automated reporting",
  "Mobile driver app"],

  liveUrl: "#",
  githubUrl: "#",
  caseStudy: "Reduced operational costs by 25% while achieving 98% on-time delivery rate."
},
{
  id: 6,
  title: "SocialBuzz - Content Management Platform",
  category: "Social Media",
  type: "Web Application",
  client: "Digital Marketing Agency",
  description: "Multi-platform content scheduling and analytics tool for social media management.",
  image: "/api/placeholder/600/400",
  technologies: ["React", "Node.js", "MongoDB", "Redis", "Bull Queue", "AWS"],
  duration: "4 months",
  team: "5 developers",
  results: {
    clients: "500+",
    posts: "100K+",
    engagement: "+85%",
    time_saved: "70%"
  },
  features: [
  "Multi-platform scheduling",
  "Content calendar view",
  "Analytics & reporting",
  "Team collaboration tools",
  "AI content suggestions",
  "Brand management"],

  liveUrl: "#",
  githubUrl: "#",
  caseStudy: "Saved clients 70% time in social media management while increasing engagement by 85%."
}];


const categories = ["All", "E-commerce", "Healthcare", "FinTech", "Education", "Logistics", "Social Media"];

const overallMetrics = [
{ label: "Projects Delivered", value: "200+", icon: Target },
{ label: "Happy Clients", value: "150+", icon: Users },
{ label: "Success Rate", value: "98%", icon: TrendingUp },
{ label: "Avg. ROI Increase", value: "180%", icon: Award },
{ label: "Code Quality Score", value: "9.8/10", icon: Star },
{ label: "On-Time Delivery", value: "95%", icon: CheckCircle }];


const testimonials = [
{
  quote: "SoftwareCraft transformed our business with their innovative e-commerce solution. Revenue increased by 250% in just 6 months.",
  author: "Sarah Johnson",
  title: "CEO, RetailCorp Inc.",
  project: "EcomPro Platform"
},
{
  quote: "The quality of their code and attention to security standards is exceptional. Perfect for our healthcare compliance needs.",
  author: "Dr. Michael Chen",
  title: "CTO, MedGroup Solutions",
  project: "HealthTracker System"
},
{
  quote: "Outstanding mobile app development. Our users love the interface and our adoption rates have skyrocketed.",
  author: "Lisa Rodriguez",
  title: "VP Product, Community Bank",
  project: "FinanceFlow App"
}];


export default function Portfolio() {
  return (
    <>
      <SEO
        title="Portfolio - Our Software Development Projects"
        description="Explore our portfolio of successful software development projects including e-commerce platforms, mobile apps, and enterprise solutions that delivered real business results."
        keywords="software portfolio, case studies, web development projects, mobile app portfolio, software solutions, project showcase"
        ogTitle="SoftwareCraft Portfolio - Real Projects, Real Results"
        ogDescription="See how we've helped 150+ companies with custom software solutions. From e-commerce to healthcare, discover our proven track record." />
      
      <PortfolioContent />
    </>);

}

function PortfolioContent() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = selectedCategory === "All" ?
  projects :
  projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_85%)]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-6">
              <Building className="h-4 w-4" />
              Our Portfolio
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-foreground via-primary to-chart-2 bg-clip-text text-transparent">
                Proven Results Across Industries
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of successful projects that have transformed businesses, 
              increased revenue, and delivered exceptional user experiences across diverse industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-chart-2">
                <Link to="/contact" data-testid="hero-cta-primary">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/services" data-testid="hero-cta-secondary">
                  View Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Track Record</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Numbers that speak to our commitment to delivering exceptional results for every client.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
            {overallMetrics.map((metric, index) =>
            <div key={index} className="text-center" data-testid={`metric-${index}`}>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Portfolio Filter & Projects */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Discover how we've helped businesses across various industries achieve their digital transformation goals.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) =>
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                data-testid={`filter-${category.toLowerCase().replace(/\s+/g, '-')}`}>
                
                  <Filter className="h-4 w-4 mr-2" />
                  {category}
                </Button>
              )}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {filteredProjects.map((project) =>
            <Card key={project.id} className="group hover-elevate overflow-hidden">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge variant="secondary" className="mb-2">
                      {project.category}
                    </Badge>
                    <h3 className="text-white font-semibold text-lg" data-testid={`project-title-${project.id}`}>
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
                      {project.technologies.map((tech) =>
                    <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                    )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(project.results).map(([key, value]) =>
                  <div key={key} className="text-center p-3 bg-muted/50 rounded-lg">
                        <div className="text-lg font-bold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">
                          {key.replace('_', ' ')}
                        </div>
                      </div>
                  )}
                  </div>

                  <div className="flex gap-2">
                    <Button
                    size="sm"
                    className="flex-1"
                    onClick={() => setSelectedProject(project.id)}
                    data-testid={`project-details-${project.id}`}>
                    
                      View Details
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" data-testid={`project-live-${project.id}`}>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" data-testid={`project-github-${project.id}`}>
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Detailed Project Modal/Section */}
      {selectedProject &&
      <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            {(() => {
            const project = projects.find((p) => p.id === selectedProject);
            return (
              <div className="max-w-4xl mx-auto">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
                      <p className="text-lg text-muted-foreground">{project.client}</p>
                    </div>
                    <Button
                    variant="outline"
                    onClick={() => setSelectedProject(null)}
                    data-testid="close-project-details">
                    
                      Close
                    </Button>
                  </div>

                  <Card>
                    <CardContent className="p-8">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-xl font-semibold mb-4">Case Study</h3>
                          <p className="text-muted-foreground mb-6 leading-relaxed">
                            {project.caseStudy}
                          </p>

                          <h4 className="font-semibold mb-3">Key Features</h4>
                          <ul className="space-y-2">
                            {project.features.map((feature, index) =>
                          <li key={index} className="flex items-center text-sm">
                                <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                          )}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-4">Project Results</h3>
                          <div className="grid grid-cols-2 gap-4">
                            {Object.entries(project.results).map(([key, value]) =>
                          <div key={key} className="text-center p-4 bg-muted/50 rounded-lg">
                                <div className="text-2xl font-bold text-primary mb-1">{value}</div>
                                <div className="text-sm text-muted-foreground capitalize">
                                  {key.replace('_', ' ')}
                                </div>
                              </div>
                          )}
                          </div>

                          <div className="mt-6">
                            <h4 className="font-semibold mb-3">Technology Stack</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) =>
                            <Badge key={tech} variant="secondary">
                                  {tech}
                                </Badge>
                            )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>);

          })()}
          </div>
        </section>
      }

      {/* Client Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real feedback from real clients who have experienced the SoftwareCraft difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) =>
            <Card key={index} className="hover-elevate">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) =>
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  )}
                  </div>
                  
                  <blockquote className="text-muted-foreground mb-4 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div>
                    <div className="font-semibold text-card-foreground" data-testid={`testimonial-author-${index}`}>
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-primary font-medium">{testimonial.title}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.project}</div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/10 via-chart-2/10 to-primary/10 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <Zap className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a custom solution that delivers 
              measurable results and exceeds your expectations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-chart-2">
                <Link href="/contact" data-testid="final-cta-primary">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services" data-testid="final-cta-secondary">
                  Explore Services
                </Link>
              </Button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Join 150+ companies that trust SoftwareCraft with their digital transformation
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>);

}