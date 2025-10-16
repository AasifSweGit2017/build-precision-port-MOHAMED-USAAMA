import { Card } from "@/components/ui/card";
import {
  Calculator,
  FileText,
  TrendingUp,
  Code,
  Users,
  Target,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Professional Skills",
      icon: Calculator,
      skills: [
        { name: "Quantity Take-off", level: 95 },
        { name: "Tendering & BOQ Preparation", level: 98 },
        { name: "Cost Estimation & Control", level: 92 },
        { name: "Contract Management", level: 88 },
        { name: "Value Engineering", level: 90 },
        { name: "Project Planning", level: 85 },
      ],
    },
    {
      title: "Software & Tools",
      icon: Code,
      skills: [
        { name: "AutoCAD 2D", level: 90 },
        { name: "PlanSwift", level: 92 },
        { name: "SketchUp", level: 85 },
        { name: "Microsoft Excel", level: 95 },
        { name: "MS Word & PowerPoint", level: 90 },
        { name: "Microsoft Outlook", level: 88 },
      ],
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: [
        { name: "Analytical Thinking", level: 95 },
        { name: "Effective Communication", level: 90 },
        { name: "Teamwork & Collaboration", level: 92 },
        { name: "Time Management", level: 88 },
        { name: "Detail-oriented", level: 95 },
        { name: "Professionalism & Integrity", level: 98 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 lg:py-32 bg-muted/30">
      <div className="container px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-16 rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 glass-effect shadow-card hover:shadow-glow transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-smooth"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
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

export default Skills;
