import { Card, CardContent } from "@/components/ui/card";
import { StarIcon } from "lucide-react";

const testimonials = [
  {
    text: "John's work was exceptional! He delivered our project ahead of schedule and exceeded all expectations. His attention to detail is remarkable.",
    author: "Sarah M.",
    role: "CEO, TechStart",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
  },
  {
    text: "Working with John was a game-changer for our business. His technical expertise and creative solutions helped us achieve our goals.",
    author: "Michael R.",
    role: "Product Manager, InnovateCo",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
  },
  {
    text: "Incredible attention to detail and amazing communication throughout the project. John is truly a professional in every sense.",
    author: "Emily L.",
    role: "Founder, DesignHub",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
  },
  {
    text: "The website John built for us has significantly improved our online presence. His work is top-notch and highly recommended.",
    author: "David K.",
    role: "Marketing Director",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
  },
];

import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">See why they love my work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it - hear from some of my clients
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <ScrollReveal key={testimonial.author}>
              <Card key={testimonial.author} className="bg-muted/50">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="mb-4 text-sm">{testimonial.text}</p>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
