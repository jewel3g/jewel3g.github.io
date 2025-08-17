import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: "IoT-Based Advanced Transport Management and Safety System",
    description: "Developed an IoT-based transport management system integrating IoT devices, AI monitoring, and cloud analytics to improve transport safety and efficiency.",
    image: "https://raw.githubusercontent.com/jewel3g/jewel3g.github.io/main/Hardware.png",
    technologies: ["Arduino", "NodeMCU", "EasyEDA PCB Design", "Firebase", "IoT"],
    liveUrl: "",
    githubUrl: "https://github.com/jewel3g/IoT-Transport-management-System",
    date: "April 2018"
  },
  {
    title: "Home Appliances Control Using IR Remote",
    description: "Developed a system to control home appliances using IR remote, including microcontroller programming, circuit simulation, and relay modules for switching.",
    image: "https://raw.githubusercontent.com/jewel3g/Remote_Control_Home_Appliance/master/IRR.png",
    technologies: ["Arduino", "Proteus", "IR Sensors", "Relay Modules"],
    liveUrl: "",
    githubUrl: "https://github.com/jewel3g/Remote_Control_Home_Appliance",
    date: "2016"
  },
  {
    title: "PCB Design for Solar Energy Systems",
    description: "Designed and developed PCBs for solar energy applications at Solarnative GmbH, focusing on power management and EMC compliance.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
    technologies: ["Cadstar", "KiCad", "Solar Energy", "EMC Testing", "Power Management"],
    liveUrl: "",
    githubUrl: "",
    date: "2023"
  },
  {
    title: "Automotive ECU Development",
    description: "Firmware development for automotive Electronic Control Units at Robert Bosch, focusing on microcontroller programming and system integration.",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop",
    technologies: ["C/C++", "Automotive Systems", "Microcontrollers", "AUTOSAR"],
    liveUrl: "",
    githubUrl: "",
    date: "2022"
  },
  {
    title: "IoT Device Development",
    description: "Designed and developed various IoT solutions at Code 19, integrating embedded systems with cloud platforms for real-time monitoring and control.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    technologies: ["Altium Designer", "ESP32", "IoT Platforms", "Embedded C", "PCB Design"],
    liveUrl: "",
    githubUrl: "",
    date: "2020-2021"
  },
  {
    title: "EMC Testing Framework",
    description: "Developed comprehensive EMC testing procedures and validation frameworks for embedded devices, ensuring compliance with international standards.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop",
    technologies: ["EMC/EMI Testing", "Compliance Standards", "Test Equipment", "Documentation"],
    liveUrl: "",
    githubUrl: "",
    date: "2023"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-surface">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden card-hover h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs">
                    <Calendar className="h-3 w-3" />
                    {project.date}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="heading-md mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 flex items-center gap-2"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          Repository
                        </a>
                      </Button>
                    )}

                    {project.liveUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 flex items-center gap-2"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};