import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { 
  Users, 
  Trophy, 
  Target, 
  Heart,
  Linkedin,
  Twitter,
  Github
} from 'lucide-react'

//todo: remove mock functionality
const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Lead Developer",
    bio: "Full-stack architect with 8+ years building scalable solutions",
    avatar: "AJ",
    expertise: ["React", "Node.js", "AWS"]
  },
  {
    name: "Sarah Chen", 
    role: "UI/UX Designer",
    bio: "Creative designer focused on user-centered digital experiences",
    avatar: "SC",
    expertise: ["Figma", "Design Systems", "User Research"]
  },
  {
    name: "Mike Rodriguez",
    role: "DevOps Engineer", 
    bio: "Infrastructure specialist ensuring reliable and secure deployments",
    avatar: "MR",
    expertise: ["Docker", "Kubernetes", "CI/CD"]
  },
  {
    name: "Emily Davis",
    role: "Product Manager",
    bio: "Strategic thinker bridging business needs with technical solutions",
    avatar: "ED", 
    expertise: ["Product Strategy", "Agile", "Analytics"]
  }
]

const stats = [
  {
    icon: Users,
    value: "150+",
    label: "Happy Clients",
    description: "Trusted by businesses worldwide"
  },
  {
    icon: Trophy,
    value: "200+",
    label: "Projects Completed",
    description: "Successfully delivered solutions"
  },
  {
    icon: Target,
    value: "98%",
    label: "Success Rate",
    description: "On-time and on-budget delivery"
  },
  {
    icon: Heart,
    value: "10+",
    label: "Years Experience",
    description: "Proven track record of excellence"
  }
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
            <Users className="h-4 w-4" />
            About Us
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Meet Our Expert Team
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're a passionate team of developers, designers, and strategists 
            dedicated to creating exceptional software solutions that drive business success.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover-elevate" data-testid={`stat-card-${index}`}>
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-card-foreground mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-12">Our Leadership Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover-elevate text-center" data-testid={`team-member-${index}`}>
                <CardContent className="p-6">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src="" alt={member.name} />
                    <AvatarFallback className="text-lg bg-primary/10 text-primary">
                      {member.avatar}
                    </AvatarFallback>
                  </Avatar>
                  
                  <h4 className="text-lg font-semibold text-card-foreground mb-1">
                    {member.name}
                  </h4>
                  
                  <p className="text-sm text-primary font-medium mb-3">
                    {member.role}
                  </p>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-1 mb-4">
                    {member.expertise.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Social Links - Mock functionality */}
                  <div className="flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="h-4 w-4" />
                    </button>
                    <button className="text-muted-foreground hover:text-primary transition-colors">
                      <Twitter className="h-4 w-4" />
                    </button>
                    <button className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="h-4 w-4" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Values */}
        <div className="bg-gradient-to-r from-primary/5 via-chart-2/5 to-primary/5 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-center mb-8">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Quality First</h4>
              <p className="text-muted-foreground text-sm">
                We deliver exceptional software solutions that exceed expectations and stand the test of time.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-chart-2/10 rounded-lg mb-4">
                <Users className="h-6 w-6 text-chart-2" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Client Success</h4>
              <p className="text-muted-foreground text-sm">
                Your success is our success. We partner with you to achieve your business goals and objectives.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-chart-3/10 rounded-lg mb-4">
                <Heart className="h-6 w-6 text-chart-3" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Innovation</h4>
              <p className="text-muted-foreground text-sm">
                We embrace cutting-edge technologies to create solutions that give you a competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}