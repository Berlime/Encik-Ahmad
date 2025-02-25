import { Button } from "@/components/ui/button";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover brightness-[0.3] z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background z-0" />
      <div className="container relative z-10 px-4 py-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
        >
          Professional Handyman Services
          <br />
          in Kuala Lumpur
        </motion.h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Experienced handyman providing professional repair and maintenance
          services. With over 15 years of expertise, I deliver quality
          workmanship for all your home improvement needs.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button size="lg">View My Work</Button>
          <Button size="lg" variant="outline">
            Contact Me
          </Button>
        </div>
        <div className="mt-16 flex items-center justify-center gap-8 opacity-60">
          <img src="/logos/logo1.svg" alt="Client logo" className="h-8" />
          <img src="/logos/logo2.svg" alt="Client logo" className="h-8" />
          <img src="/logos/logo3.svg" alt="Client logo" className="h-8" />
          <img src="/logos/logo4.svg" alt="Client logo" className="h-8" />
        </div>
      </div>
    </section>
  );
}
