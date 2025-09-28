import { Card, CardContent } from "@/components/ui/card";
import { mission } from "@/utils/static-data/aboutData";

export default function Mission() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{mission.title}</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">{mission.description}</p>
            <div className="bg-gradient-to-r from-primary/10 via-chart-2/10 to-primary/10 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">{mission.vision}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mission.values.map((value, index) => (
              <Card key={index} className="text-center hover-elevate">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3" data-testid={`value-title-${index}`}>{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


