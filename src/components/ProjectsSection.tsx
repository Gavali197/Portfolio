// import { ExternalLink, Github, Calendar } from "lucide-react";
// import { Button } from "./ui/button";

// const projects = [
//   {
//     title: "Job Portal Website",
//     period: "Nov 2024 - Feb 2025",
//     description:
//       "Built a scalable job portal using MongoDB, Express.js, React, and Node.js, enabling seamless job posting and application management.",
//     highlights: [
//       "JWT-based authentication with role-based access control",
//       "Admin dashboard for job seeker and employer management",
//       "High-performance REST API for efficient data handling",
//     ],
//     tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
//     color: "primary" as const,
//     // https://github.com/Gavali197/job_portal_project.git       --this is my github project link
//   },
//   {
//     title: "Online Garage Management System",
//     period: "Apr 2024 - Jul 2024",
//     description:
//       "Developed a full-stack Online Garage Management System with real-time features and cloud deployment.",
//     highlights: [
//       "Real-time notifications and dynamic booking system",
//       "JWT-based authentication with role-based access",
//       "Optimized APIs and responsive UI deployed on cloud",
//     ],
//     tech: ["MongoDB", "Express.js", "React", "Node.js", "Cloud"],
//     color: "accent" as const,
//     // https://github.com/Gavali197/Garage-services-Stack          --this is github project link
//   },
//   {
//     title: "Online Movie Booking Website",
//     period: "Dec 2023 - Feb 2024",
//     description:
//       "Built an online movie booking system with real-time seat selection and secure payment integration.",
//     highlights: [
//       "Real-time seat selection with responsive UI",
//       "Admin panel for movie and booking management",
//       "Secure payment integration",
//     ],
//     tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
//     color: "primary" as const,
//   },
// ];

// const ProjectsSection = () => {
//   return (
//     <section id="projects" className="py-24 relative">
//       {/* Background accent */}
//       <div className="absolute top-1/2 left-0 w-full h-96 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 blur-3xl -translate-y-1/2" />

//       <div className="container mx-auto px-6 relative z-10">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <span className="text-primary font-mono text-sm">03.</span>
//           <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
//             Featured <span className="text-gradient">Projects</span>
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
//         </div>

//         <div className="space-y-12">
//           {projects.map((project, index) => (
//             <div
//               key={project.title}
//               className={`group relative grid lg:grid-cols-2 gap-8 items-center ${
//                 index % 2 === 1 ? "lg:flex-row-reverse" : ""
//               }`}
//             >
//               {/* Project Content */}
//               <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
//                 <div className="flex items-center gap-3 mb-4">
//                   <span
//                     className={`px-3 py-1 rounded-full text-xs font-mono ${
//                       project.color === "primary"
//                         ? "bg-primary/20 text-primary"
//                         : "bg-accent/20 text-accent"
//                     }`}
//                   >
//                     Featured Project
//                   </span>
//                   <div className="flex items-center gap-1 text-muted-foreground text-sm">
//                     <Calendar size={14} />
//                     {project.period}
//                   </div>
//                 </div>

//                 <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
//                   {project.title}
//                 </h3>

//                 <div className="p-6 rounded-xl bg-card border border-border mb-6">
//                   <p className="text-muted-foreground mb-4">{project.description}</p>
//                   <ul className="space-y-2">
//                     {project.highlights.map((highlight) => (
//                       <li key={highlight} className="flex items-start gap-2 text-sm">
//                         <span
//                           className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
//                             project.color === "primary" ? "bg-primary" : "bg-accent"
//                           }`}
//                         />
//                         <span className="text-muted-foreground">{highlight}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {project.tech.map((tech) => (
//                     <span
//                       key={tech}
//                       className="px-3 py-1 rounded-md bg-secondary text-sm font-mono text-muted-foreground"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="flex gap-3">
//                   <Button variant="outline" size="sm" className="gap-2">
//                     <Github size={16} />
//                     Code
//                   </Button>
//                   <Button variant="ghost" size="sm" className="gap-2">
//                     <ExternalLink size={16} />
//                     Live Demo
//                   </Button>
//                 </div>
//               </div>

//               {/* Project Visual */}
//               <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
//                 <div
//                   className={`relative aspect-video rounded-xl overflow-hidden border border-border group-hover:border-${project.color}/50 transition-all duration-500`}
//                 >
//                   <div
//                     className={`absolute inset-0 bg-gradient-to-br ${
//                       project.color === "primary"
//                         ? "from-primary/20 to-primary/5"
//                         : "from-accent/20 to-accent/5"
//                     }`}
//                   />
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="text-center">
//                       <div
//                         className={`w-20 h-20 mx-auto mb-4 rounded-xl bg-${project.color}/20 flex items-center justify-center`}
//                       >
//                         <span className="text-4xl font-bold text-gradient">
//                           {index + 1}
//                         </span>
//                       </div>
//                       <span className="font-mono text-muted-foreground">
//                         {project.tech[0]} + {project.tech[3]}
//                       </span>
//                     </div>
//                   </div>
//                   {/* Decorative elements */}
//                   <div className="absolute top-4 left-4 flex gap-2">
//                     <div className="w-3 h-3 rounded-full bg-accent/60" />
//                     <div className="w-3 h-3 rounded-full bg-primary/60" />
//                     <div className="w-3 h-3 rounded-full bg-muted" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;




import { ExternalLink, Github, Calendar } from "lucide-react";
import { Button } from "./ui/button";

type Project = {
  title: string;
  period: string;
  description: string;
  highlights: string[];
  tech: string[];
  color: "primary" | "accent";
  github: string;
  live?: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "City Care Hospital Management System",
    period: "Apr 2026 - June 2026", 
    description:
      "An enterprise-grade hospital management system built with ASP.NET Core to streamline clinical records, automated billing, and administrative workflows.",
    highlights: [
      "Strict Role-Based Access Control (Admin, Doctor, Patient, Lab Tech)",
      "Smart patient portal with downloadable PDF prescriptions",
      "Automated billing system with Razorpay integration",
    ],
    tech: ["ASP.NET Core", "C#", "SQL Server", "EF Core", "Bootstrap"],
    color: "accent",
    github: "https://github.com/Gavali197/HospitalWebApp",
    image: "/projects/Hospital.png", 
  },
  {
    title: "Job Portal Website",
    period: "Nov 2024 - Feb 2025",
    description:
      "Built a scalable job portal using MongoDB, Express.js, React, and Node.js, enabling seamless job posting and application management.",
    highlights: [
      "JWT-based authentication with role-based access control",
      "Admin dashboard for job seeker and employer management",
      "High-performance REST API for efficient data handling",
    ],
    tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
    color: "primary",
    github: "https://github.com/Gavali197/job_portal_project",
    image: "/projects/job-portal.png",
  },
  {
    title: "Online Garage Management System",
    period: "Apr 2024 - Jul 2024",
    description:
      "Developed a full-stack Online Garage Management System with real-time features and cloud deployment.",
    highlights: [
      "Real-time notifications and dynamic booking system",
      "JWT-based authentication with role-based access",
      "Optimized APIs and responsive UI deployed on cloud",
    ],
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Cloud"],
    color: "accent",
    github: "https://github.com/Gavali197/Garage-services-Stack",
    image: "/projects/garage.png",
  },
  {
    title: "Online Movie Booking Website",
    period: "Dec 2023 - Feb 2024",
    description:
      "Built an online movie booking system with real-time seat selection and secure payment integration.",
    highlights: [
      "Real-time seat selection with responsive UI",
      "Admin panel for movie and booking management",
      "Secure payment integration",
    ],
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    color: "primary",
    github: "https://github.com/Gavali197",
    image: "/projects/movie-booking.png",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background */}
      <div className="absolute top-1/2 left-0 w-full h-96 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm">03.</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="grid lg:grid-cols-2 gap-10 items-center"
            >
              {/* Content */}
              <div className={index % 2 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-mono ${
                      project.color === "primary"
                        ? "bg-primary/20 text-primary"
                        : "bg-accent/20 text-accent"
                    }`}
                  >
                    Featured Project
                  </span>
                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar size={14} />
                    {project.period}
                  </span>
                </div>

                <h3 className="text-3xl font-bold mb-4">
                  {project.title}
                </h3>

                <div className="p-6 rounded-xl bg-card border border-border mb-6">
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <ul className="space-y-2">
                    {project.highlights.map((item) => (
                      <li key={item} className="flex gap-2 text-sm">
                        <span
                          className={`mt-2 w-1.5 h-1.5 rounded-full ${
                            project.color === "primary"
                              ? "bg-primary"
                              : "bg-accent"
                          }`}
                        />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-md bg-secondary text-sm font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm" className="gap-2">
                      <Github size={16} />
                      Code
                    </Button>
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="ghost" size="sm" className="gap-2">
                        <ExternalLink size={16} />
                        Live Demo
                      </Button>
                    </a>
                  )}
                </div>
              </div>

              {/* Image */}
              <div className={index % 2 ? "lg:order-1" : ""}>
                <div className="relative aspect-video rounded-xl overflow-hidden border border-border">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
