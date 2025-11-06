import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container px-4 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Abdul Akbar Mohamed Usaama. All rights reserved. v1.0.3
          </p>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">Built and Managed by</span>
            <a
              href="https://aasifvip.info"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:underline transition-smooth inline-flex items-center gap-1"
            >
              aasifvip.info
              <Heart className="h-3 w-3 fill-primary animate-pulse" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
