import { useState } from 'react'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Link } from 'wouter'
import SEO from '@/components/SEO'
import {
  Building,
  Heart,
  DollarSign,
  GraduationCap,
  ShoppingCart,
  Truck,
  Zap,
  Factory,
  Home,
  Film,
  Users,
  Shield,
  ArrowRight,
  TrendingUp,
  CheckCircle,
  Target,
  Globe,
  Code2,
  Database,
  Cloud,
  Star,
  Award,
  Calendar,
  MapPin
} from 'lucide-react'

const industries = [
  {
    id: "technology",
    name: "Technology",
    icon: Building,
    description: "Scalable solutions for tech companies, startups, and software businesses",
    color: "from-blue-500 to-cyan-500",
    stats: { projects: "45+", avgIncrease: "300%", clients: "25+" },
    solutions: [
      "SaaS Platform Development",
      "API & Microservices Architecture", 
      "DevOps & Cloud Infrastructure",
      "Data Analytics Platforms",
      "AI/ML Integration",
      "Security & Compliance Tools"
    ],
    technologies: ["React", "Node.js", "Python", "AWS", "Kubernetes", "PostgreSQL"],
    caseStudy: {
      client: "TechFlow Solutions",
      challenge: "Legacy system migration and scaling for 10x user growth",
      solution: "Cloud-native microservices architecture with automated scaling",
      results: ["300% performance improvement", "99.9% uptime achieved", "50% cost reduction"]
    }
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: Heart,
    description: "HIPAA-compliant solutions for medical practices and healthcare organizations",
    color: "from-red-500 to-pink-500",
    stats: { projects: "30+", avgIncrease: "180%", clients: "15+" },
    solutions: [
      "Electronic Health Records (EHR)",
      "Telemedicine Platforms",
      "Patient Management Systems",
      "Medical Billing & Claims",
      "Healthcare Analytics",
      "Compliance & Security"
    ],
    technologies: ["React", "Python", "FHIR", "PostgreSQL", "AWS", "Docker"],
    caseStudy: {
      client: "MedCare Group",
      challenge: "Streamline patient care and ensure HIPAA compliance",
      solution: "Integrated EHR system with telemedicine capabilities",
      results: ["60% efficiency increase", "100% HIPAA compliance", "25K+ patients served"]
    }
  },
  {
    id: "finance",
    name: "Financial Services",
    icon: DollarSign,
    description: "Secure financial applications with advanced analytics and compliance",
    color: "from-green-500 to-emerald-500",
    stats: { projects: "25+", avgIncrease: "220%", clients: "12+" },
    solutions: [
      "Digital Banking Platforms",
      "Payment Processing Systems",
      "Risk Management Tools",
      "Trading & Investment Apps",
      "Compliance & Reporting",
      "Fraud Detection Systems"
    ],
    technologies: ["React Native", "Java", "Spring Boot", "Oracle", "AWS", "Redis"],
    caseStudy: {
      client: "Community Bank",
      challenge: "Modernize banking experience and increase digital adoption",
      solution: "Mobile-first banking app with biometric security",
      results: ["180% user adoption", "4.8/5 app rating", "92% retention rate"]
    }
  },
  {
    id: "education",
    name: "Education",
    icon: GraduationCap,
    description: "Innovative learning platforms and educational management systems",
    color: "from-purple-500 to-violet-500",
    stats: { projects: "20+", avgIncrease: "250%", clients: "10+" },
    solutions: [
      "Learning Management Systems",
      "Virtual Classroom Platforms",
      "Student Information Systems",
      "Online Assessment Tools",
      "Educational Analytics",
      "Mobile Learning Apps"
    ],
    technologies: ["Vue.js", "Node.js", "MongoDB", "Socket.io", "AWS", "WebRTC"],
    caseStudy: {
      client: "University of Innovation",
      challenge: "Enhance remote learning and student engagement",
      solution: "Comprehensive LMS with virtual classroom integration",
      results: ["75% engagement increase", "89% completion rate", "15K+ students"]
    }
  },
  {
    id: "retail",
    name: "Retail & E-commerce",
    icon: ShoppingCart,
    description: "Modern e-commerce platforms and retail management solutions",
    color: "from-orange-500 to-yellow-500",
    stats: { projects: "35+", avgIncrease: "280%", clients: "20+" },
    solutions: [
      "E-commerce Platforms",
      "Inventory Management",
      "POS & Payment Systems",
      "Customer Analytics",
      "Supply Chain Integration",
      "Mobile Shopping Apps"
    ],
    technologies: ["React", "Node.js", "Shopify API", "Stripe", "PostgreSQL", "Redis"],
    caseStudy: {
      client: "RetailMax Inc.",
      challenge: "Scale online operations and improve customer experience",
      solution: "Multi-vendor e-commerce platform with AI recommendations",
      results: ["300% sales increase", "50% faster load times", "98% uptime"]
    }
  },
  {
    id: "logistics",
    name: "Logistics & Supply Chain",
    icon: Truck,
    description: "End-to-end supply chain visibility and logistics optimization",
    color: "from-indigo-500 to-blue-500",
    stats: { projects: "15+", avgIncrease: "200%", clients: "8+" },
    solutions: [
      "Supply Chain Management",
      "Fleet Tracking Systems",
      "Warehouse Management",
      "Route Optimization",
      "Shipping & Delivery",
      "Predictive Analytics"
    ],
    technologies: ["Angular", "Java", "Spring Boot", "PostgreSQL", "Kafka", "Azure"],
    caseStudy: {
      client: "GlobalLogistics Ltd.",
      challenge: "Real-time visibility and cost optimization across supply chain",
      solution: "Integrated platform with predictive analytics and tracking",
      results: ["25% cost reduction", "98% on-time delivery", "100% visibility"]
    }
  }
]

const overallStats = [
  { label: "Industries Served", value: "12+", icon: Building },
  { label: "Industry Expertise", value: "6+ years", icon: Calendar },
  { label: "Avg ROI Increase", value: "240%", icon: TrendingUp },
  { label: "Compliance Rate", value: "100%", icon: Shield },
  { label: "Global Reach", value: "15+ countries", icon: Globe },
  { label: "Client Satisfaction", value: "4.9/5", icon: Star }
]

const certifications = [
  { name: "HIPAA Compliance", industries: ["Healthcare"] },
  { name: "SOC 2 Type II", industries: ["Finance", "Healthcare"] },
  { name: "PCI DSS", industries: ["Retail", "Finance"] },
  { name: "GDPR Compliance", industries: ["All Industries"] },
  { name: "ISO 27001", industries: ["Technology", "Finance"] },
  { name: "FedRAMP", industries: ["Government", "Healthcare"] }
]

export default function Industries() {
  return (
    <>
      <SEO 
        title="Industries We Serve - Sector-Specific Solutions"
        description="SoftwareCraft serves diverse industries including healthcare, finance, e-commerce, education, and technology. Discover our industry-specific software solutions and case studies."
        keywords="software development industries, healthcare software, fintech solutions, e-commerce development, education technology, industry expertise"
        ogTitle="Multi-Industry Software Development Expertise | SoftwareCraft"
        ogDescription="Specialized software solutions for healthcare, finance, retail, education, and technology sectors. Industry-specific expertise and proven results."
      />
      <IndustriesContent />
    </>
  )
}

function IndustriesContent() {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null)

  const handleIndustrySelect = (industryId: string) => {
    setSelectedIndustry(selectedIndustry === industryId ? null : industryId)
  }

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
              Industry Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-foreground via-primary to-chart-2 bg-clip-text text-transparent">
                Tailored Solutions for Every Industry
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              We understand that every industry has unique challenges and requirements. 
              Our expert team delivers specialized software solutions that drive growth and innovation across diverse sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-chart-2">
                <Link href="/contact" data-testid="hero-cta-primary">
                  Discuss Your Needs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/portfolio" data-testid="hero-cta-secondary">
                  View Case Studies
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Stats */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Industry Expertise by the Numbers</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our cross-industry experience delivers consistent results and measurable impact.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
            {overallStats.map((stat, index) => (
              <div key={index} className="text-center" data-testid={`industry-stat-${index}`}>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Industries We Serve</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Click on any industry to explore our specialized solutions and success stories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {industries.map((industry) => (
              <Card 
                key={industry.id} 
                className={`group hover-elevate cursor-pointer transition-all duration-300 ${
                  selectedIndustry === industry.id ? 'ring-2 ring-primary/50' : ''
                }`}
                onClick={() => handleIndustrySelect(industry.id)}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${industry.color}`} />
                
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <industry.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="outline">
                      {industry.stats.projects} projects
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors" data-testid={`industry-title-${industry.id}`}>
                    {industry.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {industry.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-primary">{industry.stats.projects}</div>
                      <div className="text-xs text-muted-foreground">Projects</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-primary">{industry.stats.avgIncrease}</div>
                      <div className="text-xs text-muted-foreground">Avg Growth</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-primary">{industry.stats.clients}</div>
                      <div className="text-xs text-muted-foreground">Clients</div>
                    </div>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full"
                    data-testid={`industry-explore-${industry.id}`}
                  >
                    {selectedIndustry === industry.id ? 'Hide Details' : 'Explore Solutions'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Industry View */}
      {selectedIndustry && (
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            {(() => {
              const industry = industries.find(i => i.id === selectedIndustry)!
              return (
                <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-lg flex items-center justify-center`}>
                        <industry.icon className="h-8 w-8 text-white" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold">{industry.name} Solutions</h2>
                    </div>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                      Specialized solutions designed for the unique challenges of the {industry.name.toLowerCase()} industry.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Solutions & Technologies */}
                    <div className="space-y-8">
                      <Card>
                        <CardHeader>
                          <h3 className="text-xl font-semibold">Our Solutions</h3>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-3">
                            {industry.solutions.map((solution, index) => (
                              <li key={index} className="flex items-center text-sm">
                                <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                                {solution}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <h3 className="text-xl font-semibold">Technology Stack</h3>
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
                          <h3 className="text-xl font-semibold">Success Story</h3>
                        </div>
                        <h4 className="text-lg font-medium text-primary">{industry.caseStudy.client}</h4>
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
                              <div key={index} className="flex items-center text-sm">
                                <TrendingUp className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                                {result}
                              </div>
                            ))}
                          </div>
                        </div>

                        <Button asChild className="w-full">
                          <Link href="/portfolio" data-testid={`case-study-cta-${industry.id}`}>
                            View Full Case Study
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )
            })()}
          </div>
        </section>
      )}

      {/* Compliance & Certifications */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Industry Compliance & Certifications</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We maintain the highest standards of compliance and security across all industries we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center hover-elevate">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2" data-testid={`certification-${index}`}>
                    {cert.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Applicable to: {cert.industries.join(", ")}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/10 via-chart-2/10 to-primary/10 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <Target className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our industry-specific expertise can help solve your unique challenges 
              and drive meaningful results for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-chart-2">
                <Link href="/contact" data-testid="final-cta-primary">
                  Get Industry-Specific Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/portfolio" data-testid="final-cta-secondary">
                  Explore All Case Studies
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              <div className="text-center">
                <Building className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">150+</div>
                <div className="text-sm text-muted-foreground">Successful Projects</div>
              </div>
              <div className="text-center">
                <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">12+</div>
                <div className="text-sm text-muted-foreground">Industries Served</div>
              </div>
              <div className="text-center">
                <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Client Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}