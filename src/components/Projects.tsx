import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Home, Database, Shield } from "lucide-react";

const Projects = () => {
  const project = {
    title: "Flatfinder Web App",
    description: "A comprehensive CRUD-based web application for listing and reviewing flats. Features user authentication, data validation, and modular route architecture for seamless flat management.",
    technologies: ["Express.js", "MongoDB", "EJS", "Node.js", "Authentication", "Validation"],
    features: [
      "User authentication and authorization",
      "CRUD operations for flat listings",
      "Review and rating system",
      "Data validation and error handling",
      "Modular route architecture",
      "Responsive design"
    ],
    githubLink: "https://github.com/pawarritikaa",
    liveLink: "#" // Add live link when available
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Featured Project</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A showcase of my technical skills and problem-solving abilities through real-world applications.
            </p>
          </div>

          {/* Project showcase */}
          <Card className="hover:shadow-xl transition-all duration-300 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Home className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {project.description}
              </p>
            </CardHeader>
            
            <CardContent className="p-8">
              {/* Technologies used */}
              <div className="mb-8">
                <h3 className="font-semibold text-lg mb-4 flex items-center">
                  <Database className="h-5 w-5 mr-2 text-accent" />
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary"
                      className="px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Key features */}
              <div className="mb-8">
                <h3 className="font-semibold text-lg mb-4 flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-green-600" />
                  Key Features
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project links */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="group">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    View on GitHub
                  </a>
                </Button>
                <Button variant="outline" asChild className="group">
                  <a href={project.liveLink}>
                    <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* More projects coming soon */}
          <div className="text-center mt-12">
            <Card className="inline-block p-8 bg-gradient-to-r from-accent/5 to-primary/5 border-dashed">
              <p className="text-muted-foreground mb-4">More exciting projects coming soon!</p>
              <Button variant="outline" asChild>
                <a href="https://github.com/pawarritikaa" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Explore My GitHub
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;