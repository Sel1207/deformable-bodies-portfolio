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
            End-Term Personal Reflection
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

        {/* The Essay Section */}
        <motion.div
          className="engineering-card p-8 md:p-12 bg-card border border-border/60 rounded-xl relative shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Decorative Blueprint elements */}
          <div className="absolute top-0 right-0 p-4 opacity-30 pointer-events-none">
            <div className="w-16 h-16 border-t border-r border-primary/40 rounded-tr-xl" />
          </div>
          <div className="absolute bottom-0 left-0 p-4 opacity-30 pointer-events-none">
            <div className="w-16 h-16 border-b border-l border-primary/40 rounded-bl-xl" />
          </div>

          <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none text-muted-foreground leading-loose relative z-10">
            <p className="first-letter:text-5xl first-letter:font-black first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:-mt-1">
              As I conclude my final assessment in this course, MEC32-06, I would like to thank God for His unwavering 
              support in helping me finish all my requirements on time. It is through Him that I found the drive to finish 
              strong with this E-Portfolio.
            </p>

            <p className="mt-6">
              The term did not start this way; going in, I was not expecting much. Since I am taking my major subjects this term, 
              I found myself questioning how much effort I should put into this specific course. However, knowing that this subject 
              appears in both the Board Exams and Correlation Exams, I knew I couldn't afford to be complacent. My initial perspective 
              shifted after the first diagnostic exam; it revealed that I knew very little about the subject and that I had a 
              significant amount of work ahead of me.
            </p>

            <p className="mt-6">
              By the time Quiz #1 arrived, I realized I hadn't prepared as thoroughly as I had for my other courses. That was my oversight, 
              and it showed in my results, as I failed to reach the passing mark. I am not the type of student to let a mistake repeat 
              itself, so I prepared much harder for Quiz #2. This resulted in a score of 92/100—a massive improvement. However, 
              Quiz #3 presented a new challenge; it was difficult, and I struggled to grasp the concepts and the specific problem-solving 
              methods required. This led to another failing score.
            </p>

            <p className="mt-6">
              At that point, I experienced firsthand the complexity of the Civil Engineering field. As a student accustomed to solving for 
              apparatus, machinery, and power systems, transitioning to a different field's methodology was truly difficult. Nevertheless, 
              I remained determined to finish the term strong. I prepared rigorously for Quiz #4 and Quiz #5, hopefully earning good grades 
              that I hope will be enough to pass the subject.
            </p>

            <p className="mt-6">
              I would also like to express my gratitude to my friends, my classmates, and our course instructor, Engr. Rolando Quitalig, 
              for his passionate teaching and fair assessments. He is an embodiment of Mapúan Education—a professor of great wisdom and 
              knowledge. He provided us with insights that extend far beyond the limits of a classroom, fostering the preparedness we need 
              for the outside world. He is a true educator at heart, and I genuinely enjoyed my time in his class.
            </p>

            <p className="mt-6 font-medium text-foreground italic border-l-2 border-primary pl-4 py-1 bg-primary/5 rounded-r-md">
              While my grades may not have always been perfect, the knowledge I have gained is invaluable, and I will certainly carry it 
              with me toward my future Board Exams. Thank you always, Sir, and God bless!
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
              Course Completed
            </span>
            <Award className="w-5 h-5 text-accent" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}