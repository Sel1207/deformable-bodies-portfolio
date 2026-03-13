import { motion } from 'framer-motion';
import { 
  User, ExternalLink, QrCode, Mail, Github, Linkedin, Globe,
  Sparkles, Code2, Cpu, FileText, FileCheck
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function AboutStudent() {
  return (
    <section id="about" className="py-24 px-6 lg:px-8 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Animated Header */}
        <motion.div 
          className="mb-16 relative inline-block"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-mono text-[10px] uppercase tracking-[0.3em] mb-3 block flex items-center gap-2">
            <User className="w-4 h-4" /> Personal Profile
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight italic uppercase">
            About the Student
          </h2>
          <motion.div 
            className="h-1.5 bg-primary mt-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8, ease: "circOut" }}
          />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Main Student Info Column (Spans 2) */}
          <motion.div className="lg:col-span-2 flex flex-col gap-6" variants={itemVariants}>
            
            {/* Primary Profile Card */}
            <motion.div 
              className="engineering-card p-6 md:p-8 bg-card border border-border/60 rounded-xl"
              whileHover={{ y: -5, boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.2)' }}
            >
              <div className="flex flex-col sm:flex-row items-start gap-8">
                
                {/* --- 2X2 PORTRAIT IMAGE BLOCK --- */}
<div className="relative group shrink-0 mx-auto sm:mx-0">
  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
  <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-primary/10 border-2 border-primary/20 flex items-center justify-center overflow-hidden shadow-xl">
    <img 
      src="/images/Espino_2x2.jpg" 
      alt="Karl Philip C. Espino" 
      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
      onError={(e) => {
        e.currentTarget.src = "https://placehold.co/200x200/eeeeee/999999?text=2x2+Photo";
      }}
    />
  </div>
</div>
                
                <div className="flex-1 w-full text-center sm:text-left">
                  <h3 className="text-3xl font-black text-foreground tracking-tight uppercase">Karl Philip C. Espino</h3>
                  <p className="text-[10px] font-mono text-primary uppercase tracking-widest mt-2 flex items-center justify-center sm:justify-start gap-1.5 mb-6">
                    <Sparkles className="w-3.5 h-3.5" /> BS/MS Electrical Engineering Student
                  </p>
                  
                  {/* Bio block with engineering side-border */}
                  <div className="relative p-5 bg-secondary/20 rounded-r-lg border-y border-r border-border/40 mb-6 text-left">
                    <div className="absolute top-0 left-0 w-1 h-full bg-primary rounded-l-lg" />
                    <p className="text-sm text-muted-foreground leading-relaxed italic">
                      "I am a dedicated Electrical Engineering student at Mapúa University with a passion for 
                      power systems and industrial automation. Through my academic journey, I have developed 
                      a strong foundation in electrical design, protective relaying, and system control. 
                      My goal is to bridge the gap between traditional power infrastructure and modern 
                      digital automation to create more resilient and efficient energy solutions."
                    </p>
                  </div>

                  {/* Social/Contact Links */}
                  <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                    <a href="mailto:kpcespino@mymail.mapua.edu.ph" className="inline-flex items-center gap-2 px-4 py-2 text-[10px] font-bold uppercase tracking-wider bg-secondary border border-border/60 text-muted-foreground rounded hover:bg-primary hover:text-white hover:border-primary transition-all">
                      <Mail className="w-3.5 h-3.5" /> Email
                    </a>
                    <a href="https://github.com/Sel1207" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 text-[10px] font-bold uppercase tracking-wider bg-secondary border border-border/60 text-muted-foreground rounded hover:bg-primary hover:text-white hover:border-primary transition-all">
                      <Github className="w-3.5 h-3.5" /> GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/karl-philip-espino-388894346/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 text-[10px] font-bold uppercase tracking-wider bg-secondary border border-border/60 text-muted-foreground rounded hover:bg-primary hover:text-white hover:border-primary transition-all">
                      <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bottom Row inside the Left Column */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                className="engineering-card p-6 bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 rounded-xl flex flex-col justify-center"
                whileHover={{ y: -3 }}
              >
                <Globe className="w-8 h-8 text-primary mb-4" />
                <h4 className="text-xl font-bold text-foreground mb-2 leading-tight">Expanded Portfolio</h4>
                <p className="text-xs text-muted-foreground mb-6">Access my complete digital portfolio for a broader look at my projects, CAD designs, and achievements. PS. This is a work in progress.</p>
                <a 
                  href="https://karl-philip-espino.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-auto w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-primary text-white text-xs font-bold uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary/20"
                >
                  Visit Main Website <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>

              <motion.div 
                className="engineering-card p-6 bg-card border border-border/60 rounded-xl"
                whileHover={{ y: -3 }}
              >
                <h4 className="text-sm font-black text-foreground uppercase tracking-widest flex items-center gap-2 mb-5">
                  <Code2 className="w-4 h-4 text-accent" /> Engineering Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Power Protection', 'DIALux', 'MATLAB', 'FluidSim', 'AutoCAD', 'Python', 'PLC', 'System Design'].map((skill) => (
                    <span 
                      key={skill}
                      className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-secondary text-muted-foreground rounded-sm border border-border/40 hover:border-accent/40 hover:text-accent cursor-default transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column (QR Code & Stats) */}
          <motion.div className="lg:col-span-1 h-full" variants={itemVariants}>
            <motion.div 
              className="engineering-card p-6 h-full bg-card border border-border/60 rounded-xl flex flex-col"
              whileHover={{ y: -5, boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.2)' }}
            >
              <h4 className="text-sm font-black text-foreground uppercase tracking-widest flex items-center gap-2 mb-6 border-b border-border/40 pb-4">
                <QrCode className="w-4 h-4 text-primary" /> Digital Access
              </h4>
              
              <Dialog>
                <DialogTrigger asChild>
                  <div className="aspect-square bg-gradient-to-br from-secondary/80 to-secondary/30 rounded-xl flex items-center justify-center cursor-pointer border border-border/60 hover:border-primary/50 transition-all group relative overflow-hidden mb-6">
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="text-center p-4 relative z-10">
                      <motion.div
                        animate={{ boxShadow: ['0 0 0 0 rgba(59, 130, 246, 0)', '0 0 20px 5px rgba(59, 130, 246, 0.1)', '0 0 0 0 rgba(59, 130, 246, 0)'] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="rounded-xl p-4 bg-white/5 dark:bg-black/5"
                      >
                         <img 
                          src="/images/qr-code.png" 
                          alt="Portfolio QR Code" 
                          className="w-24 h-24 object-contain mx-auto rounded-md"
                          onError={(e) => {
                            e.currentTarget.src = 'https://placehold.co/100x100/eeeeee/999999?text=QR+Code';
                          }}
                        />
                      </motion.div>
                      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground block mt-6">
                        Click to Enlarge QR
                      </span>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-md bg-background/95 backdrop-blur-xl border-border/40">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
                      <QrCode className="w-4 h-4 text-primary" /> Scan to Connect
                    </DialogTitle>
                  </DialogHeader>
                  <div className="aspect-square bg-secondary rounded-lg flex items-center justify-center border border-border/40 relative overflow-hidden">
                    <div className="absolute inset-0 grid-pattern opacity-50" />
                    <div className="text-center p-8 relative z-10 flex flex-col items-center">
                      <img 
                        src="/images/qr-code.png" 
                        alt="Scan to visit portfolio" 
                        className="w-64 h-64 object-contain mx-auto mb-6 rounded-xl shadow-2xl border-4 border-white dark:border-secondary" 
                        onError={(e) => {
                          e.currentTarget.src = 'https://placehold.co/400x400/eeeeee/999999?text=QR+Code';
                        }}
                      />
                      <span className="text-xs font-bold uppercase tracking-widest text-primary block">
                        Scan with your phone camera
                      </span>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <div className="mt-auto grid grid-cols-2 gap-3">
                <div className="flex flex-col items-center justify-center p-4 bg-secondary/30 rounded-lg border border-border/40">
                  <FileCheck className="w-5 h-5 text-primary mb-2" />
                  <p className="text-2xl font-black text-foreground">7</p>
                  <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest mt-1">SEUs Finished</p>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-secondary/30 rounded-lg border border-border/40">
                  <Cpu className="w-5 h-5 text-accent mb-2" />
                  <p className="text-2xl font-black text-foreground">5</p>
                  <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest mt-1">Quizzes Finished</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}