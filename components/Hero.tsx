
import React, { Suspense, lazy } from 'react';
import { motion, Variants } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTranslations } from '../contexts/LanguageContext';

const Scene = lazy(() => import('./Scene'));

const Hero: React.FC = () => {
  const { t } = useTranslations();
  const title = "GT MIX";
  
  // Fix: Add Variants type for Framer Motion props.
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Fix: Add Variants type for Framer Motion props.
  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 z-0">
         <Suspense fallback={<div className="w-full h-full bg-[#050505]" />}>
            <Scene />
         </Suspense>
      </div>
      
      <motion.h1
        className="relative z-10 font-inter-tight font-black text-7xl sm:text-9xl md:text-[160px] lg:text-[200px] text-center text-transparent bg-clip-text bg-gradient-to-r from-[#007AFF] to-[#FF3B30] tracking-tighter uppercase pointer-events-none"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        aria-label={title}
      >
        {title.split("").map((char, index) => (
          <motion.span key={index} variants={letterVariants} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, ease: 'easeOut' }}
        className="relative z-10 text-lg md:text-xl text-[#C0C0C0] mt-4 text-center font-bold px-4"
      >
        {t('heroSubtitle')}
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 z-10"
      >
        <ChevronDown className="w-8 h-8 text-[#C0C0C0] animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;