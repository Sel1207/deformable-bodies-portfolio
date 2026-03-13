import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Cpu } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* AI Disclaimer */}
        <motion.div 
          className="mb-8 p-6 bg-secondary/30 rounded-lg border border-border/40"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Cpu className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                AI-Assisted Development
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This digital portfolio was developed through the strategic utilization of Artificial Intelligence (AI) 
                to enhance code optimization and user experience design. Intended strictly for personal and professional 
                presentation use.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Footer content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and course info */}
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">SEU #7: Digital Portfolio</p>
              <p className="text-xs text-muted-foreground">MEC32-06 | Fundamentals of Deformable Bodies</p>
            </div>
          </motion.div>

          {/* Center info */}
          <motion.div 
            className="flex items-center gap-2 text-xs text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Academic Year 2025-2026</span>
          </motion.div>

          {/* Copyright */}
          <motion.div 
            className="flex items-center gap-2 text-xs text-muted-foreground"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span>Crafted with Engineering Precision</span>
            <span className="text-border">|</span>
            <span>{currentYear}</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
