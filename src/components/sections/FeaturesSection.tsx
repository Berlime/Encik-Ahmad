import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  LightbulbIcon,
  ZapIcon,
  BarChart3Icon,
  ShieldIcon,
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({
  icon,
  title = "Feature Title",
  description = "Feature description goes here.",
}: FeatureCardProps) => {
  return (
    <Card className="h-full bg-white border border-gray-200 hover:shadow-md transition-shadow duration-300">
      <CardHeader>
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

interface FeaturesSectionProps {
  title?: string;
  subtitle?: string;
  features?: FeatureCardProps[];
}

const FeaturesSection = ({
  title = "Our Key Features",
  subtitle = "Discover what makes our services stand out from the competition",
  features = [
    {
      icon: <LightbulbIcon className="h-6 w-6 text-primary" />,
      title: "Innovative Solutions",
      description:
        "We provide cutting-edge solutions tailored to your specific needs and requirements.",
    },
    {
      icon: <ZapIcon className="h-6 w-6 text-primary" />,
      title: "Fast Performance",
      description:
        "Experience lightning-fast performance with our optimized and efficient services.",
    },
    {
      icon: <BarChart3Icon className="h-6 w-6 text-primary" />,
      title: "Data Analytics",
      description:
        "Gain valuable insights with our comprehensive data analytics and reporting tools.",
    },
    {
      icon: <ShieldIcon className="h-6 w-6 text-primary" />,
      title: "Secure & Reliable",
      description:
        "Your data is safe with our enterprise-grade security and reliable infrastructure.",
    },
  ],
}: FeaturesSectionProps) => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">{title}</h2>
          <p className="text-xl text-muted-foreground">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
