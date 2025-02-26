import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { toggleTheme } from "@/lib/theme";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container flex items-center justify-between h-16 px-4">
        <div className="font-bold text-xl">
          <a href="#hero">Encik Ahmad</a>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-sm hover:text-primary">
            About
          </a>
          <a href="#services" className="text-sm hover:text-primary">
            Services
          </a>
          <a href="#work" className="text-sm hover:text-primary">
            Work
          </a>
          <a href="#contact" className="text-sm hover:text-primary">
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <Button>Let's Connect</Button>
        </div>
      </div>
    </header>
  );
}
