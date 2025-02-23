import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2Icon, LayoutIcon, ServerIcon } from "lucide-react";

const services = [
  {
    title: "Front End",
    description:
      "Creating responsive and interactive user interfaces with modern frameworks and best practices.",
    icon: LayoutIcon,
    items: [
      "Modern design with engaging elements",
      "Cross-browser compatibility",
      "Performance optimization",
    ],
  },
  {
    title: "Back End",
    description:
      "Building robust server-side applications with secure and scalable architecture.",
    icon: ServerIcon,
    items: [
      "API development and integration",
      "Database design and optimization",
      "Server infrastructure setup",
    ],
  },
  {
    title: "Full Stack",
    description:
      "End-to-end development combining front-end and back-end expertise for complete solutions.",
    icon: Code2Icon,
    items: [
      "Full application architecture",
      "System integration and deployment",
      "Maintenance and support",
    ],
  },
];

import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web development services tailored to your needs
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.title}>
              <Card
                key={service.title}
                className="relative group hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <service.icon className="h-12 w-12 mb-4 text-primary" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
