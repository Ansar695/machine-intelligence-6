import { Badge } from "@/components/ui/badge";
import { timeline } from "@/utils/static-data/aboutData";

export default function Timeline() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From a small startup to an industry-recognized software development company.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          {timeline.map((item, index) => (
            <div key={index} className="flex gap-8 mb-12 last:mb-0" data-testid={`timeline-${index}`}>
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
                  <h3 className="text-xl font-semibold text-card-foreground">{item.title}</h3>
                  <Badge variant="outline" className="ml-4">{item.milestone}</Badge>
                </div>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


