import { Briefcase, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
     {
      title: "Quantity Surveyor",
      company: "Mosaic Interiors LLC",
      location: "Al Qusais, Dubai, UAE",
      period: "Feb 2025 - Sep 2025",
      responsibilities: [
        "Leading cost estimation and BOQ preparation for major infrastructure projects",
        "Managing tender submissions and contract negotiations",
        "Implementing value engineering solutions to optimize project costs",
        "Conducting detailed quantity take-offs and cost analysis",
        "Coordinating with subcontractors and suppliers for competitive pricing",
      ],
    },
    {
      title: "Quantity Surveyor",
      company: "Amwaj Dhofar Trad. & Cont. Co.",
      location: "Oman",
      period: "Jan 2023 – Jan 2025",
      responsibilities: [
        "Leading cost estimation and BOQ preparation for major infrastructure projects",
        "Managing tender submissions and contract negotiations",
        "Implementing value engineering solutions to optimize project costs",
        "Conducting detailed quantity take-offs and cost analysis",
        "Coordinating with subcontractors and suppliers for competitive pricing",
      ],
    },
    {
      title: "Junior Quantity Surveyor",
      company: "Trend Developers (Pvt) Ltd.",
      location: "Sri Lanka",
      period: "Feb 2020 – Nov 2023",
      responsibilities: [
        "Assisted in preparing detailed BOQs for Civil and MEP projects",
        "Supported senior QS in tender documentation and submissions",
        "Performed quantity take-offs using AutoCAD and PlanSwift",
        "Maintained cost databases and budget tracking systems",
        "Contributed to over 100 successful tender submissions",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="container px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-16 rounded-full" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-6 lg:p-8 glass-effect shadow-card hover:shadow-glow transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex items-start gap-4 mb-4 lg:mb-0">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <Briefcase className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-semibold">
                        {exp.company}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {exp.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">{exp.period}</span>
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

export default Experience;
