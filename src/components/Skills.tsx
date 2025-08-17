import { motion } from 'framer-motion';
import { Code, Database, Cloud, Smartphone, Globe, GitBranch } from 'lucide-react';
import { Card } from '@/components/ui/card';

const skillCategories = [
  {
    title: "Software Tools",
    icon: Code,
    skills: ["Altium Designer", "KiCad", "EAGLE/Fusion 360", "OrCAD", "Cadence Allegro", "Proteus", "LTspice", "PSpice", "MATLAB/Simulink"],
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    title: "Programming Languages", 
    icon: GitBranch,
    skills: ["C", "C++", "Python", "C#", "Bash", "Verilog", "VHDL"],
    color: "bg-green-500/10 text-green-600"
  },
  {
    title: "Hardware Tools",
    icon: Database,
    skills: ["Digital Oscilloscope", "Logic Analyzer", "Multimeter", "Function Generator", "Spectrum Analyzer", "JTAG/SWD Debuggers", "Hot Air Rework Station"],
    color: "bg-purple-500/10 text-purple-600"
  },
  {
    title: "Technical Skills",
    icon: Cloud,
    skills: ["PCB Design", "EMI/EMC Testing", "Firmware Development", "FPGA Development", "IoT Development", "Power Supply Design", "High-speed PCB Layout"],
    color: "bg-orange-500/10 text-orange-600"
  },
  {
    title: "Embedded Systems",
    icon: Smartphone,
    skills: ["ARM", "AVR", "PIC", "ESP32", "RTOS Integration", "Microcontrollers", "OTA Updates"],
    color: "bg-pink-500/10 text-pink-600"
  },
  {
    title: "Soft Skills",
    icon: Globe,
    skills: ["Problem Solving", "Analytical Thinking", "Project Management", "Technical Documentation", "Team Collaboration", "Leadership"],
    color: "bg-indigo-500/10 text-indigo-600"
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">Skills</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full card-hover">
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mx-auto mb-4`}>
                    <category.icon className="h-8 w-8" />
                  </div>
                  <h3 className="heading-md">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: (index * 0.1) + (skillIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="px-3 py-1 bg-surface text-foreground rounded-full text-sm font-medium border border-border"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};