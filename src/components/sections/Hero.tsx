import { Button } from "@/components/ui/button";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      <img
        src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop"
        alt="Professional handyman at work"
        className="absolute inset-0 w-full h-full object-cover brightness-[0.7] z-0"
      />
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/30 to-white/40 dark:from-black/20 dark:via-black/30 dark:to-black/40 backdrop-blur-[1px]" />
        <div
          className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='currentColor'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
      <div className="container relative z-10 px-4 py-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-8 font-inter"
        >
          Professional Handyman Services
          <br />
          in Kuala Lumpur
        </motion.h1>
        <p className="text-xl md:text-2xl text-foreground font-medium mb-10 max-w-3xl mx-auto bg-background/60 dark:bg-background/60 backdrop-blur-sm py-3 px-4 rounded-md">
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
