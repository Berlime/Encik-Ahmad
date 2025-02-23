import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let's work together to create something
              amazing.
            </p>
          </div>
        </ScrollReveal>
        <div className="max-w-xl mx-auto">
          <ScrollReveal>
            <form className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Input placeholder="Name" />
                </div>
                <div className="space-y-2">
                  <Input type="email" placeholder="Email" />
                </div>
              </div>
              <div className="space-y-2">
                <Input placeholder="Subject" />
              </div>
              <div className="space-y-2">
                <Textarea
                  placeholder="Tell me about your project..."
                  className="min-h-[150px]"
                />
              </div>
              <Button size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
