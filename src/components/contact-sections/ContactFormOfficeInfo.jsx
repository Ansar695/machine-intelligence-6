import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  budgetRanges,
  offices,
  projectTypes,
} from "@/utils/static-data/contactData";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";

const ContactFormOfficeInfo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      projectType: "",
      budget: "",
      timeline: "",
      message: "",
    });

    setIsSubmitting(false);
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">
                Tell Us About Your Project
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 24
                hours with a detailed response.
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  id="contact-form"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        required
                        data-testid="input-name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) =>
                          handleInputChange("company", e.target.value)
                        }
                        data-testid="input-company"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        required
                        data-testid="input-email"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        data-testid="input-phone"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="projectType">Project Type</Label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("projectType", value)
                        }
                        value={formData.projectType}
                      >
                        <SelectTrigger data-testid="select-project-type">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          {projectTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("budget", value)
                        }
                        value={formData.budget}
                      >
                        <SelectTrigger data-testid="select-budget">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((range) => (
                            <SelectItem key={range} value={range}>
                              {range}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="timeline">Desired Timeline</Label>
                    <Input
                      id="timeline"
                      value={formData.timeline}
                      onChange={(e) =>
                        handleInputChange("timeline", e.target.value)
                      }
                      placeholder="e.g., 3 months, ASAP, Q2 2025"
                      data-testid="input-timeline"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Project Description *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                      className="min-h-[120px]"
                      required
                      data-testid="textarea-message"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-chart-2"
                    disabled={isSubmitting}
                    data-testid="button-submit"
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Office Information */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Our Offices</h2>
              <p className="text-muted-foreground">
                We have teams across multiple locations to better serve our
                global client base.
              </p>
            </div>

            <div className="space-y-6">
              {offices.map((office, index) => (
                <Card key={index} className="hover-elevate">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3
                          className="text-lg font-semibold mb-2"
                          data-testid={`office-city-${index}`}
                        >
                          {office.city}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3 whitespace-pre-line">
                          {office.address}
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm">
                            <Phone className="h-4 w-4 mr-2 text-primary" />
                            <a
                              href={`tel:${office.phone}`}
                              className="hover:text-primary transition-colors"
                            >
                              {office.phone}
                            </a>
                          </div>
                          <div className="flex items-center text-sm">
                            <Mail className="h-4 w-4 mr-2 text-primary" />
                            <a
                              href={`mailto:${office.email}`}
                              className="hover:text-primary transition-colors"
                            >
                              {office.email}
                            </a>
                          </div>
                          <div className="flex items-center text-sm">
                            <Clock className="h-4 w-4 mr-2 text-primary" />
                            <span>
                              {office.hours} ({office.timezone})
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormOfficeInfo;
