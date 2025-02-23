import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Revrise Website Redesign",
    category: "Web Design",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000",
  },
  {
    title: "Brittany & Co Front Store",
    category: "E-commerce",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1000",
  },
  {
    title: "NeuroApp Landing Page",
    category: "UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1000",
  },
  {
    title: "NY Hospital CRM",
    category: "Web Application",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000",
  },
];

import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function Portfolio() {
  return (
    <section id="work" className="py-24 bg-muted/50">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Featured Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent projects and collaborations
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ScrollReveal key={project.title}>
              <Card key={project.title} className="group overflow-hidden">
                <CardContent className="p-0 relative aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm mb-4">{project.category}</p>
                      <Button variant="secondary">View Project</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
