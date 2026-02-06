
import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../constants';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslations } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const { t } = useTranslations();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 bg-[#050505]/80 backdrop-blur-md"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-inter-tight text-xl md:text-2xl font-bold tracking-wider text-white">
          GT<span className="text-[#FF3B30]">MIX</span>
        </div>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <motion.a
            href={`tel:${CONTACT_INFO.phone}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FFCC00] text-black font-bold py-2 px-6 rounded-full text-sm md:text-base transition-colors duration-300 hover:bg-yellow-400 hidden sm:block"
          >
            {t('bookService')}
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
