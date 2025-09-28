import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, Trophy } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">About Me</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Passionate about technology and continuous learning, building solutions that make a difference.
            </p>
          </div>

          {/* Education & Achievement Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Current Education */}
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Current Education</h3>
                </div>
                <div className="space-y-2">
                  <p className="font-medium">B.Tech, Computer Science Engineering</p>
                  <p className="text-muted-foreground">Bansal Institute of Science and Technology, Bhopal</p>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-sm text-muted-foreground">7th Semester</span>
                    <span className="font-semibold text-primary">CGPA: 7.61</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Previous Education */}
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Calendar className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg">Academic Background</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Class 12th</span>
                    <span className="font-medium">70%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Class 10th</span>
                    <span className="font-medium">67%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Trophy className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-lg">Achievements</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-sm">NSS Volunteer (B Certificate Completed)</p>
                  <p className="text-sm">Coding contests participant</p>
                  <p className="text-sm">Hackathon participant</p>
                  <p className="text-sm">Community service programs</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* About description */}
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-none">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-center">
                I am an aspiring Software Engineer with strong knowledge in Java, C++, OOPs, SQL, and 
                Full-Stack Web Development. Passionate about solving problems, building impactful applications, 
                and continuously learning. Currently developing projects using Express.js, MongoDB, and EJS templates.
                I believe in writing clean, efficient code and am always eager to take on new challenges.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;