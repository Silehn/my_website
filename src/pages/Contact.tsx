import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Layout } from "@/components/layout/Layout";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const budgetRanges = [
  "Under $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000+",
  "Not sure yet",
];

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "hello@webcraft.com",
    description: "We'll respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+1 (555) 123-4567",
    description: "Mon-Fri, 9am-6pm EST",
  },
  {
    icon: MapPin,
    title: "Office",
    content: "123 Business Ave, Suite 100",
    description: "New York, NY 10001",
  },
  {
    icon: Clock,
    title: "Response Time",
    content: "Within 24 hours",
    description: "Usually much faster",
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Let's <span className="text-primary">Talk</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Ready to start your project? Get in touch and we'll get back to you
              within 24 hours with a free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-foreground">
                Request a Free Quote
              </h2>
              {isSubmitted ? (
                <Card className="border-primary/50">
                  <CardContent className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <CheckCircle className="h-8 w-8" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-foreground">
                      Thank You!
                    </h3>
                    <p className="mb-6 text-muted-foreground">
                      Your message has been sent successfully. We'll get back to
                      you within 24 hours.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          company: "",
                          budget: "",
                          message: "",
                        });
                      }}
                    >
                      Send Another Message
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="John Smith"
                            required
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@company.com"
                            required
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="company">Company Name</Label>
                          <Input
                            id="company"
                            name="company"
                            placeholder="Your Company"
                            value={formData.company}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="budget">Budget Range</Label>
                          <Select
                            value={formData.budget}
                            onValueChange={(value) =>
                              setFormData((prev) => ({ ...prev, budget: value }))
                            }
                          >
                            <SelectTrigger id="budget">
                              <SelectValue placeholder="Select a range" />
                            </SelectTrigger>
                            <SelectContent className="bg-background">
                              {budgetRanges.map((range) => (
                                <SelectItem key={range} value={range}>
                                  {range}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Tell Us About Your Project *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Describe your project, goals, and any specific requirements..."
                          rows={6}
                          required
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full"
                        size="lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                      <p className="text-center text-xs text-muted-foreground">
                        We respect your privacy. Your information will never be
                        shared.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-foreground">
                Get in Touch
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {contactInfo.map((item) => (
                  <Card key={item.title}>
                    <CardContent className="p-5">
                      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <h3 className="mb-1 font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-foreground">{item.content}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-8">
                <Card className="overflow-hidden">
                  <div className="aspect-video bg-muted">
                    <div className="flex h-full items-center justify-center text-muted-foreground">
                      <div className="text-center">
                        <MapPin className="mx-auto mb-2 h-8 w-8" />
                        <p>Map placeholder</p>
                        <p className="text-sm">123 Business Ave, New York</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Additional CTA */}
              <div className="mt-8 rounded-lg bg-muted/50 p-6">
                <h3 className="mb-2 font-semibold text-foreground">
                  Prefer to schedule a call?
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Book a free 30-minute consultation to discuss your project in
                  detail.
                </p>
                <Button variant="outline" className="w-full">
                  Schedule a Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
