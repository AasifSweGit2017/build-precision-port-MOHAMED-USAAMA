import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/90 dark:bg-background/95" />

      {/* Content */}
      <div className="container relative z-10 px-4 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 animate-scale-in">
            <div className="w-32 h-32 lg:w-40 lg:h-40 mx-auto rounded-full overflow-hidden shadow-glow border-4 border-primary">
              <img
                src={profileImg}
                alt="Abdul Akbar Mohamed Usaama"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name & Title */}
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
              Abdul Akbar Mohamed{" "}
              <span className="bg-clip-text text-transparent gradient-primary">
                Usaama
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-medium">
              Quantity Surveyor (BSc. Hons)
            </p>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              Building the future with precision, efficiency, and integrity
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-slide-up">
            <Button size="lg" className="w-full sm:w-auto shadow-card">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
              asChild
            >
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </a>
            </Button>
          </div>

          {/* Quick Info */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-8 max-w-3xl mx-auto animate-fade-in">
            <div className="glass-effect p-4 rounded-xl">
              <p className="text-2xl lg:text-3xl font-bold text-primary">5+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="glass-effect p-4 rounded-xl">
              <p className="text-2xl lg:text-3xl font-bold text-primary">150+</p>
              <p className="text-sm text-muted-foreground">Tender Submissions</p>
            </div>
            <div className="glass-effect p-4 rounded-xl">
              <p className="text-2xl lg:text-3xl font-bold text-primary">Dubai</p>
              <p className="text-sm text-muted-foreground">Based in UAE</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
