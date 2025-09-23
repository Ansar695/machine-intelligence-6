import { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import {
  Code2,
  Smartphone,
  Globe,
  Database,
  Cloud,
  Cog,
  ArrowRight,
  Zap,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Users,
  Clock,
  Star,
  Target } from
'lucide-react';

const services = [
{
  icon: Code2,
  title: "Custom Software Development",
  description: "Tailored applications built from scratch to meet your unique business requirements and workflows.",
  technologies: ["React", "Node.js", "Python", "Java", "PostgreSQL", "MongoDB"],
  features: ["Scalable Architecture", "API Integration", "Real-time Updates", "Security First", "Cloud Native", "Microservices"],
  pricing: "Starting from $25,000",
  timeline: "8-16 weeks"
},
{
  icon: Globe,
  title: "Web Development",
  description: "Modern, responsive websites and web applications that deliver exceptional user experiences.",
  technologies: ["React", "Next.js", "TypeScript", "Tailwind", "Node.js", "GraphQL"],
  features: ["Mobile Responsive", "SEO Optimized", "Performance Focused", "Modern UI/UX", "PWA Support", "Analytics Integration"],
  pricing: "Starting from $10,000",
  timeline: "4-8 weeks"
},
{
  icon: Smartphone,
  title: "Mobile App Development",
  description: "Native and cross-platform mobile applications for iOS and Android platforms.",
  technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS"],
  features: ["Cross Platform", "Native Performance", "App Store Ready", "Push Notifications", "Offline Support", "Social Integration"],
  pricing: "Starting from $20,000",
  timeline: "10-14 weeks"
},
{
  icon: Database,
  title: "Data & Analytics",
  description: "Transform your data into actionable insights with advanced analytics and visualization tools.",
  technologies: ["Python", "SQL", "MongoDB", "AWS", "D3.js", "TensorFlow"],
  features: ["Data Visualization", "Real-time Analytics", "Machine Learning", "Business Intelligence", "ETL Pipelines", "Custom Dashboards"],
  pricing: "Starting from $15,000",
  timeline: "6-10 weeks"
},
{
  icon: Cloud,
  title: "Cloud Solutions",
  description: "Scalable cloud infrastructure and migration services for modern business operations.",
  technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "Jenkins"],
  features: ["Auto Scaling", "High Availability", "Cost Optimization", "Security Compliance", "DevOps Integration", "24/7 Monitoring"],
  pricing: "Starting from $12,000",
  timeline: "4-12 weeks"
},
{
  icon: Cog,
  title: "API Development",
  description: "Robust and secure APIs that connect your systems and enable seamless data exchange.",
  technologies: ["REST", "GraphQL", "Node.js", "FastAPI", "OAuth", "Redis"],
  features: ["RESTful Design", "GraphQL Support", "Authentication", "Rate Limiting", "Documentation", "Testing Suite"],
  pricing: "Starting from $8,000",
  timeline: "3-6 weeks"
}];


const processSteps = [
{
  step: "01",
  title: "Discovery & Planning",
  description: "We dive deep into your requirements, analyze your business goals, and create a comprehensive project roadmap.",
  duration: "1-2 weeks",
  deliverables: ["Requirements Document", "Technical Specification", "Project Timeline", "Resource Planning"]
},
{
  step: "02",
  title: "Design & Architecture",
  description: "Our team designs the user experience and technical architecture to ensure optimal performance and scalability.",
  duration: "1-3 weeks",
  deliverables: ["UI/UX Mockups", "System Architecture", "Database Design", "API Specifications"]
},
{
  step: "03",
  title: "Development & Testing",
  description: "We build your solution using agile methodologies with continuous testing and quality assurance.",
  duration: "4-12 weeks",
  deliverables: ["Working Software", "Test Coverage Reports", "Code Documentation", "Weekly Demos"]
},
{
  step: "04",
  title: "Deployment & Launch",
  description: "We deploy your solution to production with monitoring, optimization, and launch support.",
  duration: "1-2 weeks",
  deliverables: ["Live Application", "Deployment Guide", "Monitoring Setup", "User Training"]
},
{
  step: "05",
  title: "Support & Maintenance",
  description: "Ongoing support, updates, and enhancements to ensure your solution continues to meet your evolving needs.",
  duration: "Ongoing",
  deliverables: ["24/7 Support", "Regular Updates", "Performance Reports", "Feature Enhancements"]
}];


const techStack = {
  frontend: ["React", "Vue.js", "Angular", "Next.js", "TypeScript", "Tailwind CSS", "Material-UI", "React Native", "Flutter"],
  backend: ["Node.js", "Python", "Java", "C#", "PHP", "Ruby", "Express.js", "FastAPI", "Spring Boot"],
  databases: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "DynamoDB", "Neo4j", "InfluxDB"],
  cloud: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions"],
  tools: ["Git", "Jira", "Figma", "Postman", "VS Code", "Slack", "Zoom", "Linear", "Notion"]
};

const faqs = [
{
  question: "How long does a typical project take?",
  answer: "Project timelines vary based on complexity and scope. A simple website might take 4-6 weeks, while a complex enterprise application could take 3-6 months. We provide detailed timelines during our discovery phase."
},
{
  question: "Do you provide ongoing support after launch?",
  answer: "Yes, we offer comprehensive support packages including bug fixes, updates, monitoring, and feature enhancements. Our support plans range from basic maintenance to full managed services."
},
{
  question: "Can you work with our existing team?",
  answer: "Absolutely! We often collaborate with internal teams, providing additional expertise and resources. We can integrate with your existing workflows and development processes."
},
{
  question: "What technologies do you specialize in?",
  answer: "We work with modern, proven technologies including React, Node.js, Python, AWS, and more. We choose the best technology stack based on your specific requirements and long-term goals."
},
{
  question: "How do you ensure code quality?",
  answer: "We follow strict code review processes, automated testing, continuous integration, and industry best practices. All code is thoroughly tested and documented before deployment."
},
{
  question: "What's included in your pricing?",
  answer: "Our pricing includes development, testing, documentation, deployment, and initial support. We provide transparent, fixed-price quotes with no hidden costs."
}];


export default function Services() {
  return (
    <>
      <SEO
        title="Software Development Services"
        description="Custom web development, mobile apps, cloud solutions, and digital transformation services. Expert developers delivering scalable software solutions for businesses of all sizes."
        keywords="custom software development, web development services, mobile app development, cloud solutions, API development, e-commerce development"
        ogTitle="Professional Software Development Services | SoftwareCraft"
        ogDescription="From web apps to mobile solutions, we deliver custom software that drives business growth. 98% success rate with 150+ happy clients." />
      
      <ServicesContent />
    </>);

}

function ServicesContent() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [selectedTechCategory, setSelectedTechCategory] = useState('frontend');

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

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
              <Zap className="h-4 w-4" />
              Our Services
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-foreground via-primary to-chart-2 bg-clip-text text-transparent">
                Software Solutions That Scale
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              From concept to deployment, we deliver comprehensive software solutions that transform your business 
              and accelerate your digital journey. Our expert team brings years of experience across diverse industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-chart-2">
                <Link to="/contact" data-testid="hero-cta-primary">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/portfolio" data-testid="hero-cta-secondary">
                  View Our Work
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Service Offerings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) =>
            <Card key={index} className="group hover-elevate h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-primary">{service.pricing}</div>
                      <div className="text-xs text-muted-foreground">{service.timeline}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  <div>
                    <h4 className="text-sm font-medium text-card-foreground mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) =>
                    <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                    )}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-card-foreground mb-2">Key Features</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) =>
                    <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <CheckCircle className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                    )}
                    </ul>
                  </div>

                  <Button asChild className="w-full" variant="outline">
                    <Link to="/contact" data-testid={`service-cta-${index}`}>
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Development Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow a proven methodology to ensure successful project delivery on time and within budget.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) =>
            <div key={index} className="flex gap-8 mb-12 last:mb-0" data-testid={`process-step-${index}`}>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm mb-4">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 &&
                <div className="w-0.5 h-24 bg-border"></div>
                }
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <h3 className="text-xl font-semibold text-card-foreground mb-2 md:mb-0">
                      {step.title}
                    </h3>
                    <Badge variant="outline" className="w-fit">
                      <Clock className="w-3 h-3 mr-1" />
                      {step.duration}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div>
                    <h4 className="text-sm font-medium text-card-foreground mb-2">Deliverables:</h4>
                    <div className="flex flex-wrap gap-2">
                      {step.deliverables.map((deliverable) =>
                    <Badge key={deliverable} variant="secondary" className="text-xs">
                          {deliverable}
                        </Badge>
                    )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
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
              {Object.keys(techStack).map((category) =>
              <Button
                key={category}
                variant={selectedTechCategory === category ? "default" : "outline"}
                onClick={() => setSelectedTechCategory(category)}
                className="capitalize"
                data-testid={`tech-category-${category}`}>
                
                  {category}
                </Button>
              )}
            </div>

            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {techStack[selectedTechCategory].map((tech) =>
                  <div
                    key={tech}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50 hover-elevate transition-all duration-200"
                    data-testid={`tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}>
                    
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm font-medium">{tech}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get answers to common questions about our services, process, and pricing.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) =>
            <Card key={index} className="mb-4 hover-elevate">
                <CardContent className="p-0">
                  <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between"
                  data-testid={`faq-question-${index}`}>
                  
                    <h3 className="text-lg font-semibold text-card-foreground pr-4">
                      {faq.question}
                    </h3>
                    {expandedFaq === index ?
                  <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" /> :

                  <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  }
                  </button>
                  
                  {expandedFaq === index &&
                <div className="px-6 pb-6" data-testid={`faq-answer-${index}`}>
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                }
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/10 via-chart-2/10 to-primary/10 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) =>
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  )}
                </div>
                <span className="text-sm text-muted-foreground">Trusted by 150+ companies</span>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a solution that drives growth 
              and delivers measurable results for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-chart-2">
                <Link to="/contact" data-testid="final-cta-primary">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/portfolio" data-testid="final-cta-secondary">
                  View Case Studies
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              <div className="text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">150+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>);

}