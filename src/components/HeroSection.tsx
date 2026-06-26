import { ArrowDown, Github, Linkedin, Mail, MapPin, Phone, FileText } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(0_0%_20%_/_0.1)_1px,transparent_1px),linear-gradient(90deg,hsl(0_0%_20%_/_0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground font-mono">Available for opportunities</span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up opacity-0 stagger-1">
            <span className="text-foreground">Hemant </span>
            <span className="text-gradient">Gavali</span>
          </h1>

          {/* Title */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-mono animate-slide-up opacity-0 stagger-2">
            <span className="text-primary">&lt;</span>
            Full Stack Developer
            <span className="text-primary"> /&gt;</span>
          </p>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up opacity-0 stagger-3">
            Node.js Dev | MERN Stack | Core Java Enthusiast
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-10 animate-slide-up opacity-0 stagger-4">
            <MapPin size={16} className="text-accent" />
            <span>Surat, Gujarat, India</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-slide-up opacity-0 stagger-5">
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            
            {/* New Resume Button */}
            <Button variant="outline" size="lg" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText size={18} className="mr-2" />
                View Resume
              </a>
            </Button>

            <Button variant="outline" size="lg" asChild>
              <a href="#contact">
                <Mail size={18} className="mr-2" />
                Get in Touch
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <a
              href="https://github.com/Gavali197"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:glow-yellow"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/hemant-gavali197"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:glow-yellow"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:hemantgavali1272@gmail.com"
              className="p-3 rounded-full bg-secondary border border-border hover:border-accent hover:text-accent transition-all duration-300 hover:glow-red"
            >
              <Mail size={20} />
            </a>
            <a
              href="tel:+918490077577"
              className="p-3 rounded-full bg-secondary border border-border hover:border-accent hover:text-accent transition-all duration-300 hover:glow-red"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;