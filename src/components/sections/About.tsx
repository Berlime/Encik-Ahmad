import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function About() {
  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
              <img
                src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=1000"
                alt="John Smith"
                className="object-cover w-full h-full"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-6">
              Hi, John Smith. I'm passionate about crafting exceptional
              websites.
            </h2>
            <p className="text-muted-foreground mb-8">
              As a seasoned full-stack developer with over 8 years of
              experience, I specialize in creating modern web applications that
              combine beautiful design with powerful functionality.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4">
                <div className="text-3xl font-bold mb-2">10+</div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </Card>
              <Card className="p-4">
                <div className="text-3xl font-bold mb-2">120+</div>
                <div className="text-sm text-muted-foreground">
                  Projects Completed
                </div>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
