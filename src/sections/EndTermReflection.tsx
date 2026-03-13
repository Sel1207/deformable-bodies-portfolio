import { motion } from 'framer-motion';
import { Award, Quote, CheckCircle2 } from 'lucide-react';

export default function EndTermReflection() {
  return (
    <section id="reflection" className="py-24 px-6 lg:px-8 relative overflow-hidden bg-background/50">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Animated Header */}
        <motion.div 
          className="mb-16 relative inline-block text-center w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-mono text-[10px] uppercase tracking-[0.3em] mb-3 flex items-center justify-center gap-2">
            <Quote className="w-4 h-4" /> Final Thoughts
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight italic uppercase text-center">
            End-Term Reflection
          </h2>
          <div className="flex justify-center">
            <motion.div 
              className="h-1.5 bg-primary mt-4 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: '120px' }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8, ease: "circOut" }}
            />
          </div>
        </motion.div>

        {/* Highlight Quote */}
        <motion.div 
          className="relative mb-12 p-8 md:p-12 bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
          <Quote className="w-24 h-24 text-primary/10 absolute -top-4 -left-4 -rotate-12" />
          
          <blockquote className="text-xl md:text-2xl text-foreground font-light italic text-center relative z-10 leading-relaxed">
            "The study of deformable bodies is not merely about solving equations—it is about understanding the invisible forces that shape our engineered world."
          </blockquote>
          <p className="text-center text-primary font-bold mt-6 text-sm uppercase tracking-widest">
            — Karl Philip C. Espino
          </p>
        </motion.div>

        {/* The Essay Section */}
        <motion.div
          className="engineering-card p-8 md:p-12 bg-card border border-border/60 rounded-xl relative shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Decorative Blueprint elements */}
          <div className="absolute top-0 right-0 p-4 opacity-30">
            <div className="w-16 h-16 border-t border-r border-primary/40 rounded-tr-xl" />
          </div>
          <div className="absolute bottom-0 left-0 p-4 opacity-30">
            <div className="w-16 h-16 border-b border-l border-primary/40 rounded-bl-xl" />
          </div>

          <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none text-muted-foreground leading-loose relative z-10">
            <p className="first-letter:text-5xl first-letter:font-black first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:-mt-1">
              This course has fundamentally transformed my understanding of how materials respond to external forces. 
              I have mastered the core principles of stress and strain analysis, learned to calculate deformations 
              in axially loaded members, analyzed torsional stresses in shafts, constructed shear and moment diagrams 
              with confidence, determined bending stresses in beams, and calculated deflections using multiple methods. 
              These skills form the essential toolkit for any mechanical engineer.
            </p>

            <p className="mt-6">
              Beyond theoretical knowledge, I have developed practical problem-solving skills that will serve me 
              throughout my engineering career. I can now approach complex structural problems systematically, 
              identify the appropriate analytical methods, and verify my solutions through multiple approaches. 
              The ability to visualize internal forces and stresses within structural members has become second nature. 
              The journey through this course has taught me the value of persistence and consistent practice. 
              The challenging problems in torsion and beam deflection initially seemed insurmountable, but through 
              dedicated effort and utilization of all available resources—including the Coursera certifications—I 
              have developed confidence in my analytical abilities.
            </p>

            <p className="mt-6">
              I now appreciate how the concepts learned directly apply to real engineering challenges. From designing 
              safe pressure vessels to ensuring adequate shaft diameters for power transmission, from optimizing beam 
              cross-sections to limiting deflections in structural members—the knowledge gained is immediately applicable 
              to professional engineering practice. With this strong foundation in deformable body mechanics, I am 
              excited to advance to more specialized courses in machine design, structural analysis, and finite element methods. 
              My goal is to apply these principles to design innovative mechanical systems that are not only functional 
              but also safe, efficient, and optimized for their intended applications.
            </p>
          </div>
        </motion.div>

        {/* Closing Status */}
        <motion.div 
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-secondary/50 rounded-full border border-border/60 shadow-sm backdrop-blur-sm">
            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
            </div>
            <span className="text-foreground font-bold uppercase tracking-widest text-xs">
              Course Completed with Excellence
            </span>
            <Award className="w-5 h-5 text-accent" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}