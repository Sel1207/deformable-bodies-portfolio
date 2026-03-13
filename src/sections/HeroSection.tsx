import { motion } from 'framer-motion';
import { BookOpen, User, Calendar, Hash, GraduationCap, ChevronDown } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const
    }
  }
};

export default function HeroSection() {
  const scrollToContent = () => {
    document.getElementById('seu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      <motion.div 
        className="relative max-w-5xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Student name badge */}
        <motion.div className="flex justify-center mb-6" variants={itemVariants}>
          <motion.span 
            className="technical-badge text-accent border-accent/30"
            whileHover={{ scale: 1.05, borderColor: 'rgba(245, 158, 11, 0.5)' }}
            transition={{ duration: 0.2 }}
          >
            <User className="w-4 h-4 mr-2" />
            Submitted by: Karl Philip C. Espino
          </motion.span>
        </motion.div>

        {/* Top badge */}
        <motion.div className="flex justify-center mb-8" variants={itemVariants}>
          <motion.span 
            className="technical-badge text-primary border-primary/30"
            whileHover={{ scale: 1.05, borderColor: 'rgba(59, 130, 246, 0.5)' }}
            transition={{ duration: 0.2 }}
          >
            <GraduationCap className="w-4 h-4 mr-2" />
            Course Portfolio
          </motion.span>
        </motion.div>
        
        {/* Main title */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <motion.span 
              className="text-primary inline-block"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              SEU #7:
            </motion.span>{' '}
            <motion.span 
              className="text-foreground inline-block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Digital Portfolio
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Fundamentals of Deformable Bodies
          </motion.p>
        </motion.div>
        
        {/* Course info cards */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
          variants={containerVariants}
        >
          <motion.div 
            className="engineering-card p-4 flex items-center space-x-3 group cursor-default"
            variants={cardVariants}
            whileHover={{ y: -5, boxShadow: '0 15px 30px -10px rgba(0, 0, 0, 0.15)' }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors"
              whileHover={{ rotate: 5 }}
            >
              <BookOpen className="w-5 h-5 text-primary" />
            </motion.div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Course</p>
              <p className="text-sm font-medium">MEC32-06</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="engineering-card p-4 flex items-center space-x-3 group cursor-default"
            variants={cardVariants}
            whileHover={{ y: -5, boxShadow: '0 15px 30px -10px rgba(0, 0, 0, 0.15)' }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors"
              whileHover={{ rotate: 5 }}
            >
              <User className="w-5 h-5 text-primary" />
            </motion.div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Instructor</p>
              <p className="text-sm font-medium">Engr. Rolando Quitalig</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="engineering-card p-4 flex items-center space-x-3 group cursor-default"
            variants={cardVariants}
            whileHover={{ y: -5, boxShadow: '0 15px 30px -10px rgba(0, 0, 0, 0.15)' }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors"
              whileHover={{ rotate: 5 }}
            >
              <Hash className="w-5 h-5 text-primary" />
            </motion.div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Class Code</p>
              <p className="text-sm font-medium">B1 | 2T2526</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="engineering-card p-4 flex items-center space-x-3 group cursor-default"
            variants={cardVariants}
            whileHover={{ y: -5, boxShadow: '0 15px 30px -10px rgba(0, 0, 0, 0.15)' }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors"
              whileHover={{ rotate: 5 }}
            >
              <Calendar className="w-5 h-5 text-primary" />
            </motion.div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Date</p>
              <p className="text-sm font-medium">March 13, 2026</p>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.button
            onClick={scrollToContent}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            whileHover={{ y: 5 }}
          >
            <span className="text-xs uppercase tracking-widest">Explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
