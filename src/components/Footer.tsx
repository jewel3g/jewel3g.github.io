import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Quote Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <blockquote className="text-lg italic text-muted-foreground leading-relaxed">
              "If you are interested in knowing more, contact me. Do not expect too much, and keep your sense of humor."
            </blockquote>
            <cite className="text-sm text-muted-foreground">— MD Anaet Ullah</cite>
          </motion.div>

          {/* Footer Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-right space-y-4"
          >
            <div className="text-muted-foreground">
              © {currentYear} MD Anaet Ullah. All rights reserved.
            </div>
            
            <div>
              <Button
                variant="outline"
                size="icon"
                onClick={scrollToTop}
                className="card-hover"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};