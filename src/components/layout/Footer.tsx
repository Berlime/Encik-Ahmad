import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-24 bg-muted/50">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Let's connect and create something awesome together!
          </h2>
          <p className="text-muted-foreground mb-8">hello@encik-ahmad.com</p>
          <div className="flex justify-center gap-4 mb-8">
            <Button variant="ghost" size="icon">
              <TwitterIcon className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <GithubIcon className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <LinkedinIcon className="w-5 h-5" />
            </Button>
          </div>
          <div className="text-sm text-muted-foreground">
            © 2024 Encik Ahmad. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
