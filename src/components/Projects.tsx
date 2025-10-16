import { Building2, Wrench, Construction } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Civil Infrastructure Development",
      category: "Civil",
      icon: Construction,
      description:
        "Major infrastructure projects including roads, bridges, and utilities across multiple locations.",
      tags: ["BOQ", "Cost Estimation", "Value Engineering"],
    },
    {
      title: "MEP Installation Projects",
      category: "MEP",
      icon: Wrench,
      description:
        "Mechanical, Electrical, and Plumbing projects for commercial and residential buildings.",
      tags: ["Tendering", "Quantity Take-off", "Contract Management"],
    },
    {
      title: "Fit-Out & Joinery Works",
      category: "Fit-Out",
      icon: Building2,
      description:
        "High-end interior fit-out and joinery projects for corporate offices and commercial spaces.",
      tags: ["Cost Control", "Project Planning", "Subcontractor Analysis"],
    },
  ];

  return (
    <section id="projects" className="py-20 lg:py-32 bg-muted/30">
      <div className="container px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-4">
            Project Portfolio
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-16 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 glass-effect shadow-card hover:shadow-glow transition-smooth animate-fade-in group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-4">
                  <div className="p-4 rounded-xl bg-primary/10 text-primary w-fit mb-4 group-hover:scale-110 transition-smooth">
                    <project.icon className="h-8 w-8" />
                  </div>
                  <Badge className="mb-3">{project.category}</Badge>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
