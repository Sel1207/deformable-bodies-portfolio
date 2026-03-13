import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ClipboardCheck, ChevronDown, Image as ImageIcon, Percent, Calendar, TrendingUp, Target } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export default function DiagnosticExam() {
  const [isExpanded, setIsExpanded] = useState(false);

  const diagnosticData = {
    title: 'Diagnostic Examination',
    score: '--/100',
    date: 'TBD',
    description: 'Initial assessment to evaluate prior knowledge of mechanics fundamentals including basic stress concepts, force analysis, and mathematical foundations required for the course.',
    reflection: 'The diagnostic exam served as an important baseline assessment of my existing knowledge before diving into the course material. It helped identify areas where I had a solid foundation, such as basic force equilibrium and free-body diagrams, while also highlighting topics that would require extra attention, particularly in stress-strain relationships and material properties. This self-awareness allowed me to approach the course with a clear understanding of my strengths and areas for improvement, ultimately contributing to more effective study planning throughout the semester.'
  };

  return (
    <section id="diagnostic" className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div 
          className="section-header mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="technical-badge text-primary border-primary/30 mb-4 inline-flex"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <ClipboardCheck className="w-4 h-4 mr-2" />
            Baseline Assessment
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Diagnostic Exam
          </h2>
          <p className="text-muted-foreground mt-2">
            Initial knowledge assessment before course commencement.
          </p>
        </motion.div>

        {/* Diagnostic Exam Card */}
        <motion.div 
          className="engineering-card overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ 
            y: -5, 
            boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.2)' 
          }}
        >
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <motion.div 
                  className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                >
                  <ClipboardCheck className="w-7 h-7 text-primary" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{diagnosticData.title}</h3>
                  <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                    <Calendar className="w-4 h-4" />
                    {diagnosticData.date}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 text-3xl font-bold text-primary">
                  <Percent className="w-6 h-6" />
                  {diagnosticData.score}
                </div>
              </div>
            </div>

            {/* Topics covered */}
            <div className="mb-4">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-1">
                <Target className="w-3 h-3" />
                Assessment Areas
              </p>
              <div className="flex flex-wrap gap-2">
                {['Force Equilibrium', 'Free-Body Diagrams', 'Basic Stress Concepts', 'Material Properties', 'Mathematical Foundations'].map((topic, idx) => (
                  <motion.span 
                    key={idx} 
                    className="text-xs px-2 py-1 bg-secondary rounded border border-border/40 text-muted-foreground"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    {topic}
                  </motion.span>
                ))}
              </div>
            </div>

            <p className="text-muted-foreground mb-6">{diagnosticData.description}</p>

            {/* Evidence button */}
            <div className="flex items-center gap-3 mb-4">
              <Dialog>
                <DialogTrigger asChild>
                  <motion.button 
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded hover:bg-primary/20 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ImageIcon className="w-4 h-4" />
                    View Exam Evidence
                  </motion.button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                      <ClipboardCheck className="w-5 h-5 text-primary" />
                      Diagnostic Exam - Evidence
                    </DialogTitle>
                  </DialogHeader>
                  <div className="aspect-video bg-secondary/50 grid-pattern flex items-center justify-center rounded-lg">
                    <div className="text-center">
                      <ImageIcon className="w-16 h-16 text-muted-foreground/40 mx-auto mb-3" />
                      <span className="text-muted-foreground font-mono">Add your Diagnostic Exam evidence here</span>
                      <p className="text-xs text-muted-foreground/60 mt-2">Replace with your exam results</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Reflection */}
            <div className="border-t border-border/60 pt-4">
              <motion.button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center justify-between w-full text-left group/btn"
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-sm font-medium text-primary flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Reflection
                </span>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4 text-muted-foreground group-hover/btn:text-primary transition-colors" />
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {isExpanded && (
                  <motion.div 
                    className="mt-3 p-4 bg-secondary/30 rounded border border-border/40"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {diagnosticData.reflection}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
