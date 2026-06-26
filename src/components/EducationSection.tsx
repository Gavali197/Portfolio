import { GraduationCap, Award, Calendar } from "lucide-react";

const education = [
  {
    degree: "MSc. ICT",
    fullName: "Master of Science in Information Communication Technology",
    institution: "SDJ International College",
    period: "Jul 2025 - Mar 2027",
    status: "Upcoming",
    color: "accent" as const,
  },
  {
    degree: "BCA",
    fullName: "Bachelor of Computer Application",
    institution: "Veer Narmad South Gujarat University",
    period: "Jul 2022 - May 2025",
    status: "Completed",
    color: "primary" as const,
  },
];

const certificates = [

  {
    name: "Adobe India Hackathon 2025",
    type: "Participation",
  },

  {
    name: "Advanced AI Workshop Certification",
    issuer: "be10x",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-card/50 relative">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm">04.</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <GraduationCap className="text-primary" size={28} />
              Academic Journey
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-muted" />

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={edu.degree} className="relative pl-12">
                    {/* Timeline dot */}
                    <div
                      className={`absolute left-0 top-1 w-8 h-8 rounded-full flex items-center justify-center ${edu.color === "primary" ? "bg-primary/20" : "bg-accent/20"
                        }`}
                    >
                      <div
                        className={`w-3 h-3 rounded-full ${edu.color === "primary" ? "bg-primary" : "bg-accent"
                          }`}
                      />
                    </div>

                    <div className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold ${edu.color === "primary"
                              ? "bg-primary/20 text-primary"
                              : "bg-accent/20 text-accent"
                            }`}
                        >
                          {edu.degree}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded text-xs ${edu.status === "Upcoming"
                              ? "bg-accent/10 text-accent"
                              : "bg-primary/10 text-primary"
                            }`}
                        >
                          {edu.status}
                        </span>
                      </div>

                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {edu.fullName}
                      </h4>
                      <p className="text-muted-foreground mb-3">{edu.institution}</p>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar size={14} />
                        {edu.period}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Award className="text-accent" size={28} />
              Certifications
            </h3>

            <div className="space-y-4">
              {certificates.map((cert, index) => (
                <div
                  key={cert.name}
                  className="group p-6 rounded-xl bg-background border border-border hover:border-accent/50 transition-all duration-300 hover:glow-red"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Award className="text-accent" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{cert.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {cert.type || cert.issuer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info Card */}
            <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
              <h4 className="font-semibold text-foreground mb-3">Continuous Learning</h4>
              <p className="text-sm text-muted-foreground">
                Actively enhancing my Data Structures & Algorithms skills in Java while
                exploring new technologies and frameworks to stay current with industry trends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
