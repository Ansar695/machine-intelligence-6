import { companyValues } from "@/utils/static-data/homeData";

const WhyChooseUs = () => {
  return (
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
  );
};

export default WhyChooseUs;
