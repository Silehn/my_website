import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import {
  Palette,
  Code,
  Settings,
  Search,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  PenTool,
  Rocket,
  Headphones,
  ChevronDown,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const services = [
  {
    icon: Palette,
    title: "Web Design",
    description:
      "Create a stunning visual identity that captivates your audience and reflects your brand perfectly.",
    features: [
      "Custom design tailored to your brand",
      "Mobile-responsive layouts",
      "User experience optimization",
      "Modern and clean aesthetics",
      "Conversion-focused design",
    ],
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Build powerful, scalable websites with clean code and cutting-edge technologies.",
    features: [
      "Custom functionality development",
      "Content management systems",
      "E-commerce integration",
      "Fast loading speeds",
      "Cross-browser compatibility",
    ],
  },
  {
    icon: Settings,
    title: "Website Maintenance",
    description:
      "Keep your website secure, updated, and performing at its best with our ongoing support.",
    features: [
      "Regular security updates",
      "Performance monitoring",
      "Content updates",
      "Bug fixes and improvements",
      "Technical support",
    ],
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Improve your search rankings and drive organic traffic to your website.",
    features: [
      "Keyword research and strategy",
      "On-page optimization",
      "Technical SEO audits",
      "Content optimization",
      "Performance tracking",
    ],
  },
];

const processSteps = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Discovery",
    description:
      "We start by understanding your business, goals, and target audience to create a tailored strategy.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Design",
    description:
      "Our designers create stunning mockups that align with your brand and engage your visitors.",
  },
  {
    icon: Code,
    number: "03",
    title: "Development",
    description:
      "We build your website with clean, efficient code ensuring speed and reliability.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch",
    description:
      "After thorough testing, we launch your website and ensure everything runs smoothly.",
  },
  {
    icon: Headphones,
    number: "05",
    title: "Support",
    description:
      "We provide ongoing maintenance and support to keep your website performing at its best.",
  },
];

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline varies based on project complexity. A simple website typically takes 2-4 weeks, while more complex projects may take 6-12 weeks. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you offer hosting services?",
    answer:
      "Yes, we can set up and manage hosting for your website. We partner with reliable hosting providers to ensure your site is fast, secure, and always online.",
  },
  {
    question: "Can I update the website myself after it's built?",
    answer:
      "Absolutely! We build websites with user-friendly content management systems (CMS) that allow you to easily update content, images, and more without technical knowledge.",
  },
  {
    question: "What if I need changes after the website is launched?",
    answer:
      "We offer maintenance packages that include regular updates and changes. For larger modifications, we can provide a quote based on the scope of work.",
  },
  {
    question: "Do you provide content writing services?",
    answer:
      "While our focus is on design and development, we can recommend trusted copywriters or assist with basic content guidance to ensure your message is clear and effective.",
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive web solutions designed to help your business succeed
              online. From design to development and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <Card
                key={service.title}
                className="group overflow-hidden transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-6 text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center space-x-3 text-sm"
                      >
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Our Process
            </h2>
            <p className="text-muted-foreground">
              A proven approach to delivering exceptional websites, every time.
            </p>
          </div>
          <div className="relative">
            {/* Timeline line - hidden on mobile */}
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border md:block" />
            
            <div className="space-y-8 md:space-y-0">
              {processSteps.map((step, index) => (
                <div
                  key={step.number}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center gap-4 md:gap-8`}
                >
                  {/* Content */}
                  <div
                    className={`w-full md:w-1/2 ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <Card className="inline-block w-full max-w-md">
                      <CardContent className="p-6">
                        <span className="text-4xl font-bold text-primary/20">
                          {step.number}
                        </span>
                        <h3 className="mb-2 text-xl font-semibold text-foreground">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Icon - center */}
                  <div className="absolute left-1/2 z-10 hidden -translate-x-1/2 md:flex">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground">
                      <step.icon className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden w-1/2 md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Have questions? We've got answers.
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-base font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mb-8 text-lg text-primary-foreground/80">
              Let's discuss your project and create something amazing together.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Request a Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
