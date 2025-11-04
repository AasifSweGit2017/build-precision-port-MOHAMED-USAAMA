import { MapPin, Languages, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-muted/30">
      <div className="container px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />

          <Card className="p-6 lg:p-10 glass-effect shadow-card animate-fade-in">
           
            <p className="text-lg text-muted-foreground leading-relaxed md-8">
              A motivated and technically skilled Quantity Surveyor with over 
              <span className="text-primary font-semibold font-bold">{" "}5+ years of professional experience </span>
               in <b>UAE, Oman and Sri Lanka</b>, working across a wide range of <b>Civil, MEP, Infrastructure, Fit-Out, and Joinery projects.</b> My background includes hands-on involvement in more than 
               <span className="text-primary font-semibold font-bold"> 150+ tender submissions</span> and comprehensive knowledge in cost <b>estimation, BOQ preparation, and pre-contract documentation</b>. With a {" "}
               <span className="text-primary font-semibold font-bold">National Diploma (NVQ Level 5) </span> in Construction Technology from the Department of Technical Education and Training – Sri Lanka and ongoing studies toward a <span className="text-primary font-semibold font-bold">BSc (Hons) in Quantity Surveying</span>, I combine academic knowledge with practical expertise to support accurate, efficient, and value-driven project delivery. 
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-sm text-muted-foreground">
                    Dubai, United Arab Emirates
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Languages className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Languages</h3>
                  <p className="text-sm text-muted-foreground">
                    English, Malay, Arabic & Tamil
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Globe className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Nationality</h3>
                  <p className="text-sm text-muted-foreground">Sri Lankan 🇱🇰</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
