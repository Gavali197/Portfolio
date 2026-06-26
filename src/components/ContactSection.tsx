import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-background" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm">05.</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want 
            to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold mb-6">Get in Touch</h3>

              <a
                href="mailto:hemantgavali1272@gmail.com"
                className="group flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                    hemantgavali1272@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+918490077577"
                className="group flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-accent/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Phone className="text-accent" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium text-foreground group-hover:text-accent transition-colors">
                    +91 8490077577
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium text-foreground">Surat, Gujarat, India</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4">
                <p className="text-sm text-muted-foreground mb-4">Find me on</p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Gavali197"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-secondary border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300 hover:glow-yellow"
                  >
                    <Github size={22} />
                  </a>
                  <a
                    href="https://linkedin.com/in/hemant-gavali197"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-secondary border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300 hover:glow-yellow"
                  >
                    <Linkedin size={22} />
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="flex flex-col justify-center">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-card to-accent/10 border border-primary/20">
                <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
                <p className="text-muted-foreground mb-6">
                  I'm always open to discussing new projects, creative ideas, or opportunities 
                  to be part of your vision.
                </p>
                <Button variant="hero" size="lg" className="w-full gap-2" asChild>
                  <a href="mailto:hemantgavali1272@gmail.com">
                    <Send size={18} />
                    Send Me a Message
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
