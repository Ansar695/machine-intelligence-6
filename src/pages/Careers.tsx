import { useState } from 'react'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Link } from 'wouter'
import SEO from '@/components/SEO'
import {
  Users,
  Heart,
  Zap,
  Globe,
  Calendar,
  DollarSign,
  GraduationCap,
  Coffee,
  Laptop,
  Shield,
  ArrowRight,
  MapPin,
  Clock,
  Star,
  Building,
  Target,
  Lightbulb,
  Award,
  CheckCircle,
  Code2,
  Briefcase,
  Rocket,
  TrendingUp
} from 'lucide-react'

const cultureValues = [
  {
    icon: Heart,
    title: "People First",
    description: "We prioritize work-life balance, mental health, and personal growth. Our team's wellbeing comes first.",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: Lightbulb,
    title: "Innovation & Growth",
    description: "We encourage experimentation, learning from failures, and continuous improvement in everything we do.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe diverse perspectives create better solutions. Every voice matters and contributes to our success.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We maintain high standards in our work while supporting each other to achieve ambitious goals.",
    color: "from-green-500 to-emerald-500"
  }
]

const benefits = [
  {
    category: "Health & Wellness",
    icon: Heart,
    items: [
      "100% paid health, dental, and vision insurance",
      "Mental health support and counseling",
      "Annual wellness stipend ($1,500)",
      "Flexible working hours",
      "Unlimited paid time off",
      "4-day work week (pilot program)"
    ]
  },
  {
    category: "Professional Growth",
    icon: GraduationCap,
    items: [
      "Annual learning budget ($3,000)",
      "Conference attendance support",
      "Internal mentorship program",
      "Career development planning",
      "Technical certification reimbursement",
      "Speaker and workshop opportunities"
    ]
  },
  {
    category: "Financial Benefits",
    icon: DollarSign,
    items: [
      "Competitive salary with annual reviews",
      "Performance bonuses (up to 20%)",
      "Stock options for all employees",
      "401(k) with 6% company match",
      "Annual profit sharing",
      "Relocation assistance"
    ]
  },
  {
    category: "Work Environment",
    icon: Laptop,
    items: [
      "Remote-first culture",
      "Top-tier equipment allowance",
      "Home office setup budget ($2,000)",
      "Coworking space memberships",
      "Annual team retreats",
      "Flexible time zones"
    ]
  },
  {
    category: "Life & Family",
    icon: Users,
    items: [
      "16 weeks paid parental leave",
      "Family planning support",
      "Pet-friendly policies",
      "Sabbatical program (every 5 years)",
      "Life and disability insurance",
      "Employee assistance program"
    ]
  },
  {
    category: "Perks & Fun",
    icon: Coffee,
    items: [
      "Monthly team building activities",
      "Food and beverage allowance",
      "Gaming and entertainment budget",
      "Birthday and work anniversary gifts",
      "Employee referral bonuses",
      "Open source contribution time"
    ]
  }
]

const openPositions = [
  {
    id: 1,
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    location: "Remote (US/EU timezones)",
    type: "Full-time",
    experience: "5+ years",
    salary: "$120k - $160k",
    description: "Lead development of scalable web applications using React, Node.js, and cloud technologies.",
    requirements: [
      "5+ years of full-stack development experience",
      "Expertise in React, Node.js, and TypeScript",
      "Experience with cloud platforms (AWS/Azure)",
      "Strong understanding of software architecture",
      "Excellent communication and mentoring skills"
    ],
    technologies: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL", "Docker"],
    posted: "2 days ago",
    urgent: true
  },
  {
    id: 2,
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote (Global)",
    type: "Full-time",
    experience: "3+ years",
    salary: "$100k - $140k",
    description: "Build and maintain CI/CD pipelines, infrastructure automation, and cloud deployments.",
    requirements: [
      "3+ years of DevOps/Infrastructure experience",
      "Proficiency with Kubernetes and Docker",
      "Experience with Infrastructure as Code (Terraform)",
      "Cloud platform expertise (AWS, Azure, or GCP)",
      "Strong scripting and automation skills"
    ],
    technologies: ["Kubernetes", "Docker", "Terraform", "AWS", "Jenkins", "Prometheus"],
    posted: "1 week ago",
    urgent: false
  },
  {
    id: 3,
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote (US timezones)",
    type: "Full-time",
    experience: "4+ years",
    salary: "$90k - $120k",
    description: "Create intuitive and engaging user experiences for web and mobile applications.",
    requirements: [
      "4+ years of UX/UI design experience",
      "Proficiency in Figma and design systems",
      "Experience with user research and testing",
      "Strong portfolio of digital products",
      "Understanding of front-end development"
    ],
    technologies: ["Figma", "Adobe Creative Suite", "Framer", "Principle", "React", "HTML/CSS"],
    posted: "3 days ago",
    urgent: false
  },
  {
    id: 4,
    title: "Product Manager",
    department: "Product",
    location: "San Francisco / Remote",
    type: "Full-time",
    experience: "6+ years",
    salary: "$130k - $170k",
    description: "Drive product strategy and execution for our growing portfolio of software solutions.",
    requirements: [
      "6+ years of product management experience",
      "Experience with B2B software products",
      "Strong analytical and data-driven mindset",
      "Excellent stakeholder management skills",
      "Technical background preferred"
    ],
    technologies: ["Jira", "Linear", "Figma", "Analytics Tools", "SQL", "API Documentation"],
    posted: "5 days ago",
    urgent: false
  },
  {
    id: 5,
    title: "Senior Mobile Developer",
    department: "Engineering",
    location: "Remote (Any timezone)",
    type: "Full-time",
    experience: "5+ years",
    salary: "$115k - $150k",
    description: "Develop high-quality mobile applications for iOS and Android platforms.",
    requirements: [
      "5+ years of mobile development experience",
      "Expertise in React Native or Flutter",
      "Native iOS/Android development experience",
      "App Store and Google Play deployment experience",
      "Performance optimization and testing skills"
    ],
    technologies: ["React Native", "Swift", "Kotlin", "Flutter", "Firebase", "REST APIs"],
    posted: "1 week ago",
    urgent: false
  },
  {
    id: 6,
    title: "Marketing Manager",
    department: "Marketing",
    location: "New York / Remote",
    type: "Full-time",
    experience: "4+ years",
    salary: "$80k - $110k",
    description: "Lead marketing initiatives to grow our brand and generate qualified leads.",
    requirements: [
      "4+ years of B2B marketing experience",
      "Experience with digital marketing channels",
      "Content creation and campaign management",
      "Analytics and performance tracking",
      "Tech industry experience preferred"
    ],
    technologies: ["HubSpot", "Google Analytics", "LinkedIn Ads", "Content Management", "SEO Tools"],
    posted: "4 days ago",
    urgent: false
  }
]

const teamSpotlight = [
  {
    name: "Alex Rivera",
    role: "Senior Developer",
    quote: "The learning opportunities here are incredible. I've grown more in 2 years at SoftwareCraft than in my previous 5 years elsewhere.",
    avatar: "/api/placeholder/80/80",
    initials: "AR",
    tenure: "2 years",
    department: "Engineering"
  },
  {
    name: "Sarah Kim",
    role: "UX Designer",
    quote: "The collaborative culture and focus on user-centered design makes this the perfect place to create meaningful products.",
    avatar: "/api/placeholder/80/80",
    initials: "SK",
    tenure: "1.5 years",
    department: "Design"
  },
  {
    name: "Michael Thompson",
    role: "DevOps Engineer",
    quote: "Remote-first doesn't mean isolated. The team spirit and support system here is amazing. Best decision I ever made.",
    avatar: "/api/placeholder/80/80",
    initials: "MT",
    tenure: "3 years",
    department: "Infrastructure"
  }
]

const workStats = [
  { label: "Team Members", value: "25+", icon: Users },
  { label: "Countries", value: "8", icon: Globe },
  { label: "Average Tenure", value: "3.2 years", icon: Calendar },
  { label: "Employee Rating", value: "4.9/5", icon: Star },
  { label: "Work-Life Balance", value: "9.2/10", icon: Heart },
  { label: "Growth Rate", value: "150%", icon: TrendingUp }
]

export default function Careers() {
  return (
    <>
      <SEO 
        title="Careers - Join Our Team of Expert Developers"
        description="Join SoftwareCraft's remote-first team of passionate developers. Explore open positions in engineering, design, and product development with competitive benefits and growth opportunities."
        keywords="software developer jobs, remote developer careers, engineering positions, software development team, tech careers, developer benefits"
        ogTitle="Software Development Careers at SoftwareCraft"
        ogDescription="Build your career with a leading software development company. Remote opportunities, competitive benefits, and a culture of innovation await."
      />
      <CareersContent />
    </>
  )
}

function CareersContent() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null)
  const [selectedDepartment, setSelectedDepartment] = useState("All")

  const departments = ["All", "Engineering", "Design", "Product", "Infrastructure", "Marketing"]
  
  const filteredJobs = selectedDepartment === "All" 
    ? openPositions 
    : openPositions.filter(job => job.department === selectedDepartment)

  const handleJobClick = (jobId: number) => {
    setSelectedJob(selectedJob === jobId ? null : jobId)
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
              <Briefcase className="h-4 w-4" />
              Join Our Team
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-foreground via-primary to-chart-2 bg-clip-text text-transparent">
                Build Your Career With Purpose
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Join a passionate team of innovators, creators, and problem-solvers. 
              We're building the future of software development while prioritizing growth, balance, and meaningful work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-chart-2">
                <a href="#open-positions" data-testid="hero-cta-primary">
                  View Open Positions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/about" data-testid="hero-cta-secondary">
                  Learn About Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Work Stats */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Our Team Loves Working Here</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Numbers that reflect our commitment to creating an exceptional workplace culture.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
            {workStats.map((stat, index) => (
              <div key={index} className="text-center" data-testid={`work-stat-${index}`}>
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

      {/* Culture & Values */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Culture & Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide how we work, grow, and succeed together as a team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {cultureValues.map((value, index) => (
              <Card key={index} className="hover-elevate">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${value.color}`} />
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3" data-testid={`culture-value-${index}`}>
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Benefits Package</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We invest in our team's success with industry-leading benefits and perks that support your whole life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover-elevate">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <benefit.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold" data-testid={`benefit-category-${index}`}>
                      {benefit.category}
                    </h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {benefit.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Spotlight */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Hear From Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real stories from team members about their experience working at SoftwareCraft.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamSpotlight.map((member, index) => (
              <Card key={index} className="hover-elevate">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="w-12 h-12 mr-4">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>{member.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-card-foreground" data-testid={`team-member-${index}`}>
                        {member.name}
                      </h3>
                      <p className="text-sm text-primary font-medium">{member.role}</p>
                      <div className="flex items-center text-xs text-muted-foreground mt-1">
                        <Calendar className="h-3 w-3 mr-1" />
                        {member.tenure}
                        <span className="mx-2">•</span>
                        {member.department}
                      </div>
                    </div>
                  </div>
                  
                  <blockquote className="text-muted-foreground leading-relaxed italic">
                    "{member.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-muted/30" id="open-positions">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Open Positions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Join our growing team and help us build the future of software development.
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
                        <h3 className="text-xl font-semibold text-card-foreground" data-testid={`job-title-${job.id}`}>
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
                          <Badge key={tech} variant="secondary" className="text-xs">
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
                          {selectedJob === job.id ? 'Hide Details' : 'View Details'}
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
                        <Button asChild className="bg-gradient-to-r from-primary to-chart-2">
                          <Link href="/contact" data-testid={`job-apply-${job.id}`}>
                            Apply Now
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="outline" asChild>
                          <a href="mailto:careers@softwarecraft.dev" data-testid={`job-email-${job.id}`}>
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

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/10 via-chart-2/10 to-primary/10 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <Rocket className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Don't See a Perfect Match?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for exceptional talent. If you're passionate about building amazing software 
              and want to be part of our journey, we'd love to hear from you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-chart-2">
                <a href="mailto:careers@softwarecraft.dev" data-testid="final-cta-primary">
                  Send Us Your Resume
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact" data-testid="final-cta-secondary">
                  Get in Touch
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              <div className="text-center">
                <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">Remote-First</div>
                <div className="text-sm text-muted-foreground">Work From Anywhere</div>
              </div>
              <div className="text-center">
                <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">Top Benefits</div>
                <div className="text-sm text-muted-foreground">Industry Leading Package</div>
              </div>
              <div className="text-center">
                <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">Growing Team</div>
                <div className="text-sm text-muted-foreground">Join Our Success</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}