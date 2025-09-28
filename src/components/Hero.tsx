import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Download } from "lucide-react";
import profileImage from "@/assets/ritika-profile.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero content */}
          <div className="space-y-6">
            {/* Profile Image */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <img 
                  src={profileImage} 
                  alt="Ritika Pawar - Software Engineer" 
                  className="w-48 h-48 rounded-full object-cover border-4 border-primary/20 shadow-2xl"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-accent/10" />
              </div>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Ritika Pawar
                </span>
              </h1>
              <h2 className="text-xl lg:text-2xl text-muted-foreground font-medium">
                Aspiring Software Engineer
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                B.Tech CSE student passionate about building impactful applications. 
                Experienced in Java, C++, Full-Stack Web Development, and problem-solving.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button size="lg" className="group">
                <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Get in Touch
              </Button>
              <Button variant="outline" size="lg" className="group" asChild>
                <a href="/Ritika_Pawar_Resume.docx" download="Ritika_Pawar_Resume.docx">
                  <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 pt-8">
              <a 
                href="https://github.com/pawarritikaa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/ritika-pawar-613993294/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:ritika.0112cs221107@gmail.com"
                className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl" />
    </section>
  );
};

export default Hero;