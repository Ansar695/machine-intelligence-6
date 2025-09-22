import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import {
  Code2,
  Smartphone,
  Globe,
  Database,
  Cloud,
  Cog,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Award,
  Zap,
  Target,
  Building,
  Heart,
  Lightbulb,
  Shield,
  Quote,
} from "lucide-react";

const featuredServices = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive websites and web applications",
    features: ["React & Next.js", "Mobile Responsive", "SEO Optimized"],
    href: "/services",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications",
    features: ["iOS & Android", "React Native", "App Store Ready"],
    href: "/services",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration",
    features: ["AWS & Azure", "Auto Scaling", "99.9% Uptime"],
    href: "/services",
  },
];

const stats = [
  { label: "Projects Delivered", value: "200+", icon: Target },
  { label: "Happy Clients", value: "150+", icon: Users },
  { label: "Success Rate", value: "98%", icon: TrendingUp },
  { label: "Years Experience", value: "6+", icon: Award },
];

const testimonials = [
  {
    quote:
      "SoftwareCraft transformed our business with their innovative e-commerce solution. Revenue increased by 250% in just 6 months.",
    author: "Sarah Johnson",
    title: "CEO, RetailCorp Inc.",
    avatar: "/api/placeholder/60/60",
    initials: "SJ",
  },
  {
    quote:
      "Outstanding mobile development expertise. Our banking app now has industry-leading ratings and significantly improved customer engagement.",
    author: "Lisa Rodriguez",
    title: "VP Product, Community Bank",
    avatar: "/api/placeholder/60/60",
    initials: "LR",
  },
  {
    quote:
      "The quality of their code and attention to security standards is exceptional. Perfect for our healthcare compliance needs.",
    author: "Dr. Michael Chen",
    title: "CTO, MedGroup Solutions",
    avatar: "/api/placeholder/60/60",
    initials: "MC",
  },
];

const companyValues = [
  {
    icon: Heart,
    title: "Client-First",
    description: "Your success is our priority",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Cutting-edge solutions",
  },
  {
    icon: Shield,
    title: "Quality",
    description: "Security & excellence",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Teamwork & transparency",
  },
];

export default function Home() {
  return (
    <>
      <SEO
        title="Build Software That Scales Your Business"
        description="Transform your ideas into powerful software solutions. We build custom web applications, mobile apps, and cloud platforms that drive business growth and digital transformation."
        keywords="software development, web development, mobile apps, cloud solutions, custom software, business growth, digital transformation"
        ogTitle="SoftwareCraft - Modern Software Solutions That Scale"
        ogDescription="Trusted by 150+ companies worldwide. We create innovative software solutions that transform businesses and drive measurable results."
      />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5">
            <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_85%)]" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-5xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
                <Zap className="h-4 w-4" />
                Trusted by 150+ Companies Worldwide
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-foreground via-primary to-chart-2 bg-clip-text text-transparent">
                  Build Software That Scales Your Business
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
                We're a team of passionate developers, designers, and
                strategists who craft custom software solutions that drive
                growth, efficiency, and digital transformation.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary to-chart-2 text-lg px-8 py-6"
                >
                  <Link href="/contact" data-testid="hero-cta-primary">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6"
                >
                  <Link href="/portfolio" data-testid="hero-cta-secondary">
                    View Our Work
                  </Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center"
                    data-testid={`hero-stat-${index}`}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                What We Build
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From concept to deployment, we deliver software solutions that
                transform your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {featuredServices.map((service, index) => (
                <Card
                  key={index}
                  className="group hover-elevate text-center h-full"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3
                      className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors"
                      data-testid={`service-title-${index}`}
                    >
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-8">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center justify-center text-sm"
                        >
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="outline" className="w-full">
                      <Link
                        href={service.href}
                        data-testid={`service-cta-${index}`}
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline">
                <Link href="/services" data-testid="all-services-cta">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose SoftwareCraft
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We're more than just developers. We're your partners in digital
                transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {companyValues.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    data-testid={`value-title-${index}`}
                  >
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                What Our Clients Say
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real results from real clients who've experienced the
                SoftwareCraft difference.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover-elevate">
                  <CardContent className="p-8">
                    <div className="flex mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>

                    <Quote className="h-8 w-8 text-primary/20 mb-4" />

                    <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>

                    <div className="flex items-center">
                      <Avatar className="w-12 h-12 mr-4">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.author}
                        />
                        <AvatarFallback>{testimonial.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div
                          className="font-semibold text-card-foreground"
                          data-testid={`testimonial-author-${index}`}
                        >
                          {testimonial.author}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.title}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline">
                <Link
                  href="/clients-partners"
                  data-testid="all-testimonials-cta"
                >
                  See All Success Stories
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-primary/10 via-chart-2/10 to-primary/10 rounded-2xl p-12 md:p-16 text-center max-w-5xl mx-auto">
              <Building className="h-16 w-16 text-primary mx-auto mb-8" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                Let's discuss your project and create a custom solution that
                delivers measurable results and exceeds your expectations.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary to-chart-2 text-lg px-8 py-6"
                >
                  <Link href="/contact" data-testid="final-cta-primary">
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6"
                >
                  <Link href="/about" data-testid="final-cta-secondary">
                    Learn About Us
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-border">
                <div className="text-center">
                  <CheckCircle className="h-10 w-10 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground mb-1">
                    98%
                  </div>
                  <div className="text-muted-foreground">Success Rate</div>
                </div>
                <div className="text-center">
                  <Users className="h-10 w-10 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground mb-1">
                    24h
                  </div>
                  <div className="text-muted-foreground">Response Time</div>
                </div>
                <div className="text-center">
                  <Award className="h-10 w-10 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground mb-1">
                    6+
                  </div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
