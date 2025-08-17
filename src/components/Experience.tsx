import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';

const experiences = [
  {
    title: "Development Engineer (Embedded Systems, PCB Design)",
    company: "Vectoflow GmbH",
    location: "Gilching, Bavaria, Germany (Hybrid Work)",
    duration: "April 2025 - May 2025",
    description: [
      "Developing and testing hardware solutions for embedded systems, focusing on PCB design and EMC compliance",
      "Designing and testing PCBs for IoT devices, ensuring functionality and reliability",
      "Developing firmware for microcontrollers, integrating hardware and software components",
      "Conducting hardware debugging and testing to ensure compliance with specifications",
      "Ensuring electromagnetic compatibility (EMC) of devices through rigorous testing and validation"
    ],
    technologies: ["PCB Design", "EMC/EMI", "Firmware Development", "Embedded Systems", "IoT"]
  },
  {
    title: "Embedded System Engineer (PCB Design, Hardware Development)",
    company: "Solarnative GmbH",
    location: "Hofheim, Hessen, Germany (Hybrid Work)",
    duration: "March 2023 - Feb 2024",
    description: [
      "Designed and developed PCBs for solar energy systems, ensuring optimal performance and reliability",
      "Conducted hardware debugging and testing to validate designs and ensure compliance with industry standards",
      "Collaborated with cross-functional teams to integrate hardware and software components for solar energy solutions",
      "Ensured electromagnetic compatibility (EMC) of devices through rigorous testing and validation",
      "Utilized tools like Cadstar and KiCad for PCB design and simulation"
    ],
    technologies: ["Cadstar", "KiCad", "Solar Energy Systems", "EMC Testing", "Hardware Debugging"]
  },
  {
    title: "Associate Embedded System Engineer ECR",
    company: "Robert Bosch Kft.",
    location: "Budapest, Hungary (Hybrid Work)",
    duration: "Aug 2022 - Nov 2022",
    description: [
      "Firmware development for microcontrollers, focusing on automotive applications",
      "Designed and tested PCBs for automotive systems, ensuring functionality and reliability",
      "Conducted hardware debugging and testing to validate designs and ensure compliance with specifications",
      "Collaborated with cross-functional teams to integrate hardware and software components"
    ],
    technologies: ["Automotive Systems", "Microcontrollers", "PCB Design", "Firmware Development"]
  },
  {
    title: "IoT Engineer (Embedded Systems, PCB Design)",
    company: "Code 19",
    location: "Dhaka, Bangladesh",
    duration: "Jan 2020 - Nov 2021",
    description: [
      "Designed and developed IoT solutions, focusing on embedded systems and PCB design",
      "Collaborated with cross-functional teams to integrate hardware and software components for IoT applications",
      "Conducted hardware debugging and testing to ensure reliability and performance of IoT devices",
      "Ensured electromagnetic compatibility (EMC) of devices through rigorous testing and validation",
      "Utilized tools like Altium Designer and KiCad for PCB design and simulation"
    ],
    technologies: ["Altium Designer", "KiCad", "IoT Development", "Embedded Systems", "EMC Testing"]
  },
  {
    title: "Hardware Engineer (Embedded Systems, PCB Design)",
    company: "Sigmatech BD",
    location: "Dhaka, Bangladesh",
    duration: "Jan 2020 - July 2020",
    description: [
      "Designed and developed hardware solutions for various projects, focusing on embedded systems and PCB design",
      "Conducted hardware debugging and testing to validate designs and ensure compliance with specifications",
      "Collaborated with cross-functional teams to integrate hardware and software components",
      "Ensured electromagnetic compatibility (EMC) of devices through rigorous testing and validation",
      "Utilized tools like Proteus and KiCad for PCB design and simulation"
    ],
    technologies: ["Proteus", "KiCad", "Hardware Design", "Embedded Systems", "EMC Compliance"]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 card-hover">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Timeline */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <Calendar className="h-4 w-4" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-2 space-y-4">
                    <div>
                      <h3 className="heading-md mb-1">{exp.title}</h3>
                      <p className="text-primary font-medium text-lg">{exp.company}</p>
                    </div>

                    <ul className="space-y-2 text-muted-foreground">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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