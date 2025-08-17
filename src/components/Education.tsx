import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';

const education = [
  {
    degree: "Bachelor of Science",
    field: "Electrical and Electronics Engineering",
    institution: "Daffodil International University",
    location: "Dhaka, Bangladesh", 
    duration: "2015 – 2019",
    gpa: "3.09",
    description: "Focused on electrical systems, electronics, and programming fundamentals. Completed projects in embedded systems and IoT development, laying the foundation for my career in embedded systems engineering."
  },
  {
    degree: "Diploma",
    field: "Electrical Engineering",
    institution: "Chittagong Polytechnic Institute",
    location: "Chittagong, Bangladesh",
    duration: "2009 – 2014", 
    gpa: "3.18",
    description: "Comprehensive study of electrical engineering principles, circuit design, and practical applications in industrial settings. Gained hands-on experience with electrical systems and components."
  },
  {
    degree: "Secondary School Certificate",
    field: "Science",
    institution: "Chittagong Steel Mills High School",
    location: "Chittagong, Bangladesh",
    duration: "1997 – 2009",
    gpa: "3.81",
    description: "Strong foundation in mathematics, physics, and chemistry that sparked my interest in engineering and technology. Achieved excellent academic performance in science subjects."
  }
];

export const Education = () => {
  return (
    <section id="education" className="section-padding bg-surface">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">Education</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 card-hover">
                <div className="grid md:grid-cols-4 gap-6 items-center">
                  {/* Icon */}
                  <div className="flex justify-center md:justify-start">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <GraduationCap className="h-8 w-8 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-2 space-y-3">
                    <div>
                      <h3 className="heading-md mb-1">{edu.degree}</h3>
                      <p className="text-primary font-medium text-lg">{edu.field}</p>
                      <p className="text-muted-foreground font-medium">{edu.institution}</p>
                    </div>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </div>

                  {/* Meta Info */}
                  <div className="space-y-3 text-center md:text-right">
                    <div className="flex items-center gap-2 justify-center md:justify-end text-primary font-semibold">
                      <Calendar className="h-4 w-4" />
                      {edu.duration}
                      {edu.gpa && <span className="text-muted-foreground text-sm">(GPA: {edu.gpa})</span>}
                    </div>
                    <div className="flex items-center gap-2 justify-center md:justify-end text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {edu.location}
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