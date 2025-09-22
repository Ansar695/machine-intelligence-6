import { useState } from 'react'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Link } from 'wouter'
import SEO from '@/components/SEO'
import {
  Star,
  Quote,
  ArrowRight,
  Users,
  TrendingUp,
  Award,
  CheckCircle,
  Globe,
  Building,
  Handshake,
  Target,
  Zap,
  Crown,
  Medal,
  Shield,
  Rocket,
  Heart,
  Calendar
} from 'lucide-react'

const clientLogos = [
  { name: "TechCorp", logo: "/api/placeholder/120/60", industry: "Technology" },
  { name: "HealthPlus", logo: "/api/placeholder/120/60", industry: "Healthcare" },
  { name: "FinanceFlow", logo: "/api/placeholder/120/60", industry: "Finance" },
  { name: "EduTech", logo: "/api/placeholder/120/60", industry: "Education" },
  { name: "RetailMax", logo: "/api/placeholder/120/60", industry: "Retail" },
  { name: "LogiTrans", logo: "/api/placeholder/120/60", industry: "Logistics" },
  { name: "GreenEnergy", logo: "/api/placeholder/120/60", industry: "Energy" },
  { name: "CloudSystems", logo: "/api/placeholder/120/60", industry: "Cloud" },
  { name: "DataViz", logo: "/api/placeholder/120/60", industry: "Analytics" },
  { name: "MobileFirst", logo: "/api/placeholder/120/60", industry: "Mobile" },
  { name: "SecurityPro", logo: "/api/placeholder/120/60", industry: "Security" },
  { name: "AutoMotive", logo: "/api/placeholder/120/60", industry: "Automotive" }
]

const testimonials = [
  {
    id: 1,
    quote: "SoftwareCraft delivered beyond our expectations. Their expertise in e-commerce development transformed our business, resulting in a 300% increase in online sales within 6 months.",
    author: "Sarah Johnson",
    title: "CEO",
    company: "RetailMax Inc.",
    avatar: "/api/placeholder/80/80",
    initials: "SJ",
    rating: 5,
    project: "E-commerce Platform",
    results: ["300% sales increase", "50% faster page load", "98% uptime"],
    industry: "Retail"
  },
  {
    id: 2,
    quote: "The team's attention to HIPAA compliance and security standards was exceptional. They built a robust medical records system that streamlined our operations and improved patient care.",
    author: "Dr. Michael Chen",
    title: "CTO",
    company: "HealthPlus Medical Group",
    avatar: "/api/placeholder/80/80",
    initials: "MC",
    rating: 5,
    project: "Healthcare Management System",
    results: ["60% efficiency gain", "100% HIPAA compliance", "25K+ patients served"],
    industry: "Healthcare"
  },
  {
    id: 3,
    quote: "Outstanding mobile development expertise. Our banking app now has industry-leading ratings and significantly improved customer engagement. The team was professional and delivered on time.",
    author: "Lisa Rodriguez",
    title: "VP of Digital Products",
    company: "Community Bank",
    avatar: "/api/placeholder/80/80",
    initials: "LR",
    rating: 5,
    project: "Mobile Banking App",
    results: ["4.8/5 app rating", "180% user adoption", "92% retention rate"],
    industry: "Finance"
  },
  {
    id: 4,
    quote: "SoftwareCraft revolutionized our learning management system. Student engagement increased dramatically, and our course completion rates are now among the highest in the industry.",
    author: "Prof. David Kim",
    title: "Director of Technology",
    company: "University of Innovation",
    avatar: "/api/placeholder/80/80",
    initials: "DK",
    rating: 5,
    project: "Learning Management System",
    results: ["75% engagement increase", "89% completion rate", "15K+ students"],
    industry: "Education"
  },
  {
    id: 5,
    quote: "Their supply chain solution provided real-time visibility across our entire operation. We've reduced costs by 25% while improving delivery times. Exceptional work from start to finish.",
    author: "James Wilson",
    title: "Operations Director",
    company: "GlobalLogistics Ltd.",
    avatar: "/api/placeholder/80/80",
    initials: "JW",
    rating: 5,
    project: "Supply Chain Platform",
    results: ["25% cost reduction", "98% on-time delivery", "100% visibility"],
    industry: "Logistics"
  },
  {
    id: 6,
    quote: "The social media management platform they built saved us 70% of our time while increasing client engagement by 85%. The ROI has been incredible.",
    author: "Emma Thompson",
    title: "Creative Director",
    company: "Digital Marketing Pro",
    avatar: "/api/placeholder/80/80",
    initials: "ET",
    rating: 5,
    project: "Social Media Platform",
    results: ["70% time saved", "85% engagement boost", "500+ clients"],
    industry: "Marketing"
  }
]

const partnershipTiers = [
  {
    tier: "Strategic Partner",
    icon: Crown,
    description: "Comprehensive long-term partnership with dedicated resources and priority support",
    benefits: [
      "Dedicated development team",
      "24/7 priority support",
      "Custom SLA agreements",
      "Quarterly business reviews",
      "Technology roadmap planning",
      "Executive-level partnership"
    ],
    requirements: [
      "$500K+ annual engagement",
      "Multi-year commitment",
      "Strategic alignment"
    ],
    clients: 5,
    color: "from-yellow-500 to-orange-500"
  },
  {
    tier: "Premium Partner",
    icon: Medal,
    description: "Enhanced partnership with priority access to resources and specialized support",
    benefits: [
      "Priority project scheduling",
      "Enhanced support SLA",
      "Dedicated account manager",
      "Monthly progress reviews",
      "Early access to new services",
      "Preferred pricing structure"
    ],
    requirements: [
      "$100K+ annual engagement",
      "12+ month commitment",
      "Collaborative approach"
    ],
    clients: 25,
    color: "from-blue-500 to-purple-500"
  },
  {
    tier: "Preferred Partner",
    icon: Shield,
    description: "Standard partnership with reliable support and collaborative project management",
    benefits: [
      "Regular project updates",
      "Standard support SLA",
      "Project management tools",
      "Quality assurance process",
      "Documentation package",
      "Ongoing maintenance"
    ],
    requirements: [
      "$25K+ project value",
      "Professional engagement",
      "Clear project scope"
    ],
    clients: 120,
    color: "from-green-500 to-teal-500"
  }
]

const partnershipStats = [
  { label: "Active Partnerships", value: "150+", icon: Handshake },
  { label: "Partner Retention", value: "95%", icon: Heart },
  { label: "Avg Partnership Length", value: "3.2 years", icon: Calendar },
  { label: "Partner Satisfaction", value: "4.9/5", icon: Star },
  { label: "Joint Projects", value: "200+", icon: Building },
  { label: "Success Rate", value: "98%", icon: Target }
]

const industries = [
  "Technology", "Healthcare", "Finance", "Education", "Retail", "Logistics",
  "Energy", "Manufacturing", "Real Estate", "Entertainment", "Non-Profit", "Government", "Marketing"
]

export default function ClientsPartners() {
  return (
    <>
      <SEO 
        title="Our Clients & Partners - Success Stories"
        description="Discover how SoftwareCraft has helped 150+ companies across various industries achieve digital transformation with custom software solutions. Read client testimonials and success stories."
        keywords="software development clients, client testimonials, partnership programs, success stories, client reviews, software solutions showcase"
        ogTitle="150+ Happy Clients - SoftwareCraft Success Stories"
        ogDescription="From startups to enterprise companies, see how our software development expertise has transformed businesses across multiple industries."
      />
      <ClientsPartnersContent />
    </>
  )
}

function ClientsPartnersContent() {
  const [selectedIndustry, setSelectedIndustry] = useState("All")

  const filteredTestimonials = selectedIndustry === "All" 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.industry === selectedIndustry)

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
              <Users className="h-4 w-4" />
              Our Partners
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-foreground via-primary to-chart-2 bg-clip-text text-transparent">
                Trusted by Industry Leaders
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              We've partnered with amazing companies across diverse industries to deliver exceptional 
              software solutions that drive growth, innovation, and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-chart-2">
                <Link href="/contact" data-testid="hero-cta-primary">
                  Become a Partner
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

      {/* Partnership Stats */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Partnership Excellence</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to building lasting partnerships is reflected in these key metrics.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
            {partnershipStats.map((stat, index) => (
              <div key={index} className="text-center" data-testid={`partnership-stat-${index}`}>
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

      {/* Client Logos */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Trusted by Great Companies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're proud to work with industry leaders across various sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 max-w-6xl mx-auto">
            {clientLogos.map((client, index) => (
              <div 
                key={index} 
                className="bg-muted/30 rounded-lg p-6 flex items-center justify-center hover-elevate transition-all group"
                data-testid={`client-logo-${index}`}
              >
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`}
                  className="max-w-full max-h-12 object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Partnership Tiers</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer flexible partnership levels designed to match your business needs and growth trajectory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {partnershipTiers.map((tier, index) => (
              <Card key={index} className="relative overflow-hidden hover-elevate">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${tier.color}`} />
                
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <tier.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2" data-testid={`tier-title-${index}`}>
                    {tier.tier}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {tier.description}
                  </p>
                  <Badge variant="outline" className="mt-2">
                    {tier.clients} active partners
                  </Badge>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {tier.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {tier.requirements.map((requirement, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <Target className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button asChild className="w-full" variant="outline">
                    <Link href="/contact" data-testid={`tier-cta-${index}`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Partners Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Real feedback from real partners who have experienced transformational results.
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
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
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
                      <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                      <AvatarFallback>{testimonial.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-card-foreground" data-testid={`testimonial-author-${testimonial.id}`}>
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-primary font-medium">{testimonial.title}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.company}</div>
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

                  <Button asChild size="sm" variant="outline" className="w-full mt-4">
                    <Link href="/portfolio" data-testid={`testimonial-details-${testimonial.id}`}>
                      View Full Case Study
                    </Link>
                  </Button>
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
            <Rocket className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our growing network of successful partners. Let's discuss how we can 
              help transform your business and achieve exceptional results together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-chart-2">
                <Link href="/contact" data-testid="final-cta-primary">
                  Become a Partner
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services" data-testid="final-cta-secondary">
                  Explore Services
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              <div className="text-center">
                <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">150+</div>
                <div className="text-sm text-muted-foreground">Successful Partners</div>
              </div>
              <div className="text-center">
                <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">15+</div>
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </div>
              <div className="text-center">
                <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}