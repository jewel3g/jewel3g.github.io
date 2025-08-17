import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';

const certifications = [
  {
    name: "Industrial Training",
    issuer: "Eastern Cables Ltd.",
    issued: "Feb 2018",
    image: "https://raw.githubusercontent.com/jewel3g/jewel3g.github.io/main/IOT.jpg",
    link: "https://raw.githubusercontent.com/jewel3g/jewel3g.github.io/main/IOT.jpg"
  },
  {
    name: "Master class on Internet of things",
    issuer: "Bangladesh Computer Council and Bangladesh Computer Society",
    issued: "Feb 2018",
    image: "https://raw.githubusercontent.com/jewel3g/jewel3g.github.io/main/IOT.jpg",
    link: "https://raw.githubusercontent.com/jewel3g/jewel3g.github.io/main/IOT.jpg"
  },
  {
    name: "Electrical Installation and Maintenance",
    issuer: "Bangladesh Technical Education Board",
    issued: "Dec 2017",
    link: "https://raw.githubusercontent.com/jewel3g/jewel3g.github.io/main/RPL.jpg"
  },
  {
    name: "Daffodil ICT Carnival 2018",
    issuer: "Daffodil International University",
    issued: "Dec 2018",
    link: "https://raw.githubusercontent.com/jewel3g/jewel3g.github.io/main/Page0010.jpg"
  },
  {
    name: "IEEE SS12 Project Competition and maker fair 2018 Sri Lanka",
    issuer: "IEEE Region 10",
    issued: "Sep 2018",
    link: "https://raw.githubusercontent.com/jewel3g/jewel3g.github.io/main/Page0013%20(2).jpg"
  },
  {
    name: "IEEE YESIST12 Project Competition and maker fair 2019 Thailand",
    issuer: "IEEE Region 10",
    issued: "Sept 2019",
    link: "https://raw.githubusercontent.com/jewel3g/jewel3g.github.io/main/IEEE%20SST%2012%20Perticipation%20certification%20Thailand.jpg"
  },
  {
    name: "NASA Space Apps Challenge 2018",
    issuer: "Bangladesh association of Software and Information Services (BASIS)",
    issued: "2018",
    link: "https://raw.githubusercontent.com/jewel3g/jewel3g.github.io/main/nasa_space_app_challenge_participation_2019.jpg"
  },
  {
    name: "Nasa Space Apps Challenge 2019",
    issuer: "Bangladesh association of Software and Information Services (BASIS)",
    issued: "2019",
    link: "https://raw.githubusercontent.com/jewel3g/jewel3g.github.io/main/nasa_space_app_challenge_participation_2018.jpg"
  }
];

export const Certifications = () => {
  return (
    <section id="certifications" className="section-padding bg-surface">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full card-hover">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2 leading-tight">{cert.name}</h3>
                    <p className="text-muted-foreground text-sm mb-2">{cert.issuer}</p>
                    
                    <div className="flex items-center justify-center gap-1 text-primary text-sm">
                      <Calendar className="h-3 w-3" />
                      {cert.issued}
                    </div>
                  </div>

                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors text-sm"
                    >
                      <ExternalLink className="h-3 w-3" />
                      View Certificate
                    </a>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};