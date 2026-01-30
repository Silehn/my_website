import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight, ExternalLink, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Project {
  id: number;
  title: string;
  category: string;
  industry: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "TechStart Platform",
    category: "Web Application",
    industry: "Technology",
    description:
      "A comprehensive SaaS platform for startup management and analytics.",
    challenge:
      "TechStart needed a modern platform to help startups manage their operations and track key metrics in real-time.",
    solution:
      "We designed and developed a full-featured web application with intuitive dashboards, real-time analytics, and seamless integrations.",
    results: [
      "200% increase in user engagement",
      "50% reduction in onboarding time",
      "4.8/5 average user satisfaction",
    ],
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "GreenLeaf E-commerce",
    category: "E-commerce",
    industry: "Retail",
    description:
      "A sustainable products e-commerce store with seamless checkout experience.",
    challenge:
      "GreenLeaf wanted to create an online presence that matched their commitment to sustainability while driving sales.",
    solution:
      "We built a fast, eco-friendly themed e-commerce site with optimized checkout and mobile-first design.",
    results: [
      "150% increase in online sales",
      "40% improvement in conversion rate",
      "60% mobile traffic increase",
    ],
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Bloom Agency Website",
    category: "Corporate Website",
    industry: "Marketing",
    description:
      "A bold and creative website for a leading digital marketing agency.",
    challenge:
      "Bloom needed a website that showcased their creative capabilities and attracted high-value clients.",
    solution:
      "We created an award-winning design with smooth animations, portfolio showcases, and lead generation features.",
    results: [
      "300% increase in qualified leads",
      "Featured in design awards",
      "2x time on site improvement",
    ],
    image: "/placeholder.svg",
  },
  {
    id: 4,
    title: "HealthFirst Portal",
    category: "Web Application",
    industry: "Healthcare",
    description:
      "A patient portal for scheduling, records, and telemedicine consultations.",
    challenge:
      "HealthFirst required a secure, HIPAA-compliant portal that patients of all ages could use easily.",
    solution:
      "We developed an accessible, secure platform with intuitive navigation and video consultation features.",
    results: [
      "80% patient adoption rate",
      "50% reduction in phone bookings",
      "95% patient satisfaction score",
    ],
    image: "/placeholder.svg",
  },
  {
    id: 5,
    title: "FinanceFlow Dashboard",
    category: "Web Application",
    industry: "Finance",
    description:
      "A real-time financial analytics dashboard for investment professionals.",
    challenge:
      "FinanceFlow needed a high-performance dashboard that could display complex financial data clearly.",
    solution:
      "We built a responsive dashboard with real-time data visualization, customizable widgets, and export features.",
    results: [
      "Real-time data updates",
      "Custom reporting features",
      "Enterprise-grade security",
    ],
    image: "/placeholder.svg",
  },
  {
    id: 6,
    title: "EduLearn Platform",
    category: "E-learning",
    industry: "Education",
    description:
      "An online learning platform with courses, quizzes, and progress tracking.",
    challenge:
      "EduLearn wanted to create an engaging learning experience that kept students motivated.",
    solution:
      "We designed a gamified learning platform with progress tracking, certificates, and social features.",
    results: [
      "85% course completion rate",
      "100,000+ active learners",
      "4.9/5 app store rating",
    ],
    image: "/placeholder.svg",
  },
];

const categories = ["All", "Web Application", "E-commerce", "Corporate Website", "E-learning"];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Our <span className="text-primary">Portfolio</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our latest projects and see how we've helped businesses
              transform their online presence.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="border-b py-6">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group cursor-pointer overflow-hidden transition-all hover:border-primary/50 hover:shadow-lg"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-medium uppercase tracking-wider text-primary">
                      {project.industry}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="max-w-2xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-xs font-medium uppercase tracking-wider text-primary">
                    {selectedProject.industry}
                  </span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">
                    {selectedProject.category}
                  </span>
                </div>
                <DialogTitle className="text-2xl">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription>
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6">
                <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-foreground">
                    The Challenge
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {selectedProject.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-foreground">
                    Our Solution
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {selectedProject.solution}
                  </p>
                </div>
                <div>
                  <h4 className="mb-3 font-semibold text-foreground">Results</h4>
                  <div className="grid gap-2 sm:grid-cols-3">
                    {selectedProject.results.map((result, index) => (
                      <div
                        key={index}
                        className="rounded-lg bg-primary/10 p-3 text-center text-sm font-medium text-primary"
                      >
                        {result}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
              Want Results Like These?
            </h2>
            <p className="mb-8 text-lg text-primary-foreground/80">
              Let's create something amazing for your business.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
