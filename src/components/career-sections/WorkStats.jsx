import { workStats } from "@/utils/static-data/careerData";

const WorkStats = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Our Team Loves Working Here
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Numbers that reflect our commitment to creating an exceptional
            workplace culture.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {workStats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
              data-testid={`work-stat-${index}`}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkStats;
