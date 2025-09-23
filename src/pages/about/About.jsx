import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import {
  Target,
  Users,
  Heart,
  Lightbulb,
  Shield,
  Rocket,
  Award,
  Globe,
  ArrowRight,
  Calendar,
  MapPin,
  Linkedin,
  Github,
  Trophy,
  Star,
  CheckCircle,
  Zap,
  Building,
} from "lucide-react";

const mission = {
  title: "Our Mission",
  description:
    "To empower businesses worldwide with innovative software solutions that drive growth, efficiency, and digital transformation.",
  vision:
    "To be the leading software development partner that transforms ideas into powerful digital experiences.",
  values: [
    {
      icon: Heart,
      title: "Client-First Approach",
      description:
        "Every decision we make prioritizes our clients' success and satisfaction.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We embrace cutting-edge technologies and creative solutions to solve complex challenges.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We believe in the power of teamwork, both within our team and with our clients.",
    },
    {
      icon: Shield,
      title: "Quality & Security",
      description:
        "We maintain the highest standards of code quality and security in everything we build.",
    },
  ],
};

const timeline = [
  {
    year: "2019",
    title: "Company Founded",
    description:
      "Started as a small team with a vision to create exceptional software solutions for growing businesses.",
    milestone: "Founded",
  },
  {
    year: "2020",
    title: "First Major Client",
    description:
      "Landed our first enterprise client and delivered a scalable e-commerce platform that increased their revenue by 300%.",
    milestone: "Growth",
  },
  {
    year: "2021",
    title: "Team Expansion",
    description:
      "Grew our team to 15+ experienced developers and designers, enabling us to take on larger, more complex projects.",
    milestone: "Scale",
  },
  {
    year: "2022",
    title: "International Reach",
    description:
      "Expanded our client base globally, working with companies across North America, Europe, and Asia.",
    milestone: "Global",
  },
  {
    year: "2023",
    title: "Technology Leadership",
    description:
      "Became early adopters of AI/ML integration in software development, helping clients leverage cutting-edge technology.",
    milestone: "Innovation",
  },
  {
    year: "2024",
    title: "Award Recognition",
    description:
      "Received multiple industry awards for excellence in software development and client satisfaction.",
    milestone: "Recognition",
  },
  {
    year: "2025",
    title: "Future Vision",
    description:
      "Continuing to innovate and expand our services to help more businesses succeed in the digital economy.",
    milestone: "Future",
  },
];

const team = [
  {
    name: "Alex Johnson",
    role: "CEO & Founder",
    bio: "15+ years in software development with expertise in scaling tech teams and delivering enterprise solutions.",
    avatar: "/api/placeholder/120/120",
    initials: "AJ",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    bio: "Former Google engineer with deep expertise in cloud architecture and system design.",
    avatar: "/api/placeholder/120/120",
    initials: "SC",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Design",
    bio: "Award-winning UX designer focused on creating intuitive and accessible user experiences.",
    avatar: "/api/placeholder/120/120",
    initials: "MR",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Emily Watson",
    role: "VP of Engineering",
    bio: "Expert in agile development methodologies and building high-performance development teams.",
    avatar: "/api/placeholder/120/120",
    initials: "EW",
    linkedin: "#",
    github: "#",
  },
];

const certifications = [
  {
    title: "AWS Advanced Consulting Partner",
    issuer: "Amazon Web Services",
    year: "2024",
    description:
      "Recognized expertise in cloud architecture and migration services",
    icon: Award,
  },
  {
    title: "Google Cloud Partner",
    issuer: "Google Cloud",
    year: "2023",
    description: "Certified expertise in Google Cloud Platform solutions",
    icon: Trophy,
  },
  {
    title: "Microsoft Gold Partner",
    issuer: "Microsoft",
    year: "2023",
    description:
      "Highest level of Microsoft partnership for Azure and development services",
    icon: Star,
  },
  {
    title: "ISO 27001 Certified",
    issuer: "International Organization for Standardization",
    year: "2022",
    description: "Information security management system certification",
    icon: Shield,
  },
  {
    title: "SOC 2 Type II Compliant",
    issuer: "AICPA",
    year: "2024",
    description:
      "Security, availability, and confidentiality compliance certification",
    icon: CheckCircle,
  },
];

const stats = [
  { label: "Years of Experience", value: "6+", icon: Calendar },
  { label: "Projects Delivered", value: "200+", icon: Rocket },
  { label: "Happy Clients", value: "150+", icon: Users },
  { label: "Team Members", value: "25+", icon: Building },
  { label: "Countries Served", value: "15+", icon: Globe },
  { label: "Success Rate", value: "98%", icon: Target },
];

const culture = [
  {
    title: "Remote-First Culture",
    description:
      "We embrace flexible working arrangements that prioritize work-life balance and productivity.",
    icon: Globe,
  },
  {
    title: "Continuous Learning",
    description:
      "Investment in team growth through training, conferences, and certification programs.",
    icon: Lightbulb,
  },
  {
    title: "Innovation Time",
    description:
      "20% time dedicated to exploring new technologies and contributing to open-source projects.",
    icon: Zap,
  },
  {
    title: "Diverse & Inclusive",
    description:
      "Building a team that represents diverse backgrounds, perspectives, and experiences.",
    icon: Users,
  },
];

export default function About() {
  return (
    <>
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
                About SoftwareCraft
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-foreground via-primary to-chart-2 bg-clip-text text-transparent">
                  Crafting Digital Excellence Since 2019
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                We're a passionate team of developers, designers, and
                strategists dedicated to building software solutions that
                transform businesses and create lasting impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary to-chart-2"
                >
                  <Link to="/contact" data-testid="hero-cta-primary">
                    Work With Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/careers" data-testid="hero-cta-secondary">
                    Join Our Team
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {mission.title}
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                  {mission.description}
                </p>
                <div className="bg-gradient-to-r from-primary/10 via-chart-2/10 to-primary/10 rounded-2xl p-8 max-w-4xl mx-auto">
                  <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {mission.vision}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {mission.values.map((value, index) => (
                  <Card key={index} className="text-center hover-elevate">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3
                        className="text-lg font-semibold mb-3"
                        data-testid={`value-title-${index}`}
                      >
                        {value.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Impact in Numbers
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Six years of consistent growth and success, powered by our
                amazing team and clients.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center"
                  data-testid={`stat-${index}`}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Journey
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From a small startup to an industry-recognized software
                development company.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-8 mb-12 last:mb-0"
                  data-testid={`timeline-${index}`}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-chart-2 text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm mb-4">
                      {item.year}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-24 bg-gradient-to-b from-primary to-chart-2"></div>
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-card-foreground">
                        {item.title}
                      </h3>
                      <Badge variant="outline" className="ml-4">
                        {item.milestone}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Leadership Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meet the experienced professionals leading SoftwareCraft towards
                continued innovation and growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {team.map((member, index) => (
                <Card key={index} className="text-center hover-elevate">
                  <CardContent className="p-6">
                    <Avatar className="w-20 h-20 mx-auto mb-4">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback className="text-lg">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>

                    <h3
                      className="text-lg font-semibold mb-1"
                      data-testid={`team-name-${index}`}
                    >
                      {member.name}
                    </h3>
                    <p className="text-primary text-sm font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {member.bio}
                    </p>

                    <div className="flex justify-center space-x-3">
                      <Button
                        size="icon"
                        variant="ghost"
                        asChild
                        data-testid={`team-linkedin-${index}`}
                      >
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="h-4 w-4" />
                          <span className="sr-only">LinkedIn</span>
                        </a>
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        asChild
                        data-testid={`team-github-${index}`}
                      >
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                          <span className="sr-only">GitHub</span>
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications & Awards */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Certifications & Recognition
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our commitment to excellence is recognized by industry leaders
                and certification bodies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {certifications.map((cert, index) => (
                <Card key={index} className="hover-elevate">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <cert.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3
                            className="text-lg font-semibold text-card-foreground"
                            data-testid={`cert-title-${index}`}
                          >
                            {cert.title}
                          </h3>
                          <Badge variant="outline" className="ml-2">
                            {cert.year}
                          </Badge>
                        </div>
                        <p className="text-sm text-primary font-medium mb-2">
                          {cert.issuer}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Culture
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We believe that a great culture creates great products. Here's
                what makes SoftwareCraft special.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {culture.map((item, index) => (
                <Card key={index} className="hover-elevate">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3
                          className="text-lg font-semibold mb-2"
                          data-testid={`culture-title-${index}`}
                        >
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-primary/10 via-chart-2/10 to-primary/10 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Join Our Journey?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether you're looking for a development partner or want to join
                our team, we'd love to hear from you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary to-chart-2"
                >
                  <Link to="/contact" data-testid="final-cta-client">
                    Start Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/careers" data-testid="final-cta-careers">
                    Explore Careers
                  </Link>
                </Button>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  <MapPin className="inline h-4 w-4 mr-1" />
                  Remote-first company with team members across 5 continents
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
