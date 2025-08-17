import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import profileImage from '@/assets/profile-image.jpg';

const profileImageUrl = "";

export const About = () => {
  return (
    <section id="about" className="section-padding bg-surface">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 text-center card-hover">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <img 
                  src={profileImageUrl} 
                  alt="MD Anaet Ullah"
                  className="w-full h-full object-cover rounded-full border-4 border-primary/20"
                />
              </div>
              
              <h3 className="heading-md mb-2">MD_Anaet</h3>
              <p className="text-muted-foreground mb-6 text-lg">The Nerd</p>
              
              <div className="flex justify-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="card-hover"
                  asChild
                >
                  <a href="https://github.com/jewel3g" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                
                <Button
                  variant="outline"
                  size="icon"
                  className="card-hover"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/jewel3g" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4 body-lg text-muted-foreground">
              <p>
                I am a passionate Embedded System Engineer with a strong background in hardware design, 
                PCB development, and embedded systems programming. I have experience in designing and 
                testing PCBs for various applications, including IoT devices and solar energy systems.
              </p>
              
              <p>
                My expertise includes developing firmware for microcontrollers, conducting hardware debugging, 
                and ensuring electromagnetic compatibility (EMC) of devices. I am proficient in using tools 
                like Altium Designer, KiCad, and Proteus for PCB design and simulation.
              </p>
              
              <p>
                With experience at companies like Vectoflow GmbH, Solarnative GmbH, and Robert Bosch Kft., 
                I bring a unique perspective to embedded systems development. I am committed to delivering 
                high-quality solutions that meet industry standards and customer requirements.
              </p>
              
              <p>
                <strong>Let's build innovative embedded solutions together!</strong>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};