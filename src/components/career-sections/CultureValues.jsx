import { cultureValues } from "@/utils/static-data/careerData";
import { Card, CardContent } from "../ui/card";

const CultureValues = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Culture & Values
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The principles that guide how we work, grow, and succeed together as
            a team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {cultureValues.map((value, index) => (
            <Card key={index} className="hover-elevate">
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${value.color}`}
              />
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3
                      className="text-xl font-semibold mb-3"
                      data-testid={`culture-value-${index}`}
                    >
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
  );
};

export default CultureValues;
