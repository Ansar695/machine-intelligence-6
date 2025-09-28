import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Linkedin, Github } from "lucide-react";
import { team } from "@/utils/static-data/aboutData";

export default function Team() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Leadership Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the experienced professionals leading SoftwareCraft towards continued innovation and growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <Card key={index} className="text-center hover-elevate">
              <CardContent className="p-6">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback className="text-lg">{member.initials}</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-semibold mb-1" data-testid={`team-name-${index}`}>{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  <Button size="icon" variant="ghost" asChild data-testid={`team-linkedin-${index}`}>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </Button>
                  <Button size="icon" variant="ghost" asChild data-testid={`team-github-${index}`}>
                    <a href={member.github} target="_blank" rel="noopener noreferrer">
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
  );
}


