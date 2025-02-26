import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WrenchIcon, HammerIcon, PaintbrushIcon } from "lucide-react";

const services = [
  {
    title: "General Repairs",
    description:
      "Comprehensive repair services for various household issues and maintenance needs.",
    icon: WrenchIcon,
    items: [
      "Furniture repair and assembly",
      "Door and window repairs",
      "General maintenance",
    ],
  },
  {
    title: "Carpentry",
    description:
      "Professional woodworking services for both repairs and custom installations.",
    icon: HammerIcon,
    items: [
      "Custom shelving and cabinets",
      "Wood repairs and restoration",
      "Door installation and repair",
    ],
  },
  {
    title: "Painting",
    description:
      "Interior and exterior painting services with attention to detail and quality finishes.",
    icon: PaintbrushIcon,
    items: [
      "Interior wall painting",
      "Exterior house painting",
      "Cabinet refinishing",
    ],
  },
  {
    title: "Electrical Work",
    description:
      "Safe and reliable electrical repairs and installations for your home.",
    icon: WrenchIcon,
    items: [
      "Light fixture installation",
      "Outlet and switch repair",
      "Ceiling fan installation",
    ],
  },
  {
    title: "Plumbing",
    description:
      "Expert plumbing services for repairs, installations, and maintenance.",
    icon: WrenchIcon,
    items: ["Leak repairs", "Faucet installation", "Drain cleaning"],
  },
  {
    title: "Flooring",
    description:
      "Professional flooring installation and repair services for all types of floors.",
    icon: HammerIcon,
    items: ["Tile installation", "Laminate flooring", "Floor repairs"],
  },
  {
    title: "Home Renovation",
    description:
      "Complete home renovation services from small updates to major remodels.",
    icon: HammerIcon,
    items: ["Kitchen remodeling", "Bathroom updates", "Room additions"],
  },
  {
    title: "Mounting Services",
    description:
      "Professional mounting services for TVs, shelves, and other household items.",
    icon: WrenchIcon,
    items: ["TV mounting", "Shelf installation", "Picture hanging"],
  },
  {
    title: "Outdoor Maintenance",
    description:
      "Comprehensive outdoor maintenance and repair services for your home.",
    icon: PaintbrushIcon,
    items: [
      "Deck repair and maintenance",
      "Fence installation",
      "Garden structure assembly",
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
