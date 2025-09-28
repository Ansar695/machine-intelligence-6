import { teamSpotlight } from "@/utils/static-data/careerData";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Calendar } from "lucide-react";

const TeamSpotlight = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Hear From Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from team members about their experience working at
            SoftwareCraft.
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
                    <h3
                      className="font-semibold text-card-foreground"
                      data-testid={`team-member-${index}`}
                    >
                      {member.name}
                    </h3>
                    <p className="text-sm text-primary font-medium">
                      {member.role}
                    </p>
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
  );
};

export default TeamSpotlight;
