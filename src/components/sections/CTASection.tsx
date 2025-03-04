import React from "react";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundColor?: string;
}

const CTASection = ({
  title = "Ready to transform your business?",
  description = "Join hundreds of satisfied customers who have taken their business to the next level with our solutions.",
  buttonText = "Get Started Today",
  buttonLink = "#contact",
  backgroundColor = "bg-primary/10",
}: CTASectionProps) => {
  return (
    <section className={`py-20 ${backgroundColor}`}>
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <Button
            size="lg"
            className="px-8 py-6 h-auto text-lg font-medium"
            asChild
          >
            <a href={buttonLink}>{buttonText}</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
