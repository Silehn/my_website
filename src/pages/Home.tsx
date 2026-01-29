import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import {
  Palette,
  Code,
  Settings,
  Search,
  Zap,
  Shield,
  Users,
  ArrowRight,
  Star,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Web Design",
    description:
      "Beautiful, modern designs that capture your brand and engage your audience.",
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom-built websites with clean code, fast performance, and scalability.",
  },
  {
    icon: Settings,
    title: "Maintenance",
    description:
      "Ongoing support to keep your website secure, updated, and running smoothly.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Improve your visibility and rank higher in search engine results.",
  },
];

const whyChooseUs = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "We deliver projects on time without compromising quality.",
  },
  {
    icon: Shield,
    title: "Custom Solutions",
    description: "Every website is tailored to your unique business needs.",
  },
  {
    icon: Users,
    title: "Ongoing Support",
    description: "We're here for you long after your website goes live.",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content:
      "WebCraft transformed our online presence. Our new website has increased leads by 150% in just three months.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder, GreenLeaf Co.",
    content:
      "Professional, responsive, and incredibly talented. They understood our vision and delivered beyond expectations.",
    rating: 5,
  },
  {
    name: "Emily Davis",
    role: "Marketing Director, Bloom Agency",
    content:
      "The best investment we've made for our business. Our website now truly represents our brand.",
    rating: 5,
  },
];

const clientLogos = [
  "TechCorp",
  "Innovate",
  "GrowthLab",
  "NextGen",
  "BlueWave",
  "Elevate",
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 to-background py-20 md:py-32">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Websites That Drive{" "}
              <span className="text-primary">Business Growth</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              We create stunning, high-performance websites that help businesses
              stand out, attract customers, and achieve their goals.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      </section>

      {/* Trusted By Section */}
      <section className="border-y bg-muted/30 py-12">
        <div className="container">
          <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Trusted by leading companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {clientLogos.map((logo) => (
              <div
                key={logo}
                className="text-xl font-bold text-muted-foreground/50"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              What We Offer
            </h2>
            <p className="text-muted-foreground">
              Comprehensive web solutions to help your business succeed online.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card
                key={service.title}
                className="group transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button variant="outline" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Why Choose WebCraft
            </h2>
            <p className="text-muted-foreground">
              We're committed to delivering exceptional results for every client.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground">
              Don't just take our word for it — hear from our satisfied clients.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="relative">
                <CardContent className="p-6">
                  <div className="mb-4 flex">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="mb-6 text-muted-foreground">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
              Ready to Transform Your Online Presence?
            </h2>
            <p className="mb-8 text-lg text-primary-foreground/80">
              Let's discuss your project and create a website that drives results.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                variant="secondary"
                asChild
              >
                <Link to="/contact">
                  Get Your Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <CheckCircle className="h-5 w-5" />
                <span>No obligation, free consultation</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
