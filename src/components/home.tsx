import Header from "./layout/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import ServicesCarousel from "./sections/ServicesCarousel";
import Portfolio from "./sections/Portfolio";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./layout/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <ServicesCarousel />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
