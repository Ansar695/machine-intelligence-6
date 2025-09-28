import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqs } from "@/utils/static-data/servicesData";

export default function FAQ() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const toggleFaq = (index) => setExpandedFaq(expandedFaq === index ? null : index);

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our services, process, and pricing.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <Card key={index} className="mb-4 hover-elevate">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between"
                  data-testid={`faq-question-${index}`}
                >
                  <h3 className="text-lg font-semibold text-card-foreground pr-4">{faq.question}</h3>
                  {expandedFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-6" data-testid={`faq-answer-${index}`}>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


