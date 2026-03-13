import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Award, CheckCircle, ExternalLink, GraduationCap, Star, Trophy,
  ChevronLeft, ChevronRight, ZoomIn, ShieldCheck
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface CourseraCourse {
  id: number;
  title: string;
  score: number;
  total: number;
  status: string;
  attempts: number;
  link: string;
  pages: number;
}

const courseraCourses: CourseraCourse[] = [
  {
    id: 1,
    title: 'Mechanics of Materials I: Fundamentals of Stress & Strain and Axial Loading',
    score: 100,
    total: 100,
    status: 'Graded',
    attempts: 1,
    link: 'https://coursera.org/share/90c0ab132ffd05f6938273959d77c454',
    pages: 1
  },
  {
    id: 2,
    title: 'Mechanics of Materials II: Thin-Walled Pressure Vessels and Torsion',
    score: 100,
    total: 100,
    status: 'Graded',
    attempts: 1,
    link: 'https://coursera.org/share/54ed8d11d9196877ab91cfe16d56d6b2',
    pages: 1
  },
  {
    id: 3,
    title: 'Mechanics of Materials III: Beam Bending',
    score: 100,
    total: 100,
    status: 'Graded',
    attempts: 1,
    link: 'https://coursera.org/share/ecce22cc39f4810a4c2c76bc59feca0f',
    pages: 1
  }
];

// --- Certificate Viewer (Landscape Orientation) ---
function CertificateViewer({ title, totalPages, id, link }: { title: string, totalPages: number, id: number, link: string }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <DialogContent className="max-w-[98vw] md:max-w-[90vw] lg:max-w-[1100px] h-[92vh] p-0 flex flex-col overflow-hidden bg-background/95 backdrop-blur-2xl border-border/40">
      <DialogHeader className="p-4 border-b shrink-0 bg-secondary/10 flex flex-row items-center justify-between space-y-0">
        <DialogTitle className="text-sm font-bold flex items-center gap-2 italic tracking-tight">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          CERTIFICATE_VIEWER / {title.substring(0, 30)}...
        </DialogTitle>
        <div className="flex items-center gap-3">
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[10px] font-mono bg-green-500/10 text-green-600 dark:text-green-400 px-3 py-1 rounded-full border border-green-500/20 uppercase flex items-center gap-1 hover:bg-green-500/20 transition-colors"
          >
            <ShieldCheck className="w-3 h-3" /> VERIFY ONLINE
          </a>
          {totalPages > 1 && (
             <div className="text-[10px] font-mono bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20 uppercase tracking-widest hidden sm:block">
               PAGE {currentPage + 1} OF {totalPages}
             </div>
          )}
        </div>
      </DialogHeader>
      
      <div className="flex-1 relative flex flex-col overflow-hidden bg-[#0a0a0a]/5 dark:bg-white/5">
        <div className="flex-1 overflow-auto p-4 md:p-10 flex items-center justify-center">
          <motion.div 
            layout
            // Using aspect-[11/8.5] for Landscape Certificates
            className={`relative bg-white dark:bg-zinc-900 shadow-2xl transition-all duration-500 origin-center border border-border/20 overflow-hidden flex items-center justify-center
              ${isZoomed ? 'w-[1400px] cursor-zoom-out' : 'w-full max-w-[900px] aspect-[11/8.5] cursor-zoom-in'}`}
            onClick={() => setIsZoomed(!isZoomed)}
          >
             {/* REAL IMAGE LOADING HERE */}
             <img 
              src={`/images/coursera/cert${id}.jpg`} 
              alt={`Coursera Certificate ${id}`}
              className="w-full h-full object-contain"
              onError={(e) => {
                e.currentTarget.src = `https://placehold.co/1100x850/eeeeee/999999?text=Missing+cert${id}.jpg`;
              }}
            />
          </motion.div>
        </div>

        {totalPages > 1 && (
          <>
            <button onClick={() => setCurrentPage(p => (p - 1 + totalPages) % totalPages)}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/90 border border-primary/10 flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all text-primary z-30">
              <ChevronLeft size={24} />
            </button>
            <button onClick={() => setCurrentPage(p => (p + 1) % totalPages)}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/90 border border-primary/10 flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all text-primary z-30">
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>
    </DialogContent>
  );
}

// --- Cards ---
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

function CourseCard({ course, index }: { course: CourseraCourse; index: number }) {
  return (
    <Dialog>
      <motion.div
        variants={cardVariants}
        className="engineering-card p-6 relative overflow-hidden group border border-border/60 bg-card flex flex-col"
        whileHover={{ y: -5, boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.2)' }}
      >
        <div className="absolute top-4 right-4 z-10">
          <motion.div 
            className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg border-2 border-yellow-200/50"
            animate={{ boxShadow: ['0 0 0 0 rgba(250, 204, 21, 0)', '0 0 20px 5px rgba(250, 204, 21, 0.3)', '0 0 0 0 rgba(250, 204, 21, 0)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Trophy className="w-6 h-6 text-white drop-shadow-md" />
          </motion.div>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
            <span className="text-lg font-black text-primary">{index + 1}</span>
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/30 px-2 py-1 rounded flex items-center">
            <CheckCircle className="w-3 h-3 mr-1" /> {course.status}
          </span>
        </div>

        <h3 className="text-lg font-bold text-foreground mb-4 pr-16 group-hover:text-primary transition-colors leading-tight flex-1">
          {course.title}
        </h3>

        <div className="flex items-center justify-between border-t border-border/40 pt-4 mb-5">
          <div className="flex items-center gap-4">
            <div className="text-center">
              <p className="text-3xl font-black text-accent">{course.score}</p>
              <p className="text-[10px] font-mono text-muted-foreground uppercase">Score /{course.total}</p>
            </div>
            <div className="h-10 w-px bg-border/60" />
            <div>
              <p className="text-[10px] font-mono text-muted-foreground uppercase">{course.attempts} attempt submitted</p>
              <div className="flex items-center gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-auto">
          <DialogTrigger asChild>
            <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-primary/5 border border-primary/20 text-xs font-bold text-primary hover:bg-primary hover:text-white transition-all">
              <ZoomIn className="w-4 h-4" /> VIEW CERTIFICATE
            </button>
          </DialogTrigger>
          <a 
            href={course.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-secondary border border-border/40 text-xs font-bold text-muted-foreground hover:bg-border transition-all"
          >
            <ExternalLink className="w-4 h-4" /> VERIFY ON COURSERA
          </a>
        </div>
      </motion.div>

      <CertificateViewer title={course.title} totalPages={course.pages} id={course.id} link={course.link} />
    </Dialog>
  );
}

// --- Main Section ---
export default function CourseraSection() {
  const totalScore = courseraCourses.reduce((acc, course) => acc + course.score, 0);
  const averageScore = totalScore / courseraCourses.length;

  return (
    <section id="coursera" className="py-24 px-6 lg:px-8 relative overflow-hidden bg-background/50">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Animated Header */}
        <motion.div 
          className="mb-16 relative inline-block"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-mono text-[10px] uppercase tracking-[0.3em] mb-3 block flex items-center gap-2">
            <GraduationCap className="w-4 h-4" /> Online Learning
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight italic uppercase">
            Coursera Certifications
          </h2>
          <motion.div 
            className="h-1.5 bg-primary mt-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8, ease: "circOut" }}
          />
          <p className="text-muted-foreground mt-6 max-w-2xl text-base leading-relaxed">
            Professional certifications from the Georgia Institute of Technology, demonstrating verified competency in the mechanics of materials.
          </p>
        </motion.div>

        {/* Summary Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="engineering-card p-5 flex items-center gap-5 border border-border/60 bg-card">
            <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Award className="w-7 h-7 text-primary" />
            </div>
            <div>
              <p className="text-3xl font-black text-foreground">{courseraCourses.length}</p>
              <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mt-1">Courses Completed</p>
            </div>
          </div>

          <div className="engineering-card p-5 flex items-center gap-5 border border-border/60 bg-card">
            <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
              <Trophy className="w-7 h-7 text-accent" />
            </div>
            <div>
              <p className="text-3xl font-black text-foreground">{averageScore}%</p>
              <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mt-1">Average Score</p>
            </div>
          </div>

          <div className="engineering-card p-5 flex items-center gap-5 border border-border/60 bg-card">
            <div className="w-14 h-14 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
              <CheckCircle className="w-7 h-7 text-green-500" />
            </div>
            <div>
              <p className="text-3xl font-black text-foreground">100%</p>
              <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mt-1">Pass Rate</p>
            </div>
          </div>
        </motion.div>

        {/* Course Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
        >
          {courseraCourses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </motion.div>

        {/* Provider Footer */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-secondary/50 rounded-full border border-border/40 text-sm text-muted-foreground">
            <Award className="w-4 h-4 text-primary" />
            Curriculum provided by <span className="text-foreground font-bold">Georgia Institute of Technology</span> via
            <a 
              href="https://coursera.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary font-bold hover:underline inline-flex items-center gap-1 ml-1"
            >
              Coursera <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}