import { GraduationCap, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  const education = [
    {
      degree: "BSc (Hons) in Quantity Surveying",
      institution: "De Montfort University",
      year: "Reading",
      status: "current",
    },
    {
      degree: "Higher National Diploma in Quantity Surveying",
      institution: "Gatehouse Awards Ltd, UK",
      year: "2024",
      status: "completed",
    },
    {
      degree: "Diploma in Quantity Surveying",
      institution: "E.C. Nations College",
      year: "2020",
      status: "completed",
    },
    {
      degree: "National Diploma in Construction Technology",
      institution: "Department of Technical Education and Training",
      year: "2023",
      status: "completed",
    },
    {
      degree: "Diploma in Fit-Out and Joinery Quantity Surveying",
      institution: "CBT Campus",
      year: "2025",
      status: "current",
    },
    {
      degree: "Professional Certificate in Human Resource Management",
      institution: "Virtual Academy",
      year: "2025",
      status: "current",
    },
  ];

  return (
    <section id="education" className="py-20 lg:py-32">
      <div className="container px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-4">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-16 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="p-6 glass-effect shadow-card hover:shadow-glow transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                    {edu.status === "current" ? (
                      <BookOpen className="h-6 w-6" />
                    ) : (
                      <GraduationCap className="h-6 w-6" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-bold text-base lg:text-lg leading-tight">
                        {edu.degree}
                      </h3>
                      {edu.status === "current" && (
                        <Badge
                          variant="secondary"
                          className="text-xs whitespace-nowrap"
                        >
                          Reading
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-primary font-semibold">
                      {edu.year}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
