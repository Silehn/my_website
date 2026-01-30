import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import {
  ArrowRight,
  Target,
  Heart,
  Lightbulb,
  Users,
  Award,
  Clock,
  CheckCircle,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "Every decision we make is focused on delivering measurable results for your business.",
  },
  {
    icon: Heart,
    title: "Client-Focused",
    description:
      "Your success is our priority. We listen, understand, and deliver solutions tailored to your needs.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We stay ahead of trends and technologies to give your website a competitive edge.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work closely with you throughout the process, ensuring your vision comes to life.",
  },
];

const stats = [
  { number: "150+", label: "Projects Completed" },
  { number: "50+", label: "Happy Clients" },
  { number: "5+", label: "Years Experience" },
  { number: "99%", label: "Client Satisfaction" },
];

const team = [
  {
    name: "Alex Thompson",
    role: "Founder & Lead Designer",
    image: "/placeholder.svg",
  },
  {
    name: "Sarah Chen",
    role: "Senior Developer",
    image: "/placeholder.svg",
  },
  {
    name: "Marcus Johnson",
    role: "Project Manager",
    image: "/placeholder.svg",
  },
  {
    name: "Emily Rodriguez",
    role: "UX Specialist",
    image: "/placeholder.svg",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              About <span className="text-primary">WebCraft</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We're a passionate team of designers and developers dedicated to
              helping businesses succeed online through exceptional web experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  WebCraft was founded with a simple mission: to make
                  professional, high-quality websites accessible to businesses of
                  all sizes.
                </p>
                <p>
                  We noticed that many businesses struggled to find web design
                  partners who truly understood their needs and could deliver
                  websites that drove real results. Too often, they were left with
                  cookie-cutter solutions that failed to represent their brand or
                  connect with their audience.
                </p>
                <p>
                  That's why we take a different approach. Every project starts
                  with understanding your business, your goals, and your
                  customers. From there, we craft custom solutions that not only
                  look stunning but also perform exceptionally.
                </p>
                <p>
                  Today, we've helped over 50 businesses transform their online
                  presence, and we're just getting started.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl bg-muted">
                <img
                  src="/placeholder.svg"
                  alt="Our team at work"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 -z-10 h-full w-full rounded-2xl bg-primary/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-16">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-primary-foreground md:text-5xl">
                  {stat.number}
                </div>
                <div className="mt-2 text-primary-foreground/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Our Values
            </h2>
            <p className="text-muted-foreground">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} className="text-center">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <value.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground">
              The talented people behind WebCraft's success.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <Card key={member.name} className="overflow-hidden">
                <div className="aspect-square bg-muted">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
                Why Work With Us
              </h2>
              <div className="space-y-4">
                {[
                  "Personalized approach tailored to your business",
                  "Transparent communication throughout the project",
                  "On-time delivery without compromising quality",
                  "Ongoing support after your website launches",
                  "Proven track record of successful projects",
                  "Fair and competitive pricing",
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link to="/contact">
                    Let's Work Together
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="p-6">
                <Award className="mb-3 h-8 w-8 text-primary" />
                <h3 className="mb-1 font-semibold text-foreground">
                  Award-Winning Designs
                </h3>
                <p className="text-sm text-muted-foreground">
                  Our work has been recognized by industry leaders.
                </p>
              </Card>
              <Card className="p-6">
                <Clock className="mb-3 h-8 w-8 text-primary" />
                <h3 className="mb-1 font-semibold text-foreground">
                  Fast Turnaround
                </h3>
                <p className="text-sm text-muted-foreground">
                  We deliver quality work on schedule, every time.
                </p>
              </Card>
              <Card className="p-6 sm:col-span-2">
                <Users className="mb-3 h-8 w-8 text-primary" />
                <h3 className="mb-1 font-semibold text-foreground">
                  Dedicated Support
                </h3>
                <p className="text-sm text-muted-foreground">
                  Our team is always here to help you succeed.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
              Ready to Start Your Project?
            </h2>
            <p className="mb-8 text-lg text-primary-foreground/80">
              Let's discuss how we can help your business grow online.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
