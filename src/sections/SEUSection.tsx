import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  ChevronDown, 
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  BookOpen
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface SEUItem {
  id: number;
  title: string;
  description: string;
  reflection: string;
  pages: string[];
  pageLabels: string[];
}

const seuData: SEUItem[] = [
  {
    id: 1,
    title: 'SEU #1',
    description: 'Analysis of fundamental normal, shear, and bearing stresses in structural connections and trusses.',
    reflection: 'Working through SEU #1 highlighted the importance of carefully evaluating multiple stress types—like shear in rivets and normal stress in trusses—to ensure structural integrity. It was a challenging but rewarding application that effectively bridged theoretical mechanics with practical engineering design.',
    pages: ['Page 1', 'Page 2', 'Page 3', 'Page 4'],
    pageLabels: ['Normal Stress', 'Shear & Bearing Stresses', 'Bolted & Riveted Connections', 'Truss Analysis']
  },
  {
    id: 2,
    title: 'SEU #2',
    description: 'Evaluation of axial deformation and displacement compatibility in multi-material rigid bar systems.',
    reflection: 'Working on SEU #2 really deepened my understanding of how composite materials and rigid bar systems behave under load, particularly when balancing specific stress limits with strict deformation constraints. It was incredibly satisfying to apply compatibility conditions to figure out exactly how these multi-material structures stretch, compress, and shift together.',
    pages: ['Page 1', 'Page 2', 'Page 3'],
    pageLabels: ['Axial Deformation', 'Rigid Bar Systems', 'Compatibility Equations']
  },
  {
    id: 3,
    title: 'SEU #3',
    description: 'Analysis of thermal stresses and constrained deformations in single and composite material systems subjected to temperature variations.',
    reflection: 'Completing SEU #3 made me appreciate how dramatically temperature fluctuations can impact rigidly constrained structures, sometimes even inducing stresses greater than the applied physical loads themselves. It was an eye-opening exercise in learning how to carefully calculate and balance thermal expansion or contraction with mechanical forces to find a safe equilibrium.',
    pages: ['Page 1', 'Page 2', 'Page 3', 'Page 4'],
    pageLabels: ['Thermal Expansion Fundamentals', 'Constrained Deformations', 'Gap Closure Problems', 'Composite Bar Thermal Stress']
  },
  {
    id: 4,
    title: 'SEU #4',
    description: 'Investigation of composite action, static indeterminacy, and thermal effects in axially loaded members.',
    reflection: 'Working through SEU #4 was a great exercise in understanding how different materials interact under constraints, especially when factoring in complex variables like thermal expansion alongside axial loads. It really highlighted the real-world problems of designing composite structures—like reinforced concrete columns and bimetallic assemblies—to safely share loads without exceeding permissible stress limits.',
    pages: ['Page 1', 'Page 2', 'Page 3'],
    pageLabels: ['Composite Concentric Shells', 'Reinforced Columns', 'Combined Axial & Thermal Loads']
  },
  {
    id: 5,
    title: 'SEU #5',
    description: 'Assessment of flexural stresses, bending moments, and load-bearing capacity in beams.',
    reflection: 'Working through SEU #5 provided valuable hands-on practice in evaluating flexural stress and finding critical bending moments in beams subjected to combined loads. It was highly rewarding to apply these principles to determine the exact cross-sectional dimensions and maximum loads a structure can safely handle without failing.',
    pages: ['Page 1', 'Page 2'],
    pageLabels: ['Flexural Stress & Sizing', 'Overhanging Beam Analysis']
  },
  {
    id: 6,
    title: 'SEU #6',
    description: 'Determination of beam deflection and elastic curves utilizing the Double Integration Method.',
    reflection: 'Working on SEU #6 deepened my appreciation for the Double Integration Method when calculating beam deflections under discontinuous loads. It was a rigorous but satisfying process to systematically apply boundary conditions and integrate moment equations to pinpoint the exact flexural rigidity-deflection product at the midspan.',
    pages: ['Page 1', 'Page 2'],
    pageLabels: ['Double Integration Method (DIM)', 'Flexural Rigidity-Deflection Product']
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

function SEUCard({ seu }: { seu: SEUItem }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <motion.div 
        variants={cardVariants}
        className="engineering-card overflow-hidden group hover:border-primary/50 bg-card border border-border/60 rounded-xl relative flex flex-col"
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
      >
        <div 
          onClick={() => { setCurrentPage(0); setGalleryOpen(true); }}
          className="aspect-video bg-gradient-to-br from-secondary/80 to-secondary/30 grid-pattern flex items-center justify-center cursor-pointer relative overflow-hidden"
        >
          <motion.div className="text-center z-10" whileHover={{ scale: 1.1 }}>
            <BookOpen className="w-12 h-12 text-primary/40 mx-auto mb-2" />
            <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/60">{seu.pages.length} Sheets</div>
          </motion.div>
          
          <motion.div 
            className="absolute inset-0 bg-primary/5 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
          >
            <div className="bg-background/90 text-primary text-xs font-bold px-4 py-2 rounded-full border border-primary/20 flex items-center gap-2 shadow-xl">
              <ZoomIn className="w-3.5 h-3.5" /> OPEN BLUEPRINTS
            </div>
          </motion.div>
        </div>

        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-tight">{seu.title}</h3>
          <p className="text-xs text-muted-foreground mt-2 line-clamp-2 leading-relaxed">{seu.description}</p>
          
          <div className="mt-auto pt-5 border-t border-border/40">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center justify-between w-full text-xs font-bold text-primary/80 uppercase tracking-tighter hover:text-primary transition-colors"
            >
              <span className="flex items-center gap-2"><FileText className="w-3.5 h-3.5" /> Engineer's Reflection</span>
              <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ type: "spring", stiffness: 300 }}>
                <ChevronDown className="w-4 h-4" />
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
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed bg-secondary/20 p-3 rounded-lg border border-border/20 italic">
                    "{seu.reflection}"
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      <Dialog open={galleryOpen} onOpenChange={setGalleryOpen}>
        <DialogContent className="max-w-[98vw] md:max-w-[90vw] lg:max-w-[1100px] h-[92vh] p-0 flex flex-col overflow-hidden bg-background/95 backdrop-blur-2xl border-border/40">
          <DialogHeader className="p-4 border-b shrink-0 bg-secondary/10 flex flex-row items-center justify-between space-y-0">
            <DialogTitle className="text-sm font-bold flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              {seu.title}
            </DialogTitle>
            <div className="text-[10px] font-mono bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">
              SHEET {currentPage + 1} OF {seu.pages.length}
            </div>
          </DialogHeader>
          
          <div className="flex-1 relative flex flex-col overflow-hidden bg-[#0a0a0a]/5 dark:bg-white/5">
            <div className="flex-1 overflow-auto p-4 md:p-10 flex items-start justify-center">
              <motion.div 
                layout
                className={`relative bg-white dark:bg-zinc-900 shadow-2xl transition-all duration-500 origin-top border border-border/20 flex items-center justify-center overflow-hidden
                  ${isZoomed ? 'w-[1200px] cursor-zoom-out' : 'w-full max-w-[800px] aspect-[8.5/11] cursor-zoom-in'}`}
                onClick={() => setIsZoomed(!isZoomed)}
              >
                <img 
                  src={`/images/seu/seu${seu.id}_p${currentPage + 1}.jpg`} 
                  alt={`${seu.title} - Page ${currentPage + 1}`}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/850x1100/eeeeee/999999?text=Missing+seu${seu.id}_p${currentPage + 1}.jpg`;
                  }}
                />
              </motion.div>
            </div>

            <button onClick={() => setCurrentPage(p => (p - 1 + seu.pages.length) % seu.pages.length)}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/90 border border-primary/10 flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all text-primary">
              <ChevronLeft size={24} />
            </button>
            <button onClick={() => setCurrentPage(p => (p + 1) % seu.pages.length)}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/90 border border-primary/10 flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all text-primary">
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="h-24 bg-background/50 border-t p-4 shrink-0 flex items-center justify-center gap-3 overflow-x-auto no-scrollbar">
            {seu.pages.map((_, idx) => (
              <button key={idx} onClick={() => setCurrentPage(idx)}
                className={`h-12 w-9 rounded transition-all flex flex-col items-center justify-center gap-1 shrink-0 border-2
                  ${currentPage === idx ? 'border-primary bg-primary/5 text-primary scale-110' : 'border-transparent bg-secondary/50 text-muted-foreground opacity-50 hover:opacity-100'}`}>
                <span className="text-[10px] font-bold">{idx + 1}</span>
                <div className={`h-0.5 w-4 rounded-full ${currentPage === idx ? 'bg-primary' : 'bg-transparent'}`} />
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default function SEUSection() {
  return (
    <section id="seu" className="py-24 px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="mb-16 relative inline-block"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-mono text-[10px] uppercase tracking-[0.3em] mb-3 block">Structural Analysis</span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight italic">
            SEU UNDERTAKINGS
          </h2>
          {/* Restored Blue Accent Line */}
          <motion.div 
            className="h-1.5 bg-primary mt-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8, ease: "circOut" }}
          />
          <p className="text-muted-foreground mt-6 max-w-2xl text-base leading-relaxed">
            A technical repository of skill-building exercises focused on the mechanics of deformable bodies and structural integrity.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {seuData.map((seu) => <SEUCard key={seu.id} seu={seu} />)}
        </motion.div>
      </div>
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full -z-10" />
    </section>
  );
}