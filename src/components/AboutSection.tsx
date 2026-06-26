import { Code2, Database, Rocket, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "MERN Stack",
    description: "Building full-stack applications with MongoDB, Express, React, and Node.js",
  },
  {
    icon: Database,
    title: "API Development",
    description: "Creating secure, high-performance REST APIs with optimized backend systems",
  },
  {
    icon: Zap,
    title: "Problem Solver",
    description: "Strong DSA skills in Java for efficient, scalable solutions",
  },
  {
    icon: Rocket,
    title: "Clean Code",
    description: "Writing maintainable, well-structured code with clean UI designs",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm">01.</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a <span className="text-primary font-semibold">Full Stack Developer</span> skilled in 
              the MERN stack, Java, and API development. I build secure, high-performance applications 
              with clean UI and optimized backend systems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently pursuing my <span className="text-accent font-semibold">MSc. in ICT</span> while 
              continuously enhancing my Data Structures & Algorithms skills in Java to write efficient, 
              scalable solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm passionate about creating seamless user experiences and robust backend architectures 
              that power modern web applications.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center p-4 rounded-lg bg-secondary border border-border">
                <div className="text-3xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-secondary border border-border">
                <div className="text-3xl font-bold text-accent">2+</div>
                <div className="text-sm text-muted-foreground">Years Coding</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-secondary border border-border">
                <div className="text-3xl font-bold text-primary">4+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
          </div>

          {/* Right - Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:glow-yellow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
