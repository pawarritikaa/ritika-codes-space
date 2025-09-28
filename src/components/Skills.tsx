import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Globe, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Java", "C++", "JavaScript", "SQL"],
      color: "text-blue-600"
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: ["Express.js", "Node.js", "EJS", "HTML/CSS", "MongoDB"],
      color: "text-green-600"
    },
    {
      title: "Database",
      icon: Database,
      skills: ["SQL", "MongoDB", "Database Design", "CRUD Operations"],
      color: "text-purple-600"
    },
    {
      title: "Tools & Others",
      icon: Wrench,
      skills: ["Git", "GitHub", "VS Code", "DSA", "DBMS", "OS", "Networking"],
      color: "text-orange-600"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Skills & Technologies</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive toolkit for building modern web applications and solving complex problems.
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center space-x-3">
                    <div className="p-2 bg-secondary rounded-lg">
                      <category.icon className={`h-5 w-5 ${category.color}`} />
                    </div>
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Core CS Concepts */}
          <Card className="mt-8 bg-gradient-to-r from-primary/5 to-accent/5 border-none">
            <CardHeader>
              <CardTitle className="text-center">Core Computer Science</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-3">
                {["Data Structures & Algorithms", "Database Management Systems", "Operating Systems", "Computer Networks", "Object-Oriented Programming"].map((concept, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {concept}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;