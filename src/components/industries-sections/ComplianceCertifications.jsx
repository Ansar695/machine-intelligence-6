import { certifications } from "@/utils/static-data/industriesData";
import { Card, CardContent } from "../ui/card";
import { Shield } from "lucide-react";

const ComplianceCertifications = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Industry Compliance & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We maintain the highest standards of compliance and security across
            all industries we serve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className="text-center hover-elevate">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3
                  className="text-lg font-semibold mb-2"
                  data-testid={`certification-${index}`}
                >
                  {cert.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Applicable to: {cert.industries.join(", ")}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceCertifications;
