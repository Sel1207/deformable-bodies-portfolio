import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ClipboardList, FileCheck, GraduationCap, Trophy, ChevronDown,
  Image as ImageIcon, Percent, Calendar, Target, TrendingUp,
  ChevronLeft, ChevronRight, ZoomIn, Search, AlignLeft
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// --- Types & Data ---
interface Assessment {
  id: number;
  title: string;
  score: string;
  date: string;
  topics: string[];
  reflection: string;
  pages: number; // Number of pages for the document viewer
}

const quizzes = [
  { 
    id: 1, 
    title: 'Quiz 1', 
    score: '50/100', // Updated score based on your reflection
    date: 'TBD', 
    notes: 'Stress and Strain fundamentals', 
    pages: 1,
    isTextOnly: true,
    reflection: 'Quiz #1 really tested me because it showed me how much I was not putting much effort into this course. I got a score of I think around 50+ out of 100, so I was really not that much thrilled. Still, I took the course and prepared for the next quiz.'
  },
  { 
    id: 2, 
    title: 'Quiz 2', 
    score: '92/100', 
    date: 'January 21, 2026', 
    notes: 'Thermal Stress', 
    pages: 1,
    isTextOnly: true,
    reflection: 'Quiz #2 was better than my Quiz #1, as I got a score of 92, which was almost twice my score from the previous quiz. Though this topic was much easier, being solely focused on thermal stress, it was still a good feeling to get a good score.'
  },
  { id: 3, title: 'Quiz 3', score: '23/100', date: 'February 16, 2026', notes: 'Shear and Moment Diagrams', pages: 4 },
  { id: 4, title: 'Quiz 4', score: '--/100', date: 'March 04, 2026', notes: 'Bending Stresses', pages: 1 },
  { id: 5, title: 'Quiz 5', score: '86/100', date: 'March 09, 2026', notes: 'Beam Deflection', pages: 8 },
];

const classAssessments: Assessment[] = [
  {
    id: 1,
    title: 'Class Assessment 1',
    score: '--/100',
    date: 'TBD',
    topics: ['Stress Analysis', 'Strain Calculations', 'Material Properties', 'Axial Loading'],
    pages: 5,
    reflection: 'This first major assessment tested my understanding of foundational concepts in deformable body mechanics. I found the stress analysis problems particularly manageable after extensive practice with the SEU exercises. Moving forward, I need to focus on improving my speed in solving problems while maintaining accuracy.'
  },
  {
    id: 2,
    title: 'Class Assessment 2',
    score: '--/100',
    date: 'TBD',
    topics: ['Torsion', 'Shear Diagrams', 'Moment Diagrams', 'Bending Stresses'],
    pages: 3,
    reflection: 'The second assessment covered more advanced topics and truly tested my comprehensive understanding. The shear and moment diagram problems required systematic approaches and careful verification at each step. This assessment reinforced the importance of consistent practice.'
  }
];

// --- Shared Components ---

function DocumentViewer({ title, totalPages, id, folder, prefix }: { title: string, totalPages: number, id: number, folder: string, prefix: string }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <DialogContent className="max-w-[98vw] md:max-w-[90vw] lg:max-w-[1100px] h-[92vh] p-0 flex flex-col overflow-hidden bg-background/95 backdrop-blur-2xl border-border/40">
      <DialogHeader className="p-4 border-b shrink-0 bg-secondary/10 flex flex-row items-center justify-between space-y-0">
        <DialogTitle className="text-sm font-bold flex items-center gap-2 italic tracking-tight">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          {title.toUpperCase()} / DOCUMENT_VIEWER
        </DialogTitle>
        <div className="text-[10px] font-mono bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20 uppercase tracking-widest">
          Sheet {currentPage + 1} of {totalPages}
        </div>
      </DialogHeader>
      
      <div className="flex-1 relative flex flex-col overflow-hidden bg-[#0a0a0a]/5 dark:bg-white/5">
        <div className="flex-1 overflow-auto p-4 md:p-10 flex items-start justify-center">
          <motion.div 
            layout
            className={`relative bg-white dark:bg-zinc-900 shadow-2xl transition-all duration-500 origin-top border border-border/20 overflow-hidden flex items-center justify-center
              ${isZoomed ? 'w-[1200px] cursor-zoom-out' : 'w-full max-w-[750px] aspect-[8.5/11] cursor-zoom-in'}`}
            onClick={() => setIsZoomed(!isZoomed)}
          >
            {/* REAL IMAGE LOADING HERE */}
            <img 
              src={`/images/${folder}/${prefix}${id}_p${currentPage + 1}.jpg`} 
              alt={`${title} - Page ${currentPage + 1}`}
              className="w-full h-full object-contain"
              onError={(e) => {
                e.currentTarget.src = `https://placehold.co/850x1100/eeeeee/999999?text=Missing+${prefix}${id}_p${currentPage + 1}.jpg`;
              }}
            />
          </motion.div>
        </div>

        <button onClick={() => setCurrentPage(p => (p - 1 + totalPages) % totalPages)}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/90 border border-primary/10 flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all text-primary z-30">
          <ChevronLeft size={24} />
        </button>
        <button onClick={() => setCurrentPage(p => (p + 1) % totalPages)}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/90 border border-primary/10 flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all text-primary z-30">
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="h-24 bg-background/50 border-t p-4 shrink-0 flex items-center justify-center gap-3 overflow-x-auto no-scrollbar">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button key={idx} onClick={() => setCurrentPage(idx)}
            className={`h-12 w-9 rounded transition-all flex flex-col items-center justify-center gap-1 shrink-0 border-2
              ${currentPage === idx ? 'border-primary bg-primary/5 text-primary scale-110' : 'border-transparent bg-secondary/50 text-muted-foreground opacity-50 hover:opacity-100'}`}>
            <span className="text-[10px] font-bold">{idx + 1}</span>
            <div className={`h-0.5 w-4 rounded-full ${currentPage === idx ? 'bg-primary' : 'bg-transparent'}`} />
          </button>
        ))}
      </div>
    </DialogContent>
  );
}

// --- Card Components ---

function AssessmentCard({ assessment }: { assessment: Assessment }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      className="engineering-card overflow-hidden group border border-border/60 bg-card"
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
              <FileCheck className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="text-xl font-bold tracking-tight">{assessment.title}</h4>
              <p className="text-[10px] font-mono text-muted-foreground flex items-center gap-1 uppercase tracking-widest mt-1">
                <Calendar className="w-3 h-3" /> {assessment.date}
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-black text-primary flex items-center justify-end gap-1">
              <Percent className="w-4 h-4 stroke-[3px]" />
              {assessment.score.split('/')[0]}
            </div>
            <p className="text-[10px] font-mono text-muted-foreground uppercase">Final Score</p>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {assessment.topics.map((topic, idx) => (
              <span key={idx} className="text-[10px] font-bold uppercase tracking-tighter px-2 py-1 bg-secondary rounded border border-border/40 text-muted-foreground">
                {topic}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-3 border-t border-border/40 pt-5">
          <Dialog>
            <DialogTrigger asChild>
              <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-primary/5 border border-primary/20 text-xs font-bold text-primary hover:bg-primary hover:text-white transition-all">
                <Search className="w-4 h-4" /> VIEW GRADED SHEETS
              </button>
            </DialogTrigger>
            <DocumentViewer title={assessment.title} totalPages={assessment.pages} id={assessment.id} folder="assessments" prefix="assessment" />
          </Dialog>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center justify-between w-full px-1"
          >
            <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] flex items-center gap-2">
              <TrendingUp className="w-3.5 h-3.5" /> Performance Reflection
            </span>
            <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            </motion.div>
          </button>
          
          <AnimatePresence>
            {isExpanded && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <p className="text-sm text-muted-foreground leading-relaxed italic bg-secondary/30 p-4 rounded-lg border border-dashed border-border/60">
                  "{assessment.reflection}"
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

// --- Main Section ---

export default function AssessmentVault() {
  return (
    <section id="assessments" className="py-24 px-6 lg:px-8 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* BLUE LINE DESIGN & HEADER */}
        <motion.div 
          className="mb-16 relative inline-block"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-mono text-[10px] uppercase tracking-[0.3em] mb-3 block">Academic Archives</span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight italic uppercase">
            Assessment Vault
          </h2>
          <motion.div 
            className="h-1.5 bg-primary mt-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8, ease: "circOut" }}
          />
          <p className="text-muted-foreground mt-6 max-w-2xl text-base leading-relaxed">
            A comprehensive record of examinations and performance metrics throughout the course duration.
          </p>
        </motion.div>

        <Tabs defaultValue="quizzes" className="w-full">
          <TabsList className="flex w-full max-w-md gap-2 mb-10 p-1 bg-secondary/50 rounded-xl border border-border/40">
            {['quizzes', 'assessments', 'final'].map((tab) => (
              <TabsTrigger 
                key={tab} 
                value={tab} 
                className="flex-1 py-2.5 text-[10px] font-black uppercase tracking-widest data-[state=active]:bg-primary data-[state=active]:text-white transition-all rounded-lg"
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>

          <AnimatePresence mode="wait">
            <TabsContent value="quizzes" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 outline-none">
              {quizzes.map((quiz) => (
                <Dialog key={quiz.id}>
                  <DialogTrigger asChild>
                    <motion.div 
                      className="engineering-card p-5 cursor-pointer group hover:border-primary/50 transition-all border border-border/60"
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex gap-3">
                          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                            {quiz.isTextOnly ? (
                              <AlignLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                            ) : (
                              <ClipboardList className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                            )}
                          </div>
                          <div>
                            <h4 className="font-bold group-hover:text-primary transition-colors">{quiz.title}</h4>
                            <p className="text-[10px] text-muted-foreground uppercase font-mono tracking-tighter">{quiz.notes}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-black text-primary">{quiz.score}</div>
                          <div className="text-[9px] font-mono text-muted-foreground">{quiz.date}</div>
                        </div>
                      </div>
                    </motion.div>
                  </DialogTrigger>
                  
                  {/* Conditionally Render Content based on isTextOnly flag */}
                  {quiz.isTextOnly ? (
                    <DialogContent className="max-w-md bg-background/95 backdrop-blur-xl border-border/40 p-6 sm:p-8">
                      <DialogHeader className="mb-4">
                        <DialogTitle className="flex items-center gap-2 text-primary font-black italic tracking-tight uppercase">
                          <TrendingUp className="w-5 h-5" />
                          {quiz.title} / Reflection
                        </DialogTitle>
                      </DialogHeader>
                      <div className="p-5 bg-secondary/30 rounded-xl border border-dashed border-border/60">
                        <p className="text-sm text-muted-foreground leading-relaxed italic relative">
                          <span className="text-primary text-2xl absolute -top-2 -left-2 opacity-30">"</span>
                          {quiz.reflection}
                          <span className="text-primary text-2xl absolute -bottom-4 -right-1 opacity-30">"</span>
                        </p>
                      </div>
                      <div className="mt-4 flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-muted-foreground border-t border-border/40 pt-4">
                        <span>Score: {quiz.score}</span>
                        <span>{quiz.date}</span>
                      </div>
                    </DialogContent>
                  ) : (
                    <DocumentViewer title={quiz.title} totalPages={quiz.pages} id={quiz.id} folder="quizzes" prefix="quiz" />
                  )}

                </Dialog>
              ))}
            </TabsContent>

            <TabsContent value="assessments" className="grid grid-cols-1 lg:grid-cols-2 gap-8 outline-none">
              {classAssessments.map((assessment) => (
                <AssessmentCard key={assessment.id} assessment={assessment} />
              ))}
            </TabsContent>

            <TabsContent value="final" className="outline-none">
              <div className="engineering-card overflow-hidden bg-gradient-to-br from-primary/5 to-transparent border-primary/20 p-8 md:p-12 relative">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Trophy size={120} className="text-primary rotate-12" />
                </div>
                <div className="relative z-10 max-w-3xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                      <GraduationCap className="text-white w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-black italic tracking-tighter uppercase">Final Examination</h3>
                      <p className="text-primary font-mono text-[10px] tracking-[0.4em] uppercase">Culminating Performance</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-8 text-lg italic">
                    "The final examination represents the culmination of my learning journey. It challenged me to integrate knowledge from all course modules and apply appropriate methods to diverse problem types."
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="px-8 py-3 bg-primary text-white font-black text-xs uppercase tracking-widest rounded-full hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/25 flex items-center gap-2">
                          <ImageIcon size={16} /> View Paper
                        </button>
                      </DialogTrigger>
                      <DocumentViewer title="Final Examination" totalPages={2} id={1} folder="exams" prefix="final" />
                    </Dialog>
                    <div className="px-8 py-3 bg-background border border-border/60 rounded-full font-black text-xs uppercase flex items-center gap-2">
                      <Trophy size={16} className="text-primary" /> Grade: --/100
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  );
}