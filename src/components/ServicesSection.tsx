import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Code2, 
  Smartphone, 
  Globe, 
  Database, 
  Cloud, 
  Cog,
  ArrowRight,
  Zap
} from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Tailored applications built from scratch to meet your unique business requirements and workflows.",
    technologies: ["React", "Node.js", "Python", "Java"],
    features: ["Scalable Architecture", "API Integration", "Real-time Updates", "Security First"]
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive websites and web applications that deliver exceptional user experiences.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind"],
    features: ["Mobile Responsive", "SEO Optimized", "Performance Focused", "Modern UI/UX"]
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android platforms.",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
    features: ["Cross Platform", "Native Performance", "App Store Ready", "Push Notifications"]
  },
  {
    icon: Database,
    title: "Data & Analytics",
    description: "Transform your data into actionable insights with advanced analytics and visualization tools.",
    technologies: ["Python", "SQL", "MongoDB", "AWS"],
    features: ["Data Visualization", "Real-time Analytics", "Machine Learning", "Business Intelligence"]
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services for modern business operations.",
    technologies: ["AWS", "Azure", "Docker", "Kubernetes"],
    features: ["Auto Scaling", "High Availability", "Cost Optimization", "Security Compliance"]
  },
  {
    icon: Cog,
    title: "API Development",
    description: "Robust and secure APIs that connect your systems and enable seamless data exchange.",
    technologies: ["REST", "GraphQL", "Node.js", "FastAPI"],
    features: ["RESTful Design", "GraphQL Support", "Authentication", "Rate Limiting"]
  }
]

export default function ServicesSection() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
            <Zap className="h-4 w-4" />
            Our Services
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Solutions That Drive Growth
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From concept to deployment, we deliver comprehensive software solutions 
            that transform your business and accelerate your digital journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover-elevate transition-all duration-300 border-card-border hover:border-primary/20"
              data-testid={`service-card-${index}`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Button 
                    size="icon" 
                    variant="ghost" 
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={scrollToContact}
                    data-testid={`service-contact-${index}`}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-medium text-card-foreground mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-sm font-medium text-card-foreground mb-2">Key Features</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 via-chart-2/10 to-primary/10 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how we can help transform your ideas into powerful software solutions.
            </p>
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-primary to-chart-2 hover:from-primary/90 hover:to-chart-2/90"
              data-testid="button-start-project"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}