import { 
  Code2, 
  Database, 
  Globe, 
  Server, 
  Smartphone,
  GitBranch,
  Terminal,
  Layers,
  Cpu,
  Braces,
  FileCode,
  Workflow
} from "lucide-react";

const skills = [
  { name: "JavaScript", icon: Braces, color: "primary" },
  { name: "Java", icon: Code2, color: "accent" },
  { name: "Node.js", icon: Server, color: "primary" },
  { name: "React.js", icon: Layers, color: "accent" },
  { name: "MongoDB", icon: Database, color: "primary" },
  { name: "Express.js", icon: Terminal, color: "accent" },
  { name: "Python", icon: FileCode, color: "primary" },
  { name: "PHP", icon: Globe, color: "accent" },
  { name: "Git", icon: GitBranch, color: "primary" },
  { name: "REST API", icon: Workflow, color: "accent" },
  { name: "jQuery", icon: Braces, color: "primary" },
  { name: "Postman", icon: Smartphone, color: "accent" },
];

const concepts = [
  "Object-Oriented Programming",
  "Data Structures & Algorithms",
  "Operating Systems",
  "JWT Authentication",
  "Role-Based Access Control",
  "Responsive Design",
];

const SkillCard = ({ skill, index }: { skill: typeof skills[0]; index: number }) => (
  <div
    className={`group flex-shrink-0 flex flex-col items-center justify-center p-6 w-32 h-32 rounded-2xl bg-card border border-border hover:border-${skill.color}/50 transition-all duration-500 hover:scale-110 hover:glow-yellow`}
  >
    <div
      className={`w-12 h-12 rounded-xl bg-${skill.color}/10 flex items-center justify-center mb-3 group-hover:bg-${skill.color}/20 transition-all duration-300 group-hover:scale-110`}
    >
      <skill.icon
        className={`${skill.color === "primary" ? "text-primary" : "text-accent"} transition-transform duration-300 group-hover:rotate-12`}
        size={26}
      />
    </div>
    <span className="text-sm font-medium text-foreground text-center">{skill.name}</span>
  </div>
);

const SkillsSection = () => {
  // Duplicate skills array for seamless infinite scroll
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section id="skills" className="py-24 bg-card/50 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm">02.</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Infinite Scrolling Skills - First Row (Left to Right) */}
        <div className="relative mb-6">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-card/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-card/50 to-transparent z-10 pointer-events-none" />
          
          <div className="flex gap-6 animate-scroll-left">
            {duplicatedSkills.map((skill, index) => (
              <SkillCard key={`row1-${index}`} skill={skill} index={index} />
            ))}
          </div>
        </div>

        
        {/* <div className="relative mb-12">
         
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-card/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-card/50 to-transparent z-10 pointer-events-none" />
          
          <div className="flex gap-6 animate-scroll-right">
            {[...duplicatedSkills].reverse().map((skill, index) => (
              <SkillCard key={`row2-${index}`} skill={skill} index={index} />
            ))}
          </div>
        </div> */}

        {/* Core Concepts */}
        <div className="mt-16 p-8 rounded-2xl bg-background border border-border">
          <h3 className="text-xl font-bold mb-8 text-center">Core Concepts & Expertise</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {concepts.map((concept, index) => (
              <span
                key={concept}
                className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105 cursor-default ${
                  index % 2 === 0
                    ? "bg-primary/10 border-primary/30 text-primary hover:bg-primary/20 hover:glow-yellow"
                    : "bg-accent/10 border-accent/30 text-accent hover:bg-accent/20 hover:glow-red"
                }`}
              >
                {concept}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
