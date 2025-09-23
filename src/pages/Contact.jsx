import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import SEO from '@/components/SEO';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Send,
  MessageSquare,



  CheckCircle,

  Linkedin,

  Zap,
  Star,
  Heart } from
'lucide-react';

const contactMethods = [
{
  icon: Mail,
  title: "Email Us",
  description: "Get in touch via email for detailed discussions",
  contact: "hello@softwarecraft.dev",
  action: "mailto:hello@softwarecraft.dev",
  responseTime: "24 hours",
  primary: true
},
{
  icon: Phone,
  title: "Call Us",
  description: "Speak directly with our team",
  contact: "+1 (555) 123-4567",
  action: "tel:+15551234567",
  responseTime: "Immediate",
  primary: false
},
{
  icon: MessageSquare,
  title: "Live Chat",
  description: "Real-time chat support during business hours",
  contact: "Available 9 AM - 6 PM EST",
  action: "#",
  responseTime: "< 5 minutes",
  primary: false
},
{
  icon: Linkedin,
  title: "LinkedIn",
  description: "Connect with us professionally",
  contact: "linkedin.com/company/softwarecraft",
  action: "https://linkedin.com/company/softwarecraft",
  responseTime: "48 hours",
  primary: false
}];


const offices = [
{
  city: "New York",
  address: "123 Tech Street, Suite 100\nNew York, NY 10001",
  phone: "+1 (555) 123-4567",
  email: "ny@softwarecraft.dev",
  timezone: "EST",
  hours: "9 AM - 6 PM"
},
{
  city: "San Francisco",
  address: "456 Innovation Ave, Floor 5\nSan Francisco, CA 94105",
  phone: "+1 (555) 987-6543",
  email: "sf@softwarecraft.dev",
  timezone: "PST",
  hours: "9 AM - 6 PM"
},
{
  city: "Remote",
  address: "Global team available\nacross all time zones",
  phone: "+1 (555) 123-4567",
  email: "remote@softwarecraft.dev",
  timezone: "UTC",
  hours: "24/7 Support"
}];


const projectTypes = [
"Web Development",
"Mobile App Development",
"E-commerce Platform",
"Enterprise Software",
"API Development",
"Cloud Migration",
"Data Analytics",
"Custom Integration",
"Consulting",
"Other"];


const budgetRanges = [
"Under $10,000",
"$10,000 - $25,000",
"$25,000 - $50,000",
"$50,000 - $100,000",
"$100,000 - $250,000",
"$250,000+"];


const faqs = [
{
  question: "How quickly can you start my project?",
  answer: "We typically begin new projects within 1-2 weeks of contract signing, depending on our current capacity and project complexity."
},
{
  question: "Do you provide ongoing support after launch?",
  answer: "Yes, we offer various support packages including maintenance, updates, monitoring, and feature enhancements to ensure your solution continues to meet your needs."
},
{
  question: "Can you work with our existing team?",
  answer: "Absolutely! We frequently collaborate with internal teams, providing additional expertise and resources while integrating with your existing workflows and processes."
},
{
  question: "What's your payment structure?",
  answer: "We typically work with milestone-based payments aligned with project deliverables. For larger projects, we offer flexible payment terms to accommodate your cash flow requirements."
}];


export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us - Get Your Free Consultation"
        description="Ready to start your software project? Contact SoftwareCraft for a free consultation. Expert developers available via phone, email, or live chat with 24-hour response time."
        keywords="contact software developers, free consultation, software development quote, project discussion, custom software contact"
        ogTitle="Contact SoftwareCraft - Free Software Development Consultation"
        ogDescription="Get in touch with our expert development team. Free consultations, 24-hour response time, and transparent project discussions." />
      
      <ContactContent />
    </>);

}

function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
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
      description: "We'll get back to you within 24 hours."
    });

    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      projectType: '',
      budget: '',
      timeline: '',
      message: ''
    });

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_85%)]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-6">
              <MessageSquare className="h-4 w-4" />
              Get In Touch
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-foreground via-primary to-chart-2 bg-clip-text text-transparent">
                Let's Build Something Amazing Together
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with cutting-edge software solutions? 
              We're here to help you every step of the way, from initial consultation to ongoing support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-chart-2">
                <a href="#contact-form" data-testid="hero-cta-primary">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="tel:+15551234567" data-testid="hero-cta-phone">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Multiple Ways to Reach Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the contact method that works best for you. We're committed to responding quickly and thoroughly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {contactMethods.map((method, index) =>
            <Card key={index} className={`text-center hover-elevate ${method.primary ? 'ring-2 ring-primary/20' : ''}`}>
                <CardContent className="p-6">
                  {method.primary &&
                <Badge className="mb-4">Recommended</Badge>
                }
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <method.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2" data-testid={`contact-method-${index}`}>
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
                    target={method.action.startsWith('http') ? '_blank' : undefined}
                    rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                    data-testid={`contact-action-${index}`}>
                    
                      Contact
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Tell Us About Your Project</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours with a detailed response.
                </p>
              </div>

              <Card>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                          data-testid="input-name" />
                        
                      </div>
                      <div>
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          data-testid="input-company" />
                        
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                          data-testid="input-email" />
                        
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          data-testid="input-phone" />
                        
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="projectType">Project Type</Label>
                        <Select onValueChange={(value) => handleInputChange('projectType', value)} value={formData.projectType}>
                          <SelectTrigger data-testid="select-project-type">
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            {projectTypes.map((type) =>
                            <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            )}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="budget">Budget Range</Label>
                        <Select onValueChange={(value) => handleInputChange('budget', value)} value={formData.budget}>
                          <SelectTrigger data-testid="select-budget">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            {budgetRanges.map((range) =>
                            <SelectItem key={range} value={range}>
                                {range}
                              </SelectItem>
                            )}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="timeline">Desired Timeline</Label>
                      <Input
                        id="timeline"
                        value={formData.timeline}
                        onChange={(e) => handleInputChange('timeline', e.target.value)}
                        placeholder="e.g., 3 months, ASAP, Q2 2025"
                        data-testid="input-timeline" />
                      
                    </div>

                    <div>
                      <Label htmlFor="message">Project Description *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                        className="min-h-[120px]"
                        required
                        data-testid="textarea-message" />
                      
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-chart-2"
                      disabled={isSubmitting}
                      data-testid="button-submit">
                      
                      {isSubmitting ?
                      <>Sending...</> :

                      <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      }
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
                  We have teams across multiple locations to better serve our global client base.
                </p>
              </div>

              <div className="space-y-6">
                {offices.map((office, index) =>
                <Card key={index} className="hover-elevate">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-2" data-testid={`office-city-${index}`}>
                            {office.city}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-3 whitespace-pre-line">
                            {office.address}
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center text-sm">
                              <Phone className="h-4 w-4 mr-2 text-primary" />
                              <a href={`tel:${office.phone}`} className="hover:text-primary transition-colors">
                                {office.phone}
                              </a>
                            </div>
                            <div className="flex items-center text-sm">
                              <Mail className="h-4 w-4 mr-2 text-primary" />
                              <a href={`mailto:${office.email}`} className="hover:text-primary transition-colors">
                                {office.email}
                              </a>
                            </div>
                            <div className="flex items-center text-sm">
                              <Clock className="h-4 w-4 mr-2 text-primary" />
                              <span>{office.hours} ({office.timezone})</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about working with SoftwareCraft.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, index) =>
              <Card key={index} className="hover-elevate">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3" data-testid={`faq-question-${index}`}>
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/10 via-chart-2/10 to-primary/10 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) =>
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  )}
                </div>
                <span className="text-sm text-muted-foreground">4.9/5 Client Rating</span>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose SoftwareCraft?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join 150+ companies who trust us with their most important digital projects. 
              Experience the difference of working with a dedicated, expert team.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">24h</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </div>
              <div className="text-center">
                <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">6+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
            
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-chart-2">
              <a href="#contact-form" data-testid="final-cta-primary">
                Get Your Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>);

}