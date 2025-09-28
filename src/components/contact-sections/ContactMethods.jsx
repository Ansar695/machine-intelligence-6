import { contactMethods } from "@/utils/static-data/contactData";
import React from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const ContactMethods = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Multiple Ways to Reach Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the contact method that works best for you. We're committed
            to responding quickly and thoroughly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {contactMethods.map((method, index) => (
            <Card
              key={index}
              className={`text-center hover-elevate ${
                method.primary ? "ring-2 ring-primary/20" : ""
              }`}
            >
              <CardContent className="p-6">
                {method.primary && <Badge className="mb-4">Recommended</Badge>}
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <method.icon className="h-6 w-6 text-primary" />
                </div>
                <h3
                  className="text-lg font-semibold mb-2"
                  data-testid={`contact-method-${index}`}
                >
                  {method.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {method.description}
                </p>
                <p className="text-sm font-medium text-primary mb-2">
                  {method.contact}
                </p>
                <p className="text-xs text-muted-foreground mb-4">
                  Response time: {method.responseTime}
                </p>
                <Button asChild size="sm" variant="outline" className="w-full">
                  <a
                    href={method.action}
                    target={
                      method.action.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      method.action.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    data-testid={`contact-action-${index}`}
                  >
                    Contact
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;
