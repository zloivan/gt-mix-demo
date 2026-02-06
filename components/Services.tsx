
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES_LIST } from '../constants';
import { useTranslations } from '../contexts/LanguageContext';

const accentColors = ['#007AFF', '#FF3B30'];

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const Services: React.FC = () => {
  const { t } = useTranslations();
  
  return (
    <section className="py-24 px-6 md:px-12 bg-[#050505]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y:20 }}
          whileInView={{ opacity: 1, y:0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-inter-tight font-bold text-center text-white mb-4">{t('servicesTitle')}</h2>
          <p className="text-lg md:text-xl text-center text-[#C0C0C0] mb-16 max-w-2xl mx-auto">
            {t('servicesSubtitle')}
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {SERVICES_LIST.map((service, index) => {
            const Icon = service.icon;
            const color = accentColors[index % accentColors.length];
            return (
              <motion.div
                key={service.key}
                variants={cardVariants}
                className="bg-[#101010] p-8 rounded-lg border border-transparent hover:border-[var(--hover-color)] transition-colors duration-300 group"
                style={{ '--hover-color': color } as React.CSSProperties}
              >
                <Icon className="w-12 h-12 text-[var(--hover-color)] mb-6 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-xl font-bold text-white mb-2">{t(`services.${service.key}.title`)}</h3>
                <p className="text-[#C0C0C0] mb-4">{t(`services.${service.key}.description`)}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
