import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface Service {
  title: string;
  description: string;
  image: string;
  items: string[];
}

const services: Service[] = [
  {
    title: "General Repairs",
    description:
      "Comprehensive repair services for various household issues and maintenance needs.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop",
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
    image:
      "https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?q=80&w=1200&auto=format&fit=crop",
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
    image:
      "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?q=80&w=1200&auto=format&fit=crop",
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
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop",
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
    image:
      "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=1200&auto=format&fit=crop",
    items: ["Leak repairs", "Faucet installation", "Drain cleaning"],
  },
  {
    title: "Flooring",
    description:
      "Professional flooring installation and repair services for all types of floors.",
    image:
      "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=1200&auto=format&fit=crop",
    items: ["Tile installation", "Laminate flooring", "Floor repairs"],
  },
  {
    title: "Home Renovation",
    description:
      "Complete home renovation services from small updates to major remodels.",
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop",
    items: ["Kitchen remodeling", "Bathroom updates", "Room additions"],
  },
  {
    title: "Outdoor Maintenance",
    description:
      "Comprehensive outdoor maintenance and repair services for your home.",
    image:
      "https://images.unsplash.com/photo-1595828204607-9d67535c2e13?q=80&w=1200&auto=format&fit=crop",
    items: [
      "Deck repair and maintenance",
      "Fence installation",
      "Garden structure assembly",
    ],
  },
];

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [noTransition, setNoTransition] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );

  // Transition duration in ms
  const transitionDuration = 500;

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Number of visible cards based on screen size
  const getVisibleCount = () => {
    if (windowWidth < 640) return 1; // Mobile
    if (windowWidth < 1024) return 2; // Tablet
    return 3; // Desktop
  };

  // Calculate the width of each card + gap
  const getCardWidth = () => {
    const visibleCount = getVisibleCount();
    return 100 / visibleCount;
  };

  // Handle autoplay
  useEffect(() => {
    if (autoplay && !isTransitioning) {
      autoplayRef.current = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [currentIndex, autoplay, isTransitioning]);

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    if (currentIndex === 0) {
      // When at the first item, we need to jump to the end
      setCurrentIndex(services.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }

    setTimeout(() => setIsTransitioning(false), transitionDuration);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    if (currentIndex === services.length - 1) {
      // When at the last item, we need to loop back to the first
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }

    setTimeout(() => setIsTransitioning(false), transitionDuration);
  };

  // Get all services for the slider with duplicates for looping
  const getAllServices = () => {
    // Create a copy of services array and add duplicates at the beginning and end
    // to create the illusion of an infinite slider
    const visibleCount = getVisibleCount();
    const clonedServices = [...services];

    // Add duplicates at the end for a seamless loop
    for (let i = 0; i < visibleCount - 1; i++) {
      clonedServices.push({ ...services[i] });
    }

    return clonedServices;
  };

  // Get the actual services to display
  const displayServices = getAllServices();

  return (
    <section id="services" className="py-24 bg-background overflow-hidden">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional handyman services tailored to your needs
          </p>
        </div>

        <div
          className="relative"
          ref={carouselRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm shadow-lg hover:bg-background"
              onClick={handlePrev}
              disabled={isTransitioning}
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </Button>
          </div>

          <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm shadow-lg hover:bg-background"
              onClick={handleNext}
              disabled={isTransitioning}
            >
              <ChevronRightIcon className="h-6 w-6" />
            </Button>
          </div>

          {/* Carousel with CSS transitions - true slider effect */}
          <div className="overflow-hidden">
            <div
              className={`flex ${noTransition ? "" : "transition-transform duration-500 ease-in-out"}`}
              style={{
                transform: `translateX(-${currentIndex * getCardWidth()}%)`,
              }}
            >
              {displayServices.map((service, i) => (
                <div
                  key={`${service.title}-${i}`}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${getCardWidth()}%` }}
                >
                  <div className="group relative overflow-hidden rounded-xl bg-card shadow-md hover:shadow-xl transition-all duration-300 h-[450px]">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />

                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end text-white">
                      <h3 className="text-2xl font-bold mb-2">
                        {service.title}
                      </h3>

                      <p className="text-sm text-white/80 mb-4">
                        {service.description}
                      </p>

                      <ul className="space-y-1">
                        {service.items.map((item, idx) => (
                          <li
                            key={idx}
                            className="text-sm flex items-center gap-2"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {services.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setCurrentIndex(idx);
                    setTimeout(
                      () => setIsTransitioning(false),
                      transitionDuration,
                    );
                  }
                }}
                className={`h-2 rounded-full transition-all ${idx === currentIndex ? "w-8 bg-primary" : "w-2 bg-muted"}`}
                aria-label={`Go to slide ${idx + 1}`}
                disabled={isTransitioning}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
