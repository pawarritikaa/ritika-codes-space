import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ritika.0112cs221107@gmail.com",
      link: "mailto:ritika.0112cs221107@gmail.com",
      color: "text-red-600"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/ritika-pawar-613993294/",
      color: "text-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my repositories",
      link: "https://github.com/pawarritikaa",
      color: "text-gray-600"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bhopal, Madhya Pradesh",
      link: null,
      color: "text-green-600"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Let's Connect</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
            </p>
          </div>

          {/* Contact grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((contact, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-secondary rounded-full">
                      <contact.icon className={`h-6 w-6 ${contact.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{contact.label}</h3>
                      {contact.link ? (
                        <a 
                          href={contact.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{contact.value}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to action */}
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-none text-center">
            <CardHeader>
              <CardTitle className="text-2xl">Ready to Work Together?</CardTitle>
            </CardHeader>
            <CardContent className="pb-8">
              <p className="text-muted-foreground mb-6 text-lg">
                Whether you're looking for a dedicated developer for your team or want to collaborate on an exciting project, 
                I'd love to hear from you!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="group">
                  <a href="mailto:ritika.0112cs221107@gmail.com">
                    <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    Send Email
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="group">
                  <a href="https://www.linkedin.com/in/ritika-pawar-613993294/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;