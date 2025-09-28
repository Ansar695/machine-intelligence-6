import { clientLogos } from "@/utils/static-data/clientPartnerData";

const TrustedBy = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Trusted by Great Companies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're proud to work with industry leaders across various sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {clientLogos.map((client, index) => (
            <div
              key={index}
              className="bg-muted/30 rounded-lg p-6 flex items-center justify-center hover-elevate transition-all group"
              data-testid={`client-logo-${index}`}
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="max-w-full max-h-12 object-contain opacity-60 group-hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
